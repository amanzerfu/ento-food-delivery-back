import React from 'react'
import styled from 'styled-components';

const Admin = () => {
  return (
    <MainPage>Admin</MainPage>
  )
}
const MainPage =styled.div `
color:${({theme}) => theme.colors.yelloColor};
padding: 80px;
`;

export default Admin;