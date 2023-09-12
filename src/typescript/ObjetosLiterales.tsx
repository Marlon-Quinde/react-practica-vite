interface Persona {
  nombre: string;
  edad: number;
  direccion: Direccion;
  nombreCompleto?: string;
}

interface Direccion {
  pais: string;
  casaNro: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombre: "Marlon",
    edad: 22,
    direccion: {
      pais: "Ecuador",
      casaNro: 222,
    },
  };

  persona.nombreCompleto = "Marlon Quinde";
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
