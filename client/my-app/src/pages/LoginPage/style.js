import styled from "styled-components";

// Slider container (dùng cho background của form đăng nhập)
export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-image: url('https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'); /* Hình nền từ URL */
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Box chứa form đăng nhập
export const LoginWrapper = styled.div`
  background-color: white; /* Nền trắng cho form đăng nhập */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Shadow tạo hiệu ứng nổi */
  width: 400px; /* Chiều rộng của box */
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #1890ff; /* Màu nền của nút */
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #40a9ff;
  }
`;
