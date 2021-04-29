import { Sex } from "../types/PersonalData";
import { ApplicationData } from "../types/ApplicationData";

export const initialApplication: ApplicationData = {
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
