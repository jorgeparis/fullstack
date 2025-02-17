import Input from "../components/Input";
import Button from "../components/Button";
import "../css/Register.css";

export default function Register() {
  return (
    <>
      <div className="rg">
        <h1>Register Account</h1>
        <Input type="text" placeholder={"Username"} />

        <Input type="password" placeholder={"Username"} />

        <span></span>
        <Input type="password" placeholder={"Password"} />
        <span></span>
        <Button type="submit" value="Register" />
      </div>
    </>
  );
}
