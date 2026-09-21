
document.querySelectorAll('[classname]').forEach((el) => {
  el.setAttribute('class', el.getAttribute('classname'));
});


const form = document.querySelector('.registro-form');


function eventoSubmit(e) {
  e.preventDefault();

  const datosPersonales = document.getElementById('politica_datos').checked;

  if (!datosPersonales) {
    alert('Aceptar política de privacidad');
    return;
  }

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;

  const nuevo = {
    id: Date.now(),
    nombreCompleto: `${nombre} ${apellido}`.trim(),
    documento: {
      tipo: document.getElementById('tipo_identificacion').value,
      numero: document.getElementById('numero_identificacion').value,
    },
    fechaNacimiento: document.getElementById('fecha_nacimiento').value,
    correo: document.getElementById('correo').value,
    celular: document.getElementById('celular').value,
    pais: document.getElementById('pais').value,
    ciudad: document.getElementById('ciudad').value,
    datosPersonales,
    fechaRegistro: new Date().toLocaleDateString(),
  };

  console.log(nuevo);
}


form.addEventListener('submit', eventoSubmit);