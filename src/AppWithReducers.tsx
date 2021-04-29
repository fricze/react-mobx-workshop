import { Reducer, useReducer, Dispatch, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import { getById } from "./infrastructure/services/Articles";

interface Article {
  title: string;
  content: string;
  excerpt: string;
}

type FormError = string;
type FormValid = boolean;

interface FormErrors {
  title?: FormError;
  excerpt?: FormError;
  content?: FormError;
}

interface ArticleForm {
  article: Article;
  errors: FormErrors;
  valid?: FormValid;
}

interface SetValue {
  setValue: (a: string) => void;
}

interface InputProps extends SetValue, StandardTextFieldProps {}

const Input = ({ setValue, ...props }: InputProps) => (
  <TextField {...props} onChange={(e) => setValue(e.target.value)} />
);

interface FormProps {
  store: ArticleForm;
  dispatch: Dispatch<Action>;
}

export const Form = ({ store, dispatch }: FormProps) => {
  const setTitle = (value: string) =>
    dispatch({
      type: ActionType.SetProp,
      payload: {
        key: "title",
        value: value,
      },
    });

  const setExcerpt = (value: string) =>
    dispatch({
      type: ActionType.SetProp,
      payload: {
        key: "excerpt",
        value: value,
      },
    });

  const setContent = (value: string) =>
    dispatch({
      type: ActionType.SetProp,
      payload: {
        key: "content",
        value: value,
      },
    });

  const submitForm = (value: Article) =>
    dispatch({
      type: ActionType.SubmitForm,
      payload: {
        value,
      },
    });

  const { article, errors } = store;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(article);
      }}
    >
      <FormGroup>
        <Input
          label="Title"
          value={article.title}
          setValue={setTitle}
          error={!!errors.title}
          helperText={errors.title}
        />
        <Box m={4} />
        <Input
          multiline
          rows={4}
          label="Excerpt"
          value={article.excerpt}
          setValue={setExcerpt}
          error={!!errors.excerpt}
          helperText={errors.excerpt}
        />
        <Box m={4} />
        <Input
          multiline
          rows={10}
          label="Content"
          value={article.content}
          setValue={setContent}
          error={!!errors.content}
          helperText={errors.content}
        />
        <Box m={4} />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

enum ActionType {
  SetProp = "SetProp",
  SetProps = "SetProps",
  SubmitForm = "SubmitForm",
}

type K = keyof Article;
interface SetPropPayload {
  key: K;
  value: Article[K];
}

interface SetPropsPayload {
  value: Article;
}

interface SubmitFormPayload {
  value: Article;
}

interface SetPropAction {
  type: ActionType.SetProp;
  payload: SetPropPayload;
}

interface SetPropsAction {
  type: ActionType.SetProps;
  payload: SetPropsPayload;
}

interface SubmitFormAction {
  type: ActionType.SubmitForm;
  payload: SubmitFormPayload;
}

type Action = SetPropAction | SetPropsAction | SubmitFormAction;

const badWord = (s: string) => s.match(/(banana|coconut|Radom)/gi);

const validate = (article: Article): ArticleForm => {
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

function reducer(state: ArticleForm, action: Action): ArticleForm {
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

const initialState = {
  article: {
    title: "",
    content: "",
    excerpt: "",
  },
  errors: {},
};

type ArticleReducer = Reducer<ArticleForm, Action>;

export const ArticleFormView = ({}: ArticleFormProps) => {
  const [article, dispatch] = useReducer<ArticleReducer>(reducer, initialState);

  useEffect(() => {
    getById({ id: "021-expanding-breadth-versus-coherency" })
      .then((a) => a.json())
      .then(({ data }) => {
        dispatch({
          type: ActionType.SetProps,
          payload: {
            value: data,
          },
        });
      });
  }, []);

  return (
    <Container maxWidth="md">
      <Form store={article} dispatch={dispatch} />
    </Container>
  );
};

export interface ArticleFormProps {}
