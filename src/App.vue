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
    <select v-model="selectedProjectId" :disabled="!job" class="form-select">
      <option :value="null">-</option>
      <option
        v-for="{ id, fields } in selectedJobProjects"
        :key="id"
        :value="id"
      >
        {{ fields.Name }}
      </option>
    </select>

    <div v-if="selectedProject">
      <h2 class="my-2">New Permit Type</h2>

      <div class="card card-body bg-light">
        {{ selectedProject.fields.TypeValue.join() }}
      </div>

      <h2 class="my-2">Description</h2>
      <div class="card card-body bg-light">
        {{ selectedProject.fields.DescriptionValue.join() }}
      </div>

      <h2 class="my-2">Examples</h2>
      <div class="card card-body bg-light">
        {{ selectedProject.fields.ExampleValue.join() }}
      </div>
    </div>
  </main>
</template>

<script>
import {
  jobTypes,
  fetchProjects,
  job,
  selectedJobProjects,
  selectedProjectId,
  selectedProject,
} from './lib'

export default {
  setup() {
    fetchProjects()

    return {
      jobTypes,
      job,
      selectedJobProjects,
      selectedProjectId,
      selectedProject,
    }
  },
}
</script>

<style lang="scss" src="./assets/main.scss"></style>
