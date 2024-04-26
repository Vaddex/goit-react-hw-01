// import clsx from 'clsx';
import css from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.container}>
            <div className={css.avatarBox}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.avatarIcon}
                    height="268px"
                    width="268px"
                />
                <p className={css.username}>{name}</p>
                <p className={css.otherInfo}>@{tag}</p>
                <p className={css.otherInfo}>{location}</p>
            </div>
            <ul className={css.socialBox}>
                <li className={css.socialLi}>
                    <span className={css.liTitle}>Followers</span>
                    <span className={css.liValue}>{stats.followers}</span>
                </li>
                <li className={css.socialLi}>
                    <span className={css.liTitle}>Views</span>
                    <span className={css.liValue}>{stats.views}</span>
                </li>
                <li className={css.socialLi}>
                    <span className={css.liTitle}>Likes</span>
                    <span className={css.liValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
