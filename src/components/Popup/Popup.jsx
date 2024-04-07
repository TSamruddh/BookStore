import "./Popup.css";
import { FaWindowClose } from "react-icons/fa";
function Popup({ content, setOpen }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={() => setOpen(false)} className="close-btn">
          <FaWindowClose />
        </button>

        <div style={{ padding: "12px" }}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
export default Popup;
