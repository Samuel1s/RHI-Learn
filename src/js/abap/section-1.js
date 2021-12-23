export const syntaxLanguage = {
    template: `
        <div class="slide paper">
            <h2 class="mb-3">ABAP - Exemple CODE with docs.</h2>
            <h6>Hands On - Test 1 - Syntax</h6>
            <p>
                <br>*&---------------------------------------------------------------------*
                <br>*& Report ZSS_TEST1_HANDSON
                <br>*&---------------------------------------------------------------------*
                <br>*&
                <br>*&---------------------------------------------------------------------*
                <br>REPORT ZSS_TEST1_HANDSON.
                <br>
                <br>*& Alguns atalhos do ABAP.
                <br>*& *         | Asterico indica um comentário como inicio de linha apenas, não podemos usar após um trecho de código.
                <br>*& "         | Aspas duplas indica um comentário como inicio de linha e também após um trecho de código.
                <br>*& /         | Pula de linha
                <br>*& ctrl + ,  | Comenta um trecho de código.
                <br>*& ctrl + .  | Descomenta uma linha.
                <br>*& ctrl + d  | Duplica um trecho de código ou linha.
                <br>*& ctrl + s  | Salvar o programa.
                <br> *& ctrl + F3 | Compilar.
                <br>*& ctrl + F2 | Verificar.
                <br>*& F8        | Tela de execução.
                <br>*&
                <br>
                <br>*& Explicação de algumas sintaxes do ABAP.
                <br>*& DATA  | Declara uma variável.
                <br>*&       | DATA: Declara mais de uma variável
                <br>*& TYPE  | Define o tipo primitivo de uma variável e esses são: c(char), i(inteiro), p(decimal/float), string(texto).
                <br>*&       | LENGTH   -> TYPE c LENGTH n : Define o tamanho de um caractere. Onde n é um número inteiro.
                <br>*&       | VALUE    -> TYPE i VALUE 1 : Define um valor inicial. Onde n é um número inteiro.
                <br>*&       | DECIMALS -> TYPE p DECIMALS n :  Define o tamanho máximo de um número decimal. Onde n é um número inteiro.
                <br>*& WRITE | Escreve no console/tela algo.
                <br>*&       | WRITE: Escreve mais de uma coisa na tela/console.
                <br>*& FORM  | Cria um bloco de comandos.
                <br>*&
                <br>
                <br>*& Dicas.
                <br>*& Para acessar uma variável de um estrutura ou tabela precisamos utilizar o -, por exemplo person-name = 'a', WRITE person-name.
                <br>
                <br>FORM initial_state_definition.
                <br>  DATA: initial_id TYPE i VALUE 1,
                <br>        initial_age TYPE i VALUE 10.
                <br>
                <br>  TYPES: BEGIN OF type_person,  " Cria uma estrutura/struct.
                <br>            id TYPE i,
                <br>            name TYPE string,
                <br>            age  TYPE i,
                <br>            gender TYPE c,
                <br>         END OF type_person.
                <br>
                <br>  DATA: people TYPE TABLE OF type_person, "Cria uma Tabela Interna que armazena os dados em tempo de execução.
                <br>        person TYPE type_person.          "Cria uma variável que servirá de linha para preencher a tabela que possui o mesmo tipo de dados.
                <br>
                <br>  DO 5 TIMES.  " Cria um laço de sequencia definido.
                <br>    person-id = initial_id.
                <br>    person-name = 'pessoa' && initial_id.
                <br>    person-age = initial_age.
                <br>    person-gender = 'M'.
                <br>
                <br>    initial_id = initial_id + 1.
                <br>    initial_age = initial_age + 10.
                <br>
                <br>    APPEND person TO people.
                <br>ENDDO.
                <br>
                <br>  LOOP AT people INTO person.  "Cria um laço de leitura, equivalente ao FOR OF em JS.
                <br>     WRITE: person-id, person-name, person-age, person-gender, /.
                <br>  ENDLOOP.
                <br>
                <br>ENDFORM.
                <br>
                <br>INITIALIZATION.  "Um evento que inicializa suas variáveis quando ocorre a inicialização de um programa.
                <br>  PERFORM initial_state_definition.
            </p>
        </div>
    `
}