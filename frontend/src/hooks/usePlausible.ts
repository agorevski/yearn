import { init, track } from '@plausible-analytics/tracker'

init({
  domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || 'yearn.azurewebsites.net',
  endpoint: '/proxy/plausible/api/event',
  captureOnLocalhost: import.meta.env.VITE_PLAUSIBLE_TRACK_LOCALHOST === 'true',
  autoCapturePageviews: true
})

export function usePlausible() {
  return track
}
