import styles from '../FriendList/FriendList.module.css'

const FriendListItem = (props) => {
const {name, avatar,  isOnline} = props;

    return (
        <>
            <li className={styles.friendListItem}>
                <img className={styles.avatar}src={avatar} alt="Avatar" width="48" />
                <p className={styles.name}>{name}</p>
                <p className={styles.isOnline}>{isOnline ? "Online" : "Offline"} </p>
            </li>
        </>
  )
}

export default FriendListItem