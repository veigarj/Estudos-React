import "./MyForm.css";

const MyForm = () => {
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
