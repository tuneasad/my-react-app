// src/components/ui/StatsCard.jsx
export function StatsCard({ title, value, color }) {
  return (
    <div className={`p-4 rounded-lg border-l-4 ${color} bg-white shadow-md w-full max-w-[500px]`}>
      <h3 className="text-gray-500 text-xs font-bold uppercase">{title}</h3>
      <p className="text-l text-red-700 font-bold">{value}</p>
    </div>
  )
}