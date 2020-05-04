document.addEventListener('DOMContentLoaded', () => {

    var agregar = document.querySelector('#add');
    var calc = document.querySelector('#calcular');
    var cotizador = document.querySelector('#cotizador');

    agregar.addEventListener('click', nuevoPedido);
    calc.addEventListener('click', calcular);


    var x = 1;

    function nuevoPedido() {
        var pedido = document.createElement('div');
        pedido.setAttribute('class', 'pedido');
        pedido.setAttribute('id', 'pedido' + x);
        cotizador.appendChild(pedido);

        var seleccion = document.createElement('div')
        seleccion.setAttribute('class', 'seleccion');
        pedido.appendChild(seleccion);

        var label = document.createElement('label');
        label.setAttribute('for', 'trabajo' + x);
        label.textContent = 'Trabajo: ';
        seleccion.appendChild(label);

        var select = document.createElement('select');
        select.setAttribute('name', 'trabajo' + x);
        select.setAttribute('id', 'trabajo' + x);
        select.addEventListener('change', function() {
            mostrarTam(this)
        });
        seleccion.appendChild(select);
        var option = document.createElement('option');
        option.setAttribute('value', '0');
        option.setAttribute('disabled', true);
        option.setAttribute('selected', true);
        option.textContent = 'Seleccione';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'copias');
        option.textContent = 'Copias';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'impresiones');
        option.textContent = 'Impresiones';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'encuadernado');
        option.textContent = 'Encuadernado';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'engargolado');
        option.textContent = 'Engargolado';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'tabloides');
        option.textContent = 'Tabloides';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'engomados');
        option.textContent = 'Engomados';
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', 'tamano' + x);
        label.setAttribute('class', 'tamano');
        label.textContent = 'Tamaño: ';
        seleccion.appendChild(label);

        var select = document.createElement('select');
        select.setAttribute('name', 'tamano' + x);
        select.setAttribute('id', 'tamano' + x);
        select.setAttribute('class', 'tamano');
        seleccion.appendChild(select);
        var option = document.createElement('option');
        option.setAttribute('value', '0');
        option.setAttribute('disabled', true);
        option.setAttribute('selected', true);
        option.textContent = 'Seleccione';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'carta');
        option.textContent = 'Carta';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'oficio');
        option.textContent = 'Oficio';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'doblecarta');
        option.textContent = 'Doble Carta';
        select.appendChild(option);

        var cant = document.createElement('div');
        cant.setAttribute('class', 'cant');
        pedido.appendChild(cant);

        var label = document.createElement('label');
        label.setAttribute('for', 'cantidad' + x);
        label.textContent = 'Cantidad: ';
        cant.appendChild(label);
        var input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('min', '0');
        input.setAttribute('id', 'cantidad' + x);
        input.setAttribute('placeholder', 'Cantidad');
        cant.appendChild(input);

        x++;
    }

    function calcular() {

    }

    function mostrarTam(id) {
        console.log(id);
    }


});