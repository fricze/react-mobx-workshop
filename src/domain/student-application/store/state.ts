import { Sex } from "../types/PersonalData";
import { ApplicationData } from "../types/ApplicationData";
import { ApplicationForm } from "./ui-state";

const initialApplication: ApplicationData = {
  firstName: "",
  lastName: "",
  middleName: "",
  sex: Sex.Male,

  address: "",
  country: "",
  phone: "",
  email: "",

  birthDate: "",
  citizenship: "",
  needVisa: false,
  passportNo: "",
};

export type DomainStore = ApplicationData;
export type UiStore = ApplicationForm;

export const initialState: DomainStore = initialApplication;

type DomainKey = keyof DomainStore;
type DomainValue = DomainStore[DomainKey];

export type setProp = (key: DomainKey, value: DomainValue) => void;
