import './App.css';
import {useState} from 'react';
import FruitList from './components/FruitList/FruitList';


function App() {

  const [item, setItem] = useState([
    { name: "Banana", color: "yellow", price: 2 },
    { name: "Cherry", color: "red", price: 3 },
    { name: "Strawberry", color: "red", price: 4 },
   ]);  

   const filterFrutas = () => {
      setItem(item.filter(fruta => fruta.color === 'red'))
   }

   const preco = item.reduce((atual, proximo)=>proximo.price + atual, 0)

  return ( 
      <div className="App-header">
        <h2>Preço= {preco}</h2>
        <div>
          <FruitList item = {item} />
        </div>
        <button onClick = {filterFrutas}>Filtrar: frutar vermelhas</button>
      </div>

  );
}

export default App;
