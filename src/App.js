import './App.css';
import {useState} from 'react';

function FruitList() {

  const [item, setItem] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
   ]);  

   const filterFrutas = () => {
      setItem(item.filter(fruta => fruta.color === 'red'))
   }

   const preco = item.reduce((atual, proximo)=>proximo.price + atual, 0)

  return ( 
      <div className="App-header">
        <h2>Preço= {preco}</h2>
        <div>
        {item.map(fruta => <li>{fruta.name}</li>)}
        </div>
        <button onClick = {filterFrutas}>Filtrar: frutar vermelhas</button>
      </div>

  );
}

export default FruitList;
