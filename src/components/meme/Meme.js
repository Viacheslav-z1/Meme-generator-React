import React from "react";
import "./meme.scss";
import memesData from "./memesData.js";

function Meme() {

  const [allMemes, setAllMemes] = React.useState(memesData); 

  const [memeImg, setMemeImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  });

  let getRandomMeme = (e) => {
    e.preventDefault();
    const memeData = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memeData.length);
    let url = memeData[randomNum].url;

    setMemeImg( prevName =>{
      return {
        ...prevName,
        randomImg: url,
      };
    }
    );
    
  };

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
          <button onClick={getRandomMeme} className="meme__btn">
            Отримати картинку-мем
          </button>
        </form>
        <img src={memeImg.randomImg} alt="img" className="meme__img" />
      </div>
    </div>
  );
}

export default Meme;
