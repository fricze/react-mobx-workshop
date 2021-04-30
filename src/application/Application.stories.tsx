import { Meta } from "@storybook/react";
import { ApplicationFormView } from "./ApplicationForm";
import { EditArticlePage } from "./EditArticleReducers";
import {
  SingleStudentApplication,
  StudentApplication,
} from "../domain/university/StudentApplication";

import { StudentApplicationWithDownshift } from "../domain/university/StudentApplicationWithDownshift";

import { AvailableCourses } from "../domain/university/AvailableCourses";

export default {
  title: "Student Application",
  component: ApplicationFormView,
} as Meta;

export const ApplicationForm = () => <ApplicationFormView />;
export const EditArticleForm = () => <EditArticlePage />;
export const MobxForm = () => <StudentApplication />;
export const MobxAvailableCourses = () => <AvailableCourses />;
export const MobxSingleForm = () => <SingleStudentApplication />;
export const MobxWithDownshift = () => <StudentApplicationWithDownshift />;
