import { SSOCallback } from '@/components/sso-callback';
import { type HandleOAuthCallbackParams } from '@clerk/types';

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams;
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return <SSOCallback searchParams={searchParams} />;
}
