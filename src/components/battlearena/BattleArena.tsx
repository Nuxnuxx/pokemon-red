import "./battlearena.scss";
import Pokemon from "../pokemon/Pokemon";

interface BattleArenaProps {
	player: Pokemon;
	ennemy: Pokemon;
}

export function BattleArena({ player, ennemy }: BattleArenaProps) {
	return (
		<div className="gameplay-wrapper">
			<Pokemon {...ennemy} />
			<Pokemon {...player} />
		</div>
	);
}

export default BattleArena;
