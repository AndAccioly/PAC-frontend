import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    corpo: {
       
    },
})


export default function PanelAno(props) {
    const classes = useStyles();


    return (
        <div className={classes.corpo}>
           Ano
        </div>
    )

}