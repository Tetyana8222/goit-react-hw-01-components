import PropTypes from 'prop-types';
import { Friend, Name, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
