import { Person } from "../types/Person";

export const getImageUrl = (person: Person) => {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
}
  