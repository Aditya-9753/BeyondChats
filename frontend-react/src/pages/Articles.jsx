import { useEffect, useState } from "react";
import API from "../api/api";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    API.get("/articles")
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = articles.filter(a => {
    if (filter === "processed") return a.is_processed;
    if (filter === "unprocessed") return !a.is_processed;
    return true;
  });

  return (
    <div style={{ padding: 30 }}>
      <h2>Articles</h2>

      <select
        onChange={e => setFilter(e.target.value)}
        style={{ padding: 8, marginBottom: 20 }}
      >
        <option value="all">All</option>
        <option value="processed">Processed</option>
        <option value="unprocessed">Unprocessed</option>
      </select>

      {filtered.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
