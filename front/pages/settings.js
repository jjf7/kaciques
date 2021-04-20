import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { formatMoney, replace } from "../utils/format";
import { checkLocal } from "../utils/local";
import { useRouter } from "next/router";

function settings() {
 
  const router = useRouter();
  const [settings, setSettings] = useState([]);
  const [dolar, setDolar] = useState('');
  const [msg, setMsg] = useState("");

  const getData = async () => {
    const u = JSON.parse(checkLocal(router));
    const res = await fetch("http://localhost:3001/settings",{
    headers: {
      "Content-Type": "application/json",
      "x-access-token": u.token,
    },
  });
  const data = await res.json();

  setDolar(formatMoney(data[0].dolar))
  setSettings(data)
  
  }

  useEffect ( () => {
    const u = JSON.parse(checkLocal(router));
    if(u.role === "user") {
      router.push('/dashboard')
    }
    getData()
  })

  const handleKeyUp = (e) => {
    function change(value) {
      return value
        .replace(/\D/g, "")
        .replace(/([0-9])([0-9]{2})$/, "$1,$2")
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    }
    e.target.value = change(e.target.value);
    setDolar(e.target.value);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setDolar(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dolar === "") {
      setMsg({ status: 2, msg: 'Debe introducir el precio del dolar' });


    }else{
      const u = JSON.parse(checkLocal(router));
      const result = await fetch(
        `http://localhost:3001/settings/${settings[0]._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": u.token,
          },
          body: JSON.stringify({ dolar: replace(dolar) }),
        }
      );
  
      const json = await result.json();
  
      if (json == "success") {
        setMsg({ status: 1, msg: "Success" });
      } else {
        setMsg({ status: 2, msg: json });
      }
  
      console.log(json);

    }

    
  };

  return (
    <Layout>
      <h4 className="title-h1">Configuraci&oacute;n</h4>
      {msg ? (
        msg.status == 1 ? (
          <div className="alert alert-success" role="alert">
           <i className="fi-rr-check"></i> Se ha modificado correctamente 
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {msg.msg}
          </div>
        )
      ) : (
        ""
      )}
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-2 col-xs-12 label">
            <label className="">Precio del D&oacute;lar:</label>
          </div>
          <div className="col-md-3 col-xs-12">
            <input
              type="text"
              id="dolar"
              onKeyUp={handleKeyUp}
              onChange={handleOnChange}
              className="form-control"
              placeholder="Introduzca el precio del D&oacute;lar"
              value={dolar}
            />
            <span>1$</span>
          </div>
        </div>

        <div className="form-group ">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Guardar
          </button>
        </div>
      </div>
    </Layout>
  );
}

 

export default settings;
