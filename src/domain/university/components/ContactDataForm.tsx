import { observer } from "mobx-react-lite";

import { FormGroup } from "../../../ui/FormGroup";
import { FormElement } from "../../../ui/FormElement";
import { Input } from "../../../ui/Input";

import * as Types from "../store/types";

interface ContactDataFormProps {
  store: Types.ContactDataForm & Types.ContactDataSetProp;
}

export const ContactDataForm = observer(({ store }: ContactDataFormProps) => (
  <FormGroup>
    <FormElement>
      <Input
        label={store.address.label}
        value={store.address.value}
        setValue={(val: string) => store.setProp("address", val)}
      />
    </FormElement>

    <FormElement>
      <Input
        label={store.country.label}
        value={store.country.value}
        setValue={(val: string) => store.setProp("country", val)}
      />
    </FormElement>

    <FormElement>
      <Input
        label={store.phone.label}
        value={store.phone.value}
        setValue={(val: string) => store.setProp("phone", val)}
      />
    </FormElement>

    <FormElement>
      <Input
        label={store.email.label}
        value={store.email.value}
        setValue={(val: string) => store.setProp("email", val)}
      />
    </FormElement>
  </FormGroup>
));
