import React, { Component, Fragment } from "react";
import Producto from "./Producto";

class ListaProductos extends Component {
  state = {
    productos: [
      { id: 1, name: "Camisa ReactJs", precio: 30 },
      { id: 2, name: "Camisa NodeJs", precio: 60 },
      { id: 3, name: "Camisa AngularJs", precio: 70 },
      { id: 4, name: "Camisa VueJs", precio: 80 },
      { id: 5, name: "Camisa SvelteJs", precio: 30 },
    ],
  };


  componentDidMount() {
    console.log(1)
  }

  componentWilMount() {
    console.log(2)
  }

  componentWillUpdate() {
    console.log(3)
  }

  componentWillUnmount() {
    console.log(4)
  }

  render() {

    console.log(5)
    const { productos } = this.state;

    return (
      <Fragment>
        <h1>Lista de prdoductos</h1>
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </Fragment>
    );
  }
}

export default ListaProductos;
