interface ChoiceLayoutProps {
  title1: string;
  children: React.ReactNode;
  title2?: string;
}

function ChoiceLayout({ title1, title2, children }: ChoiceLayoutProps) {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex flex-col justify-center items-start gap-1 font-bold text-[24px]">
        <div className="flex flex-col justify-center items-center gap-1">
          <h1>{title1}</h1>
          {title2 && <h1>{title2}</h1>}
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-4">{children}</div>
    </section>
  );
}

export default ChoiceLayout;
