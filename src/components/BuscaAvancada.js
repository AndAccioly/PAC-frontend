
import { makeStyles } from '@material-ui/core'
import { useState } from 'react';
import Cores from '../util/cores'
import Icones from '../util/icones';

const useStyles = makeStyles({
    root: {
        color: Cores.azul5,
        fontWeight: 600,
        display: 'flex',
        marginTop: '3%',
 
        '&:hover': {
            cursor: 'pointer'
        }
    },
    open: {
      
        display: 'flex',
    },
    close: {
       
        display: 'flex',
    },
    children: {
      
    }


})

export default function BuscaAvancada(props) {
    const [isOpen, setIsOpen] = useState(false)

    const { children } = props
    const classes = useStyles()

    const onClickOpen = () => {
        setIsOpen(true)
    }
    const onClickClose = () => {
        setIsOpen(false)
    }

    return (
        <div className={classes.root}>
            {isOpen ?
                <div style={{ width: '100%',}}>
                    <div className={classes.open} onClick={onClickClose}>
                        Busca Avançada
                        <div className={classes.icone}>
                            {Icones.arrowDropDownIcon}
                        </div>
                    </div>
                    <div className={classes.children}>
                        {children}
                    </div>
                </div>
                :
                <div>
                    <div className={classes.close} onClick={onClickOpen}>
                        Busca Avançada
                        <div className={classes.icone}>
                            {Icones.arrowRightIcon}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}