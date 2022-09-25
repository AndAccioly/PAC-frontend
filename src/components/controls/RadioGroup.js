import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from "@mui/material";

export default function RadioGroup(props) {

    const { name, label, value, onChange, items, row, disabled, ...other } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                row={row}
                value={value}
                name={name}
                onChange={onChange}
            >
                {items.map(
                    (item, index) => (
                        <FormControlLabel disabled={disabled || false} key={index} value={item.id} control={<Radio />} label={item.title} />
                    )
                )}


            </MuiRadioGroup>
        </FormControl>
    )
}