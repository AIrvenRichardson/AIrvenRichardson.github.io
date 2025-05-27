import { FC } from 'react'
import projdata from './assets/projects.json'

interface Project {
  title: string;
  url: string;
  img: string;
  desc: string;
  alttext: string;
}

interface Props {
  projects: Project[];
}

const App: FC = () => {

  const projectdata: Project[] = projdata.projects;

  return (
    <>
    <main>
      <header>
          <h1>Hi, I'm Adam Richardson.</h1>
            <p>
              I got my B.S in computer science from the University of Denver. I enjoy making all sorts of things with code,
              from maybe useful or fun tools as well as games. This is my personal website, below are some of my projects.
              <br></br>
              <br></br>
              Made with Vite & React-ts!
            </p>
      </header>
      <h1>Projects - Click on the thumbnail to check them out!</h1>
      <ProjectList projects={projectdata}/>
    </main>
    <nav className="sidebar">
      <a target="_blank" href="https://www.linkedin.com/in/adamirichardson" aria-label="Link opens new tab">LinkedIn</a>
      <a target="_blank" href="https://github.com/AIrvenRichardson" aria-label="Link opens new tab">Github</a>
    </nav>
    </>
  );
};

const ProjectCard: React.FC<Project> = ({ title, url, img, desc, alttext }) => {
  return (
  <article className='projectcard'>
    <h2>{ title }</h2>
    <div className='thumb'>
      <a className='thumblink' target='_blank' href={ url }>
        <img className='scalableimg' src={ img } alt={ alttext } ></img>
      </a>
    </div>
    <p>{ desc }</p>
  </article>
  );
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      {projects.map((project : Project) => (
        <ProjectCard title={project.title} url={project.url} img={project.img} desc={project.desc} alttext={project.alttext}/>
      ))}
    </div>
  );
};

export default App;

