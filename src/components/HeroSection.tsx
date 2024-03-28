import Link from "next/link"


const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
    justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">

        <div className="p-4 w-full relative z-10 text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
                  bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Master the art of music
                </h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">           
                    Dive into our comprehensive music course and explore everything from theory to performance. 
                    With expert instructors and a supportive environment, unlock your musical potential and
                    unleash your creativity. Join us and elevate your understanding of music today!
                </p> 
                <Link href={"/courses"}>Explore courses</Link>
        </div>
    </div>
  )
}

export default HeroSection