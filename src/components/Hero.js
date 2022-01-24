


const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
         <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-5xl font-black mb-14">
             React Homes</h1>
       <p className = " shadow-xl p-6 px-10 bg-blue-500 rounded-full text-3xl hover:bg-blue-400 transition duration-300 ease-in-out flex items-center animate-bounce cursor-pointer">Shop Houses <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-6 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg></p>

        </div>
    )
}

export default Hero
