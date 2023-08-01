'use client';

import { OauthLoginButton } from '@/components/buttons';
import { Logo } from '@/components/logo';
import { SignIn, useSignIn } from '@clerk/nextjs';

const SignInPage = () => {
  const { isLoaded, setActive, signIn } = useSignIn();

  if (!isLoaded) {
    return null;
  }

  return (
    <div className='grid place-items-center h-[90vh] !text-white'>
      <div className='flex  gap-4 justify-between   shadow-lg bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg items-center p-8 w-full max-w-xl'>
        <div>
          <Logo size={150} />
        </div>
        <div className='flex flex-col flex-1 gap-4 pl-4'>
          <h2 className=' text-5xl font-bold tracking-tighter'>Sign in</h2>
          {/* <Logo size={150} /> */}
          <OauthLoginButton
            provider='github'
            onClick={() =>
              signIn.authenticateWithRedirect({
                strategy: 'oauth_github',
                redirectUrl: '/sso-callback',
                redirectUrlComplete: '/',
              })
            }
          />
          <OauthLoginButton
            provider='google'
            onClick={() =>
              signIn.authenticateWithRedirect({
                strategy: 'oauth_google',
                redirectUrl: '/sso-callback',
                redirectUrlComplete: '/',
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
