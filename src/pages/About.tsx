const About = () => {
  return (
    <div style={{backgroundColor: 'lightblue', padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1 style={{color: 'darkblue', fontSize: '32px', marginBottom: '20px'}}>About Shapers</h1>
      <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '15px'}}>
        This is a simplified About page to test if the routing works.
      </p>
      <p style={{fontSize: '16px', color: '#666'}}>
        If you can see this page, then React Router is working correctly and the issue was with the complex components.
      </p>
      <nav style={{marginTop: '30px'}}>
        <a href="/" style={{color: 'blue', marginRight: '20px', textDecoration: 'underline'}}>Home</a>
        <a href="/programs" style={{color: 'blue', marginRight: '20px', textDecoration: 'underline'}}>Programs</a>
        <a href="/contact" style={{color: 'blue', textDecoration: 'underline'}}>Contact</a>
      </nav>
    </div>
  );
};

export default About;