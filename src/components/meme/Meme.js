import './meme.scss';


function Meme() {
  return (
    <div className="meme">
      <div className="container">
        <form className="meme__inner-form">
          <input
            type="text"
            className="meme__input"
            placeholder="Верхній текст"
          />
          <input
            type="text"
            className="meme__input"
            placeholder="Нижній текст"
          />
          <button className="meme__btn">
            Отримати картинку-мем
          </button>
        </form>
      </div>
    </div>
  );
}


export default Meme;