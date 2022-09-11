import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"
import brLocale from "date-fns/locale/pt-BR";

export default function DatePicker(props) {

    const { name, label, value, onChange, ...other } = props

    const convertToDefEventParameter = (name, value) => ({
        target: {
            name,
            value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                name={name}
                value={value}
                format='dd/MM/yyyy'
                onChange={date => onChange(convertToDefEventParameter(name, date))}
                {...other}
            />
        </MuiPickersUtilsProvider>
    )
}