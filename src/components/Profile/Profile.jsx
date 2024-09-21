import styles from './Profile.module.css'

const Profile = (props) => {
  const {name, tag, location, image, stats } = props;

  return (
      <div className={styles.wrap}>
        <div>
         <img className={styles.avatar}
              src={image}
              alt="User avatar"
         />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.localion}>{location}</p>
        </div>

        <ul className={styles.statsList}>
          <li className={styles.statsListItem}>
           <span className={styles.statsName}>Followers</span>
           <span className={styles.statsValue}>{stats.followers}</span>
          </li>
          <li className={styles.statsListItem}>
             <span className={styles.statsName}>Views</span>
             <span className={styles.statsValue}>{stats.views}</span>
          </li>
          <li className={styles.statsListItem}>
              <span className={styles.statsName}>Likes</span>
              <span className={styles.statsValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
  )
}

export default Profile