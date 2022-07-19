//Going to controller section
app.get("/", pokemonController.listPokemon);

//This route is more specific, hence need to be placed before /:pokemon_id
//new action: to display form to create new pokemon
app.get("/new", pokemonController.newPokemonForm);

//Setting up show route for individual pokemon
app.get("/:pokemon_id", pokemonController.showPokemon);
//update action - POST request
app.put("/:pokemon_id", pokemonController.updatePokemon);
//delete action - delete request
app.delete("/:pokemon_id", pokemonController.deletePokemon);

//create action
app.post("", pokemonController.createPokemon);