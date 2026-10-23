<script setup>
import { profile } from '../data/data';
import { useReveal } from '../composables/useReveal';

useReveal();

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex flex-col justify-center bg-surface dark:bg-ink pt-14"
  >
    <div class="container-custom">
      <div class="max-w-3xl">
        <p
          data-reveal
          class="label mb-6"
        >
          Full Stack Developer
        </p>

        <h1
          data-reveal
          data-reveal-delay="80"
          class="text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[0.95] tracking-tight text-ink dark:text-surface mb-8"
        >
          {{ profile.name }}
        </h1>

        <div class="w-12 h-px bg-ink/20 dark:bg-surface/20 mb-8" data-reveal data-reveal-delay="160"></div>

        <p
          data-reveal
          data-reveal-delay="240"
          class="text-base text-muted leading-relaxed max-w-xl mb-10"
        >
          {{ profile.summary[0] }}
        </p>

        <div data-reveal data-reveal-delay="320" class="flex gap-6">
          <a
            :href="`mailto:${profile.email}`"
            class="inline-block font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-1 hover:text-ink dark:hover:text-surface hover:border-ink dark:hover:border-surface transition-colors"
          >
            Get in touch
          </a>
          <a
            :href="profile.resume"
            target="_blank"
            class="inline-block font-mono text-xs uppercase tracking-[0.1em] text-muted border-b border-muted pb-1 hover:text-ink dark:hover:text-surface hover:border-ink dark:hover:border-surface transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
