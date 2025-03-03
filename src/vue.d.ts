import type { AnimateOnViewOptions } from "./directives/animate-on-view";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    vAnimateOnView: AnimateOnViewOptions;
  }
}
