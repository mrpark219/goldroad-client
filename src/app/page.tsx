import { crawlWebsite } from '../../lib/crwal';

const fetchChoice = async () => {
  try {
    const res = await fetch('/api/test');
    console.log(res);
    const data = await res.text();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const a = crawlWebsite('https://www.newsjeju.net/');
console.log(a, 'ho');

export default async function Home() {
  const choice = await fetchChoice();
  console.log(choice);
  return (
    <div className="h-full">
      {choice}
      this page is home
    </div>
  );
}
