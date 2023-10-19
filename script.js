// Creating an array to store contributions from students (name, image filename, department, favorite technology) in the form of objects
const contributions = [
  {
    name: 'Zeeshan Mukhtar',
    image: 'ZeeshanMukhtar1.jpg',
    department: 'Information Technology',
    favoriteTech: 'MERN Stack',
  },
  {
    name: 'Faeez',
    image: 'mfaeezshabbir.jpg',
    department: 'Software Engineering',
    favoriteTech: 'TypeScript',
  },
  {
    name: 'Saira',
    image: 'saira.jpg',
    department: 'Software Engineering',
    favoriteTech: 'JavaScript',
  },
  {
    name: 'Aiman Fayyaz',
    image: 'aiman.jpg',
    department: 'Computer Science',
    favoriteTech: 'Python',
  },
  {
    name: 'Yash Ainapure',
    image: 'yash.jpg',
    department: 'Computer Science & Engineering',
    favoriteTech: 'JavaScript',
  },
];

const contributionsContainer = document.getElementById('contributions');

// Loop through each contribution and create a card for it
contributions.forEach((contribution) => {
  const card = document.createElement('div');
  card.classList.add('card');

  // Populate the card with contribution data

  // Adding the student image
  const image = document.createElement('img');
  if (contribution.image) {
    image.src = `./images/${contribution.image}`;
  } else {
    image.src = 'placeholder.jpg';
  }
  image.alt = 'Student Image';

  // Displaying the student's name
  const name = document.createElement('h2');
  name.textContent = contribution.name;

  // Displaying the student's department
  const department = document.createElement('p');
  department.textContent = contribution.department;

  // Displaying the student's favorite technology
  const favoriteTech = document.createElement('p');
  favoriteTech.textContent = `Favorite Language: ${contribution.favoriteTech}`;

  // Adding the elements to the card
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(department);
  card.appendChild(favoriteTech);

  // Adding the card to the contributions container
  contributionsContainer.appendChild(card);
});
