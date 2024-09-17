// React
import { useEffect, useState } from "react";

// Axios
import { BlogFetch } from "../axios/BlogFetch";

// Router
import { useParams } from "react-router-dom";

// CSS
import "./Posts.css";

const Posts = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await BlogFetch.get(`/posts/${id}`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="article-unit">
      <h2>{data.title || <p>Carregando...</p>}</h2>
      <p>{data.content}</p>
    </div>
  );
};

export default Posts;
