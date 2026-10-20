const NavLinks = () => {
  const links = ["Home", "About", "Contact", "More"];
  return (
    <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200">
      {links.map(link => (
        <li
          key={link}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        >
          {link}
        </li>
      ))}
    </ul>
  )
}

export default NavLinks