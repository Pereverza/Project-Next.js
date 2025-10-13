import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from './components/megic-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
