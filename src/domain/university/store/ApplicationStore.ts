import { makeAutoObservable } from "mobx";
import { ApplicationData } from "../types/ApplicationData";
import {
  ContactDataSetProp,
  ContactDataForm,
  PersonalDataSetProp,
  PersonalDataForm,
} from "./types";

export interface ApplicationFormSubmit {
  submit(this: ApplicationStore): void;
}

export class ApplicationStore
  implements
    PersonalDataForm,
    PersonalDataSetProp,
    ContactDataForm,
    ContactDataSetProp,
    ApplicationFormSubmit {
  application: ApplicationData;

  constructor() {
    this.application = makeAutoObservable(new ApplicationData());
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // get names() {
  //   const { firstName } = this.application;
  //   return {
  //     label: "First name",
  //     value: firstName,
  //     valid: firstName.length > 3,
  //   };
  // }

  get firstName() {
    const { firstName } = this.application;
    return {
      label: "First name",
      value: firstName,
      valid: firstName.length > 3,
    };
  }

  get lastName() {
    const { lastName } = this.application;
    return {
      label: "Last name",
      value: lastName,
      valid: lastName.length > 3,
    };
  }

  get middleName() {
    const { middleName } = this.application;
    return {
      label: "Middle name",
      value: middleName,
      valid: middleName.length > 3,
    };
  }

  get sex() {
    const { sex } = this.application;
    return {
      label: "Sex",
      value: sex,
      valid: true,
    };
  }

  get address() {
    const { address } = this.application;
    return {
      label: "Address",
      value: address,
      valid: address.length > 3,
    };
  }

  get country() {
    const { country } = this.application;
    return {
      label: "Country",
      value: country,
      valid: country.length > 3,
    };
  }

  get phone() {
    const { phone } = this.application;
    return {
      label: "Phone",
      value: phone,
      valid: phone.length > 3,
    };
  }

  get email() {
    const { email } = this.application;
    return {
      label: "E-mail",
      value: email,
      valid: email.length > 3,
    };
  }

  submit() {
    console.log(this.application);
  }

  setProp<K extends keyof ApplicationData>(
    this: ApplicationStore,
    key: K,
    value: ApplicationData[K]
  ): void {
    this.application[key] = value;
  }
}
