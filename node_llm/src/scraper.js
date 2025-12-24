import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeArticle(url) {
  const { data } = await axios.get(url, {
    headers: { "User-Agent": "Mozilla/5.0" }
  });

  const $ = cheerio.load(data);
  const title = $("title").text();
  const content = $("p").map((_, el) => $(el).text()).get().join("\n");

  return {
    title,
    content: content.slice(0, 4000),
    source_url: url,
    source_name: new URL(url).hostname
  };
}
