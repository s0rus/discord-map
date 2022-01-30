import React from 'react';
import SidebarAlert from '../SidebarAlert/SidebarAlert';
import CurrentUserInfo from '../CurrentUserInfo/CurrentUserInfo';
import UserDetails from '../UserDetails/UserDetails';
import UsersList from '../UsersList/UsersList';
import Footer from '../Footer/Footer';
import { Content, Logo, Wrapper } from './Sidebar.styles';

const Sidebar = ({
  currentUser,
  accessToken,
  setAccessToken,
  users,
  setUsers,
  setUserDetails,
  isUserSaved,
  userDetails,
  setViewport,
}) => {
  return (
    <Wrapper>
      <Logo>MAPA GORYLI 🗺</Logo>
      <CurrentUserInfo
        currentUser={currentUser}
        accessToken={accessToken}
        setAccessToken={setAccessToken}
        setUsers={setUsers}
        setUserDetails={setUserDetails}
        isUserSaved={isUserSaved}
      />
      <SidebarAlert isUserSaved={isUserSaved} />
      <Content>
        {userDetails ? (
          <UserDetails userData={userDetails} setUserDetails={setUserDetails} setViewport={setViewport} />
        ) : (
          <UsersList
            userData={userDetails}
            users={users}
            setUserDetails={setUserDetails}
            setViewport={setViewport}
            currentUser={currentUser}
          />
        )}
      </Content>
      <Footer />
    </Wrapper>
  );
};

export default Sidebar;
