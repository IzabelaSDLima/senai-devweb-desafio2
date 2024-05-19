import { NavLink } from "react-router-dom";
import './styles.css';

function Home() {
    return (
      <div className="button-home">
        <button type="button">
          <NavLink to = '/cadastro'>Cadastro de Veículos</NavLink>
        </button>
      </div>
    );
  }
  
  export default Home;
  