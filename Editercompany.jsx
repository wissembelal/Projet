import React, { useEffect, useState } from 'react';
import { Camera, Mail, Phone, MapPin, Briefcase, Building2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



function App() {
  const [form, setForm] = useState({
    
  });
  const navigate = useNavigate();
  const photo = localStorage.getItem("photo") || "assets/images/logo-default.jpg";
  useEffect(() => {
    const savedEntreprise = JSON.parse(localStorage.getItem("Entreprise"));
    if (savedEntreprise) {
      setForm({
        companyName: savedEntreprise.companyName || '',
        email: savedEntreprise.email || '',
        phone: savedEntreprise.phone || '',
        country: savedEntreprise.country || '',
        industry: savedEntreprise.industry || '',
        companyDescription: savedEntreprise.companyDescription || ''
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
        localStorage.setItem("Entreprise", JSON.stringify(form));
        navigate('/Entreprise');
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
                  type="companyName"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="companyName"
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
                  <Phone className="input-icon" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Téléphone"
                  />
                </div>
                <div className="input-group">
                  <MapPin className="input-icon" size={20} />
                  <input
                    type="country"
                    name="country"
                    value={form.country}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Localisation"
                  />
                </div>
                <div className="input-group">
  <Briefcase className="input-icon" size={20} />
  <input
    type="text"
    name="industry"
    value={form.industry}
    onChange={handleInputChange}
    className="form-input"
    placeholder="Industry"
  />
</div>
<div className="input-group">
  <Building2 className="input-icon" size={20} />
  <input
    type="text"
    name="companyDescription"
    value={form.companyDescription}
    onChange={handleInputChange}
    className="form-input"
    placeholder="Description de l'entreprise"
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