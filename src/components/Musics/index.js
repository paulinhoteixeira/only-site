import MusicsData from "../../Data/MusicsData";

const Musics = () => (
  <div className="musics">
    {MusicsData.map((item) => {
      return <img className="logo" src={item.image} alt={item.ep} />;
    })}
  </div>
);

export default Musics;
