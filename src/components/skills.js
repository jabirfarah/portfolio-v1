<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>


const skills = () => {
  return (
    <>
    <section className='d-flex justify-content-center mx-5 a-section'>
        <div className='section-title mx-5'>Skills</div>
        <div className='w-100 section-content'>
            <div className='d-sm-flex actual-section-content'>
                <div className='px-4'>
                    <div className='fw-bold'>Languages</div>
                    <ul className='skill-cate p-0'>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>HTML</li>
                        <li>CSS/Sass</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>R</li>
                        <li>Swift</li>
                    </ul>
                </div>
                <div className='px-4 '>
                    <div className='fw-bold'>Frameworks</div>
                    <ul className='skill-cate p-0'>
                        <li>React</li>
                        <li>Node</li>
                        <li>Wordpress</li>
                        <li>SwitftUI</li>
                    </ul>
                </div>
                <div className='px-4 '>
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
                
            </div>
        </div>
    </section>
    </>
  );
}

export default skills