import { ArticleForm } from "../ui-state";
import { Article } from "../../types/Article";

const badWord = (s: string) => s.match(/(banana|coconut|Radom)/gi);

export const validate = (article: Article): ArticleForm => {
  const errors = {
    title:
      article.title.length < 3
        ? "Title is too short!"
        : badWord(article.title)
        ? "Excerpt contains bad word. Please remove it posting"
        : "",
    excerpt: badWord(article.excerpt)
      ? "Excerpt contains bad word. Please remove it posting"
      : "",
    content: badWord(article.content)
      ? "Content contains bad word. Please remove it before posting"
      : "",
  };

  return {
    article,
    errors,
    valid: Object.values(errors).some((a) => a.length > 0),
  };
};
