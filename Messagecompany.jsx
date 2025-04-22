import React, { useState } from 'react';
import { Send, Paperclip, MoreVertical, Phone, VideoIcon, User2, Search, Circle } from 'lucide-react';

function App() {
  const [message, setMessage] = useState('');
  const [activeContact, setActiveContact] = useState('sarah-dev');

  const contacts = [
    {
      id: 'sarah-dev',
      name: 'Sarah Martinez',
      role: 'Full Stack Developer',
      lastMessage: 'Je peux commencer le projet dès lundi prochain.',
      time: '10:30',
      unread: 2,
      online: true,
    },
    {
      id: 'marc-designer',
      name: 'Marc Dubois',
      role: 'UI/UX Designer',
      lastMessage: 'Voici les maquettes pour l\'application mobile.',
      time: '09:45',
      unread: 0,
      online: true,
    },
    {
      id: 'julie-dev',
      name: 'Julie Bernard',
      role: 'Backend Developer',
      lastMessage: 'L\'API est prête pour les tests.',
      time: '08:15',
      unread: 1,
      online: false,
    },
    {
      id: 'thomas-architect',
      name: 'Thomas Laurent',
      role: 'Solution Architect',
      lastMessage: 'Je propose une architecture microservices.',
      time: 'Hier',
      unread: 0,
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      type: 'received',
      content: 'Bonjour, j\'ai vu votre offre pour le poste de développeur full stack.',
      time: '10:30',
      sender: 'Sarah Martinez'
    },
    {
      id: 2,
      type: 'sent',
      content: 'Bonjour Sarah, merci de votre intérêt ! Pouvez-vous nous parler de votre expérience ?',
      time: '10:32'
    },
    {
      id: 3,
      type: 'received',
      content: 'Bien sûr ! J\'ai 5 ans d\'expérience en développement web, principalement avec React et Node.js. J\'ai travaillé sur plusieurs projets e-commerce et applications SaaS.',
      time: '10:35',
      sender: 'Sarah Martinez'
    },
    {
      id: 4,
      type: 'sent',
      content: 'Très intéressant ! Nous avons justement un projet qui correspond à votre profil. Seriez-vous disponible pour un appel cette semaine ?',
      time: '10:38'
    },
    {
      id: 5,
      type: 'received',
      content: 'Oui, je suis disponible. Je peux commencer le projet dès lundi prochain.',
      time: '10:40',
      sender: 'Sarah Martinez'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Here you would typically send the message to your backend
      setMessage('');
    }
  };

  const activeContactData = contacts.find(contact => contact.id === activeContact);

  return (
    <div className="app-container">
      {/* Contacts Sidebar */}
      <div className="contacts-sidebar">
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Rechercher un freelancer..."
              className="search-input"
            />
          </div>
        </div>
        <div className="contacts-list">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveContact(contact.id)}
              className={`contact-item ${activeContact === contact.id ? 'active' : ''}`}
            >
              <div className="avatar-container">
                <div className="avatar">
                  <User2 size={24} />
                </div>
                {contact.online && <div className="online-indicator" />}
              </div>
              <div className="contact-info">
                <div className="contact-header">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-time">{contact.time}</span>
                </div>
                <div className="last-message">{contact.lastMessage}</div>
              </div>
              {contact.unread > 0 && (
                <div className="unread-badge">
                  <span>{contact.unread}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <div className="header-content">
            <div className="header-profile">
              <div className="avatar">
                <User2 size={24} />
              </div>
              <div className="profile-info">
                <h2>{activeContactData?.name}</h2>
                <p>{activeContactData?.role}</p>
              </div>
            </div>
            <div className="header-actions">
              <button className="action-button">
                <Phone size={20} />
              </button>
              <button className="action-button">
                <VideoIcon size={20} />
              </button>
              <button className="action-button">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="messages-container">
          <div className="messages-content">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.type}`}>
                <div className="message-bubble">
                  <p>{msg.content}</p>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="input-container">
          <div className="input-content">
            <form onSubmit={handleSubmit} className="message-form">
              <button type="button" className="attachment-button">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrivez votre message ici..."
                className="message-input"
              />
              <button type="submit" className="send-button">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;