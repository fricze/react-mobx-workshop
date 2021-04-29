import { Article } from "../types/Article";
import { ArticleForm } from "./ui-state";
import { ArticleV, ArticleK } from "./actions";

export type DomainStore = Article;
export type UiStore = ArticleForm;

export type SetProp = (key: ArticleK, value: ArticleV) => void;
