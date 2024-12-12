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

export default async function Home() {
  return (
    <div>
      <button onClick={()=>{ fetchChoice() }}>버튼</button>
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
