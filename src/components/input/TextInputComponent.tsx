import React, { useState } from 'react';
import styled from '@emotion/styled';

interface TextInputProps {
  title: string;
}

const TextInput = styled.input``;

export default function TextInputComponent(props: TextInputProps) {
  const { title } = props;
  const [location, setLocation] = useState<string>('');
  const onChangeTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLocation(value);
  };
  return (
    <TextInput
      value={location}
      type="text"
      placeholder={title}
      onChange={onChangeTextInput}
    />
  );
}
