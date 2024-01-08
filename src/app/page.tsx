import { NotesList } from '@/components/notesList';

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        Next.js Docker!!
        <NotesList />
      </div>
    </main>
  );
}
