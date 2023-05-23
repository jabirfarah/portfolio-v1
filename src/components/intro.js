import Resume from '../pdf/Jabir-Farah-Resume.pdf';
const intro = () => {
  return (
    <>
    {/* link to stylesheet is temporary solution, add it to dependancy later */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css?_cacheOverride=1684423996185" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
    <header class="intro d-flex flex-column justify-content-around m-3">
        <h1 className="intro_hello">Hello! <span className="emoji wave-emoji-animation">👋</span></h1>
        <h2 className="intro-something">I'm <span className="name">Jabir Farah</span>, a full-stack engineer focused on building beautiful experiences through code 👨🏿‍💻</h2>
        <p><a className="fw-800 btn btn-outline-light btn-lg" href={Resume} target="_blank" rel="noreferrer">View Resume <i class="fas fa-arrow-right"></i></a></p>
        <div className="container">
          <a className="link linkedin" href='https://linkedin.com/in/jabirfarah'>
              <i className="fab fa-2x fa-linkedin"></i>
          </a>

          <a className="link github" href='https://github.com/jabirfarah'>
              <i className="fab fa-2x fa-github"></i>
          </a>
          
          <a className="link mail" href='mailto:jabirfarah0@gmail.com'>
            <i class="fa-2x fa fa-envelope"></i>
          </a>
        </div>
    </header>
    </>
  )
}

export default intro