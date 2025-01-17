export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    const name = 'John Doe';
    return (
        <>
            <img
            className="avatar"
            src={avatar}
            alt={description}
            />
            <h4>{name}</h4>
        </>
    );
}
