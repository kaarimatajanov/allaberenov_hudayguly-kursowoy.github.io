document.addEventListener('DOMContentLoaded', function() {
    const processBtn = document.getElementById('process-btn');
    const matrixInput = document.getElementById('matrix-input');
    const resultDiv = document.getElementById('result');

    processBtn.addEventListener('click', function() {
        const matrixText = matrixInput.value.trim();

        const matrix = parseMatrix(matrixText);
        const processedMatrix = processMatrix(matrix);

        resultDiv.textContent = JSON.stringify(processedMatrix);
    });


    function parseMatrix(matrixText) {
        const rows = matrixText.split('\n');
        const matrix = [];
        rows.forEach(row => {
            const numbers = row.trim().split(/\s+/).map(Number);
            matrix.push(numbers);
        });
        return matrix;
    }

  
    function processMatrix(matrix) {
        const result = matrix.map(row => row.reduce((acc, val) => acc + val, 0));
        return result;
    }
});
