// import React, { Component } from 'react'
import React from "react"


export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <h2>1. Qual o seu nome?</h2>
        <input />
        <h2>2. Qual a sua idade?</h2>
        <input />
        <h2>3. Qual o seu email?</h2>
        <input />
        <h2>4. Qual o grau de escolaridade?</h2>
        <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Médio Completo</option>
        </select>
      </div>
    )
  }
}
