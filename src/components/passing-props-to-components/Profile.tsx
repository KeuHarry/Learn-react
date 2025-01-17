import { useRef } from "react";
import Avatar from "./Avatar"
import { Person } from "../../types/Person";

// you can also use JSX spread syntax in case you don't have to specify the different props
export default function Profile() {
    const user = useRef<Person>(
        {
            name: 'Chun Li',
            imageId: '1bX5QH6'
        }
    );
    return (
        <Avatar
            person={ user.current }
            size={100} 
        />
    );
}
