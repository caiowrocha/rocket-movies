import styled from "styled-components";

export const Container = styled.div`
  height: 5.6rem;
  width: 100%;
  display: flex;
  margin-bottom: .8rem;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.background_700};
  border-radius: 1rem;

  svg {
    margin-left: 1.6rem;
  }

  > input {
    padding: 1.6rem;
    width: 100%;

    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.white };
  
  }
`;