import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux'
const Nav = () => {
    const count = useSelector((state) => state.count.value)
    // console.log(count,'count')
  return (
    <div>
<div className='main'>
<Link to='/home'>
<div className="home">home</div>
</Link>
<Link to='/Contact'>
<div className="contact">contact</div>
</Link>
<Link  to='/Kart'>
<div className="kart">kart {count} </div>
</Link>




</div>
    </div>
  )
}

export default Nav