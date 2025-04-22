import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Star, MapPin, Calendar, ChevronRight,
  Edit, Settings, LogOut, Mail, Globe
} from 'lucide-react';

function Freelancers() {
  // Pour l'affichage des clients inscrits (tous les clients récupérés du backend)
  const [clients, setClients] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
const phot = localStorage.getItem("photo") || "assets/images/icon123.jpg";
const user = JSON.parse(localStorage.getItem("client"));

useEffect(() => {
  if (!user) {
    // Si l'utilisateur n'est pas connecté ou n'est pas un client
    window.location.href = "/login";
  }
}, []);


  useEffect(() => {
    axios.get('http://localhost:8081/clients') // Vérifie que cette route est correcte sur ton backend
      .then(response => {
        console.log("Clients récupérés :", response.data);
        setClients(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des clients :', error);
      });
  }, []);

  // Récupère les informations du client connecté (dashboard personnalisé) depuis le localStorage
  const client = JSON.parse(localStorage.getItem("client"));
  return (
    <div>
      <header className="header1">
        <div className="header-content1">
          <nav className="nav1">
            <a href="/Homeclient" className="nav-link active1">Home</a>
          
            <a href="/messages" className="nav-link1">Messages</a>
          </nav>
          <div className="nav1">
            <button className="button button-outline1">
              <Settings size={18} />
              <a className="nav-link1" href="Editerclient">
                Setting
              </a>
            </button>
            <button className="button button-outline1 " >
              <LogOut size={18} />
              <a className="nav-link1" href="/">
                Disconnect
              </a>
            </button>
          </div>
        </div>
      </header>

      <div className="container1">
        <div className="grid1">
          {/* Sidebar : Dashboard Client */}
          <aside className="profile-sidebar1">
            <div className="profile-header1">
            <div style={{ position: 'relative', textAlign: 'center' }}>
  {/* Avatar en cercle */}
  <img
    src={phot}
    alt="photo user"
    className="profile-avatar1"

    style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #ccc'
    }}
  />

  {/* Bouton + */}
  <button
    onClick={() => setShowOptions(!showOptions)}
    style={{
      position: 'absolute',
      bottom: 0,
      right: 'calc(45% - 15px)',
      transform: 'translateX(45%)',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '45%',
      border: 'none',
      width: '30px',
      height: '30px',
      fontSize: '20px',
      cursor: 'pointer'
    }}
  >
    +
  </button>

  {/* Options menu */}
  {showOptions && (
    <div
      style={{
        position: 'absolute',
        top: '130px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        padding: '10px',
        zIndex: 10,
        textAlign: 'left'
      }}
    >
      {/* Ajouter / Modifier */}
      <label   className="button-outline1 " style={{ display: 'block', color: 'black', background: 'none', border: 'none', cursor: 'pointer' }} >
         Upload picture
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                localStorage.setItem("photo", reader.result);
                window.location.reload();
              };
              reader.readAsDataURL(file);
            }
          }}
          style={{ display: 'none' }}
        />
      </label>

      

      {/* Supprimer */}
      <button  className=" button-outline1" style={{ display: 'block', color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
       
        onClick={() => {
          localStorage.removeItem("photo1");
          window.location.reload();
        }}
      >
       Delet picture
      </button>
    </div>
  )}
</div>

              <h2 className="profile-name1">
                {client ? `${client.first_name} ${client.last_name}` : "name user"}
              </h2>
              
              <div className="profile-details1">
                <div className="profile-detail1">
                  <Mail size={16} />
                  <span>{client ? client.email : "Email"}</span>
                </div>
                <div className="profile-detail1">
                  <Globe size={16} />
                  <span>{client ? client.Country : "Country"}</span>
                </div>
              </div>
              <button className="button button-outline1">
                  <Edit size={18} />
              <a className="nav-link1"href="Editerclient">
                Edit profile
                </a>
              </button>
            </div>

            <div className="profile-stats1">
              <div className="stat-item1">
                <div className="stat-value1">12</div>
                <div className="stat-label1">Projects</div>
              </div>
              <div className="stat-item1">
                <div className="stat-value1">156</div>
                <div className="stat-label1">Hours</div>
              </div>
            </div>
          </aside>

          {/* Main Content : Section Projects, Freelancers et Clients */}
          <main className="main-content1">
            {/* Section Projects */}
            <section className="card1">
              <div className="section-title1">
                My Current Projects
                <a href="/projects" className="button button-outline">See all</a>
              </div>
              <div className="projects-grid1">
                <div className="project-card1">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                    alt="E-commerce Website"
                    className="project-image1"
                  />
                  <div className="project-info1">
                    <h3 className="project-title1">Premium E-commerce Site</h3>
                    <div className="project-meta1">
                      <span><Calendar size={16} /> Deadline: May 15, 2024</span>
                      <span><MapPin size={16} /> Paris, France</span>
                    </div>
                    <p className="project-description1">
                      Development of a complete e-commerce platform with payment system and inventory management.
                    </p>
                    <span className="status-badge status-active1">In progress</span>
                  </div>
                  <ChevronRight size={24} />
                </div>

                <div className="project-card1">
                  <img
                    src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                    alt="Mobile App"
                    className="project-image1"
                  />
                  <div className="project-info1">
                    <h3 className="project-title1">iOS Mobile App</h3>
                    <div className="project-meta1">
                      <span><Calendar size={16} /> Deadline: June 1, 2024</span>
                      <span><MapPin size={16} /> Lyon, France</span>
                    </div>
                    <p className="project-description1">
                      Design and development of a native iOS application for task management.
                    </p>
                    <span className="status-badge status-review1">Under review</span>
                  </div>
                  <ChevronRight size={24} />
                </div> 
              </div>
            </section>

            {/* Section Recommended Freelancers */}
            <section className="card1">
              <div className="section-title1">
                Recommended Freelancers
                <a href="/freelancers" className="button button-outline">See all</a>
              </div>
              
              
              <div className="freelancer-grid1">
                <div className="freelancer-card1">
                  <div className="freelancer-header1">
                    <img
                      src="assets/images/icon123.jpg"
                      alt="Sarah Johnson"
                      className="freelancer-avatar1"
                    />
                    <div className="freelancer-info1">
                      <h3 className="freelancer-name1">Sarah Johnson</h3>
                      <p className="freelancer-title1">Full Stack Developer</p>
                    </div>
                  </div>
                  <div className="freelancer-stats1">
                    <div className="rating1">
                      <Star size={16} fill="currentColor" />
                      4.9
                    </div>
                    <span className="rate1">45€/h</span>
                  </div>
                  <button className="button button-primary1">Contact</button>
                </div>

                <div className="freelancer-card1">
                  <div className="freelancer-header1">
                    <img
                      src="assets/images/icon123.jpg"
                      alt="Michael Chen"
                      className="freelancer-avatar1"
                    />
                    <div className="freelancer-info1">
                      <h3 className="freelancer-name1">Michael Chen</h3>
                      <p className="freelancer-title1">UI/UX Designer</p>
                    </div>
                  </div>
                  <div className="freelancer-stats1">
                    <div className="rating1">
                      <Star size={16} fill="currentColor" />
                      4.8
                    </div>
                    <span className="rate1">35€/h</span>
                  </div>
                  <button className="button button-primary1">contact</button>
                </div>
                </div>
            </section>

            {/* Section Liste des Clients (données du backend) */}
            
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default Freelancers;
