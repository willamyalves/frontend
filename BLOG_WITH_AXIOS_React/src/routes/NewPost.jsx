// Router
import { useNavigate } from "react-router-dom";

// React
import { useState } from "react";

// Axios
import axios from "axios";
import { BlogFetch } from "../axios/BlogFetch.jsx";

// CSS
import "./NewPost.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const object = {
      title: title,
      content: content,
    };

    try {
      await BlogFetch.post("/posts", { ...object, userId: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title" id="title">
          <span>Título</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label htmlFor="content">
          <span>Conteúdo:</span>
          <textarea
            name="content"
            placeholder="Digite o conteúdo..."
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>
        </label>
        <button type="submit" className="btn">
          Criar Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
