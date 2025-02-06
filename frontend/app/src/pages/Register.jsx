import Input from "../components/Input";
import Button from "../components/Button";
import "../css/Register.css";

export default function Register() {
  return (
    <>
      <div className="rg">
        <h1>Register Account</h1>
        <Input type="password" placeholder={"Username"} />
        <Input type="password" placeholder={"Password"} />
        <Button type="submit" value="Sign UP" />
      </div>
    </>
  );
}
