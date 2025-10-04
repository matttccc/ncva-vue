<template>
  <div class="leagues">
    <div class="hero-section">
      <div class="container">
        <h1 class="hero-title">Leagues & Results</h1>
        <p class="hero-subtitle">Current season standings and match results</p>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        <!-- League Tabs -->
        <div class="league-tabs">
          <button
            v-for="league in leagues"
            :key="league.id"
            @click="activeLeague = league.id"
            :class="['tab-button', { active: activeLeague === league.id }]"
          >
            {{ league.name }}
          </button>
        </div>

        <!-- League Standings -->
        <div class="standings-section">
          <h2>{{ getCurrentLeague()?.name }} Standings</h2>
          <div class="standings-table">
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Team</th>
                  <th>P</th>
                  <th>W</th>
                  <th>L</th>
                  <th>Sets W</th>
                  <th>Sets L</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(team, index) in getCurrentLeague()?.standings" :key="team.id">
                  <td>{{ index + 1 }}</td>
                  <td class="team-name">{{ team.name }}</td>
                  <td>{{ team.played }}</td>
                  <td>{{ team.won }}</td>
                  <td>{{ team.lost }}</td>
                  <td>{{ team.setsWon }}</td>
                  <td>{{ team.setsLost }}</td>
                  <td class="points">{{ team.points }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Recent Results -->
        <div class="results-section">
          <h2>Recent Results</h2>
          <div class="results-list">
            <div v-for="result in getCurrentLeague()?.recentResults" :key="result.id" class="result-item">
              <div class="result-date">{{ result.date }}</div>
              <div class="result-teams">
                <div class="team-result">
                  <span class="team-name">{{ result.homeTeam }}</span>
                  <span class="score">{{ result.homeScore }}</span>
                </div>
                <div class="vs">vs</div>
                <div class="team-result">
                  <span class="score">{{ result.awayScore }}</span>
                  <span class="team-name">{{ result.awayTeam }}</span>
                </div>
              </div>
              <div class="result-sets">{{ result.sets }}</div>
            </div>
          </div>
        </div>

        <!-- Upcoming Fixtures -->
        <div class="fixtures-section">
          <h2>Upcoming Fixtures</h2>
          <div class="fixtures-list">
            <div v-for="fixture in getCurrentLeague()?.upcomingFixtures" :key="fixture.id" class="fixture-item">
              <div class="fixture-date">
                <div class="date">{{ fixture.date }}</div>
                <div class="time">{{ fixture.time }}</div>
              </div>
              <div class="fixture-teams">
                <div class="team">{{ fixture.homeTeam }}</div>
                <div class="vs">vs</div>
                <div class="team">{{ fixture.awayTeam }}</div>
              </div>
              <div class="fixture-venue">{{ fixture.venue }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeLeague = ref('division-one')

const leagues = ref([
  {
    id: 'division-one',
    name: 'Division One',
    standings: [
      { id: 1, name: 'Newcastle Panthers VC', played: 12, won: 10, lost: 2, setsWon: 30, setsLost: 8, points: 30 },
      { id: 2, name: 'Durham University VC', played: 12, won: 9, lost: 3, setsWon: 28, setsLost: 12, points: 27 },
      { id: 3, name: 'Tynedale VC', played: 12, won: 8, lost: 4, setsWon: 26, setsLost: 16, points: 24 },
      { id: 4, name: 'Marden VC', played: 12, won: 7, lost: 5, setsWon: 24, setsLost: 18, points: 21 },
      { id: 5, name: 'Longbenton VC', played: 12, won: 6, lost: 6, setsWon: 20, setsLost: 22, points: 18 },
      { id: 6, name: 'Monkseaton VC', played: 12, won: 5, lost: 7, setsWon: 18, setsLost: 24, points: 15 }
    ],
    recentResults: [
      { id: 1, date: 'Dec 14, 2024', homeTeam: 'Newcastle Panthers VC', homeScore: 3, awayTeam: 'Durham University VC', awayScore: 1, sets: '25-22, 23-25, 25-20, 25-18' },
      { id: 2, date: 'Dec 14, 2024', homeTeam: 'Tynedale VC', homeScore: 2, awayTeam: 'Marden VC', awayScore: 3, sets: '25-23, 22-25, 25-27, 25-21, 13-15' },
      { id: 3, date: 'Dec 12, 2024', homeTeam: 'Longbenton VC', homeScore: 3, awayTeam: 'Monkseaton VC', awayScore: 0, sets: '25-19, 25-17, 25-21' }
    ],
    upcomingFixtures: [
      { id: 1, date: 'Dec 21, 2024', time: '7:00 PM', homeTeam: 'Durham University VC', awayTeam: 'Tynedale VC', venue: 'Sports Centre A' },
      { id: 2, date: 'Dec 21, 2024', time: '8:30 PM', homeTeam: 'Marden VC', awayTeam: 'Newcastle Panthers VC', venue: 'Sports Centre A' }
    ]
  },
  {
    id: 'division-two',
    name: 'Division Two',
    standings: [
      { id: 1, name: 'Haughton Darlington VC', played: 10, won: 8, lost: 2, setsWon: 24, setsLost: 8, points: 24 },
      { id: 2, name: 'NESLC VC', played: 10, won: 7, lost: 3, setsWon: 22, setsLost: 12, points: 21 },
      { id: 3, name: 'Monkseaton VC', played: 10, won: 6, lost: 4, setsWon: 20, setsLost: 16, points: 18 },
      { id: 4, name: 'Longbenton VC', played: 10, won: 5, lost: 5, setsWon: 18, setsLost: 18, points: 15 }
    ],
    recentResults: [
      { id: 1, date: 'Dec 13, 2024', homeTeam: 'Haughton Darlington VC', homeScore: 3, awayTeam: 'NESLC VC', awayScore: 1, sets: '25-20, 23-25, 25-22, 25-19' },
      { id: 2, date: 'Dec 13, 2024', homeTeam: 'Monkseaton VC', homeScore: 2, awayTeam: 'Longbenton VC', awayScore: 3, sets: '25-23, 22-25, 25-27, 25-21, 13-15' }
    ],
    upcomingFixtures: [
      { id: 1, date: 'Dec 20, 2024', time: '6:00 PM', homeTeam: 'NESLC VC', awayTeam: 'Monkseaton VC', venue: 'Community Hall' },
      { id: 2, date: 'Dec 20, 2024', time: '7:30 PM', homeTeam: 'Longbenton VC', awayTeam: 'Haughton Darlington VC', venue: 'Community Hall' }
    ]
  },
  {
    id: 'womens-division',
    name: 'Women\'s Division',
    standings: [
      { id: 1, name: 'Newcastle Panthers Ladies', played: 8, won: 7, lost: 1, setsWon: 21, setsLost: 6, points: 21 },
      { id: 2, name: 'Durham University Ladies', played: 8, won: 6, lost: 2, setsWon: 18, setsLost: 9, points: 18 },
      { id: 3, name: 'Tynedale Ladies', played: 8, won: 5, lost: 3, setsWon: 15, setsLost: 12, points: 15 },
      { id: 4, name: 'Marden Ladies', played: 8, won: 4, lost: 4, setsWon: 12, setsLost: 15, points: 12 }
    ],
    recentResults: [
      { id: 1, date: 'Dec 15, 2024', homeTeam: 'Newcastle Panthers Ladies', homeScore: 3, awayTeam: 'Durham University Ladies', awayScore: 0, sets: '25-18, 25-20, 25-22' },
      { id: 2, date: 'Dec 15, 2024', homeTeam: 'Tynedale Ladies', homeScore: 2, awayTeam: 'Marden Ladies', awayScore: 3, sets: '25-23, 22-25, 25-27, 25-21, 13-15' }
    ],
    upcomingFixtures: [
      { id: 1, date: 'Dec 22, 2024', time: '6:00 PM', homeTeam: 'Durham University Ladies', awayTeam: 'Tynedale Ladies', venue: 'University Sports Centre' },
      { id: 2, date: 'Dec 22, 2024', time: '7:30 PM', homeTeam: 'Marden Ladies', awayTeam: 'Newcastle Panthers Ladies', venue: 'Community Hall' }
    ]
  }
])

const getCurrentLeague = () => {
  return leagues.value.find(league => league.id === activeLeague.value)
}
</script>

<style scoped>
.leagues {
  min-height: 100vh;
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.content-section {
  padding: 4rem 0;
}

.league-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 1rem 2rem;
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.tab-button.active {
  background: var(--color-link);
  color: white;
  border-color: var(--color-link);
}

.standings-section, .results-section, .fixtures-section {
  margin-bottom: 4rem;
}

.standings-section h2, .results-section h2, .fixtures-section h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}

.standings-table {
  overflow-x: auto;
  margin-bottom: 2rem;
}

.standings-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.standings-table th,
.standings-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #ecf0f1;
}

.standings-table th {
  background-color: #34495e;
  color: white;
  font-weight: 600;
}

.standings-table tr:hover {
  background-color: #f8f9fa;
}

.team-name {
  font-weight: 600;
  text-align: left !important;
}

.points {
  font-weight: bold;
  color: var(--color-link);
}

.results-list, .fixtures-list {
  max-width: 800px;
  margin: 0 auto;
}

.result-item, .fixture-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.result-item:hover, .fixture-item:hover {
  transform: translateX(5px);
}

.result-date, .fixture-date {
  min-width: 120px;
  text-align: center;
  margin-right: 2rem;
}

.result-date {
  color: #7F7F88;
  font-size: 0.9rem;
}

.fixture-date .date {
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.1rem;
}

.fixture-date .time {
  color: var(--color-link);
  font-size: 0.9rem;
}

.result-teams, .fixture-teams {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 1rem;
}

.team-result {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.team-result .team-name {
  font-weight: 600;
  color: #2c3e50;
}

.team-result .score {
  font-weight: bold;
  color: var(--color-link);
  font-size: 1.2rem;
}

.vs {
  color: #7F7F88;
  font-weight: 600;
  font-size: 0.9rem;
}

.result-sets {
  color: #7F7F88;
  font-size: 0.9rem;
  min-width: 200px;
  text-align: right;
}

.fixture-teams .team {
  font-weight: 600;
  color: #2c3e50;
}

.fixture-venue {
  color: #7F7F88;
  font-size: 0.9rem;
  min-width: 150px;
  text-align: right;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .league-tabs {
    flex-direction: column;
    align-items: center;
  }

  .tab-button {
    width: 100%;
    max-width: 300px;
  }

  .result-item, .fixture-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .result-date, .fixture-date {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }

  .result-sets, .fixture-venue {
    text-align: center;
    min-width: auto;
  }

  .standings-table {
    font-size: 0.9rem;
  }

  .standings-table th,
  .standings-table td {
    padding: 0.75rem 0.5rem;
  }
}
</style>
