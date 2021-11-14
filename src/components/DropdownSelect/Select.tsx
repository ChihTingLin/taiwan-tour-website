import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (
    newValue: SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void;
}

function DropdownSelect({ options, onChange }: Props) {
  return <Select onChange={onChange} options={options} />;
}

export default DropdownSelect;
