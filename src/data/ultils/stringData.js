export const stringData = (data) => {
  let dataString = String(data);

  let dia = dataString.substring(0, 2);
  let mes = dataString.substring(2, 4);
  let ano = dataString.substring(4, 8);
  let horas = dataString.substring(8, 10);
  let minutos = dataString.substring(10, 12);

  return `${dia}/${mes}/${ano} - ${horas}:${minutos || '00'}`;
};
