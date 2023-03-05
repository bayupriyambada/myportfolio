import projectsJson from '@/json/projectsJson'
const ProjectsTabs = () => {
  return (
    <div  className="flex md:max-w-2xl max-w-full container mx-auto">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
             {projectsJson.map((item, index) => {
                return (
                    <div key={index} className='bg-black shadow rounded-sm flex flex-col overflow-hidden'>
                        <a href={item.url}>
                            <img src={item.imageUrl.name}
                            alt={item.imageUrl.alt} className='w-full md:h-44 h-35' />
                        </a>
                        <div className='flex flex-col justify-between'>
                            <div className='p-2 text-white'>
                                <h2 className='text-xl font-bold'>{item.projects}</h2>
                                <p className='mt-2 text-base font-thin'>
                                    {item.paragraph}
                                </p>
                            </div>
                            <div className='flex gap-1 items-center p-2 mt-1'>
                                {item.technology.map((p, i) => {
                                    return (
                                        <span key={i} className='bg-[#FCC75B] px-2 py-0.5 rounded-sm text-sm font-semibold text-white'>{p}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
             })}
        </div>
    </div>
  )
}

export default ProjectsTabs