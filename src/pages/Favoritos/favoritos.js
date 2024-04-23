import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from "react-toastify";

function Favorito() {
  const [meusFilmes, setFilmes] = useState([]);

  useEffect(() => {
    function listarFilmes() {
      const recuperaLista = localStorage.getItem("@cinecatalogo");

      setFilmes(JSON.parse(recuperaLista) || []);
    }

    listarFilmes();
  }, []);

  function ExcluirFilme(id) {
    let filtroFilme = meusFilmes.filter((item) => {
      return item.id !== id;
    });
    
    toast.success("Filme removido com sucesso");
    setFilmes(filtroFilme);
  }

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
                <button onClick={() => ExcluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorito;
