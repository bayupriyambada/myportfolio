import Container from '@/components/container'
import techJson from '@/json/techJson'
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { SiHashnode } from 'react-icons/si'
function ContatTabs() {
  return (
    <div className='flex md:max-w-2xl max-w-full container mx-auto md:px-0 px-1 flex-col text-start'>
          <div className='flex flex-col gap-2 text-gray-50'>
            <div className='flex flex-col gap-3'>
              <a href='https://www.instagram.com/bpriyambadam/' className='flex gap-4 items-center'>
                <AiOutlineInstagram className='text-3xl text-yellow-500' />
                <span>bpriyambadam</span>
              </a>
              <a href='https://id.linkedin.com/in/bayu-priyambada-769155213' className='flex gap-4 items-center'>
                <AiFillLinkedin className='text-3xl text-blue-500' />
                <span>bayupriyambada</span>
              </a>
              <a href='#' className='flex gap-4 items-center '>
                <AiOutlineMail className='text-3xl text-red-500' />
                <span>bayupm124@gmail.com / kampuspb.bayu@gmail.com</span>
              </a>
              <a href='https://hashnode.com/@bayucode' target="_blank" className='flex gap-4 items-center '>
                <SiHashnode className='text-3xl text-red-500' />
                <span>@bayucode</span>
              </a>
            </div>
          </div>
    </div>
  )
}

export default ContatTabs
