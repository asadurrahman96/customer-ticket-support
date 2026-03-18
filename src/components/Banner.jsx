import vectorLeft from '../assets/vector1.png';
import vectorRight from '../assets/vector2.png';

const Banner = ({ data, inProgressCount }) => {
  const resolvedCount = data.filter((t) => t.status == "Resolved").length;

  return (
    <div className="bg-base-200 py-12 px-6 md:px-10">
      <div className="max-w-6xl container mx-auto">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center">
          <div className="card relative flex-1 min-h-[320px] md:min-h-[380px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700">
            <img src={vectorLeft} alt="" className="absolute left-0 top-0 w-3/4 h-full object-cover opacity-30 pointer-events-none" />
            <img src={vectorRight} alt="" className="absolute right-0 top-0 w-3/4 h-full object-cover opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="card-body relative z-10 flex flex-col justify-center items-center text-center py-10 md:py-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 drop-shadow-lg">
                In-Progress
              </h2>
              <p className="text-7xl md:text-8xl font-extrabold drop-shadow-2xl">
                {inProgressCount}
              </p>
            </div>
          </div>

          <div className="card relative flex-1 min-h-[320px] md:min-h-[380px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700">
            <img src={vectorLeft} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none mix-blend-screen" style={{ clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0 100%)' }} />
            <img src={vectorRight} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none mix-blend-screen" style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 40% 100%)' }} />
            <div className="absolute inset-0 bg-black/15" />
            <div className="card-body relative z-10 flex flex-col justify-center items-center text-center py-10 md:py-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 drop-shadow-lg">
                Resolved
              </h2>
              <p className="text-7xl md:text-8xl font-extrabold drop-shadow-2xl">
                {resolvedCount}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
