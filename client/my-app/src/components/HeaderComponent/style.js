import { Row } from "antd";
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    // background-color: rgb(26, 148, 255);
background: linear-gradient(90deg, #000 70%, #8b0000 100%); /* Chuyển từ đen sang đỏ đậm */
    align-items: center;
`


export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    text-align: center,
    text-align: left;
     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Đổ bóng chữ */
  letter-spacing: 0.5px; /* Tăng khoảng cách giữa các ký tự */
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px
`

export const WrapperTextHeaderSmall = styled.span`
   font-size: 12px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Đổ bóng nhẹ */
    
`

export const WrapperHeaderCart = styled.div`
    display: flex;
    align-items: center;
    gap: 10px
`
