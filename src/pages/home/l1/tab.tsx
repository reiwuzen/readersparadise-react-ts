import "../../../styles/home/l1/tab.css";

type TabProps = {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
  onClose?: () => void;
};

const Tab = ({ name, isActive = false, onClick, onClose }: TabProps) => {
  return (
    <div
      className={`tab ${isActive ? "active" : ""}`}
      aria-label={`${name}`}
      onClick={onClick}
    >
      <span className="tabName">{name}</span>
      {onClose && (
        <button
          className="closeBtn"
          onClick={(e) => {
            e.stopPropagation(); // prevent switching tab when closing
            onClose();
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Tab;
