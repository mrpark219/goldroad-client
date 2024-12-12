function ButtonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-[54px] desktop:w-[432px] w-[calc(100%-48px)]">{children}</div>
  );
}

export default ButtonLayout;
