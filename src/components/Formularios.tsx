import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { formulario, onChanges, email, password } = useForm({
    email: "test@test.com",
    password: "123345",
  });
  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        value={email}
        placeholder="email"
        className="form-control"
        onChange={({ target }) => onChanges(target.value, "email")}
      />
      <input
        type="password"
        value={password}
        className="form-control my-2"
        onChange={({ target }) => onChanges(target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
