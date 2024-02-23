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
      atk: 40,
      accuracy: 100,
      pp: 30,
    },
    {
      name: "Growl",
      type: "normal",
      atk: 0,
      accuracy: 100,
      pp: 40,
    },
    {
      name: "Tail Whip",
      type: "normal",
      atk: 0,
      accuracy: 100,
      pp: 30,
    },
    {
      name: "Thunder Wave",
      type: "electric",
      atk: 0,
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
      atk: 35,
      accuracy: 95,
      pp: 35,
    },
    {
      name: "Growl",
      type: "normal",
      atk: 0,
      accuracy: 100,
      pp: 40,
    },
    {
      name: "Leech Seed",
      type: "grass",
      atk: 0,
      accuracy: 90,
      pp: 10,
    },
    {
      name: "Vine Whip",
      type: "grass",
      atk: 45,
      accuracy: 100,
      pp: 25,
    },
  ],
  isEnnemy: true,
};

export function calculateDamage(
  attacker: Pokemon,
  defender: Pokemon,
  move: Move,
): number {
  const critical = Math.random() < 0.0625;
  const type = 1; // TODO: calculate type effectiveness
  const random = Math.random() * (1 - 0.85) + 0.85;
  const stab = attacker.types.includes(move.type) ? 1.5 : 1;
  const effectiveness = 1;
  const modifier = critical ? 2 : 1;
  const damage = Math.floor(
    (((2 * attacker.lvl + 10) / 250) *
      (attacker.atk / defender.def) *
      move.atk +
      2) *
      type *
      random *
      stab *
      effectiveness *
      modifier,
  );
  return damage;
}
