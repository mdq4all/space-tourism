import { useEffect, useState } from 'react';
import data from '../API/data.json'

const initialState = 0;

const Technology = () => {

  const [index, setIndex] = useState(initialState);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleOnChange = (e) => {setIndex(parseInt(e.target.value))}

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  let imageUrl;
  windowWidth < 1024 ? imageUrl = data.technology[index].images.landscape 
  : imageUrl = data.technology[index].images.portrait; 

  return (
    <div className="fixed h-screen w-full bg-cover bg-center
          bg-technology-xs sm:bg-technology-sm lg:bg-technology-md 
          lg:flex lg:flex-row-reverse lg:items-center lg:gap-x-[10%]">
      <div className='mt-[20%] mb-[10%] sm:mb-[5%] lg:mb-0 lg:mt-[5%] 
           animate-[fadeEntrance_1s_ease-in_forwards]'>
        <img src={imageUrl} 
            alt={data.technology[index].name}
            className='sm:m-auto lg:w-[40vw]' />
      </div>
      <div className='text-center text-main-white 
          lg:flex lg:items-end lg:gap-x-[8%] lg:mt-[5%] lg:ml-[10%] 
          animate-[fadeEntrance_1s_ease-in_forwards]'>
        <form onChange={handleOnChange}
              className='mb-10 flex items-center justify-center	
                  lg:flex-col lg:gap-y-8 lg:m-0'>
          {data.technology.map((element, i) => (
            <label 
              key={i}
              className={`text-lg border-[1px] border-white-opacity w-9 h-9 
                  flex items-center justify-center rounded-full cursor-pointer font-bellefair mr-4
                  hover:border-main-white ${i === index ? 'bg-main-white text-[#000]' : ''}
                  lg:w-16 lg:h-16 lg:text-2xl`}>
                <span>{i+1}</span>
                <input 
                    type="radio" 
                    name="radio" 
                    value={i} 
                    className="hidden" 
                    />
            </label>
          ))}
        </form>
        <div className='lg:text-left tracking-wider'>
          <h2 className='uppercase text-3xl font-bellefair mb-6 lg:text-[54px]
             lg:max-w-full whitespace-nowrap'>
            {data.technology[index].name}</h2>
          <p className='font-barlow max-w-[340px] m-auto opacity-70 
              sm:max-w-[400px] lg:m-0 lg:text-xl lg:max-w-[480px]'>
              {data.technology[index].description}</p>
        </div>
      </div>
    </div>
  )
}

export default Technology
