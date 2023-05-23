

const projects = () => {
  return (

    <section className='a-section'>
        <div className='section-title mx-5'>Projects</div>
        <div className='section-content'>
            <div className='project mb-4'>
                <div className='project-name d-flex'>
                    <a href="https://github.com/jabirfarah/henry-discord-bot" target="_blank" rel="noreferrer" class="link-arrow">Geographical Discord Bot <i class="fas fa-arrow-right mx-1"></i></a>
                </div>
                <p className="project-desc">A Hackathon project with a fully featured Discord geography bot featuring several games to play. </p>
                <div className="project-buttons">
                    <span className="btn btn-sm btn-outline-light mx-1">Python</span>
                    <span className="btn btn-sm btn-outline-light mx-1">Discord API</span>
                </div>
            </div>
            <div className='project mb-4'>
                <div className='project-name d-flex'>
                    <a href="#" class="link-arrow" target="_blank" rel="noreferrer">Tutorship <i class="fas fa-arrow-right mx-1"></i></a>
                </div>
                <p className="project-desc">A virtual tutoring platform that connects students and experts in their related fields.</p>
                <div className="project-buttons">
                    <span className="btn btn-sm btn-outline-light mx-1">React</span>
                    <span className="btn btn-sm btn-outline-light mx-1">Wordpress</span>
                </div>
            </div>
            <div className='project mb-4'>
                <div className='project-name d-flex'>
                    <a href="https://github.com/jabirfarah/MazeMathics" target="_blank" rel="noreferrer" class="link-arrow">MazeMathics <i class="fas fa-arrow-right mx-1"></i></a>
                </div>
                <p className="project-desc">A hackathon project from a math themed hackathon. It's multiplayer math puzzle game where you need to move blocks in order to solve equations. </p>
                <div className="project-buttons">
                    <span className="btn btn-sm btn-outline-light mx-1">Node.js</span>
                    <span className="btn btn-sm btn-outline-light mx-1">HTML</span>
                    <span className="btn btn-sm btn-outline-light mx-1">CSS/Sass</span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default projects