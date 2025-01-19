import React from "react";
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    const key = item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
    images[key] = r(item);
  });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const projects = {
  major: [
    {
      name: "DocWise",
      description: "Django web app for E-appointments, medical report processing, and a medical advice chatbot",
      tech: ["Django", "WebRTC", "TailwindCSS", "Google-GenAI"],
      image: images['logo1'],
      links: {
        live: "https://docwise.onrender.com/",
        github: "https://github.com/ShlokArora2709/DocWise"
      }
    },
    {
      name: "CognitoQuotient",
      description: "Understanding minds at a Glance",
      tech: ["Flask", "Tensorflow", "NLP", "React Native"],
      image: images["readme_icon"],
      links: {
        github: "https://github.com/ShlokArora2709/CognitoQuotient/tree/main"
      }
    },
    {
      name: "ESG Analyzer",
      description: "ESG data analysis and sentiment analysis",
      tech: ["Selenium", "BS4", "NLTK", "mBERT", "PyTorch"],
      image: "https://www.burohappold.com/wp-content/uploads/2023/07/ESG-graphic-2-1024x683.png",
      links: {
        github: "https://github.com/ShlokArora2709/ESG-Project/tree/main"
      }
    }
  ],
  intermediate: [
    {
      name: "Generative Adversarial Network",
      description: "Built a simple GAN using Keras on CIFAR10 dataset",
      tech: ["Keras", "GANs", "NumPy"],
      image: images["GAN"],
      links: {
        github: "https://github.com/ShlokArora2709/Deep-Learning/blob/master/GANs_cifar10.ipynb"
      }
    },
    {
      name: "Legal Navigator",
      description: "All basic legal help at a single place",
      tech: ["Flask", "HTML/CSS", "NLP"],
      image: images["balance"],
      links: {
        github: "https://github.com/ShlokArora2709/sih_project-1",
        live: "https://legalnavigator-thf4.onrender.com/"
      }
    },
    {
      name: "SnapShop",
      description: "Image-Based Product Recommendation System",
      tech: ["Gemini-NLP", "Sklearn", "Flask", "JavaScript", "OpenCV"],
      image: images["SnapShop"],
      links: {
        github: "https://github.com/ShlokArora2709/SnapShop",
        live: "https://snapshop-oqvt.onrender.com"
      }
    },
    {
      name: "Sorting Visualizer",
      description: "Interactive live sorting visualizer",
      tech: ["Java", "Swing", "AWT"],
      image: images["IMG-20241104-WA0004"],
      links: {
        github: "https://github.com/ShlokArora2709/Sorting-visualization"
      }
    },
    {
      name: "Salary Predictor",
      description: "Applied ML and DS on Salary data of various data-related roles",
      tech: ["Django", "Scikit Learn", "Pandas", "Data Pipelines"],
      image: images['image1'],
      links: {
        github: "https://github.com/ShlokArora2709/Mentorness/tree/main/ModelDeployement"
      }
    },
    {
      name: "Credit Card Approval Prediction",
      description: "Credit Card Approval Prediction using risk assessment data",
      tech: ["Data Analysis", "Scikit Learn", "Pandas", "Statistics"],
      image: "https://www.shutterstock.com/shutterstock/photos/2237221801/display_1500/stock-vector-payment-approved-outline-icon-credit-card-linear-vector-icon-debit-card-and-check-mark-outline-2237221801.jpg",
      links: {
        github: "https://github.com/ShlokArora2709/Mentorness/blob/main/Mentorness2_Task3.ipynb"
      }
    },
    {
      name: "Gold Price Prediction",
      description: "Historic gold price prediction and analysis using ARIMA",
      tech: ["Time-Series Analysis", "XGBoost", "Pandas"],
      image: images["goldp"],
      links: {
        github: "https://github.com/ShlokArora2709/Mentorness/blob/main/Mentorness2_Task3.ipynb"
      }
    },
    {
      name: "Fastag Fraud Detection",
      description: "Detecting possible fastag frauds using DS and ML",
      tech: ["Hyper Param Tuning", "Statistics", "Scikit-learn", "Pandas"],
      image: "https://images.gizbot.com/webp/img/2020/01/here-s-how-to-stay-safe-1579681037.jpg",
      links: {
        github: "https://github.com/ShlokArora2709/Mentorness/blob/main/Mentorness2_Task3.ipynb"
      }
    },
    {
      name: "Portfolio Site",
      description: "A little introduction",
      tech: ["ReactJs","HTML", "CSS"],
      image: images["Site"],
      links: {
        github: "https://github.com/ShlokArora2709/ShlokArora2709.github.io"
      }
    }
  ],
  minor: [
    {
      name: "Minor Django App",
      description: "Django app with forms and data analysis",
      tech: ["Django", "HTML/CSS", "Pandas"],
      image: "",
      links: {
        live: "https://shlokaroramediustech.onrender.com",
        github: "https://github.com/ShlokArora2709/MediusTech"
      }
    },
    {
      name: "NodeJS CRUD app",
      description: "Simple CRUD application using NodeJS",
      tech: ["NodeJS", "JWT", "MongoDB", "ExpressJS"],
      image: "",
      links: {
        live: "https://shlokaroramediustech.onrender.com",
        github: "https://github.com/ShlokArora2709/MediusTech"
      }
    },
    {
      name: "Fast API CRUD app",
      description: "Fast API project with CRUD operations on MongoDB",
      tech: ["Fast API", "MongoDB"],
      image: "",
      links: {
        github: "https://github.com/ShlokArora2709/BrightInfonet/blob/main/main.py"
      }
    },
    {
      name: "Next Word Predictor",
      description: "Next word predictor using LSTMs",
      tech: ["LSTMs", "NLP"],
      image: "",
      links: {
        github: "https://github.com/ShlokArora2709/Deep-Learning/blob/master/NextWordPred_LSTM.ipynb"
      }
    },
    {
      name: "Expression Excavator",
      description: "WhatsApp chat sentiment analyzer",
      tech: ["Streamlit", "NLP", "Matplotlib"],
      image: "",
      links: {
        github: "https://github.com/ShlokArora2709/IIITD-hackcog-project"
      }
    }
  ]
};

