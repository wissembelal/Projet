const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Your MySQL username
    password: "", // Your MySQL password
    database: "basedonnée",
    port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection error:", err);
  } else {
    console.log("✅ Connected to the database");
  }
});

// 🚀 Route to register a client
app.post("/Register_client", (req, res) => {
  const { first_name, last_name, email, Password, Country } = req.body;

  if (!first_name || !last_name || !email || !Password || !Country) {
    return res.status(400).json({ message: " Tous les champs sont requis." });
  }

  // Vérifie si email est valide (optionnel côté serveur)
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: " Invalid email address." });
  }

  if (Password.length < 8) {
    return res.status(400).json({ message: "  Password must contain at least 8 characterst." });
  }

  
  const checkEmail = `
  SELECT email FROM entreprises WHERE email = ? 
  UNION 
  SELECT email FROM clients WHERE email = ? 
  UNION 
  SELECT email FROM freelancers WHERE email = ?
`;


db.query(checkEmail, [email, email, email], (err, result) => {
  if (err) {
    return res.status(500).json({ message: "Erreur server." });
  }

  // Si un résultat est trouvé, cela signifie qu'un compte avec cet email existe déjà
  if (result.length > 0) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }

    const insertSQL = "INSERT INTO clients (first_name, last_name, email, Password, Country) VALUES (?, ?, ?, ?, ?)";
    const values = [first_name, last_name, email, Password, Country];

    db.query(insertSQL, values, (err, result) => {
      if (err) {
        return res.status(500).json({ message: " Error during registration." });
      }
      return res.status(201).json({ message: "✅ Successful registration !" });
    });
  });
});

// 🚀 Route to register a freelancer
app.post("/Register_freelancer", (req, res) => {
 const { first_name, last_name, email, Password, Country,skill } = req.body;

  if (!first_name || !last_name || !email || !Password || !Country || !skill) {
    return res.status(400).json({ message: " Tous les champs sont requis." });
  }

  // Vérifie si email est valide (optionnel côté serveur)
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: " Invalid email address." });
  }

  if (Password.length < 8) {
    return res.status(400).json({ message: "  Password must contain at least 8 characters." });
  }

  const checkEmail = `
  SELECT email FROM entreprises WHERE email = ? 
  UNION 
  SELECT email FROM clients WHERE email = ? 
  UNION 
  SELECT email FROM freelancers WHERE email = ?
`;

db.query(checkEmail, [email, email, email], (err, result) => {
  if (err) {
    return res.status(500).json({ message: "Erreur server." });
  }

  // Si un résultat est trouvé, cela signifie qu'un compte avec cet email existe déjà
  if (result.length > 0) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }

    const insertSQL = "INSERT INTO freelancers (first_name, last_name, email, Password, Country,skill) VALUES (?, ?, ?, ?, ?,?)";
    const values = [first_name, last_name, email, Password, Country, skill];

    db.query(insertSQL, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de l'insertion dans la base de données:", err);
        return res.status(500).json({ message: "Error during registration." });
      }
      return res.status(201).json({ message: "✅ Successful registration !" });
    });
    
  });
});

// 🚀 Route to register an enterprise
app.post("/Register_enterprise", (req, res) => {
  const { companyName, industry,email, Password,phone,country,companyDescription } = req.body;

  if (!companyName || !industry || !email || !Password || !phone || !country || !companyDescription){
    return res.status(400).json({ message: " Tous les champs sont requis." });
  }

  // Vérifie si email est valide (optionnel côté serveur)
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: " Invalid email address." });
  }

  if (Password.length < 8) {
    return res.status(400).json({ message: "  Password must contain at least 8 characters." });
  }

  const checkEmail = `
  SELECT email FROM entreprises WHERE email = ? 
  UNION 
  SELECT email FROM clients WHERE email = ? 
  UNION 
  SELECT email FROM freelancers WHERE email = ?
`;

