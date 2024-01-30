export const playerPokemon: Pokemon = {
	name: "Pikachu",
	lvl: 10,
	hp: 35,
	image: "https://img.pokemondb.net/sprites/red-blue/normal/pikachu.png",
	types: ["electric"],
	special: "thunderbolt",
	speed: 90,
	atk: 55,
	def: 40,
	moves: [
		{
			name: "Thunder Shock",
			type: "electric",
			power: 40,
			accuracy: 100,
			pp: 30,
		},
		{
			name: "Growl",
			type: "normal",
			power: 0,
			accuracy: 100,
			pp: 40,
		},
		{
			name: "Tail Whip",
			type: "normal",
			power: 0,
			accuracy: 100,
			pp: 30,
		},
		{
			name: "Thunder Wave",
			type: "electric",
			power: 0,
			accuracy: 100,
			pp: 20,
		},
	],
};

export const ennemyPokemon: Pokemon = {
	name: "Bulbasaur",
	lvl: 10,
	hp: 45,
	image: "https://img.pokemondb.net/sprites/red-blue/normal/bulbasaur.png",
	types: ["grass", "poison"],
	special: "vine whip",
	speed: 45,
	atk: 49,
	def: 49,
	moves: [
		{
			name: "Tackle",
			type: "normal",
			power: 35,
			accuracy: 95,
			pp: 35,
		},
		{
			name: "Growl",
			type: "normal",
			power: 0,
			accuracy: 100,
			pp: 40,
		},
		{
			name: "Leech Seed",
			type: "grass",
			power: 0,
			accuracy: 90,
			pp: 10,
		},
		{
			name: "Vine Whip",
			type: "grass",
			power: 45,
			accuracy: 100,
			pp: 25,
		},
	],
	isEnnemy: true
};
