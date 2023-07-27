import { reactive } from "vue";
import airtable from "./airtable";

export const projects = reactive<{
  loading: boolean;
  data: Project[];
}>({
  loading: true,
  data: [],
});

export async function fetchProjects() {
  projects.loading = true;
  try {
    const { data } = await airtable.get("/tblsx1zVbfPkb0OqL", {
      params: {
        view: "AppView",
      },
    });

    projects.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    projects.loading = false;
  }
}
