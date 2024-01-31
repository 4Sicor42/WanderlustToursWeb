import React, { useContext, useState } from 'react';
import Profile from './Profile.js';
import { Context } from '../../../index';
import UnauthorizedComponent from '../../Common/UnauthorizedComponent';
import AccountHistory from './AccountHistory';
import AdminAccount from './AdminAccount';
const Account = () => {
  const { user } = useContext(Context);
  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!user.isAuth) {
    return <UnauthorizedComponent />;
  }

  return (
    <div className="account_wrapper">
      <div className="account-tab-wrapper">
        <button
          className={`account-tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </button>

        <button
          className={`account-tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => handleTabClick('history')}
        >
          History
        </button>
        {user.role === 'ADMIN' ?
        <button
          className={`account-tab ${activeTab === 'ADMIN' ? 'active' : ''}`}
          onClick={() => handleTabClick('ADMIN')}
        >
          Admin Menu
        </button> 
        :
         '' }
      </div>

      {activeTab === 'profile' && <Profile />}
      {activeTab === 'history' && <AccountHistory />}
      {activeTab === 'ADMIN' && <AdminAccount />}
    </div>
  );
};

export default Account;