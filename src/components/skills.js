import React from "react";

const Skills = () => {
  const skillSections = [
    {
      title: "Languages",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
      ],
    },
    {
      title: "Data Science",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
      ],
      skills: [
        "Data Cleaning",
        "Data Preprocessing",
        "Anova/Chi2 testing",
        "Over/Under Sampling",
        "Feature engineering",
        "Statistics",
        "EDA",
        "Data Pipelines",
        "NLP",
      ],
    },
    {
      title: "Machine Learning",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg",
        "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/07/langchain3.png"
      ],
      skills: [
        "Time-Series",
        "CNNs",
        "RNNs",
        "Transformers/LLMs",
        "RAGs",
        "Generative Adversarial Networks",
        "Model Evaluation",
        "Object Detection",
        "Recommendation Systems",
      ],
    },
    {
      title: "Development",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      ],
      skills: [
        "APIs",
        "CRUD operations",
        "Authentication",
        "WebRTC",
        "WebSockets",
        "RESTful APIs",
        "OAuth",
        "Celery",
        "Cron Jobs",
        "Webhooks",
      ],
    },
    {
      title: "Databases",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
      ],
      skills: ["SQL", "NoSQL", "Database Design", "Data Modeling", "ORMs", "Caching"],
    },
    {
      title: "Others",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"
      ],
      skills: ["Version Control", "MLOps", "Cloud(GCP)", "Containerization", "Deployment(Heroku, Render, Vercel)"],
    },
  ];

  return (
    <div className="container2">
      <div className="page">
        <p className="page_title">
          <span className="hashtag">/</span>skills
        </p>
        <h2 className="page_text">what all i can do</h2>
        {skillSections.map((section, index) => (
          <div key={index}>
            <div className="heading">
              <p className="hdtext">
                <span className="hashtag">|</span>
                {section.title}
              </p>
              <hr className="pline" />
            </div>
            <div className="imgs">
              {section.icons.map((icon, idx) => (
                <img src={icon} alt={`${section.title} icon ${idx}`} key={idx} />
              ))}
            </div>
            {section.skills && (
              <ul className="skilltxt">
                {section.skills.map((skill, idx) => (
                  <li key={idx}>{skill} |</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
