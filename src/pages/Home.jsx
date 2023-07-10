import ExploreButton from "../components/ExploreButton"
import MainBodyHome from "../components/MainBodyHome"

const Home = () => {
  return (
    <div className="relative min-h-screen h-screen w-full bg-cover bg-center 
        bg-home-xs sm:bg-home-sm lg:bg-home-md">
      <MainBodyHome />
      <ExploreButton />
    </div>
  )
}

export default Home
