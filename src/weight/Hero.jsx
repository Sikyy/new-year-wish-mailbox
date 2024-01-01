import React from 'react'

function Hero() {
  return (
    <div className='grid justify-items-start gap-8 pb-28 relative'>
        <p className='text-4xl md:text-6xl font-black text-center leading-normal md:leading-normal'>
        新年愿望机
        </p>
        <p className='text-2xl md:text-4xl font-black text-center leading-normal md:leading-normal'>
        写下你的新年愿望，他会在来年的12月31日发往你的邮箱
        </p>
        <form className='w-60'>
            <div className="mb-6 group">
                <label className='block text-sm font-medium text-slate-700'>Name</label>
                <input type="text" className="px-4 w-full rounded-full border-2 border-slate-300 focus:outline-none h-10 group-hover:border-black group-focus:border-black"/>
            </div>
            <div className="mb-6 group">
                <label className='block text-sm font-medium text-slate-700'>Email</label>
                <input type="text" className="px-4 w-full rounded-full border-2 border-slate-300 focus:outline-none h-10 group-hover:border-black group-focus:border-black"/>
            </div>
            <div className="mb-6 group">
                <label className='block text-sm font-medium text-slate-700'>Wish</label>
                <input type="text" className="px-4 w-full rounded-full border-2 border-slate-300 focus:outline-none h-10 group-hover:border-black group-focus:border-black"/>
            </div>
        </form>



    </div>
    
  )
}

export default Hero