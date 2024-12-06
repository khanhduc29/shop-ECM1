import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 274px;
//   border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
//   border-radius: 12px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Phóng to khi hover */
  }
`;

export const SliderOverlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px 12px;
//   border-radius: 8px;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${SliderContainer}:hover & {
    opacity: 1; /* Hiển thị overlay khi hover */
  }
`;
