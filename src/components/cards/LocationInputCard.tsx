import React from 'react';
import styled from '@emotion/styled';
import TextInputComponent from '../input/TextInputComponent';

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LocationInputCard() {
  return (
    <Card>
      <TextInputComponent title="원하는 장소를 입력해 주세요" />
    </Card>
  );
}
