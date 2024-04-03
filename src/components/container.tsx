import { ChildrenProps } from '@/lib/types'

export default function Container({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col text-slate-50 max-w-5xl mx-auto bg-slate-900 min-h-screen">
      {children}
    </div>
  )
}