db.query(checkEmail, [email, email, email], (err, result) => {
  if (err) {
    return res.status(500).json({ message: "Erreur server." });
  }

  // Si un résultat est trouvé, cela signifie qu'un compte avec cet email existe déjà
  if (result.length > 0) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }
    const insertSQL = "INSERT INTO entreprises (companyName, industry,email, Password,phone,country,companyDescription) VALUES (?, ?, ?, ?, ?,?,?)";
    const values = [companyName, industry,email, Password,phone,country,companyDescription];

    db.query(insertSQL, values, (err, result) => {
      if (err) {
        console.error("Erreur lors de l'insertion dans la base de données:", err);
        return res.status(500).json({ message: "Error during registration." });
      }
      return res.status(201).json({ message: "✅ Successful registration !" });
    });
    
  });
});

app.post("/Offre", (req, res) => {
  const {  companyName,
    title,
    description,
    budget,
    skill,
    tasks,
    duration_start,
    duration_end,
    contact } = req.body;

  // Vérification des champs
  if (	!companyName || !title || !description || !budget || !skill || !duration_start || !tasks || !duration_end || !contact) {
    return res.status(400).json({ message: "❌ Tous les champs sont requis." });
  }

  // Requête SQL pour insérer l'offre
  const insertSQL = "INSERT INTO offres (companyName,title,description,budget,skill,tasks,duration_start,duration_end,contact) VALUES (?, ?, ?, ?,?,?,?,?,?)";
  const values = [ companyName,
    title,
    description,
    budget,
    skill,
    tasks,
    duration_start,
    duration_end,
    contact];

  // Exécution de la requête SQL
  db.query(insertSQL, values, (err, result) => {
    if (err) {
      console.error("Erreur SQL : ", err.message);
      return res.status(500).json({ message: "Erreur lors de l'enregistrement de l'offre." });
    }

    // Si l'insertion est réussie
    return res.status(201).json({ message: "✅ Offre enregistrée avec succès !" });
  });
});



// 🚀 Route to login
app.post("/Login", (req, res) => {
  const { sentloginemail, sentloginpassword } = req.body;

  if (!sentloginemail || !sentloginpassword) {
    return res.status(400).json({ error: "Email and password required!" });
  }

  // 1. Vérifie d'abord dans la table des clients
  const checkClient = () => {
    return new Promise((resolve, reject) => {
      const SQL = "SELECT * FROM clients WHERE email = ? AND Password = ?";
      db.query(SQL, [sentloginemail, sentloginpassword], (err, result) => {
        if (err) return reject(err);
        if (result.length > 0) return resolve({ ...result[0], role: "client" });
        return resolve(null);
      });
    });
  };

  // 2. Vérifie dans la table des freelancers
  const checkFreelancer = () => {
    return new Promise((resolve, reject) => {
      const SQL = "SELECT * FROM freelancers WHERE email = ? AND Password = ?";
      db.query(SQL, [sentloginemail, sentloginpassword], (err, result) => {
        if (err) return reject(err);
        if (result.length > 0) return resolve({ ...result[0], role: "Freelancer" });
        return resolve(null);
      });
    });
  };

  // 3. Vérifie dans la table des entreprises
  const checkEnterprise = () => {
    return new Promise((resolve, reject) => {
      const SQL = "SELECT * FROM entreprises WHERE email = ? AND Password = ?";
      db.query(SQL, [sentloginemail, sentloginpassword], (err, result) => {
        if (err) return reject(err);
        if (result.length > 0) return resolve({ ...result[0], role: "Entreprise" });
        return resolve(null);
      });
    });
  };

  // Vérification en chaîne
  checkClient()
    .then(user => user || checkFreelancer())
    .then(user => user || checkEnterprise())
    .then(user => {
      if (user) {
        return res.status(200).json({
          message: "Login successful",
          user
        });
      } else {
        return res.status(401).json({ message: "Incorrect credentials" });
      }
    })
    .catch(err => {
      console.error("❌ Login error:", err);
      return res.status(500).json({ error: "Database error" });
    });
   
});


app.listen(8081, () => {
    console.log("🚀 Server running on http://localhost:8081");
});
