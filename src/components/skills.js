<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>


const skills = () => {
  return (
    <>
    <section className='d-flex justify-content-center mx-5 a-section'>
        <div className='section-title mx-5'>Skills</div>
        <div className='w-100 section-content'>
            <div className='d-flex justify-content-between'>
                <div className='px-1'>
                    <div className='fw-bold'>Languages</div>
                    <ul className='skill-cate p-0'>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>HTML</li>
                        <li>CSS/Sass</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>R</li>
                    </ul>
                </div>
                <div className='px-1 '>
                    <div className='fw-bold'>Frameworks</div>
                    <ul className='skill-cate p-0'>
                        <li>
            <i class="devicon-adonisjs-original"></i>
          React</li>
                        <li>Node</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
                <div className='px-1 '>
                    <div className='fw-bold'>Tools</div>
                    <ul className='skill-cate p-0'>
                        <li>Bash</li>
                        <li>Github & Git</li>
                        <li>Chrome DevTools</li>
                        <li>Postman</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div className='px-1 '>
                    <div className='fw-bold'>Tools</div>
                    <ul className='skill-cate p-0'>
                        <li>Bash</li>
                        <li>Github & Git</li>
                        <li>Chrome DevTools</li>
                        <li>Postman</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default skills