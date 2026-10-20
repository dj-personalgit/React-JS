const ThemeToggle = (prop) => {
  return (
    <button className="py-2 px-4 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      {prop.theme}
    </button>
  )
}

export default ThemeToggle