<script setup lang="ts">
import { projects, fetchProjects } from "./lib/projects";
import Projects from "./components/Projects.vue";

fetchProjects();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid";
</script>

<template>
  <div v-if="projects.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <Projects />
  </article>
</template>
