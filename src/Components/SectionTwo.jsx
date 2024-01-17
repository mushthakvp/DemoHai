import React from "react";
// import './SectionTwo.css'
import { FaBeer } from "react-icons/fa";

function SectionTwo() {

   


  return(
   <>
         <div className="text-center">
         <h1 className=" text-4xl">HOW IT WORKS.</h1>
         <p className="text-center">Earn Oner Points and redeem them when making purchases, level up your member <br/> status to get exclusive perks, and benefit from referring friends.</p>   
         </div>

         <div className="flex justify-center">
         <div className="flex justify-center p-5 flex-wrap">
  <div className="w-full  md:w-1/2 lg:w-1/4 p-2">
    <div className="rounded-full bg-blue-500 p-4 text-white">
     <div className="p-4 flex justify-center ">
     <FaBeer/>
     </div>
    </div>
    <div className=" text-center">
    <h1>Step 1</h1>
     <h3>Create an Account</h3>
    </div>
  </div>


  {/* Second Card */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-2">
  <div className="rounded-full bg-blue-500 p-4 text-white">
     <div className="p-4 flex justify-center ">
     <FaBeer/>
     </div>
    </div>

    <div className=" text-center">
    <h1>Step 1</h1>
     <h3>Create an Account</h3>
    </div>
  </div>

  {/* Third Card */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-2">
  <div className="rounded-full bg-blue-500 p-4 text-white">
     <div className="p-4 flex justify-center ">
     <FaBeer/>
     </div>
    </div>

    <div className=" text-center">
    <h1>Step 1</h1>
     <h3>Create an Account</h3>
    </div>


  </div>

  {/* Fourth Card */}
  <div className="w-full md:w-1/2 lg:w-1/4 p-2">
  <div className="rounded-full bg-blue-500 p-4 text-white">
     <div className="p-4 flex justify-center ">
     <FaBeer/>
     </div>
    </div>

    <div className=" text-center">
    <h1>Step 1</h1>
     <h3>Create an Account</h3>
    </div>
  </div>
</div>

</div>

<div className=" flex">
        <div className="bg-blue-500">
          <button>Join Now</button>
        </div>
       </div>
  </>
  )
}

export default SectionTwo;
