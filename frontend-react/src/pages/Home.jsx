import { useEffect, useState } from "react";
import API from "../api/api";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/articles")
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = articles.filter(a => {
    const matchFilter =
      filter === "all"
        ? true
        : filter === "processed"
        ? a.is_processed
        : !a.is_processed;

    const matchSearch = a.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchFilter && matchSearch;
  });

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#020617)",
        color: "#e5e7eb"
      }}
    >
      <h1 style={{ marginBottom: "20px", fontSize: "28px" }}>
        🧠 AI Article Dashboard
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search articles..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "20px",
          outline: "none",
          fontSize: "16px"
        }}
      />

      {/* FILTERS */}
      <div style={{ marginBottom: "25px" }}>
        {["all", "processed", "unprocessed"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              marginRight: "10px",
              padding: "8px 18px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              background:
                filter === f ? "#38bdf8" : "rgba(255,255,255,0.15)",
              color: filter === f ? "#020617" : "#e5e7eb"
            }}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ARTICLES */}
      {filtered.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}

      {filtered.length === 0 && (
        <p style={{ opacity: 0.7 }}>No articles found.</p>
      )}
    </div>
  );
}
