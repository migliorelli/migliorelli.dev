import { type Directive } from "vue";

export interface AnimateOnViewOptions {
  threshold?: number;
  enter?: string;
  exit?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
}

const animateOnView: Directive<
  HTMLElement,
  AnimateOnViewOptions | undefined,
  string,
  string
> = {
  mounted(el, binding) {
    const options: AnimateOnViewOptions = {
      threshold: binding.value?.threshold ?? 0.2,
      enter:
        binding.value?.enter ??
        "transition translate-y-0 opacity-100",
      exit:
        binding.value?.exit ?? "transition translate-y-12 opacity-0",
      once: binding.value?.once !== false,
      delay: binding.value?.delay || 0,
      duration: binding.value?.duration || 1000,
    };

    el.classList.add(...(options.exit?.split(" ") || []));

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${options.delay}ms`;
            el.style.transitionDuration = `${options.duration}ms`;
            options.exit?.split(" ").forEach((cls) => el.classList.remove(cls));
            options.enter?.split(" ").forEach((cls) => el.classList.add(cls));

            if (options.once) {
              observer.disconnect();
            }
          } else if (!options.once) {
            options.enter
              ?.split(" ")
              .forEach((cls) => el.classList.remove(cls));
            options.exit?.split(" ").forEach((cls) => el.classList.add(cls));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: options.threshold,
      },
    );

    observer.observe(el);
    el._animateObserver = observer;
  },

  unmounted(el: HTMLElement) {
    if (el._animateObserver) {
      el._animateObserver.disconnect();
    }
  },
};

export default animateOnView;

declare global {
  interface HTMLElement {
    _animateObserver?: IntersectionObserver;
  }
}
