import styled  from "styled-components";

type Props = {
    flex?: boolean,
    direction?: string,
    align?: string,
    justify?: string
}

const Container = styled.div<Props>`
  display: ${p => (p.flex ? 'flex' : 'block')};
  flex-wrap: wrap;
  flex-direction: ${p => (p.direction ? p.direction : 'row')};
  align-items: ${p => (p.align ? p.align : 'flex-start')};
  justify-content: ${p => (p.justify ? p.justify : 'flex-start')};
  padding: 0 30px;
  @media all and (min-width: 768px) {
    width: 720px;
    margin: 0 auto;
    padding: 0;
  }
  @media all and (min-width: 992px) {
    width: 960px;
  }
  @media all and (min-width: 1200px) {
    width: 1140px;
  }
`;

export default Container;