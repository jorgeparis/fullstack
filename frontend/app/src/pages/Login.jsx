import Form from "../components/Form";
import Button from "../components/Button";
import "../css/Login.css";

export default function Login() {
  return (
    <>
      <div className="login-container">
        <div className="container-right">
          <div className="container-right-text">
            <h1>Welcome</h1>
            <Button type="submit" value="Sign Up" />
          </div>
        </div>
        <div className="login-field-container">
          <h1>Login</h1>
          <Form />
        </div>
      </div>
    </>
  );
}
