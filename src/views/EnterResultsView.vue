<template>
  <div class="hero-section">
    <div class="container">
      <h1 class="hero-title">News & Updates</h1>
      <p class="hero-subtitle">Stay up to date with the latest NCVA news</p>
    </div>
  </div>
  <div class="enter-results">
    <div class="container">
      <h1 class="hero-title">Enter Results</h1>

      <div class="results-form-section">
        <h2>Submit Match Results</h2>
        <form @submit.prevent="submitResults" class="results-form">
          <div class="form-row">
            <div class="form-group">
              <label for="division">Division *</label>
              <select id="division" v-model="form.division" required class="form-input">
                <option value="">Select Division</option>
                <option value="division-one">Division One</option>
                <option value="division-two">Division Two</option>
                <option value="womens-division">Women's Division</option>
              </select>
            </div>

            <div class="form-group">
              <label for="match-date">Match Date *</label>
              <input
                type="date"
                id="match-date"
                v-model="form.matchDate"
                required
                class="form-input"
              >
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="home-team">Home Team *</label>
              <select id="home-team" v-model="form.homeTeam" required class="form-input">
                <option value="">Select Home Team</option>
                <option v-for="team in teams" :key="team.id" :value="team.name">{{ team.name }}</option>
              </select>
            </div>

            <div class="form-group">
              <label for="away-team">Away Team *</label>
              <select id="away-team" v-model="form.awayTeam" required class="form-input">
                <option value="">Select Away Team</option>
                <option v-for="team in teams" :key="team.id" :value="team.name">{{ team.name }}</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="home-sets">Home Team Sets Won *</label>
              <select id="home-sets" v-model="form.homeSets" required class="form-input">
                <option value="">Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div class="form-group">
              <label for="away-sets">Away Team Sets Won *</label>
              <select id="away-sets" v-model="form.awaySets" required class="form-input">
                <option value="">Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="set-scores">Set Scores (e.g., 25-23, 25-21, 23-25, 25-20)</label>
            <input
              type="text"
              id="set-scores"
              v-model="form.setScores"
              placeholder="Enter set scores separated by commas"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="venue">Venue</label>
            <input
              type="text"
              id="venue"
              v-model="form.venue"
              placeholder="Match venue"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="notes">Additional Notes</label>
            <textarea
              id="notes"
              v-model="form.notes"
              rows="3"
              placeholder="Any additional information about the match"
              class="form-input"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="submitted-by">Submitted By *</label>
            <input
              type="text"
              id="submitted-by"
              v-model="form.submittedBy"
              required
              placeholder="Your name"
              class="form-input"
            >
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              placeholder="your.email@example.com"
              class="form-input"
            >
          </div>

          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Submitting...' : 'Submit Results' }}
          </button>
        </form>
      </div>

      <div class="instructions-section">
        <h2>Instructions</h2>
        <div class="instructions-content">
          <h3>How to Submit Results</h3>
          <ol>
            <li>Select the correct division for your match</li>
            <li>Enter the match date</li>
            <li>Select both teams from the dropdown lists</li>
            <li>Enter the number of sets won by each team</li>
            <li>Optionally provide detailed set scores</li>
            <li>Add venue and any additional notes if relevant</li>
            <li>Provide your contact information</li>
            <li>Click Submit Results</li>
          </ol>

          <h3>Important Notes</h3>
          <ul>
            <li>Results must be submitted within 48 hours of the match</li>
            <li>Both team captains should verify the results</li>
            <li>In case of disputes, contact the league administrator</li>
            <li>Results will be reviewed before being published</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  division: '',
  matchDate: '',
  homeTeam: '',
  awayTeam: '',
  homeSets: '',
  awaySets: '',
  setScores: '',
  venue: '',
  notes: '',
  submittedBy: '',
  email: ''
})

const teams = ref([
  { id: 1, name: 'Durham University VC' },
  { id: 2, name: 'Haughton Darlington VC' },
  { id: 3, name: 'Longbenton VC' },
  { id: 4, name: 'Marden VC' },
  { id: 5, name: 'Monkseaton VC' },
  { id: 6, name: 'NESLC VC' },
  { id: 7, name: 'Newcastle Panthers VC' },
  { id: 8, name: 'Tynedale VC' }
])

const submitResults = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Reset form
  form.value = {
    division: '',
    matchDate: '',
    homeTeam: '',
    awayTeam: '',
    homeSets: '',
    awaySets: '',
    setScores: '',
    venue: '',
    notes: '',
    submittedBy: '',
    email: ''
  }

  isSubmitting.value = false

  // In a real application, you would handle the form submission here
  alert('Results submitted successfully! Thank you for your submission.')
}
</script>

<style lang="scss" scoped>

.results-form-section, .instructions-section {
  background: white;
  margin-bottom: 2rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.results-form-section h2, .instructions-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #494A53;
  border-radius: 3px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #223382;
}

.form-input:required:invalid {
  border-color: #e74c3c;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background-color: #223382;
  color: white;
  border: 1px solid #223382;
}

.btn-primary:hover:not(:disabled) {
  background-color: #005a8b;
  border-color: #005a8b;
}

.btn-primary:disabled {
  background-color: #494A53;
  border-color: #494A53;
  cursor: not-allowed;
}

.instructions-content h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  font-weight: bold;
}

.instructions-content ol, .instructions-content ul {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.instructions-content li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .enter-results {
    padding: 1rem 0;
  }

  .container {
    padding: 0 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .results-form-section, .instructions-section {
    padding: 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .btn {
    width: 100%;
    padding: 1rem;
  }
}
</style>
