import PropTypes from 'prop-types';
import {
  ContactsWrapper,
  ContactItem,
  ContactName,
  ContactButton,
} from './Contacts.styled';

const Contacts = ({ options, removeContact }) => {
  return (
    <>
      <ContactsWrapper>
        {options.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ContactName>
                {name}: {number}
              </ContactName>
              <ContactButton type="button" onClick={() => removeContact(id)}>
                Delete
              </ContactButton>
            </ContactItem>
          );
        })}
      </ContactsWrapper>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
  removeContact: PropTypes.func.isRequired,
};
