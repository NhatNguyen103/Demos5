import User from "./User"
function UserList({users}) {
    return (
        <div className="user-container-list">
            {users.map( (user, index) => <User name = {user.name} pic = {user.pic} address = {user.address} key = {index} id = {index}/>)}
        </div>
      );
}
export default UserList;