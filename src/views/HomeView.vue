<template>
  <div class="page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-text">
            <h1 class="hero-title">Northern Counties Volleyball Association</h1>
            <p class="hero-subtitle">Promoting development of volleyball in Tyneside and Northumbria</p>
            <div class="hero-boxes">
              <div class="hero-box"><span>8</span> member clubs</div>
              <div class="divider"></div>
              <div class="hero-box"><span>26</span> teams</div>
              <div class="divider"></div>
              <div class="hero-box"><span>3</span> leagues</div>
            </div>
          </div>
          <div class="hero-actions">
            <RouterLink to="/leagues" class="btn btn-primary">View on Leagues</RouterLink>
            <RouterLink to="/clubs" class="btn btn-secondary">Find Clubs</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="page-content container">

      <h2>Current season</h2>
			<div class="home-tables">

        <div class="home-table">
          <h3 class="division-name"><a href="https://www.ncva.org.uk/league/division-one/">Division One</a></h3>

          <div class="results-table" id="lrep660431464">
            <p class="temp">Data loading from LeagueRepublic...
              <br>
              <a href="https://ncva.leaguerepublic.com/fg/1_916473096.html" target="_blank">View on LeagueRepublic</a>
            </p>
          </div>
          <div class="buttons">
            <a href="https://www.ncva.org.uk/league/division-one/#table">Standings</a>
            <a href="https://www.ncva.org.uk/league/division-one/#fixtures">Fixtures</a>
            <a href="https://www.ncva.org.uk/league/division-one/#results">Results</a>
          </div>
        </div>

        <div class="home-table">
          <h3 class="division-name"><a href="https://www.ncva.org.uk/league/division-two/">Division Two</a></h3>

          <div class="results-table" id="lrep189526043">
            <p class="temp">Data loading from LeagueRepublic...
              <br>
              <a href="https://ncva.leaguerepublic.com/fg/1_490197339.html" target="_blank">View on LeagueRepublic</a>
            </p>
          </div>

          <div class="buttons">
            <a href="https://www.ncva.org.uk/league/division-two/#table">Standings</a>
            <a href="https://www.ncva.org.uk/league/division-two/#fixtures">Fixtures</a>
            <a href="https://www.ncva.org.uk/league/division-two/#results">Results</a>
          </div>
        </div>

        <div class="home-table">
          <h3 class="division-name"><a href="https://www.ncva.org.uk/league/womens-division/">Women's Division</a></h3>

          <div class="results-table" id="lrep443795018">
            <p class="temp">Data loading from LeagueRepublic...
              <br>
              <a href="https://ncva.leaguerepublic.com/fg/1_923905458.html" target="_blank">View on LeagueRepublic</a>
            </p>
          </div>

          <div class="buttons">
            <a href="https://www.ncva.org.uk/league/womens-division/#table">Standings</a>
            <a href="https://www.ncva.org.uk/league/womens-division/#fixtures">Fixtures</a>
            <a href="https://www.ncva.org.uk/league/womens-division/#results">Results</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  // Function to load LeagueRepublic script sequentially
  const loadLeagueSequentially = async (leagueCode: string, targetId: string) => {
    return new Promise<void>((resolve) => {
      const targetElement = document.getElementById(targetId)
      if (!targetElement) {
        console.warn(`Target element ${targetId} not found`)
        resolve()
        return
      }

      // Create a unique container for this league
      const container = document.createElement('div')
      container.style.display = 'none'
      container.id = `lr-container-${leagueCode}`

      // Set the league code in a unique global variable
      const uniqueVarName = `lrcode_${leagueCode}`
      ;(window as any)[uniqueVarName] = leagueCode

      // Create the inline script with unique variable
      const script1 = document.createElement('script')
      script1.type = 'text/javascript'
      script1.textContent = `var lrcode = '${leagueCode}';`

      // Create the external script
      const script2 = document.createElement('script')
      script2.type = 'text/javascript'
      script2.src = 'https://api.leaguerepublic.com/client/api/cs1.js'

      // Handle script loading completion
      script2.onload = () => {
        console.log(`LeagueRepublic script loaded for ${leagueCode}`)
        resolve()
      }

      script2.onerror = () => {
        console.error(`Failed to load LeagueRepublic script for ${leagueCode}`)
        resolve()
      }

      // Append scripts to container, then container to body
      container.appendChild(script1)
      container.appendChild(script2)
      document.body.appendChild(container)
    })
  }

  // Load leagues sequentially with proper error handling
  const loadAllLeagues = async () => {
    try {
      console.log('Starting LeagueRepublic loading...')

      await loadLeagueSequentially('660431464', 'lrep660431464')
      console.log('Division One loaded')

      await loadLeagueSequentially('189526043', 'lrep189526043')
      console.log('Division Two loaded')

      await loadLeagueSequentially('443795018', 'lrep443795018')
      console.log('Women\'s Division loaded')

      console.log('All LeagueRepublic tables loaded successfully')
    } catch (error) {
      console.error('Error loading LeagueRepublic tables:', error)
    }
  }

  // Start loading after a short delay to ensure DOM is ready
  setTimeout(loadAllLeagues, 500)
})
</script>

