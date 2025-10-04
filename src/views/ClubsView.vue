<template>
  <div class="clubs">
    <div class="hero-section">
      <div class="container">
        <h1 class="hero-title">Clubs</h1>
        <p class="hero-subtitle">Current season standings and match results</p>
      </div>
    </div>
    <div class="container">

      <div class="clubs-grid">
        <div class="club-item">
          <h3>Durham University VC</h3>
          <p>University-based volleyball club</p>
        </div>

        <div class="club-item">
          <h3>Haughton Darlington VC</h3>
          <p>Community volleyball club in Darlington</p>
        </div>

        <div class="club-item">
          <h3>Longbenton VC</h3>
          <p>Local community volleyball club</p>
        </div>

        <div class="club-item">
          <h3>Marden VC</h3>
          <p>Community volleyball club</p>
        </div>

        <div class="club-item">
          <h3>Monkseaton VC</h3>
          <p>Local volleyball club in Monkseaton</p>
        </div>

        <div class="club-item">
          <h3>NESLC VC</h3>
          <p>North East Sports and Leisure Club</p>
        </div>

        <div class="club-item">
          <h3>Newcastle Panthers VC</h3>
          <p>Premier volleyball club in Newcastle</p>
        </div>

        <div class="club-item">
          <h3>Tynedale VC</h3>
          <p>Community volleyball club in Tynedale</p>
        </div>
      </div>

      <div class="additional-info">
        <h2>Local League</h2>
        <div class="league-seasons">
          <h3>Current and Past Seasons</h3>
          <div class="season-links">
            <a href="#" class="season-link current">Season 2024/2025 Division One</a>
            <a href="#" class="season-link current">Season 2024/2025 Division Two</a>
            <a href="#" class="season-link current">Season 2024/2025 Women's Division</a>
            <a href="#" class="season-link">Season 2023/2024</a>
            <a href="#" class="season-link">Season 2022/2023</a>
            <a href="#" class="season-link">Season 2021/2022</a>
            <a href="#" class="season-link">Season 2019/2020</a>
            <a href="#" class="season-link">Season 2018/2019</a>
            <a href="#" class="season-link">Season 2017/2018</a>
            <a href="#" class="season-link">Season 2016/2017</a>
            <a href="#" class="season-link">Season 2015/2016</a>
            <a href="#" class="season-link">Season 2014/2015</a>
            <a href="#" class="season-link">Season 2013/2014</a>
            <a href="#" class="season-link">Season 2012/2013</a>
            <a href="#" class="season-link">Season 2011/2012</a>
            <a href="#" class="season-link">Season 2010/2011</a>
            <a href="#" class="season-link">Season 2009/2010</a>
            <a href="#" class="season-link">Season 2008/2009</a>
          </div>
        </div>
      </div>

      <div class="downloads-section">
        <h2>Downloads</h2>
        <div class="download-links">
          <a href="#" class="download-link">Result Sheet</a>
          <a href="#" class="download-link">NoCoVo League Rules</a>
          <a href="#" class="download-link">NCVA Constitution</a>
        </div>
      </div>

      <div class="links-section">
        <h2>Links</h2>
        <div class="external-links">
          <a href="#" class="external-link">NoCoVo League Results</a>
          <a href="#" class="external-link">National Volleyball League</a>
          <a href="#" class="external-link">Volleyball England</a>
          <a href="#" class="external-link">NoCoVo League Admin</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional imports needed for this component
</script>

<style scoped>

.clubs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.club-item {
  background: white;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  transition: box-shadow 0.2s;
}

.club-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.club-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.club-item p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.additional-info, .downloads-section, .links-section {
  background: white;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.additional-info h2, .downloads-section h2, .links-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.league-seasons h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.season-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.season-link {
  color: #223382;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0;
  transition: color 0.2s;
}

.season-link:hover {
  text-decoration: underline;
}

.season-link.current {
  font-weight: bold;
}

.download-links, .external-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.download-link, .external-link {
  color: #223382;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.25rem 0;
  transition: color 0.2s;
}

.download-link:hover, .external-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .clubs {
    padding: 1rem 0;
  }

  .container {
    padding: 0 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .clubs-grid {
    grid-template-columns: 1fr;
  }

  .season-links {
    grid-template-columns: 1fr;
  }

  .additional-info, .downloads-section, .links-section {
    padding: 1rem;
  }
}
</style>
