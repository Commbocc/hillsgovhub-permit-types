const { createWriteStream } = require('fs')
const axios = require('axios')

const airtable = axios.create({
  baseURL: 'https://api.airtable.com/v0/appFcabQuVjmhCKD2',
  // commbocc@gmail.com account read only api key
  headers: { Authorization: `Bearer key1XrFuYhG1GKHvu` },
})

async function fetchProjects() {
  try {
    const { data } = await airtable.get(`/projects`, {
      params: {
        // filterByFormula: ``,
        view: 'AppView',
      },
      responseType: 'stream',
    })

    data.pipe(createWriteStream('./public/projects.json'))
  } catch (error) {
    // error
    // 401 unauth
    // 422 (Unprocessable Entity)
    console.warn(error)
  } finally {
    // loading = false
    console.log('done')
  }
}

//
fetchProjects()
