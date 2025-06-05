export default function Footer() {
  return (
    <footer className="w-full text-center py-4 border-t dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
  );
}
