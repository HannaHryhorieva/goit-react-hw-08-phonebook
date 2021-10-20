import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/login/auth-operations';
import { getUsername } from '../redux/login/auth-selectors';
// import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUsername);
  // const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span style={styles.name}>{email}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Sign out
      </button>
    </div>
  );
}
