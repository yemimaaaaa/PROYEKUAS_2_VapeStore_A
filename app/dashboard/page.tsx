import { lusitana , montserrat} from '@/app/ui/fonts';

export default async function Page() {
  return (
    <main>
      <p className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </p>
    </main>
  );
}