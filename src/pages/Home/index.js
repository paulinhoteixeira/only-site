import Header from "../../components/Header";
import Main from "../../components/Main";
import Musics from "../../components/Musics";
import Merch from "../../components/Merch";
import Footer from "../../components/Footer";

const Home = () => (
  <>
    <Header />
    <div className="divider-2" id="home"></div>
    <Main />
    <div className="divider-1"></div>
    <Musics />
    <div className="divider-2"></div>
    <Merch />
    <div className="divider-1"></div>
    <Footer />
  </>
);

export default Home;