import Container from '@/components/container'
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
          <div>
            <a href='https://drive.google.com/file/d/1CUF7m4cn0YreF4btlykNV_I0jIeBuhNf/view?usp=sharing' className='border border-yellow-300 hover:border-yellow-500 shadow-sm rounded-sm font-bold px-5 py-2 text-gray-50'>
              Visit my cv, and have a look.
            </a>
          </div>
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
