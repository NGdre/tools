import PreviewItem from "../PreviewItem/PreviewItem";
import "./PreviewItemsList.css";

export default function PreviewItemsList({ items }) {
  return (
    <div className="preview-items-list">
      {items.map((item, i) => (
        <PreviewItem {...item} key={i} />
      ))}
    </div>
  );
}
