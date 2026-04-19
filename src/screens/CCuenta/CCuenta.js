import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

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

    this.setState({ error: "" });

    this.props.history.push("/login");
  }

  render() {
    return (
      <>
        <Navbar />
        <h2 className='alert alert-primary'>Crear Cuenta</h2>
        
        {this.state.error !== '' ? <p style={{ color: 'red' }}>{this.state.error}</p> : null}
        <div className='row justify-content-center'>
          <form onSubmit={(event) => this.evitarSubmit(event)}>
            <div className='form-group'>
              <label>Email: </label>
              <input 
                type="email" 
                onChange={(event) => this.CEmail(event)} 
                value={this.state.email} 
                required
              />
            </div>
            <div className='form-group'>
              <label>Contraseña: </label>
              <input 
                type="password" 
                onChange={(event) => this.CPassword(event)} 
                value={this.state.password} 
                required
              />
            </div>
            <button className='btn btn-primary btn-block' type="submit">Registrarse</button>
          </form>
        </div>
      </>
    );
  }
}

export default CCuenta;