import '../globals.css'

export default function Contact() {
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:felix.silvert.04@gmail.com`}>
        <button className="button-6 contact__button">Email me</button>
      </a>
    </section>
  )
}