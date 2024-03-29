export default function MainSection({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col items-center pt-36 p-4">{children}</main>
  )
}
