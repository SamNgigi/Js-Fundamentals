const profileIterator = (profiles) => {
  let next_index = 0;

  return {
    next: () => {
      return next_index < profiles.length ? {
        value: profiles[next_index++],
        done: false
      } : {
        done: true
      }
    }
  };
}

const data = [{
    name: "Harry Hwo",
    age: 24,
    gender: "male",
    location: "Maryland SA",
    image: 'https://randomuser.me/api/portraits/men/80.jpg'
  },
  {
    name: "Kevin Dun",
    age: 45,
    gender: "male",
    location: "Maryland SA",
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    name: "Lydia Lit",
    age: 21,
    gender: "male",
    location: "Maryland SA",
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: "Po Jo",
    age: 57,
    gender: "male",
    location: "Maryland SA",
    image: 'https://randomuser.me/api/portraits/women/83.jpg'
  },
];



const
  next_btn = document.getElementById("next"),
  profile_display = document.getElementById("profileDisplay"),
  image_display = document.getElementById("imageDisplay"),
  profiles = profileIterator(data);




const nextProfile = () => {

  const current_profile = profiles.next().value;

  if (current_profile !== undefined) {
    profile_display.innerHTML = `
  <ul class = "list-group">
    <li class = "list-group-item"> Name: ${current_profile.name}</li> 
    <li class = "list-group-item"> Age: ${current_profile.age} </li> 
    <li class = "list-group-item"> Location: ${current_profile.location} </li>
    </ul>
  `;

    image_display.innerHTML = `
    <img src="${current_profile.image}">
  `
  } else {
    window.location.reload();
  }

}
nextProfile();



next_btn.addEventListener("click", nextProfile);