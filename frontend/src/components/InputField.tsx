function Input(props: { label?: any; type: any; id: any; placeholder: any }) {
  return (
    <div>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Input;
