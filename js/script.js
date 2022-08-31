// LANGUAGE SELECT
// ENGLISH
$(function(){
  $(".en").click(function() {
    // NAVBAR
    $(".collapse ul:nth-child(1) li:nth-child(1) a").text("About")
    $(".collapse ul:nth-child(1) li:nth-child(2) a").text("Experience")
    $(".collapse ul:nth-child(1) li:nth-child(3) a").text("Education")
    $(".collapse ul:nth-child(1) li:nth-child(4) a").text("Skills")
    $(".collapse ul:nth-child(1) li:nth-child(5) a").text("Languages")
    $(".collapse ul:nth-child(1) li:nth-child(6) a").text("Contact")
    $(".collapse ul:nth-child(2) li:nth-child(1) a").text("English")
    $(".collapse ul:nth-child(2) li:nth-child(2) a").text("French")
    $(".language-selected").text("EN");
    $(".language-selected").removeClass("change-fr")
    $(".language-selected").addClass("change-en");

    // ABOUT ME
    $("#greeting-header").text("Hi,")
    $("#greeting-name").text("I'm Beatrice.")
    $(".intro-text").text("I'm an ambitious Biomedical Engineering graduate from King’s College London, passionate about technology and programming.")

    // EXPERIENCE
    $(".experience-container h2:nth-child(1)").text("Experience")
    $(".cd-container .cd-timeline-block:nth-of-type(1) h3:nth-of-type(1)").text("M.Eng. Research Project")
    $(".cd-container .cd-timeline-block:nth-of-type(2) h3:nth-of-type(1)").text("M.Eng. Group Research Project")
    $(".cd-container .cd-timeline-block:nth-of-type(3) h3:nth-of-type(1)").text("B.Eng. Research Project")

    $(".cd-container .cd-timeline-block:nth-of-type(1) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - June 2022")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - June 2022")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2020 - June 2021")

    $(".cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(1)").text("Adaptation of the MRtrix3 software package to process diffusion MRI data that couldn’t be processed with older algorithms, for the purpose of interpreting white matter fibre orientation in the brain using a technique known as MSMT-CSD.")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(2)").text("Master’s thesis: “Analysis of multi-shell diffusion MRI data with arbitrary diffusion encoding”.")

    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(1)").text("Investigation of preconception care services and technologies available worldwide using the 5D model of medical technology development.")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(2)").text("Advertising and public engagement activities to gather data from the public for a preconception care app, to address the lack of available services in the UK. Creation of mobile app wireframe.")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(3)").text("Group master’s thesis: “PrecTech: A Global Review of Preconception Care Guidelines and Services and a Proposal for a Personalised Preconception Care Mobile Application”.")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(4)").text("Currently under the process of publishing a scientific research paper.")

    $(".cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(1)").text("Novel tool to solve a major issue in the neuroimaging community alongside medical imaging and deep learning experts.")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(2)").text("Development of a supervised deep neural network to detect and correct artefacts in paediatric brain diffusion MRI. Development of a self-supervised network capable of detecting and classifying artefacts.")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(3)").text("Bachelor’s thesis: “Self-supervised deep-learning for artefact detection in paediatric brain diffusion MRI”.")
  
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(1)").text("C++")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(2)").text("Shell")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(3)").text("MATLAB")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(4)").text("Software Development")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(5)").text("Object-oriented Programming")

    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(1)").text("Public Engagement")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(2)").text("Medical Device Development")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(3)").text("Mobile App Development")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(4)").text("Wireframe Design")

    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(1)").text("Python")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(2)").text("Machine Learning")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(3)").text("Jupyter Notebooks")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(4)").text("PyTorch")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(5)").text("NumPy")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(6)").text("CNNs")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(7)").text("U-Nets")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(8)").text("Autoencoders")

    // EDUCATION
    $(".education-container h2:nth-child(1)").text("Education")
    $(".education-container .education-row:nth-of-type(1) .education-location span").text("London, UK")
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .degree").text("M.Eng. (Hons) Biomedical Engineering")
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .degree").text("French Scientific Baccalaureate")

    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(1) .edu-description-1:nth-of-type(1)").text("Final Classification: ") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(1) .edu-description-2:nth-of-type(2)").text("First Class Honours") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(2) .edu-description-1:nth-of-type(1)").text("Path: ") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(2) .edu-description-2:nth-of-type(2)").text("Machine Learning/Programming")
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(3) .edu-description-1:nth-of-type(1)").text("Relevant Modules: ") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(3) .edu-description-2:nth-of-type(2)").text("Computer Programming, Object-oriented Programming, Advanced Machine Learning, Mathematics, Computational Statistics,  Computational Methods.") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(4)").text("Member of the Engineering Society & Robotics Society") 

    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(1) .edu-description-1:nth-of-type(1)").text("Final Classification: ") 
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(1) .edu-description-2:nth-of-type(2)").text("First Class Honours (17/20)") 
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(2) .edu-description-1:nth-of-type(1)").text("Path: ") 
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(2) .edu-description-2:nth-of-type(2)").text("Physics and Chemistry")
  
    // SKILLS
    $(".skills-container h2:nth-child(1)").text("Skills")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(1)").text("Python")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(2)").text("C++")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(3)").text("MATLAB")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(4)").text("SQL")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(5)").text("HTML")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(6)").text("CSS")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(7)").text("JavaScript")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(8)").text("Bash/Shell Scripting")

    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(1)").text("Software Development")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(2)").text("Object-oriented Programming")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(3)").text("Unit Testing")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(4)").text("Machine Learning")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(5)").text("Data Visualisation")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(6)").text("Data Analysis")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(7)").text("CAD")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(8)").text("3D Image Segmentation")

    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(1)").text("Git")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(2)").text("Tableau")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(3)").text("MySQL")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(4)").text("Jupyter Notebooks")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(5)").text("Visual Studio Code")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(6)").text("Microsoft Office")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(7)").text("Bootstrap")

    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(1)").text("Problem Solving")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(2)").text("Critical Thinking")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(3)").text("Flexibility")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(4)").text("Adaptability")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(5)").text("Teamwork")

    // LANGUAGES
    $(".languages-container h2").text("Languages")
    $(".languages-container .row .col-lg-3:nth-of-type(1) p").text("English")
    $(".languages-container .row .col-lg-3:nth-of-type(2) p").text("Portuguese")
    $(".languages-container .row .col-lg-3:nth-of-type(3) p").text("French")
    $(".languages-container .row .col-lg-3:nth-of-type(4) p").text("Romanian")

    // CONTACT
    $(".contact-container #contact-text").text("I'm currently looking for a job opportunity that would allow me to show proof of my skills and learn more.")
    $(".contact-container .btn span").text("Contact me!")

    // FOOTER
    $(".bottom-container #credits span").text("Icons made by")


  })
});

