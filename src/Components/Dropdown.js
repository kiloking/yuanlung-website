import React,{useState} from 'react'
import { Link } from 'react-router-dom';
function Dropdown({menuItems}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <ul className=' absolute bg-[#00000090]  top-20 left-1/2 -translate-x-1/2  text-white w-auto break-keep flex flex-row'>
      {menuItems.map((item,index)=>{
        return(
          <Link key={index} to={item.path} onClick={() => setClick(false)} className=' hover:bg-[#9D803E80] px-3  py-3'>
            {item.title}
          </Link>
        )
      })}
    </ul>
  )
}

export default Dropdown