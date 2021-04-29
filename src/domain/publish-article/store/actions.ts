import { Article } from "../types/Article";

export enum ActionType {
  SetProp = "SetProp",
  SetProps = "SetProps",
  SubmitForm = "SubmitForm",
}

export type ArticleK = keyof Article;
export type ArticleV = Article[ArticleK];
interface SetPropPayload {
  key: ArticleK;
  value: ArticleV;
}

interface SetPropAction {
  type: ActionType.SetProp;
  payload: SetPropPayload;
}

interface SetPropsPayload {
  value: Article;
}

interface SetPropsAction {
  type: ActionType.SetProps;
  payload: SetPropsPayload;
}

interface SubmitFormPayload {
  value: Article;
}

interface SubmitFormAction {
  type: ActionType.SubmitForm;
  payload: SubmitFormPayload;
}

export type Action = SetPropAction | SetPropsAction | SubmitFormAction;
