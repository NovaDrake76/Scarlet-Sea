import ItemsContainer from "../components/ItemsContainer"
import Image from "next/image"

export function Footer() {
  return (
    <>
      <footer className="text-white bg-gray-900">
        <ItemsContainer />
        <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-2">
          <span>
            @ 2022 Appy - CNPJ. 40.981.116/0001-72. All rights reserved
          </span>
          <span>Terms - Privacy Policy</span>
        </div>
      </footer>
    </>
  )
}
