import PhoneIcon from '../../images/phonebook.png';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, userSelector } from '../../store/auth/authSelectors';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/auth/authOperations';
import { removeToken } from '../../api/authApi';
import style from './Header.module.css';

const Header = () => {
  const isAuth = useSelector(authSelector);
  const isUser = useSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (isAuth) {
      await dispatch(logoutUser());
      removeToken();
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <nav className={style.navigation}>
            <h1 className={'pageTitle'}>
              <img src={`${PhoneIcon}`} alt={''} width={'50'} height={'50'} />
              Phonebook
            </h1>
            <div className={style.userMenu}>
              {!isAuth && (
                <NavLink className={'logginButton'} to={'/'}>
                  Home
                </NavLink>
              )}
              {isUser && <p>{isUser.email}</p>}
              <NavLink
                className={'logginButton'}
                to={isAuth ? '/' : '/login'}
                onClick={handleClick}
              >
                {isAuth ? 'LogOut' : 'LogIn'}
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
