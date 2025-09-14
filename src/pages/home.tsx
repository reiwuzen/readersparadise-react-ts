import "../styles/home.css";
import TabManager from "./home/tabManager/tabManager";
import Navbar from "./navbar/navbar";
const Home = () => {
  return (
    <div className="homeBox">
      <div className="overlay"></div>
      <Navbar />
      <TabManager />
    </div>
  );
};
export default Home;
