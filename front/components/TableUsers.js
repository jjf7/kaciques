import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
        columns={columns}
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Introduzca el nombre del usuario a buscar"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const TableUsers = ({ columns, data, setMsg }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [validated, setValidated] = useState(false);

  const userObject = {
    id: "",
    id_role: "",
    role: "",
    username: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(userObject);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosePass = () => setShowPass(false);
  const handleShowPass = () => setShowPass(true);

  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  const filteredItems = data.filter(
    (item) =>
      item.username &&
      item.username.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const edit = (record) => {
    setUser({
      ...user,
      id: record.id,
      id_role: record.id_role,
      role: record.role,
      username: record.username,
      email: record.email,
      password: record.password,
    });
    handleShow();
  };

  const pass = (record) => {
    setId(record.id);
    handleShowPass();
  };

  const handleSubmitPass = async (e) => {
    const u = JSON.parse(checkLocal(router));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);

      const result = await fetch(`http://localhost:3001/users/change/pass/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": u.token,
        },
        body: JSON.stringify({
          password,
        }),
      });

      const response = await result.json();

      if (response == "success") {
        setMsg({
          status: 1,
          msg: "Se ha editado modificado la contrasena correctamente",
        });
        handleClosePass();
        setUser(userObject);
      } else {
        setMsg({ status: 2, msg: response });
      }
    }
  };

  const handleSubmit = async (e) => {
    const u = JSON.parse(checkLocal(router));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);

      const result = await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": u.token,
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          roles: user.id_role,
        }),
      });

      const response = await result.json();

      if (response == "success") {
        setMsg({
          status: 1,
          msg: "Se ha editado correctamente el usuario",
        });
        setShow(false);
        setUser(userObject);
      } else {
        setMsg({ status: 2, msg: response });
      }
    }
  };

  const del = async (record) => {
    const u = JSON.parse(checkLocal(router));
    if (confirm("Estas seguro de eliminar el usuario?")) {
      const result = await fetch(`http://localhost:3001/users/${record.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": u.token,
        },
      });

      console.log(result);

      const response = await result.json();

      console.log("response:", response);

      if (response == "success") {
        setMsg({
          status: 1,
          msg: "Se ha eliminado correctamente el usuario",
        });
      } else {
        setMsg({ status: 1, msg: "Ha ocurrido un error" });
      }
    } else {
    }
  };

  const mergedColumns = columns.map((col) => {
    return col;
  });

  const createColumns = useCallback(() => {
    return [
      ...mergedColumns,
      {
        name: "Acciones",
        allowOverflow: true,
        right: true,
        minWidth: "200px",
        cell: (row) => {
          return (
            <div>
              <button
                title="Editar usuario"
                className="btn btn-warning btn-sm"
                type="button"
                onClick={() => edit(row)}
                style={{ backgroundColor: "aliceblue" }}
              >
                <i className="fi-rr-edit"></i>
              </button>
              <button
                title="Cambiar contrasena"
                className="btn btn-warning btn-sm ml-2 text-info"
                type="button"
                onClick={() => pass(row)}
                style={{ backgroundColor: "aliceblue" }}
              >
                <i className="fi-rr-eye"></i>
              </button>

              <button
                title="Eliminar usuario"
                className="btn btn-danger btn-sm ml-2 text-danger"
                type="button"
                onClick={() => del(row)}
                style={{ backgroundColor: "aliceblue" }}
              >
                <i className="fi-rr-trash"></i>
              </button>
            </div>
          );
        },
      },
    ];
  }, [mergedColumns]);

  return (
    <>
      <DataTable
        columns={createColumns()}
        data={filteredItems}
        defaultSortField="username"
        pagination
        paginationPerPage={5}
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
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
                  value={user.id_role}
                >
                  <option value="6079ab4c3c6b1e091c985626">Admin</option>
                  <option value="6079ab4c3c6b1e091c985625">User</option>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Editar usuario
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={"lg"} show={showPass} onHide={handleClosePass}>
        <Modal.Header closeButton>
          <Modal.Title>Cambiar Contrase&ntilde;a</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated}>
            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                Introduzca la nueva contrase&ntilde;a
              </Form.Label>
              <Col sm={9}>
                <FormControl
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="email"
                  id="email"
                  required
                  value={password}
                  type="password"
                  placeholder="Contrasena"
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Introduzca la contrasena
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePass}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmitPass}>
            Editar contrasena
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableUsers;
