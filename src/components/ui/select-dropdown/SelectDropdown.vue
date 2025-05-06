<template>
  <div class="relative inline-block text-left select-none" ref="dropdownRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref, useTemplateRef } from "vue";

export interface DropdownOption {
  key: string;
  value: string;
}

interface Emits {
  (event: "change", value: string): void;
}

const emit = defineEmits<Emits>();

const open = ref(false);
const dropdownRef = useTemplateRef("dropdownRef");

const handleItemClick = (value: string) => {
  open.value = false;
  emit("change", value);
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

provide("select-dropdown-open", open);
provide("handle-select-dropdown-item-click", handleItemClick);
</script>
