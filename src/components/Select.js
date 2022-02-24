const Select = ({options, onChange}) => {
    return (
      <select onChange={onChange}>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>{opt.text}</option>
        ))}
      </select>
    );
}

export default Select