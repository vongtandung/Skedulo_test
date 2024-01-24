const UserItem = ({ avatar_url, login, type, score }) => (
    <tr className="user-item-wrapper">
        <td> <img style={{width: 50, height: 50, borderRadius: '50%'}} src={avatar_url} alt={avatar_url} /></td>
        <td>{login}</td>
        <td>{type}</td>
        <td>{score}</td>
    </tr>
)

export default UserItem