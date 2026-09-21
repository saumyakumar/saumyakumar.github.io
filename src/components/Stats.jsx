import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { value: 6, suffix: '+', label: 'Years experience' },
  { value: 86, suffix: '%', label: 'Bundle size cut' },
  { value: 2500, suffix: '+', label: 'Active instances' },
  { value: 80, suffix: '+', label: 'Clients impacted' },
]

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)

  return (
    <div className="stat" ref={ref}>
      <p className="stat-number">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  )
}

function Stats() {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <Stat key={stat.label} {...stat} />
      ))}
    </div>
  )
}

export default Stats
