import Container from '@/components/container'
import certificationJson from '@/json/certificationJson'

function Certification() {
  return (
    <div>
      <Container title="Certification - Bpriyambadam">
        <div className="flex flex-col-reverse divide-y divide-zinc-600 divide-y-reverse mt-10 text-white gap-2">
          {certificationJson.map((item, index) => {
            return (
              <div className='flex justify-between items-start' key={index}>
                <a href={item.information.url} className='flex flex-col gap-2'>
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
