import { useParams } from 'react-router-dom'
function UserDetail({ users }) {
    const { id } = useParams();
    //console.log(id);
    //console.log(typeof(id));
    //console.log(users[id]); // lay thong tin tung nguoi
    const user = users[id];
    return (
        <div>
            <div className="user-detail-container">
                <img className="user-profile-pic" src={user.pic} alt={user.name} />
                <div className='detail-info'>
                    <h2 className="user-name">{user.name}</h2>
                    <h3>{user.address}</h3>
                </div>

            </div>
        </div>
    );
}

export default UserDetail;