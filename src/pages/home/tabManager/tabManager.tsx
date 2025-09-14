import { useState } from "react";
import '../../../styles/home/tabManager/tabManager.css'
import HomeTab from "../homeTab/homeTab";
import Tab from "./l1/tab";

const TabManager = () => {
  const [tabs, setTabs] = useState([{ id: 1, name: "Home" }]);
  const [activeTab, setActiveTab] = useState(1);

  const addTab = () => {
    const newId = Date.now();
    setTabs([...tabs, { id: newId, name: `Home` }]);
    setActiveTab(newId);
  };

  const closeTab = (id: number) => {
    // prevent closing the last tab
    if (tabs.length === 1) return;

    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);

    // if the active tab is closed, switch to last remaining tab
    if (activeTab === id) {
      setActiveTab(newTabs[newTabs.length - 1].id);
    }
  };

  return (
    <div className="tabManager">
      <div className="tabBar">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            name={tab.name}
            isActive={tab.id === activeTab}
            onClick={() => setActiveTab(tab.id)}
            onClose={() => closeTab(tab.id)}
          />
        ))}
        <button className="addTabBtn" onClick={addTab}>
          +
        </button>
      </div>
      <div className="tabContent">
        <HomeTab />
      </div>
    </div>
  );
};

export default TabManager;
