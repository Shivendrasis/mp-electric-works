import Counter from "./Counter";

export type Stat = { value: number; suffix?: string; label: string };

/** Reusable stat strip with animated counters. */
export default function StatStrip({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="wrap stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="num">
            <Counter value={s.value} />
            {s.suffix && <span className="o">{s.suffix}</span>}
          </div>
          <div className="lbl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
