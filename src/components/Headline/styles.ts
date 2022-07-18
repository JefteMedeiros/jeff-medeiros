import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 4.5rem;

  @media screen and (max-width: 1360px) {
    padding-top: 9rem;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  height: 13.3125rem;
  width: 13.3125rem;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 31.375rem;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  color: white;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: white;
  margin-top: 0.5rem;
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;
  border: 2px solid ${props => props.theme.secondary}; 
  border-radius: 0.625rem;
  gap: 0.625rem;
  margin-top: 0.625rem;
  padding: 0.375rem 0.5625rem;
  align-self: end;

  svg {
    color: white;
    font-size: 2.0625rem;
  }
`;
