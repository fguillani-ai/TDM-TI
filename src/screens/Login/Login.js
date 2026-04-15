import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '' 
    };
  }

  CEmail(event) {
    this.setState({ email: event.target.value });
  }

  CPassword(event) {
    this.setState({ password: event.target.value });
  }

  onSubmit (email, password){
    
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
          cookies.set('sesion', this.state.email);
          this.setState({ error: '' }, this.props.history.push('/'));
          
          
          return; 
        }
      }
    }

    this.setState({ error: 'Credenciales incorrectas' });
  }

  render() {
    return (
      <>
        <h2 className='alert alert-primary'>Login</h2>
        
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
            <button className='btn btn-primary btn-block' type="submit">Ingresar</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;