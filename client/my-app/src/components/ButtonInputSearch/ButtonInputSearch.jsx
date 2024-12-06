import React from "react";
import {
  AudioOutlined,
  PictureOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";

const ButtonInputSearch = () => {
  // Tạo thành phần suffix (biểu tượng bên phải ô input)
  const handleSearch = () => {
    const inputElement = document.getElementById("custom-search-input");
    console.log("Search value:", inputElement?.value);
  };
  const suffix = (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <AudioOutlined
        style={{
          fontSize: 18,
          color: "#8b0000", // Màu đỏ đậm
          cursor: "pointer",
        }}
        onClick={() => alert("Search audio....")}
      />
      <PictureOutlined
        style={{
          fontSize: 18,
          color: "#8b0000", // Màu đỏ đậm
          cursor: "pointer",
        }}
        onClick={() => alert("Search picture....")}
      />
      <ButtonComponent
        icon={<SearchOutlined style={{ fontSize: 18, color: "#fff" }} />}
        type="primary"
        size="large"
        onClick={handleSearch}
        // style={{ height: "40px" }} // Đồng bộ chiều cao với input
        style={{
          height: "28px", // Đồng bộ chiều cao với input
          background: "#8b0000", // Màu nền đỏ đậm
          borderColor: "#8b0000", // Viền cũng là màu đỏ đậm
          borderRadius: '30px'
        }}
      >
        Search
      </ButtonComponent>
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "center", padding: "20px" }}>
      {/* Input Field */}
      <InputComponent
        id="custom-search-input"
        placeholder="Input something..."
        size="large"
        suffix={suffix}
      />

      {/* Search Button */}
    </div>
  );
};

export default ButtonInputSearch;
