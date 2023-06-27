/* 
==========FEATURES SECTION==========
The section "Featured speakers" should be created dynamically in JavaScript.
You should use a JavaScript variable with the data about the speakers and use 
it when the page loads to create the HTML for this section dynamically.
*/
const featuredSystem = document.querySelector('#featured-system');
const featuredArray = [
  {
    id: 0,
    class: 'featured-visible',
    image: '../resources/profiles/cypher-1.jpg',
    title: 'AcreTheDog',
    subtitle: 'The Watchful Sentinel',
    description:
      'Step into the shadows and embrace the art of information warfare as a seasoned Cypher Main, a master of traps and surveillance, poised to outwit and outmaneuver your enemies.',
  },
  {
    id: 1,
    class: 'featured-visible',
    image: '../resources/profiles/cypher-2.jpg',
    title: 'Dinghy',
    subtitle: 'The Silent Observer',
    description:
      'Enter the realm of shadows as a meticulous Cypher Main, orchestrating a symphony of surveillance and outsmarting your opponents with calculated precision, ensuring victory is always within your grasp.',
  },
  {
    id: 2,
    class: 'featured-hidden',
    image: '../resources/profiles/cypher-3.jpg',
    title: 'Spawns',
    subtitle: 'The Mind Manipulator',
    description:
      'Unleash your strategic brilliance and immerse yourself in the world of calculated deception as a formidable Cypher Main, unraveling enemy movements and leaving no secret hidden.',
  },
  {
    id: 3,
    class: 'featured-hidden',
    image: '../resources/profiles/cypher-4.jpg',
    title: 'SoaR Maxie',
    subtitle: 'The Architect of Shadows',
    description:
      'Embark on a cerebral journey as a meticulous Cypher Main, weaving an intricate web of traps and surveillance to  control the battlefield with unparalleled precision and foresight.',
  },
  {
    id: 4,
    class: 'featured-hidden',
    image: '../resources/profiles/cypher-5.jpg',
    title: 'Link123',
    subtitle: 'The Sentinel Strategist',
    description:
      'Dive into the realm of calculated intelligence and become the guardian of secrets as an elite Cypher Main, manipulating the battlefield with your surveillance mastery and outsmarting your foes at every turn.',
  },
  {
    id: 5,
    class: 'featured-hidden',
    image: '../resources/profiles/cypher-6.jpg',
    title: 'Rysth',
    subtitle: 'The Phantom Observer',
    description:
      'Embrace the role of the ultimate sentinel, wielding the power of information and striking fear into the hearts of your enemies as a seasoned Cypher Main, controlling the battlefield with ruthless precision and unwavering vigilance.',
  },
];

function addFeaturedCards() {
  featuredArray.forEach((element) => {
    const elementClass = element.class;
    const article = document.createElement('article');
    article.classList.add('featured-card', 'col-12', 'col-lg-5', elementClass);
    article.innerHTML = `
      <div class="featured-image" id="featured-${element.id}">
        <img
          class="featured-portrait"
          src="${element.image}"
          alt="Valorant Cypher ${element.title}"
        />
      </div>
      <div class="featured-subcontent">
        <h3 class="featured-title">${element.title}</h3>
        <p class="featured-subtitle">${element.subtitle}</p>
        <hr class="hr hr-dark" />
        <div class="featured-description">
          ${element.description}
        </div>
      </div>
    `;
    featuredSystem.appendChild(article);
  });
}

function toggleFeaturedCards() {
  const featuredButton = document.querySelector('#featured-more');
  const featuredCards = Array.from(document.querySelectorAll('.featured-card'));
  const featuredClass = 'featured-hidden';
  featuredButton.addEventListener('click', () => {
    featuredCards.forEach((element) => {
      const validator = element.classList.contains(featuredClass);
      if (validator) {
        element.classList.toggle('featured-visible');
      }
    });
  });
}

window.onload = () => {
  addFeaturedCards();
  toggleFeaturedCards();
};
