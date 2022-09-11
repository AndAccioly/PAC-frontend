import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

export default function Checkbox(props) {

    const { name, label, value, onChange, ...other } = props

    const convertToDefEventParameter = (name, value) => ({
        target: {
            name,
            value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                label={label}
                control={<MuiCheckbox
                    name={name}
                    checked={value}
                    onChange={e => onChange(convertToDefEventParameter(name, e.target.checked))}
                    color='primary'
                    {...other}
                />}
            >

            </FormControlLabel>
        </FormControl>
    )
}