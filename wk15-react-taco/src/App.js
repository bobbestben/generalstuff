import './App.css';
import { useState, useEffect } from "react";



function App() {

  const [drink, setDrink] = useState('margarita')

  const fetchAPIdata = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      setDrink(responseJson);
    })
  }

  useEffect( () => {
    fetchAPIdata()
  }, [])

  console.log(drink)


  return (
    <div className="App">
      <div>Testing</div>
      <div>Drink</div>
    </div>
  );
}

export default App;
