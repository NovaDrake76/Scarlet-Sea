import Item from "./Item";
import Image from "next/image"
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "../Data/data"

export default function ItemsContainer(){
    return (
    <div>
        <div className="flex flex-col md:flex-row items-center  py-4 flex-1 justify-around">
            <Image src="/nvidia.png" alt="nvidia logo"  width={300} height={68} layout="fixed"></Image>
            <Image src="/msi.png" alt="msi" width={300} height={97} layout="fixed"></Image>
            <Image src="/unreal.png" alt="msi" width={149} height={120} layout="fixed"></Image>
            <Image src="/Everyone_10.svg" alt="esrb rating" width={200} height={120} layout="fixed"></Image>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Item Links={PRODUCTS} title="PRODUCTS"/>
        <Item Links={RESOURCES} title="RESOURCES"/>
        <Item Links={COMPANY} title="COMPANY"/>
        <Item Links={SUPPORT} title="SUPPORT"/>
    </div>
    </div>
    )
}