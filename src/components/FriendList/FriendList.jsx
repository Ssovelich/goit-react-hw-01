import FriendListItem from "../FriendListItem/FriendListItem"

const FriendList = (props) => {
    const { friends } = props;
    
    return (
        <div>
            <ul>
                <li>
                    {friends.map((friendItem) => {
                        return (
                         <FriendListItem
                          key={friendItem.id}
                          name={friendItem.name}
                          avatar={friendItem.avatar}
                          isOnline={friendItem.isOnline}
                        />
                        );
                    })}
                </li>
            </ul>
        </div>
 )
}

export default FriendList