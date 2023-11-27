import './App.css';
import UserList from './UserList';
import Home from './Home';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import UserDetail from './UserDetail';
import NotFound from './NotFound';

const USER_LIST = [
    {"name": "Name1" , "pic":"./image/img1.jpg", "address":"Ha Noi"},
    {"name": "Name2" , "pic":"./image/img2.jpg", "address":"Hue"},
    {"name": "Name3" , "pic":"./image/img3.jpg", "address":"Da Nang"},
    {"name": "Name4" , "pic":"./image/img4.jpg", "address":"Sai Gon"}
]
function App() {
  const users = USER_LIST;
  return (
    <div className="App">
      <nav className='nav-link'>
        <Link to ="/">Home</Link>
        <Link to ="/users">UserList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users"  element={<UserList users={users} />}/>
        <Route path="/users/:id"  element={<UserDetail users={users}/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path="/people"  element={<Navigate replace  to="/users" />} />
      </Routes>
    </div>
  );
}

export default App;
