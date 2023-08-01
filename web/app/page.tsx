import { GithubStar } from '@/components/buttons';
import { Logo } from '@/components/logo';
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  UserButton,
  auth,
} from '@clerk/nextjs';

const Home = () => {
  return (
    <div className='grid place-items-center h-[80vh]'>
      <div className='flex flex-col items-center gap-8'>
        <Logo size={150} />
        <h1 className='text-5xl text-center font-bold tracking-tighter text-zinc-50'>
          Welcome to space.repeat
        </h1>
        <GithubStar />

        <UserButton afterSignOutUrl='/sign-in' />
        <SignOutButton />
      </div>
    </div>
  );
};

export default Home;
