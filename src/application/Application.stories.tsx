import { Meta } from "@storybook/react";
import { ApplicationFormView } from "./ApplicationForm";
import { EditArticlePage } from "./EditArticleReducers";
import { StudentApplication } from "../domain/university/StudentApplication";

export default {
  title: "Student Application",
  component: ApplicationFormView,
} as Meta;

export const ApplicationForm = () => <ApplicationFormView />;
export const EditArticleForm = () => <EditArticlePage />;
export const MobxForm = () => <StudentApplication />;
