import { Sex, PersonalData } from "./PersonalData";
import { ContactData } from "./ContactData";
import { CitizenData } from "./CitizenData";

export class ApplicationData implements PersonalData, ContactData, CitizenData {
  firstName = "";
  lastName = "";
  middleName = "";
  sex = Sex.Female;

  address = "";
  country = "";
  phone = "";
  email = "";

  birthDate = "";
  citizenship = "";
  needVisa = false;
  passportNo = "";
}
