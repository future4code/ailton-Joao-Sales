import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LogoDiv = styled.div`
  height: 152px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgDiv = styled.div`
  display: flex;
  width: 84px;
  height: 84px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ImgLogo1 = styled.div`
  height: 41.99px;
  width: 41.99px;
  background: #fe7e02;
  border-radius: 100px 0 0 0;
`;

export const ImgLogo2 = styled(ImgLogo1)`
  background: #45525b;
`;
export const ImgLogo3 = styled(ImgLogo1)`
  background: #f9b24e;
  border-radius: 0 0 100px 0;
`;
export const ImgLogo4 = styled(ImgLogo3)`
  background: #a8bbc6;
`;
