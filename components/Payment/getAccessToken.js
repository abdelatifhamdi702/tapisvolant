export const getAccessToken = async () => {
  const headersList = {
    authorization: 'Bearer ' + localStorage.getItem('refreshToken')
  }
  const res = await fetch(`http://localhost:3000/refresh/token`, {
    headers: headersList
  })

  const { data } = await res.json()

  return data.accessToken
}
