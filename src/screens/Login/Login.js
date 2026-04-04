import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '' 
    };
  }

  controlarCambiosEmail(event) {
    this.setState({ email: event.target.value });
  }

  controlarCambiosPassword(event) {
    this.setState({ password: event.target.value });
  }

  evitarSubmit(event) {
    event.preventDefault();

    let usuariosStorage = localStorage.getItem('usuarios');

    if (usuariosStorage !== null) {
      let usuariosRegistrados = JSON.parse(usuariosStorage);

      let usuarioEncontrado = usuariosRegistrados.filter(
        usuario => usuario.email === this.state.email
      );

      if (usuarioEncontrado.length > 0) {
        if (usuarioEncontrado[0].password === this.state.password) {
          localStorage.setItem('sesion', this.state.email);
          this.setState({ error: '' });
          
          this.props.history.push('/');
          return; 
        }
      }
    }

    this.setState({ error: 'Credenciales incorrectas' });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Login</h2>
        
        {this.state.error !== '' ? <p style={{ color: 'red' }}>{this.state.error}</p> : null}

        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <div>
            <label>Email: </label>
            <input 
              type="email" 
              onChange={(event) => this.controlarCambiosEmail(event)} 
              value={this.state.email} 
              required
            />
          </div>
          <div>
            <label>Contraseña: </label>
            <input 
              type="password" 
              onChange={(event) => this.controlarCambiosPassword(event)} 
              value={this.state.password} 
              required
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;