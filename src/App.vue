<template>
  <main class="container">
    <h2 class="my-2">Project Type</h2>

    <div v-for="j in jobTypes" :key="j" class="form-check form-check-inline">
      <input
        v-model="job"
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        :id="`inlineRadio-${j}`"
        :value="j"
      />
      <label class="form-check-label" :for="`inlineRadio-${j}`">{{ j }}</label>
    </div>

    <h2 class="my-2">Project</h2>
    <select v-model="selectedProjectIndex" :disabled="!job" class="form-select">
      <option :value="null">-</option>
      <option
        v-for="(project, i) in selectedJobProjects.sort((a, b) =>
          a.name > b.name ? 1 : -1
        )"
        :key="i"
        :value="i"
      >
        {{ project.name }}
      </option>
    </select>

    <div v-if="selectedProject">
      <h2 class="my-2">New Permit Type</h2>

      <div class="card card-body bg-light">
        {{ selectedProject.type }}
      </div>

      <h2 class="my-2">Description</h2>
      <div class="card card-body bg-light">
        {{ selectedProject.description }}
      </div>

      <h2 class="my-2">Examples</h2>
      <div class="card card-body bg-light">
        {{ selectedProject.example }}
      </div>
    </div>
  </main>
</template>

<script>
import {
  jobTypes,
  job,
  selectedJobProjects,
  selectedProjectIndex,
  selectedProject,
} from './lib'

export default {
  setup() {
    return {
      jobTypes,
      job,
      selectedJobProjects,
      selectedProjectIndex,
      selectedProject,
    }
  },
}
</script>

<style lang="scss" src="./assets/main.scss"></style>
