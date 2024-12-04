// pages/index.js
export default function Home() {
  return (
    <div className="h-screen bg-gray-800 p-10 border-2 border-black">
      {/* Fullscreen Grid Container */}
      <div className="grid grid-rows-layout grid-cols-layout gap-4 h-full text-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-500 to-blue-500 row-span-1 col-span-3 flex items-center justify-center border border-gray-500">
          Header
        </header>

        {/* Sidebar */}
        <aside className="bg-gradient-to-r from-green-500 to-teal-500 row-span-4 col-span-1 flex items-center justify-center border border-gray-500">
          Sidebar
        </aside>

        {/* Content 1 */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 row-span-2 col-span-1 md:col-span-2 flex items-center justify-center border border-gray-500">
          Content-1
        </section>

        {/* Content 2 */}
        <section className="bg-gradient-to-r from-blue-400 to-purple-400 row-span-2 col-span-1 flex items-center justify-center border border-gray-500">
          Content-2
        </section>

        {/* Content 3 */}
        <section className="bg-gradient-to-r from-blue-400 to-purple-400 row-span-2 col-span-1 flex items-center justify-center border border-gray-500">
          Content-3
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-500 to-blue-500 row-span-1 col-span-3 flex items-center justify-center border border-gray-500">
          Footer
        </footer>
      </div>
    </div>
  );
}
