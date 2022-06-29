import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center justify-center h-[50vh] bg-center bg-no-repeat bg-cover bg-bgAbout bg-fixed">
        <h1 className="leading-normal text-center text-7xl font-[cinzel] font-semibold text-red-600	">
            ABOUT SCARLET <br /> SEA
            </h1>
        </div>
        <div className="flex flex-col  justify-center align-middle bg-[#211F1F] p-12 gap-12">
        <h4 className="text-3xl leading-normal text-center text-white ">
            Scarlet Sea is a community of people who are passionate about the sea.
            </h4>
        </div>
      </div>

    </>
  )
}
