import React from 'react'
import { useRouter } from "next/router";
import {checkLocal} from '../utils/local'
export default function Header() {

    const [user, setUser] = React.useState('')
    const router = useRouter();

    React.useEffect(() => {
        if(!localStorage.getItem("user")){
            checkLocal(router)
        }else{
          setUser(JSON.parse(localStorage.getItem("user")))
        }
      }, []);


    return (
        <header>
           <div className="logo">
                    <span>SISTEMA DE LECTOR DE PRECIOS</span>
                    <span>(SISLECPRE)</span>
                    <span>Ver 1.0</span>
           </div>
           <div><span><small>Elaborado por <b>tupaginaonline.net</b></small></span></div>
           <div className="user">
           <span><b>Bienvenid@</b> {user.username}</span>
           </div>
        </header>
    )
}
