import heroBanner from "../../assets/heroBanner.jpg";



export const Banner = () => {
      return (
            <>
                  <div className="w-full h-[100vh] absolute inset-0 ">
                        <img
                              src={heroBanner}
                              className="w-full object-cover h-full"
                        />
                 
                  </div>
                         <div className="text-3xl font-bold text-white">
                              Personalized Online
                        </div>
                        <div className="text-3xl font-bold text-white">
                              Tutoring Anytime
                        </div>
                        <div>Anywhere</div>
                        <div>
                              Connect with expert tutors for math, science,
                              languages, and more — tailored to your goals.
                        </div>
                        <button className="text-[#305CDE]">Start Free Trial </button>
            </>
      );
};
