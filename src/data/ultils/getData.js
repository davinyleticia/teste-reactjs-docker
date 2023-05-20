import getRandomInt from '../ultils/getRandomInt';

export function GeradorData(opcao) {
  let dia = getRandomInt(2, 28);
  let mes = getRandomInt(2, 6);
  let ano = 2023;
  let horas = getRandomInt(2, 23);
  let minutos = getRandomInt(2, 59);
  if (opcao === 'all') {
    let dataComoString = '' + dia + mes + ano + horas + minutos;
    return parseInt(dataComoString);
  } else if (opcao === 'string') {
    let dataComoString =  dia + '/' + mes + '/'+ ano + ' - ' + horas + ':' + minutos;
    return dataComoString;
  } else {
    return mes;
  }
}
