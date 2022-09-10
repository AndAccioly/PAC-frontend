import Cliente from '../cliente/Cliente'
import Consultorio from '../consultorio/Consultorio'
import Home from '../Home'
import Financeiro from '../financeiro/Financeiro'
import Cirurgia from '../cirurgia/Cirurgia'
import Consulta from '../consulta/Consulta'
import Exame from '../exame/Exame'
import Agenda from '../agenda/Agenda'
import Relatorios from '../relatorios/Relatorios'

function defineCorpo(corpoId, classes){
    switch(corpoId){
        case 1:
            return <Cliente classes={classes}/>
        case 11:
            return <Cliente classes={classes}/>
        case 2:
            return <Exame classes={classes}/>
        case 3:
            return <Consulta classes={classes}/>
        case 4:
            return <Financeiro classes={classes}/>
        case 5:
            return <Consultorio classes={classes}/>
        case 6:
            return <Agenda classes={classes}/>
        case 7:
            return <Cirurgia classes={classes}/>
        case 8:
            return <Relatorios classes={classes}/>
        default:
            return <Home classes={classes}/>    
    }
}

function Body(props) {
    const classes = props.classes;
    console.log('CORPO')
    console.log(props.corpo)
    return (
        <div className={classes.wrapper}>
            <div className={classes.conteudo}>
                <div></div>
               
            </div>
            {defineCorpo(props.corpo, classes)}
        </div>
    )
}
					
export default Body;