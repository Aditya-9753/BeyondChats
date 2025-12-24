import "dotenv/config";
import { scrapeArticle } from "./scraper.js";
import { processWithLLM } from "./llm.js";
import { uploadArticle } from "./uploader.js";

const BACKEND = process.env.BACKEND_API_URL;

const URLS = [
  "https://www.ibm.com/topics/artificial-intelligence",
  "https://en.wikipedia.org/wiki/Artificial_intelligence",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "https://beyondchats.com/blogs/choosing-the-right-ai-chatbot-a-guide/",
  "https://beyondchats.com/blogs/google-ads-are-you-wasting-your-money-on-clicks/",
  "https://beyondchats.com/blogs/how-ai-chatbots-handle-multi-language-support-for-global-businesses/"
];

console.log("🚀 Node-LLM Pipeline Started");

for (const url of URLS) {
  try {
    console.log(`🔗 Scraping: ${url}`);
    const article = await scrapeArticle(url);

    const processed = processWithLLM(article);
    await uploadArticle(processed, BACKEND);

    console.log("✅ Uploaded:", processed.title);
  } catch (err) {
    console.error("❌ Failed:", url, err.message);
  }
}

console.log("🎉 All articles processed");
