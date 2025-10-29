PROJECTS = [
    # --- Projets phares ---
    {
        "slug": "unitydesk",
        "title": "UnityDesk - Plateforme de mise en relation pour la gestion des grèves",
        "summary": "Application Laravel 11 + Tailwind (Flowbite) pour faciliter la communication, la planification des réunions et l’archivage sécurisé entre syndicats et autorités.",
        "image_url": "/images/projects/unitydesk.png",
        "tags": ["Web"],
        "impact": "Communication centralisée, coordination améliorée, meilleure traçabilité des échanges",
        "learned": "Architecture MVC Laravel, gestion des rôles/permissions, UI Tailwind/Flowbite",
    },
    {
        "slug": "pad-escales",
        "title": "Gestion des escales de navires & facturation (Port Autonome de Dakar)",
        "summary": "Application web (Java EE, JSP/Servlets, MariaDB, Tomcat) pour gérer les escales, générer les bons de pilotage et automatiser la facturation avec traçabilité.",
        "image_url": "/images/projects/pad-escales.png",
        "tags": ["Web", "Data"],
        "impact": "Réduction des erreurs, accès centralisé, processus métiers plus rapides",
        "learned": "Analyse métier, modélisation UML, architecture 3-tiers, sécurité & reporting",
    },
    {
        "slug": "parrainages-sn",
        "title": "Gestion des parrainages de candidature — Sénégal",
        "summary": "Digitalisation du parrainage : import/contrôle du fichier électoral, saisie candidatures, période d’ouverture, authentification électeur et suivi temps réel.",
        "image_url": "/images/projects/parrainages-sn.png",
        "tags": ["Web", "Data"],
        "impact": "Traçabilité, intégrité des données, transparence du processus",
        "learned": "Contrôles checksum/UTF-8, flux d’inscription & OTP, dashboards",
    },
    {
        "slug": "sgns-docs",
        "title": "Plateforme de gestion documentaire interne sécurisée (SGNS) - Proposition",
        "summary": "Concept d’application pour centraliser, classer et sécuriser cartes, rapports et données techniques, avec recherche avancée, rôles et tableaux de bord.",
        "image_url": "/images/projects/sgns-docs.png",
        "tags": ["Web", "Data"],
        "impact": "Accès rapide & sécurisé aux contenus, meilleure organisation interne",
        "learned": "Conception de GED, sécurité & journalisation, charts pour KPIs",
    },

    # --- Projet orienté infra / devops ---
    {
        "slug": "smartech",
        "title": "Smartech - Déploiement d’une application et d’une infra réseau",
        "summary": "Mise en place d’une appli et d’une infrastructure intégrant DNS, messagerie, FTP, SSH, VNC/NoVNC et RDP, avec sécurisation et supervision de base.",
        "image_url": "/images/projects/projet-smartech.png",
        "tags": ["Web", "DevOps"],
        "impact": "Environnement multi-services reproductible, meilleure compréhension réseaux & services",
        "learned": "DNS/FTP/SSH, reverse proxy, durcissement basique, scripts d’automatisation",
    },

    # --- Projets en cours ---
    {
        "slug": "aide-familiale",
        "title": "Plateforme d’aide familiale - Projet en cours",
        "summary": "Application web et mobile pour connecter familles et aides ménagères, intégrant un chatbot vocal en Wolof, un système de missions géolocalisées et une interface simple pensée pour des publics peu alphabétisés.",
        "image_url": "/images/projects/aide-familiale.png",
        "tags": ["Web", "Mobile", "En cours"],
        "impact": "Facilite l’accès aux services domestiques et crée des opportunités pour des personnes.",
        "learned": "Méthodes de conception inclusive, intégration chatbot vocal, UI/UX simple",
    },
    {
        "slug": "inventaire-magasin",
        "title": "Application d’inventaire et gestion de ventes",
        "summary": "Application en développement pour gérer un magasin familial : inventaire produits, ventes rapides, suivi des dettes et statistiques fiables.",
        "image_url": "/images/projects/inventaire-magasin.png",
        "tags": ["Web", "Data", "En cours"],
        "impact": "Un inventaire toujours juste (≥95%), réduction des erreurs, anticipation des ruptures et gain de temps pour la gestion quotidienne.",
        "learned": "Django avec MySQL, intégration API Remove.bg et Cloudinary, IA avec CLIP/Prophet, design simple et responsive",
    },

    # --- Mini-projets académiques ---
    {
        "slug": "flutter-meteo",
        "title": "Application Météo (académique)",
        "summary": "Appli simple avec récupération de données météo et affichage responsive.",
        "image_url": "/images/projects/flutter-meteo.png",
        "tags": ["Mobile"],
        "impact": "Pratique UI & appels réseau côté mobile",
        "learned": "Gestion d’état, récupération d’API, composantisation",
    },
    {
        "slug": "sudoku-java",
        "title": "Solveur Sudoku en Java",
        "summary": "Résolution automatique de grilles via backtracking et heuristiques simples.",
        "image_url": "/images/projects/sudoku-java.png",
        "tags": ["Java", "Algorithmique"],
        "impact": "Renforcement de la logique algorithmique et de la récursivité",
        "learned": "Backtracking, optimisation, tests sur cas limites",
    },
    {
        "slug": "taskmanager",
        "title": "Task Manager (mobile)",
        "summary": "Application de gestion de tâches : création, édition, statut, suppression.",
        "image_url": "/images/projects/taskmanager.png",
        "tags": ["Mobile"],
        "impact": "Structuration d’une app CRUD mobile",
        "learned": "Architecture simple, navigation, persistance locale",
    },
    {
        "slug": "guide-touristique",
        "title": "Guide Touristique (PHP)",
        "summary": "Site permettant de parcourir des lieux, catégories et informations pratiques.",
        "image_url": "/images/projects/guide-touristique.png",
        "tags": ["Web"],
        "impact": "Base d’un site dynamique avec catégories et fiches",
        "learned": "PHP procédural/MVC léger, routing basique, templating",
    },
    {
        "slug": "gestion-bibliotheque",
        "title": "Gestion de Bibliothèque",
        "summary": "CRUD livres/lecteurs/emprunts avec recherche et gestion des retards.",
        "image_url": "/images/projects/gestion-bibliotheque.png",
        "tags": ["Web", "Data"],
        "impact": "Vision d’ensemble d’un flux de gestion documentaire",
        "learned": "Modélisation SQL, formulaires, validations, pagination",
    },
]


