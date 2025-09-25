import "./navigation.css"
export default function Navigation() {
  const header_list = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact Me", id: "contact" },
  ];
  

  return (
    <nav className="navigation">
      <div>
        <span>Nikita Jeena</span>
      </div>
      <ul>
        {header_list.map((nav) => (
          <li key={nav.id}>
            <a href={`#${nav.id}`}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
