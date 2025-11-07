import logo from './logo.svg';
import './resume.css';

function App() {
  return (
     <div class="resume-container">
      <div className='Top-container'>
          <header class="header">
                    <h1 className='title-name'> Ramu Banda </h1>
                    <p>Hyderabad, Telangana,500008 | 8179631116 |rambanda1143@gmail.com </p>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/in/ramu-banda-83aa5224a/">https://www.linkedin.com/in/ramu-banda-83aa5224a/</a>
                        </div>
                    <div>
                        <a target="_blank"  href="https://github.com/rambanda1143">https://github.com/rambanda1143</a></div>

                </header>
            
                  <div class="career-objective">
                    
                    <h3 class="objective-heading">Career Objective:</h3>
                   
                    <p class="objective-details">

                            Aspiring Full Stack Developer with a strong foundation in React.js,
                            Node.js, and RESTful APIs,
                            complemented by hands-on experience in developing responsive web applications and e-commerce platforms. 
                            Seeking a challenging role in a dynamic organization where I can apply my technical skills,
                            passion for clean code,and problem-solving ability to build scalable software
                                solutions while continuously growing as a developer.</p>


                   </div>

         </div>
                
            <div className='edu-skill'>
               
                 <div class="Education-card">
                    <h2 className='objective-heading'>EDUCATION </h2>
                    
                    <div class="acadamic">
                        <div class="acadamic-clg">
                            <h4>Aurors's pg college pangagutta,Hyderabad</h4>
                                <h4>2020-2022</h4>
                        </div>
                        <p>MCA (Master of Computer Application)_Computer Applications</p>
                    
                    </div>

                    <div  class="acadamic">
                        <div class="acadamic-clg">
                            <h4>Goverment degree college chevella,Rangareddy</h4>
                                <h4>2017-2020</h4>
                        </div>
                        <p>BSC(Bachelor of Science)Mathematics,Physics,Computers(MPCS)</p>
                    
                    </div>
                    <div  class="acadamic">
                        <div class="acadamic-clg">
                            <h4>Vivekananda jr college chevella,Rangareddy</h4>
                                <h4>2014-2016</h4>
                        </div>
                        <p>MCA (Master of Computer Application)_Computer Applications</p>
                    
                    </div>

                    <div  class="acadamic">
                        <div class="acadamic-clg">
                            <h4>ZPHS Kandawada,chevella,Rangareddy</h4>
                                <h4>2013-2014</h4>
                        </div>
                        <p>Secondary School Of Certificate </p>
                    
                    </div>

                
                 </div>

               

                 <div class="skills">
                <div class="title">
                    <h3 className='title-name'>SKILLS</h3>
                </div>
                
                <div>
                    <p><span className='title-name'>Frontend: </span> HTML, CSS, Bootstrap, JavaScript, React.js</p>
                    <p><span className='title-name'>Backend: </span> Python, Express, Node.js </p>
                    <p><span className='title-name'>Databases: </span> SQLite,mongoDb</p>
                    <p><span className='title-name'>Other: </span> OOPS,Computer Network</p>

            </div>
          </div>

           
          
            </div>

               
   

            
            <div class="project-details">

               <h2 className='objective-heading'>PROJECTS</h2>  
                
             <div class="project-card">     
                
                <div class="project-title-details">
                    <div class="project-title-card">
                      <h3 class="project-title" >Nxt Trendz(ECommerce Clone-Amazon,Flipkart) </h3>
                    </div>
                    <div class="project-link">
                        (<a target="_blank"  href="https://nxttrendzappbuy.ccbp.tech">nxttrendzappbuy.ccbp.tech</a>)</div>
                  </div>
            
                 <div class="project-inspired">
                    <p class="project-inspired-details">Created a modern e-commerce experience with a design inspired by Amazon and Flipkart.</p>
                   </div>
                       <div class="project-tools-details">
                            <ul class="project-tool-list">
                                <li class="project-tool">Implement pages for Login,Products,and Product details with React Router, React Components,and form inputs.</li>
                                <li class="project-tool">  Secured user data with JWT Tokens,REST API calls , Local Storage, Authorization, Authentication.
                             </li>    
                            </ul>
                    
                   <p><span class="technology">Technologies Used :</span>HTML,CSS,JavaScript,ReactJS,BootStrap </p>
                  </div>
               </div>
             
             <div class="project-card">           
              <div class="project-title-details">
                <div class="project-title-card">
                  <h3 class="project-title">IPL Dashboard </h3>
                  </div>
                  <div>(<a target="_blank"  href="https://iplmatches12.ccbp.tech">iplmatches12.ccbp.tech</a>)</div>
                </div>
            
                 <div class="project-inspired">
                    <p class="project-inspired-details">Designed a one-stop destination for IPL team and match information.</p>
                   </div>
                       <div class="project-tools-details">
                       <ul class="project-tool-list">
                        <li class="project-tool">	Navigated effortlessly with React Router, displaying team information and matches with dynamic REST API calls.</li>
                        <li class="project-tool">	Accounted for invalid routes with a 404 page.</li>
                      </ul>
                   
                   <p><span class="technology">Technologies used:</span>HTML,CSS,JavaScript,ReactJS,BootStrap </p>
                  </div>
            

               </div>


               <div class="project-card">

                <div class="project-title-details">
                <div class="project-title-card">
                    <div> 
                        <h3 class="project-title">FETCH API Status</h3>
                    </div>
                     <div>(<a target="_blank"  href="https://routefeltch19.ccbp.tech">routefeltch19.ccbp.tech</a>)</div>
                 </div>
            
                   

                </div>
                <div class="project-tool-list">
                     <p class="project-tool">Multiple times we should be Fetch data based on API Status</p>
                 </div>
                <div> <p><span class="technology">Technologies used:</span>HTML,CSS,JavaScript,ReactJS,BootStrap,NodeJs </p>
                </div>
           
            </div>

        </div>

     
         

        
        </div>
  );
}

export default App;
