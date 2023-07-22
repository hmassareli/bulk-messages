// cada número deve ser separado por quebra de linha, ou virgula
// os números podem ou não ter 55 na frente, não deve ser obrigatório, mas deve ser tratado para inserir isso antes de enviar as mensagens
// talvez seja legal perguntar no futuro se todos os números são brasileiros
//exemplo
/*
5512991944059
551299194-4059
55 12 99194 4059
12991944059
12 991944059
55 12991944059
 12 9 91944059

*/
export const formatNumbers = (numbers: number[]) => {
  // console.log(numbers)
};

export const validateNumbers = (numbers: number[]) => {
  // console.log(numbers)
};

export const divideNumbers = (
  stringNumbers: string,
  typeOfDivider: "comma" | "lineBreak"
) => {
  if (typeOfDivider) {
    return stringNumbers.split(typeOfDivider);
  }
  return stringNumbers.split(",");
};
