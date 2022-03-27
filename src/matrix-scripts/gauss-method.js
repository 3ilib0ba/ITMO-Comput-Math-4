function methodGauss(matrix) {
    let n = matrix.size;
    let m = matrix.matrix;//new Array(n); //Определение рабочего массива
    let l = new Array(n); //Массив ответов
    let i, j, k;    //Вспомогательные переменные

    Iteration(n);
    Answers();

    function Iteration(iter_item) { //Функция итеррация
        for (iter_item = 0; iter_item < (n - 1); iter_item++) { //Цикл выполнения итерраций
            if (m[iter_item][iter_item] === 0) SwapRows(iter_item); //Проверка на ноль
            for (j = n; j >= iter_item; j--) {
                m[iter_item][j] /= m[iter_item][iter_item]; //Делим строку i на а[i][i]
            }
            for (i = iter_item + 1; i < n; i++) { //Выполнение операций со строками
                for (j = n; j >= iter_item; j--) {
                    m[i][j] -= m[iter_item][j] * m[i][iter_item];
                }
            }
        }
    }

    function SwapRows(iter_item) { //Функция перемены строк
        for (i = iter_item + 1; i < n; i++) {
            if (m[i][iter_item] !== 0) {
                for (j = 0; j <= n; j++) {
                    k = m[i - 1][j];
                    m[i - 1][j] = m[i][j];
                    m[i][j] = k;
                }
            }
        }
    }

    function Answers() { //Функция поиска и вывода корней
        l[n - 1] = m[n - 1][n] / m[n - 1][n - 1];
        for (i = n - 2; i >= 0; i--) {
            k = 0;
            for (j = n - 1; j > i; j--) {
                k = (m[i][j] * l[j]) + k;
            }
            l[i] = m[i][n] - k;
        }
    }

    return l;
}