export const rolesQuery = () => {
  return JSON.stringify({
    query: `{
      constants {
        roles {
          roleId
          name
          langKey
        } 
      }
    }
    `
  })
}