function Videogames(props) {
  return (
    <div className="game-region">
      <img className="game-img" src={`./images/${props.img}`} alt="" />
      {/* right side */}
      <div className="game-allInfo">
        {/* company and website */}
        <div className="game-companyInfo">
          <img
            className="location-icon"
            src="./images/location-icon.png"
            alt=""
          />
          <h3 className="game-company">{props.company}</h3>
          <a className="game-web" href={`${props.website}`}>
            View on official website
          </a>
        </div>
        {/* name, time, info */}
        <div className="game-nameInfo">
          <h1 className="game-name">{props.name}</h1>
          <h3 className="game-timeRange">{props.timeRange}</h3>
          <p className="game-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Videogames;
