export default function Item({ name, isPacked }: {name: string; isPacked: boolean}) {
    // you can also render it like {name} {isPacked && '✅'}
    const itemContent = isPacked ? `${name} ✅` : name;
    return <li className="item">{itemContent}</li>;
}
