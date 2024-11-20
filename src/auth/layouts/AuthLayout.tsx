interface Props {
  children: React.ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-3xl bg-whitePalette p-6 shadow-md">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
