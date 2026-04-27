export type Lang = 'en' | 'de';

export const translations = {
  en: {
    meta: {
      title: 'eunoia Quest',
      description: 'Gamified Mental Health Screening Platform on your platform.',
    },
    header: {
      logo: 'eunoia',
      nav: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#features', label: 'Features' },
        { href: '#team', label: 'Team' },
        { href: '#contact', label: 'Contact' },
        { href: '/blog', label: 'Blog' },
      ],
      langSwitcher: { label: 'DE', href: '/de' },
      menuOpenLabel: 'Open menu',
      menuCloseLabel: 'Close menu',
    },
    hero: {
      title: 'Meet eunoia Quest',
      subtitle: 'Gamified mental health screening on your platform.',
      cta: 'Learn More',
    },
    about: {
      heading: 'Our Mission',
      body: "At eunoia Quest, we're revolutionizing mental health assessments through engaging video games. Our mission is to provide accurate, unbiased, and enjoyable screening experiences, making the process less stressful and more insightful for everyone involved.",
      foundingStoryTitle: 'How We Started',
      foundingStoryBody: "eunoia Quest grew from academic research at the University of Gottingen. Built on Sara Ahmadi Majd's master's thesis and shaped through the Lift-Off startup competition, we transformed a research concept into a practical screening product for real clinical and institutional use.",
      learnMore: 'Learn More',
      imageAlt: 'eunoia Quest platform illustration',
    },
    problem: {
      heading: 'Why This Matters',
      subheading: 'Mental health disorders are widespread, but initial screening remains one of the largest bottlenecks in care delivery.',
      stats: [
        {
          value: '1 in 8',
          label: 'people worldwide live with a mental disorder.',
        },
        {
          value: 'Up to 70%',
          label: 'of cases remain undiagnosed and untreated.',
        },
      ],
      bottleneckTitle: 'Diagnosis Is the Bottleneck',
      bottleneckPoints: [
        'Initial diagnosis is still mostly manual, time-intensive, and difficult to scale.',
        'Psychotherapists often spend much longer than planned on first-round screening.',
        'Patients can face waiting lists of several months before receiving structured assessment.',
      ],
    },
    features: {
      heading: 'Why Choose Eunoia?',
      subheading: 'Discover the advantages of our gamified screening platform.',
      items: [
        {
          title: 'Machine Learning',
          description: 'Pre-diagnose patients through scientifically-validated machine learning algorithms.',
        },
        {
          title: 'Engaging Gameplay',
          description: 'Assessments that feel less like tests and more like playing a game.',
        },
        {
          title: 'Actionable Analytics',
          description: 'Receive clear, comprehensive reports, so mental health professionals can decide easier and faster.',
        },
        {
          title: 'Secure & Private',
          description: 'Your data is protected with industry-standard security measures.',
        },
      ],
    },
    howItWorks: {
      heading: 'How It Works',
      subheading: 'A serious game workflow that turns early screening into a structured, engaging, and data-informed process.',
      steps: [
        {
          title: 'Play Scenario-Based Assessments',
          description: 'Participants interact with realistic social scenarios in an engaging game-like format.',
        },
        {
          title: 'Capture Multi-Modal Signals',
          description: 'The platform captures responses, voice, and interaction behavior during the session.',
        },
        {
          title: 'Process Data Securely',
          description: 'Encrypted, anonymized data is processed with AI and machine learning models in the background.',
        },
        {
          title: 'Deliver Structured Reports',
          description: 'Clinics and professionals receive standardized screening outputs to support faster intake decisions.',
        },
      ],
      note: 'Final clinical assessment remains with licensed professionals.',
      integration: 'eunoia Quest is embeddable and can be integrated into existing customer platforms via secure APIs.',
    },
    science: {
      heading: 'Backed by Scientific Research',
      subheading: 'Our approach is grounded in peer-reviewed work and validated through real study settings.',
      highlights: [
        'The core methodology was presented at IROS24 in Abu Dhabi.',
        'The study focused on screening Social Anxiety Disorder through multimedia scenario-based assessment.',
        'Machine learning classifiers were trained to identify patterns and support accurate early screening.',
      ],
      paperTitle: 'Published Scientific Paper',
      paperVenue: 'Ahmadi Majd et al., Frontiers in Robotics and AI (2025)',
      paperLinkText: 'Read the Paper',
      paperLink: 'https://doi.org/10.3389/frobt.2025.1620609',
    },
    featuredIn: {
      heading: 'Backed by',
      logos: [
        {
          src: 'https://github.com/user-attachments/assets/478e143c-d534-42ab-a8de-400f8d5b4b73',
        },
        {
          src: 'https://github.com/user-attachments/assets/24464eb5-ff8b-475a-bbb9-a4d147177e26',
        },
      ],
    },
    audience: {
      heading: 'Who It Is For',
      subheading: 'Built for organizations that need scalable, structured, and clinically responsible early screening.',
      segments: [
        {
          title: 'Clinics & Therapy Centers',
          description: 'Standardize intake screening and reduce staff burden while preserving clinical oversight.',
        },
        {
          title: 'Universities',
          description: 'Support student mental health services with engaging and structured first-line assessment tools.',
        },
        {
          title: 'Research Labs',
          description: 'Collect structured behavioral and interaction data for studies in psychology and digital health.',
        },
      ],
    },
    team: {
      heading: 'Meet Our Team',
      subheading: "The minds behind Eunoia's innovative assessment solutions.",
      members: [
        { name: 'Sara Ahmadi Majd', role: 'Co-Founder & Lead Scientist' },
        { name: 'Alex (M.H.) Emami', role: 'Co-Founder & CTO' },
      ],
    },
    contact: {
      heading: 'Get In Touch',
      subheading: "Have questions or want to learn more? We'd love to hear from you.",
      infoHeading: 'Contact Information',
      address: 'Göttingen, 37073, Lower Saxony',
      ctaText: 'Ready to transform your assessments? Reach out to our team directly.',
      ctaButton: 'Email Us',
      mapPlaceholder: 'Map Placeholder',
    },
    blog: {
      title: 'Blog — eunoia Quest',
      description: 'Insights on gamified mental health screening, product updates, and the science behind Eunoia Quest.',
      heading: 'Blog',
      subheading: 'Insights, updates, and stories from the Eunoia Quest team.',
      readMore: 'Read more',
      backToBlog: '← Back to Blog',
      publishedOn: 'Published on',
      by: 'By',
      readInGerman: 'Auf Deutsch lesen',
      readInEnglish: 'Read in English',
    },
    footer: {
      allRightsReserved: 'All rights reserved.',
      address: 'Göttingen, 37073, Lower Saxony',
    },
  },

  de: {
    meta: {
      title: 'eunoia Quest – Spielbasiertes Gesundheitsscreening',
      description: 'Spielbasiertes psychisches Gesundheitsscreening auf Ihrer Plattform.',
    },
    header: {
      logo: 'eunoia',
      nav: [
        { href: '#home', label: 'Startseite' },
        { href: '#about', label: 'Über uns' },
        { href: '#features', label: 'Funktionen' },
        { href: '#team', label: 'Team' },
        { href: '#contact', label: 'Kontakt' },
        { href: '/blog', label: 'Blog' },
      ],
      langSwitcher: { label: 'EN', href: '/' },
      menuOpenLabel: 'Menü öffnen',
      menuCloseLabel: 'Menü schließen',
    },
    hero: {
      title: 'Entdecke eunoia Quest',
      subtitle: 'Spielbasiertes psychisches Gesundheitsscreening auf Ihrer Plattform.',
      cta: 'Mehr erfahren',
    },
    about: {
      heading: 'Unsere Mission',
      body: 'Bei eunoia Quest revolutionieren wir psychische Gesundheitsassessments durch fesselnde Videospiele. Unsere Mission ist es, genaue, vorurteilsfreie und angenehme Screening-Erfahrungen zu bieten, die den Prozess für alle Beteiligten weniger stressig und aufschlussreicher gestalten.',
      foundingStoryTitle: 'Unsere Entstehung',
      foundingStoryBody: 'eunoia Quest entstand aus akademischer Forschung an der Universitat Gottingen. Auf Basis von Sara Ahmadi Majds Masterarbeit und weiterentwickelt im Lift-Off Wettbewerb wurde aus einer wissenschaftlichen Idee ein praxisnahes Screening-Produkt fur Kliniken und Institutionen.',
      learnMore: 'Mehr erfahren',
      imageAlt: 'eunoia Quest Plattform-Illustration',
    },
    problem: {
      heading: 'Warum das wichtig ist',
      subheading: 'Psychische Erkrankungen sind weit verbreitet, doch gerade das erste Screening bleibt ein zentrales Nadelöhr der Versorgung.',
      stats: [
        {
          value: '1 von 8',
          label: 'Menschen weltweit lebt mit einer psychischen Erkrankung.',
        },
        {
          value: 'Bis zu 70%',
          label: 'der Falle bleiben unerkannt und unbehandelt.',
        },
      ],
      bottleneckTitle: 'Diagnostik ist das Nadelöhr',
      bottleneckPoints: [
        'Die Erstdiagnostik ist oft weiterhin manuell, zeitaufwandig und schwer skalierbar.',
        'Psychotherapeutinnen und Psychotherapeuten verbringen bei Erstscreenings oft deutlich mehr Zeit als geplant.',
        'Patientinnen und Patienten warten haufig mehrere Monate auf eine strukturierte Erstabklarung.',
      ],
    },
    features: {
      heading: 'Warum Eunoia wählen?',
      subheading: 'Entdecken Sie die Vorteile unserer spielbasierten Screening-Plattform.',
      items: [
        {
          title: 'Maschinelles Lernen',
          description: 'Vorab-Diagnose von Patienten durch wissenschaftlich validierte Algorithmen für maschinelles Lernen.',
        },
        {
          title: 'Fesselndes Gameplay',
          description: 'Assessments, die sich weniger wie Tests und mehr wie ein Spiel anfühlen.',
        },
        {
          title: 'Umsetzbare Analysen',
          description: 'Erhalten Sie klare, umfassende Berichte, damit Fachkräfte für psychische Gesundheit einfacher und schneller entscheiden können.',
        },
        {
          title: 'Sicher & Privat',
          description: 'Ihre Daten sind durch branchenübliche Sicherheitsmaßnahmen geschützt.',
        },
      ],
    },
    howItWorks: {
      heading: 'So funktioniert es',
      subheading: 'Ein Serious-Game-Ansatz, der fruhes Screening in einen strukturierten und engagierenden Prozess verwandelt.',
      steps: [
        {
          title: 'Szenariobasierte Assessments spielen',
          description: 'Teilnehmende interagieren in realitatsnahen sozialen Szenarien im Stil eines Videospiels.',
        },
        {
          title: 'Multi-modale Signale erfassen',
          description: 'Die Plattform erfasst Antworten, Stimme und Interaktionsverhalten wahrend der Sitzung.',
        },
        {
          title: 'Daten sicher verarbeiten',
          description: 'Verschlusselte und anonymisierte Daten werden im Hintergrund mit KI- und ML-Modellen verarbeitet.',
        },
        {
          title: 'Strukturierte Berichte liefern',
          description: 'Kliniken und Fachkrafte erhalten standardisierte Screening-Ergebnisse fur schnellere Entscheidungen.',
        },
      ],
      note: 'Die abschließende klinische Beurteilung bleibt bei lizenzierten Fachpersonen.',
      integration: 'eunoia Quest ist als eingebettete Losung konzipiert und kann uber sichere APIs in bestehende Plattformen integriert werden.',
    },
    science: {
      heading: 'Wissenschaftlich fundiert',
      subheading: 'Unser Ansatz basiert auf begutachteter Forschung und wurde in realen Studiensettings validiert.',
      highlights: [
        'Die Kernmethodik wurde auf der IROS24 in Abu Dhabi vorgestellt.',
        'Die Studie fokussierte das Screening der Sozialen Angststorung mit multimedialen, szenariobasierten Assessments.',
        'Machine-Learning-Klassifikatoren wurden trainiert, um Muster zu erkennen und fruhes Screening zu unterstutzen.',
      ],
      paperTitle: 'Veroffentlichte wissenschaftliche Arbeit',
      paperVenue: 'Ahmadi Majd et al., Frontiers in Robotics and AI (2025)',
      paperLinkText: 'Zur Publikation',
      paperLink: 'https://doi.org/10.3389/frobt.2025.1620609',
    },
    featuredIn: {
      heading: 'Bekannt aus',
      logos: [
        {
          src: 'https://github.com/user-attachments/assets/478e143c-d534-42ab-a8de-400f8d5b4b73',
        },
        {
          src: 'https://github.com/user-attachments/assets/24464eb5-ff8b-475a-bbb9-a4d147177e26',
        },
      ],
    },
    audience: {
      heading: 'Fur wen es gedacht ist',
      subheading: 'Entwickelt fur Organisationen, die skalierbares, strukturiertes und klinisch verantwortbares Erstscreening brauchen.',
      segments: [
        {
          title: 'Kliniken & Therapiezentren',
          description: 'Erstscreenings standardisieren, Personal entlasten und klinische Verantwortung beibehalten.',
        },
        {
          title: 'Universitaten',
          description: 'Psychische Gesundheitsangebote fur Studierende mit strukturierten Erstabklarungs-Tools unterstutzen.',
        },
        {
          title: 'Forschungslabore',
          description: 'Strukturierte Verhaltens- und Interaktionsdaten fur Studien in Psychologie und Digital Health gewinnen.',
        },
      ],
    },
    team: {
      heading: 'Unser Team',
      subheading: "Die Köpfe hinter Eunioias innovativen Assessment-Lösungen.",
      members: [
        { name: 'Sara Ahmadi Majd', role: 'Mitgründerin & Leitende Wissenschaftlerin' },
        { name: 'Alex (M.H.) Emami', role: 'Mitgründer & CTO' },
      ],
    },
    contact: {
      heading: 'Kontakt aufnehmen',
      subheading: 'Haben Sie Fragen oder möchten Sie mehr erfahren? Wir freuen uns, von Ihnen zu hören.',
      infoHeading: 'Kontaktinformationen',
      address: 'Göttingen, 37073, Niedersachsen',
      ctaText: 'Bereit, Ihre Assessments zu transformieren? Kontaktieren Sie unser Team direkt.',
      ctaButton: 'E-Mail senden',
      mapPlaceholder: 'Kartenplatzhalter',
    },
    blog: {
      title: 'Blog — eunoia Quest',
      description: 'Einblicke in spielbasiertes psychisches Gesundheitsscreening, Produktupdates und die Wissenschaft hinter Eunoia Quest.',
      heading: 'Blog',
      subheading: 'Einblicke, Updates und Geschichten vom Eunoia Quest Team.',
      readMore: 'Weiterlesen',
      backToBlog: '← Zurück zum Blog',
      publishedOn: 'Veröffentlicht am',
      by: 'Von',
      readInGerman: 'Auf Deutsch lesen',
      readInEnglish: 'Read in English',
    },
    footer: {
      allRightsReserved: 'Alle Rechte vorbehalten.',
      address: 'Göttingen, 37073, Niedersachsen',
    },
  },
} as const;

export type Translations = typeof translations['en'];
