
import Link from "next/link"
import DashboardHead from "../component/dashboardHead"
import SeasonList from "../component/season-list"
import SeasonAdd from "../component/season-add"
import SeasonService from '../services/season.service'

const getSeasonList = async () => {
	try {
	  let data = await SeasonService.getAll();
	  console.log('data  d',data.data)
	  return data.data || [];
	} catch (error) {
	  console.error("Error fetching data:", error);
	  return [];
	}
  };
  
export default function Dashboard({params}){

	
	

	 console.log(params)
	const { dashboard } = params;
	console.log(dashboard[0].toLowerCase())
	
	const ContentComponent = async () => {
		switch (true) {
		  case dashboard[0].toLowerCase() == 'season' && dashboard.length == 1:
	
		
			return <SeasonList data={await getSeasonList()} />;
			break;
		   case dashboard[0].toLowerCase() == 'season' && dashboard[1].toLowerCase() == 'add':
		  	return <SeasonAdd />;
			break;
		  default:
			return <>
			<b className="dashboard1">Dashboard</b>
			<div className="dashboard-content-box">
				  <b className="basic-details">Basic details</b>
		  
			  </div> </>;
			  break;
		}
	  };
	  
  return (
    <div className='home-wrapper'>
    		<DashboardHead />
        	<div className="main-dashboard">
    		 		<div className="sidebar">
      			<div className="sidebar-item">
      			<div className="side-item active dashboard"><Link href='/Dashboard'> Dashboard</Link></div>
      		
      			<div className="side-item menu-item-3"><Link href='/season'> item 3</Link></div>
      			<div className="side-item menu-item-3"><Link href='/season'>Season</Link></div>
      			</div>
    		</div>
    		 <div className="dashboard-content-area">
			 <div className="notification-example">
        		  <b className="notification-example1">Notification example</b>
      			</div>
			<ContentComponent/>
      			
					</div>
  	</div>
    </div>
  )
}
