import "./AddProductForm.css";
import AddProductButton from "../AddProductButton/AddProductButton.jsx";
import Select from "../Select/Select.jsx";

const productFields = [
  "tool cutting edge angle (KARP1)",
  "tool cutting edge angle (KARP2)",
  "tool lead angle (PSIR)",
  "clamping type code (MTP)",
  "maximum ramping angle (RMPX)",
  "minimum bore diameter (DMIN1)",
  "minimum bore diameter (DMIN2)",
  "maximum overhang (OHX)",
  "вес товара",
  "functional width",
];

export default function AddProductForm() {
  return (
    <form style={{ height: "100vh" }}>
      <div style={{ marginTop: "40px" }}>
        <div style={{ display: "flex" }}>
          <AddProductButton />
          <Select options={["пластинки", "резцы"]} />
        </div>

        <div className="fields">
          {productFields.map((fieldName, i) => {
            return (
              <div className="input-box" key={i}>
                <span>{fieldName}</span>
                <input type="text" required />
              </div>
            );
          })}
        </div>
        <input
          type="submit"
          value="создать товар"
          className="add-product-form-btn"
        />
      </div>
    </form>
  );
}
