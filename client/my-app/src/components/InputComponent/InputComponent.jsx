import React from "react";
import { Input } from "antd";
import styled from "styled-components";

// Tạo một component Input tùy chỉnh với styled-components
const StyledInput = styled(Input)`
  border-radius: 50px;
  &:hover {
    // border: none; /* Màu viền khi hover */
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Hiệu ứng shadow khi hover */
    border-color: #fff
  }
`;

// Component input tái sử dụng
const InputComponent = ({
  placeholder = "Type here...",
  suffix,
  size = "large",
  ...rest
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      size={size}
      suffix={suffix}
      {...rest}
    />
  );
};

export default InputComponent;
