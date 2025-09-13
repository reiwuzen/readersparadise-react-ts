import "../styles/home.css";
import TabManager from "./home/tabManager/tabManager";
import Navbar from "./navbar/navbar";
const Home = () => {
  return (
    <div className="homeBox">
      <Navbar />
      <TabManager />
    </div>
  );
};
export default Home;
