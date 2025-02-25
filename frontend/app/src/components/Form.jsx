import "../css/Form.css";

export default function Form() {
  return (
    <>
      <form action="">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
          className="input-field"
          required
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
          className="input-field"
          required
        />
        <input type="submit" name="" id="" value="Login" className="btn" />
      </form>
    </>
  );
}
