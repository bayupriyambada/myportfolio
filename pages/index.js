import Container from '@/components/container'

function Home() {
  return (
    <div>
      <Container seo="Link Bio">
        <div className="flex flex-col mt-10 lg:p-0 p-5 text-white gap-2">
          <h4 className="text-2xl">Hello, <span className="underline text-yellow-500">Bayu Priyambada</span> here!</h4>
          <p className="md:text-xl text-base text-justify whitespace-pre-line mt-2">
            I am I Gde Bayu Priyambada Marayasa, currently I am a teacher at the Informatics Engineering Vocational School.
          </p>
          <p className="md:text-xl text-base text-justify whitespace-pre-line mt-2">
            By fashion, I am currently an informatics engineering teacher in Bogor. I am very happy to share the knowledge I have learned for dedication in the world of education.
          </p>
          <p className="md:text-xl text-base text-justify whitespace-pre-line mt-2">
            Likewise, I am happy with seeking knowledge that I will achieve starting from searching through Google, training and seminars.
          </p>
          <p className="md:text-xl text-base text-justify whitespace-pre-line mt-2">
            I like to make impromptu applications to continue to hone my knowledge to be able to maintain the times. And I will continue to learn about the religion that I live for the hereafter.
          </p>
          <p className="md:text-xl text-base text-justify whitespace-pre-line mt-2">
            The purpose of life is not only in this world, but in the hereafter eternal life.
          </p>
          <hr className='w-24' />
          <p className="md:text-xl text-base text-justify whitespace-pre-line mt-2">
            You can visit the <span className="underline text-yellow-500"><a href='#'> Learn Through Ebook </a></span> Page to learn using the free ebook.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Home
