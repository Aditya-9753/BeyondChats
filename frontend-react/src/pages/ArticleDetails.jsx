import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

export default function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    API.get(`/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!article) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div style={{ padding: 30 }}>
      <h1>{article.title}</h1>
      <p>{article.source_name}</p>

      <hr />
      <p>{article.content}</p>

      {article.is_processed && (
        <div style={{
          background: "#eef6ff",
          padding: 20,
          borderRadius: 10,
          marginTop: 30
        }}>
          <h3>🧠 LLM Summary</h3>
          <p>{article.summary || "Summary coming soon..."}</p>
        </div>
      )}
    </div>
  );
}
