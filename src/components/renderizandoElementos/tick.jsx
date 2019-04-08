/**
 * O código abaixo é utilizado para demonstrar que um componente React, depois de criado, não pode ser modificado. Se queremos atualizar algum elemento que já tenha sido renderizado devemos chamar novamente o método render() do pacote ReactDOM e renderizar o novo elemento que substituirá o antigo.
 * Outra característica que o código abaixo mostra é que o React apenas "rerendezia" os elementos que foram modificados. Nesse caso, apenas o h2 abaixo será atualizado. A div e o h1 permanecerão inalterados.
 * Note que esse componente não é adicionado ao componente App, na raiz do diretório desse projeto. Deve ser assim, pois esse metétodo tick não é um componente. Ele apenas rendeza ELEMENTOS jsx.
 */
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
