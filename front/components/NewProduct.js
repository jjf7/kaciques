import { useState } from "react";
import { replace } from "../utils/format";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";

export default function NewCategory({ categories, setMsg }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const productObject = {
    title: "",
    price: 0.0,
    codebar: "",
    category: "",
  };
  const [product, setProduct] = useState(productObject);

  const handleSubmit = async (event) => {
    const u = JSON.parse(checkLocal(router));
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);

      const result = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": u.token,
        },
        body: JSON.stringify(product),
      });

     

      const response = await result.json();

      console.log(response);

      if (response == "success") {
        setMsg({ status: 1, msg: "Se ha agregado correctamente el nuevo producto" });
        setShow(false);
        setProduct(productObject);
        
      } else {
        setMsg({ status: 2, msg: 'Rellene el formulario' });
      }
     
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleKeyUp = (e) => {
    function change(value) {
      return value
        .replace(/\D/g, "")
        .replace(/([0-9])([0-9]{2})$/, "$1,$2")
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    }
    e.target.value = change(e.target.value);
    setProduct({ ...product, price: replace(e.target.value) });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nuevo Producto
      </Button>

      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Categor&iacute;a
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  onChange={(e) => {
                    setProduct({ ...product, category: e.target.value });
                  }}
                  name="category"
                  id="category"
                  required
                  as="select"
                  defaultValue="Seleccionar..."
                >
                  <option value="">Seleccionar...</option>
                  {categories.map((i) => (
                    <option key={i._id} value={i._id}>
                      {i.title}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Seleccione una categor&iacute;a
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                Nombre Producto
              </Form.Label>
              <Col sm={9}>
                <FormControl
                  onChange={(e) => {
                    setProduct({ ...product, title: e.target.value });
                  }}
                  name="title"
                  id="title"
                  required
                  type="text"
                  placeholder="Nombre Producto"
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Introduzca el nombre del producto.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                Precio
              </Form.Label>
              <Col sm={9}>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    onKeyUp={handleKeyUp}
                    name="price"
                    id="price"
                    type="text"
                    required
                    placeholder="Precio"
                  />
                  <Form.Control.Feedback type="invalid">
                    Introduzca el precio en D&oacute;lares.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                </InputGroup>
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                C&oacute;digo
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  onChange={(e) => {
                    setProduct({ ...product, codebar: e.target.value });
                  }}
                  required
                  id="codebar"
                  name="codebar"
                  type="text"
                  placeholder="C&oacute;digo de barra"
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Introduzca el c&oacute;digo de barras. escaneando el producto
                  con el lector de barras proporcionado.
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
            Guardar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
