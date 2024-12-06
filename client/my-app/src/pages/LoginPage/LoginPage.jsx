import React, { useState } from 'react';
import { SliderContainer, LoginWrapper, Title, Input, Button } from './style';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login with", username, password);
  };

  return (
    <SliderContainer>
      <LoginWrapper>
        <Title>Login</Title>
        <Input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button onClick={handleLogin}>Login</Button>
      </LoginWrapper>
    </SliderContainer>
  );
};

export default LoginPage;
