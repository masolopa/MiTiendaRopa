
$('#formulario_principal').validate({
    rules: {
        nombre: {
            required : true,
            minlenght: 3,
            maxlenght: 100
        }

    },
    messages: {
        required: "Por favor, ingrese su nombre",

    }

});