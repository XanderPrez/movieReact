import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GET } from "../../utils/https";

import CardItem from "../../components/CardItem";
import CreateCardForm from "../../components/CreateCardForm";
import style from "./style.module.scss";

function EditMovie() {
  const location = useLocation();
  const [movieData, setMovieData] = useState({});
  const movieId = location.pathname.split("/").reverse()[0];

  useEffect(() => {
    GET(movieId).then((data) => setMovieData(data));
  }, []);

  return (
    <div className={style.EditMovie}>
      <CardItem cardData={movieData} />
      <CreateCardForm setModalVisibility={false} callType="PUT" />
    </div>
  );
}

export default EditMovie;