import React, { useCallback, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { formatMoney, replace } from "../utils/format";
import { useRouter } from "next/router";
import { checkLocal } from '../utils/local'

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
      placeholder="Introduzca el nombre del producto a buscar"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const Table = ({ columns, data, setMsg, categories }) => {

  const router = useRouter()
   
  const [show, setShow] = useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [validated, setValidated] = useState(false);
  const productObject = {
    id: "",
    title: "",
    price: "",
    codebar: "",
    category: "",
    id_categoria: "",
  };
  const [product, setProduct] = useState(productObject);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  const filteredItems = data.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
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
    
    setProduct({
      ...product,
      id: record.id,
      title: record.title,
      price: record.price,
      codebar: record.codebar,
      category: record.category,
      id_categoria: record.id_categoria,
    });
    handleShow()
  };

  const handleKeyUp = (e) => {
    function change(value) {
      return value
        .replace(/\D/g, "")
        .replace(/([0-9])([0-9]{2})$/, "$1,$2")
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    }
    e.target.value = change(e.target.value);
    setProduct({ ...product, price: e.target.value });
  };

  const handleSubmit = async (e) => {
    const u = JSON.parse(checkLocal(router));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {

      setValidated(true);
      
      const result = await fetch(
        `http://localhost:3001/products/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": u.token,
            
          },
          body: JSON.stringify({
            title: product.title,
            price: replace(product.price),
            codebar: product.codebar,
            category: product.id_categoria,
          }),
        }
      );

      const response = await result.json();

      if (response == "success") {
        setMsg({
          status: 1,
          msg: "Se ha editado correctamente el producto",
        });
        setShow(false);
        setProduct(productObject);
      } else {
        setMsg({ status: 2, msg: response });
      }

      
    }
  };

  const del = async (record) => {
    const u = JSON.parse(checkLocal(router));
    if (confirm("Estas seguro de eliminar el producto?")) {
      const result = await fetch(
        `http://localhost:3001/products/${record.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": u.token,
            
          },
        }
      );

      console.log(result);

      const response = await result.json();

      console.log("response:", response);

      if (response == "success") {
        setMsg({ status: 1, msg: "Se ha eliminado el producto correctamente" });
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
                className="btn btn-warning btn-sm"
                type="button"
                onClick={() => edit(row)}
                style={{ backgroundColor: "aliceblue" }}
              >
                <i className="fi-rr-edit"></i>
              </button>
              <button
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
        defaultSortField="title"
        pagination
        paginationPerPage={5}
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
      <Modal size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  validated={validated}>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Categor&iacute;a
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  onChange={(e) => {
                    setProduct({ ...product, id_categoria: e.target.value });
                  }}
                  name="id_categoria"
                  id="id_categoria"
                  required
                  as="select"
                  value={product.id_categoria}
                >
                  
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
                  value={product.title}
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
                    onKeyUp={ handleKeyUp }
                    onChange={(e) => {
                      setProduct({ ...product, price: e.target.value });
                    }}
                    name="price"
                    id="price"
                    value={product.price}
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
                  value={product.codebar}
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
            Editar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Table;
