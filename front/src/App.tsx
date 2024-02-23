import "./app.scss";
import { playerPokemon, ennemyPokemon, calculateDamage } from "./pokemon";
import BattleArena from "./components/battlearena/BattleArena";
import { useEffect, useState } from "react";
import Controls from "./components/controls/Controls";

function App() {
  const [battleState, setBattleState] = useState<Battle>({
		// For the first round we check the more speed pokemon
    playerTurn: playerPokemon.speed >= ennemyPokemon.speed,
		// TODO: add log to the battleLog for each attack
    battleLog: [],
    isOver: false,
  });

  const [player, setPlayer] = useState<Pokemon>(playerPokemon);
  const [ennemy, setEnnemy] = useState<Pokemon>(ennemyPokemon);
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  useEffect(() => {
    // If it's the ennemy's turn, it attacks the player
    if (battleState.playerTurn && playerMove != null) {
			// do it here because if not it can double click on attack
      setBattleState((prev: Battle) => ({
        ...prev,
        playerTurn: false,
      }));

			// Set the new HP of the ennemy
      setEnnemy((prev: Pokemon) => ({
        ...prev,
        hp: prev.hp - calculateDamage(ennemy, player, playerMove),
      }));
    } else if (!battleState.playerTurn) {

			// Choose a random attack from the ennemy pokemon
      const attack =
        ennemy.moves[Math.floor(Math.random() * ennemy.moves.length)];

			// Now it is the player turn because the ennemy has attacked
      setBattleState((prev: Battle) => ({
        ...prev,
        playerTurn: true,
      }));

			// Set the new hp of the player
      setPlayer((prev: Pokemon) => ({
        ...prev,
        hp: prev.hp - calculateDamage(ennemy, player, attack),
      }));

			// We reset it so it fit the condition to attack for the player when he click on a new attack
      setPlayerMove(null);
    }

    // If the player or the ennemy has no more hp, the battle is over
    if ((player.hp <= 0 || ennemy.hp <= 0) && !battleState.isOver) {
      setBattleState((prev: Battle) => ({
        ...prev,
        isOver: true,
        winner: player.hp > 0 ? player : ennemy,
      }));
    }
  }, [battleState, playerMove]);

  return (
    <>
      {battleState.isOver ? (
        <>
          {battleState.winner ? battleState.winner.name : null} won the battle
        </>
      ) : (
        <>
          <BattleArena player={player} ennemy={ennemy} />
          <Controls
            setPlayerMove={setPlayerMove}
            playerMoves={player.moves}
            isPlayerTurn={battleState.playerTurn}
          />
        </>
      )}
    </>
  );
}

export default App;
