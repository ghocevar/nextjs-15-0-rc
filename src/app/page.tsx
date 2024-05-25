import Counter from '@/components/Counter';
import * as v from 'valibot';

// export const dynamic = 'force-dynamic';

const GetTimeSchema = v.object({
  datetime: v.string(),
});

const getTime = async () => {
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
