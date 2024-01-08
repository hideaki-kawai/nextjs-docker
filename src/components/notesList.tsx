import { format } from 'date-fns';
import noteMock from '@/tests/mocks/noteMock.json';

type Note = {
  id: number;
  title: string;
  created_at: string;
};

const fetchNotes = async (): Promise<Note[]> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return noteMock;
};

export const NotesList = async () => {
  const notes = await fetchNotes();
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">
        Notes
      </p>
      <ul className="m-3">
        {notes.map(note => (
          <li key={note.id}>
            <p>{note.title}</p>
            <p>
              <strong className="mr-3">Created at:</strong>
              {note && format(new Date(note.created_at), 'yyyy-MM-dd HH:mm:ss')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
