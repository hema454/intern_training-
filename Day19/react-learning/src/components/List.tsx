function List() {
  const technologies = [
    { id: 1, name: "React", completed: true },
    { id: 2, name: "TypeScript", completed: false },
    { id: 3, name: "Vite", completed: true },
    { id: 4, name: "JavaScript", completed: false },
  ];

  return (
    <div className="list">
      <h2>Technology List</h2>

      <ul>
        {technologies.map((tech) => (
          <li
            key={tech.id}
            className={tech.completed ? "completed" : "pending"}
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;