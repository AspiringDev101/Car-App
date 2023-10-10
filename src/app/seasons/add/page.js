
import DashboardHead from "../../component/dashboardHead"
import SideBar from '../../component/sideBar';
import SeasonAddComponent from '../../component/season-add'
  
export default async function SeasonAdd () {
	
  return (
    <div className='home-wrapper'>
    		<DashboardHead />
        	<div className="main-dashboard">
			<SideBar />
    		 <div className="dashboard-content-area">
			 <div className="notification-example">
        		  <b className="notification-example1">Notification example</b>
      			</div>
			<SeasonAddComponent />
      				</div>
  	</div>
    </div>
  )
}
