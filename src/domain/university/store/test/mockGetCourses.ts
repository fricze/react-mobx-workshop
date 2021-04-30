import { chunk } from "lodash";

const courses = [
  "Master of Information Systems, Management and Innovation - full time",
  "Master of Information Systems, Management and Innovation - part time",
  "Master of Information Systems, Digital Business Systems - fulll time",
  "Master of Information Systems, Digital Business Systems - part time",
  "Master of Applied Computer Science with Specialization in Software Integration - full time",
  "Master of Applied Computer Science with Specialization in Software Integration - part time",
  "Master of Human-Computer Interaction - full time",
  "Master of Human-Computer Interaction - part time",
  "Bachelor of Data Science - full time",
  "Vocational study Music Business - full time",
  "Master of Information Systems -  Business Analytics - part-time",
  "Master of Information Systems -  Business Analytics - full time",
  "Other Bachelor degree in Norwegian - fill in",
  "Other Vocational Study in Norwegian - fill in",
];

const pagedCourse = chunk(courses, 3);

const response = (data: any) => ({
  json: () => ({ data }),
});

interface CourseResponse {
  list: string[];
  nextPage: boolean;
}

export type Response = Promise<{ json: () => { data: CourseResponse } }>;

export const getCourses = ({ page }: { page: number }): Response => {
  const list = pagedCourse[page];
  const nextPage = !!pagedCourse[page + 1];

  return new Promise((resolve) => {
    resolve(response({ list, nextPage }));
  });
};

export const getCoursesEmpty = ({ page }: { page: number }): Response => {
  const list: string[] = [];
  const nextPage = false;

  return new Promise((resolve) => {
    resolve(response({ list, nextPage }));
  });
};
