
import DashboardHead from "../../../component/dashboardHead"
import SideBar from '../../../component/sideBar';
import SeasonEditComponent from '../../../component/season-edit'
  
export default async function SeasonEdit (props) {
	
  return (
    <div className='home-wrapper'>
    		<DashboardHead />
        	<div className="main-dashboard">
			<SideBar />
    		 <div className="dashboard-content-area">
			 <div className="notification-example">
        		  <b className="notification-example1">Notification example</b>
      			</div>
			<SeasonEditComponent id={props.params.id}/>
      				</div>
  	</div>
    </div>
  )
}
