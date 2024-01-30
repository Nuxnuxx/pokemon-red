/// <reference types="vite/client" />
enum Type {
  normal = "normal",
  fire = "fire",
  water = "water",
  electric = "electric",
  grass = "grass",
  ice = "ice",
  fighting = "fighting",
  poison = "poison",
  ground = "ground",
  flying = "flying",
  psychic = "psychic",
  bug = "bug",
  rock = "rock",
  ghost = "ghost",
  dragon = "dragon",
}

type PokemonType = {
  type: type;
};

type Ability = {
  name: string;
  pp: number;
  id: number;
  power: number;
  type: type;
};

type Pokemon = {
  name: string;
  types: pokemonType[];
  hp: number;
  attack: number;
	defense: number; 
	specDefense: number;
  special: number;
  ability: ability[];
  weight?: number;
  level: number;
};
