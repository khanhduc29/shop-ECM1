// rafc

import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
// import img1 from '../../assets/images/img1.jpeg'
// import img2 from '../../assets/images/img2.jpeg'
// import img3 from '../../assets/images/img3.jpeg'
import img1 from "../../assets/images/slider1.avif";
import img2 from "../../assets/images/slider2.avif";
import img3 from "../../assets/images/slider3.avif";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  const arr = ["TV", "Tu lanh", "Lap top"];
  return (
    <div>
      <div
        style={{
          padding: "0 120px",
        }}
      >
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item}></TypeProduct>;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{ backgroundColor: "#efefef", padding: "0 120px" ,height:'1000px'}}
      >
        <SliderComponent arrImages={[img1, img2, img3]} />

        <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px'}}>
          <CardComponent></CardComponent>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
