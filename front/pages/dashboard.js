import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { formatMoney } from "../utils/format";
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";

export default function index() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [dolar, setDolar] = useState([]);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("Escanea el producto");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  React.useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const u = JSON.parse(checkLocal(router));

    const res = await fetch("http://localhost:3001/products", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token,
      },
    });
    const data = await res.json();

    const resS = await fetch("http://localhost:3001/settings", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token,
      },
    });
    const dataS = await resS.json();

    setProducts(data);
    setDolar(dataS[0].dolar);
  }

 

 
  function search(e) {
    
    e.preventDefault();
   
    const result = products.find((i) => i.codebar === id);

    

    if (result) {
      setMessage("Encontrado!");
      e.target.select();
      setTitle(result.title);
      setPrice(formatMoney(result.price * dolar));
    } else {
      setMessage(id === "" ? "Escanea el producto" : "No existe");
      
    }
  }

  return (
    <>
      <Layout>
        <h4 className="title-h1">Lector de Precios</h4>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div style={{ width: "50%" }}>
            <div style={{ textAlign: "center" }}>
              <Form.Group as={Row}>
                <Col sm={12}>
                  <Form.Control
                    type="text"
                    name="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    onKeyUp={search}
                    autoComplete="off"
                    autoFocus="on"
                    placeholder="C&oacute;digo"
                  />

                  <code
                    className={
                      message === "Escanea el producto"
                        ? null
                        : message === "No existe"
                        ? "rojo"
                        : "verde"
                    }
                  >
                    {message === "Encontrado!" ? "" : message}
                  </code>

                  {message === "Encontrado!" ? (
                    <div className="mt-2 find">
                      <h1 className="titleProduct">{title}</h1>
                      <h2 className="mt-3 priceProduct">
                        {" "}
                        Precio: <b>{price}</b>{" "}
                        <span>BsS</span>
                      </h2>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Form.Group>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
