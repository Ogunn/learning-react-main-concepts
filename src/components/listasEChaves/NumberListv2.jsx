import React from "react";

const ListItem = props => {
  // Não há necessidade de definir a chave aqui:
  return <li>{props.value}</li>;
};

const NumberListv2 = props => {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    // Correto! A chave deve ser definida dentro do array.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
};

export default NumberListv2;
