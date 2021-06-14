<template>
  <main class="container my-5">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <img :src="Logo" alt="HillsGovHub" class="img-fluid" />
      </div>

      <div class="col-12 col-md-6 bg-primary text-white p-3 my-3">
        Use the tool below to determine what type of permit application must be
        submitted for your project using our new online permitting system.
      </div>
    </div>

    <div class="card">
      <div class="card-header bg-primary text-white fw-bold text-center">
        Permit Types by Project
      </div>
      <div class="card-body">
        <div class="text-center lead">
          <strong class="mx-2">Project Type</strong>

          <div
            v-for="j in jobTypes"
            :key="j"
            class="form-check form-check-inline"
          >
            <input
              v-model="job"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              :id="`inlineRadio-${j}`"
              :value="j"
            />
            <label class="form-check-label" :for="`inlineRadio-${j}`">{{
              j
            }}</label>
          </div>
        </div>

        <!--  -->
        <div class="row my-3">
          <div class="col">
            <div class="card-header bg-info text-primary fw-bold text-center">
              Project
            </div>
            <div class="">
              <select
                v-model="selectedProjectId"
                :disabled="!job"
                class="form-select form-select-lg"
              >
                <option :value="null">-</option>
                <option
                  v-for="{ id, fields } in selectedJobProjects"
                  :key="id"
                  :value="id"
                >
                  {{ fields.Name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="card-header bg-info text-primary fw-bold text-center">
              New Permit Type
            </div>
            <div
              v-if="selectedProject"
              class="card-body bg-light fw-bold text-center"
            >
              {{ selectedProject.fields.TypeValue.join() }}
            </div>
          </div>
        </div>

        <div v-if="selectedProject">
          <div class="card-header bg-info text-primary fw-bold text-center">
            Description
          </div>

          <div class="card-body bg-light">
            <p>
              {{ selectedProject.fields.DescriptionValue.join() }}
            </p>

            <p class="fst-italic">
              Examples:
              {{ selectedProject.fields.ExampleValue.join() }}
            </p>
          </div>
        </div>

        <!--  -->
      </div>
    </div>

    <p class="small text-muted text-center">
      To find all necessary submittal items, please view the
      <a
        href="https://www.hillsboroughcounty.org/en/businesses/permits-and-records/permit-applications-and-forms/checklists"
        >permit requirements</a
      >
      for your selected permit.
    </p>
  </main>
</template>

<script>
import Logo from './assets/HillsGovHub.png'

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
      Logo,
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
