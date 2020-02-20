import React from 'react'

import MenuTabs from './MenuTabs';
import LoginBox from './LoginBox';

const Home = () => {
  return (
    <div>
      {!localStorage.getItem('session_id') && <LoginBox/>}
      {localStorage.getItem('session_id') && <MenuTabs/>}
    </div>
  );
}

export default Home;
