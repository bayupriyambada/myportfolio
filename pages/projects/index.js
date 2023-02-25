import Container from '@/components/container'
import projectsJson from '@/json/projectsJson'

function Projects() {
  return (
    <div>
      <Container title="Projects - Bpriyambadam">
        <div className='mt-10'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {projectsJson.map((item, index) => {
              return (
                <div key={index} className="bg-zinc-900 shadow rounded-sm overflow-hidden">
                  <a href={item.url}>
                    <img src={item.imageUrl} className="w-full lg:h-44 h-40" />
                  </a>
                  <div className="flex flex-col gap-1 text-gray-100 p-3">
                    <h4 className='text-xl'>{item.projects}</h4>
                    <p className='text-base'>
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
