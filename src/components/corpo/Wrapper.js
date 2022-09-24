import Paciente from '../../paginas/paciente/Paciente'
import Perfil from '../../paginas/perfil/Perfil'
import Consultorio from '../../paginas/consultorio/Consultorio'
import Home from '../Home'
import Financeiro from '../../paginas/financeiro/Financeiro'
import Cirurgia from '../../paginas/cirurgia/Cirurgia'
import Consulta from '../../paginas/consulta/Consulta'
import Exame from '../../paginas/exame/Exame'
import Agenda from '../../paginas/agenda/Agenda'
import Relatorios from '../../paginas/relatorios/Relatorios'
import Funcionario from '../../paginas/funcionario/Funcionario'
import Dashboard from '../../paginas/dashboard/Dashboard'
import Media from 'react-media'


function defineCorpo(corpoId, classes) {
    switch (corpoId) {
        case 1:
            return <Perfil classes={classes} />
        case 11:
            return <Paciente classes={classes} />
        case 2:
            return <Exame classes={classes} />
        case 3:
            return <Consulta classes={classes} />
        case 4:
            return <Financeiro classes={classes} />
        case 5:
            return <Consultorio classes={classes} />
        case 6:
            return <Agenda classes={classes} />
        case 7:
            return <Cirurgia classes={classes} />
        case 8:
            return <Relatorios classes={classes} />
        case 9:
            return <Funcionario classes={classes} />
        case 10:
            return <Dashboard classes={classes} />
        default:
            return <Home classes={classes} />
    }
}

function Body(props) {
    const classes = props.classes;
    return (
        <div>
            <Media queries={{ small: { maxWidth: 699 } }}>
                {matches =>
                    matches.small ? (
                        <div className={classes.paperMobile}>
                            <div className={classes.wrapper}>
                                {defineCorpo(props.corpo, classes)}
                            </div>
                        </div>
                    ) : (
                        <div className={classes.paperWeb}>
                            <div className={classes.wrapper}>
                                {defineCorpo(props.corpo, classes)}
                            </div>
                        </div>
                    )
                }
            </Media>

        </div>
    )
}

export default Body;