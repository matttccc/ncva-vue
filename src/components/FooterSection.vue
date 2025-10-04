<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4 class="footer-heading">Clubs</h4>
          <div class="clubs-list">
            <span>Durham University</span>
            <span>Haughton Darlington</span>
            <span>Longbenton</span>
            <span>Marden</span>
            <span>Monkseaton</span>
            <span>NESLC</span>
            <span>Newcastle Panthers</span>
            <span>Tynedale</span>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">League Results</h4>
          <div class="league-links">
            <a href="#" class="league-link">Season 2024/2025 Division One</a>
            <a href="#" class="league-link">Season 2024/2025 Division Two</a>
            <a href="#" class="league-link">Season 2024/2025 Women's Division</a>
            <a href="#" class="league-link">Season 2023/2024</a>
            <a href="#" class="league-link">Season 2022/2023</a>
            <a href="#" class="league-link">Season 2021/2022</a>
            <a href="#" class="league-link">Season 2019/2020</a>
            <a href="#" class="league-link">Season 2018/2019</a>
            <a href="#" class="league-link">Season 2017/2018</a>
            <a href="#" class="league-link">Season 2016/2017</a>
            <a href="#" class="league-link">Season 2015/2016</a>
            <a href="#" class="league-link">Season 2014/2015</a>
            <a href="#" class="league-link">Season 2013/2014</a>
            <a href="#" class="league-link">Season 2012/2013</a>
            <a href="#" class="league-link">Season 2011/2012</a>
            <a href="#" class="league-link">Season 2010/2011</a>
            <a href="#" class="league-link">Season 2009/2010</a>
            <a href="#" class="league-link">Season 2008/2009</a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Downloads</h4>
          <div class="download-links">
            <a href="#" class="download-link">Result Sheet</a>
            <a href="#" class="download-link">NoCoVo League Rules</a>
            <a href="#" class="download-link">NCVA Constitution</a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-heading">Links</h4>
          <div class="external-links">
            <a href="https://ncva.leaguerepublic.com/" class="external-link" target="_blank">NoCoVo League Results</a>
            <a href="https://www.volleyballengland.org/competitions/volleyball/nvl" class="external-link" target="_blank">National Volleyball League</a>
            <a href="https://www.volleyballengland.org/" class="external-link" target="_blank">Volleyball England</a>
            <a href="https://a.leaguerepublic.com/myaccount/login/index.html" class="external-link" target="_blank">NoCoVo League Admin</a>
          </div>
        </div>

        <div class="footer-section-full-width">
          <div class="colophon">
            <p>&copy; 2025 Northern Counties Volleyball Association</p>
            <p>The NCVA is part of the North East Volleyball Association (NEVA)</p>
          </div>
          <div class="logo">
            <img src="../assets/nocovo-logo-on-white.svg" alt="NCVA Logo" class="logo-image"/>
            <p class="name">Northern<br>Counties<br>Volleyball<br>Association</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.footer {
  --grid-template-columns: repeat(4, 1fr);
  --grid-gap: 2rem;
  --flex-direction: row;
  --align-items: center;
  --padding: 0 30px;
  --box-padding: 20px 30px;

  @media (max-width: 1024px) {
    --grid-template-columns: repeat(2, 1fr);
    --grid-gap: 1.5rem;
  }

  @media (max-width: 768px) {
    --grid-template-columns: 1fr;
    --grid-gap: 1.5rem;
    --flex-direction: column;
    --align-items: flex-start;
    --padding: 0 20px;
    --box-padding: 15px 20px;
  }

  background-color: var(--color-background-lighter);
  color: var(--color-text-light);
  padding: 2rem 0;
  margin-top: auto;

  .container {
    padding: var(--padding)
  }

  .footer-content {
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    gap: var(--grid-gap);
  }

  .footer-section-full-width {
    display: flex;
    flex-direction: var(--flex-direction);
    justify-content: space-between;
    align-items: var(--align-items);
    background-color: var(--color-background-light);
    padding: var(--box-padding);
    border-radius: 12px;
    width: 100%;
    grid-column: 1 / -1;
    font-size: 14px;
    row-gap: 10px;

    .logo {
      display: flex;
      gap: 8px;
      padding: 10px 0;

      .logo-image {
        height: 50px;
      }
      .name {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 12px;
        margin: 0;
        color: var(--color-text);
        line-height: 0.81;
        position: relative;
        z-index: 1;
        padding-top: 6px;
      }
    }
  }

  .footer-section {

    .footer-heading {
      margin-bottom: 1rem;
      font-size: 24px;
      color: var(--color-text);
      font-weight: 500;
    }

    a {
      color: var(--color-text-light);
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      font-size: 14px;

      &:hover {
        color: var(--color-text);
      }
    }
  }
}

.clubs-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    font-size: 0.85rem;
    color: var(--color-text-light);
  }
}

// .league-links,
// .download-links,
// .external-links {
//   display: inline-flex;
//   flex-direction: column;
//   gap: 0.25rem;
// }

// .league-link,
// .download-link,
// .external-link {
//   color: var(--color-link);
//   font-size: 0.85rem;
//   transition: color 0.2s;

//   &:hover {
//     color: var(--color-link) !important;
//   }
// }

</style>
