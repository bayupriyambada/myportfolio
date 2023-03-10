import techJson from '@/json/techJson'
const TechnologyTabs = () => {
  return (
    <div  className="flex md:max-w-2xl max-w-full container mx-auto">
       <div className="flex flex-col w-full text-white">
            <div className='flex flex-col gap-2'>
                <p className='md:text-xl text-base text-justify mt-2'>Now I use technology for education :</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                    {techJson.type.education.map((items, index) => {
                        return (
                            <button key={index} className='px-5 border border-yellow-300 hover:border-yellow-500 py-0.5 rounded-md'>
                                <span className='text-base'>
                                    {items}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <p className='md:text-xl text-base text-justify mt-2'>Now I use technology for Personal :</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
                    {techJson.type.personal.map((items, index) => {
                        return (
                            <button key={index} className='px-5 border border-yellow-300 hover:border-yellow-500 py-0.5 rounded-md'>
                                <span className='text-base'>
                                    {items}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechnologyTabs