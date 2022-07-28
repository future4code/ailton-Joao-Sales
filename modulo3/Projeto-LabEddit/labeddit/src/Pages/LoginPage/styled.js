import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 33px;
`;

export const LogoDiv = styled.div`
  height: 152px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 113px;
`;

export const Title = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  margin-top: 10px;
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
  height: 42px;
  width: 42px;
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

export const Description = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 300;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
`;

export const FormSyled = styled.form`
  margin-top: 107px;
  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  height: 60px;
  padding-left: 16px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin: 4px 0px;
  ::placeholder {
    padding-left: 16px;
    font-family: "Noto Sans";
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ButtonStyled = styled.button`
  height: 51px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  border-radius: 27px;
  border: none;
  color: white;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
`;

export const ButtonReverse = styled(ButtonStyled)`
background: white;
color: #FE7E02;
border: 1.5px solid #FE7E02;
`

export const DivLine = styled.div`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  height: 1.3px;
  margin: 12px 0;
`;
