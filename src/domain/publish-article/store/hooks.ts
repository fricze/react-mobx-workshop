import { Reducer, useReducer } from "react";
import { Article } from "../types/Article";
import { ArticleForm } from "./ui-state";
import { ArticleV, ArticleK, ActionType, Action } from "./actions";
import { validate } from "./actions/validate";
import { SetProp } from "./state";

export function reducer(state: ArticleForm, action: Action): ArticleForm {
  switch (action.type) {
    case ActionType.SetProp: {
      const { key, value } = action.payload;
      return {
        ...state,
        article: { ...state.article, [key]: value },
        errors: {},
      };
    }
    case ActionType.SetProps: {
      return {
        ...state,
        article: { ...state.article, ...action.payload.value },
        errors: {},
      };
    }
    case ActionType.SubmitForm: {
      return validate(action.payload.value);
    }
    default:
      return state;
  }
}

type ArticleReducer = Reducer<ArticleForm, Action>;

const initialState = {
  article: {
    title: "",
    content: "",
    excerpt: "",
  },
  errors: {},
};

export const useArticleReducer = () => {
  const [article, dispatch] = useReducer<ArticleReducer>(reducer, initialState);

  const setProp: SetProp = (key: ArticleK, value: ArticleV) =>
    dispatch({
      type: ActionType.SetProp,
      payload: {
        key,
        value: value,
      },
    });

  const setProps = (data: Article) =>
    dispatch({
      type: ActionType.SetProps,
      payload: {
        value: data,
      },
    });

  const submitForm = (value: Article) =>
    dispatch({
      type: ActionType.SubmitForm,
      payload: {
        value,
      },
    });

  return {
    article,
    submitForm,
    setProp,
    setProps,
  };
};
