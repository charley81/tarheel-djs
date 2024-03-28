export default function Container({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col text-slate-50 max-w-5xl mx-auto bg-slate-900 min-h-screen">
      {children}
    </div>
  )
}
