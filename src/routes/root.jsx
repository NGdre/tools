import { Outlet, NavLink } from "react-router-dom";
import SearchInput from "../components/SearchInput/SearchInput.jsx";

export default function Root() {
  return (
    <>
      <header>
        <div
          className="nav-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <nav
            style={{
              margin: "0 10px",
              borderRadius: "5px",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                display: "flex",
              }}
            >
              <li className="li">
                <NavLink to={`/`} className="nav-link">
                  главная
                </NavLink>
              </li>
              <li className="li">
                <NavLink to={`/inserts`} className="nav-link">
                  пластинки
                </NavLink>
              </li>
              <li className="li">
                <NavLink to={`/turning-tools`} className="nav-link">
                  резцы
                </NavLink>
              </li>
              <li className="li">
                <NavLink to={`/create-product`} className="nav-link">
                  создать товар
                </NavLink>
              </li>
            </ul>
          </nav>
          <SearchInput />
        </div>
      </header>
      <div className="container" style={{ marginTop: "30px" }}>
        <Outlet />
      </div>
    </>
  );
}
