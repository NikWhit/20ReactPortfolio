export default function Nav({ links }) {
    return (
        <ul className="link-text">
        {links.map((link) => link)}
      </ul>
    );
}