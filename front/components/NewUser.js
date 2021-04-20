import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";

export default function NewUser({ setMsg }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const userObject = {
    id: "",
    id_role: "",
    username: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(userObject);

  const handleSubmit = async (event) => {
    const u = JSON.parse(checkLocal(router));
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);

      const result = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": u.token,
        },
        body: JSON.stringify({
            username: user.username,
            email: user.email,
            password: user.password,
            roles: user.id_role,
            
        }),
      });

      const response = await result.json();

      console.log(response);

      if (response == "success") {
        setMsg({
          status: 1,
          msg: "Se ha agregado correctamente el nuevo usuario",
        });
        setShow(false);
        setUser(userObject);
      } else {
        setMsg({ status: 2, msg: "Rellene el formulario" });
      }
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Nuevo Usuario
      </Button>

      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated}>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Rol
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  onChange={(e) => {
                    setUser({ ...user, id_role: e.target.value });
                  }}
                  name="id_role"
                  id="id_role"
                  required
                  as="select"
                  defaultValue="Seleccionar..."
                >
                  <option value="">Seleccionar...</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Form.Control>
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Seleccione un rol
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                Nombre
              </Form.Label>
              <Col sm={9}>
                <FormControl
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                  name="username"
                  id="username"
                  required
                  value={user.username}
                  type="text"
                  placeholder="Nombre"
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Introduzca el nombre del usuario
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <FormControl
                  onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                  }}
                  name="email"
                  id="email"
                  required
                  value={user.email}
                  type="text"
                  placeholder="Nombre"
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
                    setUser({ ...user, password: e.target.value });
                  }}
                  name="password"
                  id="password"
                  required
                  value={user.password}
                  type="password"
                  
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Introduzca la contrase&ntilde;a
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
            Guardar usuario
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
