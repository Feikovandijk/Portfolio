declare global {
  interface Window {
    umami?: {
      /**
       * Tracks a page view or a custom event.
       * - If called with no arguments, tracks the current page view.
       * - If called with a string that is a URL, tracks that URL as a page view.
       * - If called with an event name (string) and event data (object), tracks a custom event.
       */
      track: (nameOrUrl?: string, data?: object) => void;
    };
  }
}

// This empty export makes the file a module, which is required for global declarations to be picked up correctly.
export {}; 