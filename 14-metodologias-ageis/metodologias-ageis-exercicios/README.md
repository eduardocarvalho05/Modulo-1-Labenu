# Metodologias Ágeis - Exercícios

### SETUP da ATIVIDADE DO DIA
 - Recomendo que para a Atividade do Dia, **somente uma única pessoa realize o fork/clone do Repositório da Atividade e compartilhe a tela com os demais colegas da Equipe**. Essa dinâmica visa uma maior integração do Trabalho em Grupo e Coding Together:
 - Após a realização do Clone da Atividade, abra o terminal Bash na pasta do clone e execute o seguinte comando:
 ```node
 npm install
 ```
 ou 
 ```node
 npm i
 ```
 - Segue .gif demonstrando o passo de instalação, após copiar o link do fork:
![npm-i](https://user-images.githubusercontent.com/52759918/223799337-5e4a1d66-ca89-4089-80c5-bdcfc68aebf9.gif)

 - Após instalação, siga a leitura do enunciado.

## ENUNCIADO

- Nossa atividade de Metodologias Ágeis para o dia de hoje será feito não somente nas máquinas de vocês rodando a aplicação, mas também, utilizaremos e faremos bom proveito do Template dos Kanbans disponibilizado no seguinte link do Trello: https://trello.com/b/640858d2f5101b903344363f

- Hoje nossa empresa recebeu um pedido de um de nossos maiores clientes! Nosso cliente falou que está precisando do Desenvolvimento de algumas funções que pretende disponbilizar em sua Super Plataforma de Cálculos, então cabe a nós atendermos essa Demanda de nosso Cliente.

- Infelizmente nosso tempo é curto, então **DEVEMOS NOS ATENTAR AO GERENCIAMENTO DE TEMPO**.

## EXERCÍCIO 1
Escreva uma função que receba um número, pertencente exclusivamente ao conjunto dos Naturais e que retorne se o valor do número representando um ano com 4 digitos seria ou não bissexto. Porém para dados de entrada < 0, deve ser impresso uma string "INVALID".

  Exemplo: input: 2024, output: "TRUE"<br/>
  Exemplo: input: 2025, output: "FALSE"<br/>
  Exemplo: input: -1234, output: "INVALID"<br/>

## EXERCÍCIO 2
Escreva uma função que simula uma escolha do jogo PEDRA, PAPEL e TESOURA. Ao chamá-la deve ser retornado aleatoriamente uma string com um desses valores.

  Exemplo: output: "PEDRA"<br/>
  Exemplo: output: "PAPEL"<br/>
  Exemplo: output: "TESOURA"<br/>
  Observação: Função sem parâmetro, não espera um dado de entrada e sim, somente sua execução.<br/>

## EXERCÍCIO 3
Escreva uma função que recebe um número pertencente exclusivamente ao conjunto dos Naturais, e retorna uma string com "TRUE" para primo, "FALSE" para não primo e "INVALID" para valores de entrada <= 1.
  Exemplo: input: 13, output: "TRUE"<br/>
  Exemplo: input: 12, output: "FALSE"<br/>
  Exemplo: input: 1, output: "INVALID"<br/>


## ATENÇÃO
- Nosso cliente disse que **NÃO TEMOS AUTORIZAÇÃO** para mexer no package.json, nenhum arquivo na pasta de "tests", não devemos alterar o nome de nossas funções presentes no "./src/index.js" e não alterar os arquivos de configurações como babel.config.js e jest.config.js.
- O cliente explicou que essa exigência é necessário uma vez que já adequaram como será a integração dessas soluções em sua plataforma digital.
- Foi reforçado que fomos contratados **SOMENTE PARA DESENVOLVIMENTO DAS FUNÇÕES**. Qualquer alteração não prevista, deve ser comunicado de imediato.

## TESTES DAS FUNÇÕES
- Após a realização da construção do corpo de nossas funções, nós precisamos testar e averiguar se estão funcionando como o esperado, para isso, vamos novamente abrir o terminal Bash na pasta de nosso exercício e realizar os seguintes comandos para testar função por função.

- Testando EXERCÍCIO 1:
```node
npx jest exercicio1.test.js
```

- Testando EXERCÍCIO 2:
```node
npx jest exercicio2.test.js
```

- Testando EXERCÍCIO 3:
```node
npx jest exercicio3.test.js
```

- Caso prefira rodar todos os testes de uma única só vez, você pode digitar o seguinte comando:
```node
npm run test
```
- Segue .gif demonstrando a realização dos testes:
![npx-jest](https://user-images.githubusercontent.com/52759918/223805317-7be10e97-d377-4ec6-9126-d3f59940c4ab.gif)
