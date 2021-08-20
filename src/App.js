import React, { Component } from "react";
import add from "./assets/add.svg";
import remove from "./assets/remove.svg";
import styled from "styled-components";

const Title = styled.div`
  justify-content: center;
  display: flex;
`;

const Car = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const StoreCars = styled.section`
  width: 15vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 2rem;
  margin-top: 0, 5rem;
`;

const TitleDois = styled.h2`
  display: flex;
  justify-content: space-between;
  background-color: grey;
`;

const LojaCarros = styled.section`
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const CarsStore = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  background-color: cadetblue;
  border: solid grey;
`;

class App extends Component {
  state = {
    carrinho: [],
    Carros: [
      {
        id: 0,
        modelo: "Jetta",
        montadora: "Volkswagem",
        preço: 144000,
        tipo: "Sedan"
      },
      {
        id: 1,
        modelo: "Polo",
        montadora: "Volkswagem",
        preço: 70000,
        tipo: "Hatch"
      },
      {
        id: 2,
        modelo: "T-cross",
        montadora: "Volkswagem",
        preço: 123000,
        tipo: "Suv"
      },
      {
        id: 3,
        modelo: "Tiguan R-line",
        montadora: "Volkswagem",
        preço: 146000,
        tipo: "Suv"
      },
      {
        id: 4,
        modelo: "Civic",
        montadora: "Honda",
        preço: 115000,
        tipo: "Sedan"
      },
      {
        id: 5,
        modelo: "Corolla",
        montadora: "Toyota",
        preço: 110000,
        tipo: "Sedan"
      },
      {
        id: 6,
        modelo: "Corolla Cross",
        montadora: "Toyota",
        preço: 184000,
        tipo: "Suv"
      },
      {
        id: 7,
        modelo: "Compass",
        montadora: "Jeep",
        preço: 132000,
        tipo: "Suv"
      },
      {
        id: 8,
        modelo: "Golf G TI",
        montadora: "Honda",
        preço: 138000,
        tipo: "Hatch"
      }
    ]
  };
  removerTarefa = (id) => {
    this.setState({
      carrinho: this.state.carrinho.filter((item) => item.id !== id)
    });
  };

  adicionarTarefa = (id) => {
    const item = this.state.Carros.find((item) => id === item.id);
    this.setState({
      carrinho: this.state.carrinho.concat(item)
    });
  };

  lojaCarros = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Title>
          <h1>Lojas de carros!</h1>
        </Title>
        <Car>
          <LojaCarros>
            {this.state.Carros.map((item, id) => (
              <div key={id}>
                <StoreCars>
                  <TitleDois>
                    {item.modelo}
                    <button
                      onClick={() => {
                        this.adicionarTarefa(item.id);
                      }}
                    >
                      +
                    </button>
                  </TitleDois>
                  <p>Montadora:{item.montadora}</p>
                  <p>Preço: R${item.preço},00</p>
                  <p>Tipo:{item.tipo}</p>
                </StoreCars>
              </div>
            ))}
          </LojaCarros>

          <container>
            <CarsStore>
              {this.state.carrinho.map((item, index) => (
                <div key={index}>
                  <p>
                    {item.preço}
                    <button onClick={() => this.removerTarefa(item.id)}>
                      -
                    </button>
                  </p>
                </div>
              ))}
            </CarsStore>
          </container>
        </Car>
      </div>
    );
  }
}

export default App;
