import React from "react";
import styled from "styled-components";
import MH from './../assets/img/morhealthlogo.png';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  background: linear-gradient(90deg, rgb(217,217,217) 0%, rgb(247,248,248) 100%);
  width: 100%;
  margin-top: 5%;
  height: 40%;
  
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  
  @media only screen and (min-width: 600px) {
    height: 20%;
  }
  
  @media only screen and (min-width: 992px) {
    height: 30%;
  }
`;

const Title = styled.div`
  color: #031728;
  font-weight: bold;
  font-size: 20px;
  padding: 2%;
`;
const Description = styled.div`
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  width: 30%;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 2%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    width: 40%;
    font-size: 18px;
    text-align: center;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    width: 30%;
    font-size: 20px;
    text-align: center;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: #216B91;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const MenuItems = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background: linear-gradient(90deg, rgb(217,217,217) 0%, rgb(247,248,248) 100%);;
  color: #808080;
  font-size: 20px;
  padding: 0;
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Description>
          
          <img src={MH} alt="Logo morhealth" style={{width: '300px'}}/>
        </Description>
        <MenuItems>
          <Title>Módulos</Title>
          <Menu>
            <MenuItem href="#">Inicio</MenuItem>
            <MenuItem href="#">Ejercicios</MenuItem>
            <MenuItem href="#">Nutrición</MenuItem>
            <MenuItem href="#">Salud</MenuItem>
            <MenuItem href="#">Morse</MenuItem>
          </Menu>
        </MenuItems>
        <MenuItems>
          <Title>Our Policies</Title>
          <Menu>
            <MenuItem href="#">Privacy Policy</MenuItem>
            <MenuItem href="#">Data Policy</MenuItem>
          </Menu>
        </MenuItems>
      </Container>
        <></>
      <CopyRight>&copy; 2022 Morse - Todos los derechos reservados.</CopyRight>
    </>
  );
};

export default Footer;
