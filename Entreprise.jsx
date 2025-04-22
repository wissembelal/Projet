import React, { useEffect, useState } from 'react';
import {
  Star, MapPin, Calendar,  Edit, Settings, LogOut, ChevronRight,
  Mail, Globe, Search, Briefcase, Plus, Users,  Building, Phone,Factory
} from 'lucide-react';
import axios from 'axios';

function CompanyPage() {
  const [entreprises, setEntreprises] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const photo = localStorage.getItem("photo") || "assets/images/logo-default.jpg";
  const user = JSON.parse(localStorage.getItem("Entreprise"));
useEffect(() => {
  if (!user) {
    window.location.href = "/login";
  }
}, []);

  
  useEffect(() => {
    axios.get('http://localhost:8081/entreprises')
      .then(response => {
        console.log("entreprises récupérés :", response.data);
        setEntreprises(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des entreprises :', error);
      });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:8081/offres')
      .then(response => {
        console.log("offres récupérés :", response.data);
        setEntreprises(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des entreprises :', error);
      });
  }, []);

  const Entreprise = JSON.parse(localStorage.getItem("Entreprise"));
  const Offre = JSON.parse(localStorage.getItem("Offre"));

  return (
    <div>
      <header className="header1">
        <div className="header-content1">
          <nav className="nav1">
            <a href="/Homecompany" className="nav-link active1">Home</a>
            <a href="/Messagecompany" className="nav-link1">Messages</a>
          </nav>

          <div className="search-bar-container1">
            <div className="search-bar1">
              <Search size={18} className="search-icon1" />
              <input type="text" placeholder="Search..." className="search-input1" />
            </div>
          </div>

          <div className="nav1">
            <button className="button button-outline1">
              <Settings size={18} />
              <a className="nav-link1" href="/Editercompany">
              Settings
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
          {/* Sidebar */}
          <aside className="profile-sidebar1">
            <div className="profile-header1">
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <img
                  src={photo}
                  alt="Company Logo"
                  className="profile-avatar1"
                  style={{
                    width: '90px',
                    height: '75px',
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
         Upload logo
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
          localStorage.removeItem("photo");
          window.location.reload();
        }}
      >
       Delet logo
      </button>
    </div>
  )}
</div>

              <h2 className="profile-name1">
                {Entreprise ? Entreprise.companyName : "companyName"}
              </h2>

              <div className="profile-details1">
                <div className="profile-detail1">
                  <Mail size={16} />
                  <span>{Entreprise ? Entreprise.email : "Email"}</span>
                </div>
                <div className="profile-detail1">
                  <Phone size={16} />
                  <span>{Entreprise ? Entreprise.phone : "Phone"}</span>
                </div>
                <div className="profile-detail1">
                  <Globe size={16} />
                  <span>{Entreprise ? Entreprise.country : "Country"}</span>
                </div>
                <div className="profile-detail1">
                  <Factory size={16} />
                  <span>{Entreprise ? Entreprise.industry : "industry"}</span>
                </div>
                <div className="profile-detail1">
                  <Building size={16} />
                  <span>{Entreprise ? Entreprise.companyDescription : "companyDescription"}</span>
                </div>
              </div>

              <button className="button button-outline1"  >
                <Edit size={18} />
                 <a className="nav-link1"href="Editercompany">
                Edit profile
                </a>
              </button>
            </div>

            <div className="profile-stats1">
              <div className="stat-item1">
                <div className="stat-value1">8</div>
                <div className="stat-label1">Active Projects</div>
              </div>
              <div className="stat-item1">
                <div className="stat-value1">24</div>
                <div className="stat-label1">Hired Freelancers</div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="main-content1">
          <section className="card1">
  <div className="section-title1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h2 style={{ margin: 0 }}>My Job Offers</h2>
    <div style={{ display: 'flex', gap: '10px' }}>
      
     
    
        <a href="/projects" className="button button-outline">See all</a>
    </div>
  </div>

  <div className="tabs1" style={{ margin: '20px 0', borderBottom: '1px solid #eee', display: 'flex' }}>
 
  </div>

  <div className="projects-grid1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
    {/* Offre 1 */}
    {Offre ? (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      
      <p><strong>Companyname:</strong>{ Entreprise.companyName }</p>
      <p><strong>Title:</strong> {Offre.title}</p>       
      <p><strong>Description:</strong> {Offre.description}</p>
      <p><strong>Tâches :</strong> {Offre.tasks}</p>
      <p><strong>Compétences requises :</strong> {Offre.skill}</p>
      <p><strong>Budget:</strong> ${Offre.budget}</p>
      <p><strong>Duration:</strong> {Offre.duration_start} to {Offre.duration_end}</p>
      <p><strong>Contact:</strong> {Offre.contact}</p>

      <button style={{
        marginTop: '10px',
        padding: '8px 12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Interested
      </button>
    </div>
  </div>
) : (
  <p style={{ color: '#999' }}>No job offers available yet.</p>
)}



    {/* Offre 2 */}
 
    
  </div>
</section>

            {/* Active Projects Section */}
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

           
          </main>
        </div>
      </div>
    </div>
  );
}

export default CompanyPage;
