function addMatrices() {
    const a = getMatrixA();
    const b = getMatrixB();
    const result = [
      [a[0][0] + b[0][0], a[0][1] + b[0][1]],
      [a[1][0] + b[1][0], a[1][1] + b[1][1]],
    ];
    displayResult(result);
  }
  
  function subtractMatrices() {
    const a = getMatrixA();
    const b = getMatrixB();
    const result = [
      [a[0][0] - b[0][0], a[0][1] - b[0][1]],
      [a[1][0] - b[1][0], a[1][1] - b[1][1]],
    ];
    displayResult(result);
  }
  
  function multiplyMatrices() {
    const a = getMatrixA();
    const b = getMatrixB();
    const result = [
      [
        a[0][0] * b[0][0] + a[0][1] * b[1][0],
        a[0][0] * b[0][1] + a[0][1] * b[1][1],
      ],
      [
        a[1][0] * b[0][0] + a[1][1] * b[1][0],
        a[1][0] * b[0][1] + a[1][1] * b[1][1],
      ],
    ];
    displayResult(result);
  }
  
  function getMatrixA() {
    return [
      [parseFloat(document.getElementById('a00').value), parseFloat(document.getElementById('a01').value)],
      [parseFloat(document.getElementById('a10').value), parseFloat(document.getElementById('a11').value)],
    ];
  }
  
  function getMatrixB() {
    return [
      [parseFloat(document.getElementById('b00').value), parseFloat(document.getElementById('b01').value)],
      [parseFloat(document.getElementById('b10').value), parseFloat(document.getElementById('b11').value)],
    ];
  }
  
  function displayResult(result) {
    document.getElementById('result00').value = result[0][0];
    document.getElementById('result01').value = result[0][1];
    document.getElementById('result10').value = result[1][0];
    document.getElementById('result11').value = result[1][1];
  }
  
