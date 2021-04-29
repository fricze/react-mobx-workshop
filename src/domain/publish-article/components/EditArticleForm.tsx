import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import { Input } from "../../../ui/Input";
import { SetProp } from "../store/state";

interface FormProps {
  store: any;
  submitForm: any;
  setProp: SetProp;
}

export const EditArticleForm = ({ store, submitForm, setProp }: FormProps) => {
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
          setValue={(v) => setProp("title", v)}
          error={errors.title}
        />
        <Box m={4} />
        <Input
          multiline
          rows={4}
          label="Excerpt"
          value={article.excerpt}
          setValue={(v) => setProp("excerpt", v)}
          error={errors.excerpt}
        />
        <Box m={4} />
        <Input
          multiline
          rows={10}
          label="Content"
          value={article.content}
          setValue={(v) => setProp("content", v)}
          error={errors.content}
        />
        <Box m={4} />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};
