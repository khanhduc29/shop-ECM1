import React from "react";
import { Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccout,
  WrapperTextHeaderSmall,
} from "./style";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  PictureOutlined,
  SearchOutlined 
} from "@ant-design/icons";
import {InputComponent} from "../InputComponent/InputComponent"

const { Search } = Input;

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

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>Shop-hehe</WrapperTextHeader>
        </Col>
        <Col span={12}>
        
          <WrapperTextHeader>
            
            <Search
              placeholder="input search text"
              enterButton={<SearchOutlined style={{ fontSize: 18, color: "#fff" }} />}
              size="large"
              suffix={suffix}
            />
            
          </WrapperTextHeader>
        </Col>
        <Col span={6} style={{ display: "flex" , gap: "20px"}} >
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>

          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
