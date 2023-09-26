"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DashboardHead from "./component/dashboardHead"
import Link from 'next/link';
const Home = () => {
  const router = useRouter();

  // Use the useEffect hook to perform the redirect when the component mounts
  useEffect(() => {
    // Redirect to the home page (replace '/' with the desired URL)
    router.push('/dashboard');
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

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
      			<b className="dashboard1">Dashboard</b>
      			<div className="dashboard-content-box">
        				<b className="basic-details">Basic details</b>
        		
      			</div>
    		</div>
  	</div>
    </div>
  );
};

export default Home;


// import { usePathname } from "next/navigation"
// export default function Home(props) {
// 	console.log(usePathname)
// 	const router = usePathname();
// 	console.log(router)
// 	//   const { query, pathname } = router
// 	console.log(props)
//   return (
//     <div className='home-wrapper'>
//     		<DashboardHead />
//         	<div className="main-dashboard">
//     		 		<div className="sidebar">
//       			<div className="sidebar-item">
//       			<div className="side-item active dashboard">Dashboard</div>
//       			<div className="side-item menu-item-2">Menu item 2</div>
//       			<div className="side-item menu-item-3">Menu item 3</div>
//       			</div>
//     		</div>
//     		<div className="dashboard-content-area">
//       			<div className="notification-example">
//         		  <b className="notification-example1">Notification example</b>
//       			</div>
//       			<b className="dashboard1">Dashboard</b>
//       			<div className="dashboard-content-box">
//         				<b className="basic-details">Basic details</b>
        		
//       			</div>
//     		</div>
//   	</div>
//     </div>
//   )
// }
