import { useState } from "react";
import "../styles/home.scss";
import TabManager from "./home/tabManager/tabManager";
import Navbar from "./navbar/navbar";
import { ImageFile } from "../../helper/fs";
const Home = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
    return (
    <div className="homeBox">
      <div className="overlay"></div>
      <Navbar setImages={setImages}/>
      <TabManager images={images}  />
    </div>
  );
};
export default Home;
