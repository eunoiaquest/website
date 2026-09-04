export type Lang = 'en' | 'de';

export const translations = {
  en: {
    meta: {
      title: 'eunoia — Tools for Emotional & Mental Growth',
      description: 'eunoia builds gamified products — eunoia Quest and Taktiks — that turn emotional and mental skills into something you practice, not just read about.',
    },
    header: {
      logo: 'eunoia',
      nav: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#team', label: 'Team' },
        { href: '#contact', label: 'Contact' },
        { href: '/blog', label: 'Blog' },
      ],
      products: {
        label: 'Products',
        items: [
          { href: '/quest/', label: 'The Quest' },
          { href: '/taktiks/', label: 'Taktiks' },
        ],
      },
      langSwitcher: { label: 'DE', href: '/de' },
      menuOpenLabel: 'Open menu',
      menuCloseLabel: 'Close menu',
    },
    home: {
      hero: {
        title: 'Gamified software built on the science of emotion regulation.',
        subtitle: 'eunoia Quest screens for mental health conditions. Taktiks teaches you how to manage your own emotions. Both are built on the same research.',
        cta: 'Explore Our Products',
      },
      products: {
        heading: 'Our Products',
        subheading: 'Two gamified experiences, one mission: making emotional and mental skills practicable.',
        items: [
          {
            name: 'eunoia Quest',
            tagline: 'Gamified mental health screening',
            description: 'A video-gamified assessment platform that turns early mental health screening into an engaging, scientifically-validated experience.',
            href: '/quest/',
            cta: 'Discover The Quest',
          },
          {
            name: 'Taktiks',
            tagline: 'The skill no one teaches us',
            description: 'Rehearse real emotional situations, choose a strategy, see its consequences, and learn what actually helps — training emotional resilience like a skill.',
            href: '/taktiks/',
            cta: 'Discover Taktiks',
          },
        ],
      },
      about: {
        foundingStoryTitle: 'How We Started',
        foundingStoryBody: "eunoia grew out of academic research at the University of Göttingen. What began as a single master's thesis on gamified mental health screening — refined through the Lift-Off startup competition — has since grown into a small family of products, each turning a hard-to-teach skill into something people can actually train.",
        learnMore: 'Meet the team',
        imageAlt: 'Illustration of the eunoia product family',
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
      team: {
        heading: 'Meet Our Team',
        subheading: "The minds behind eunoia's products.",
        members: [
          { name: 'Sara Ahmadi Majd', role: 'Co-Founder & Lead Scientist' },
          { name: 'Alex (M.H.) Emami', role: 'Co-Founder & CTO' },
        ],
      },
    },
    quest: {
      meta: {
        title: 'eunoia Quest',
        description: 'Gamified Mental Health Screening Platform on your platform.',
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
    },
    taktiks: {
      meta: {
        title: 'Taktiks — The skill no one teaches us',
        description: 'Rehearse real emotional situations, choose a strategy, and learn what actually helps. Taktiks trains emotional resilience like a skill.',
      },
      hero: {
        title: 'The skill no one teaches us',
        subtitle: 'Emotion regulation shapes how we work, learn, and relate — yet school never taught it, and there was nowhere to practice. Taktiks changes that.',
        cta: 'Start Training',
      },
      about: {
        heading: 'Our Mission',
        body: "Emotion regulation is a learnable skill that shapes how we work, learn and relate — yet school never taught it, and there's nowhere to practise. Taktiks lets people rehearse real situations, choosing a strategy, seeing its consequences, and learning what actually helps.",
        foundingStoryTitle: 'From Passive to Practiced',
        foundingStoryBody: "We built Taktiks because insight alone doesn't change behavior. By turning emotional situations into scenarios you can rehearse — with real choices and real consequences — we make emotional resilience something you train, not just read about.",
        learnMore: 'See how it works',
        imageAlt: 'Illustration of Taktiks scenario training',
      },
      problem: {
        heading: 'Why This Matters',
        subheading: "Emotional intelligence is one of the World Economic Forum's top-10 skills for the future of work — yet it's still not something we're taught, or given space to practice.",
        stats: [
          {
            value: 'Top 10',
            label: 'skill for the future of work, according to the World Economic Forum.',
          },
          {
            value: '~3%',
            label: 'of self-improvement app users stay engaged past 30 days.',
          },
        ],
        bottleneckTitle: "Today's Tools Are Passive",
        bottleneckPoints: [
          'You read about emotions or track a mood — you never rehearse a real situation.',
          'Without practice, insight rarely turns into a change in behavior.',
          'So engagement collapses, and the skill never gets built.',
        ],
      },
      features: {
        heading: 'Why Taktiks?',
        subheading: 'A different approach to building emotional skill.',
        items: [
          {
            title: 'Real Scenarios',
            description: 'Rehearse situations that mirror the real emotional challenges you face at work, school, and in relationships.',
          },
          {
            title: 'Choose Your Strategy',
            description: "Pick how you'd respond, just like in real life, instead of just reading about the 'right' answer.",
          },
          {
            title: 'See the Consequences',
            description: 'Every choice plays out, so you can see what actually helps before you need it in real life.',
          },
          {
            title: 'Built to Stick',
            description: 'Designed for genuine engagement, not the drop-off that plagues passive self-improvement apps.',
          },
        ],
      },
      howItWorks: {
        heading: 'How It Works',
        subheading: 'A rehearsal loop that turns emotional skill into practice, not theory.',
        steps: [
          {
            title: 'Face a Real Situation',
            description: 'Step into a scenario modeled on real emotional challenges — at work, school, or in relationships.',
          },
          {
            title: 'Choose a Strategy',
            description: 'Decide how to respond, weighing real options instead of picking an abstract "right answer".',
          },
          {
            title: 'See the Consequences',
            description: 'Watch how your choice plays out, so the outcome — not a lecture — teaches the lesson.',
          },
          {
            title: 'Learn What Helps',
            description: 'Reflect on what worked and build a personal toolkit of strategies you can trust under pressure.',
          },
        ],
        note: 'Every scenario is a safe place to practice before it matters in real life.',
        integration: 'Taktiks is designed for everyday use — a few minutes of rehearsal, whenever you need it.',
      },
      audience: {
        heading: 'Who It Is For',
        subheading: 'Built for anyone who wants emotional skill to be something they can rely on, not just read about.',
        segments: [
          {
            title: 'Individuals',
            description: 'Build a personal practice for managing stress, conflict, and difficult emotions.',
          },
          {
            title: 'Teams & Workplaces',
            description: 'Strengthen emotional intelligence — a top-10 skill for the future of work.',
          },
          {
            title: 'Students',
            description: 'Practice the emotional and social skills that classrooms rarely make room for.',
          },
        ],
      },
    },
    contact: {
      heading: 'Get In Touch',
      subheading: "Have questions or want to learn more? We'd love to hear from you.",
      infoHeading: 'Contact Information',
      address: 'Göttingen, 37073, Lower Saxony',
      ctaText: 'Ready to transform your assessments? Reach out to our team directly.',
      ctaButton: 'Email Us',
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
      privacy: 'Privacy Policy',
      privacyHref: '/privacy/',
      cookieSettings: 'Cookie settings',
    },
    cookie: {
      title: 'Cookie preferences',
      message:
        'We use optional analytics cookies to understand how visitors use our website. You can accept or reject analytics cookies. ',
      accept: 'Accept analytics',
      reject: 'Reject',
      privacyLink: 'Privacy Policy',
    },
    privacy: {
      title: 'Privacy Policy',
      description: 'How Eunoia Quest handles personal data on this website.',
      lastUpdated: 'Last updated: June 22, 2026',
      sections: [
        {
          heading: 'Controller',
          body: 'Eunoia Quest\nGöttingen, 37073, Lower Saxony, Germany\nEmail: contact@eunoiaquest.com',
        },
        {
          heading: 'What data we process on this website',
          body: 'This marketing website does not require registration. We may process technical access data (such as IP address, browser type, and pages visited) only if you consent to analytics cookies.',
        },
        {
          heading: 'Analytics (Google Analytics)',
          body: 'If you accept analytics cookies, we use Google Analytics (Google Ireland Limited / Google LLC) to measure website usage. Google may process usage data using cookies or similar technologies. We load Google Analytics only after your consent. IP anonymization is enabled. Legal basis: Art. 6(1)(a) GDPR (consent). You can withdraw consent at any time via Cookie settings in the footer.',
        },
        {
          heading: 'Cookies',
          body: 'Essential cookies are not used for tracking. Analytics cookies are optional and are set only after consent. Your choice is stored locally in your browser (localStorage).',
        },
        {
          heading: 'Your rights',
          body: 'Under the GDPR, you have the right to access, rectify, erase, restrict processing, object, and data portability where applicable. You may also lodge a complaint with a supervisory authority. Contact us at contact@eunoiaquest.com for privacy requests.',
        },
        {
          heading: 'Changes',
          body: 'We may update this policy when our website or legal requirements change. The current version is always published on this page.',
        },
      ],
    },
  },

  de: {
    meta: {
      title: 'eunoia — Werkzeuge für emotionales und mentales Wachstum',
      description: 'eunoia entwickelt spielerische Produkte – eunoia Quest und Taktiks – die emotionale und mentale Fähigkeiten trainierbar machen, statt sie nur zu beschreiben.',
    },
    header: {
      logo: 'eunoia',
      nav: [
        { href: '#home', label: 'Startseite' },
        { href: '#about', label: 'Über uns' },
        { href: '#team', label: 'Team' },
        { href: '#contact', label: 'Kontakt' },
        { href: '/blog', label: 'Blog' },
      ],
      products: {
        label: 'Produkte',
        items: [
          { href: '/de/quest/', label: 'The Quest' },
          { href: '/de/taktiks/', label: 'Taktiks' },
        ],
      },
      langSwitcher: { label: 'EN', href: '/' },
      menuOpenLabel: 'Menü öffnen',
      menuCloseLabel: 'Menü schließen',
    },
    home: {
      hero: {
        title: 'Spielerische Software, die auf der Wissenschaft der Emotionsregulation basiert.',
        subtitle: 'eunoia Quest screent auf psychische Gesundheitszustände. Taktiks lehrt dich, deine eigenen Emotionen zu steuern. Beide basieren auf derselben Forschung.',
        cta: 'Unsere Produkte entdecken',
      },
      products: {
        heading: 'Unsere Produkte',
        subheading: 'Zwei spielerische Erfahrungen, eine Mission: emotionale und mentale Fähigkeiten trainierbar machen.',
        items: [
          {
            name: 'eunoia Quest',
            tagline: 'Spielbasiertes Gesundheitsscreening',
            description: 'Eine videospielbasierte Assessment-Plattform, die frühes psychisches Gesundheitsscreening zu einem spannenden, wissenschaftlich validierten Erlebnis macht.',
            href: '/de/quest/',
            cta: 'The Quest entdecken',
          },
          {
            name: 'Taktiks',
            tagline: 'Die Fähigkeit, die uns niemand lehrt',
            description: 'Reale emotionale Situationen durchspielen, eine Strategie wählen, die Konsequenzen erleben und lernen, was wirklich hilft — emotionale Resilienz wird trainierbar.',
            href: '/de/taktiks/',
            cta: 'Taktiks entdecken',
          },
        ],
      },
      about: {
        foundingStoryTitle: 'Unsere Entstehung',
        foundingStoryBody: 'eunoia entstand aus akademischer Forschung an der Universität Göttingen. Was als eine einzelne Masterarbeit über spielbasiertes psychisches Gesundheitsscreening begann — verfeinert im Lift-Off Startup-Wettbewerb — ist inzwischen zu einer kleinen Produktfamilie gewachsen, die jeweils eine schwer vermittelbare Fähigkeit trainierbar macht.',
        learnMore: 'Team kennenlernen',
        imageAlt: 'Illustration der eunoia Produktfamilie',
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
      team: {
        heading: 'Unser Team',
        subheading: 'Die Köpfe hinter den Produkten von eunoia.',
        members: [
          { name: 'Sara Ahmadi Majd', role: 'Mitgründerin & Leitende Wissenschaftlerin' },
          { name: 'Alex (M.H.) Emami', role: 'Mitgründer & CTO' },
        ],
      },
    },
    quest: {
      meta: {
        title: 'eunoia Quest – Spielbasiertes Gesundheitsscreening',
        description: 'Spielbasiertes psychisches Gesundheitsscreening auf Ihrer Plattform.',
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
    },
    taktiks: {
      meta: {
        title: 'Taktiks — Die Fähigkeit, die uns niemand lehrt',
        description: 'Reale emotionale Situationen durchspielen, eine Strategie wählen und lernen, was wirklich hilft. Taktiks macht emotionale Resilienz trainierbar.',
      },
      hero: {
        title: 'Die Fähigkeit, die uns niemand lehrt',
        subtitle: 'Emotionsregulation prägt, wie wir arbeiten, lernen und miteinander umgehen — doch die Schule hat sie nie gelehrt, und es gab nie einen Ort zum Üben. Taktiks ändert das.',
        cta: 'Jetzt trainieren',
      },
      about: {
        heading: 'Unsere Mission',
        body: 'Emotionsregulation ist eine erlernbare Fähigkeit, die prägt, wie wir arbeiten, lernen und miteinander umgehen — doch die Schule hat sie nie gelehrt, und es gibt keinen Ort zum Üben. Taktiks lässt Menschen echte Situationen durchspielen, eine Strategie wählen, ihre Konsequenzen erleben und lernen, was wirklich hilft.',
        foundingStoryTitle: 'Von passiv zu geübt',
        foundingStoryBody: 'Wir haben Taktiks entwickelt, weil Einsicht allein das Verhalten nicht ändert. Indem wir emotionale Situationen in Szenarien verwandeln, die man mit echten Entscheidungen und echten Konsequenzen durchspielen kann, machen wir emotionale Resilienz trainierbar — statt sie nur zu beschreiben.',
        learnMore: 'So funktioniert es',
        imageAlt: 'Illustration des Taktiks-Szenariotrainings',
      },
      problem: {
        heading: 'Warum das wichtig ist',
        subheading: 'Emotionale Intelligenz zählt laut dem Weltwirtschaftsforum zu den Top-10-Fähigkeiten der Zukunft der Arbeit — trotzdem wird sie kaum gelehrt oder geübt.',
        stats: [
          {
            value: 'Top 10',
            label: 'Fähigkeit für die Zukunft der Arbeit, laut dem Weltwirtschaftsforum.',
          },
          {
            value: '~3%',
            label: 'der Nutzer von Selbstverbesserungs-Apps bleiben länger als 30 Tage aktiv.',
          },
        ],
        bottleneckTitle: 'Heutige Tools sind passiv',
        bottleneckPoints: [
          'Man liest über Emotionen oder verfolgt eine Stimmung — man übt nie eine echte Situation.',
          'Ohne Übung wird Einsicht selten zu einer echten Verhaltensänderung.',
          'Das Engagement bricht ein, und die Fähigkeit wird nie aufgebaut.',
        ],
      },
      features: {
        heading: 'Warum Taktiks?',
        subheading: 'Ein anderer Ansatz, um emotionale Fähigkeiten aufzubauen.',
        items: [
          {
            title: 'Reale Szenarien',
            description: 'Übe Situationen, die echte emotionale Herausforderungen bei der Arbeit, in der Schule und in Beziehungen widerspiegeln.',
          },
          {
            title: 'Wähle deine Strategie',
            description: 'Entscheide, wie du reagierst — wie im echten Leben, statt nur die „richtige" Antwort zu lesen.',
          },
          {
            title: 'Erlebe die Konsequenzen',
            description: 'Jede Entscheidung wirkt sich aus, damit du siehst, was wirklich hilft, bevor es im echten Leben zählt.',
          },
          {
            title: 'Gemacht, um zu bleiben',
            description: 'Entwickelt für echtes Engagement, statt des Abbruchs, der passive Selbstverbesserungs-Apps plagt.',
          },
        ],
      },
      howItWorks: {
        heading: 'So funktioniert es',
        subheading: 'Eine Übungsschleife, die emotionale Fähigkeit zur Praxis macht — nicht zur Theorie.',
        steps: [
          {
            title: 'Eine echte Situation erleben',
            description: 'Tauche in ein Szenario ein, das echten emotionalen Herausforderungen bei der Arbeit, in der Schule oder in Beziehungen nachempfunden ist.',
          },
          {
            title: 'Eine Strategie wählen',
            description: 'Entscheide, wie du reagierst, und wäge echte Optionen ab — statt eine abstrakte „richtige Antwort" zu wählen.',
          },
          {
            title: 'Die Konsequenzen erleben',
            description: 'Sieh, wie sich deine Entscheidung auswirkt — das Ergebnis lehrt die Lektion, nicht ein Vortrag.',
          },
          {
            title: 'Lernen, was hilft',
            description: 'Reflektiere, was funktioniert hat, und baue dir ein persönliches Set an Strategien auf, dem du unter Druck vertrauen kannst.',
          },
        ],
        note: 'Jedes Szenario ist ein sicherer Ort zum Üben, bevor es im echten Leben zählt.',
        integration: 'Taktiks ist für den Alltag gemacht — ein paar Minuten Übung, wann immer du sie brauchst.',
      },
      audience: {
        heading: 'Für wen es gedacht ist',
        subheading: 'Für alle, die emotionale Fähigkeiten nicht nur lesen, sondern sich darauf verlassen können wollen.',
        segments: [
          {
            title: 'Einzelpersonen',
            description: 'Baue eine persönliche Praxis für den Umgang mit Stress, Konflikten und schwierigen Emotionen auf.',
          },
          {
            title: 'Teams & Arbeitsplätze',
            description: 'Stärke emotionale Intelligenz — eine Top-10-Fähigkeit für die Zukunft der Arbeit.',
          },
          {
            title: 'Studierende',
            description: 'Übe die emotionalen und sozialen Fähigkeiten, für die im Unterricht selten Raum ist.',
          },
        ],
      },
    },
    contact: {
      heading: 'Kontakt aufnehmen',
      subheading: 'Haben Sie Fragen oder möchten Sie mehr erfahren? Wir freuen uns, von Ihnen zu hören.',
      infoHeading: 'Kontaktinformationen',
      address: 'Göttingen, 37073, Niedersachsen',
      ctaText: 'Bereit, Ihre Assessments zu transformieren? Kontaktieren Sie unser Team direkt.',
      ctaButton: 'E-Mail senden',
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
      privacy: 'Datenschutz',
      privacyHref: '/de/datenschutz/',
      cookieSettings: 'Cookie-Einstellungen',
    },
    cookie: {
      title: 'Cookie-Einstellungen',
      message:
        'Wir verwenden optionale Analyse-Cookies, um zu verstehen, wie Besucher unsere Website nutzen. Sie können Analyse-Cookies akzeptieren oder ablehnen. ',
      accept: 'Analyse akzeptieren',
      reject: 'Ablehnen',
      privacyLink: 'Datenschutzerklärung',
    },
    privacy: {
      title: 'Datenschutzerklärung',
      description: 'Wie Eunoia Quest personenbezogene Daten auf dieser Website verarbeitet.',
      lastUpdated: 'Stand: 22. Juni 2026',
      sections: [
        {
          heading: 'Verantwortlicher',
          body: 'Eunoia Quest\nGöttingen, 37073, Niedersachsen, Deutschland\nE-Mail: contact@eunoiaquest.com',
        },
        {
          heading: 'Welche Daten wir auf dieser Website verarbeiten',
          body: 'Diese Marketing-Website erfordert keine Registrierung. Technische Zugriffsdaten (z. B. IP-Adresse, Browsertyp, besuchte Seiten) verarbeiten wir nur, wenn Sie Analyse-Cookies erlauben.',
        },
        {
          heading: 'Analyse (Google Analytics)',
          body: 'Wenn Sie Analyse-Cookies akzeptieren, nutzen wir Google Analytics (Google Ireland Limited / Google LLC), um die Website-Nutzung zu messen. Google kann Nutzungsdaten über Cookies oder ähnliche Technologien verarbeiten. Google Analytics wird erst nach Ihrer Einwilligung geladen. Die IP-Anonymisierung ist aktiviert. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können Ihre Einwilligung jederzeit über Cookie-Einstellungen im Footer widerrufen.',
        },
        {
          heading: 'Cookies',
          body: 'Es werden keine essenziellen Tracking-Cookies gesetzt. Analyse-Cookies sind optional und werden nur nach Einwilligung gesetzt. Ihre Auswahl wird lokal im Browser (localStorage) gespeichert.',
        },
        {
          heading: 'Ihre Rechte',
          body: 'Nach der DSGVO haben Sie Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit, soweit anwendbar. Sie können sich bei einer Aufsichtsbehörde beschweren. Datenschutzanfragen richten Sie bitte an contact@eunoiaquest.com.',
        },
        {
          heading: 'Änderungen',
          body: 'Wir können diese Erklärung aktualisieren, wenn sich unsere Website oder rechtliche Anforderungen ändern. Die jeweils aktuelle Version ist auf dieser Seite veröffentlicht.',
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations['en'];
