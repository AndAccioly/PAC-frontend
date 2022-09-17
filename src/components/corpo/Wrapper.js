import Paciente from '../../paginas/paciente/Paciente'
import Perfil from '../../paginas/perfil/Perfil'
import Consultorio from '../../paginas/consultorio/Consultorio'
import Home from '../Home'
import Financeiro from '../../paginas/financeiro/Financeiro'
import Cirurgia from '../../paginas/cirurgia/Cirurgia'
import Consulta from '../../paginas/consulta/Consulta'
import Exame from '../../paginas/exame/Exame'
import Agenda from '../../paginas/agenda/Agenda'
import Relatorios from '../relatorios/Relatorios'

function defineCorpo(corpoId, classes){
    switch(corpoId){
        case 1:
            return <Perfil classes={classes}/>
        case 11:
            return <Paciente classes={classes}/>
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