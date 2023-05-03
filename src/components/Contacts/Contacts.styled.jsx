import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${appear} 500ms ease-in-out;
`;

const ContactName = styled.p`
  margin-right: 10px;
`;

const ContactButton = styled.button`
  background-color: #00aeef;
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  &:hover {
    background-color: #0077b5;
  }
`;

export { ContactsWrapper, ContactItem, ContactName, ContactButton };
