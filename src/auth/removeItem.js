const removeItem = () => {
  localStorage.removeItem('uid')
  localStorage.removeItem('access-token')
  localStorage.removeItem('client')
  localStorage.removeItem('name')
}

export default removeItem
