import Counter from '@/components/Counter';
import { unstable_noStore } from 'next/cache';
import { cookies } from 'next/headers';
import * as v from 'valibot';

// export const dynamic = 'force-dynamic';

const GetTimeSchema = v.object({
  datetime: v.string(),
});

const getTime = async () => {
  // unstable_noStore();
  console.log('cookies', cookies().getAll());
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/Ljubljana'
  );
  const json = await res.json();
  return v.parse(GetTimeSchema, json);
};

const Home = async () => {
  const time = await getTime();
  return (
    <>
      <p>Hello world!</p>
      <Counter />
      <div>Time: {time.datetime}</div>
    </>
  );
};

export default Home;
