export const gameVersionsQuery = () => {
  return JSON.stringify({
    query: `
    {
      constants {
        gameVersions {
          id
          name
          asOfDateTime
        }
      }
    }
    `
  })
}