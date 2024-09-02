"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can I help you learn more about Stiliyan and his Resume?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">S</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:stiliyaniliev2705@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
                Stiliyan Iliev
              </h1>
              <p>
                  Enthusiastic and detail-oriented 
                  individual aspiring to kickstart 
                  a career as a .NET Junior Developer,
                  bringing a passion for coding and
                  problem-solving. Eager to contribute 
                  my skills and knowledge in acollaborative 
                  team environment while continuously 
                  learning and growing as a professional.
              </p>
              <div className="call-to-action">
                <a href="Stiliyan Iliev - Resume.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:stiliyaniliev2705@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/StiliyanIliev27">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/stiliyan-iliev-55879a295/">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="imgs/stiliyan_iliev.png" alt="Stiliyan Iliev" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
            <img src="imgs/csharp.png" alt="CSharp" width="128"/>
                    <img src="imgs/sql.png" alt="SQL" width="128"/>
                    <img src="imgs/html.png" alt="HTML" width="128"/>
                    <img src="imgs/css.png" alt="CSS" width="128"/>      
                    <img src="imgs/javascript.png" alt="JS" width="128"/>
                    <img src="imgs/typescript.png" alt="TS" width="128"/>
                    <img src="imgs/react.png" alt="React" width="128"/>
                    <img src="imgs/angular.png" alt="Angular" width="128"/>
                    <img src="imgs/azure.png" alt="Azure" width="128"/>
                    <img src="imgs/docker.png" alt="Docker" width="128"/>
                    <img src="imgs/git.png" alt="Git" width="128"/>
                    <img src="imgs/vsstudio.png" alt="VS" width="128"/>
                    <img src="imgs/vscode.png" alt="VSCode" width="128"/>
                    <img src="imgs/csharp.png" alt="CSharp" width="128"/>
                    <img src="imgs/sql.png" alt="SQL" width="128"/>
                    <img src="imgs/html.png" alt="HTML" width="128"/>
                    <img src="imgs/css.png" alt="CSS" width="128"/>      
                    <img src="imgs/javascript.png" alt="JS" width="128"/>
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
                <h3>Backend</h3>
                <ul>
                    <li>C#</li>
                    <li>ASP.NET</li>
                    <li>SQL Server</li>
                </ul>
                <h3>Frontend</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <h3>DevOps</h3>
                <ul>
                    <li>Azure</li>
                    <li>Docker</li>
                </ul>
            </div>
            <div className="right-column">
                <h3>A bit about me</h3>
                    <p>
                        Hi I'm Stiliyan, a passionate Junior .NET Developer with a strong 
                        foundation in creating efficient, scalable, and user-friendly applications.
                        My journey in software development has been fueled by a love for 
                        problem-solving and a keen interest in building innovative solutions 
                        that make a difference.
                    </p>
                    <p>
                        Currently, I am attending the Tech Lead and Intern Academy at SoftUni, 
                        where I am working on a real-world project for a client over a period 
                        of three months. This experience involves collaboration within a team 
                        comprising four front-end developers, three back-end developers, 
                        a UX/UI designer, and our team leader.
                    </p>
            </div>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>
              Previous
            </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
                <a href="https://github.com/StiliyanIliev27/BookingSystem?tab=readme-ov-file" className="bento-item">
                    <img src="imgs/booking-system.png" alt="Booking System" width="100%"/>
                </a>
                <a href="https://github.com/StiliyanIliev27/EShopMicroservices" className="bento-item">
                    <img src="imgs/microservices.png" alt="Microservices" width="100%"/>
                </a>
                <a href="https://github.com/StiliyanIliev27/js-projects/tree/main/Weather-App" className="bento-item">
                    <img src="imgs/weather-app.png" alt="Weather-App" width="100%"/>
                </a>
                <a href="https://github.com/StiliyanIliev27/Classify?tab=readme-ov-file" className="bento-item">
                    <img src="imgs/classify.png" alt="Classify" width="100%"/>
                </a>
                <a href="#" className="bento-item">
                    Project 5
                </a>
                <a href="#" className="bento-item">
                    Project 6
                </a>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
                    <h3>Azure AI Chatbot</h3>
                    <p>
                        I've put together a chatbot here which knows all my skills,
                        work experience and has a copy of my CV/Resume. You can use it
                        to ask questions about me to get a better idea of who I am and 
                        what I've done.
                    </p>
                    <p>
                        You can also download my resume here if you want to take a look
                        at it. I'm currently looking for new opportunities so if you have 
                        a project you think I'd be a good fit for, please get in touch!
                    </p>
                    <a href="Stiliyan Iliev - Resume.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Hey Stiliyan, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
