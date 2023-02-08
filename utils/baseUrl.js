const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://detour-react.hibootstrap.com'
    : 'http://localhost:3001'

export default baseUrl
