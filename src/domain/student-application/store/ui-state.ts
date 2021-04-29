import { Sex } from "../types/PersonalData";

interface FormField<Value> {
  label: string;
  value: Value;
}

export interface ApplicationForm {
  // first name + last name
  names: FormField<string>;

  lastName: FormField<string>;

  sex: FormField<Sex>;
  birthDate: FormField<string>;

  // address + country
  fullAddress: FormField<string>;

  phone: FormField<string>;
  email: FormField<string>;
  citizenship: FormField<string>;
  needVisa: FormField<boolean>;
  passportNo: FormField<string>;
}
