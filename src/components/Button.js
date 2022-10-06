import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.button`
  display: flex;
  margin: 150px auto 0 auto;
  padding: 20px 80px;
  background-color: #299B01;
  font-size: 21px;
  border: none;
`

export const Button = () => (
  <ButtonBlock>Добавить</ButtonBlock>
)