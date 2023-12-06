import { Link, useLoaderData } from "react-router-dom";
import PreviewItemsList from "../components/PreviewItemList/PreviewItemsList";
import { getInserts, getTurningTools } from "../api.js";

export async function loader() {
  const inserts = await getInserts();
  const turningTools = await getTurningTools();

  return { inserts, turningTools };
}

export default function Index() {
  const { inserts, turningTools } = useLoaderData();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ minWidth: "70%" }}>
        <div className="gallery">
          <h2>пластинки</h2>
          <PreviewItemsList items={inserts} />
          <Link to="/inserts" className="more">
            {"больше товаров->"}
          </Link>
        </div>

        <div className="gallery">
          <h2>резцы</h2>
          <PreviewItemsList items={turningTools} />
          <Link to="/turning-tools" className="more">
            {"больше товаров->"}
          </Link>
        </div>
      </div>
    </div>
  );
}
