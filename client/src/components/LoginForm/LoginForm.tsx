import { useState } from "react";
import { login } from "../../services/auth.service.ts";

export interface IFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  });

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <section>
      <h2 className="w-96 mx-auto text-center mb-2 text-2xl font-bold">
        Inicia Sesión
      </h2>
      <form
        className="w-96 h-auto mx-auto border-2 border-black rounded-xl flex flex-col gap-2  p-4"
        onSubmit={handleSubmit}
      >
        <label>
          Email:
          <input
            className="ml-2"
            type="text"
            placeholder="Correo"
            name="email"
            onChange={handlechange}
          />
        </label>
        <label htmlFor="">
          Contraseña:
          <input
            className="ml-2"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handlechange}
          />
        </label>
        <button type="submit" className="border">
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
};
