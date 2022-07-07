// src > scripts > controllers > HTML.controller.js
/*

Aqui ficará uma classe responsável por fazer qualquer modificação no HTML.

Um bom exemplo disso seria um método que gera e retorna um Header,
mas não o anexa na página, pois isso será feito em um outro
controller ou no script.js:

Ex.:

*/

export default class HTMLController {
  static generateHeader() {
    const header = document.createElement("header");

    return header;
  }

  // [...]
}