// FRENCH
$(function(){
  $(".fr").click(function() {
    // NAVBAR
    $(".collapse ul:nth-child(1) li:nth-child(1) a").text("Sur moi")
    $(".collapse ul:nth-child(1) li:nth-child(2) a").text("Expérience")
    $(".collapse ul:nth-child(1) li:nth-child(3) a").text("Education")
    $(".collapse ul:nth-child(1) li:nth-child(4) a").text("Compétences")
    $(".collapse ul:nth-child(1) li:nth-child(5) a").text("Langues")
    $(".collapse ul:nth-child(1) li:nth-child(6) a").text("Contact")
    $(".collapse ul:nth-child(2) li:nth-child(1) a").text("Anglais")
    $(".collapse ul:nth-child(2) li:nth-child(2) a").text("Français")
    $(".language-selected").text("FR");
    $(".language-selected").removeClass("change-en")
    $(".language-selected").addClass("change-fr");

    // ABOUT ME
    $("#greeting-header").text("Salut,")
    $("#greeting-name").text("Je suis Beatrice.")
    $(".intro-text").text("Je suis une ingénieure diplômée de King's College London, ambitieuse et passionnée par la technologie et la programmation.")

    // EXPERIENCE
    $(".experience-container h2:nth-of-type(1)").text("Expérience")
    $(".cd-container .cd-timeline-block:nth-of-type(1) h3:nth-of-type(1)").text("Master: Projet de Recherche")
    $(".cd-container .cd-timeline-block:nth-of-type(2) h3:nth-of-type(1)").text("Master: Projet de Recherche en Groupe")
    $(".cd-container .cd-timeline-block:nth-of-type(3) h3:nth-of-type(1)").text("Licence: Projet de Recherche")

    $(".cd-container .cd-timeline-block:nth-of-type(1) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - Juin 2022")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - Juin 2022")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2020 - Juin 2021")

    $(".cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(1)").text("Adaptation du logiciel open-source MRtrix3 software package pour le traitement de données issues de l'IRM de diffusion, qui ne pouvaient pas toutes être traitées avec la version ancienne de l'algorithme MSMT-CSD. Cet algorithme est souvant utilisé pour le traçage des fibres dans la matière blanche dans le cerveau.")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(2)").text("Thèse de master: Analyse de data issue de l’IRM de diffusion par encodage de diffusion arbitraire”.")

    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(1)").text("Investigation des services et technologies disponibles dans le monde pour la préconception, en utilisant le modèle 5D du développement de technologies médicales.")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(2)").text("Campagne publicitaire et activités d'engagement public pour la collecte de données concernant les connaissances du public sur la préconception, ainsi que pour établir les fonctionnalités les plus désirables et nécessaires dans une application mobile pour les soins préconception. Création du wireframe d'une application mobile idéale pour adresser le manque de services disponible dans le Royaume-Uni.")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(3)").text("Thèse de master de groupe: “PrecTech: Une étude globale des directives et services disponibles pour les soins préconception, et proposition d’une application mobile personnalisée pour les soins préconception“.")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(4)").text("La publication d'un article scientifique est actuellement en cours.")

    $(".cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(1)").text("Développement d’un nouvel outil pour résoudre un problème majeur dans la communauté de la neuroimagerie, avec des experts en apprentissage profond et en imagerie médicale.")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(2)").text("Développement d’un réseau de neurones supervisé pour la détection et correction d’artefacts dans des images cérébrales pédiatriques issues de l’IRM de diffusion. Développement d’un réseau auto-supervisé capable de détecter et classer les artefacts.")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(3)").text("Thèse de licence: “Apprentissage profond auto-supervisé pour la détection d’artefacts dans l’IRM cérébrale pédiatrique“.")

    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(1)").text("C++")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(2)").text("Shell")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(3)").text("MATLAB")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(4)").text("Développement Software")
    $(".cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(5)").text("Programmation Orientée Objet")

    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(1)").text("Engagement Public")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(2)").text("Développement de Tech. Médicale")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(3)").text("Développement d'App. Mobile")
    $(".cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(4)").text("Design de Wireframe")

    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(1)").text("Python")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(2)").text("Apprentissage Automatique")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(3)").text("Jupyter Notebooks")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(4)").text("PyTorch")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(5)").text("NumPy")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(6)").text("CNNs")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(7)").text("U-Nets")
    $(".cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(8)").text("Auto-encodeurs")

    // EDUCATION
    $(".education-container h2:nth-child(1)").text("Éducation")
    $(".education-container .education-row:nth-of-type(1) .education-location span").text("Londres, Royaume-Uni")
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .degree").text("Master Integré: Ingénierie Biomédicale")
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .degree").text("Baccalauréat Scientifique")

    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(1) .edu-description-1:nth-of-type(1)").text("Classification Finale: ") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(1) .edu-description-2:nth-of-type(2)").text("Mention Très Bien") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(2) .edu-description-1:nth-of-type(1)").text("Parcours: ") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(2) .edu-description-2:nth-of-type(2)").text("Apprentissage Automatique/Programmation")
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(3) .edu-description-1:nth-of-type(1)").text("Cours Pertinents: ") 
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(3) .edu-description-2:nth-of-type(2)").text("Programmation, Programmation Orientée Objet, Apprentissage Automatique Avancé, Mathématiques, Statistique Informatique,  Méthodes Informatiques.")
    $(".education-container .education-row:nth-of-type(1) .edu-column-2 .education-details li:nth-child(4)").text("Membre de l'Association d'Ingénierie et de l'Association de Robotique") 
  
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(1) .edu-description-1:nth-of-type(1)").text("Classification Finale: ") 
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(1) .edu-description-2:nth-of-type(2)").text("Mention Très Bien (17/20)") 
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(2) .edu-description-1:nth-of-type(1)").text("Spécialité: ") 
    $(".education-container .education-row:nth-of-type(2) .edu-column-2 .education-details li:nth-child(2) .edu-description-2:nth-of-type(2)").text("Physique-Chimie")

    // SKILLS
    $(".skills-container h2:nth-child(1)").text("Compétences")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(1)").text("Python")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(2)").text("C++")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(3)").text("MATLAB")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(4)").text("SQL")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(5)").text("HTML")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(6)").text("CSS")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(7)").text("JavaScript")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(8)").text("Bash/Shell Scripting")

    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(1)").text("Développement Software")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(2)").text("Programmation Orientée Objet")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(3)").text("Unit Testing")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(4)").text("Apprentissage Automatique")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(5)").text("Visualisation de Données")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(6)").text("Analyse de Données")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(7)").text("CAD")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(8)").text("Segmentation d'Images 3D")

    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(1)").text("Git")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(2)").text("Tableau")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(3)").text("MySQL")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(4)").text("Jupyter Notebooks")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(5)").text("Visual Studio Code")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(6)").text("Microsoft Office")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(7)").text("Bootstrap")

    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(1)").text("Résolution de Problèmes")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(2)").text("Raisonnement Logique")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(3)").text("Flexibilité")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(4)").text("Adaptabilité")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(5)").text("Esprit d'équipe")

    // LANGUAGES
    $(".languages-container h2").text("Langues")
    $(".languages-container .row .col-lg-3:nth-of-type(1) p").text("Anglais")
    $(".languages-container .row .col-lg-3:nth-of-type(2) p").text("Portugais")
    $(".languages-container .row .col-lg-3:nth-of-type(3) p").text("Français")
    $(".languages-container .row .col-lg-3:nth-of-type(4) p").text("Roumain")

    // CONTACT
    $(".contact-container #contact-text").text("Je suis actuellement à la recherche d'une opportunité pour démontrer mes compétences et pour en apprendre davantage.")
    $(".contact-container .btn span").text("Contactez-moi!")

    // FOOTER
    $(".bottom-container #credits span").text("Icônes faits par")

  })
});

