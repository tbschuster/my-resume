// LANGUAGE SELECT
// ENGLISH
$(function(){
  $(".en").click(function() {
    // NAVBAR
    $(".collapse ul:nth-child(1) li:nth-child(1) a").text("About")
    $(".collapse ul:nth-child(1) li:nth-child(2) a").text("Experience")
    $(".collapse ul:nth-child(1) li:nth-child(3) a").text("Projects")
    $(".collapse ul:nth-child(1) li:nth-child(4) a").text("Education")
    $(".collapse ul:nth-child(1) li:nth-child(5) a").text("Skills")
    $(".collapse ul:nth-child(1) li:nth-child(7) a").text("Languages")
    $(".collapse ul:nth-child(1) li:nth-child(8) a").text("Contact")
    $(".collapse ul:nth-child(2) li:nth-child(1) a").text("English")
    $(".collapse ul:nth-child(2) li:nth-child(2) a").text("French")
    $(".language-selected").text("EN");
    $(".language-selected").removeClass("change-fr")
    $(".language-selected").addClass("change-en");

    // ABOUT ME
    $("#greeting-header").text("Hi,")
    $("#greeting-name").text("I'm Beatrice.")
    $(".intro-text").text("I'm a Software Developer, passionate about technology and programming.")

    // Experience
    $(".experience-container h2:nth-child(1)").text("Experience")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(1) h3:nth-of-type(1)").text("Software Developer")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) h3:nth-of-type(1)").text("Software Developer")

    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(1) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Feb. 2025 - Present")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2022 - Jan 2025")

    $('.self-employed-project-title').text("Project: coog by Coopengo (February 2025 - July 2025)")

    $('#self-employed-1 .job-description-list').children('li:nth-child(1)').not('.self-employed-project-title').text("Treated 90+ tickets, including bugs and features")
    $('#self-employed-1 .job-description-list').children('li:nth-child(2)').not('.self-employed-project-title').text("Designed and estimated the cost of multiple new features")
    $('#self-employed-1 .job-description-list').children('li:nth-child(3)').not('.self-employed-project-title').text("Reviewed other developers' code and helped juniors improve their solutions and write more effective tests via pair programming")
    $('#self-employed-1 .job-description-list').children('li:nth-child(4)').not('.self-employed-project-title').text("Worked on data migration from a client's previous software application to a PostgreSQL database for coog")

    $("#self-employed-1 .content-skills li:nth-child(1)").text("Python")
    $("#self-employed-1 .content-skills li:nth-child(2)").text("PostgreSQL")
    $("#self-employed-1 .content-skills li:nth-child(3)").text("JavaScript")
    $("#self-employed-1 .content-skills li:nth-child(4)").text("Tryton")
    $("#self-employed-1 .content-skills li:nth-child(5)").text("Agile Software Development")
    $("#self-employed-1 .content-skills li:nth-child(6)").text("Object-oriented Programming")

    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(1)").text("Took part in a task-force to clear the backlog and to ensure a client extended their contract with the company (70+ bugs fixed within the first year)")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(2)").text("Worked towards the increase of test execution speed by over 50%, helping to save multiple hours of execution time per week")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(3)").text("Leveraged problem-solving skills and knowledge of the company's product and codebase for feature/solution design and cost estimation processes")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(4)").text("Developed and tested multiple features using the Tryton framework, Python and PostgreSQL, handling back-end and APIs (including B2B and B2C with GraphQL)")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(5)").text("Mentored 1 junior back-end developer on the team and contributed to the recruitment and onboarding process")

    $("#employed-1 .content-skills li:nth-child(1)").text("Python")
    $("#employed-1 .content-skills li:nth-child(2)").text("PostgreSQL")
    $("#employed-1 .content-skills li:nth-child(3)").text("Tryton")
    $("#employed-1 .content-skills li:nth-child(4)").text("GraphQL")
    $("#employed-1 .content-skills li:nth-child(5)").text("Agile Software Development")
    $("#employed-1 .content-skills li:nth-child(6)").text("Object-oriented Programming")

    // Projects
    $(".projects-container h2:nth-child(1)").text("Projects")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) h3:nth-of-type(1)").text("M.Eng. Research Project")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) h3:nth-of-type(1)").text("M.Eng. Group Research Project")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) h3:nth-of-type(1)").text("B.Eng. Research Project")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - June 2022")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - June 2022")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2020 - June 2021")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(1)").text("Adaptation of the MRtrix3 software package to process diffusion MRI data that couldn't be processed with older algorithms, for the purpose of interpreting white matter fibre orientation in the brain using a technique known as MSMT-CSD.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(2)").text("Master's thesis: “Analysis of multi-shell diffusion MRI data with arbitrary diffusion encoding”.")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(1)").text("Investigation of preconception care services and technologies available worldwide using the 5D model of medical technology development.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(2)").text("Advertising and public engagement activities to gather data from the public for a preconception care app, to address the lack of available services in the UK. Creation of mobile app wireframe.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(3)").text("Group master's thesis: “PrecTech: A Global Review of Preconception Care Guidelines and Services and a Proposal for a Personalised Preconception Care Mobile Application”.")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(1)").text("Novel tool to solve a major issue in the neuroimaging community alongside medical imaging and deep learning experts.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(2)").text("Development of a supervised deep neural network to detect and correct artefacts in paediatric brain diffusion MRI. Development of a self-supervised network capable of detecting and classifying artefacts.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(3)").text("Bachelor's thesis: “Self-supervised deep-learning for artefact detection in paediatric brain diffusion MRI”.")
  
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(1)").text("C++")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(2)").text("Shell")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(3)").text("MATLAB")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(4)").text("Software Development")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(5)").text("Object-oriented Programming")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(1)").text("Public Engagement")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(2)").text("Medical Device Development")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(3)").text("Mobile App Development")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(4)").text("Wireframe Design")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(1)").text("Python")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(2)").text("Machine Learning")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(3)").text("Jupyter Notebooks")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(4)").text("PyTorch")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(5)").text("NumPy")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(6)").text("CNNs")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(7)").text("U-Nets")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(8)").text("Autoencoders")

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
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(2)").text("C#")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(3)").text("C++")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(4)").text("MATLAB")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(5)").text("SQL")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(6)").text("HTML")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(7)").text("CSS")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(8)").text("JavaScript")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(9)").text("Bash/Shell scripting")

    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(1)").text("Software development")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(2)").text("Object-oriented programming")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(3)").text("Unit testing")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(4)").text("Machine learning")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(5)").text("Data visualisation")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(6)").text("Data analysis")

    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(1)").text("Git")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(2)").text("PostgreSQL")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(3)").text("MySQL")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(4)").text("Tryton")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(5)").text("Jupyter Notebooks")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(6)").text("Visual Studio Code")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(7)").text("Microsoft Office")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(8)").text("Bootstrap")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(9)").text("Tableau")

    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(1)").text("Problem solving")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(2)").text("Critical thinking")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(3)").text("Time management")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(4)").text("Attention to detail")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(5)").text("Flexibility")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(6)").text("Adaptability")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(7)").text("Teamwork")

    // LANGUAGES
    $(".languages-container h2").text("Languages")
    $(".languages-container .row .col-lg-3:nth-of-type(1) p").text("English")
    $(".languages-container .row .col-lg-3:nth-of-type(2) p").text("Portuguese")
    $(".languages-container .row .col-lg-3:nth-of-type(3) p").text("French")
    $(".languages-container .row .col-lg-3:nth-of-type(4) p").text("Romanian")

    // CONTACT
    $(".contact-container #contact-text").html("I've recently moved to Canada and I am working as a self-employed software developer.<br>I am open to new opportunities and experiences, if you're interested in working together feel free to reach out :)")
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
    $(".collapse ul:nth-child(1) li:nth-child(3) a").text("Projets")
    $(".collapse ul:nth-child(1) li:nth-child(4) a").text("Éducation")
    $(".collapse ul:nth-child(1) li:nth-child(5) a").text("Compétences")
    $(".collapse ul:nth-child(1) li:nth-child(6) a").text("Langues")
    $(".collapse ul:nth-child(1) li:nth-child(7) a").text("Contact")
    $(".collapse ul:nth-child(2) li:nth-child(1) a").text("Anglais")
    $(".collapse ul:nth-child(2) li:nth-child(2) a").text("Français")
    $(".language-selected").text("FR");
    $(".language-selected").removeClass("change-en")
    $(".language-selected").addClass("change-fr");

    // ABOUT ME
    $("#greeting-header").text("Bonjour,")
    $("#greeting-name").text("Je suis Beatrice.")
    $(".intro-text").text("Je suis une développeuse informatique passionnée par la technologie et la programmation.")

    // Experience
    $(".experience-container h2:nth-child(1)").text("Expérience")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(1) h3:nth-of-type(1)").text("Développeuse Informatique")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) h3:nth-of-type(1)").text("Développeuse Informatique")

    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(1) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Fév. 2025 - Présent")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2022 - Jan. 2025")

    $('.self-employed-project-title').text("Projet: coog par Coopengo (Février 2025 - Juillet 2025)")

    $('#self-employed-1 .job-description-list').children('li:nth-child(1)').not('.self-employed-project-title').text("90+ tickets traités, y compris des anomalies et de nouvelles fonctionnalités")
    $('#self-employed-1 .job-description-list').children('li:nth-child(2)').not('.self-employed-project-title').text("Design et chiffrage de plusieurs nouvelles fonctionnalités")
    $('#self-employed-1 .job-description-list').children('li:nth-child(3)').not('.self-employed-project-title').text("Revue de code et aide aux juniors pour améliorer leur code et solutions à travers de peer programming")
    $('#self-employed-1 .job-description-list').children('li:nth-child(4)').not('.self-employed-project-title').text("Participation à la migration des données d'un client vers une nouvelle base de données PostgreSQL pour coog")

    $("#self-employed-1 .content-skills li:nth-child(1)").text("Python")
    $("#self-employed-1 .content-skills li:nth-child(2)").text("PostgreSQL")
    $("#self-employed-1 .content-skills li:nth-child(3)").text("JavaScript")
    $("#self-employed-1 .content-skills li:nth-child(4)").text("Tryton")
    $("#self-employed-1 .content-skills li:nth-child(5)").text("Développement Software Agile")
    $("#self-employed-1 .content-skills li:nth-child(6)").text("Programmation Orientée Objet")

    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(1)").text("Participation dans une task-force pour le nettoyage de la backlog afin d'assurer l'extension du contrat de l'un des clients de l'entreprise (70+ bugs corrigés pendant la première année)")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(2)").text("Travail dans un chantier de réduction du temps d'exécution des tests: le temps d'exécution a été réduit de plus de 50%, ce qui économise plusieurs heures d'exécution par semaine")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(3)").text("Mise en pratique des compétences de résolution de problèmes et de la connaissance sur le produit et la base de code pour le design et chiffrage de features/solutions")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(4)").text("Développement et test de plusieurs features en utilisant le framework Tryton, Python et PosgreSQL, côté back-end et API (y compris B2B et B2C avec GraphQL)")
    $(".experience-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(5)").text("Mentorat d'un développeur junior back-end de l'équipe et contribution au processus de recrutement et onboarding")

    $("#employed-1 .content-skills li:nth-child(1)").text("Python")
    $("#employed-1 .content-skills li:nth-child(2)").text("PostgreSQL")
    $("#employed-1 .content-skills li:nth-child(3)").text("Tryton")
    $("#employed-1 .content-skills li:nth-child(4)").text("GraphQL")
    $("#employed-1 .content-skills li:nth-child(5)").text("Développement Software Agile")
    $("#employed-1 .content-skills li:nth-child(6)").text("Programmation Orientée Objet")

    // Projects
    $(".projects-container h2:nth-child(1)").text("Projects").text("Projets")
    $(".projects-container .projects-container.cd-container .cd-timeline-block:nth-of-type(1) h3:nth-of-type(1)").text("Master: Projet de Recherche")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) h3:nth-of-type(1)").text("Master: Projet de Recherche en Groupe")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) h3:nth-of-type(1)").text("Licence: Projet de Recherche")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - Juin 2022")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2021 - Juin 2022")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .timeline-content-info:nth-of-type(1) .timeline-content-info-date").text("Oct. 2020 - Juin 2021")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(1)").text("Adaptation du logiciel open-source MRtrix3 software package pour le traitement de données issues de l'IRM de diffusion, qui ne pouvaient pas toutes être traitées avec la version ancienne de l'algorithme MSMT-CSD. Cet algorithme est souvant utilisé pour le traçage des fibres dans la matière blanche dans le cerveau.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .job-description-list li:nth-child(2)").text("Thèse de master: Analyse de data issue de l'IRM de diffusion par encodage de diffusion arbitraire”.")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(1)").text("Investigation des services et technologies disponibles dans le monde pour la préconception, en utilisant le modèle 5D du développement de technologies médicales.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(2)").text("Campagne publicitaire et activités d'engagement public pour la collecte de données concernant les connaissances du public sur la préconception, ainsi que pour établir les fonctionnalités les plus désirables et nécessaires dans une application mobile pour les soins préconception. Création du wireframe d'une application mobile idéale pour adresser le manque de services disponible dans le Royaume-Uni.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .job-description-list li:nth-child(3)").text("Thèse de master de groupe: “PrecTech: Une étude globale des directives et services disponibles pour les soins préconception, et proposition d'une application mobile personnalisée pour les soins préconception“.")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(1)").text("Développement d'un nouvel outil pour résoudre un problème majeur dans la communauté de la neuroimagerie, avec des experts en apprentissage profond et en imagerie médicale.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(2)").text("Développement d'un réseau de neurones supervisé pour la détection et correction d'artefacts dans des images cérébrales pédiatriques issues de l'IRM de diffusion. Développement d'un réseau auto-supervisé capable de détecter et classer les artefacts.")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .job-description-list li:nth-child(3)").text("Thèse de licence: “Apprentissage profond auto-supervisé pour la détection d'artefacts dans l'IRM cérébrale pédiatrique“.")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(1)").text("C++")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(2)").text("Shell")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(3)").text("MATLAB")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(4)").text("Développement Software")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(1) .content-skills li:nth-child(5)").text("Programmation Orientée Objet")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(1)").text("Engagement Public")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(2)").text("Développement de Tech. Médicale")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(3)").text("Développement d'App. Mobile")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(2) .content-skills li:nth-child(4)").text("Design de Wireframe")

    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(1)").text("Python")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(2)").text("Apprentissage Automatique")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(3)").text("Jupyter Notebooks") 
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(4)").text("PyTorch")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(5)").text("NumPy")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(6)").text("CNNs")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(7)").text("U-Nets")
    $(".projects-container .cd-container .cd-timeline-block:nth-of-type(3) .content-skills li:nth-child(8)").text("Auto-encodeurs")

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
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(2)").text("C#")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(3)").text("C++")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(4)").text("MATLAB")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(5)").text("SQL")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(6)").text("HTML")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(7)").text("CSS")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(8)").text("JavaScript")
    $(".skills-container .row .col-lg-3:nth-of-type(1) li:nth-child(9)").text("Bash/Shell Scripting")

    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(1)").text("Développement software")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(2)").text("Programmation orientée objet")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(3)").text("Tests unitaires")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(4)").text("Apprentissage automatique")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(5)").text("Visualisation de données")
    $(".skills-container .row .col-lg-3:nth-of-type(2) li:nth-child(6)").text("Analyse de données")

    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(1)").text("Git")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(2)").text("PostgreSQL")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(3)").text("MySQL")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(4)").text("Tryton")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(5)").text("Jupyter Notebooks")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(6)").text("Visual Studio Code")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(7)").text("Microsoft Office")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(8)").text("Bootstrap")
    $(".skills-container .row .col-lg-3:nth-of-type(3) li:nth-child(9)").text("Tableau")

    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(1)").text("Résolution de problèmes")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(2)").text("Raisonnement logique")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(3)").text("Gestion de temps")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(4)").text("Attention au détail")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(5)").text("Flexibilité")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(6)").text("Adaptabilité")
    $(".skills-container .row .col-lg-3:nth-of-type(4) li:nth-child(7)").text("Esprit d'équipe")

    // LANGUAGES
    $(".languages-container h2").text("Langues")
    $(".languages-container .row .col-lg-3:nth-of-type(1) p").text("Anglais")
    $(".languages-container .row .col-lg-3:nth-of-type(2) p").text("Portugais")
    $(".languages-container .row .col-lg-3:nth-of-type(3) p").text("Français")
    $(".languages-container .row .col-lg-3:nth-of-type(4) p").text("Roumain")

    // CONTACT
    $(".contact-container #contact-text").html("J'ai récemment déménagé au Canada et je travaille actuellement en tant que développeuse indépendante.<br>Je suis ouverte à de nouvelles opportunités et expériences, si vous êtes intéressé à travailler ensemble n'hésitez pas à me contacter :)")
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
// EXPERIENCE/PROJECTS ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $(".experience-container .animated")[0].classList.add("fadeIn")
      $(".experience-container .animated")[1].classList.add("fadeInUp")
    }
  })
})
observer.observe($("#experience")[0])

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $(".experience-container .animated")[2].classList.add("fadeInUp")
    }
  })
})
observer2.observe($("#experience .cd-timeline-block")[0])


