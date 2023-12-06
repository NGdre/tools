import "./PreviewItem.css";
import { Link } from "react-router-dom";

export default function PreviewItem({ thumbnail, iso, id }) {
  return (
    <Link to={`/products/${id}`} className="preview-item">
      <img src={thumbnail} className="preview-img"></img>
      <p className="iso">{iso}</p>
    </Link>
  );
}
