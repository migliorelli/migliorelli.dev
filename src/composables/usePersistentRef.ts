import { ref, watch } from "vue";

export default function usePersistentRef<T>(key: string, defaultValue?: T) {
  const storedValue = localStorage.getItem(key);
  const data = ref<T | null>(
    storedValue ? JSON.parse(storedValue) : defaultValue || null,
  );

  watch(
    data,
    (newValue) => {
      if (newValue === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    },
    { deep: true },
  );

  return data;
}
