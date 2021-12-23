export const verslag = {
    template: `
        <div class="slide paper">
            <h2 class="mb-3">ABAP - Exemple CODE with docs.</h2>
            <h6>Hands On - Test 3 - RLV</h6>
            <p>
                <br>*&---------------------------------------------------------------------*
                <br>*& Report ZSS_TEST2_HANDSON
                <br>*&---------------------------------------------------------------------*
                <br>*&
                <br>*&---------------------------------------------------------------------*
                <br>REPORT ZSS_TEST2_HANDSON.
                <br>
                <br>*& Classe e Funções Padrôes do SAP (Standard)
                <br>*& cl_salv_table     | É um classe padrão do SAP que gera um relatório, ela retorna a construção de um objeto com métodos, parâmetros pré-definidos para gerar relatórios.
                <br>*& cl_salv_functions | É um classe padrão do SAP que gera um construtor de funções de manipulação. Então, conseguimos criar classe de funções locais e conseguimos atribuir valores.
                <br>
                <br>DATA: external_data TYPE TABLE OF my_transparent_table, " Criação de uma tabela interna a partir de uma tabela transparente.
                <br>data TYPE my_transparent_table.                   " Tabela Transparente é uma tabela que existe em algum bando de dados.
                <br>
                <br>DATA my_cl_table TYPE REF TO cl_salv_table. " A cl_salv_table é um classe padrão disponibilizada pela SAP que gera um relatório.
                <br>
                <br>FORM get_datas.
                <br>   SELECT * FROM my_transparent_table INTO TABLE external_data.
                <br>
                <br>*   LOOP AT external_data INTO data.
                <br>*        WRITE data-zname.
                <br>*   ENDLOOP.
                <br>ENDFORM.
                <br>
                <br>FORM show_table.
                <br>   CALL METHOD cl_salv_table=>factory      " A classe cl_salv_table padrão do SAP (standard) possui um  método estático chamado factory, esse cria uma instancia de um objeto pré definido.
                <br>*      EXPORTING
                <br>*        list_display = abap_true          " Da o valor ao parâmetro list display para exibir a tabela de maneira diferente.
                <br>
                <br>        IMPORTING
                <br>           r_salv_table = my_cl_table         " Temos que importar a esse objeto o parâmetro r_salv_table e dizer que o parâmetro desse receberá a nossa classe.
                <br>
                <br>       CHANGING
                <br>            t_table      = external_data.      " Temos que informar ao parâmetro t_table desse objeto qual tabela ele irá abstrair seus dados.
                <br>
                <br>   PERFORM show_user_functions.
                <br>
                <br>   CALL METHOD my_cl_table->display.      " Com isso, nossa classe recebeu o objeto montado pelo método factory. Com isso, nossa classe possui os métodos padrões do cl_salv_table.
                <br>ENDFORM.
                <br>
                <br>FORM show_user_functions.
                <br>    DATA my_lc_function TYPE REF TO cl_salv_functions.  " Cria uma classe de funções local baseada na classe padrão de funções do SAP (standard), dando entao à minha classe funções de manipulações.
                <br>
                <br>    my_lc_function = my_cl_table->get_functions( ).     " Estou atribuindo a minha classe de função local todos os métodos construidos pela minha classe construida com cl_salv_table.
                <br>    my_lc_function->set_all( abap_true ).               " Atribui um valor TRUE para minha classe de função local à todos os métodos incorporados por ela pela minha classe construída.
                <br>ENDFORM.
                <br>
                <br>START-OF-SELECTION.       " É inicializa as variáveis após o click sobre o botão executar (F8).
                <br>    PERFORM get_datas.
                <br>   PERFORM show_table.
            </p>
        </div>
    `
}

