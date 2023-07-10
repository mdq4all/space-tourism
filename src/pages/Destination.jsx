import { useState } from 'react';
import data from '../API/data.json'

const initialState = 0

const Destination = () => {
  const [index, setIndex] = useState(initialState);

const handleOnChange = (e) => setIndex(parseInt(e.target.value));

  return (
    <div className="fixed min-h-screen h-screen w-full bg-cover bg-center 
        bg-destination-xs sm:bg-destination-sm lg:bg-destination-md
        lg:flex lg:items-center lg:justify-center">
          <img src={data.destinations[index].images.png} 
               alt={`${data.destinations[index].name} image`} 
               className='w-36 m-auto mt-[30%] sm:mt-[20%] sm:w-48 
                  lg:w-96 lg:ml-[15%] lg:mt-[25%] animate-[fadeEntrance_1s_ease-in_forwards]' />
          <div className='m-auto mt-[8%] lg:mt-[25%] animate-[fadeEntrance_1s_ease-in_forwards]'>
            <form className="flex items-center justify-center gap-x-8 lg:justify-start lg:gap-x-16" 
                  onChange={handleOnChange}>
              {data.destinations.map((element, i) => (
                <label key={element.name} 
                       htmlFor={element.name}
                       className={`${i === index ? 
                        "border-b-2 border-main-white hover:border-main-white" : ''}
                         hover:border-b-2 hover:border-white-opacity pb-4 
                         transition-all duration-500 cursor-pointer`}>
                   <input type="radio" 
                          className="hidden" 
                          name="radio" 
                          value={i} 
                          id={element.name}
                           />
                   <img src={element.images.webp} alt={element.name}
                    className='w-8 lg:w-12' />
               </label>
              )
              )}
            </form>
            <h2 className='text-center font-bellefair text-main-white uppercase 
                text-6xl mt-[5%] lg:text-9xl lg:text-left'>
              {data.destinations[index].name}
            </h2>
            <p className='font-barlow text-main-white opacity-70 text-center mx-auto
                py-4 px-10 mb-4 tracking-wide sm:max-w-xl lg:text-left lg:px-0 lg:max-w-lg'>
              {data.destinations[index].description}
            </p>
            <div className='uppercase text-center text-main-white text-3xl font-bellefair mx-auto
                  border-t-[1px] border-white-opacity pt-8 max-w-[280px] 
                  sm:max-w-xl sm:flex sm:justify-evenly lg:justify-start lg:gap-x-16'>
              <article className='py-4'>{data.destinations[index].distance}</article>
              <article className='py-4'>{data.destinations[index].travel}</article>
            </div>
          </div>
    </div>
  )
}

export default Destination
