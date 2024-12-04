// rafc

import React from "react";
import { Input } from "antd";
import { AudioOutlined, PictureOutlined, SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const InputComponent = () => {
  const suffix = (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <AudioOutlined
        style={{
          fontSize: 18,
          color: "#1677ff",
        }}
      />
      <PictureOutlined
        style={{
          fontSize: 18,
          color: "#1677ff",
        }}
      />
    </div>
  );

  return (
    <Search
      placeholder="input search text"
      enterButton={<SearchOutlined style={{ fontSize: 18, color: "#fff" }} />}
      size="large"
      suffix={suffix}
    />
  );
};

export default InputComponent;
