<script setup>
import { profile } from '../data/data';
import { useReveal } from '../composables/useReveal';

useReveal();
</script>

<template>
  <section id="about" class="section-padding bg-surface dark:bg-ink">
    <div class="container-custom">
      <p data-reveal class="label mb-6">About</p>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div class="md:col-span-7" data-reveal data-reveal-delay="80">
          <div class="space-y-6 text-base text-muted leading-relaxed">
            <p v-for="(paragraph, index) in profile.summary" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="md:col-span-5 md:pt-2">
          <ul class="space-y-6">
            <li
              v-for="(point, index) in profile.points"
              :key="index"
              data-reveal
              :data-reveal-delay="160 + index * 80"
            >
              <h3 class="text-sm font-medium text-ink dark:text-surface mb-1">
                {{ point.title }}
              </h3>
              <p class="text-sm text-muted">
                {{ point.description }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
