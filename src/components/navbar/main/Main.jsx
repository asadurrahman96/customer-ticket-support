import React from 'react';
import vectorImg from '../../.././assets/vector1.png'

const Main = () => {
    return (
    <div className="min-h-screen bg-base-200 py-12 px-6 md:px-10 container mx-auto">
      <div className="max-w-6xl mx-auto">

        
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center items-stretch">

         <div 
            className="card flex-1 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white shadow-xl overflow-hidden min-h-[280px] md:min-h-[320px]"
            // style={{
            //   backgroundImage: `url(${vectorImg})`,
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
             
            // }}
          >

            <div className="card-body relative z-10 flex flex-col justify-center items-center text-center py-12 md:py-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                In Progress
              </h2>
              <p className="text-6xl md:text-7xl font-extrabold">
                0
              </p>
            </div>
          </div>

         
          <div className="card flex-1 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 text-white shadow-xl overflow-hidden min-h-[280px] md:min-h-[320px]">
           

            <div className="card-body relative z-10 flex flex-col justify-center items-center text-center py-12 md:py-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Resolved
              </h2>
              <p className="text-6xl md:text-7xl font-extrabold">
                0
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Main;