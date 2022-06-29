import Item from "./Item"
import Image from "next/image"
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "../Data/Data.js"

export default function ItemsContainer() {
  return (
    <div>
      <div className="flex flex-col items-center justify-around flex-1 py-4 md:flex-row">
        <Image
          src="/nvidia.png"
          alt="nvidia logo"
          width={300}
          height={68}
          layout="fixed"
        ></Image>
        <Image
          src="/msi.png"
          alt="msi"
          width={300}
          height={97}
          layout="fixed"
        ></Image>
        <Image
          src="/unreal.png"
          alt="msi"
          width={149}
          height={120}
          layout="fixed"
        ></Image>
        <Image
          src="/Everyone_10.svg"
          alt="esrb rating"
          width={200}
          height={120}
          layout="fixed"
        ></Image>
      </div>
      <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={RESOURCES} title="RESOURCES" />
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
      </div>
    </div>
  )
}