EXPERIENCE = [
    {
        "company": "Port Autonome de Dakar",
        "role": "Développeuse Web & Logicielle",
        "period": "Mai - Juil. 2025",
        "description": "Conception et développement d’une application de gestion des escales maritimes et de facturation des prestations portuaires. Technologies : Java EE, JSP/Servlets, SQL, JDBC, Apache Tomcat.",
        "stack": ["Java EE", "JSP/Servlets", "SQL", "Tomcat"]
    },
    {
        "company": "CreaticStudio",
        "role": "Développeuse Web",
        "period": "Mai - Juil. 2024",
        "description": "Mise en place d’une plateforme de mise en relation (UnityDesk) pour la gestion des grèves dans l’enseignement au Sénégal. Technologies : Laravel 11, TailwindCSS, Flowbite.",
        "stack": ["Laravel 11", "TailwindCSS", "Flowbite"]
    },
    {
        "company": "École supérieure polytechnique (ESP)",
        "role": "Projets académiques",
        "period": "2022 - 2025",
        "description": "Projets variés web et mobile : administration réseaux et systèmes, développement d’applications et gestion de bases de données.",
        "stack": ["React", "Next.js", "PHP", "Python", "Java", "Flutter","Express.js", "Django"]
    }
]


SKILLS = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS", "Flowbite"],
    "Backend": ["Java", "PHP", "Laravel", "Python", "Django", "Express.js", "Node.js"],
    "Bases de données": ["MySQL", "MongoDB", "SQLite", "MariaDB", "PostgreSQL"],
    "Systèmes & Réseaux": ["Windows", "Linux", "macOS", "Admin réseaux"],
}
