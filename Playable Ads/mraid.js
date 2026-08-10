// Local browser fallback: playable bundles feature-detect MRAID and use window.open when unavailable.
// Keep audio activation inside the playable document. Touch input is not guaranteed to
// activate audio until the gesture ends, so retry blocked playback on both ends of a gesture.
(() => {
  "use strict";

  const audioContexts = new Set();
  const blockedMedia = new Set();
  const mediaPlayVersion = new WeakMap();

  function trackAudioContexts(constructorName) {
    const NativeAudioContext = window[constructorName];
    if (typeof NativeAudioContext !== "function") return;

    function TrackedAudioContext(...args) {
      const context = Reflect.construct(NativeAudioContext, args, NativeAudioContext);
      audioContexts.add(context);
      return context;
    }

    Object.setPrototypeOf(TrackedAudioContext, NativeAudioContext);
    TrackedAudioContext.prototype = NativeAudioContext.prototype;
    window[constructorName] = TrackedAudioContext;
  }

  trackAudioContexts("AudioContext");
  trackAudioContexts("webkitAudioContext");

  const mediaPrototype = window.HTMLMediaElement?.prototype;
  const nativePlay = mediaPrototype?.play;
  const nativePause = mediaPrototype?.pause;

  function nextPlayVersion(media) {
    const version = (mediaPlayVersion.get(media) ?? 0) + 1;
    mediaPlayVersion.set(media, version);
    return version;
  }

  function rememberBlockedPlay(media, version, error) {
    if (
      mediaPlayVersion.get(media) === version &&
      media.paused &&
      error?.name === "NotAllowedError"
    ) {
      blockedMedia.add(media);
    }
  }

  if (mediaPrototype && nativePlay && nativePause) {
    mediaPrototype.play = function (...args) {
      const version = nextPlayVersion(this);
      let attempt;

      try {
        attempt = nativePlay.apply(this, args);
      } catch (error) {
        rememberBlockedPlay(this, version, error);
        throw error;
      }

      if (attempt && typeof attempt.then === "function") {
        attempt.then(
          () => blockedMedia.delete(this),
          (error) => rememberBlockedPlay(this, version, error),
        );
      }

      return attempt;
    };

    mediaPrototype.pause = function (...args) {
      nextPlayVersion(this);
      blockedMedia.delete(this);
      return nativePause.apply(this, args);
    };
  }

  function retryBlockedAudio() {
    for (const context of audioContexts) {
      if (context.state !== "suspended" && context.state !== "interrupted") continue;

      try {
        const attempt = context.resume();
        attempt?.catch?.(() => {});
      } catch {
        // A later activation event can retry the context.
      }
    }

    for (const media of [...blockedMedia]) {
      blockedMedia.delete(media);
      try {
        media.play()?.catch?.(() => {});
      } catch {
        // The patched play method retains NotAllowedError failures for another retry.
      }
    }
  }

  const activationEvents = [
    "pointerdown",
    "pointerup",
    "touchstart",
    "touchend",
    "mousedown",
    "mouseup",
    "click",
    "keydown",
  ];

  for (const eventName of activationEvents) {
    window.addEventListener(eventName, retryBlockedAudio, {
      capture: true,
      passive: true,
    });
  }
})();
