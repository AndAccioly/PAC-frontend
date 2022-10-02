import { makeStyles } from "@material-ui/core";
import Media from 'react-media'

const useStyles = makeStyles({
	filtros: {
		backgroundColor: 'white',
		height: '59%',
		margin: 'auto',
		borderRadius: '10px',
		width: '99%',
		marginTop: '1.2%'
	},
	filtrosMobile: {
		marginTop: '0.5%',
		backgroundColor: 'white',
		height: '99%',
		margin: 'auto',
		borderRadius: '10px',
		width: '49.5%',
	},
})

export default function Filtros(props) {
	const classes = useStyles();



	return (
		<Media queries={{ small: { maxWidth: 699 } }}>
			{matches =>
				matches.small ? (
					<div className={classes.filtrosMobile}>

					</div>
				) : (
					<div className={classes.filtros}>

					</div>
				)
			}
		</Media>
	)

}