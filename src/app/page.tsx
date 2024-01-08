import { NotesList } from '@/components/notesList';
import { TimerCounter } from '@/components/timerCounter';

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        Next.js Docker!!
        <NotesList />
        <TimerCounter />
      </div>
    </main>
  );
}
