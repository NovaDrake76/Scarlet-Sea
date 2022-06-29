import Image from "next/image"
import { Footer } from "../components/Footer"

export default function About() {
  return (
    <>
      <div className="flex flex-col text-white">
        <div className="flex flex-col items-center justify-center h-[50vh] bg-center bg-no-repeat bg-cover bg-bgAbout bg-fixed">
          <h1 className="leading-normal text-center text-5xl md:text-7xl font-[cinzel] font-semibold text-red-600	">
            ABOUT SCARLET <br /> SEA
          </h1>
        </div>
        <div className="flex flex-col  justify-center align-middle bg-[#211F1F] p-12 gap-12">
          <h4 className="text-3xl leading-normal text-center text-white ">
            Fate has summoned you to the shores of the Scarlet Sea. In a land
            hell-bent on your destruction, what will you do to survive?
          </h4>
        </div>
        <div className="flex flex-col items-center justify-around gap-3 p-8 bg-bottom bg-no-repeat bg-cover md:flex-row bg-bgAbout2 ">
          <div className="flex flex-col gap-8 md:w-1/2 ">
            <div className="font-[cinzel]">
              <h3 className="text-2xl">THE MISTICAL ISLANDS OF</h3>
              <h2 className="text-4xl md:text-6xl">VERNECIA</h2>
            </div>
            <p className="text-xl">
              For thousands of years, the mysterious sea of Vernecia has been
              the source of fantastical legends—and now you&apos;ve found it.
              Shipwrecked, with no supplies or allies, you&apos;ll need to make
              your way in a dangerous world where the fundamental laws of life
              and death don&apos;t apply.
            </p>
          </div>
          <Image
            src="/map.webp"
            alt="placeholder"
            width={600}
            height={446}
            layout="intrinsic"
          ></Image>
        </div>
        <div className="flex flex-col md:flex-row justify-around align-middle bg-[#211F1F] p-8 gap-12 ">
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <Image
              src="https://images.tcdn.com.br/img/img_prod/25136/pre_venda_31_07_2022_valor_total_r_706_00_10_para_reserva_nendoroid_1687_houshou_marine_hololive_pro_14763_1_ce4763c483a594c9489e3f64085d5570.png"
              alt="placeholder"
              width={300}
              height={300}
            />
            <h2 className="text-4xl font-[cinzel] p-4 text-center">VERNECIA</h2>
            <p className="text-xl text-justify">
              A beautiful world awaits you. Venture into tempestuous waters,
              marvel at lush valleys and explore rich towns. Build your own
              hideout in a well protected island, and search for ways to 
              make money, to buy weapons, to make more money, and buy 
              better ships, to make more money.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <Image
              src="https://images.tcdn.com.br/img/img_prod/25136/pre_venda_31_07_2022_valor_total_r_706_00_10_para_reserva_nendoroid_1687_houshou_marine_hololive_pro_14763_1_ce4763c483a594c9489e3f64085d5570.png"
              alt="placeholder"
              width={300}
              height={300}
            />
            <h2 className="text-4xl font-[cinzel] p-4 text-center">PLAY WITH FRIENDS</h2>
            <p className="text-xl">
              Make your own tripulation with your friends. You can play with several 
              classes, so everyone can play their own way.
              Have a lot of friends? No worries! You can play with as many as you want 
              with the fleets system. Just make sure to have engough money to buy all these ships.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around px-8 py-1 bg-top bg-no-repeat bg-cover md:py-8 md:flex-row bg-bgAbout3">
          <div className="flex flex-col gap-8 md:w-1/2 ">
            <div className="font-[cinzel]">
              <h3 className="text-2xl">REAL TIME</h3>
              <h2 className="text-4xl md:text-6xl">ACTION COMBAT</h2>
            </div>
            <p className="text-xl">
              Arm yourself with brutal melee weapons, ranged artillery, or
              heavy cannons and jump into Scarlet Sea&apos;s
              real-time action combat system. As you progress you&apos;ll be
              able to determine what you want your gameplay experience to be
              like—will you act as a protective shield on the front lines of
              battle? Will you shoot bullets from far or swing a saber at the core of the battle?
              Only you can decide.
            </p>
          </div>
          <Image
            src="/weapons.png"
            alt="placeholder"
            width={640}
            height={400}
            layout="intrinsic"
          ></Image>
        </div>
        <div className="flex flex-col md:flex-row justify-around align-middle bg-[#211F1F] p-8 gap-12">
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <Image
              src="https://images.tcdn.com.br/img/img_prod/25136/pre_venda_31_07_2022_valor_total_r_706_00_10_para_reserva_nendoroid_1687_houshou_marine_hololive_pro_14763_1_ce4763c483a594c9489e3f64085d5570.png"
              alt="placeholder"
              width={300}
              height={300}
            />
            <h2 className="text-4xl font-[cinzel] p-4 text-center">
              MARKET FOR PLAYERS BY PLAYERS
            </h2>
            <p className="text-xl">
              Wanna make some money? Why not sell that shiny sword that you
              just found on your last trip? The game economy is controled by
              the players, and every territory has their own market! Wanna be
              a merchant? Well, you can. But in the world of piracy, everyone
              got sharp eyes to find a easy target full of valuable goods.
              You can also buy and sell high-level weapons, ships, and other items 
              in the Steam Marketplace, or try your luck at the <span className="text-red-600">Red Cat Casino</span>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <Image
              src="https://images.tcdn.com.br/img/img_prod/25136/pre_venda_31_07_2022_valor_total_r_706_00_10_para_reserva_nendoroid_1687_houshou_marine_hololive_pro_14763_1_ce4763c483a594c9489e3f64085d5570.png"
              alt="placeholder"
              width={300}
              height={300}
            />
            <h2 className="text-4xl font-[cinzel] p-4 text-center">MAKE THEM TREMBLE YOUR NAME</h2>
            <p className="text-xl">
              Wanna make it to the top? Beware; dangerous players have high bounties,
              and high-level gear. If this isna&apos;t a problem for you, be ready to
              challenge the entire world in the Battle Seasons. Who know what kind
              of rewards you might win? Remember, the rarer the item, the more
              expensive it gets, so you migh wanna get some of these <span className="text-yellow-300"> World-Class</span> gear
              from the Season Rewards. You can also get some Ultra-Rare items
              from the Casino.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around p-8 bg-fixed bg-center bg-no-repeat bg-cover md:flex-row bg-bgAbout4">
          <div className="flex flex-col gap-8 md:w-1/2">
            <div className="font-[cinzel]">
              <h3 className="text-2xl">GROUP</h3>
              <h2 className="text-4xl md:text-6xl">EXPEDITIONS</h2>
            </div>
            <p className="text-xl">
              Expeditions are instanced dungeons that take you and four allies
              to the farthest corners and the deepest depths of Aeternum to face
              deadly foes and uncover truths about the island. Your first
              expedition opportunity will open at level 25 with the Amrine
              Expedition, with more waiting for you along your adventure.
            </p>
          </div>
          <Image
            src="/coin.png"
            alt="placeholder"
            width={512}
            height={512}
            layout="intrinsic"
          ></Image>
        </div>
      </div>
          <Footer/>
    </>
  )
}
