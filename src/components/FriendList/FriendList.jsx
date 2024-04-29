import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul className={css.container}>
            {friends.map(friends => {
                return (
                    <li key={friends.id}>
                        <FriendListItem friends={friends} />
                    </li>
                );
            })}
        </ul>
    );
}
