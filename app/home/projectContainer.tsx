import '../globals.css'

interface Project {
  id: number;
  name: string;
  description: string;
  stack?: string[];
  sourceCode?: string;
  livePreview?: string;
}

const ProjectContainer = ({ project }: { project: Project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={item} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        target="_blank"
        aria-label='source code'
        className='link link--icon'
      >
        <img src="github.png" alt="github" height={30} width={30}/>
      </a>
    )}
  </div>
)

export default ProjectContainer