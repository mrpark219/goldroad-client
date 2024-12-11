const fetchChoice = async () => {
  const res = await fetch('http://172.30.1.34:8080/api/test');
  console.log(res);
  const data = await res.text();
  return data;
};

export default async function Home() {
  const choice = await fetchChoice();
  console.log(choice);
  return (
    <div>
      {choice}
      {/* <div className="flex flex-col justify-center items-start gap-4">
        <ProgressBar progress="50" />
        <ChoiceLayout title1="오늘 뭐 먹지?" title2="오늘 뭐 먹지?">
          <ChoiceBisection />
        </ChoiceLayout>
        <ChoiceLayout title1="오늘 뭐 먹지?" title2="오늘 뭐 먹지?">
          <ChoiceSection />
        </ChoiceLayout>
      </div> */}
    </div>
  );
}
