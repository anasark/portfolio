import { ref, watch, onMounted } from 'vue';

const isDark = ref(false);

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    updateDarkMode();
  };

  const updateDarkMode = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  const initDarkMode = () => {
    // Check localStorage first, then system preference
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true;
    } else {
      isDark.value = false;
    }
    updateDarkMode();
  };

  return {
    isDark,
    toggleDarkMode,
    initDarkMode
  };
}
