import "./pokemon.scss";
import { useState } from "react";

function Pokemon({ name, lvl, hp, image, isEnnemy = false }: Partial<Pokemon>) {

	if (hp === undefined) {
		return <div>undefined</div>;
	}

	const baseHp = Math.floor(hp);
	const [currentHp, _] = useState(Math.floor(hp));

	return (
		<>
			{isEnnemy ? (
				<>
					<div className="info-wrapper">
						<p className="info-wrapper-name">{name}</p>
						<p className="info-wrapper-level">:L{lvl}</p>
						<div className="info-wrapper-health-wrapper">
							<p className="info-wrapper-health-text">
								HP:{baseHp}/{currentHp}
							</p>
							<div className="info-wrapper-health-bar"></div>
						</div>
					</div>

					<div className="image-wrapper">
						<img src={image} alt={name} />
					</div>
				</>
			) : (
				<>
					<div className="image-wrapper">
						<img src={image} alt={name} />
					</div>

					<div className="info-wrapper">
						<p className="info-wrapper-name">{name}</p>
						<p className="info-wrapper-level">:L{lvl}</p>
						<div className="info-wrapper-health-wrapper">
							<p className="info-wrapper-health-text">
								HP:{baseHp}/{currentHp}
							</p>
							<div className="info-wrapper-health-bar"></div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default Pokemon;
