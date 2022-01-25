
export default function DeleteActivated(fileName) {
  fetch('http://backend/files/' + fileName, {method: "DELETE"})
  .then(response => response.json())
  .then(response => console.log(response))
  return null
}
  