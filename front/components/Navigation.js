import React from 'react'
import { useRouter  } from "next/router";
import Link from "next/link";
import Toggle from "./Toggle";
import { checkLocal } from "../utils/local";

export default function Navigation() {

  const router = useRouter();
  const [show, setShow] = React.useState(true)
  
  const path = router.pathname

  React.useEffect( () => {
    const u = JSON.parse(checkLocal(router));
    if(u.role === "user") {
      setShow(false)
    }
  }, [])

  const handleClick = () => {
    localStorage.removeItem('user');
    router.push('/')
  }
 
  return (
    <aside> 
      <div className={ path == '/dashboard' ? 'active' : ''}>
        <Link href="/dashboard">
          <a>
            <i className="fi-rr-calculator"></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </div>

      {show ? (<>
        <div className={ path == '/settings' ? 'active' : ''}>
        <Link href="/settings">
          <a>
            <i className="fi-rr-settings"></i>
            <span>Configuraci&oacute;n</span>
          </a>
        </Link>
      </div>

      <div className={ path == '/products' ? 'active' : ''}>
        <Link href="/products">
          <a>
            <i className="fi-rr-list-check"></i>
            <span>Products</span>
          </a>
        </Link>
      </div>

      <div className={ path == '/users' ? 'active' : ''}>
        <Link href="/users">
          <a>
            <i className="fi-rr-users"></i>
            <span>USers</span>
          </a>
        </Link>
      </div>
      </>) : ''}

      <div>
      
        <a href="#" onClick={handleClick}>
          <i className="fi-rr-sign-out"></i>
          <span>Salir</span>
        </a>
        
      </div>

      <div>
        <Toggle />
      </div>
    </aside> 

  );
}
