import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Icon } from '@/components/icons';

export default async function LoginPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (session) {
    redirect('/app');
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-4/5 mx-auto max-w-2xl flex flex-col items-center  rounded-lg py-5 gap-5'>
        <h2 className='font-light text-3xl md:text-5xl tracking-tighter'>
          Sign In
        </h2>

        <button className='flex items-center gap-2.5 border px-5 py-2.5'>
          <Icon name='google' />
          <p>Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}
