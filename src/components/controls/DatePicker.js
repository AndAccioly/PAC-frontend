import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns"
import brLocale from "date-fns/locale/pt-BR";

const useStyles = makeStyles({
    root: {
        '& .MuiIconButton-root.Mui-disabled': {
            color: 'rgba(12, 43, 92, 0.8)',
        },
        '& .MuiInputBase-root.Mui-disabled': {
            '-webkit-text-fill-color': 'rgba(0, 0, 0, 0.8)',
        },
     
    }
})

export default function DatePicker(props) {

    const { name, label, value, onChange, ...other } = props
    const classes = useStyles()

    const convertToDefEventParameter = (name, value) => ({
        target: {
            name,
            value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                className={classes.root}
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