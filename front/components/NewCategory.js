import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";

export default function newCategory({ setMsg }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const categoryObject = {
    title: "",
  };
  const [category, setCategory] = useState(categoryObject);

  const handleSubmit = async (event) => {
    const u = JSON.parse(checkLocal(router));
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);

      const result = await fetch("http://localhost:3001/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": u.token,
        },
        body: JSON.stringify(category),
      });

      const response = await result.json();


      if (response == "success") {
        setMsg({ status: 1, msg: "Se ha agregado correctamente la nueva categoria" });
        setShow(false);
        setCategory(categoryObject);
        
      } else {
        setMsg({ status: 2, msg: 'Rellene el formulario' });
      }
     
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Nueva Categor&iacute;a
      </Button>

      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Categor&iacute;a</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            

            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                Nombre
              </Form.Label>
              <Col sm={9}>
                <FormControl
                  onChange={(e) => {
                    setCategory({ ...category, title: e.target.value });
                  }}
                  name="title"
                  id="title"
                  required
                  type="text"
                  placeholder="Nombre de la categoria"
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Introduzca el nombre de la categoria
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar categor&iacute;a
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
