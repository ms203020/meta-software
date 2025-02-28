import './style.css';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
   
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      if (!document.querySelector('.goog-te-combo')) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'ar,en,es,fr,de,it,ja,zh-CN,zh-TW' },
          'google_translate_element'
        );
      }
    };

    
    let skillsSection = document.querySelector(".our-skills");
    let progressBars = document.querySelectorAll(".progress-bar");
    let percentages = document.querySelectorAll(".percentage");
    let hasAnimated = false;

    function animateProgressBars() {
      if (skillsSection && !hasAnimated && skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        progressBars.forEach((bar, index) => {
          let targetWidth = bar.getAttribute("data-width");
          bar.style.width = "0%"; 

          setTimeout(() => {
            bar.style.width = targetWidth + "%"; 
          }, 100);

         
          let counter = 0;
          let targetValue = parseInt(percentages[index].getAttribute("data-value"));
          let interval = setInterval(() => {
            if (counter >= targetValue) {
              clearInterval(interval);
            } else {
              counter++;
              percentages[index].textContent = counter + "%";
            }
          }, 25);
        });
        hasAnimated = true;
      }
    }

    
    window.addEventListener("scroll", animateProgressBars);

   
    return () => {
      window.removeEventListener("scroll", animateProgressBars);
      delete window.googleTranslateElementInit; 
    };
  }, []);
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
  };

  return (
    <div className="App">
      <header className="header" id="header">
        <div className="container">
          <a className="logo" href="#Meta Software">Meta Software</a>
          <ul className="main-nav">
            <li><a href="#articles">articles</a></li>
            <li><a href="#Control panel">Control panel</a></li>
            <li><a href="#features">features</a></li>
            <li className="other-links">
              <a href="#links">other links</a>
              <div className="mega-menu">
                <div className="image">
                  <img decoding="async" src="./images/megamenu.png" alt="" />
                </div>
                <ul className="links">
                  <li><a href="#testimonials"><i className="far fa-comments fa-fw"></i> testimonials</a></li>
                  <li><a href="#team-members"><i className="far fa-user fa-fw"></i> team members</a></li>
                  <li><a href="#service"><i className="far fa-building fa-fw"></i> service</a></li>
                  <li><a href="#our-skills"><i className="far fa-check-circle fa-fw"></i> our skills</a></li>
                  <li><a href="#how-it-work"><i className="far fa-clipboard fa-fw"></i> how it work</a></li>
                </ul>
                <ul className="links">
                  <li><a href="#events"><i className="far fa-calendar-alt fa-fw"></i> events</a></li>
                  <li><a href="#pricing-plans"><i className="fas fa-server fa-fw"></i> pricing plans</a></li>
                  <li><a href="#videos"><i className="far fa-play-circle fa-fw"></i> top-video</a></li>
                  <li><a href="#stats"><i className="far fa-chart-bar fa-fw"></i> stats</a></li>
                  <li><a href="#discount"><i className="fas fa-percent fa-fw"></i> request a discount</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <div id="google_translate_element"></div>
        </div>
      </header>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >

      <div class="landing">
        <div class="container">
          <div class="text">
            <br />
            <h1>
            <TypeAnimation
              sequence={[
                'Welcome, To Meta Software World', 
                1000, 
              ]}
              wrapper="span"
              speed={50} 
              repeat={0} 
            />
          </h1>

            <p>Here you will find all kinds of programming solutions, all development and creation of websites,
              applications and systems, and all repair of technological problems.
            </p>
          </div>
          <div class="image">
            <img src="./images/Hafezz.png" width="600" height="378" alt="صورة" />

          </div>
        
        </div>
      </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="services" id="service">
        <h2 class="main-title">services</h2>
        <div class="container">
          <div class="box">
            <i class="fas fa-user-shield fa-4x"></i>
            <h3>Security</h3>
            <div class="info">
              <a href="https://metasoftware.eg/Security_Meta_Software/index.html">Let's get to work</a>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-tools fa-4x"></i>
            <h3>Fixing Issues</h3>
            <div class="info">
              <a href="https://metasoftware.eg/Fixing_Issues_Services_Agreement/index.html">Let's get to work</a>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-globe fa-4x"></i>
            <h3>Domains</h3>
            <div class="info">
              <a href="https://metasoftware.com.eg/cart.php?a=add&domain=register">Let's get to work</a>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-laptop-code fa-4x"></i>
            <h3>Codes</h3>
            <div class="info">
              <a href="https://metasoftware.eg/Programming_Services_Agreement/index.html">Let's get to work</a>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-server fa-4x"></i>
            <h3>Hosting</h3>
            <div class="info">
              <a href="https://metasoftware.eg/pages/Hosting_Meta_Software/index.html">Let's get to work</a>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-photo-video fa-4x"></i>
            <h3>Graphics</h3>
            <div class="info">
              <a href="https://metasoftware.eg/Graphics_Services_Agreement/index.html">Let's get to work</a>
            </div>
          </div>
                    <div class="box">
            <i class="fas fa-photo-video fa-4x"></i>
            <h3>Electronic signature</h3>
            <div class="info">
              <a href="https://metasoftware.eg/Graphics_Services_Agreement/index.html">Let's get to work</a>
            </div>
          </div>
                    <div class="box">
            <i class="fas fa-photo-video fa-4x"></i>
            <h3>Electronic invoices</h3>
            <div class="info">
              <a href="https://metasoftware.eg/Graphics_Services_Agreement/index.html">Let's get to work</a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="pricing" id="pricing-plans">
       
        <h2 class="main-title">Meta plans</h2>
        <div class="container">
          <div class="box">
            <h3>Warm Up</h3>
            <img src="./images/hosting-basic.png" alt="" />
            <div class="price">
              <span> 3449 EGP</span>
              <span>year</span>
            </div>
            <ul>
              <li>Domain Name</li>
              <li>Web Hosting Economy</li>
              <li>Website Builder</li>
              <li>Basic SSL Certificate</li>
              <li>2 professional Business E-mail Standard</li>
            </ul>
            <a href="https://metasoftware.com.eg/index.php/store/go-digital/warm-up">Choose Plan</a>
          </div>
          <div class="box popular">
            <div class="label">Most Popular</div>
            <h3>Ramp Up</h3>
            <img src="./images/hosting-advanced.png" alt="" />
            <div class="price">
              <span> 4449 EGP </span>
              <span>year</span>
            </div>
            <ul>
              <li>Domain Name</li>
              <li>Web Hosting plus</li>
              <li>Website Builder</li>
              <li>Basic SSL Certificate</li>
              <li>2 professional Business E-mail plus</li>
            </ul>
            <a href="https://metasoftware.com.eg/index.php/store/go-digital/ramp-up">Choose Plan</a>
          </div>
          <div class="box">
            <h3>Take Off</h3>
            <img src="./images/hosting-professional.png" alt="" />
            <div class="price">
              <span> 5449 EGP </span>
              <span>year</span>
            </div>
            <ul>
              <li>Domain Name</li>
              <li>Web Hosting Ultimate</li>
              <li>Website Builder</li>
              <li>Basic SSL Certificate</li>
              <li>2 professional Business E-mail Premium</li>
            </ul>
            <a href="https://metasoftware.com.eg/index.php/store/go-digital/take-off">Choose Plan</a>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="articles" id="articles">
        <h2 class="main-title">Articles</h2>
        <div class="container">
            <div class="box">
                <img src="./images/ALTSHWER.png" alt="Consultation and Outsourcing" />
                <div class="text">
                    <h3>CONSULTATION AND OUTSOURCING</h3>
                    <p>Meta Software drives organizational and business transformation to improve performance and effectiveness, delivering customized solutions that drive innovation and growth in markets.</p>
                </div>
            </div>
            <div class="box">
                <img src="./images/PROJECT.png" alt="Project Management" />
                <div class="text">
                    <h3>PROJECT MANAGEMENT</h3>
                    <p>Meta Software provides project management services to achieve smooth corporate transition and enhance satisfaction and profitability, from requirements analysis to planning and managing major projects, and providing specialized consulting.</p>
                </div>
            </div>
            <div class="box">
                <img src="./images/IT.png" alt="IT Outsourcing Services" />
                <div class="text">
                    <h3>IT OUTSOURCING SERVICES</h3>
                    <p>Meta Software provides IT outsourcing services, helping business managers maintain strategic control while reducing costs and risks.</p>
                </div>
            </div>
            <div class="box">
                <img src="./images/BUSINESS.png" alt="Business Process Automation" />
                <div class="text">
                    <h3>BUSINESS PROCESS AUTOMATION & INTEGRATION SERVICES</h3>
                    <p>Meta Software applies business automation standards to support all business aspects, transforming organizations into a powerful digital presence while enabling effective sales and affiliate channel management.</p>
                </div>
            </div>
            <div class="box">
                <img src="./images/TECHNOLOGY.png" alt="Technology Solution Provider" />
                <div class="text">
                    <h3>TECHNOLOGY SOLUTION PROVIDER</h3>
                    <p>Meta Software creates high-performance IT solutions that enhance efficiency, increase productivity, and boost profits.</p>
                </div>
            </div>
            <div class="box">
                <img src="./images/PLANNING.png" alt="Enterprise Information Strategy" />
                <div class="text">
                    <h3>ENTERPRISE INFORMATION STRATEGY PLANNING</h3>
                    <p>Meta Software believes that smart decisions are the foundation for outstanding performance, and its strategy begins with identifying customer needs and developing sustainable solutions.</p>
                </div>
            </div>
            <div class="box">
                <img src="./images/ENTERPRISE.png" alt="Enterprise Applications Development" />
                <div class="text">
                    <h3>ENTERPRISE APPLICATIONS DEVELOPMENT</h3>
                    <p>Meta Software helps companies improve application performance and achieve better business outcomes by providing flexible, integrated solutions that meet business needs.</p>
                </div>
            </div>
            <div class="box">
                <img src="./images/OPERATION.png" alt="Operation & Implementation Services" />
                <div class="text">
                    <h3>OPERATION & IMPLEMENTATION SERVICES</h3>
                    <p>Meta Software offers comprehensive services covering the entire product lifecycle, ensuring solutions are planned, implemented and operated efficiently and effectively.</p>
                </div>
            </div>
        </div>
    </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="features" id="features">
        <h2 class="main-title">features</h2>
        <div class="container">
          <div class="box quality">
            <div class="image">
              <img src="./images/yes.webp" alt="" />
            </div>
            <h2>Quality</h2>
            <p>We adhere to the highest quality standards to ensure the excellence of your services.</p>
            <a href="https://metasoftware.eg/pages/Quality.html">more</a>
          </div>
          <div class="box time">
            <div class="image">
              <img src="./images/time.jpg" alt="" />
            </div>
            <h2>time</h2>
            <p>We value your time and are keen to provide technical solutions as quickly as possible.</p>
            <a href="https://metasoftware.eg/pages/time_services.html">more</a>
          </div>
          <div class="box passion">
            <div class="image">
              <img src="./images/features-01.jpg" alt="" />
            </div>
            <h2>Passion</h2>
            <p>Our passion for technology drives us to deliver innovative services that inspire your success.</p>
            <a href="https://metasoftware.eg/pages/Passion.html">more</a>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="testimonials" id="testimonials">
        <h2 class="main-title">testimonials</h2>
        <div class="container">
          <div class="box">
            <img src="./images/hassan.jpg" alt="" />
            <h3>Hassan Omar El Ghawanim </h3>
            <span class="title">Judge at Giza Court</span>
            <div class="rate">
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Honestly, my experience with Meta Software was great! The interface is smooth and easy to use, and
              all the services I needed were clear and available. Browsing the site was fast and I didn't
              encounter any technical issues. What I liked most was the quick technical support and response to my
              inquiries. If you are looking for software solutions or hosting, I highly recommend trying them!
            </p>
          </div>
          <div class="box">
            <img src="./images/amer.jpg" alt="" />
            <h3>Amer Hameda</h3>
            <span class="title">Businessman in the Egyptian Stock Exchange</span>
            <div class="rate">
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Meta Software is really professional! Everything is well organized and easy to access. What caught
              my attention the most was the variety of services provided and the attention to detail. I was able
              to accomplish the tasks I needed easily, and the technical support was very helpful and always
              available. A great user experience and I recommend everyone to use their services
            </p>
          </div>
          <div class="box">
            <img src="./images/mansy.jpg" alt="" />
            <h3>Mohamed Mansy</h3>
            <span class="title">Owner of Al Amer Real Estate Development Company</span>
            <div class="rate">
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Meta Software exceeded my expectations in terms of speed and quality! My requests were completed in
              record time without any impact on the quality of service. Professionalism is evident in every step,
              whether in the speed of response or the execution of tasks. A wonderful experience and worth
              repeating
            </p>
          </div>
          <div class="box">
            <img src="./images/samir.png" alt="" />
            <h3>Ahmed Samir</h3>
            <span class="title">Owner of Al Mansi Group </span>
            <div class="rate">
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
            </div>
            <p>
              Meta Software's hosting services are excellent in every way! The servers are fast and stable, and I
              haven't experienced any outages or technical issues. Additionally, the prices are very reasonable
              considering the high quality they provide. Customer support is always ready to help, which makes my
              experience with them more comfortable and professional. I highly recommend them to anyone looking
              for reliable hosting.
            </p>
          </div>
          <div class="box">
            <img src="./images/meki.jpg" alt="" />
            <h3>Ahmed Meki </h3>
            <span class="title">Networks Engineer </span>
            <div class="rate">
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>
              Dealing with the Meta Software team was more than wonderful! The respect and professionalism in
              communication made me feel like a special customer. The support team is very helpful, answers all my
              inquiries quickly and patiently, and provides effective solutions to all my needs. An experience
              full of trust and comfort, and I look forward to dealing with them always
            </p>
          </div>
          <div class="box">
            <img src="./images/fawzy.png" alt="" />
            <h3>Mahmoud Fawzy </h3>
            <span class="title">Artificial Intelligence Developer</span>
            <div class="rate">
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>

            </div>
            <p>
              Meta Software is a strong and reliable company in every sense of the word! They have clear expertise
              in their field, and provide advanced solutions that meet the needs of customers with the highest
              quality standards. What distinguishes them is their commitment to efficiency and innovation, which
              makes them one of the best companies in the field of software and technical services. Proud to deal
              with them.
            </p>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="our-skills" id="our-skills">
        <h2 class="main-title">OUR SKILLS</h2>
        <div class="container">
          <img src="./images/skills.png" alt="Skills Image" />
          <div class="skills">
            <div class="skill">
              <h3>HTML & CSS & JAVASCRIPT <span class="percentage" data-value="97">0%</span></h3>
              <div class="the-progress">
                <span class="progress-bar" data-width="97"></span>
              </div>
            </div>
            <div class="skill">
              <h3>PYTHON & JAVA & PHP & SQL & DATABASES <span class="percentage" data-value="97">0%</span></h3>
              <div class="the-progress">
                <span class="progress-bar" data-width="97"></span>
              </div>
            </div>
            <div class="skill">
              <h3>Flutter(Dart) & C++ & Rust & Swift & Kotlin <span class="percentage" data-value="97">0%</span>
              </h3>
              <div class="the-progress">
                <span class="progress-bar" data-width="97"></span>
              </div>
            </div>
            <div class="skill">
              <h3>BOOTSTRAP & REACT.JS & ANGULAR.JS & VUE.JS <span class="percentage" data-value="98">0%</span>
              </h3>
              <div class="the-progress">
                <span class="progress-bar" data-width="98"></span>
              </div>
            </div>
            <div class="skill">
              <h3>FIGMA & PHOTOSHOP & ADOBE.XD <span class="percentage" data-value="98">0%</span></h3>
              <div class="the-progress">
                <span class="progress-bar" data-width="98"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
         <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
        >
      <div className="content">
      
        <h2 className="text-center text-3xl font-bold mb-10">How It Works</h2>
        
       
        <div className="mb-10 flex justify-center">
          <img 
            src="/images/work-steps.png" 
            alt="Work Steps" 
            className="max-w-full h-auto"
          />
        </div>
        
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
         
          <div className="box bg-white rounded-lg shadow-md shadow-sky-600 overflow-hidden transition-transform hover:scale-105 flex flex-col">   <div className="h-70 overflow-hidden">
              <img 
                src="/images/work-steps-1.png" 
                alt="Business Analysis" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text p-4">
              <h3 className="text-lg font-bold mb-1 text-gray-800">Business Analysis</h3>
              <p className="text-sm text-gray-600">
                Meta Software is the cornerstone for understanding and analyzing business needs to transform
                them into effective solutions that support the achievement of strategic goals and ensure
                sustainable success.
              </p>
            </div>
          </div>
          
          
          <div className="box bg-white rounded-lg shadow-md shadow-sky-600 overflow-hidden transition-transform hover:scale-105 flex flex-col">
            <div className="h-70 overflow-hidden">
              <img 
                src="/images/work-steps-2.png" 
                alt="Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text p-4">
              <h3 className="text-lg font-bold mb-1 text-gray-800">Architecture</h3>
              <p className="text-sm text-gray-600">
                Meta Software is the foundation upon which software systems are built, ensuring an organized
                and scalable design while balancing performance and flexibility to meet future business
                needs.
              </p>
            </div>
          </div>
          
         
          <div className="box bg-white rounded-lg shadow-md shadow-sky-600 overflow-hidden transition-transform hover:scale-105 flex flex-col">
            <div className="h-70 overflow-hidden">
              <img 
                src="/images/work-steps-3.png" 
                alt="Development" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text p-4">
              <h3 className="text-lg font-bold mb-1 text-gray-800">Development</h3>
              <p className="text-sm text-gray-600">
                Meta Software is the creative process that transforms ideas into innovative software
                solutions, combining technology and professionalism to meet user needs and achieve business
                goals.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      </motion.div>
    </div>
    <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="videos" id="videos">
        <h3 class="main-title">Top Videos</h3>
        <div class="container">
          <div class="box">
            <div class="list">
              <div class="title">
                <h3>Top Videos</h3>
                <i class="fas fa-random"></i>
              </div>
              <ul>
                <li onclick="playVideo('videos/video1.mp4', 'How To Create Sub Domain')">How To Create Sub
                  Domain <span>05:18</span></li>
                <li onclick="playVideo('./videos/video2.mp4', 'Playing With The DNS')">Playing With The DNS
                  <span>03:18</span>
                </li>
                <li onclick="playVideo('videos/video3.mp4', 'Everything About The Virtual Hosts')">Everything
                  About The Virtual Hosts <span>05:25</span></li>
                <li onclick="playVideo('videos/video4.mp4', 'How To Monitor Your Website')">How To Monitor Your
                  Website <span>04:16</span></li>
                <li onclick="playVideo('videos/video5.mp4', 'Uncharted Beating The Last Boss')">Uncharted
                  Beating The Last Boss <span>07:48</span></li>
                <li onclick="playVideo('videos/video6.mp4', 'Ys Oath In Felghana Overview')">Ys Oath In Felghana
                  Overview <span>03:12</span></li>
                <li
                  onclick="playVideo('./videos/video7.mp4', 'How to request a programming services agreement')">
                  How to request a programming services agreement<span>08:10</span></li>
              </ul>
            </div>
            <div class="preview">
              <video id="videoPlayer" controls>
                <source src="videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p id="videoTitle">How To Create Sub Domain</p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="stats" id="stats">
        <h2>Our Awesome Status</h2>
        <div class="container">
          <div class="box">
            <i class="far fa-user fa-2x fa-fw"></i>
            <span class="number">300</span>
            <span class="text">Clients</span>
          </div>
          <div class="box">
            <i class="fas fa-code fa-2x fa-fw"></i>
            <span class="number">400</span>
            <span class="text">Projects</span>
          </div>
          <div class="box">
            <i class="fas fa-globe-asia fa-2x fa-fw"></i>
            <span class="number">12</span>
            <span class="text">Countries</span>
          </div>
          <div class="box">
            <i class="far fa-money-bill-alt fa-2x fa-fw"></i>
            <span class="number">500K</span>
            <span class="text">Money</span>
          </div>
        </div>
      </div>
      </motion.div>
      <motion.div
        className="welcome-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }} 
        variants={sectionVariants}
      >
      <div class="discount" id="deiscount">
        <div class="image">
          <div class="content">
            <h2>We Have A Disscount</h2>
            <p>
              Meta Software offers special discounts! At Meta Software, we provide innovative software solutions
              and unbeatable offers. Enjoy our current discounts on software development services, hosting
              solutions, and technical support. Our goal is to provide the best value while ensuring the highest
              quality.
            </p>
            <img decoding="async" src="./images/discount.png" alt="" />
          </div>
        </div>
        <div class="form">
          <div class="content">
            <h2>Request A Disscount</h2>
            <form action="#" method="post">
              <input class="input" type="text" placeholder="Your Name" name="name" required />
              <input class="input" type="email" placeholder="Your Email" name="email" required />
              <input class="input" type="text" placeholder="Your Phone" name="mobile" required />
              <textarea class="input" placeholder="Tell Us About Your Needs" name="message" required></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
      </motion.div>
      <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Meta Software</h3>
            <div className="flex justify-center sm:justify-start space-x-4 mb-4">
              <a href="https://www.facebook.com/share/19wsZuVhd4/" 
                className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/metasoftware.eg?igsh=YzhxYjM5dGk1MGZs" 
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/m-softawre2030/" 
                className="bg-blue-700 hover:bg-blue-800 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/+201500072001" 
                className="bg-green-600 hover:bg-green-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="mailto:RM@metasoftware.eg" 
                className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Here with Meta Software you will find all kinds of programming solutions, all development and
              creation of websites, applications and systems, and all repair of technological problems.
            </p>
          </div>

        
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Important Links</h3>
            <ul className="space-y-2">
              {[...Array(10)].map((_, i) => (
                <li key={i} className="transition-transform duration-300 hover:translate-x-2">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Important Link {i + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-center sm:justify-start">
                <div className="text-primary mr-3 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-gray-400 text-left">
                  Egypt, Giza, 26th of July Axis - Mall of Arabia - Meta Software Company October - Giza
                </span>
              </div>
              <div className="flex items-start justify-center sm:justify-start">
                <div className="text-primary mr-3 mt-1">
                  <i className="far fa-clock"></i>
                </div>
                <span className="text-gray-400">Business Hours: From 10:00 To 21:00</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="text-primary mr-3">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <a href="tel:+201500072001" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +20 150 007 2001
                </a>
              </div>
            </div>
          </div>

        
          <div className="mb-6 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Payment Methods</h3>
            <div className="grid grid-cols-3 gap-4 mx-auto sm:mx-0 max-w-xs sm:max-w-none">
              {['visa', 'valu', 'mastercard', 'instapay', 'fawry', 'aman'].map((item, index) => (
                <a key={index} href="#" className="bg-white rounded-lg p-2 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                  <img 
                    src={`/images/${item}${item === 'fawry' || item === 'aman' ? '.jpg' : '.png'}`} 
                    alt={`${item} payment method`} 
                    className="max-h-10 w-auto object-contain" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500">&copy;2025 Meta Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
