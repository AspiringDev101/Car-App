import Image from 'next/image'
import IconBusiness from './icon_business.svg'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='home-wrapper'>
    		<div class="main-header">
      			<div class="header-wrapper">
      			<div class="logo">
        				<Link href='/'><div class="logo1">LOGO</div></Link>
      			</div>
      			<div class="main-header-item">
      			<div class="main-header-item1">
          <Image src={IconBusiness}  />
    			<b class="business-name">Business Name</b>
        		</div>
        				<b class="account">Account</b>
      			</div>
      			</div>
    		</div>
        	<div class="main-dashboard">
    		 		<div class="sidebar">
      			<div class="sidebar-item">
      			<div class="side-item active dashboard">Dashboard</div>
      			<div class="side-item menu-item-2">Menu item 2</div>
      			<div class="side-item menu-item-3">Menu item 3</div>
      			</div>
    		</div>
    		<div class="dashboard-content-area">
      			<div class="notification-example">
        		  <b class="notification-example1">Notification example</b>
      			</div>
      			<b class="dashboard1">Dashboard</b>
      			<div class="dashboard-content-box">
        				<b class="basic-details">Basic details</b>
        		
      			</div>
    		</div>
  	</div>
    </div>
  )
}
