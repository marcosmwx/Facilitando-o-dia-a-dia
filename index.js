// biblioteca de cores para o terminal
const chalk = require("chalk");
//codigo para ler entrada terminal
const readlineSync = require("readline-sync");

let list = [];

// Adicionar items a list
const addItem = (prop) => {
  list.push(prop);
};
// Listar items de list
const listItems = () => {
  list.sort();
  list.forEach((item) => console.log(chalk.grey(item)));
};
// console.log das opcoes disponivel
let option = "";
console.log(chalk.blue("Digite") + chalk.dim(" a Palavra para Adicionar"));
console.log(chalk.yellow("Lista") + chalk.dim(" para exibir a lista ordenada"));
console.log(chalk.red("Sair") + chalk.dim(" para finalizar e exibir a Lista"));

// loop para leitura das entradas e condicoes para enquanto for diferente de sair
while (option !== "sair" && option !== "Sair") {
  option = readlineSync.question();
  if (option === "Lista" || option === "lista") {
    listItems();
  } else if (option !== "sair" && option !== "Sair") {
    addItem(option);
  }
}
// exibicao da lista final quando usuario digitar sair
console.log(chalk.red("Sua Lista final ficou: "));
listItems();
