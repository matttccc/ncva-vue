<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div>
          <a class="logo-section" href="/">
            <h1 class="logo">
              <img src="../assets/nocovo-logo.svg" alt="NCVA Logo" class="logo-image"/>
            </h1>
            <p class="name">Northern<br>Counties<br>Volleyball<br>Association</p>
          </a>
        </div>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><RouterLink to="/" class="nav-link">Home</RouterLink></li>
            <li><RouterLink to="/news" class="nav-link">News</RouterLink></li>
            <li><RouterLink to="/leagues" class="nav-link">League Results</RouterLink></li>
            <li><RouterLink to="/clubs" class="nav-link">Clubs</RouterLink></li>
            <li><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
            <li><RouterLink to="/enter-results" class="nav-link">Enter results</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.header {
  background-color: #111143;
  color: white;
  padding: 24px 0;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}

.logo-section {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  .logo {
    font-size: 2rem;
    margin: 0;
    color: var(--color-text-header);
    padding: 2px 0;

    img {
      height: 66px;
    }
  }

  .name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 15.5px;
    margin: 0;
    color: var(--color-text-header);
    line-height: 0.81;
    position: relative;
    z-index: 1;
    padding-top: 10px;
  }
}

.main-nav {
  margin-left: auto;

  .nav-list {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin: 0;
    padding: 0;

    .nav-link {
      color: var(--color-text-header);
      text-decoration: none;
      font-weight: 600;
      padding: 0.5rem 0.75rem;
      transition: color 0.2s;

      &:hover {
        color: var(--color-link);
      }

      &.router-link-active {
        color: var(--color-link);
      }
    }
  }
}

@media (max-width: 768px) {
  .header {
    &-content {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .main-nav {
    margin-left: 0;
    width: 100%;
  }

  .nav-list {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .logo {
    font-size: 1.5rem;
  }

  .name {
    font-size: 0.7rem;
  }
}
</style>
