import { makeStyles } from "@material-ui/core";
import Box from '@mui/material/Box';
import ItemLinhaDia from "./ItemLinhaDia";

const useStyles = makeStyles({
    corpo: {
        display: 'grid',
        maxHeight: 718,
        overflow: 'auto',
    },

})

const values = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']

const workingValues = ['7:00', '8:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']


export default function PanelDia(props) {
    const classes = useStyles();

    return (
        <div className={classes.corpo}>
            {workingValues.map(
                (item, index) => (
                    <ItemLinhaDia key={index} item={item} index={index} />
                )
            )}
        </div>
    )

}