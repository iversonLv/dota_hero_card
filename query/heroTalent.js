export const heroTalentQuery = (id) => {
  return JSON.stringify({
    query: `{
      constants {
        ability(id: ${id}) {
          language {
            displayName
          },
        }
    
      }
    }
    `
  })
}