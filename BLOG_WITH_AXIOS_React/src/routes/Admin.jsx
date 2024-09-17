// Axios
import { BlogFetch } from "../axios/BlogFetch";

// Router
import { useNavigate, useParams } from "react-router-dom";

// React
import { useState, useEffect } from "react";

// CSS
import "./Admin.css";

const Admin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BlogFetch.get("/posts");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  const handleDelete = async (id) => {
    try {
      await BlogFetch.delete(`/posts/${id}`);
      setData(data.filter((article) => article.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Gerenciar posts</h1>
      {data.length > 0 ? (
        data.map((article) => (
          <div className="container-article" key={article.id}>
            <h2>{article.title}</h2>
            <div className="container-btns">
              <button
                onClick={() => navigate(`/posts/edit/${article.id}`)}
                className="btn-edit"
              >
                Editar
              </button>
              <button
                className="btn-remove"
                onClick={() => handleDelete(article.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Admin;
