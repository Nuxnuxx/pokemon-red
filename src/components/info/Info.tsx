import "./info.scss";

function Info() {
  return (
      <div className="info-wrapper">
        <p className="info-wrapper-name">Pikachu</p>
        <p className="info-wrapper-level">:L10</p>
        <div className="info-wrapper-health-wrapper">
          <p className="info-wrapper-health-text">HP:</p>
          <div className="info-wrapper-health-bar"></div>
        </div>
      </div>
  );
}

export default Info;
