import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <ul className={css['friend-list']}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList;
