import { Sex, PersonalData } from "../types/PersonalData";
import { ContactData } from "../types/ContactData";
import { Course, Courses } from "../types/Courses";

export interface FormField<Value> {
  label: string;
  value: Value;
  valid: boolean;
}

interface MPersonalDataForm {
  firstName: FormField<string>;
  middleName: FormField<string>;
  lastName: FormField<string>;
  sex: FormField<Sex>;
}

export type PersonalDataForm = Readonly<MPersonalDataForm>;

export interface PersonalDataSetProp {
  setProp<K extends keyof MPersonalDataForm>(
    this: MPersonalDataForm,
    key: K,
    value: PersonalData[K]
  ): void;
}

interface MContactDataForm {
  address: FormField<string>;
  country: FormField<string>;
  phone: FormField<string>;
  email: FormField<string>;
}

export type ContactDataForm = Readonly<MContactDataForm>;

export interface ContactDataSetProp {
  setProp<K extends keyof MContactDataForm>(
    this: MContactDataForm,
    key: K,
    value: ContactData[K]
  ): void;
}

export enum CourseState {
  Loading = "Loading",
  Loaded = "Loaded",
}

export type CourseView = Course & { state: CourseState; id: string };
export type CoursesList = CourseView[];

export interface CoursesData {
  courses: CoursesList;
  nextPageAvailable: boolean;
  activeCourse?: string;
}

export interface FetchMoreCourses {
  fetchMore: () => void;
}

export interface SetActiveCourse {
  setActive: (course: string) => void;
}

export enum Tab {
  Personal = "Personal data",
  Contact = "Contact data",
}

export const TabValues = Object.values(Tab);

export interface TabGroup {
  activeTab: Tab;
}

export interface SetTab {
  setTab(tab: TabGroup[keyof TabGroup]): void;
}

export interface ShowCourses {
  coursesList: boolean;
}

export interface ToggleCourses {
  toggleCoursesList: () => void;
}
