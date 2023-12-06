import { useLoaderData } from "react-router-dom";
import PreviewItemsList from "../components/PreviewItemList/PreviewItemsList";
import "./product-page.css";
import { getMatchingInserts, getProductData } from "../api.js";

export async function loader({ params }) {
  const inserts = await getMatchingInserts();

  const { description, iso, productProps, productImage } = await getProductData(
    params.productId
  );

  return { inserts, description, iso, productProps, productImage };
}

export default function ProductPage() {
  const { inserts, iso, description, productProps, productImage } =
    useLoaderData();
  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <div className="left">
          <img src={productImage} className="main-image"></img>
          <h2 className="iso">{iso}</h2>
        </div>
        <div className="right">
          <h2>Описание</h2>
          <p className="description">{description}</p>
          <h2>Характеристики</h2>

          <div className="product-prop-table">
            {Object.entries(productProps).map(([prop, val], i) => {
              return (
                <p key={i} className="product-prop">
                  <span className="product-prop-name">{prop}</span>{" "}
                  <span className="product-prop-value">{val}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h3>Подходящие пластинки</h3>
        <PreviewItemsList items={inserts} />
      </div>
    </div>
  );
}
