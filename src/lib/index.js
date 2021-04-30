import { ref, computed, watch } from 'vue'
import { projects, constants } from './data'

export const jobTypes = ['Commercial', 'Residential']
export const job = ref(null)

export const selectedJobProjects = computed(
  () => projects.filter((p) => p.job == job.value) || []
)

export const selectedProjectIndex = ref(null)

export const selectedProject = computed(() => {
  if (!selectedProjectIndex.value) return null

  const project = selectedJobProjects.value[selectedProjectIndex.value]

  return {
    ...project,
    description: constants.descriptions.find(
      (x) => x.id == project.description_id
    ).value,
    type: constants.types.find((x) => x.id == project.type_id).value,
    example: constants.examples.find((x) => x.id == project.example_id).value,
  }
})

watch(job, () => (selectedProjectIndex.value = null))
