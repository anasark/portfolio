<script setup>
import { resume } from '../data/data';
import { useReveal } from '../composables/useReveal';

useReveal();
</script>

<template>
  <section id="experience" class="section-padding bg-surface dark:bg-ink">
    <div class="container-custom">
      <p data-reveal class="label mb-6">Experience</p>

      <div class="max-w-3xl">
        <div class="space-y-16">
          <article
            v-for="(exp, index) in resume.experience"
            :key="index"
            data-reveal
            :data-reveal-delay="index * 80"
          >
            <div class="flex flex-col md:flex-row md:items-baseline md:gap-8 mb-3">
              <span class="font-mono text-xs text-muted shrink-0 md:w-44">
                {{ exp.date }}
              </span>
              <div>
                <h3 class="text-base font-medium text-ink dark:text-surface">
                  {{ exp.position }}
                </h3>
                <p class="text-sm text-muted">
                  {{ exp.company }} &middot; {{ exp.location }}
                </p>
              </div>
            </div>

            <div class="md:pl-52">
              <ul class="space-y-1">
                <li
                  v-for="(desc, i) in exp.description"
                  :key="i"
                  class="text-sm text-muted"
                >
                  {{ desc }}
                </li>
              </ul>
            </div>
          </article>
        </div>

        <div class="mt-20 pt-16 border-t border-faint dark:border-white/10">
          <p data-reveal class="label mb-6">Education</p>

          <div
            v-for="(edu, index) in resume.education"
            :key="index"
            data-reveal
            :data-reveal-delay="80"
          >
            <div class="flex flex-col md:flex-row md:items-baseline md:gap-8">
              <span class="font-mono text-xs text-muted shrink-0 md:w-44">
                {{ edu.date }}
              </span>
              <div>
                <h3 class="text-base font-medium text-ink dark:text-surface">
                  {{ edu.level }}
                </h3>
                <p class="text-sm text-muted">
                  {{ edu.school }} &middot; {{ edu.location }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
