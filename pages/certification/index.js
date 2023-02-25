import Container from '@/components/container'
import certificationJson from '@/json/certificationJson'

function Certification() {
  const dataCertification = [
    {
      title: "Android Studio",
      bootcamp: "Rumah Coding",
      year: 2019
    },
    {
      title: "Android Studio",
      bootcamp: "Rumah Coding",
      year: 2019
    },
    {
      title: "Android Studio",
      bootcamp: "Rumah Coding",
      year: 2019
    },
  ]
  return (
    <div>
      <Container title="Certification - Bpriyambadam">
        <div className="flex flex-col-reverse divide-y divide-zinc-600 divide-y-reverse mt-10 lg:p-0 p-5 text-white gap-2">
          {certificationJson.map((item, index) => {
            console.log(certificationJson)
            return (
              <div className='flex justify-between items-start' key={index}>
                <a href={item.information.url} passHref className='flex flex-col gap-2'>
                  <h3 className='text-xl'>{item.training}</h3>
                  <span className='text-xs'>{item.information.year}</span>
                </a>
                <div className='text-base'>{item.information.nameBootcamp}</div>
              </div>
            )

          })}
        </div>
      </Container>
    </div>
  )
}

export default Certification
