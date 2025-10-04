import { onMounted } from 'vue'

export function useLeagueRepublic(leagueCode: string) {
  onMounted(() => {
    // Load LeagueRepublic script (only once)
    const existingScript = document.querySelector('script[src="https://api.leaguerepublic.com/client/api/cs1.js"]')
    if (!existingScript) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://api.leaguerepublic.com/client/api/cs1.js'
      document.head.appendChild(script)
    }

    // Set the league code
    ;(window as unknown as { lrcode: string }).lrcode = leagueCode
  })
}
