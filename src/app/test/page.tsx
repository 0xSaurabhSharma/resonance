import { prisma } from "@/lib/db";

/*
[
  {
    id: '1',
    orgId: null,
    name: 'raju',
    description: null,
    category: 'GENERAL',
    language: 'en-US',
    variant: 'SYSTEM',
    r2ObjectKey: null,
    createdAt: 2026-05-03T08:59:52.581Z,
    updatedAt: 1970-01-01T00:00:00.000Z
  },...
]
*/

const TestPage = async () => {
  const voices = await prisma.voice.findMany();
  console.log(voices);
  return (
    <>
      <div className="p-8">
        <h1 className="font-bold">Voices: {voices.length}</h1>
        <ul>
          {voices.map((v) => (
            <li key={v.id}>
              {v.name} - {v.variant}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TestPage;
