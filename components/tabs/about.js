import aboutJson from '@/json/aboutJson'
const AboutTabs = () => {
  return (
    <div className="flex md:max-w-2xl max-w-full container mx-auto flex-col text-start" >
        <h2 className='lg:text-2xl md:text-xl text-base text-white'>HELLO, <span className='text-[#FCC75B] font-bold'>{aboutJson.tagline}</span></h2>
        {aboutJson.about.map((item, index) => {
            return (
              <p key={index} className="pt-3 lg:text-xl md:text-base text-sm text-gray-50">{item.paragraph}</p>
            )
        })}
    </div>
  )
}

export default AboutTabs