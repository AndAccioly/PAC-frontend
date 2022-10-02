import { makeStyles } from "@material-ui/core";
import Cores from "../../../util/cores";
import Util from '../../../util/methods/Util'

const item = {
    width: '14.3%',
    border: '1px solid ' + Cores.azul4,
    height: '106px',
    backgroundColor: Cores.cinzaFundo,

}

const useStyles = makeStyles({
    corpo: {
        maxHeight: 750,
        overflow: 'auto',
        backgroundColor: Cores.azul1,
        borderRadius: '10px'
    },
    header: {
        marginTop: '1%',
        display: 'flex',

    },
    headerItem: {
        height: '35px',
        width: '14.3%',
        marginLeft: '2px',
        marginRight: '2px',
        backgroundColor: 'white',
        borderRadius: '10px'
    },
    semanas: {
        marginTop: '1%',
        borderRadius: '10px'
    },
    semana: {
        width: '100%',
        display: 'flex',

    },
    diaItem: {
        borderRadius: '10px',
        margin: '2px',
        backgroundColor: 'white',
        width: item.width,
        height: item.height,
        '&:hover': {
            backgroundColor: item.backgroundColor,
            cursor: 'pointer'
        }
    },
})



const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
const diasMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]


export default function PanelMes(props) {
    const classes = useStyles();
    var semanasJsx = []

    diasMes.forEach((item, index) => {
        semanasJsx.push(<div key={index}> {item} </div>)
    })

    var semanasJsxGrupos = Util.dividirArrayEmGrupos(semanasJsx, 7)
    return (
        <div className={classes.corpo}>
            <div className={classes.header}>
                {diasSemana.map((item, index) => (
                    <div className={classes.headerItem} key={index}> {item} </div>
                ))}
            </div>
            <div className={classes.semanas}>


                {semanasJsxGrupos.map((grupo, indexGrupo) => {
                    return (<div key={indexGrupo} className={classes.semana}>
                        {grupo.map((semana, index) => {
                             return (
                                <div key={index} className={classes.diaItem}>
                                    {semana}
                                </div>
                            )
                        })}
                    </div>)
                })}


            </div>
        </div>
    )

}