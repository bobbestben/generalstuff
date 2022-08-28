import React, { useState, useEffect } from "react";
import axios from "axios";

const getAPIURL = (drink) => {
  return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
};

const Cocktail = () => {
  const [drink, setDrink] = useState("margarita");
  const [drinkData, setDrinkData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDrink = async (drink) => {
    const data = await axios.get(getAPIURL(drink));
    setDrinkData(data.data.drinks);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await fetchDrink(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
     fetchDrink(drink);
  }, []);

  return (
    <div>
      <h1>Cocktail</h1>

      <form onSubmit={submitForm}>
        <input onChange={handleChange} />
        <button>Search</button>
      </form>

      {drinkData ? (
        <ol>
          {drinkData?.map((drink) => {
            return <li key={drink.idDrink}>Drink: {drink.strDrink}</li>;
          })}
        </ol>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
};

export default Cocktail;