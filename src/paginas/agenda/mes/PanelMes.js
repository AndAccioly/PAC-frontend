import { makeStyles } from "@material-ui/core";
import Cores from "../../../util/cores";
import Util from '../../../util/methods/Util'

const item = {
    width: '14.3%',
    border: '1px solid ' + Cores.azul4,
    height: '104px',
    backgroundColor: Cores.azul4,

}

const useStyles = makeStyles({
    corpo: {
        maxHeight: 700,
        overflow: 'auto',
    },
    header: {
        marginTop: '1%',
        display: 'flex',

    },
    headerItem: {
        height: '30px',
        width: '14.3%',
        border: '1px solid ' + Cores.azul4,
        borderRadius: '10px'
    },
    semanas: {
        marginTop: '1%',
        border: '1px solid ' + Cores.azul4,
        borderRadius: '15px'
    },
    semana: {
        width: '100%',
        display: 'flex',

    },
    diaItem: {
        width: item.width,
        height: item.height,
        borderBottom: item.border,
        borderRight: item.border,
        '&:hover': {
            borderRadius: '10px',
            backgroundColor: item.backgroundColor,
            cursor: 'pointer'
        }
    },
    diaItemUltimo: {
        width: item.width,
        height: item.height,
        borderBottom: item.border,
        '&:hover': {
            borderRadius: '10px',
            backgroundColor: item.backgroundColor,
            cursor: 'pointer'
        }
    },
    diaItemUltimaLinha: {
        width: item.width,
        height: item.height,
        borderRight: item.border,
        '&:hover': {
            borderRadius: '10px',
            backgroundColor: item.backgroundColor,
            cursor: 'pointer'
        }
    },
    diaItemUltimaLinhaUltimo: {
        width: item.width,
        height: item.height,
        '&:hover': {
            borderRadius: '10px',
            backgroundColor: item.backgroundColor,
            cursor: 'pointer'
        }
    }
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

    console.log('Semanas:')
    console.log(semanasJsxGrupos)

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
                            if(indexGrupo / 5 === 1){
                                if(index / 6 === 1){
                                    return (
                                        <div key={index} className={classes.diaItemUltimaLinhaUltimo}>
                                            {semana}
                                        </div>
                                    )
                                }else{
                                    return (
                                        <div key={index} className={classes.diaItemUltimaLinha}>
                                            {semana}
                                        </div>
                                    )
                                }
                            }
                            if (index / 6 === 1) {
                                return (
                                    <div key={index} className={classes.diaItemUltimo}>
                                        {semana}
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className={classes.diaItem}>
                                        {semana}
                                    </div>
                                )
                            }
                        })}
                    </div>)
                })}


            </div>
        </div>
    )

}