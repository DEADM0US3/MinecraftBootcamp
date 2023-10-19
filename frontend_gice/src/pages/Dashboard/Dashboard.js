import DashHome from "../../components/DashHome/DashHome"
import VerticalNav from "../../components/VerticalNav/VerticalNav"
import './Dashboard.css'

function Dashboard() {
    return (
        <>
            <div className="DashboardBody">

                <VerticalNav />
                
                <div className='VerticalNavBar'>
                </div>

                <DashHome></DashHome>

            </div>
        </>
    )
}

export default Dashboard