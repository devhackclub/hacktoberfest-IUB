// Creating an array to store contributions from students (name, image filename, department, favorite technology) in the form of objects
const contributions = [
  {
    name: "Zeeshan Mukhtar",
    image: "ZeeshanMukhtar1.jpg",
    department: "Information Technology",
    favoriteTech: "MERN Stack",
    GitHubUsername: "ZeeshanMukhtar1",
  },
   {
    name: "Amna Idrees",
    image: "amna-idrees.jpg",
    department: "Information Technology",
    favoriteTech: "Python + Java + Design",
    GitHubUsername: "amna-idrees",
  },
  {
    name: "Faeez",
    image: "mfaeezshabbir.jpg",
    department: "Software Engineering",
    favoriteTech: "TypeScript",
    GitHubUsername: "mfaeezshabbir",
  },
  {
    name: "Saira",
    image: "saira.jpg",
    department: "Software Engineering",
    favoriteTech: "JavaScript",
    GitHubUsername: "fromsairaf",
  },
  {
    name: "Aiman Fayyaz",
    image: "aiman.jpg",
    department: "Computer Science",
    favoriteTech: "Python",
    GitHubUsername: "aiman-fayyaz",
  },
  {
    name: "Yash Ainapure",
    image: "yash.jpg",
    department: "Computer Science & Engineering",
    favoriteTech: "JavaScript",
    GitHubUsername: "Yash-Ainapure",
  },
  {
    name: "Yasir Nawaz",
    image: "YasirNawaz.jpeg",
    department: "Information Technology",
    favoriteTech: "ReactJS",
    GitHubUsername: "yasir2002"
  },
  {
    name: "Muhammad Abuzar",
    image: "Abuzar.JPG",
    department: "Software Engineering",
    favoriteTech: "MERN Stack + Python",
    GitHubUsername: "Abuzariii"
  }
];

const contributionsContainer = document.getElementById("contributions");

// Loop through each contribution and create a card for it
contributions.forEach((contribution) => {
  const card = document.createElement("div");
  card.classList.add("card");

  // Populate the card with contribution data

  // Adding the student image
  const image = document.createElement("img");
  if (contribution.image) {
    image.src = `./images/${contribution.image}`;
  } else {
    image.src = "./images/dummy.jpg";
  }
  image.alt = "Student Image";
  image.onerror = function () {
    this.src = "./images/dummy.jpg";
  };

  // Displaying the student's name
  const name = document.createElement("h2");
  name.textContent = contribution.name;

  // Displaying the student's department
  const department = document.createElement("p");
  department.textContent = contribution.department;

  // Displaying the student's favorite technology
  const favoriteTech = document.createElement("p");
  favoriteTech.textContent = `Favorite Language: ${contribution.favoriteTech}`;

  // Creating GitHub button
  const githubButton = document.createElement("a");
  githubButton.classList.add("github-button");
  githubButton.textContent = "GitHub";
  githubButton.href = `https://github.com/${contribution.GitHubUsername}`;
  githubButton.target = "_blank"; // Open link in a new tab

  // Adding the elements to the card
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(department);
  card.appendChild(favoriteTech);
  card.appendChild(githubButton);

  // Adding the card to the contributions container
  contributionsContainer.appendChild(card);
});
