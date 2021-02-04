import styled from "styled-components";

type Props = {
    ownMessage: boolean
}

const ChatMessageWrapper = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${p => p.ownMessage ? 'auto' : '0' };
  flex-direction: ${p => p.ownMessage ? 'row-reverse' : 'row'};
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e9e9e9;
  cursor: pointer;
  @media all and (min-width: 786px) {
    max-width: 40%;
  }
`;

export default ChatMessageWrapper;