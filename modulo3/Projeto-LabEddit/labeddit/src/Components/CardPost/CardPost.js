import React from "react";
import { ArrowsDiv, CardContainer, CommentCount, CommentDiv, ContenP, ImgFeed, ItensDiv, LikeCount, SendByUserP, } from "./styled";
import ArrowUp from '../../assets/arrowUp.png'
import ArrowDown from '../../assets/arrowDown.png'
import ArrowGreen from '../../assets/arrowGreen.png'
import ArrowRed from '../../assets/arrowRed.png'
import Baloon from '../../assets/baloon.png'


export const CardPost = ({ post }) => {
  return (
    <CardContainer>
      <div>
        <SendByUserP>Enviado por: {post.username}</SendByUserP>
      </div>
      <div>
        <ContenP>
          {post.body}
        </ContenP>
      </div>
      <ItensDiv>
        <ArrowsDiv>
          <ImgFeed src={ArrowUp} />
          <LikeCount>{post.voteSum === null ? 0 : post.voteSum}</LikeCount>
          <ImgFeed src={ArrowDown} />
        </ArrowsDiv>
        <CommentDiv>
          <ImgFeed src={Baloon} />
          <CommentCount>
            {post.commentCount === null ? 0 : post.commentCount}
          </CommentCount>
        </CommentDiv>
      </ItensDiv>
    </CardContainer>
  );
};
