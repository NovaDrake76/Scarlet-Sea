export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-start justify-center h-screen bg-no-repeat bg-cover bg-background">
        <div className="flex flex-col ml-28">
          <h1 className="leading-normal text-center text-7xl font-[cinzel] font-semibold 	">
            <span className="text-red-600">SCARLET</span> <br /> SEA
          </h1>
          <div className="flex flex-col items-center gap-4">
            <button className="w-2/3 p-2 bg-[#211F1FBD]/50 font-[cinzel] rounded-sm font-medium text-xl text-white">
              WATCH TRAILER
            </button>
            <button className="w-2/3 p-2 bg-[#211F1FBD]/50 font-[cinzel] rounded-sm font-medium text-xl text-white">
              PRE-REGISTER
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle bg-[#211F1F] p-12 gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="leading-normal  text-center text-red-600 text-6xl font-[cinzel] font-semibold 	">
            EXPLORE A NEW WORLD
          </h2>
          <h4 className="text-3xl leading-normal text-center text-white ">
            <span className="text-red-600">Rule</span> the sea,
            <span className="text-red-600"> Fight</span> for money, and
            <span className="text-red-600"> Rise </span> in power. Conquer the
            world in a exciting Multiplayer PVP Game.
          </h4>
          <p className="flex self-center max-w-2xl text-lg text-center text-white">
            Explore a thrilling, open-world MMO filled with danger and
            opportunity where you'll forge a new destiny for yourself as an
            pirate. Endless opportunities to fight, forage, and forge await you
            among the island's wilderness and towns. Wield deadly weapons in a
            real-time combat system, and fight alone, with a small team, or in
            massed armies for PvP battles — the choices are all yours.
          </p>
        </div>
        <div className="flex items-center justify-around gap-6">
          <div>
            <h3 className="leading-normal  text-center text-red-600 text-5xl font-[cinzel] font-semibold 	">
              PROVE YOUR SKILLS
            </h3>
            <p className="max-w-2xl text-lg text-center text-white ">
              Attributes are your character's core qualities: Strength,
              Dexterity, Constitution, Intelligence, and Focus. They define your
              combat strengths and weaknesses, like how much health you have and
              whether you're better with melee, ranged, or magical weapons. You
              can redistribute your attribute points, so feel free to experiment
              until you find the sort of fighting style you like best.
            </p>
          </div>
          <img
            src="https://images.tcdn.com.br/img/img_prod/25136/pre_venda_31_07_2022_valor_total_r_706_00_10_para_reserva_nendoroid_1687_houshou_marine_hololive_pro_14763_1_ce4763c483a594c9489e3f64085d5570.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-around gap-6">
          <img
            src="https://images.tcdn.com.br/img/img_prod/25136/pre_venda_31_07_2022_valor_total_r_706_00_10_para_reserva_nendoroid_1687_houshou_marine_hololive_pro_14763_1_ce4763c483a594c9489e3f64085d5570.png"
            alt=""
          />
          <div>
            <h3 className="leading-normal  text-center text-red-600 text-5xl font-[cinzel] font-semibold 	">
              STAY ALIVE
            </h3>
            <p className="max-w-2xl text-lg text-center text-white ">
              Sea combat is the pinnacle of PvP in Scarlet sea: epic siege
              warfare at a massive scale, with teams of attackers and defenders
              fighting for control and victory. The outcome of each War
              determines which company controls contested territory or
              settlements. Those who control the towns control resources and
              confer benefits to their fellow faction and company members. If
              the company currently controlling a settlement successfully fends
              off the invaders, they retain control of the settlement. If the
              attackers are successful, however, they take over.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around h-screen bg-no-repeat bg-cover bg-register">
        <div className="flex flex-col">
          <h3>PRE-REGISTER</h3>
          {/* colocar formulario */}
        </div>
        <div className="flex flex-col">
          <h3>JOIN THE COMMUNITY</h3>
          {/* colocar incones */}
        </div>
      </div>
    </div>
  )
}
