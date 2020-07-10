**1- Usando o operador &&** \
JavaScript possui um operador lógico `&&`, o qual recebe dois valores e retorna `true` se ambos os valores são verdadeiros, e retorna `false` se algum dos valores não o for.

Considerando isso, crie uma função chamada `compareTrue` que, ao receber dois booleanos `a` e `b`:

- Retorne `true` se ambos os valores são verdadeiros;
- Retorne `false` se um ou ambos os parâmetros forem falsos.

Faça a função utilizando o operador `&&`.

**2- Área do triângulo** \
Escreva uma função com o nome `calcArea` que receba um valor de base (chamado `b`) e outro de altura (chamado `h`) de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

**3- Dividindo a frase** \
Escreva uma função com o nome `splitSentence`, a qual receberá uma string e retornará uma array de strings.

Exemplo: se a função receber a string `"go Trybe"`, o retorno deverá ser `["go", "Trybe"]`.

**4- Concatenação de strings** \
Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `ÚLTIMO NOME, PRIMEIRO NOME`, independente do tamanho da string.

Isso quer dizer que, caso o parâmetro passado para `concatName` seja a Array ["Lucas", "Cassiano", "Ferraz", "Paolillo"], a função deverá retornar `"Paolillo", "Lucas"`.

**5- Pontos no futebol** \
Escreva uma função com o nome `FootPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `v`), o número de derrotas (esse parâmetro deverá se chamar `d`) e o número de empates (esse parâmetro deverá se chamar `e`) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

**6- Repetição do maior número** \
Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne  a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.


**7- Caça ao rato** \
Imagine que existem dois gatos, os quais chamaremos de `A` e `B`, e que ambos estão atrás de um rato chamado `C`. Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber uma array contendo a posição de `C`, `A` e `B`, **nessa ordem**, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo: caso o gato `B` esteja a 2 unidades de distância do rato, e `A` esteja a 3 unidades, sua função deverá retornar `B`.

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`.

**8- FizzBuzz** \
Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

- Para cada número da Array que seja divisível por 3, apresente uma string `"fizz"`;
- Para cada número da Array que seja divisível por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 ou 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.

**9- Equação de segundo grau** \
Crie uma função chamada `"QuadEquation"` que receba três parâmetros `a`, `b` e `c` e retorne o resultado de uma equação de segundo grau - a ser calculada no formato `ax²+bx+c=0`. Lembrando que você precisará fazer cálculos distintos dependendo do valor de `delta`:

- Caso `delta` seja negativo, retorne a string `"não existem resultados reais para essa equação"`;
- Caso `delta` seja igual a 0, retorne somente um resultado;
- Caso `delta` seja maior que 0, retorne um array com os dois resultados;

**10- Codifique e Decodifique** \
Crie duas funções: a primeira deverá se chamar `encode` e, ao receber uma string como parâmetro, deverá trocar todas as letras minúsculas por números, de acordo com o formato a seguir:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

Ou seja, caso o parâmetro de `encode` seja `"hi there!"`, o retorno deverá ser `"h3 th2r2!"`.

A segunda função deverá se chamar `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, o retorno deverá ser `"hi there!"`. )
