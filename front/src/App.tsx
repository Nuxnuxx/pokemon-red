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

	useEffect(() => {
		// If it's the ennemy's turn, it attacks the player
		if (!battleState.playerTurn) {
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
		}

		// If the player or the ennemy has no more hp, the battle is over
		if ((player.hp <= 0 || ennemy.hp <= 0) && !battleState.isOver) {
			setBattleState((prev: Battle) => ({
				...prev,
				isOver: true,
				winner: player.hp > 0 ? player : ennemy,
			}));
		}
	}, [battleState]);

	return (
		<>
			{battleState.isOver ? (
				<>
					{battleState.winner ? battleState.winner.name : null} won the battle
				</>
			) : (
        <>
          <BattleArena player={player} ennemy={ennemy} />
					<Controls playerMoves={player.moves} isPlayerTurn={battleState.playerTurn} />
        </>
			)}
		</>
	);
}

export default App;
