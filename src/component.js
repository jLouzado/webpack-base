export default (text = 'Hello Webpack Dev') => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
