import styled from "styled-components";

export const ContactForm = styled.form`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    margin: auto;
  }
`;

export const FormLabel = styled.p`
  color: ${({ theme }) => theme.colors.para_text_color};
  padding-bottom: 10px;
`;
export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.para_text_color};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 5px;
  padding: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.para_text_color};
  }
`;

export const ContactCard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.para_text_color};
`;
