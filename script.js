//Initial Data
let matrix = [[0,0,0], [0,0,0], [0,0,0]];

//Função para preencher a matriz com os valores dos usuários
function fillMatrix(matrix){
    for(let i = 0; i<= matrix.length -1; i++){
        for(let z = 0; z<= matrix[i].length - 1; z++){
            matrix[i][z] = parseInt(document.querySelector(`input[data-item="[${i + 1}][${z + 1}]"]`).value);
        }
    }
    console.log(matrix)   
    let result = determinante(matrix); 
    document.querySelector('.showResults').innerHTML = result;
};
function clearMatrix(matrix){
    for(let i = 0; i<= matrix.length -1; i++){
        for(let z = 0; z<= matrix[i].length - 1; z++){
            matrix[i][z] = 0;
            document.querySelector(`input[data-item="[${i + 1}][${z + 1}]"]`).value = 0;
        }
    }
    let result = "----";
    document.querySelector('.showResults').innerHTML = result;
}


//Funções para calculo do determinante 
function determinante(a) {
    let ordem = a.length;
    if (ordem === 1) {
        return a[0][0];
    }if (ordem === 2) {
        return a[0][0] * a[1][1] - a[0][1] * a[1][0];
    }
    let det = 0;
    for (let j = 0; j < ordem; j++) {
        det += a[0][j] * cofator(a, 0, j);
    }
    return det;
}

function cofator(a, linha, coluna) {
    var sub_matriz = [],
        ordem = a.length,
        m = 0;
    for (let i = 1; i < ordem; i++) {
        sub_matriz[m] = [];
        for (let j = 0; j < ordem; j++) {
            if (j !== coluna) {
                sub_matriz[m].push(a[i][j]);
            }
        }
        m++;
    }
    //return Math.pow(-1, linha + coluna) * determinante(sub_matriz);
    return (coluna % 2 ? -1 : 1) * determinante(sub_matriz);
}

