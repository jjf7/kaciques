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

const TableCategories = ({ columns, data, setMsg  }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [filterText, setFilterText] = React.useState("");
  const [validated, setValidated] = useState(false);
  const categoryObject = {
    id: "",
    title: "",
  };
  const [category, setCategory] = useState(categoryObject);

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
    setCategory({
      ...category,
      id: record._id,
      title: record.title,
    });
    handleShow();
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
        `http://localhost:3001/categories/${category.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": u.token,
          },
          body: JSON.stringify({
            title: category.title,
          }),
        }
      );

      const response = await result.json();

      if (response == "success") {
        setMsg({
          status: 1,
          msg: "Se ha editado correctamente la categoria",
        });
        setShow(false);
        setCategory(categoryObject);
      } else {
        setMsg({ status: 2, msg: response });
      }
    }
  };

  const del = async (record) => {
    const u = JSON.parse(checkLocal(router));
    if (confirm("Estas seguro de eliminar la categor&iacute;a?")) {
      const result = await fetch(
        `http://localhost:3001/categories/${record.id}`,
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
        setMsg({
          status: 1,
          msg: "Se ha eliminado correctamente la categoria",
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
                className="btn btn-warning btn-sm"
                type="button"
                onClick={() => edit(row)}
                style={{ backgroundColor: "aliceblue" }}
              >
                <i className="fi-rr-edit"></i>
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
          <Modal.Title>Editar categor&iacute;a</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form validated={validated}>
            <Form.Group as={Row} style={{ marginTop: "30px" }}>
              <Form.Label column sm={3}>
                Nombre Categor&iacute;a
              </Form.Label>
              <Col sm={9}>
                <FormControl
                  onChange={(e) => {
                    setCategory({ ...category, title: e.target.value });
                  }}
                  name="title"
                  id="title"
                  required
                  value={category.title}
                  type="text"
                  placeholder="Nombre"
                />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Introduzca el nombre de la categor&iacuta;a
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
            Editar categor&iacute;a
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableCategories;
