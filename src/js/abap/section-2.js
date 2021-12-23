export const poo = {
    template: `
        <div class="slide paper">
            <h2 class="mb-3">ABAP - Exemple CODE with docs.</h2>
            <h6>Hands On - Test 2 - POO</h6>
            <p>
                <br>*&---------------------------------------------------------------------*
                <br>*& Report YSS_TEST3_HANDSON
                <br>*&---------------------------------------------------------------------*
                <br>*&
                <br>*&---------------------------------------------------------------------*
                <br>REPORT YSS_TEST3_HANDSON.
                <br>"& No SAP toda classe definida deve ser implementada. E a herança é bem semelhante em outras linguagens.
                <br>"& Para acessarmos um atributo ou método de uma classe precisamos de uma ->, por exemplo. objeto->nome, objeto->metodo( ).
                <br>
                <br>*
                <br>*TYPES: BEGIN OF definition,
                <br>*       feature TYPE string,
                <br>*       END OF definition.
                <br>
                <br>CLASS animal DEFINITION. " Defini um classe animal que possui cor como caracteristica e o metodo comer.
                <br>  PUBLIC SECTION.
                <br>    DATA color TYPE string.
                <br>    METHODS: eat.
                <br>ENDCLASS.
                <br>
                <br>CLASS animal IMPLEMENTATION.  " Após definila precisamos implementar os seus metodos. Toda classe tem um DEFINITION e um IMPLEMENTATION.
                <br>  METHOD eat.
                <br>    WRITE: 'I ate',/.
                <br>  ENDMETHOD.
                <br>ENDCLASS.
                <br>
                <br>"Inheritance
                <br>CLASS birds DEFINITION INHERITING FROM animal. " A definição da classe aves herda de animais, o INHERITING FROM nada mais é que herdando de.
                <br>  PUBLIC SECTION.
                <br>    METHODS: fly, eat REDEFINITION.  " Com o REDEFINITION podemos reescrever o metodo igual o Overead em JAVA por exemplo.
                <br> ENDCLASS.
                <br>
                <br>CLASS birds IMPLEMENTATION.  "Mesmo processo, em IMPLEMENTATION temos que dar estrutura a cada metodo presente.
                <br>  METHOD fly.
                <br>    WRITE: 'I can fly',/.
                <br>  ENDMETHOD.
                <br>  METHOD eat.
                <br>    WRITE: 'I ate insects',/.
                <br>  ENDMETHOD.
                <br>ENDCLASS.
                <br>
                <br>DATA: dog TYPE REF TO animal.   " Criação de um objeto do tipo animal. Instância de animal.
                <br>DATA: parrot TYPE REF TO birds. " Criação de um objeto do tipo aves. Instância de aves.
                <br>
                <br>INITIALIZATION.
                <br>  CREATE OBJECT: dog, parrot.
                <br>  dog->color = 'Black'.
                <br>  parrot->color = 'Write'.
                <br>
                <br>  WRITE: 'Dog Features',/.
                <br>  WRITE: dog->color, /.
                <br>  dog->eat( ).
                <br>
                <br>  WRITE: 'Parrot Features',/.
                <br>  WRITE: parrot->color, /.
                <br>  parrot->eat( ).
                <br>  parrot->fly( ).
            </p>
        </div>
    `
}