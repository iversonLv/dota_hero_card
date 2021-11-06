export const heroesQuery = () => {
  return JSON.stringify({
    query: `{
      constants {
        heroes {
          id
          shortName,
          stats {
            complexity,
            attackType,
            primaryAttribute
          }
        }
      }
    }`
  })
}