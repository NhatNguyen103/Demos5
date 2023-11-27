import { useNavigate } from 'react-router-dom'

function User({name, pic, address, id}) {
    const navigate = useNavigate();
    return (
        <div className="user-container" onClick={ () => navigate(`/users/${id}`)}>
            <img className="user-profile-pic" src= {pic} alt= {name} />
            <h2 className="user-name">{name}</h2>
            <h3>{address}</h3>
        </div>
      );
}

export default User;