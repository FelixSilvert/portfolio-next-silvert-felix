import '../globals.css'

export default function About() {  
    return (
        <div className='about center'>

            <img src="profile-pic.webp" alt="pofilePic" height={300} width={300} loading="lazy"/>
            <h1>
                Hello 👋, I am Silvert Félix
            </h1>
        
            <h2 className='about__role'>Student in web development</h2>
  
            <div className='about__contact center'>
                <a href='/CV-SILVERT-Félix-2.pdf' target="_blank">
                    <button className="button-6">Resume</button>
                </a>

                <a
                    href='https://github.com/FelixSilvert'
                    target="_blank"
                    aria-label='github'
                    className='link link--icon'
                >
                <img src="github.webp" alt="github" height={30} width={30} loading="lazy"/>
                </a>

                <a
                    href='https://www.linkedin.com/in/felix-silvert/'
                    target="_blank"
                    aria-label='linkedin'
                    className='link link--icon'
                >
                <img src="linkedin.webp" alt="linkedin" height={40} width={40} loading="lazy"/>
                </a>
            </div>
        </div>
    )
}