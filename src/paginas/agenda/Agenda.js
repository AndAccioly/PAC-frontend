import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Paper } from "@mui/material";
import AgendaCorpo from "./AgendaCorpo";
import AgendaHeader from "./AgendaHeader";
import Cores from "../../util/cores";
import MesMiniatura from "./MesMiniatura";
import Filtros from "./Filtros";
import Popup from "../../components/Popup";
import InserirForm from "./InserirForm";
import Media from 'react-media'

const useStyles = makeStyles({
	rootMobile: {
		height: '100%',
		backgroundColor: Cores.azul0,
		borderRadius: '10px'
	},
	root: {
		height: '800px',
		backgroundColor: Cores.azul0,
		display: 'flex',
		borderRadius: '10px'
	},
	esquerdo: {
		height: '99%',
		borderRadius: '10px',
		width: '79%',
		margin: 'auto',
	},
	direito: {
		height: '99%',
		borderRadius: '10px',
		width: '20%',
		margin: 'auto',
	},
	cima: {
		height: '59.5%',
		borderRadius: '10px',
		width: '99%',
		margin: 'auto',
	},
	baixo: {
		height: '59.5%',
		borderRadius: '10px',
		width: '99%',
		margin: 'auto',
		display: 'flex'
	},


})

export default function Agenda(props) {
	const classes = props.classes;
	const [tipoVisualizacao, setTipoVisualizacao] = useState('2')
	const [openPopup, setOpenPopup] = useState(false)


	const onChangeVisualizacao = (item) => {
		setTipoVisualizacao(item)
	}

	const openInPopup = item => {
		//setRecordForEdit(item)
		setOpenPopup(true)
	}

	const classesLocal = useStyles();
	return (
		<Paper className={classes.paper}>


			<Media queries={{ small: { maxWidth: 699 } }}>
				{matches =>
					matches.small ? (
						<div className={classesLocal.rootMobile}>
							<div className={classesLocal.cima}>
								<AgendaHeader
									tipoVisualizacao={tipoVisualizacao}
									onChangeProps={onChangeVisualizacao}
									openInPopup={openInPopup}
								/>
								<AgendaCorpo tipoVisualizacao={tipoVisualizacao} />
							</div>
							<div className={classesLocal.baixo}>
								<MesMiniatura />
								<Filtros />
							</div>
						</div>

					) : (
						<div className={classesLocal.root}>
							<div className={classesLocal.esquerdo}>
								<AgendaHeader
									tipoVisualizacao={tipoVisualizacao}
									onChangeProps={onChangeVisualizacao}
									openInPopup={openInPopup}
								/>
								<AgendaCorpo tipoVisualizacao={tipoVisualizacao} />
							</div>
							<div className={classesLocal.direito}>
								<MesMiniatura />
								<Filtros />
							</div>
						</div>
					)
				}
			</Media>






			<Popup
				maxWidth='lg'
				openPopup={openPopup}
				setOpenPopup={setOpenPopup}
				title='Inserir item no calendário'
			>
				<InserirForm classes={classes} />
			</Popup>
		</Paper>
	)
}

