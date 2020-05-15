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
        select.setAttribute('data-id', x);
        select.addEventListener('change', function() {
            mostrarTam(this.value, this);
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
        option.setAttribute('value', 'tabloide');
        option.textContent = 'Tabloides';
        select.appendChild(option);
        var option = document.createElement('option');
        option.setAttribute('value', 'engomado');
        option.textContent = 'Engomados';
        select.appendChild(option);

        var label = document.createElement('label');
        label.setAttribute('for', 'tamano' + x);
        label.setAttribute('id', 'ltamano' + x);
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
        var descripcion = document.querySelector('#descripcion');
        descripcion.textContent = "";
        var suma = 0;
        for (var i = 1; i < x; i++) {
            var cantidad = document.querySelector('#cantidad' + i).value;
            var trabajo = document.querySelector('#trabajo' + i).value;
            if (trabajo == 'copias' || trabajo == 'impresiones')
                var tamano = document.querySelector('#tamano' + i).value;

            if (cantidad == '')
                cantidad = 0;
            var li = document.createElement('li');
            if (trabajo == 'copias' || trabajo == 'impresiones')
                li.textContent = cantidad + 'x ' + trabajo + ' tamaño ' + tamano;
            else
                li.textContent = cantidad + 'x ' + trabajo;
            descripcion.appendChild(li);

            if (trabajo == 'copias') {
                if (tamano == 'carta')
                    suma += cantidad * .25;
                else if (tamano == 'oficio')
                    suma += cantidad * .35;
                else if (tamano == 'doblecarta')
                    suma += cantidad * 1;
            } else if (trabajo == 'impresiones') {
                if (tamano == 'carta')
                    suma += cantidad * .35;
                else if (tamano == 'oficio')
                    suma += cantidad * .60;
                else if (tamano == 'doblecarta')
                    suma += cantidad * 2;
            } else if (trabajo == 'encuadernado')
                suma += cantidad * 26;
            else if (trabajo == 'engargolado')
                suma += cantidad * 15;
            else if (trabajo == 'tabloide') {
                if (cantidad == 1)
                    suma += cantidad * 7;
                else
                    suma += cantidad * 6;
            } else if (trabajo == 'engomado')
                suma += cantidad * 13.5;


            document.querySelector('.suma').textContent = '$' + suma;

        }
    }

    function mostrarTam(valor, obje) {
        var id = obje.getAttribute('data-id');
        if ((valor == 'copias' || valor == 'impresiones') && screen.width > 786) {
            document.querySelector('#ltamano' + id).style.display = 'inline';
            document.querySelector('#tamano' + id).style.display = 'inline';
            document.querySelector('#trabajo' + id).style.width = '10rem';
        } else if (screen.width > 786) {
            document.querySelector('#ltamano' + id).style.display = 'none';
            document.querySelector('#tamano' + id).style.display = 'none';
            document.querySelector('#trabajo' + id).style.width = '30rem';
        }

    }



});