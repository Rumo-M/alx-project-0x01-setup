export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-4 mt-10">
      <div className="max-w-6xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </div>
    </footer>
  );
}
