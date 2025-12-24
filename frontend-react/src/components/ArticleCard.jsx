import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 20,
      borderRadius: 12,
      marginBottom: 20
    }}>
      <h3>{article.title}</h3>
      <p style={{ color: "#666" }}>{article.source_name}</p>

      {article.is_processed && (
        <div style={{
          background: "#f0f7ff",
          padding: 10,
          borderRadius: 6,
          marginTop: 10
        }}>
          🧠 LLM Processed
        </div>
      )}

      <Link to={`/articles/${article.id}`}>Read more →</Link>
    </div>
  );
}
