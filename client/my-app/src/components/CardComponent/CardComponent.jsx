import { Card } from "antd";
import React from "react";
import {
  StyleNameProduct,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReporText,
} from "./style";
import { StarFilled } from "@ant-design/icons";

const { Meta } = Card;

const CardComponent = () => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        styles={{body:{padding: "10px" } }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        }
      >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReporText>
          <span>
            <span>4.97</span> <StarFilled style={{ fontSize: "15px", color: "red" }} />
          </span>
          <span> | Da ban 1000+</span>
        </WrapperReporText>
        <WrapperPriceText>
          <span>1.000.000</span>
          <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
      </Card>

      {/* <Card
        hoverable
        style={{
          width: 240,
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        bodyStyle={{ padding: "10px" }}
        cover={
          <img
            alt="example"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        }
      >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReporText>
          <span>
            <span>4.97</span> <StarFilled style={{ fontSize: "15px", color: "red" }} />
          </span>
          <span> | Da ban 1000+</span>
        </WrapperReporText>
        <WrapperPriceText>
          <span>1.000.000</span>
          <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
      </Card> */}
    </div>
  );
};

export default CardComponent;
