import styled from "styled-components";
import { Avatar } from "@material-ui/core";

type Props = {
    ownMessage: boolean
}

export const ReplyWrapper = styled.div<Props>`
  margin-right: ${p => p.ownMessage ? '20px' : '0'};
  margin-left: ${p => p.ownMessage ? '0' : '20px'};
  margin-top: 5px;
  max-width: 100%;
  display: flex;
  align-items: center;
  h6 {
    text-align: left;
  }
`

export const ReplyAvatar = styled(Avatar)`
  width: 30px;
  height: 30px;
`