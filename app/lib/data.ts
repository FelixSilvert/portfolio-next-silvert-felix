const projects = [
    {
      id: 1,
      name: 'MORSE',
      description: `Development of an application during an internship. Its purpose was to manage corporate social responsibility (CSR) for companies. I was involved in all aspects of the project, including prototyping, specification, development, deployment, and more.`,
      stack: ['Spring', 'React', 'Figma'],
    },

    {
      id: 2,
      name: 'NeverLonely',
      description: `University project where the ultimate goal was to create a social network. NeverLonely is an application that allows users to create and manage various types of social events, from concerts to outings with friends or even board game tournaments. The purpose of this application is to make organizing social events easier and, above all, to reduce social isolation.`,
      stack: ['Spring', 'React', 'MongoBD'],
    },

    {
      id: 3,
      name: 'Forest Clicker',
      description: `My first project using TypeScript and Next.js, despite having very little knowledge of JavaScript and none in React. As a result, I made many mistakes, but the application is fully functional. It is a small clicker-style game inspired by "Cookie Clicker." The game revolves around the theme of reforestation, aiming to raise awareness among younger audiences about this important topic.`,
      stack: ['TypeScript', 'React', 'NextJS'],
      sourceCode: 'https://github.com/FelixSilvert/forest-clicker',
    },

    {
      id: 4,
      name: 'FlatCraft',
      description: `University project developed in a group of four using Java and JavaFX. We created a 2D game similar to Terraria in Java, incorporating class management and design pattern usage.`,
      stack: ['JAVA', 'JavaFx', 'Patrons de conception'],
    },
    {
      id: 5,
      name: 'Pokédex',
      description: 'University project currently in development, carried out in a group of three. We developed a website that functions as a Pokédex. Users can search for a Pokémon to access its profile with all its characteristics, using data retrieved from an API.',
      stack: ['PHP', 'Laravel'],
    },
    {
      id: 6,
      name: 'Bookshelf',
      description: `University project developed in 36 hours in collaboration with students from the BUT MMI program. It is a website where users can create "Choose Your Own Adventure" stories, allowing for different choices that lead to various endings.`,
      stack: ['PHP', 'Laravel', 'HTML/CSS'],
    }
  ]
  
  const skills = [
    'HTML',
    'CSS',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'NextJS',
    'Redux',
    'JAVA',
    'Spring',
    'PHP',
    'Laravel',
    'Git',
    'CI/CD',
  ]
  
  export {projects, skills}