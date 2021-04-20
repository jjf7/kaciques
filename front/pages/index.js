import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import {setLocal} from '../utils/local'
import Head from "next/head";
export default function index() {
 
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:3001/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const user = await result.json();

    if (user.token) {
      setMsg({
        status: 1,
        msg: `Bienvenid@: ${user.username},  en breve seras redireccionado...`,
      });

      //console.log(user)
     
      setLocal(JSON.stringify(user))
     

      setTimeout(() => {
        router.push("/dashboard");
      }, 5000);
    } else {
      setMsg({ status: 2, msg: user });
    }
  };
  return (
    <>
     <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
       
      </Head>
    <div className="containerCustom">
      <div className="main">
        <h4 className="title-h1 bg-light">SISTEMA DE LECTOR DE PRECIOS(SISLECPRE) <small>Ver 1.0</small></h4>
        <h5>Login</h5>
        <div className="container">
          {msg ? (
            msg.status == 1 ? (
              <div className="alert alert-success" role="alert">
                <i className="fi-rr-check"></i>
                {msg.msg}
              </div>
            ) : (
              <div className="alert alert-danger" role="alert">
                {msg.msg}
              </div>
            )
          ) : (
            ""
          )}
          <div className="row">
            <div className="offset-md-3 col-md-5 col-xs-12">
              <Form noValidate className="bg-light p-3">
                <Form.Group as={Row} style={{ marginTop: "30px" }}>
                  <Form.Label column sm={3}>
                    Email
                  </Form.Label>
                  <Col sm={9}>
                    <FormControl
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      name="email"
                      id="email"
                      required
                      type="email"
                      placeholder="Email"
                      autoFocus
                    />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Introduzca el email
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} style={{ marginTop: "30px" }}>
                  <Form.Label column sm={3}>
                    Contrase&ntilde;a
                  </Form.Label>
                  <Col sm={9}>
                    <FormControl
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      name="password"
                      id="password"
                      required
                      type="password"
                      placeholder="Password"
                    />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Introduzca la contrasena
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Form>

              <Button variant="primary mt-5" onClick={handleSubmit}>
                Iniciar sesi&oacute;n
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
