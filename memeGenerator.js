import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function MemeGenerator(props) {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")

      .then((res) => {
        console.log(res.data.data.memes);
        setAllMemes(res.data.data.memes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (event) => {
    console.log("WORKING");
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const getMemeImage = (event) => {
    event.preventDefault();
    console.log("allImage", allMemes);
    const randNum = Math.floor(Math.random() * allMemes.length);
    const randMemeIng = allMemes[randNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randMemeIng,
    }));
  };

  return (
    <div>
      <h3 className="head">{props.name}</h3>
      <div className="outline">
        <div className="container">
          <header className="header">
            <img
              className="image"
              src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
              alt="Problem?"
            ></img>
            <p>Meme Generator</p>
          </header>
        </div>
        <div>
          <form className="form">
            <input
              className="form--input"
              type="text"
              name="topText"
              placeholder="Top Text"
              value={meme.topText}
              onChange={handleClick}
            ></input>
            <input
              className="form--input"
              type="text"
              name="bottomText"
              placeholder="Bottom Text"
              value={meme.bottomText}
              onChange={handleClick}
            ></input>

            <button className="form--button" onClick={getMemeImage}>
              Get A New Meme Image
            </button>
          </form>
          <div className="meme">
            <img
              className="meme--image"
              src={meme.randomImage}
              alt="Problem?"
            ></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemeGenerator;
