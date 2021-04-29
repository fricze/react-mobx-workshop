import { Meta } from "@storybook/react";
import { ArticleFormView } from "./AppWithReducers";

export default {
  title: "Edit Article",
  component: ArticleFormView,
} as Meta;

export const ApplicationForm = () => <ArticleFormView />;