const ProjectCard = ({ name, description, tech, image, links }) => {
  return (
    <div className="project">
      <div className="image-container">
        {image && <img src={image} alt={name} className="project__image" />}
      </div>
      <hr className="wline" />
      <ul className="project__techs">
        {tech.map((techName, index) => (
          <li key={index} className="project__tech">
            {techName}
          </li>
        ))}
      </ul>
      <div className="project__content">
        <div className="project__name">{name}</div>
        <div className="project__description">{description}</div>
        <div className="project__links">
          {links.live && (
            <a href={links.live} className="button" target="_blank" rel="noopener noreferrer">
              Live =&gt;
            </a>
          )}
          {links.github && (
            <a href={links.github} className="button" target="_blank" rel="noopener noreferrer">
              Github =&gt;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div>
      <div className="container2">
        <div className="page">
          <p className="page_title">
            <span className="hashtag">/</span>projects
          </p>
          <h2 className="page_text">a showcase of my projects</h2>
        </div>

        <div className="heading">
          <p className="hdtext">
            <span className="hashtag">|</span>Major
          </p>
          <hr className="pline" />
        </div>

        <div className="project-list">
          {projects.major.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="heading">
          <p className="hdtext">
            <span className="hashtag">|</span>Intermediate
          </p>
          <hr className="pline" />
        </div>

        <div className="project-list">
          {projects.intermediate.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="heading">
          <p className="hdtext">
            <span className="hashtag">|</span>Minor
          </p>
          <hr className="pline" />
        </div>

        <div className="project-list">
          {projects.minor.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;