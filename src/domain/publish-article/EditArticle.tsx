import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { getById } from "../../infrastructure/services/Articles";
import { useArticleReducer } from "./store/hooks";
import { EditArticleForm } from "./components/EditArticleForm";

export const EditArticleContainer = () => {
  const { article, submitForm, setProp, setProps } = useArticleReducer();

  useEffect(() => {
    getById({ id: "021-expanding-breadth-versus-coherency" })
      .then((a) => a.json())
      .then(({ data }) => {
        setProps(data);
      });
  }, []);

  return (
    <Container maxWidth="md">
      <EditArticleForm
        store={article}
        submitForm={submitForm}
        setProp={setProp}
      />
    </Container>
  );
};
