function iterativeSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

function recursiveSearch(arr, target, index = 0) {
  if (index >= arr.length) return -1;
  if (arr[index] === target) return index;
  return recursiveSearch(arr, target, index + 1);
}

function analisis() {
  const dataInput = document.getElementById("data").value;
  const targetInput = parseInt(document.getElementById("target").value);
  const resultDiv = document.getElementById("result");

  if (!dataInput || isNaN(targetInput)) {
    alert("Mohon masukkan data dan elemen yang dicari dengan benar!");
    return;
  }

  const arr = dataInput.split(",").map(x => parseInt(x.trim()));

  const startIter = performance.now();
  const idxIter = iterativeSearch(arr, targetInput);
  const timeIter = performance.now() - startIter;

  const startRec = performance.now();
  const idxRec = recursiveSearch(arr, targetInput);
  const timeRec = performance.now() - startRec;

  resultDiv.innerHTML = `
    <h3>Hasil Analisis</h3>
    <table>
      <tr><th>Metode</th><th>Indeks Ditemukan</th><th>Waktu Eksekusi (ms)</th></tr>
      <tr>
        <td>Iteratif</td>
        <td>${idxIter >= 0 ? `<span class='found'>${idxIter}</span>` : `<span class='not-found'>Tidak Ditemukan</span>`}</td>
        <td>${timeIter.toFixed(6)}</td>
      </tr>
      <tr>
        <td>Rekursif</td>
        <td>${idxRec >= 0 ? `<span class='found'>${idxRec}</span>` : `<span class='not-found'>Tidak Ditemukan</span>`}</td>
        <td>${timeRec.toFixed(6)}</td>
      </tr>
    </table>
  `;
}
