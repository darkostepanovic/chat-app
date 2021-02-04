import styled from "styled-components";

const ChatRoomWrapper = styled.div`
  height: calc(100vh - 118px);
  overflow: auto;
  background-color: #f0f8ff;
  padding: 40px 0;
  @media all and (min-width: 768px) {
    height: calc(100vh - 68px);
  }
  
  h5 {
    margin-bottom: 30px;
  }
`;

export default ChatRoomWrapper