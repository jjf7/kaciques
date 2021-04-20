import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import React from "react";
import Table from "../components/Table";
import NewProduct from "../components/NewProduct";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";

function products() {
  const router = useRouter();
  
  const [msg, setMsg] = useState("");
  const [productsData, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const u = JSON.parse(checkLocal(router));
    if(u.role === "user") {
      router.push('/dashboard')
    }
    getData();
  }, [msg]);

 
  async function getData() {
    const u = JSON.parse(checkLocal(router));
    
    const res = await fetch("http://localhost:3001/products", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token,
      },
    });
    const data = await res.json();
    setProducts(data);

    const resC = await fetch("http://localhost:3001/categories", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token,
      },
    });
    const dataC = await resC.json();

    setCategories(dataC);
  }

 

  const columns = [
    {
      name: "Id",
      selector: "id",
      omit: true,
    },
    {
      name: "IdCategoria",
      selector: "id_categoria",
      omit: true,
    },
    {
      name: "Categoria",
      selector: "category",
      sortable: true,
      editable: true,
    },
    {
      name: "Producto",
      selector: "title",
      sortable: true,
      right: true,
      editable: true,
    },
    {
      name: "Precio",
      selector: "price",
      sortable: true,
      right: true,
      editable: true,
    },
    {
      name: "Serial",
      selector: "codebar",
      sortable: true,
      right: true,
      editable: true,
    },
  ];

  return (
    <Layout>
      <h4 className="title-h1">Listado de Productos</h4>

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

      <div className="container">
        <div className="containerButtons">
          <NewProduct setMsg={setMsg} categories={categories} />
          <Link href="/categories">
            <a className="btn btn-info btn-small">Categor&iacute;as</a>
          </Link>
        </div>

        <Table
          categories={categories}
          setMsg={setMsg}
          className="mt-5"
          columns={columns}
          data={productsData}
        />
      </div>
    </Layout>
  );
}

export default products;
