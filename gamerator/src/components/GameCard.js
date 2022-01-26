export default function GameCard(props) {


    return (
        <div className="card">
            <img src={props.gameData.backgroundImg} className="imgCard" alt="game"/>
            <h2 className="header">{props.gameData.gameName} </h2>
            <div className="cardPlacement">
            </div>
            <h3 className="rating"> {props.gameData.esrbRating}</h3>
            <h3 className="genre"> {props.gameData.genres}</h3>
            <h3 className="rating"> {props.gameData.metaRating}</h3>
            <h3 className="rating"> {props.gameData.userRating}</h3>
        </div>
    );

}