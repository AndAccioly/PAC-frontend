import { makeStyles } from "@material-ui/core";
import Cores from "../../../util/cores";
import Util from "../../../util/methods/Util";

const item = {
    width: '24.9%',
    border: '1px solid ' + Cores.azul4,
    height: '204px',
    backgroundColor: Cores.cinzaFundo,

}

const useStyles = makeStyles({
    corpo: {
        width: '100%',
        backgroundColor: Cores.azul1,
        borderRadius: '10px',
    },
    linha: {
        display: 'flex',
    },
    mes: {
        margin: '3px',
        width: item.width,
        height: item.height,
        borderRadius: '10px',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: item.backgroundColor,
            cursor: 'pointer'
        }
    },
})

const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
export default function PanelAno(props) {
    const classes = useStyles();
    const {appointments} = props

    var mesJsx = []

    meses.forEach((item, index) => {
        mesJsx.push(<div key={index}> {item} </div>)
    })

    var mesJsxGrupos = Util.dividirArrayEmGrupos(mesJsx, 4)

    return (
        <div className={classes.corpo}>

            {mesJsxGrupos.map((grupo, indexGrupo) => {
                return (<div key={indexGrupo} className={classes.linha}>
                    {grupo.map((mes, index) => {
                        return (
                            <div key={index} className={classes.mes}>
                                {mes}
                            </div>
                        )
                    })}
                </div>)
            })}

        </div>
    )

}