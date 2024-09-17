// Axios
import { BlogFetch } from "../axios/BlogFetch";

// Router
import { useParams, useNavigate } from "react-router-dom";

// React
import { useEffect, useState } from "react";

// CSS
import "./Edit.css";

const Edit = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await BlogFetch.get(`/posts/${id}`);
        setData(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();

    const objectEdit = {
      title: title,
      content: content,
    };

    BlogFetch.put(`/posts/${id}`, {
      body: {
        ...objectEdit,
        id: 1,
        userID: 1,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    navigate("/");
  };

  return (
    <div className="edit-article">
      <h1>Editando: {data.title}</h1>
      <div className="edit-article-container">
        <form onSubmit={handleEdit}>
          <label htmlFor="title" id="title">
            <span>Título</span>
            <input
              type="text"
              name="title"
              placeholder="Digite o título..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="content">
            <span>Conteúdo:</span>
            <textarea
              name="content"
              placeholder="Digite o conteúdo..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </label>
          <button type="submit" className="btn">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
