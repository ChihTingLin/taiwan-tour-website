import styles from'./Input.module.css';

interface Props {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string
}

function Input({placeholder, type, onChange}:Props) {
  return <input type={type} onChange={onChange} placeholder={placeholder} className={styles.input}/>
}

export default Input