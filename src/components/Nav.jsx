import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All products</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
