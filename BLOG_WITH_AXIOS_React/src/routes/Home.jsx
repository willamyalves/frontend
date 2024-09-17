// axios
import { BlogFetch } from "../axios/BlogFetch";

// React
import { useEffect, useState } from "react";

// Router
import { useNavigate } from "react-router-dom";

// CSS
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BlogFetch.get("/posts");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="home">
      <h1>ÚLTIMOS POSTS</h1>
      {data.length > 0 ? (
        data.map((post) => (
          <div className="article" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button
              onClick={() => navigate(`/posts/${post.id}`)}
              className="btn"
            >
              Ler mais...
            </button>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
