import Link from "next/link"

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between w-full px-5 py-4 bg-gray-800 md:px-10">
        <div>
          <div className="flex gap-4 md:gap-10 ">
            <Link href="/">
              <a className="p-1 text-sm font-medium text-white rounded-md hover:bg-gray-700">
                HOME
              </a>
            </Link>

            <Link href="about">
              <a className="p-1 text-sm font-medium text-white rounded-md hover:bg-gray-700">
                ABOUT
              </a>
            </Link>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/1XT0fQcI7XrKEfZeERzsnI0JtlY5jqGZVABEx3VUIeC0/edit"
              className="p-1 text-sm font-medium text-white rounded-md hover:bg-gray-700"
            >
              GAME DESIGN
            </a>
          </div>
        </div>
        <div className="hidden text-center md:flex">
          <Link href="/#register">
            <a className="p-1 text-sm font-medium text-red-600 rounded-md hover:bg-gray-700">
              PRE-REGISTER NOW
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
