import { redirect } from 'next/navigation';

export default function Home() {
  // Omdirigér direkte til dashboard-siden
  redirect('/dashboard');
}