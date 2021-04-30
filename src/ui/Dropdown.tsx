import { observer } from "mobx-react-lite";
import { UseSelectStateChange, useSelect } from "downshift";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Button,
  FormLabel,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { useStyles } from "./dropdown/styles";

interface DropdownSelectItem {
  primary: string;
  secondary: string;
}

interface DropdownSelectProps {
  onChange: (val: string) => void;
  label: string;
  items: DropdownSelectItem[];
}

export const DropdownSelect = observer(
  ({ onChange, label, items }: DropdownSelectProps) => {
    const classes = useStyles();
    const itemToString = (item: any) => item.primary;

    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      onSelectedItemChange: (val: UseSelectStateChange<DropdownSelectItem>) => {
        if (val && val.selectedItem) {
          onChange(val.selectedItem.secondary);
        }
      },
      items,
      itemToString,
    });

    return (
      <div>
        <FormLabel {...getLabelProps()}>Choose a course:</FormLabel>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          {...getToggleButtonProps()}
        >
          {selectedItem ? itemToString(selectedItem) : label}
          <ExpandMoreIcon className={classes.rightIcon} />
        </Button>

        <List className={classes.root} {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => {
              return (
                <ListItem
                  key={`${item.primary}-${index}`}
                  className={
                    index === highlightedIndex ? classes.highlighted : undefined
                  }
                  {...getItemProps({
                    item: item,
                    index,
                  })}
                >
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                  />
                </ListItem>
              );
            })}
        </List>
      </div>
    );
  }
);
