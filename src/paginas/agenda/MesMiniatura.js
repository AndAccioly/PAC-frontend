import { makeStyles } from "@material-ui/core";
import Media from 'react-media'

const useStyles = makeStyles({
    mesMiniatura: {
		marginTop: '0.5%',
		backgroundColor: 'white',
		height: '40.2%',
		margin: 'auto',
		borderRadius: '10px',
		width: '99%',
	},
	mesMiniaturaMobile: {
		marginTop: '0.5%',
		backgroundColor: 'white',
		height: '99%',
		margin: 'auto',
		borderRadius: '10px',
		width: '49.5%',
	},
})

export default function AgendaCorpo(props) {
    const classes = useStyles();



    return (
            <Media queries={{ small: { maxWidth: 699 } }}>
                {matches =>
                    matches.small ? (
						<div className={classes.mesMiniaturaMobile}>

						</div>
                    ) : (
						<div className={classes.mesMiniatura}>

						</div>
                    )
                }
            </Media>
       
    )

}