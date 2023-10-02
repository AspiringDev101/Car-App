
import Link from "next/link"
import DashboardHead from "../component/dashboardHead"
import SideBar from '../component/sideBar';

// const getSeasonList = async () => {
// 	try {
// 	  let data = await SeasonService.getAll();
	  
// 	  return data.data || [];
// 	} catch (error) {
// 	  console.error("Error fetching data:", error);
// 	  return [];
// 	}
//   };
  
export default function Dashboard({params}){
	//  console.log(params)
	// const { dashboard } = params;
	// console.log('lowercase',dashboard[0].toLowerCase())
	
	// const ContentComponent = async () => {
	// 	switch (true) {
	// 	//   case dashboard[0].toLowerCase() == 'season' && dashboard.length == 1:
	
		
	// 		return <SeasonList data={await getSeasonList()} />;
	// 		break;
	// 	   case dashboard[0].toLowerCase() == 'season' && dashboard[1].toLowerCase() == 'add':
	// 	  	return <SeasonAdd />;
	// 		break;
	// 	  default:
	// 		return <>
	// 		 </>;
	// 		  break;
	// 	}
	//   };
	  
  return (
    <div className='home-wrapper'>
    		<DashboardHead />
        	<div className="main-dashboard">
			<SideBar />
    		 <div className="dashboard-content-area">
			 <div className="notification-example">
        		  <b className="notification-example1">Notification example</b>
      			</div>
				  <b className="dashboard1">Dashboard</b>
 		<div className="dashboard-content-box">
 			  <b className="basic-details">Basic details</b>
			  </div>
      				</div>
  	</div>
    </div>
  )
}
