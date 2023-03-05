import certificationJson from '@/json/certificationJson'
const CertificationTabs = () => {
  return (
    <div  className="flex md:max-w-2xl max-w-full container mx-auto flex-col-reverse md:px-0 px-2">
        {certificationJson.map((item, index) => {
            return (
                <a href={item.information.url} key={index} className="flex w-full justify-between my-2">
                    <div>
                        <h3 className="lg:text-xl md:text-base text-sm text-gray-50">
                            {item.training}
                        </h3>
                        <p className="lg:text-sm text-xs text-gray-50">{item.information.year}</p>
                    </div>
                    <div>
                        <h3 className="lg:text-base text-sm  text-gray-50">
                            {item.information.nameBootcamp}
                        </h3>
                    </div>
                </a>
            )
        })}
    </div>
  )
}

export default CertificationTabs