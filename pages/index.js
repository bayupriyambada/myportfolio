import Container from '@/components/container'
import techJson from '@/json/techJson'
function Home() {
  return (
    <div>
      <Container title="Home - Bpriyambadam">
        <div className="flex flex-col mt-10 lg:p-0 p-5 text-white gap-2 select-none">
          <h4 className="text-2xl">Hello, <span className="my-name text-yellow-300">Bayu Priyambada</span> here!</h4>
          <p className="md:text-xl text-base text-justify mt-2 indent-8">
            I am I Gde Bayu Priyambada Marayasa, currently I am a teacher at the Informatics Engineering Vocational School.
          </p>
          <p className="md:text-xl text-base text-justify mt-2">
            By fashion, I am currently an informatics engineering teacher in Bogor. I am very happy to share the knowledge I have learned for dedication in the world of education.
          </p>
          <p className="md:text-xl text-base text-justify mt-2">
            Likewise, I am happy with seeking knowledge that I will achieve starting from searching through Google, training and seminars.
          </p>
          <p className="md:text-xl text-base text-justify mt-2">
            I like to make impromptu applications to continue to hone my knowledge to be able to maintain the times. And I will continue to learn about the religion that I live for the hereafter.
          </p>
          <div className='flex flex-col gap-2'>
            <p className='md:text-xl text-base text-justify mt-2'>Now I use technology for education :</p>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2'>
              {techJson.type.education.map((items, index) => {
                return (
                  <button key={index} className='border border-yellow-300 hover:border-yellow-500 py-0.5 rounded-md'>
                    <span>
                      {items}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          <p>
            You can review my CV via MY CV LINK
          </p>
          <p className="md:text-xl text-base text-justify mt-2">
            The purpose of life is not only in this world, but in the hereafter eternal life.
          </p>
          <hr className='w-24' />
          <p className="md:text-xl text-base text-justify mt-2">
            You can visit the <span className="underline text-yellow-500"><a href='#'> Learn Through Ebook </a></span> Page to learn using the free ebook.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Home
