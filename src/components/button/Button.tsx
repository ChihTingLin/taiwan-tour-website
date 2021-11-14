interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  theme: ['solid'|'outlined']
}

function Button({text, onClick}: Props) {
  return <button type="button" onClick={onClick}>{text}</button>
}

export default Button;