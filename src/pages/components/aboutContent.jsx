function AboutContent() {
  return (
    <div className="about-content">
      <img className="me" src="src/assets/me.jpeg" alt="Portrait of Tom Warden" />
      <div className="about-text">
        <h1>About Me!</h1>

        <section>
          <h3>Background</h3>
          <p>
            After leaving school I went to the University of Highlands and Islands to study Music. After finishing my degree I jumped between jobs, struggling to find something I enjoyed.
            I found myself a 6 month bootcamp in Full Stack Development and from then on decided this was the path for me.
            I then decided to go back to education and get a Masters in Computer Science at the University of Dundee.
            I have always had an interest in computers and technology, so this felt like a natural step for me.
            Coming back has given me a newfound confidence in not only myself but my work.
          </p>
        </section>

        <section>
          <h3>Professional Interests</h3>
          <p>
            In industry and in my education I have always been UI focused. I enjoy making things easy on the eye and fun for the user!
            As well as this, I like making difficult aspects of the work environment easier.
            Finding creative solutions is important and I love when I get the opportunity to step outside the regular realms of thinking. For Frontend Web Development, React is my go to, I really enjoy building components, I think this is a great and organised way to work! For Backend or Software Development, python is my go to. I think the flexibility and ease of use is great, and I love the libraries that are available.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutContent;