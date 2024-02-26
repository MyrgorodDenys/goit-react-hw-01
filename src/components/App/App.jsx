import userData from '../Profile/userData.json';
import friends from '../FriendsList/friends.json';
import transactions from '../TransactionHistory/transactions.json';

import Container from './App.styled.js';
import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendsList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';

export default function App() {
  return (
    <Container>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
