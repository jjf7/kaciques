import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import TableCategories from "../components/TableCategories";
import NewCategory from '../components/NewCategory'
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";

export default function categories() {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [categories, setCategories] = useState([]);

  async function getData() {
    const u = JSON.parse(checkLocal(router));
    const resC = await fetch("http://localhost:3001/categories", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token,
      },
    });
    const dataC = await resC.json();

    setCategories(dataC);
  }

  useEffect(() => {
    const u = JSON.parse(checkLocal(router));
    if(u.role === "user") {
      router.push('/dashboard')
    }
    getData();
  }, [msg]);

  const columns = [
    {
      name: "Id",
      selector: "_id",
      omit: true,
    },
    {
      name: "Categoria",
      selector: "title",
      sortable: true,
      editable: true,
    },
  ];

  return (
    <Layout>
      <h4 className="title-h1">Listado de Categor&iacute;as</h4>
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
        <NewCategory setMsg={setMsg}  />
          <Link href="/products">
            <a className="btn btn-primary btn-small">Listado de Productos</a>
          </Link>
        </div>

        <TableCategories
          setMsg={setMsg}
          className="mt-5"
          columns={columns}
          data={categories}
        />
      </div>
    </Layout>
  );
}
