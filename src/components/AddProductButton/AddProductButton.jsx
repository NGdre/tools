import "./AddProductButton.css";
import addImageIcon from "../../assets/add-image-icon.png";

export default function AddProductButton() {
  return (
    <button type="button" className="add-image">
      <span className="add-image-text">Добавить картинку товара</span>
      <span className="icon-box">
        <img src={addImageIcon} />
      </span>
    </button>
  );
}
