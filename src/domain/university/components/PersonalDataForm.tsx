import { observer } from "mobx-react-lite";

import { FormGroup } from "../../../ui/FormGroup";
import { FormElement } from "../../../ui/FormElement";
import { Select } from "../../../ui/Select";
import { Input } from "../../../ui/Input";

import { Sex } from "../types/PersonalData";
import * as Types from "../store/types";

interface PersonalDataFormProps {
  store: Types.PersonalDataForm & Types.PersonalDataSetProp;
}

export const PersonalDataForm = observer(({ store }: PersonalDataFormProps) => {
  return (
    <FormGroup>
      <FormElement>
        <Input
          label="First Name"
          value={store.firstName.value}
          setValue={(val: string) => store.setProp("firstName", val)}
        />
      </FormElement>
      <FormElement>
        <Input
          label="Last Name"
          value={store.lastName.value}
          setValue={(val: string) => store.setProp("lastName", val)}
        />
      </FormElement>
      <FormElement>
        <Input
          label="Middle Name"
          value={store.middleName.value}
          setValue={(val: string) => store.setProp("middleName", val)}
        />
      </FormElement>
      <FormElement>
        <Select
          label={store.sex.label}
          value={store.sex.value}
          setValue={(value: Sex) => store.setProp("sex", value)}
          options={[
            { label: "Male", value: Sex.Male },
            { label: "Female", value: Sex.Female },
          ]}
        />
      </FormElement>
    </FormGroup>
  );
});
