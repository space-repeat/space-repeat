import { GithubStar } from '@/components/buttons';
import { Logo } from '@/components/logo';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='grid place-items-center h-[80vh]'>
      <div className='flex flex-col items-center gap-8'>
        <Logo size={150} />
        <h1 className='text-5xl text-center font-bold tracking-tighter'>
          Welcome to space.repeat
        </h1>
        <GithubStar />
      </div>
    </div>
  );
};

export default Home;
