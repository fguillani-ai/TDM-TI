import React, { Component } from 'react';

class CCuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  CEmail(event){
    this.setState({ email: event.target.value });
  }

  CPassword(event){
    this.setState({ password: event.target.value });
  }

  evitarSubmit(event) {
    event.preventDefault();

    if (this.state.password.length < 6) {
      this.setState({ error: "La contraseña debe tener un minimo de 6 caracteres" });
      return;
    }
    
    let usuariosStorage = localStorage.getItem("usuarios");
    let usuariosRegistrados = [];

    if (usuariosStorage !== null) {
      usuariosRegistrados = JSON.parse(usuariosStorage);
    }

    let emailEnUso = usuariosRegistrados.filter(
      usuario => usuario.email === this.state.email
    );

    if (emailEnUso.length > 0 ) {
      this.setState({ error: "Este email ya esta registrado."});
      return;
    }

    let nuevoUsuario = {
      email: this.state.email,
      password: this.state.password
    };

    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

    localStorage.setItem("sesion", this.state.email);
    this.setState({ error: "" });

    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <h2>Crear Cuenta</h2>
        
        {this.state.error !== '' ? <p style={{ color: 'red' }}>{this.state.error}</p> : null}

        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <div>
            <label>Email: </label>
            <input 
              type="email" 
              onChange={(event) => this.CEmail(event)} 
              value={this.state.email} 
              required
            />
          </div>
          <div>
            <label>Contraseña: </label>
            <input 
              type="password" 
              onChange={(event) => this.CPassword(event)} 
              value={this.state.password} 
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </>
    );
  }
}

export default CCuenta;