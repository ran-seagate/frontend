import saveAs from 'file-saver';

export default function DownloadActivated(fileName) {
  fetch('backend/files/' + fileName, null, {responseType: 'blob'})
  .then(response => response.blob())
  .then(blob => saveAs(blob, fileName));

  return null
}
  