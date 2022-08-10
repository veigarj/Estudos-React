import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
  // 3 Gerenciamento de Dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    console.log(e.target.value);
  };

  console.log(name);

  return (
    <div>
      {/* 1 - criacao de formulario */}
      <h2>Formulario</h2>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o nome"
            onChange={handleName}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>

      {/* 2 - Label envolvido em input */}

      <label>
        <span>E-mail:</span>
        <input type="email" name="email" placeholder="Digite aqui seu email" />
      </label>
      <input type="submit" valeu="Enviar" />
    </div>
  );
};

export default MyForm;
