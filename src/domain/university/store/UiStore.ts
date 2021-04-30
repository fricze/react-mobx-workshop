import { makeAutoObservable } from "mobx";
import { ToggleCourses, ShowCourses, Tab, TabGroup, SetTab } from "./types";

export class UiStore implements SetTab, TabGroup, ToggleCourses, ShowCourses {
  activeTab = Tab.Personal;
  coursesList = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setTab(tab: Tab): void {
    this.activeTab = tab;
  }

  toggleCoursesList() {
    this.coursesList = !this.coursesList;
  }
}
