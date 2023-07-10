import { NavLink } from "react-router-dom"

const ExploreButton = () => {
  return (

    <NavLink className={({isActive}) => isActive ? "border-b-2": null}
                     to='/destination'>
      <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 
              w-44 h-44 rounded-full bg-main-white flex justify-center items-center 
              hover:outline hover:outline-30 hover:outline-white-opacity hover:cursor-pointer
              lg:left-[80%] lg:bottom-[20%] lg:w-52 lg:h-52 lg:hover:outline-40 
              animate-[fadeEntrance_1s_ease-in_forwards]">
        <p className="font-bellefair text-xl text-black tracking-widest">EXPLORE</p>
      </div>
    </NavLink>

  )
}

export default ExploreButton
