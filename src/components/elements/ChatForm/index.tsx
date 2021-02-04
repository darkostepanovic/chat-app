import styled from "styled-components";

const ChatForm = styled.form`
  display: flex;
  align-items: flex-end;
  flex: 0 0 100%;
  margin-bottom: 20px;
  @media all and (min-width: 768px) {
    flex: 0 0 50%;
    margin-bottom: 0;
  }
  button {
    margin-left: 10px;
    flex: 0 0 110px;
  }
`;

export default ChatForm;