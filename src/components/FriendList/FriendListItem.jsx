import css from './FriendListItem.module.css';
export default function FriendListItem({
    friends: { avatar, name, isOnline },
}) {
    return (
        <div className={css.card}>
            <img src={avatar} alt="Avatar" className="imgStyle" width="90" />
            <p className={css.nameTitle}>{name}</p>
            <p className={isOnline ? css.online : css.ofline}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}
