import { Article } from "../types/Article";

type FormError = string;
type FormValid = boolean;

interface FormErrors {
  title?: FormError;
  excerpt?: FormError;
  content?: FormError;
}

export interface ArticleForm {
  article: Article;
  errors: FormErrors;
  valid?: FormValid;
}
