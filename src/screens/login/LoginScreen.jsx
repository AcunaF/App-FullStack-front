import LoginForm from "../../components/login/LoginForm";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="container login-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="login-title">Iniciar Sesión</h2>
          <LoginForm />
          <p className="login-options">
            ¿No tienes una cuenta?
            <Link to="/signup" className="login-link">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
