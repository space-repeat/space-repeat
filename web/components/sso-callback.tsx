'use client';

import { SSOCallbackPageProps } from '@/app/(auth)/sso-callback/page';
import { useClerk } from '@clerk/nextjs';
import { useEffect } from 'react';

export const SSOCallback = ({ searchParams }: SSOCallbackPageProps) => {
  const { handleRedirectCallback } = useClerk();

  useEffect(() => {
    void handleRedirectCallback(searchParams);
  }, [handleRedirectCallback, searchParams]);

  return (
    <div
      role='status'
      aria-label='Loading'
      aria-describedby='loading-description'
      className='flex items-center justify-center'
    >
      <p>Loading......</p>
    </div>
  );
};
