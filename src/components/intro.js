import Resume from '../pdf/Jabir-Farah-Resume.pdf';
const intro = () => {
  return (
    <>
    {/* link to stylesheet is temporary solution, add it to dependancy later */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css?_cacheOverride=1684423996185" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></link>
    <header class="intro d-flex flex-column justify-content-around m-3">
        <h1 class="intro_hello">Hello! <span class="emoji wave-emoji-animation">👋</span></h1>
        <h2 class="intro-something">I'm <span class="name">Jabir Farah</span>, a full-stack engineer focused on building beautiful experiences through code 👨🏿‍💻</h2>
        <p><a class="fw-800 btn btn-outline-light btn-lg" href={Resume} target="_blank" rel="noreferrer">View Resume <i class="fas fa-arrow-right"></i></a></p>
    </header>
    </>
  )
}

export default intro