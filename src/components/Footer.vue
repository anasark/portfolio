<script setup>
import { profile } from '../data/data';
import { useReveal } from '../composables/useReveal';

useReveal();
</script>

<template>
  <section id="contact" class="section-padding bg-surface dark:bg-ink">
    <div class="container-custom">
      <div class="max-w-xl">
        <p data-reveal class="label mb-6">Contact</p>

        <h2
          data-reveal
          data-reveal-delay="80"
          class="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-ink dark:text-surface mb-6"
        >
          Let's work together
        </h2>

        <p data-reveal data-reveal-delay="160" class="text-base text-muted leading-relaxed mb-8">
          Available for freelance projects and contract work. Reach out and let's talk.
        </p>

        <div data-reveal data-reveal-delay="240" class="space-y-3">
          <a
            :href="`mailto:${profile.email}`"
            class="inline-block font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-1 hover:text-ink dark:hover:text-surface hover:border-ink dark:hover:border-surface transition-colors"
          >
            {{ profile.email }}
          </a>

          <p class="text-sm text-muted">
            {{ profile.location }}
          </p>

          <div class="flex gap-4 pt-2">
            <a
              :href="`https://github.com/${profile.github}`"
              target="_blank"
              class="font-mono text-xs text-muted hover:text-ink dark:hover:text-surface transition-colors"
            >
              GitHub
            </a>
            <a
              :href="profile.linkedin.link"
              target="_blank"
              class="font-mono text-xs text-muted hover:text-ink dark:hover:text-surface transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="py-8 bg-surface dark:bg-ink border-t border-faint dark:border-white/10">
    <div class="container-custom">
      <p class="text-center font-mono text-xs text-muted">
        &copy; {{ new Date().getFullYear() }} Anas Abdur
      </p>
    </div>
  </footer>
</template>
