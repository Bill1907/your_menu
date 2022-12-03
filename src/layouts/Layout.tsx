import React from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Main = styled.main`
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export default function Layout(props: LayoutProps): React.ReactElement {
  const { title, children } = props;

  return (
    <div>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Main>{children}</Main>
      <Footer>Copyright 2022</Footer>
    </div>
  );
}
