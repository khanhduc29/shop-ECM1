import React from "react";
import { Button } from "antd"; // Import Button từ Ant Design
import { SearchOutlined } from "@ant-design/icons";

// Component nút tái sử dụng
const ButtonComponent = ({
  icon = <SearchOutlined />, // Icon mặc định
  type = "primary", // Kiểu button mặc định của Ant Design
  shape = "default", // Dạng của nút (default, circle, round)
  size = "middle", // Kích thước của nút (small, middle, large)
  children, // Nội dung bên trong nút
  ...rest // Các prop khác
}) => {
  return (
    <Button
      type={type}
      shape={shape}
      size={size}
      icon={icon}
      {...rest} // Các prop bổ sung
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
