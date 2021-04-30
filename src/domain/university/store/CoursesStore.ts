import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";
import {
  FetchMoreCourses,
  CoursesData,
  CourseState,
  CoursesList,
} from "./types";
import { getCourses } from "../../../infrastructure/services/Courses";

export class CoursesStore implements CoursesData, FetchMoreCourses {
  courses: CoursesList = [];
  private nextPage?: number = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private fetchMoreSuccess({ data }: { data: any }) {
    if (data.nextPage) {
      this.nextPage = (this.nextPage || 0) + 1;
    } else {
      this.nextPage = undefined;
    }

    this.courses = this.courses
      .filter(({ state }) => state !== CourseState.Loading)
      .concat(data.list.map((title: string) => ({ title })));
  }

  fetchMore() {
    if (this.nextPage !== undefined && Number.isInteger(this.nextPage)) {
      const skeletons = new Array(3).fill(0).map(() => ({
        title: "",
        state: CourseState.Loading,
        id: uuid(),
      }));

      this.courses.push(...skeletons);

      getCourses({ page: this.nextPage })
        .then((r) => r.json())
        .then(this.fetchMoreSuccess);
    }
  }

  get nextPageAvailable() {
    return this.nextPage !== undefined && Number.isInteger(this.nextPage);
  }
}
