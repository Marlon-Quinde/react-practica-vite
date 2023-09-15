import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
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
    } else {
        paginaRef.current--;
        alert("No hay mas registros");
    }
};

const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if(paginaRef.current > 1) {
        paginaRef.current --;
        cargarUsuarios();
    }
      cargarUsuarios();
  };

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
  };
};
