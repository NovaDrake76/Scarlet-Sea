import Link from "next/link"

export function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 w-full flex justify-between px-5 md:px-10 py-4 items-center">
        <div>
          <div className="flex gap-4 md:gap-10 ">
            <Link href="/">
              <a className="text-sm font-medium text-white rounded-md hover:bg-gray-700">
                HOME
              </a>
            </Link>

            <Link href="about">
              <a className=" text-sm font-medium text-white rounded-md hover:bg-gray-700 ">
                ABOUT
              </a>
            </Link>
            <Link
              rel="noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/1XT0fQcI7XrKEfZeERzsnI0JtlY5jqGZVABEx3VUIeC0/edit"
            ></Link>
          </div>
        </div>
        <div className="text-center hidden md:flex">
          <a href="/#register" className="text-red-600">
            PRE-REGISTER NOW
          </a>
        </div>
      </nav>
    </>
  )
}
