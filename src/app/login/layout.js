"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import HeaderSvg from './header.svg'

import './login.css'



const Layout = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [content, setContent] = useState([]);
//     const [isClick, setIsClick] = useState(false);
    
useEffect(() => {
  setContent([
    {
      title:'Application hosting',
      content:'Easily add one or multiple databases to your application. All dedicated databases come with internal connections for the best possible performance.'
    },
    {
      title:'Application hosting 1',
      content:'Easily add one or multiple databases to your application. All dedicated databases come with internal connections for the best possible performance.'
    },
    {
      title:'Application hosting 2',
      content:'Easily add one or multiple databases to your application. All dedicated databases come with internal connections for the best possible performance.'
    }
  ]
  )

}, []);


  let timer = setInterval(() => {
    // Auto-change the slider button every 10 seconds
    console.log(currentIndex)
    setCurrentIndex(currentIndex == 2 ? 0: currentIndex +1 );
  }, 5000);
 


  
    console.log('children',children)
    return (
        <div className='login-page'>
        <div className="login-main">
            <div className="login-header"><Link href={'/'}><Image src={HeaderSvg} /></Link></div>
            <div className="login-content">
                <div>
                  {
                    content.map((res,index) =>(
                      index == currentIndex?
                      <>
                      <h3 className={`login-content-h3 ${currentIndex === index ? 'active' : ''}`}>{res.title}</h3>
                      <p className={`login-content-p ${currentIndex === index ? 'active' : ''}`}>{res.content}</p>
                      </>: null
                    ))
                    }
                    <Link  href='/' className='login-content-href'>
                        <span>
                            Learn more
                        </span>
                    </Link>
                    <div className="slider">
                      
                    {[1, 2, 3].map((button , Index) => (
                      <button key={Index}
                      className={`slider-button ${currentIndex === Index ? 'active' : ''}`}
                    
                      ></button>
                        ))}
                       
        {/* <button    
          className={`slider-button ${currentIndex === 0 ? 'active' : ''}`}
          onClick={(e) =>{ e.preventDefault(); setIsClick(true);setCurrentIndex(0)}}
      ></button>
        <button    
          className={`slider-button ${currentIndex === 1 ? 'active' : ''}`}
          onClick={(e) =>{ e.preventDefault(); setIsClick(true);setCurrentIndex(1)}}
      ></button>
        <button    
          className={`slider-button ${currentIndex === 2 ? 'active' : ''}`}
          onClick={(e) =>{ e.preventDefault(); setIsClick(true) ;setCurrentIndex(2)}}
      ></button> */}
    

   
               </div>
                </div>
                
            </div>
            
            <div className="login-form">{children}</div>
            

        </div>
        </div>
    );
}

export default Layout;
