/* eslint-disable quotes */
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Topo from "./src/components/topo";
import Icone from "./src/components/icone";

class jokenpo extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: "", escolhaComputador: "", resultado: "" };
  }

  joken(escolhaUsuario) {
    //gerar numero aleatorio para escolha do computador( 0 a 2)
    const nunAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = "";
    var resultado = "";

    switch (nunAleatorio) {
      case 0:
        escolhaComputador = "pedra";
        break;
      case 1:
        escolhaComputador = "papel";
        break;
      case 2:
        escolhaComputador = "tesoura";
        break;
      default:
        escolhaComputador = "";
    }

    // logica para escolha do resultado !

    if (escolhaComputador === "pedra") {
      if (escolhaUsuario === "pedra") {
        resultado = "Empate";
      }
      if (escolhaUsuario === "papel") {
        resultado = "Você Ganhou";
      }
      if (escolhaUsuario === "tesoura") {
        resultado = "Computador Ganhou";
      }
    }

    if (escolhaComputador === "papel") {
      if (escolhaUsuario === "papel") {
        resultado = "Empate";
      }
      if (escolhaUsuario === "tesoura") {
        resultado = "Você Ganhou";
      }
      if (escolhaUsuario === "pedra") {
        resultado = "Computador Ganhou";
      }
    }

    if (escolhaComputador === "tesoura") {
      if (escolhaUsuario === "tesoura") {
        resultado = "Empate";
      }
      if (escolhaUsuario === "pedra") {
        resultado = "Você Ganhou";
      }
      if (escolhaUsuario === "papel") {
        resultado = "Computador Ganhou";
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button
              title="pedra"
              onPress={() => {
                this.joken("pedra");
              }}
            />
          </View>

          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={() => {
                this.joken("papel");
              }}
            />
          </View>

          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={() => {
                this.joken("tesoura");
              }}
            />
          </View>
        </View>
        <View />
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },

  painelAcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  palco: {
    alignItems: "center",
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red"
  }
});

export default jokenpo;
