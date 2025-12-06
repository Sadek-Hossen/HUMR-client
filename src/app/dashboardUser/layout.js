import Link from "next/link";

 const DashBoardLayout =({ children })=> {
  return (
    <div className="min-h-screen flex bg-gray-300">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 shadow-lg p-6 fixed left-0 top-0 bottom-0">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Dashboard</h1>

        <nav className="flex flex-col gap-4">
          <Link 
            href="/"
            className="text-gray-700 hover:bg-gray-300 rounded-lg px-4 py-2 font-medium"
          >
            Profile Details
          </Link>

          <Link 
            href="/applayLeave"
            className="text-gray-700 hover:bg-gray-300 rounded-lg px-4 py-2 font-medium"
          >
            Contract Details 
          </Link>
          <Link 
            href="/applayLeave"
            className="text-gray-700 hover:bg-gray-300 rounded-lg px-4 py-2 font-medium"
          >
           Next of kin details
          </Link>
          <Link 
            href="/applayLeave"
            className="text-gray-700 hover:bg-gray-300 rounded-lg px-4 py-2 font-medium"
          >
          Education qualification
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-10 w-full">
        {children}
      </main>
    </div>
  );
}


export default DashBoardLayout ;