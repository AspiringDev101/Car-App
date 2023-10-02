import Link from "next/link";


const SideBar = () => {
	const menuItems = [
		
		// { label: "Season / Add", href: "/season/add" },
		{ label: "Season", href: "/season/list" },
	  ];
    return (
        <div className="sidebar">
			<div className="sidebar-item">
				<div className="side-item dashboard active"><Link href='/dashboard'> Dashboard</Link></div>
				{menuItems.map((item, index) => (
      			<div className={`side-item   `}><Link href={item.href}>{item.label}</Link></div>
				))
			}
      			</div>
    		</div>
    );
}

export default SideBar;
