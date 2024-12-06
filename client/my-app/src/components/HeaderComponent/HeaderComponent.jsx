import React from "react";
import { Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccout,
  WrapperTextHeaderSmall,
  WrapperHeaderCart,
} from "./style";

import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>TechZone</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <WrapperTextHeader>
            <ButtonInputSearch></ButtonInputSearch>
          </WrapperTextHeader>
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: "34px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>

          <WrapperHeaderCart>
            <ShoppingCartOutlined style={{ fontSize: "34px", color: "#fff" }} />
            <div>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
            </div>
          </WrapperHeaderCart>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
