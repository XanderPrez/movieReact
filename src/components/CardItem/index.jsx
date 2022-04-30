import { Link } from "react-router-dom";
import { DELETE } from "../../utils/https";
import style from "./style.module.scss";

function CardItem({ cardData, onForceRender }) {
  const onCardDelete = () => {
    DELETE(cardData.id).then((data) => onForceRender("/"));
  };

  return (
    <div className={style.CardItem}>
      <Link to={`/edit-movie/${cardData.id}`}>
        <h2>{cardData.title}</h2>
      </Link>
      <button onClick={onCardDelete} className={style.CardItem__btn}>
        ❌
      </button>
      <p>{cardData.year}</p>
      <img src={cardData.poster} alt={cardData.title} />
      <p>{cardData.description}</p>
      <div className={style.genres}>
        <ul>
           {/* {cardData.genres && -- Codice originale
            cardData.genres.map((genre, i) => <li key={i}>{genre}</li>)} */}
        {cardData && Array.isArray(cardData.genres) ? cardData.genres.map((genre, index) => <li key={index}>{genre}</li>):<li>{cardData.genres}</li>}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;
         