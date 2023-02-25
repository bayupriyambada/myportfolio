import Header from './header';
import Footer from './footer';
import Head from 'next/head';

function Container({ children, title }) {
  return (
    <div className='flex justify-center container mx-auto max-w-2xl my-4'>
      <div className='flex flex-col my-10'>
          <Header />
          <Head>
              <title>{title}</title>
           </Head>
           {children}
          <Footer />
      </div>         
      </div>
   );
}

export default Container;