import React from 'react'

const Service = () => {
   return (
      <section>
         <div className='bg-[#953670] text-white pb-10'>
            {/* service div start */}
            <div className='px-5'>

               {/* Service header start */}
               <div className='flex justify-between items-start'>
                  {/* logo start */}
                  <div className='w-28 font-[Algerian]'>

                     <div className='h-32 p-3 bg-[#720E43] mb-1 rounded-tr-[50px] flex flex-col justify-center items-center'>

                        <div className='border-2 border-white flex items-center justify-center flex-col px-2'>
                           <p className='font-bold text-xs'>Expert</p>

                           <div className='border-3 border-white h-5 w-5 my-1'>
                              <div className='w-full h-full bg-white'></div>
                           </div>

                           <p className='text-xs font-bold'>Service</p>
                        </div>

                        <div className='text-center text-[10px]'>Shine Your Life</div>

                     </div>

                     <div className='bg-white h-1 w-full'></div>

                  </div>
                  {/* logo end */}

                  {/* headline start */}
                  <div className='text-center'>
                     <h1 className='uppercase text-3xl font-bold'>Expert service</h1>
                     <p className='capitalize'>We serve you until your satisfaction</p>

                     {/* nav bar start */}
                     <nav className='mt-3'>
                        <ul className='flex justify-center items-center  text-black bg-slate-300 rounded-lg'>
                           <li className='rounded-lg h-full hover:bg-white py-1 px-3'><a href="@">Home</a></li>
                           <li className='rounded-lg h-full hover:bg-white py-1 px-3'><a href="@">About</a></li>
                           <li className='rounded-lg h-full hover:bg-white py-1 px-3'><a href="@">Service</a></li>
                           <li className='rounded-lg h-full hover:bg-white py-1 px-3'><a href="@">Product</a></li>
                           <li className='rounded-lg h-full hover:bg-white py-1 px-3'><a href="@">Man</a></li>
                           <li className='rounded-lg h-full hover:bg-white py-1 px-3'><a href="@">Purchase</a></li>
                        </ul>
                     </nav>
                     {/* nav bar end */}

                  </div>
                  {/* headline end */}

                  {/* search icon start */}
                  <div className='bg-[#720E43] rounded-b-full w-12 h-24 flex items-end justify-center text-4xl'>
                     <p className='px-2 py-1 mb-3'>🔍</p>
                  </div>
                  {/* search icon end */}
               </div>
               {/* Service header end */}


               {/* product div start */}
               <div>
                  <div className='uppercase text-center'>
                     <h1 className='text-2xl font-bold mt-5'>Product with price</h1>
                  </div>

                  {/* products start */}
                  <div className='flex justify-center items-center gap-5 mt-5'>
                     <div>
                        <div className='w-36 h-36 bg-white'></div>
                        <h3 className='text-lg font-bold'>Generator</h3>
                        <p className='text-[#e09504]'>Price: $ 0000</p>
                     </div>
                     <div>
                        <div className='w-36 h-36 bg-white'></div>
                        <h3 className='text-lg font-bold'>LED TV</h3>
                        <p className='text-[#e09504]'>Price: $ 0000</p>
                     </div>
                     <div>
                        <div className='w-36 h-36 bg-white'></div>
                        <h3 className='text-lg font-bold'>Power Generator</h3>
                        <p className='text-[#e09504]'>Price: $ 0000</p>
                     </div>
                     <div>
                        <div className='w-36 h-36 bg-white'></div>
                        <h3 className='text-lg font-bold'>Gas Oven</h3>
                        <p className='text-[#e09504]'>Price: $ 0000</p>
                     </div>
                  </div>
                  {/* products end */}

                  {/* contact details start */}
                  <div className='flex justify-center items-center gap-10 mt-5'>
                     <div>
                        <h1 className='font-bold text-xl uppercase mb-2'>Purchess Policy</h1>
                        <p className='w-[180px] text-[#e09504] text-xs'>It sgs hsd by the readable content of a page when looking at its layout. The point of</p>
                     </div>

                     <div>
                        <h1 className='font-bold text-xl uppercase mb-2'>Contact</h1>
                        <div className='text-[#e09504] text-xs'>
                           <p>00 999 8888</p>
                           <p>998 4756 557</p>
                           <a href='@'>wwww.DFGDH.COM</a>
                        </div>
                     </div>

                     <div>
                        <h1 className='font-bold text-xl uppercase mb-2'>Purchess Policy</h1>
                        <p className='w-[180px] text-[#e09504] text-xs'>It sgs hsd by the readable content of a page when looking at its layout. The point of</p>
                     </div>
                  </div>
                  {/* contact details end */}
               </div>
               {/* product div end */}
            </div>
            {/* service div end */}
         </div>

         <hr className='w-full h-2 bg-slate-400' />

         <div className='bg-[#824F7B] p-7 flex items-center justify-around text-white text-2xl font-bold'>
            <a className='bg-[#720E43] py-3 px-5' href="@">Accept</a>
            <a href="@">Payment</a>
            <a href="@">Denied</a>
         </div>
      </section>
   )
}

export default Service