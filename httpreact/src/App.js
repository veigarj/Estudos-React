import React from "react";
import "./App.css";

import { useState, useEffect } from "react";

// 4 Custom Hooks
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 Custom Hooks
  const { data: items, httpConfig } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []);

  // 2 - add Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // Requisição tipo post
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // carregamento dinamico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refatorando Post
    httpConfig(product, "POST");

    // resetar input (value) depois de enviar
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="products-list">
          <h1>Lista de Produtos</h1> {/* Retorna lista de Produtos */}
          <ul>
            {items &&
              items.map((product) => (
                <li key={product.id}>
                  {product.name} - R$: {product.price}
                </li>
              ))}
          </ul>
          <div className="add-product">
            {" "}
            {/* Formulario de envio pro Back-and */}
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Preço:
                <input
                  type="number"
                  value={price}
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <input type="submit" value="Criar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
