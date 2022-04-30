import style from "./style.module.scss";

function Modal({ text, isVisibile }) {
  return (
    <>
      {isVisibile && (
        <div className={style.Modal}>
          <p className={style.Modal__paragraph}>{text}</p>
        </div>
      )}
    </>
  );
}

export default Modal;