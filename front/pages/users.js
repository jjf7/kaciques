import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import TableUsers from "../components/TableUsers";
import Link from 'next/link'
import { useRouter } from "next/router";
import { checkLocal } from "../utils/local";
import NewUser from "../components/NewUser";

export default function users() {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [users, setUsers] = useState([]);

  async function getData() {
    const u = JSON.parse(checkLocal(router));
    const res = await fetch("http://localhost:3001/users", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": u.token,
      },
    });
    const data = await res.json();

    console.log(data)
    setUsers(data);
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
      name: "id",
      selector: "_id",
      omit: true,
    },
    {
      name: "id_role",
      selector: "id_role",
      omit: true,
    },
    {
      name: "Rol",
      selector: "role",
      sortable: true,
      editable: true,
    },
    {
      name: "Nombre",
      selector: "username",
      sortable: true,
      editable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      editable: true,
    }
  ];

  return (
    <Layout>
      <h4 className="title-h1">Listado de Usuarios</h4>

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
          
          <NewUser setMsg={setMsg} />
        </div>
        <TableUsers
          setMsg={setMsg}
          className="mt-5"
          columns={columns}
          data={users}
        />
      </div>
    </Layout>
  );
}
