import styled from "styled-components";
import { ImgDiv, ImgLogo1, ImgLogo2 } from "../../Pages/LoginPage/styled";

export const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  background: #ededed;
  align-items: center;
  justify-content: center;
`;

export const DivSize = styled.div`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
export const ImgHeader = styled(ImgDiv)`
  height: 28px;
  width: 28px;
`;

export const HeaderLogo1 = styled(ImgLogo1)`
  height: 14px;
  width: 14px;
`;
export const HeaderLogo2 = styled(ImgLogo2)`
  height: 14px;
  width: 14px;
`;

export const HeaderLogo3 = styled(HeaderLogo1)`
  background: #f9b24e;
  border-radius: 0 0 100px 0;
`;
export const HeaderLogo4 = styled(HeaderLogo3)`
  background: #a8bbc6;
`;

export const HeaderP = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #4088cb;
  padding-left: 18px;
`;
