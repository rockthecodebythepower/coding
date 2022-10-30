import './style.css'


const templateFaqs = () => `
  <h1>Frequently Asked Questions</h1>
  <div class="faq-container">
    <div class="faq active">
      <h3 class="faq-title">What is the Journal of the Whills?</h3>
      <p class="faq-text">
        This is mentioned in the introduction to the Star Wars novelization
        and hardly anywhere else. Its significance is unclear, but it might be
        similar in concept to the Red Book of Westmarch, the ficticious book
        from which Tolkiens' Lord of the Rings story supposedly comes.
      </p>
      <button class="faq-toggle">❌</button>
    </div>
    <div class="faq">
      <h3 class="faq-title">How did Mark Hamill and Harrison Ford get their scars?</h3>
      <p class="faq-text">
        Mark Hamill went through the windshield of his BMW in California.
        Harrison Ford received his 2-inch scar in a car accident in his early
        20s.
      </p>
      <button class="faq-toggle">❌</button>
    </div>
    <div class="faq">
      <h3 class="faq-title">Why is a B-wing called a B-wing?</h3>
      <p class="faq-text">
        It is shaped like a "B"lade.
      </p>
      <button class="faq-toggle">❌</button>
    </div>
    <div class="faq">
      <h3 class="faq-title"> When Han is lowered into the carbon freezing chamber, he is wearing
        handcuffs. Why do they disappear when he escapes in Jabba's Palace?</h3>
      <p class="faq-text">
        You were probably watching the Pan and Scan version of the movie. The
        Pan and Scan version was made for televisions, and therefore cuts out
        the sides of the movie. If you watch the letterbox version, you can
        clearly see two ugnaughts walk in front of him and take off the
        handcuffs.
      </p>
      <button class="faq-toggle">❌</button>
    </div>
    <div class="faq">
      <h3 class="faq-title"> What are the black things on the Emperor in the Throne Room?</h3>
      <p class="faq-text">
        Bad special effects. They tried to cover up parts of the Emperor's
        face with the black "white-out". These are known as the Emperor's
        slugs.
      </p>
      <button class="faq-toggle">❌</button>
    </div>
  </div>
`

const app = document.querySelector('#app');

app.innerHTML += templateFaqs();

const toggles = document.querySelectorAll('.faq-toggle');


toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})