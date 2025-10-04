<template>
  <div class="contact">
    <div class="hero-section">
      <div class="container">
        <h1 class="hero-title">Contact</h1>
        <p class="hero-subtitle">Get in touch with us</p>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        <div class="contact-content">
          <!-- Contact Information -->
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Whether you're interested in joining a team, starting a new team, or have any questions about our programs, don't hesitate to contact us.</p>

            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <p>info@ncva.org.uk</p>
                  <p>general@ncva.org.uk</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-icon">📞</div>
                <div class="contact-details">
                  <h3>Phone</h3>
                  <p>01670 123456</p>
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-icon">📍</div>
                <div class="contact-details">
                  <h3>Address</h3>
                  <p>Northumberland Sports Centre</p>
                  <p>123 Sports Way</p>
                  <p>Newcastle upon Tyne</p>
                  <p>NE1 4ST</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-icon">⏰</div>
                <div class="contact-details">
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3>Follow Us</h3>
              <div class="social-icons">
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">LinkedIn</a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send us a Message</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
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
                  class="form-input"
                >
              </div>

              <div class="form-group">
                <label for="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="form-input"
                >
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" v-model="form.subject" required class="form-input">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="team-registration">Team Registration</option>
                  <option value="league-info">League Information</option>
                  <option value="training">Training Programs</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="form-input"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Committee Contacts -->
        <div class="committee-section">
          <h2>Committee Contacts</h2>
          <div class="committee-grid">
            <div class="committee-member">
              <h3>Sarah Johnson</h3>
              <p class="role">Chairperson</p>
              <p class="email">sarah.johnson@ncva.org.uk</p>
              <p class="phone">01670 123456</p>
            </div>

            <div class="committee-member">
              <h3>Mike Thompson</h3>
              <p class="role">Vice Chairperson</p>
              <p class="email">mike.thompson@ncva.org.uk</p>
              <p class="phone">01670 123457</p>
            </div>

            <div class="committee-member">
              <h3>Lisa Chen</h3>
              <p class="role">Treasurer</p>
              <p class="email">lisa.chen@ncva.org.uk</p>
              <p class="phone">01670 123458</p>
            </div>

            <div class="committee-member">
              <h3>David Wilson</h3>
              <p class="role">Secretary</p>
              <p class="email">david.wilson@ncva.org.uk</p>
              <p class="phone">01670 123459</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  isSubmitting.value = false

  // In a real application, you would handle the form submission here
  alert('Thank you for your message! We will get back to you soon.')
}
</script>

<style scoped>

.content-section {
  padding: 4rem 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-info h2, .contact-form-section h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.contact-info p {
  color: #7F7F88;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.contact-methods {
  margin-bottom: 3rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.contact-method:hover {
  transform: translateX(5px);
}

.contact-icon {
  font-size: 2rem;
  margin-right: 1.5rem;
  min-width: 60px;
}

.contact-details h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.contact-details p {
  color: #7F7F88;
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.social-links h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: var(--color-link);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-link);
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.social-link:hover {
  background-color: var(--color-link);
  color: white;
  transform: translateY(-2px);
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-link);
}

.form-input:required:invalid {
  border-color: #e74c3c;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--color-link);
  color: white;
  border: 2px solid var(--color-link);
}

.btn-primary:hover:not(:disabled) {
  background-color: #2980b9;
  border-color: #2980b9;
  transform: translateY(-2px);
}

.btn-primary:disabled {
  background-color: #bdc3c7;
  border-color: #bdc3c7;
  cursor: not-allowed;
}

.committee-section {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
}

.committee-section h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.committee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.committee-member {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.committee-member:hover {
  transform: translateY(-5px);
}

.committee-member h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.committee-member .role {
  color: var(--color-link);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.committee-member .email,
.committee-member .phone {
  color: #7F7F88;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
  }

  .contact-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .social-icons {
    justify-content: center;
  }

  .committee-grid {
    grid-template-columns: 1fr;
  }

  .committee-section {
    padding: 2rem;
  }
}
</style>
