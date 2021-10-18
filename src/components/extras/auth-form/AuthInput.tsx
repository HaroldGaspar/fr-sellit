export function AuthInput({
  name,
  label,
  password,
  autofocus,
  handleChange
}: any) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={password ? "password" : "text"}
        name={name}
        onChange={(e) => handleChange(e)}
        className="form-control"
        autoFocus={autofocus ? true : false}
        required={name === "store_name" ? false : true}
      />
    </div>
  )
}
