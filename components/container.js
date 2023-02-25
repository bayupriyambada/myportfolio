import Header from './header';
import Footer from './footer';
import Head from 'next/head';

function Container({ children, title }) {
  return (
    <div className='flex justify-center container mx-auto max-w-2xl '>
      <div className='flex flex-col mt-10 min-h-screen justify-between'>
        <div>
          <Header />
          <Head>
            <title>{title}</title>
           </Head>
           {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>         
      </div>
   );
}

export default Container;