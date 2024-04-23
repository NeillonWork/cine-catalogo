import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";

function Favorito() {
  const [meusFilmes, setFilmes] = useState([]);

  useEffect(() => {
    function listarFilmes() {
      const recuperaLista = localStorage.getItem("@cinecatalogo");

      setFilmes(JSON.parse(recuperaLista) || []);
    }

    listarFilmes();
  }, []);

  return (
    <div className="meus-filmes">
      <h1>Favoritos</h1>
      <ul>
        {meusFilmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}> Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorito;
