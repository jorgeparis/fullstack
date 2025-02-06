import "../css/Input.css";

export default function Input(props) {
  
    
  return (
    <>
      {props.type === "text" ? (
        <>
          <form>
            <input
              type={props.type}
              name=""
              id=""
              placeholder={props.placeholder}
              className="input-field"
            />
          </form>
        </>
      ) : (
        <>
          <form>
            <input
              type={props.type}
              name=""
              id=""
              placeholder={props.placeholder}
              className="input-field"
            />
          </form>
        </>
      )}
    </>
  );
}
