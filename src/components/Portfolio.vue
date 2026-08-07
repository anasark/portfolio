<script setup>
import { ref, computed } from 'vue';
import { portfolio } from '../data/data';
import { useReveal } from '../composables/useReveal';

useReveal();

const selectedProject = ref(null);
const filter = ref('all');

const filteredProjects = computed(() => {
  if (filter.value === 'all') return portfolio;
  return portfolio.filter(p => p.type === filter.value);
});

const filterProjects = (type) => {
  filter.value = type;
};

const openModal = (project) => {
  selectedProject.value = project;
};

const closeModal = () => {
  selectedProject.value = null;
};

const getStatusLabel = (status) => {
  if (status === 'archived') return 'Archived';
  if (status === 'private') return 'Private';
  return 'Live';
};

const padIndex = (index) => {
  return String(index + 1).padStart(2, '0');
};
</script>

<template>
  <section id="portfolio" class="section-padding bg-surface dark:bg-ink">
    <div class="container-custom">
      <p data-reveal class="label mb-6">Selected Work</p>

      <div data-reveal data-reveal-delay="80" class="flex flex-wrap gap-4 mb-16">
        <button
          @click="filterProjects('all')"
          :class="[
            'font-mono text-xs uppercase tracking-[0.1em] transition-colors pb-1',
            filter === 'all'
              ? 'text-ink dark:text-surface border-b border-ink dark:border-surface'
              : 'text-muted hover:text-ink dark:hover:text-surface'
          ]"
        >
          All
        </button>
        <button
          v-for="type in ['Laravel', 'CodeIgniter', 'WordPress']"
          :key="type"
          @click="filterProjects(type)"
          :class="[
            'font-mono text-xs uppercase tracking-[0.1em] transition-colors pb-1',
            filter === type
              ? 'text-ink dark:text-surface border-b border-ink dark:border-surface'
              : 'text-muted hover:text-ink dark:hover:text-surface'
          ]"
        >
          {{ type }}
        </button>
      </div>

      <div class="space-y-0">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.name"
          data-reveal
          :data-reveal-delay="index * 60"
          class="group cursor-pointer border-t border-faint dark:border-white/10 py-6 md:py-8"
          @click="openModal(project)"
        >
          <div class="flex items-start gap-6 md:gap-10">
            <span class="font-mono text-2xl md:text-4xl text-faint dark:text-white/10 leading-none pt-1 shrink-0 w-12 md:w-16 group-hover:text-accent transition-colors">
              {{ padIndex(index) }}
            </span>

            <div class="flex-1 min-w-0">
              <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                <h3 class="text-base md:text-lg font-medium text-ink dark:text-surface group-hover:text-accent transition-colors">
                  {{ project.name }}
                </h3>
                <div class="flex items-center gap-3">
                  <span class="font-mono text-xs text-muted">
                    {{ project.framework }}
                  </span>
                  <span v-if="project.status !== 'live'" class="font-mono text-[0.6rem] uppercase tracking-wider text-muted">
                    {{ getStatusLabel(project.status) }}
                  </span>
                </div>
              </div>

              <p v-if="project.description && project.description.length > 0" class="text-sm text-muted mt-1 truncate max-w-xl">
                {{ project.description[0] }}
              </p>
            </div>

            <span class="hidden md:block text-muted group-hover:text-accent transition-colors shrink-0">
              &rarr;
            </span>
          </div>
        </article>

        <div class="border-t border-faint dark:border-white/10"></div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 dark:bg-ink/90"
      @click.self="closeModal"
    >
      <div class="bg-surface dark:bg-neutral-900 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-[4px]">
        <div class="sticky top-0 bg-surface dark:bg-neutral-900 border-b border-faint dark:border-white/10 px-6 py-4 flex items-center justify-between z-10">
          <div class="flex items-baseline gap-3">
            <h3 class="text-base font-medium text-ink dark:text-surface">
              {{ selectedProject.name }}
            </h3>
            <span class="font-mono text-xs text-muted">
              {{ getStatusLabel(selectedProject.status) }}
            </span>
          </div>
          <button
            @click="closeModal"
            class="text-muted hover:text-ink dark:hover:text-surface transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-6">
          <!-- Images -->
          <div v-if="selectedProject.images && selectedProject.images.length > 0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                v-for="(image, idx) in selectedProject.images"
                :key="idx"
                :src="image"
                :alt="`${selectedProject.name} ${idx + 1}`"
                class="w-full rounded-[2px]"
              />
            </div>
          </div>

          <!-- Info -->
          <div class="space-y-3">
            <div class="flex flex-wrap gap-4">
              <span class="font-mono text-xs text-muted">
                Type: {{ selectedProject.project }}
              </span>
              <span class="font-mono text-xs text-muted">
                Stack: {{ selectedProject.framework }}
              </span>
            </div>

            <div v-if="selectedProject.status === 'live' && selectedProject.url">
              <a
                :href="selectedProject.url"
                target="_blank"
                class="inline-block font-mono text-xs uppercase tracking-[0.1em] text-accent border-b border-accent pb-0.5 hover:text-ink dark:hover:text-surface hover:border-ink dark:hover:border-surface transition-colors"
              >
                Visit site &rarr;
              </a>
            </div>
            <p v-else-if="selectedProject.status !== 'live'" class="font-mono text-xs text-muted">
              This project is {{ selectedProject.status }} and may not be accessible.
            </p>
          </div>

          <!-- Description -->
          <div v-if="selectedProject.description && selectedProject.description.filter(d => d.trim()).length > 0">
            <p class="label mb-3">Contributions</p>
            <ul class="space-y-1.5">
              <li
                v-for="(desc, idx) in selectedProject.description.filter(d => d.trim() !== '')"
                :key="idx"
                class="text-sm text-muted"
              >
                {{ desc.replace(/^-\s*/, '') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
