import { NotesList } from '@/components/notesList';
import { RefreshBtn } from '@/components/refreshBtn';
import { Spinner } from '@/components/spinner';
import { TimerCounter } from '@/components/timerCounter';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn /> {/* SCだけ再レンダリングできる */}
      </div>
    </main>
  );
}
