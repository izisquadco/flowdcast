export function humanize(value: number): string {
  const parsedValue = Number(value)

  const h = Math.floor(parsedValue / 3600)
  const m = Math.floor((parsedValue % 3600) / 60)
  const s = Math.floor((parsedValue % 3600) % 60)

  const hours = h > 0 ? `${h}:` : ''
  const minutes = m > 0 ? `${m}:` : ''
  const seconds = s > 0 ? s : ''

  return hours + minutes + seconds
}
