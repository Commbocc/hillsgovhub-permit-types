import { ref, computed, watch, reactive } from 'vue'
import axios from 'axios'

export const jobTypes = ['Commercial', 'Residential']
export const job = ref(null)

export const projects = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchProjects() {
  projects.loading = true

  try {
    const { data } = await axios.get('./projects.json')
    projects.data = data.records
  } catch (error) {
  } finally {
    projects.loading = false
  }
}

export const selectedJobProjects = computed(
  () => projects.data.filter((p) => p.fields.JobType == job.value) || []
)

export const selectedProjectId = ref(null)

export const selectedProject = computed(() => {
  if (!selectedProjectId.value) return null

  return selectedJobProjects.value.find((p) => p.id == selectedProjectId.value)
})

watch(job, () => (selectedProjectId.value = null))
