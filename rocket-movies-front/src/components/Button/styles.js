import styled from 'styled-components';

export const Container = styled.button`

  border-radius: 1rem;
  border: none;
  font-weight: 500;

  height: 5.6rem;

  padding: 1.6rem 14.6rem; 

  background-color: ${({ theme }) => theme.COLORS.light_red};
  color: ${({ theme }) => theme.COLORS.gray_400 };
`;