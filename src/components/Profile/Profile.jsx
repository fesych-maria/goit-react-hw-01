import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userWrapper}>
      <div className={css.imgInfoWrapper}>
        <div className={css.imgWrapper}>
          <img src={image} alt="User avatar" className={css.img} />
        </div>
        <p className={css.heading}>{name}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
