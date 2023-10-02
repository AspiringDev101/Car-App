
import Link from "next/link"
import DashboardHead from "../component/dashboardHead"
import SideBar from '../component/sideBar';
import SeasonList from '../component/season-list'
import SeasonService from "../services/season.service"

export default async function Season () {
	const getSeasonList = async () => {
		try {
		  let data = await SeasonService.getAll();
		  
		  return data.data || [];
		} catch (error) {
		  console.error("Error fetching data:", error);
		  return [];
		}
	  };
	
	
  return (
    <div className='home-wrapper'>
    		<DashboardHead />
        	<div className="main-dashboard">
			<SideBar />
    		 <div className="dashboard-content-area">
			 <div className="notification-example">
        		  <b className="notification-example1">Notification example</b>
      			</div>
				  <SeasonList data={await getSeasonList()}/>
      				</div>
  	</div>
    </div>
  )
}
