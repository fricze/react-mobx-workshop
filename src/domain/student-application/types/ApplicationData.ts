import { PersonalData } from "./PersonalData";
import { ContactData } from "./ContactData";
import { CitizenData } from "./CitizenData";

export type ApplicationData = PersonalData & ContactData & CitizenData;
