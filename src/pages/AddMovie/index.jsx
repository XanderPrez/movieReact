import { useState, useEffect } from "react";
import CreateCardForm from "./../../components/CreateCardForm";
import Modal from "./../../components/Modal";
import style from "./style.module.scss";

function AddMovie() {
  const [isModalVisibile, setModalVisibility] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 3000);
  }, [isModalVisibile]);

  return (
    <div className={style.AddMovie}>
      <h1>Add a new movie</h1>
      <CreateCardForm setModalVisibility={setModalVisibility} callType="POST" />
      <Modal
        text="Un nuovo film è stato aggiunto alla lista!"
        isVisibile={isModalVisibile}
      />
    </div>
  );
}

export default AddMovie;