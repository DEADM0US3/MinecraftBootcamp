import SimboloDescarga from '../../assets/SimboloDescarga.png';

function BloqueDashHome({ imagen, tittle, text, color }) {



    return (
        <>
            <div className="DashboardOptionsBloques">
                <div className='DashHomeObjetoColor' style={{ backgroundColor:`rgba(${color},0.3)` }}>
                    <img className='SimboloDashHome' src={imagen} />

                </div>
                <div className='DashHomeTexto'>
                    <h3>{tittle}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default BloqueDashHome