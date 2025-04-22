import React, { useEffect, useState } from 'react';
import { Camera, Mail, Phone, MapPin, Briefcase, Building2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



function App() {
  const [form, setForm] = useState({
    
  });
  const navigate = useNavigate();
  const phot = localStorage.getItem("photo") || "assets/images/logo-default.jpg";
  useEffect(() => {
    const savedclient = JSON.parse(localStorage.getItem("client"));
    if (savedclient) {
      setForm({
        first_name: savedclient.first_name || '',
        last_name: savedclient.last_name|| '',
      email: savedclient.email || '',
      Country: savedclient.Country || '',
      
      });
    }
    
  }, []);
  

  const [isPasswordSection, setIsPasswordSection] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!isPasswordSection) {
        console.log('Profile update submitted:', form);
        localStorage.setItem("client", JSON.stringify(form));
        navigate('/Freelancers');
      }

    if (isPasswordSection) {
      if (form.newPassword !== form.confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
        return;
      }
      // Here you would typically make an API call to update the password
      console.log('Password update submitted:', form);
    } else {
      // Here you would typically make an API call to update the profile
      console.log('Profile update submitted:', form);
    }
  };

  return (
    <div className="container2">
      <div className="profile-card2">
        {/* Profile Header */}
        <div className="profile-header2">
          <div className="profile-avatar-container2">
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
           
          </div>
        </div>

        <div className="form-container2">
          <h1 className="form-title2">Modifier le profil</h1>

          {/* Toggle Buttons */}
          <div className="toggle-buttons">
            <button
              onClick={() => setIsPasswordSection(false)}
              className={`toggle-button ${!isPasswordSection ? 'active' : 'inactive'}`}
            >
              Informations du profil
            </button>
            <button
              onClick={() => setIsPasswordSection(true)}
              className={`toggle-button ${isPasswordSection ? 'active' : 'inactive'}`}
            >
              Changer le mot de passe
            </button>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {!isPasswordSection ? (
              /* Profile Information Form */
              <div className="form-section">
                  <div className="input-group">
               
               <input
                 type="first_name"
                 name="first_name"
                 value={form.first_name}
                 onChange={handleInputChange}
                 className="form-input"
                 placeholder="first_name"
               />
             </div>
              <div className="input-group">
               
                <input
                  type="last_name"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="last_name"
                />
              </div>
             
                <div className="input-group">
                  <Mail className="input-icon" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Email"
                  />
                </div>
               
                <div className="input-group">
                  <MapPin className="input-icon" size={20} />
                  <input
                    type="Country"
                    name="Country"
                    value={form.Country}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Localisation"
                  />
                </div>
     


              </div>
            ) : (
              /* Password Change Form */
              <div className="form-section">
                <div className="input-group">
                  <Lock className="input-icon" size={20} />
                  <input
                    type="password"
                    name="currentPassword"
                    value={form.currentPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Mot de passe actuel"
                  />
                </div>
                <div className="input-group">
                  <Lock className="input-icon" size={20} />
                  <input
                    type="password"
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Nouveau mot de passe"
                  />
                </div>
                <div className="input-group">
                  <Lock className="input-icon" size={20} />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Confirmer le nouveau mot de passe"
                  />
                </div>
              </div>
            )}

            <button type="submit" className="submit-button">
              {isPasswordSection ? 'Mettre à jour le mot de passe' : 'Enregistrer les modifications'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;