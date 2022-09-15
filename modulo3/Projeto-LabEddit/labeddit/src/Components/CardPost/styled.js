import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 10px;
  gap: 18px;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`;

export const SendByUserP = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6f6f6f;
`;

export const ContenP = styled.p`
  font-family: "IBM Plex Sans";
  font-size: 18px;
  line-height: 23px;
  color: black;
`;

export const ItensDiv = styled.div`
display: flex;
flex-direction: row;
gap: 18px;
`

export const ImgFeed = styled.img`
height: 14px;
width: 14px;
`

export const LikeCount = styled.p`
font-family: 'IBM Plex Sans';
font-weight: 700;
font-size: 9.56098px;
line-height: 12px;
text-align: center;
color: #6F6F6F;
`

export const CommentCount = styled(LikeCount)`
font-weight: 500;
`

export const ArrowsDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 4.66667px;
gap: 15.92px;
border: 0.796748px solid #ECECEC;
border-radius: 28px;
width: 90px;
height: 24px;
`

export const CommentDiv = styled(ArrowsDiv)`
width: 60px;
`
