<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

export interface Option {
  key: string;
  value: string;
}

interface Props {
  options: Option[];
  buttonClass?: string;
  selectedKey?: string;
  placeholder?: string;
}

interface Emits {
  (event: "change", newOption: Option): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();

const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const handleClick = (option: Option) => {
  open.value = false;
  emit("change", option);
};

const closeDropdown = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <button
      type="button"
      :class="`flex cursor-pointer items-center justify-between rounded-lg p-2 text-white hover:bg-slate-200/20 ${buttonClass}`"
      @click.stop="open = !open"
      aria-haspopup="true"
      :aria-expanded="open"
    >
      <slot></slot>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="ring-opacity-5 absolute right-0 z-10 mt-2 min-w-34 origin-top-right divide-y divide-gray-600 rounded-md bg-slate-200/20 ring-1 shadow-lg ring-black backdrop-blur-md focus:outline-none"
        role="menu"
        aria-orientation="vertical"
      >
        <div class="py-1" role="none">
          <button
            v-for="option in options"
            :key="option.key"
            @click="handleClick(option)"
            class="group flex w-full cursor-pointer items-center px-4 py-2 text-left text-sm text-white transition-colors duration-150 hover:bg-slate-200/20"
            role="menuitem"
          >
            {{ option.value }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
