export enum Sex {
  Male = "Male",
  Female = "Female",
}

export interface PersonalData {
  firstName: string;
  middleName: string;
  lastName: string;
  sex: Sex;
  birthDate: string;
}
