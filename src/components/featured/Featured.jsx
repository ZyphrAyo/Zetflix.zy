import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://wallpapercave.com/wp/wp5522060.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://th.bing.com/th/id/R.b96645e8618c3d4f09b4333d60390e48?rik=cIz203mgK%2fm48A&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f62038e248c4085000441913b.png&ehk=O7hrVb2sU6zHuGzHZI6Hh4af21NdQNNm0UV29s2oJME%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <span className="desc">
        Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third season followed in October 2017 and July 2019 respectively, and the fourth season aired in two parts in May and July 2022. In February 2022, Stranger Things was renewed for a fifth and final season.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}