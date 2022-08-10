import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ user }) => {
  // 3 Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  //console.log(name);
  //console.log(email);

  // 4 - Enviando Form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulario");
    console.log(name, email, bio);
  
    // 7 - Limpar Form dentro de handleSubmit
    setName("");
    setEmail("");
    setBio("");
  };

  const [bio, setBio] = useState("")

  

  return (
    <div>
      {/* 4 - envio de Form */}

      {/* 1 - criacao de formulario */}
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 => Label envolvido em input (Mais Utilizado) com onChange */}
        <label>
          {/* 3 = simplificando a manipulacao de States  */}
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite aqui seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* 8 - Tesxtarea*/}
          <span>Bio:</span>
          <textarea name="bio"
          placeholder="Descricao do usuario"
          onChange={(e) => setBio(e.target.value)}
          value={bio} ></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
