import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setUsuario] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);
  useEffect(() => {
    // LLAMADO AL API
    cargarUsuarios();
    return () => {};
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsuario(resp.data.data);
      paginaRef.current++;
    } else {
      alert("No hay mas registros");
    }
  };

  const renderItem = ({
    avatar,
    email,
    first_name,
    last_name,
    id,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={cargarUsuarios}>
        Siguiente
      </button>
    </>
  );
};
