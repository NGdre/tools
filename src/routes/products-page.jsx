import { useLoaderData } from "react-router-dom";
import PreviewItemsList from "../components/PreviewItemList/PreviewItemsList";
import { getInserts, getTurningTools } from "../api";

export async function loader({ params }) {
  const { productsType } = params;

  if (productsType === "inserts") {
    return await getInserts();
  } else if (productsType === "turning-tools") {
    return await getTurningTools();
  }
}

export default function ProductsPage() {
  const items = useLoaderData();
  return (
    <div>
      <PreviewItemsList items={items} />
    </div>
  );
}
