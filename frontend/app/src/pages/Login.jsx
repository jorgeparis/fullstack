import Input from "../components/Input";
import Button from "../components/Button";
import "../css/Login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <Input type="text" placeholder={"Username"} />
        <Input type="password" placeholder={"Password"} />
        <Button type="submit" value="LOGIN" />
      </div>
    </>
  );
}
