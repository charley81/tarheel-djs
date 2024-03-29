export default function TitleComponent({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}
