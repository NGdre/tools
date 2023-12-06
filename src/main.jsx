import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./resetCSS.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Index, { loader as indexLoader } from "./routes/index";
import ProductPage, {
  loader as productPageLoader,
} from "./routes/product-page";
import CreateProductPage from "./routes/create-product-page";
import ProductsPage, {
  loader as productsPageLoader,
} from "./routes/products-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index />, loader: indexLoader },
      {
        path: "/products/:productId",
        element: <ProductPage />,
        loader: productPageLoader,
      },
      { path: "/create-product", element: <CreateProductPage /> },
      {
        path: "/:productsType",
        element: <ProductsPage />,
        loader: productsPageLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
