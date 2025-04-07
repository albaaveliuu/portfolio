const DesignerAnimation = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    {/* Monitor */}
    <path className="monitor" d="M100,100 L300,100 L300,250 L100,250 L100,100" />
    <path className="monitor" d="M80,250 L320,250 L320,270 L80,270 L80,250" />
    <path className="monitor" d="M180,270 L220,270 L220,290 L180,290 L180,270" />
    
    {/* Screen Content */}
    <path className="screen" d="M120,120 L280,120 L280,230 L120,230 L120,120" />
    <path className="screen" d="M140,140 L260,140 L260,160 L140,160 L140,140" />
    <path className="screen" d="M140,170 L220,170 L220,190 L140,190 L140,170" />
    
    {/* Desk */}
    <path className="desk" d="M50,290 L350,290 L350,310 L50,310 L50,290" />
    
    {/* Person */}
    <path className="person" d="M200,200 C200,180 220,170 240,170 C260,170 280,180 280,200" />
    <path className="person" d="M240,170 L240,220" />
    <path className="person" d="M220,240 L260,240" />
    <path className="person" d="M240,220 L220,240" />
    <path className="person" d="M240,220 L260,240" />
  </svg>
);

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <div className="left-content">
            <div className="designer-animation">
              <DesignerAnimation />
            </div>
          </div>
          <div className="right-content">
            <h1 className="name">Albenita Veliu</h1>
            <div className="title">
              <span>Graphic Web Designer</span>
              <span>2D Animator</span>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </div>
      {/* ... rest of the component ... */}
    </div>
  );
};

export default Home; 