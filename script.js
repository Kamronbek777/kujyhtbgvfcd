pokemons.forEach(item => {
   const pokemonContainer = document.createElement('div');
   pokemonContainer.className = 'pokemon-container';
 
   const pokemonId = document.createElement('p');
   pokemonId.textContent = item.id;
   pokemonId.className = 'id';
 
   const pokemonImg = document.createElement('img');
   pokemonImg.src = item.img;
   pokemonImg.className = 'img';
 
   const pokemonName = document.createElement('p');
   pokemonName.textContent = item.name;
   pokemonName.className = 'name';
 
   const pokemonType = document.createElement('p');
   pokemonType.textContent = item.type;
   pokemonType.className = 'type';
 
   const pokemonSpawn = document.createElement('p');
   pokemonSpawn.textContent = item.spawn_time;
   pokemonSpawn.className = 'spawn';
 
   const pokemonWeight = document.createElement('p');
   pokemonWeight.textContent = item.weight;
   pokemonWeight.className = 'weight';
 
   const pokemonWeaknesses = document.createElement('p');
   pokemonWeaknesses.textContent = item.weaknesses;
   pokemonWeaknesses.className = 'weaknesses';
 
   pokemonContainer.append(pokemonId, pokemonName, pokemonImg, pokemonType, pokemonSpawn, pokemonWeight, pokemonWeaknesses);
   document.body.append(pokemonContainer);
 });