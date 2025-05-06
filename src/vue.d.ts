import type { AnimateOnViewOptions } from "./directives/animate-on-view";
import type { Positions } from "./directives/tooltip";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    vAnimateOnView: AnimateOnViewOptions;
    vTooltip: {
      value: string;
      arg?: Positions;
    };
  }
}
