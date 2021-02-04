import styled from "styled-components";
import { Link, Paper } from "@material-ui/core";
import ChatForm from "../../../elements/ChatForm";

type ContentWrapperProps = {
    ownMessage: boolean
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  margin-left: ${p => p.ownMessage ? '0' : '15px'};
  margin-right: ${p => p.ownMessage ? '15px' : '0'};
  flex: 0 0 80%;
  h6 {
    margin-bottom: 5px;
    font-weight: 300;
    text-align: ${p => p.ownMessage ? 'right' : 'left'};
  }
  h6, p {
    font-size: 0.875rem;
  }
  p {
    line-height: 1.2;
  }
`

export const ContentText = styled(Paper)`
  padding: 8px 10px;
  background-color: rgba(255,255,255,.66);
`

export const ReplyLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ReplyLink = styled(Link)`
  display: inherit;
  text-align: right;
  font-size: 0.75rem;
`

export const ReplyForm = styled(ChatForm)`
  flex: 0 0 100%;
  button {
    flex: 0 0 90px;
  }
`