import { useState } from "react";
export const Contador = () => {
  const [valor, setvalor] = useState<number>(0);

  const acumular = (numero: number) => {
    setvalor(valor + numero);
  };
  return (
    <>
      <h3>
        Contador <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(10)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-10)}>
        -1
      </button>
    </>
  );
};
