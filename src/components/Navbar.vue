<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useDarkMode } from '../composables/useDarkMode';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const { isDark, toggleDarkMode } = useDarkMode();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMobileMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
      isScrolled
        ? 'bg-surface/90 dark:bg-ink/90 backdrop-blur-sm border-b border-faint dark:border-white/10'
        : 'bg-transparent'
    ]"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between h-14">
        <button
          class="font-mono text-sm text-ink dark:text-surface"
          @click="scrollToSection('hero')"
        >
          Anas Abdur
        </button>

        <div class="hidden md:flex items-center gap-8">
          <button
            v-for="item in ['about', 'work', 'contact']"
            :key="item"
            @click="scrollToSection(item === 'work' ? 'portfolio' : item)"
            class="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-ink dark:hover:text-surface transition-colors"
          >
            {{ item }}
          </button>

          <button
            @click="toggleDarkMode"
            class="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-ink dark:hover:text-surface transition-colors"
          >
            {{ isDark ? 'Light' : 'Dark' }}
          </button>
        </div>

        <div class="md:hidden flex items-center gap-3">
          <button
            @click="toggleDarkMode"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            class="font-mono text-xs text-muted"
          >
            {{ isDark ? 'LT' : 'DK' }}
          </button>

          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMobileMenuOpen"
            class="text-ink dark:text-surface"
          >
            <svg class="h-5 w-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="isMobileMenuOpen"
      class="md:hidden bg-surface dark:bg-ink border-t border-faint dark:border-white/10"
    >
      <div class="container-custom py-4 flex flex-col gap-3">
        <button
          v-for="item in ['about', 'work', 'contact']"
          :key="item"
          @click="scrollToSection(item === 'work' ? 'portfolio' : item)"
          class="font-mono text-xs uppercase tracking-[0.1em] text-muted hover:text-ink dark:hover:text-surface transition-colors text-left"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </nav>
</template>
