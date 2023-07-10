import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const initialState = false;

const Header = () => {

    const [menu, setMenu] = useState(initialState);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 640 && menu) setMenu(false);
        };
        window.addEventListener('resize', handleResize);
        // Limpieza del evento al desmontar el componente
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [menu]);

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-5 z-10
          lg:top-6 lg:px-10">
      <img src="./assets/shared/logo.svg" alt="logo" className="w-8 lg:w-10" />
      {/* Burguer menu */}
      <button onClick={() => setMenu(true)} className="sm:hidden">
        <img src="./assets/shared/icon-hamburger.svg" alt="menu de hamburguesa" className="h-4" />
      </button>
      {/* Nav container */}
      <hr className="hidden lg:block absolute top-9 left-[12%] border border-white-opacity
          w-[30%] z-50" />
      <div className={`fixed top-0 ${menu ? 'right-0' : '-right-full'} h-screen w-2/3 
            backdrop-blur-3xl backdrop-brightness-125 z-20 transition-all duration-1000 
            sm:right-0 sm:h-auto lg:top-6 lg:w-3/5`}>
        <button onClick={() => setMenu(false)} className="absolute top-6 right-4 
            cursor-pointer sm:hidden">
            <img src="./assets/shared/icon-close.svg" alt="x de cierre de menu" />
        </button>
        {/* Link container */}
        <nav className="text-main-white font-barlow text-sm mt-[20vh] p-7 tracking-[.2em]
            sm:flex sm:items-center sm:m-0 sm:p-0 sm:px-[10%] sm:gap-x-3.5 
            lg:ml-[12%] lg:gap-x-[10%]">
            <NavLink className={({isActive}) => isActive ? "border-b-2": null}
                     to='/'
                     onClick={() => setMenu(false)}>
                <h2 className="py-6 hover:border-b-2 hover:border-white-opacity ">
                    <span className="mr-2 font-bold tracking-widest">00</span>
                HOME</h2>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "border-b-2": null}
                     to='/destination'
                     onClick={() => setMenu(false)}>
                <h2 className="py-6 hover:border-b-2 hover:border-white-opacity">
                    <span className="mr-2 font-bold tracking-widest">01</span>
                DESTINATION</h2>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "border-b-2": null}
                     to='/crew'
                     onClick={() => setMenu(false)}>
                <h2 className="py-6 hover:border-b-2 hover:border-white-opacity">
                    <span className="mr-2 font-bold tracking-widest">02</span>
                CREW</h2>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? "border-b-2": null}
                     to='/technology'
                     onClick={() => setMenu(false)}>
                <h2 className="py-6 hover:border-b-2 hover:border-white-opacity">
                    <span className="mr-2 font-bold tracking-widest">03</span>
                TECHNOLOGY</h2>
            </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header