<style lang="scss">
.hero-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.hero-boxes {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 35px;
}

.divider {
  width: 2px;
  height: 100%;
  background-color: var(--color-accent);
}

.hero-box {
  padding: 20px;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  border-radius: 10px;
  width: 20%;
  line-height: 1;
  color: var(--color-text);

  span {
    font-size: 60px;
    font-weight: 600;
    color: var(--color-blue-light);
    font-family: 'Bebas Neue', sans-serif;
  }
}


.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero-section .btn-primary:hover {
  background-color: var(--color-white);
  color: var(--color-text);
  border: 2px solid var(--color-white);
}

.hero-section .btn-secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-blue-light);
}

.hero-section .btn-secondary:hover {
  background-color: var(--color-white);
  color: var(--color-text);
  border: 2px solid var(--color-white);
}



.home-tables {
  display: flex;
  border-radius: 5px;
  padding: 0px;
}
@media screen and (max-width: 768px) {
  .home-tables {
    flex-direction: column;
  }
}
.home-tables .home-table {
  width: 100%;
  margin-right: 30px;
  margin-bottom: 30px;
}
.home-tables .home-table:last-child {
  margin-right: 0;
}
.home-tables .home-table h3,
.home-tables .home-table .division-name,
.home-tables .home-table h3 a,
.home-tables .home-table .division-name a {
  font-size: 18px;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 10px;
  text-decoration: none;
  color: var(--color-text);
}
@media screen and (max-width: 768px) {
  .home-tables .home-table h3 {
    font-size: 16px;
  }
}
@media screen and (max-width: 576px) {
  .home-tables .home-table h3 {
    font-size: 14px;
  }
}
.home-tables .home-table .results-table {
  margin-bottom: 0;
}
.home-tables .home-table .results-table p.temp {
  font-size: 13px;
  background: var(--color-white);
  font-style: italic;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 5px auto 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    font-weight: 600;
    color: var(--color-link);
  }
}
/*********************** Table rows ***********************/

.home-tables .home-table .results-table table {
  width: 100% !important;
  max-width: 100% !important;
  text-align: center !important;
  display: block !important;
  margin: 0 auto 15px !important;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  white-space: nowrap !important;
  border: none !important;
  border-collapse: separate !important;
  border-spacing: 0 5px !important;
  padding: 0px !important;
}
.home-tables .home-table .results-table tbody tr {
  border-radius: 5px !important;
  background-color: #fff !important;
}
.home-tables .home-table .results-table thead {
  display: none !important;
}
.home-tables .home-table .results-table tr td {
  height: 40px !important;
  box-sizing: border-box !important;
  position: relative !important;
  font-size: 12px !important;
  background-color: #fff !important;
  padding: 0px !important;
}
@media screen and (max-width: 768px) {
  .home-tables .home-table .results-table tr td {
    font-size: 12px !important;
  }
}
@media screen and (max-width: 576px) {
  .home-tables .home-table .results-table tr td {
    font-size: 12px !important;
    height: 35px !important;
  }
}
.home-tables .home-table .results-table tr td:nth-child(1) {
  border-radius: 5px 0 0 5px !important;
  width: 25px !important;
  min-width: 25px !important;
  padding: 0 15px !important;
}
.home-tables .home-table .results-table tr td:nth-child(2) {
  text-align: left !important;
  width: 100% !important;
  min-width: auto !important;
  white-space: normal;
  line-height: 1.25;
}
.home-tables .home-table .results-table tr td:nth-child(3) {
  width: 25px !important;
  min-width: 25px !important;
  padding: 0 20px !important;
}
.home-tables .home-table .results-table tr td:nth-child(4) {
  display: none !important;
}
.home-tables .home-table .results-table tr td:nth-child(5) {
  display: none !important;
}
.home-tables .home-table .results-table tr td:nth-child(6) {
  display: none !important;
}
.home-tables .home-table .results-table tr td:nth-child(7) {
  display: none !important;
}
.home-tables .home-table .results-table tr td:nth-child(8) {
  display: none !important;
}
.home-tables .home-table .results-table tr td:nth-child(9) {
  width: 30px !important;
  min-width: 30px !important;
  padding: 0 15px 0 0 !important;
  font-weight: 800 !important;
  border-radius: 0 5px 5px 0 !important;
}


.buttons {
  display: flex;
}
.buttons a {
  display: inline-flex;
  padding: 4px 10px;
  margin-right: 5px;
  background: var(--color-background-light);
  border-radius: 3px;
  width: 100%;
  justify-content: center;
  color: #222222;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 11px;
  transition: all 0.15s ease;
}
@media screen and (max-width: 768px) {
  .buttons a {
    padding: 3px 10px;
  }
}
@media screen and (max-width: 576px) {
  .buttons a {
    padding: 2px 10px;
  }
}
.buttons a:last-child {
  margin-right: 0px;
}
.buttons a:hover {
  background-color: var(--color-white);
  transform: translateY(-2px);
}
</style>
