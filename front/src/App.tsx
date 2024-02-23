import "./app.scss";
import { playerPokemon, ennemyPokemon, calculateDamage } from "./pokemon";
import BattleArena from "./components/battlearena/BattleArena";
import { useEffect, useState } from "react";
import Controls from "./components/controls/Controls";

function App() {
  const [battleState, setBattleState] = useState<Battle>({
    playerTurn: playerPokemon.speed >= ennemyPokemon.speed,
    battleLog: [],
    isOver: false,
  });

  const [player, setPlayer] = useState<Pokemon>(playerPokemon);
  const [ennemy, setEnnemy] = useState<Pokemon>(ennemyPokemon);
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  useEffect(() => {
    // If it's the ennemy's turn, it attacks the player
    if (battleState.playerTurn && playerMove != null) {
      setBattleState((prev: Battle) => ({
        ...prev,
        playerTurn: false,
      }));

      setEnnemy((prev: Pokemon) => ({
        ...prev,
        hp: prev.hp - calculateDamage(ennemy, player, playerMove),
      }));
    } else if (!battleState.playerTurn) {
      const attack =
        ennemy.moves[Math.floor(Math.random() * ennemy.moves.length)];

      setBattleState((prev: Battle) => ({
        ...prev,
        playerTurn: true,
      }));

      setPlayer((prev: Pokemon) => ({
        ...prev,
        hp: prev.hp - calculateDamage(ennemy, player, attack),
      }));

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
