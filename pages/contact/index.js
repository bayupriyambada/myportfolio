import Container from '@/components/container'
import techJson from '@/json/techJson'
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { SiHashnode } from 'react-icons/si'
function Contact() {
  return (
    <div>
      <Container title="Contact - Bpriyambadam">
        <div className="flex flex-col mt-10 text-white select-none">
          <div className='flex flex-col gap-2'>
            <p className='md:text-xl text-base text-justify mt-2'>Information about me, via Social Media :</p>
            <div className='flex flex-col gap-3'>
              <a href='https://www.instagram.com/bpriyambadam/' className='flex gap-1 items-center'>
                <AiOutlineInstagram className='text-3xl text-yellow-500' />
                <span>bpriyambadam</span>
              </a>
              <a href='https://id.linkedin.com/in/bayu-priyambada-769155213' className='flex gap-1 items-center'>
                <AiFillLinkedin className='text-3xl text-blue-500' />
                <span>bayupriyambada</span>
              </a>
              <a href='#' className='flex gap-1 items-center '>
                <AiOutlineMail className='text-3xl text-red-500' />
                <span>bayupm124@gmail.com / kampuspb.bayu@gmail.com</span>
              </a>
              <a href='https://hashnode.com/@bayucode' target="_blank" className='flex gap-1 items-center '>
                <SiHashnode className='text-3xl text-red-500' />
                <span>@bayucode</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Contact
