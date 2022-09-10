

function defineCorpo(corpoId, classes){
    //switch(corpoId){
        // case 1:
        //     return <Artigos classes={classes}/>
        // case 21:
        //     return <Artigo />
        // case 3:
        //     return <SobreMim classes={classes}/>
        // case 4:
        //     return <Agendamento classes={classes}/>
        // default:
        //     return <Home classes={classes}/>    
    //}
        return (<div></div>)
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