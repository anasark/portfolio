<script setup>
import { resume } from '../data/data';
import { useReveal } from '../composables/useReveal';

useReveal();
</script>

<template>
  <section id="skills" class="section-padding bg-surface dark:bg-ink">
    <div class="container-custom">
      <p data-reveal class="label mb-6">Skills</p>

      <div class="max-w-3xl">
        <div class="space-y-10">
          <div
            v-for="(value, key) in resume.skills"
            :key="key"
            data-reveal
            class="flex flex-col md:flex-row md:gap-8"
          >
            <h3 class="text-sm font-medium text-ink dark:text-surface shrink-0 md:w-44 mb-1 md:mb-0">
              {{ key }}
            </h3>
            <p class="text-sm text-muted">
              {{ value }}
            </p>
          </div>
        </div>

        <div class="mt-16 pt-16 border-t border-faint dark:border-white/10">
          <p data-reveal class="label mb-8">Technologies & Tools</p>

          <div data-reveal data-reveal-delay="80" class="flex flex-wrap gap-x-4 gap-y-2">
            <span
              v-for="(tech, index) in resume.knowledge"
              :key="index"
              class="text-sm text-muted"
            >
              {{ tech }}<span v-if="index < resume.knowledge.length - 1" class="text-faint dark:text-white/20 ml-4">/</span>
            </span>
          </div>
        </div>

        <div class="mt-16 pt-16 border-t border-faint dark:border-white/10">
          <p data-reveal class="label mb-8">Core Languages</p>

          <div data-reveal data-reveal-delay="80" class="flex flex-wrap gap-3">
            <span
              v-for="(lang, index) in resume.skill"
              :key="index"
              class="font-mono text-xs text-ink dark:text-surface border border-faint dark:border-white/10 px-3 py-1.5 rounded-[2px]"
            >
              {{ lang }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