// NAVBAR COLLAPSE ON CLICK
$('.js-scroll-trigger').click(function(){
  $('.navbar-collapse').collapse('hide');
});

// ANIMATION SCRIPTS
// EXPERIENCE ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[0].classList.add("fadeIn")
      document.querySelectorAll(".animated")[1].classList.add("fadeInUp")
    }
  })
})
observer.observe(document.querySelector(".cd-container"))

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[2].classList.add("fadeInUp")
    }
  })
})
observer2.observe(document.querySelector("#exp-block-2"))

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[3].classList.add("fadeInUp")
    }
  })
})
observer3.observe(document.querySelector("#exp-block-3"))

// EDUCATION ANIMATIONS
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[4].classList.add("fadeInFast")
      document.querySelectorAll(".animated")[5].classList.add("fadeInUpFast")
      document.querySelectorAll(".animated")[6].classList.add("fadeInUpFast")
    }
  })
})
observer4.observe(document.querySelector("#education"))

// SKILLS ANIMATIONS
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[7].classList.add("fadeInFast")
      document.querySelectorAll(".animated")[8].classList.add("fadeInUpFast")
    }
  })
})
observer5.observe(document.querySelector("#skills"))

// LANGUAGES ANIMATIONS
const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[9].classList.add("fadeInFast")
      document.querySelectorAll(".animated")[10].classList.add("fadeInLeftFast")
      document.querySelectorAll(".animated")[11].classList.add("fadeInLeftFast")
      document.querySelectorAll(".animated")[12].classList.add("fadeInRightFast")
      document.querySelectorAll(".animated")[13].classList.add("fadeInRightFast")
    }
  })
})
observer6.observe(document.querySelector("#languages"))

// CONTACT-ME ANIMATIONS
const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".animated")[14].classList.add("fadeInFast")
      document.querySelectorAll(".animated")[15].classList.add("fadeInFast")
      document.querySelectorAll(".animated")[16].classList.add("fadeInUpFast")
    }
  })
})
observer7.observe(document.querySelector("#contact-me"))
