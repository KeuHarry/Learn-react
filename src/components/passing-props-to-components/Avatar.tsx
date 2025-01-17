import { Person } from "../../types/Person";

// you can destructure props object into individual props function({object1, object2}) or use the whole props objec like function(props)
export default function Avatar({ person, size = 100 }: {person: Person; size: number}) {
    const imageUrl = 'https://i.imgur.com/1bX5QH6.jpg';
    const name = 'Chun Li';
    return (
        <>
            <img
            className="avatar"
            src={imageUrl}
            alt={person.name}
            width={size}
            height={size}
            />
            <h4>{name}</h4>
        </>
    );
}
