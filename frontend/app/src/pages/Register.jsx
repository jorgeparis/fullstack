import Input from "../components/Input";
import Button from "../components/Button";
import "../css/Register.css";

export default function Register() {
  return (
    <>
      <div className="rg">
        <h1>Register Account</h1>
<<<<<<< HEAD
        <Input type="text" placeholder={"Username"} />
=======
        <Input type="password" placeholder={"Username"} />
>>>>>>> 469841e72e2d505017c1977f04764a4d19e3bd6d
        <span></span>
        <Input type="password" placeholder={"Password"} />
        <span></span>
        <Button type="submit" value="Register" />
      </div>
    </>
  );
}
