import { FC } from 'react'
import projdata from './assets/projects.json'

interface Project{
  title: string;
  url: string;
  img: string;
  desc: string;
  alttext: string;
}

interface Props {
  projects: Project[];
  id: number;
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
      <ProjectCard projects={projectdata} id={ 0 }/>
      <ProjectCard projects={projectdata} id={ 1 }/>
      <ProjectCard projects={projectdata} id={ 2 }/>
      <ProjectCard projects={projectdata} id={ 3 }/>
    </main>
    <nav className="sidebar">
      <a target="_blank" href="https://www.linkedin.com/in/adamirichardson" aria-label="Link opens new tab">LinkedIn</a>
      <a target="_blank" href="https://github.com/AIrvenRichardson" aria-label="Link opens new tab">Github</a>
    </nav>
    </>
  );
};

const ProjectCard: React.FC<Props> = ({ projects, id }) => {
  return (
  <article className='projectcard'>
    <h2>{ projects[id].title }</h2>
    <div className='thumb'>
      <a className='thumblink' target='_blank' href={ projects[id].url }>
        <img className='scalableimg' src={ projects[id].img } alt={ projects[id].alttext } ></img>
      </a>
    </div>
    <p>{ projects[id].desc }</p>
  </article>
  );
}

export default App;

