import backgroundImg from '../../../src/assets/background-img.png';

import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.light_red }; 
  }

   > span {
    font-size: 1.4rem;
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }


  .backToLogin {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.light_red };
    transition: brightness, .2s;

    > a {
    padding-left: 1rem;
    }

    > svg {
      height: 2rem;
      width: 2rem;
    }

    &:hover {
      svg {
        filter: brightness(0.8);
      }
    }
  }
`;


export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;