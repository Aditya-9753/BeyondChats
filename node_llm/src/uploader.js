import axios from "axios";

export async function uploadArticle(article, backendUrl) {
  await axios.post(`${backendUrl}/api/articles/`, article);
}
