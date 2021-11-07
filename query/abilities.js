export const abilitiesQuery = () => {
  return JSON.stringify({
    query: `{
      constants {
        abilities {
          id,
          language {
            displayName
          },
        }
    
      }
    }
    `
  })
}