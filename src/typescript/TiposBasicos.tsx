export const TiposBasicos = () => {
  const nombre: string = "Marlon";
  const edad: number = 35;
  const estaActivo: boolean = true;
  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"];
  poderes.push("Hola mundo");
  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaActivo ? "esta activo" : "no esta activo"}
      <hr />
      {poderes.join(", ")}
    </>
  );
};
