<template>
  <div class="page">
    <div class="hero-section">
      <div class="container">
        <h1 class="hero-title">News & Updates</h1>
        <p class="hero-subtitle">Stay up to date with the latest NCVA news</p>
      </div>
    </div>

    <div class="page-content">
      <div class="container">
        <!-- Featured Article -->
        <div class="featured-article" v-if="featuredArticle">
          <div class="featured-content">
            <div class="featured-image"></div>
            <div class="featured-text">
              <div class="article-meta">
                <span class="category">{{ featuredArticle.category }}</span>
                <span class="date">{{ featuredArticle.date }}</span>
              </div>
              <h2>{{ featuredArticle.title }}</h2>
              <p>{{ featuredArticle.excerpt }}</p>
              <a href="#" class="read-more">Read Full Article</a>
            </div>
          </div>
        </div>

        <!-- News Grid -->
        <div class="news-grid">
          <article v-for="article in newsArticles" :key="article.id" class="news-card">
            <div class="article-image"></div>
            <div class="article-content">
              <div class="article-meta">
                <span class="category">{{ article.category }}</span>
                <span class="date">{{ article.date }}</span>
              </div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="load-more-section">
          <button class="btn btn-outline">Load More Articles</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const featuredArticle = ref({
  id: 1,
  title: 'Winter League Registration Now Open for 2025 Season',
  excerpt: 'Registration for the 2025 Winter League is now open! Teams can register until January 15th, 2025. This season promises to be our biggest yet with new divisions and exciting prizes.',
  category: 'League News',
  date: 'Dec 15, 2024',
  image: '/images/winter-league.jpg'
})

const newsArticles = ref([
  {
    id: 2,
    title: 'Championship Finals Results - Thunderbolts Crowned Champions',
    excerpt: 'Congratulations to Thunderbolts for winning the 2024 Championship! They defeated Lightning in a thrilling 5-set final. Full results and statistics now available.',
    category: 'Results',
    date: 'Dec 10, 2024'
  },
  {
    id: 3,
    title: 'New Training Facilities Opening in January 2025',
    excerpt: 'We\'re excited to announce that our new state-of-the-art training facilities will be opening in January 2025. The facilities include two full-size courts and modern equipment.',
    category: 'Facilities',
    date: 'Dec 5, 2024'
  },
  {
    id: 4,
    title: 'Christmas Tournament - All Teams Welcome',
    excerpt: 'Join us for our annual Christmas Tournament on December 20th! This fun event is open to all teams and skill levels. Registration closes December 18th.',
    category: 'Events',
    date: 'Dec 1, 2024'
  },
  {
    id: 5,
    title: 'NCVA Annual General Meeting - December 2024',
    excerpt: 'The NCVA Annual General Meeting will be held on December 30th at 7:00 PM. All members are invited to attend and participate in important association decisions.',
    category: 'General',
    date: 'Nov 28, 2024'
  },
  {
    id: 6,
    title: 'Player Development Program Launched',
    excerpt: 'We\'re launching a new player development program for junior players aged 12-18. The program includes weekly training sessions and coaching from experienced players.',
    category: 'Development',
    date: 'Nov 25, 2024'
  },
  {
    id: 7,
    title: 'Volunteer Coaches Needed for Youth Programs',
    excerpt: 'We\'re looking for volunteer coaches to help with our youth programs. No experience necessary - training will be provided. Contact us for more information.',
    category: 'Volunteers',
    date: 'Nov 20, 2024'
  },
  {
    id: 8,
    title: 'League Rules Update - 2025 Season',
    excerpt: 'Important updates to league rules for the 2025 season. Changes include new scoring system and updated equipment requirements. All teams must review.',
    category: 'Rules',
    date: 'Nov 15, 2024'
  },
  {
    id: 9,
    title: 'Partnership with Local Sports Centre',
    excerpt: 'We\'re pleased to announce a new partnership with the Northumberland Sports Centre, providing our members with access to additional training facilities.',
    category: 'Partnerships',
    date: 'Nov 10, 2024'
  }
])
</script>

<style scoped>
/* Page styles are now in main.css */
</style>
