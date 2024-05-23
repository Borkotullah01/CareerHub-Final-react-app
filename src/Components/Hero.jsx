import HeroImg from '../assets/images/user.png'
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-[#7e8ffe15] to-[#9873ff15]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold leading-tight">One Step <br></br> Closer To Your <br></br> <span className="text-[#9873FF]">Dream Job</span></h1>
              <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
            </div>
          </div>
        </div>
    );
};

export default Hero;