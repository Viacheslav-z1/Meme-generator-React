import React from "react";
import "./meme.scss";

function Meme() {
  const [memeImg, setMemeImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

 const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
     async function getMemes() {
       const res = await fetch("https://api.imgflip.com/get_memes");
       const data = await res.json();
       setAllMemes(data.data.memes);
     }
     getMemes();
  }, []);

  let getRandomMeme = (e) => {
    e.preventDefault();
    const memeData = allMemes;
    const randomNum = Math.floor(Math.random() * memeData.length);
    let url = memeData[randomNum].url;

    setMemeImg((prevName) => {
      return {
        ...prevName,
        randomImg: url,
      };
    });
  };

  function handleChange(event) {
    let { name, value } = event.target;
    if (value.length > 30) {
      value = value.slice(0, 30);
    }
    setMemeImg((prevName) => {
      return {
        ...prevName,
        [name]: value,
      };
    });
  }

  return (
    <div className="meme">
      <div className="container">
        <form className="meme__inner-form">
          <input
            onChange={handleChange}
            value={memeImg.topText}
            name="topText"
            type="text"
            className="meme__input"
            placeholder="Верхній текст"
          />
          <input
            onChange={handleChange}
            name="bottomText"
            value={memeImg.bottomText}
            type="text"
            className="meme__input"
            placeholder="Нижній текст"
          />
          <button onClick={getRandomMeme} className="meme__btn">
            Отримати картинку-мем
          </button>
        </form>
        <div className="meme__img-box">
          <img src={memeImg.randomImg} alt="img" className="meme__img" />
          <h2 className="meme-top-text">{memeImg.topText}</h2>
          <h2 className="meme-bottom-text">{memeImg.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Meme;
