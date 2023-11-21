const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto bg-[#111827]">
      <div className="mx-auto w-full h-full max-w-screen">{children}</div>
    </main>
  );
};

export default LandingLayout;