const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $(".projects-container .animated")[0].classList.add("fadeIn")
      $(".projects-container .animated")[1].classList.add("fadeInUp")
    }
  })
})
observer3.observe($("#projects")[0])

const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $("#exp-block-2")[0].classList.add("fadeInUp")
    }
  })
})
observer4.observe(document.querySelector("#exp-block-2"))

const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $("#exp-block-3")[0].classList.add("fadeInUp")
    }
  })
})
observer5.observe(document.querySelector("#exp-block-3"))

// EDUCATION ANIMATIONS
const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $(".education-container .animated")[0].classList.add("fadeIn")
      $(".education-container .animated")[1].classList.add("fadeInUp")
      $(".education-container .animated")[2].classList.add("fadeInUp")
    }
  })
})
observer6.observe(document.querySelector("#education"))

// SKILLS ANIMATIONS
const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $(".skills-container .animated")[0].classList.add("fadeInFast")
      $(".skills-container .animated")[1].classList.add("fadeInUpFast")
    }
  })
})
observer7.observe(document.querySelector("#skills"))

// LANGUAGES ANIMATIONS
const observer8 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $(".languages-container .animated")[0].classList.add("fadeInFast")
      $(".languages-container .animated")[1].classList.add("fadeInLeftFast")
      $(".languages-container .animated")[2].classList.add("fadeInLeftFast")
      $(".languages-container .animated")[3].classList.add("fadeInRightFast")
      $(".languages-container .animated")[4].classList.add("fadeInRightFast")
    }
  })
})
observer8.observe(document.querySelector("#languages"))

// CONTACT-ME ANIMATIONS
const observer9 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $(".contact-container .animated")[0].classList.add("fadeInFast")
      $(".contact-container .animated")[1].classList.add("fadeInFast")
      $(".contact-container .animated")[2].classList.add("fadeInUpFast")
    }
  })
})
observer9.observe(document.querySelector("#contact-me"))
