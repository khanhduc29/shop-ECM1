import React from "react";
import { Input } from "antd";



// Component input tái sử dụng
const InputComponent = ({
  placeholder = "Type here...",
  suffix,
  size = "large",
  // onSearch,
  ...rest
}) => {
  return (
    <Input
      placeholder={placeholder}
      size={size}
      suffix={suffix}
      // onSearch={onSearch}
      {...rest}
    />
  );
};

export default InputComponent;
