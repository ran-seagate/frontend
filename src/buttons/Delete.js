
export default function DeleteActivated(fileName) {
  fetch('http://localhost:8080/files/' + fileName, {method: "DELETE"})
  .then(response => response.json())
  .then(response => console.log(response))
  return null
}
  