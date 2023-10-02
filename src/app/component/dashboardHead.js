import Image from 'next/image'
import IconBusiness from '../../../public/icon_business.svg'
import Link from 'next/link'

const DashboardHead = () => {
    return (
        <div className="main-header">
        <div className="header-wrapper">
        <div className="logo">
              <Link href='/'><div className="logo1">LOGO</div></Link>
        </div>
        <div className="main-header-item">
        <div className="main-header-item1">
<Image src={IconBusiness}  />
      <b className="business-name">Business Name</b>
      </div>
              <b className="account"><Link href={'/login'}>Account </Link></b>
        </div>
        </div>
  </div>
    );
}

export default DashboardHead;
