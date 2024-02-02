import "./app.scss";
import { playerPokemon, ennemyPokemon, calculateDamage } from "./pokemon";
import BattleArena from "./components/battlearena/BattleArena";
import { useEffect, useState } from "react";
import Controls from "./components/controls/Controls";

function App() {
	const [battleState, setBattleState] = useState<Battle>({
		player: playerPokemon,
		ennemy: ennemyPokemon,
		playerTurn: playerPokemon.speed >= ennemyPokemon.speed,
		battleLog: [],
		isOver: false,
	});

	useEffect(() => {
		if (!battleState.playerTurn && !battleState.isOver) {
			const attack =
				battleState.ennemy.moves[
				Math.floor(Math.random() * battleState.ennemy.moves.length)
				];
			setBattleState((prev: Battle) => ({
				...prev,
				playerTurn: true,
				player: {
					...prev.player,
					hp:
						prev.player.hp - calculateDamage(prev.ennemy, prev.player, attack),
				},
			}));
		}

		if (
			(battleState.player.hp <= 0 || battleState.ennemy.hp <= 0) &&
			!battleState.isOver
		) {
			setBattleState((prev: Battle) => ({
				...prev,
				isOver: true,
				winner: prev.player.hp > 0 ? prev.player : prev.ennemy,
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
					<BattleArena
						player={battleState.player}
						ennemy={battleState.ennemy}
					/>
					<Controls
						setBattleState={setBattleState}
						calculateDamage={calculateDamage}
						isPlayerTurn={battleState.playerTurn}
						playerMoves={playerPokemon.moves}
					/>
				</>
			)}
		</>
	);
}

export default App;
