function ObtenerFecha() {
 
  const DiasSemanas = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const fecha = new Date();

  const diaSemana = DiasSemanas[fecha.getDay()];
  const mes = Meses[fecha.getMonth()];
  const año = fecha.getFullYear();
  const dia = fecha.getDate();

  const textoFecha = `${diaSemana} ${dia} de ${mes} de ${año}`;

 
  const tituloFecha = document.querySelector('h2');
  tituloFecha.innerText = textoFecha;

  let horas = fecha.getHours();
  const minutos = fecha.getMinutes().toString().padStart(2, '0');
  const segundos = fecha.getSeconds().toString().padStart(2, '0');
  
  
  let AMoPM = 'AM';
  if (horas >= 12) {
      AMoPM = 'PM';  
  }

 
  horas = horas % 12;
  if (horas === 0) {
      horas = 12;  
  }

  if (horas === 12 && AMoPM === 'AM') {
      AMoPM = 'PM';  
  }

  const textoHora = `${horas.toString().padStart(2, '0')}:${minutos}:${segundos} ${AMoPM}`;

 
  const reloj = document.querySelector('h3');
  reloj.innerText = textoHora;
}

setInterval(ObtenerFecha, 1000);

  