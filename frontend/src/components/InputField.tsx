

function Input(props: {
  label?: any;
  type: any;
  id: any;
  placeholder: any;
  value?: any;
  onChange: any;
  error?: any;
}) {
  return (
    <div>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}

        />
        {props.error && <span className="error">{props.error}</span>}
      </div>
    </div>
  );
}

export default Input;
