import { onCLS, onFID, onLCP, onFCP, onTTFB } from "web-vitals"

type SendMetricFn = (metric: {
  name: string
  value: number
  id: string
  delta: number
}) => void

export function reportWebVitals(sendMetric: SendMetricFn) {
  onCLS((metric) => sendMetric(metric))
  onFID((metric) => sendMetric(metric))
  onLCP((metric) => sendMetric(metric))
  onFCP((metric) => sendMetric(metric))
  onTTFB((metric) => sendMetric(metric))
}

// Example usage with console logging (for development)
export function logWebVitals({
  name,
  delta,
  value,
  id,
}: {
  name: string
  delta: number
  value: number
  id: string
}) {
  // This function logs web vitals to the console
  // You can replace this with your own analytics solution
  console.log(`Web Vital: ${name}`, {
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    metric_id: id,
    metric_value: value,
  })
}
