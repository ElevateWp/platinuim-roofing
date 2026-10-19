import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('roof-cleaning');

export default function Page() {
  return <ServiceLandingPage slug="roof-cleaning" />;
}
