//testi data
const testimonials = [
  {
    name: "June Cha",
    job: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial:
      "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
  },

  {
    name: "Iida Niskanen",
    job: "Data Engineer",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    testimonial:
      "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
  },

  {
    name: "Renee Sims",
    job: "Cloud engineer",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    testimonial:
      "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
  },

  {
    name: "Sasha Ho",
    job: "Phd student",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    testimonial:
      "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
  },

  {
    name: "Veeti Seppanen",
    job: "Frontend developer",
    image: "https://randomuser.me/api/portraits/men/97.jpg",
    testimonial:
      "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries ad elevate your skills.",
  },
];

//current slide
let i = 0;

//total slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `<p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3> ${testimonials[i].name}</h3>
      <h6> ${testimonials[i].job}</h6>
      `;
};

// function is not working but i tried (setInterval)
let currentIndex = 0;

function changeTestimonial() {
  testimonials[currentIndex];

  currentIndex = (currentIndex + 1) % testimonials.length;
}

setInterval(changeTestimonial, 3000);

changeTestimonial();

window.onload = displayTestimonial;

//function for some reason also doenst work

let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Message = document.getElementsByClassName("messagetxt");
let form = document.getElementById("form");
let error = document.getElementById("error");

form.addEventListener("sumbit", (e) => {
  let messages = [];
  if (Name.value === "" || Name.value == null) {
    messages.push("name is required");
  } else if (Email.value === "" || Email.value == null) {
    messages.push("Email is required");
  } else if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});
