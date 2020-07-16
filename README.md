# Boas vindas ao repositório do Projeto PLayground Functions!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #VQV 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma `branch` específica e um _Pull Request_ para colocar seus códigos.

### 🗒ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-0x-project-playground-functions.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-project-playground-functions`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-project-playground-functions`

3. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

4. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-project-playground-functions`

5. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-playground-functions/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-playground-functions/pulls) e confira que o seu _Pull Request_ está criado
---

# Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Este _Pull Request_ deverá conter os arquivos `.js` com suas funções implementadas.

## Prazo para entrega

O Prazo para entrega é de **7 dias corridos** após o último dia de projeto.

**Exemplo:** Se o último dia de projeto aconteceu na **quarta-feira, dia 17 de junho**, seu prazo final de entrega será na **quarta-feira 24 de junho** às **14 horas**.

Vale ressaltar que os projetos podem ter mais de um dia de duração, por isso o prazo de **7 dias** é contado à partir do último dia de projeto.

## ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## Requisitos do projeto

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Não altere o nome de nenhuma função. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀Observações importantes:

* Para verificar se a sua função foi criada corretamente você pode utilizar o `code runner` do vscode.

---

**1- Usando o operador &&**
-
JavaScript possui um operador lógico `&&`, o qual recebe dois valores e retorna `true` se ambos os valores são verdadeiros, e retorna `false` se algum dos valores não o for.

Considerando isso, crie uma função chamada `compareTrue` que, ao receber dois booleanos `a` e `b`:

- Retorne `true` se ambos os valores são verdadeiros;
- Retorne `false` se um ou ambos os parâmetros forem falsos.

Faça a função utilizando o operador `&&`.

**2- Área do triângulo** 
-
Escreva uma função com o nome `calcArea` que receba um valor de base (chamado `b`) e outro de altura (chamado `h`) de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

**3- Dividindo a frase**
-
Escreva uma função com o nome `splitSentence`, a qual receberá uma string e retornará uma array de strings.

Exemplo: se a função receber a string `"go Trybe"`, o retorno deverá ser `['go', 'Trybe']`.

**4- Concatenação de strings**
-
Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `'ÚLTIMO NOME', 'PRIMEIRO NOME'`, independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para `concatName` seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar `Paolillo, Lucas`.

**5- Pontos no futebol**
-
Escreva uma função com o nome `footPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `v`), o número de derrotas (esse parâmetro deverá se chamar `d`) e o número de empates (esse parâmetro deverá se chamar `e`) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

**6- Repetição do maior número**
-
Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne  a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.

**7- Caça ao rato**
-
Imagine que existem dois gatos, os quais chamaremos de `A` e `B`, e que ambos estão atrás de um rato chamado `C`. Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber uma array contendo a posição de `C`, `A` e `B`, **nessa ordem**, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo: caso o gato `B` esteja a 2 unidades de distância do rato, e `A` esteja a 3 unidades, sua função deverá retornar `B`.

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`.

**8- FizzBuzz**
-
Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

- Para cada número da Array que seja divisível por 3, apresente uma string `"fizz"`;
- Para cada número da Array que seja divisível por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 ou 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`.

**9- Equação de segundo grau**
-
Crie uma função chamada `"quadEquation"` que receba três parâmetros `a`, `b` e `c` e retorne o resultado de uma equação de segundo grau - a ser calculada no formato `ax²+bx+c=0`. Lembrando que você precisará fazer cálculos distintos dependendo do valor de `delta`:

- Caso `delta` seja negativo, retorne a string `"não existem resultados reais para essa equação"`;
- Caso `delta` seja igual a 0, retorne somente um resultado;
- Caso `delta` seja maior que 0, retorne um array com os dois resultados;

**10- Codifique e Decodifique**
-
Crie duas funções: a primeira deverá se chamar `encode` e, ao receber uma string como parâmetro, deverá trocar todas as letras minúsculas por números, de acordo com o formato a seguir:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

Ou seja, caso o parâmetro de `encode` seja `"hi there!"`, o retorno deverá ser `"h3 th2r2!"`.

A segunda função deverá se chamar `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, o retorno deverá ser `"hi there!"`).

**Bônus**
=
**11- Número de telefone**
-
Crie uma função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` deverá retornar `(12) 34567-8901`.

Caso algum dos números da array seja menor que 0, maior que 9 ou se repetir 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`.

**12- Condição de existência de um triângulo**
-
Crie uma função chamada `triangleCheck` que deverá receber três números como parâmetro e retornar se é possível formar um triângulo com três retas nos valores apresentados.

Para, tanto, tenha em mente algumas considerações:

- Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

- Para obter o valor absoluto de um número em Javascript, pesquise pela função `Math.abs`.

- O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.

**13- Analisando as datas**
-
Crie uma função chamada `dateCheck` que recebe três números inteiros entre 0 e 99.

A função deve retornar se esses números, em alguma ordem podem formar uma data do século 20 no formato `DD-MM-AA`.

Se não possível, em nenhuma ordem, formar uma data, sua função deve retornar `"números inválidos"`.

Se os valores passados podem formar diversas datas, sua função deve retornar a string `"múltiplas datas"`

Se os números podem formar apenas uma data, retorne uma string no formato `"DD/MM/AA"`.

**Para fins deste exercício, considere que todos os meses do ano possuem 30 dias.**

**14- Bem vindo ao Bar da Trybe!**
-
Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função `hydrate` que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:
```
String recebida:
  "1 cerveja"
String retornada:
  "1 copo de água"
```

```
String recebida:
  "1 cachaça, 5 cervejas e 1 copo de vinho"
String retornada:
  "7 copos de água"
```

**Notas**

- Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida **e que a sua string sempre virá com o formato quantidade (em número) + medida + bebida**.

- O número na frente de cada bebida está no intervalo [1, 9].

**Dica**

Pesquise sobre `includes javascript`.

**15- MonkeyTalk**
-
Crie uma função chamada `monkeyTalk` que deve receber uma frase como parâmetro.

A função deve transformar as palavras da frase recebida em `Ook` ou em `Eek` e então retornar a frase com as palavras substituídas.

As substituições ocorrem a seguinte forma:

- Caso a palavra comece com uma vogal ela deverá ser transformada em `Eek`.

- Caso comece com uma consoante, deverá ser transformada em `Ook`.

- A primeira palavra da frase deve começar com letra maiúscula.

- A frase deve terminar com um ponto final (`.`).

Exemplo: `monkeyTalk('Hello World at Trybe')` deverá retornar `Ook ook eek ook.`

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um ~~(ou alguns)~~ `commits` atualizar o repositório remoto (o famoso `git push`);

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO - OPCIONAL, PORÉM MUITO IMPORTANTE! <3

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
