const soloProjects = [
  {
    id: 1,
    title: 'Bookshelf-API',
    img: 'Hapijs',
    link: 'https://bookseft-api.herokuapp.com/books',
    github: 'https://github.com/MandoPurba/Bookshelf-API',
  },
  {
    id: 3,
    title: 'Notes App Backend',
    img: 'nodejs',
    link: '',
    github: 'https://github.com/MandoPurba/notes-app-back-end',
  },
  {
    id: 4,
    title: 'REST API Nest Js',
    img: 'nestjs',
    link: 'https://nestjs-pojects-1.herokuapp.com/',
    github: 'https://github.com/MandoPurba/nest-js',
  },
  {
    id: 5,
    title: 'REST API Larravel',
    img: 'laravel',
    link: '#',
    github: 'https://github.com/MandoPurba/bookhelf-api-laravel',
  },
];

const skill = {
  frontend: [
    "HTML", "CSS", "JavaScript", "Bootstrap"
  ],
  backend: [
    "Node js", "Nest Js", "PHP", "Python"
  ]
}

const me = {
  name: "Romando Purba",
  role: "Jr Back-End Developer",
  experience: "-1",
  about: "I am a Junior Backend developer with less than 1 year of experience, and a person who spends most of his free time doing projects/websites and learning about technological developmer"
}
  
// export default soloProjects
module.exports = {
  soloProjects,
  skill,
  me
}
