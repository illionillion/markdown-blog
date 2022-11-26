import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";

type InputPasswordProps = {
  placeholder?: string;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputPassword: React.FC<InputPasswordProps> = ({
  onChange,
  placeholder,
  autoComplete
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <InputGroup>
      <Input
        type={show ? "text" : "password"}
        name="user-password"
        id="user-password"
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        required
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputPassword;
