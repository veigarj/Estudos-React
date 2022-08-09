import "./MyForm.css";

import { useState } from 'react'

const MyForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  return (
    <div>
      {/* 1 - criacao de formulario */}
      <h2>Formulario</h2>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o nome" />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
