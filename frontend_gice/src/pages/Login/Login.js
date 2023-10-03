import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./Login.css"

const Login = () => {
    return (
        <div className='Login'>
            <div className='imageContainer'></div>
            <Navbar/>
            <div className='loginContainer'>
                
                <div className='titleContainer'>
                
                    
                    <h1 className='titleLogin'>Iniciar Sesión</h1>
                </div>
                <div className='loginFormContainer'>
                    
                    <form className='loginForm'>
                        {/* <label>Usuario</label> */}
                        <input type='text' placeholder='CORREO' className='inputLogin'/>
                        {/* <label>Contraseña</label> */}
                        <input type='password' placeholder='CONTRASEÑA' className='inputLogin'/>
                        <a href='' className='forgotPasswordLink'>OLVIDE MI CONTRASEÑA</a>
                        <button className='buttonLogin'>Iniciar Sesión</button>
                    </form>

                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Login;