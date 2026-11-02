export const translations = {
  en: {
    dir: 'ltr',
    a11y: { skip: 'Skip to content', pause: 'Pause logo animation', play: 'Play logo animation', statement: 'Accessibility statement', privacy: 'Privacy policy' },
    nav: {
      services: 'Services',
      ai: 'AI',
      work: 'Work',
      process: 'Process',
      faq: 'FAQ',
      cta: 'Start a project',
      menu: 'Menu',
      close: 'Close'
    },
    hero: {
      eyebrow: 'Websites, apps and AI for Israeli businesses',
      titleA: 'Websites and AI tools that',
      titleEm: 'win you clients.',
      sub: 'We design and build websites, apps and AI assistants for Israeli businesses. Clear price, fast delivery, real support.',
      cta2: 'See our work'
    },
    chat: {
      name: 'Booking assistant',
      status: 'Online now',
      messages: [
        { from: 'user', text: 'Hi, do you have a slot tomorrow for a haircut?' },
        { from: 'bot', text: 'Hi! Tomorrow we have 10:30, 13:00 or 17:15. Which one works for you?' },
        { from: 'user', text: '17:15 please' },
        { from: 'bot', text: 'Done. You are booked for tomorrow at 17:15, and I will send you a reminder in the morning.' }
      ],
      event: 'Added to the calendar',
      replay: 'Replay',
      caption: 'Example: an AI assistant that books appointments on WhatsApp, at any hour.'
    },
    promises: [
      { title: 'Fixed price', desc: 'Agreed in writing before we start.' },
      { title: 'Weekly previews', desc: 'See real progress every week.' },
      { title: 'You own it', desc: 'Code, domain and accounts are yours.' },
      { title: 'Three languages', desc: 'Hebrew, Arabic and English, built right.' }
    ],
    stack: 'Built with proven tools used by the best product teams',
    services: {
      title: 'Websites, apps and AI for your business.',
      items: {
        ai: { title: 'AI assistants and automation', desc: 'Chatbots that answer customers, book meetings and qualify leads. Automations that remove repetitive office work.' },
        web: { title: 'Websites and online stores', desc: 'Fast, multilingual sites built to turn visitors into calls, orders and bookings.' },
        apps: { title: 'Web and mobile apps', desc: 'Customer portals, dashboards and apps for iOS and Android.' },
        design: { title: 'UI/UX design', desc: 'Clear interfaces your customers understand on the first try.' },
        care: { title: 'Hosting and ongoing care', desc: 'Secure hosting, backups, updates and monitoring, so nothing breaks quietly.' }
      }
    },
    ai: {
      eyebrow: 'AI solutions',
      title: 'What AI can actually do for your business.',
      sub: 'Practical tools, not buzzwords. Each one runs inside the apps you and your customers already use.',
      tabs: [
        {
          label: 'Customer chat 24/7',
          desc: 'An assistant trained on your services, prices and policies answers customers on WhatsApp or your website, day and night, and hands the conversation to you when needed.',
          points: ['Answers in Hebrew, Arabic and English', 'Knows your prices, hours and policies', 'Passes complex questions to a person'],
          flow: ['Customer message', 'AI assistant', 'Answer or handoff']
        },
        {
          label: 'Bookings and reminders',
          desc: 'Customers pick a time in chat, the meeting lands in your calendar and reminders go out automatically, so fewer people forget to show up.',
          points: ['Syncs with Google Calendar', 'Automatic WhatsApp reminders', 'Rescheduling without a phone call'],
          flow: ['Chat request', 'Free slots', 'Calendar + reminder']
        },
        {
          label: 'Lead follow-up',
          desc: 'Every inquiry from your site, Facebook or Instagram is captured, qualified and answered right away, so no lead goes cold.',
          points: ['All leads in one place', 'Instant first reply', 'Daily summary on your phone'],
          flow: ['New inquiry', 'Qualify with AI', 'CRM + reply']
        },
        {
          label: 'Documents and data',
          desc: 'Invoices, forms and emails are read and filed automatically. Your team stops copying data between systems by hand.',
          points: ['Reads PDFs, scans and photos', 'Updates your sheets or CRM', 'Flags anything unusual'],
          flow: ['Invoice or form', 'AI extraction', 'Sheet or CRM']
        }
      ]
    },
    work: {
      title: 'Selected work.',
      category: 'E-commerce website',
      name: 'Calma by Lamar',
      intro: 'A complete online store for a handmade decor and candle brand, built from scratch.',
      challengeLabel: 'The goal',
      challenge: 'A store that feels as calm as the products, and that the owner can run without a developer.',
      builtLabel: 'What we built',
      built: 'A custom storefront with catalog, cart and checkout, plus an admin dashboard for products, stock and orders.',
      deliverablesLabel: 'Delivered',
      deliverables: ['Custom storefront', 'Admin dashboard', 'Order management', 'Mobile-first design']
    },
    process: {
      title: 'How we work together.',
      steps: [
        { title: 'Free intro call', desc: 'We talk about your business and goals. You get honest advice, even if we are not the right fit.' },
        { title: 'Fixed quote', desc: 'A clear plan, timeline and price in writing. No surprises later.' },
        { title: 'Build and preview', desc: 'You see working progress every week and give feedback as we go.' },
        { title: 'Launch and support', desc: 'We launch, show your team how everything works and stay available after go-live.' }
      ]
    },
    about: {
      title: 'You talk directly to the developer.',
      body: 'DevUltra is led by Younan Nwesre, a software engineer who builds large-scale production systems for a living. No account managers and no outsourcing: the person you speak with is the person who writes your code.',
      facts: ['Based in Israel', 'Works in Hebrew, Arabic and English', 'Replies within one business day']
    },
    faq: {
      title: 'Questions we hear often.',
      items: [
        { q: 'How much does a website or AI assistant cost?', a: 'It depends on the scope. After a short call you get a fixed written quote, and the price only changes if you decide to change the scope.' },
        { q: 'How long does a project take?', a: 'A landing page usually takes one to two weeks. A full website or store takes three to six weeks. Most AI assistants go live within two to three weeks.' },
        { q: 'Do I own the website and the code?', a: 'Yes. The code, the domain and every account are registered in your name.' },
        { q: 'Is my customers’ data safe with AI?', a: 'We use business-grade AI providers that do not train on your data, and we connect only the information the assistant actually needs.' },
        { q: 'What happens after launch?', a: 'Every project includes support after launch. You can also choose a monthly care plan for hosting, updates and improvements.' },
        { q: 'Do you build in Hebrew and Arabic?', a: 'Yes. We build fully right-to-left sites and assistants that speak Hebrew, Arabic and English.' }
      ]
    },
    contact: {
      title: 'Tell us what you need.',
      sub: 'Send a short message. We reply within one business day with clear next steps.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      phoneLabel: 'Phone',
      nameLabel: 'Full name',
      namePlaceholder: 'Your name',
      emailFieldLabel: 'Email',
      emailPlaceholder: 'you@company.com',
      serviceLabel: 'What do you need?',
      servicePlaceholder: 'Choose a service',
      serviceOptions: {
        automation: 'AI assistant or automation',
        'web-development': 'Website or online store',
        'app-development': 'Web or mobile app',
        design: 'UI/UX design',
        devops: 'Hosting and care'
      },
      messageLabel: 'About your project',
      messagePlaceholder: 'A few lines about your business and what you want to achieve',
      submit: 'Send message',
      sending: 'Sending...',
      privacyNote: 'We use your details only to reply to your enquiry. Giving them is voluntary, and without them we cannot get back to you. Messages are delivered through Formspree (USA). You may ask to see, correct or delete your details.',
      privacyLink: 'Privacy policy',
      successTitle: 'Message sent.',
      successBody: 'Thank you. We will get back to you within one business day.',
      sendAnother: 'Send another message',
      error: 'Something went wrong. Please try again or message us on WhatsApp.'
    },
    footer: {
      desc: 'Websites, apps and AI tools for growing businesses.',
      rights: 'All rights reserved.'
    },
    whatsapp: {
      tooltip: 'Chat on WhatsApp',
      status: 'Usually replies within the hour',
      greeting: 'Hi! How can we help? Ask about websites, apps or AI for your business.',
      startChat: 'Open WhatsApp',
      defaultMessage: "Hi! I'm interested in your services."
    }
  },

  he: {
    dir: 'rtl',
    a11y: { skip: 'דילוג לתוכן', pause: 'עצירת אנימציית הלוגואים', play: 'הפעלת אנימציית הלוגואים', statement: 'הצהרת נגישות', privacy: 'מדיניות פרטיות' },
    nav: {
      services: 'שירותים',
      ai: 'AI',
      work: 'עבודות',
      process: 'תהליך',
      faq: 'שאלות',
      cta: 'בואו נתחיל',
      menu: 'תפריט',
      close: 'סגירה'
    },
    hero: {
      eyebrow: 'בניית אתרים, אפליקציות ו-AI לעסקים',
      titleA: 'בניית אתרים וכלי AI',
      titleEm: 'שמביאים לקוחות.',
      sub: 'אנחנו מעצבים ובונים אתרים, חנויות אינטרנטיות, אפליקציות וצ׳אטבוטים AI לעסקים בישראל. מחיר ברור, מסירה מהירה, ליווי אמיתי.',
      cta2: 'לעבודות שלנו'
    },
    chat: {
      name: 'עוזר הזמנות',
      status: 'מחובר עכשיו',
      messages: [
        { from: 'user', text: 'היי, יש תור פנוי מחר לתספורת?' },
        { from: 'bot', text: 'היי! מחר יש 10:30, 13:00 או 17:15. מה מתאים לך?' },
        { from: 'user', text: '17:15 בבקשה' },
        { from: 'bot', text: 'מעולה. קבעתי לך מחר ב-17:15, ואשלח תזכורת בבוקר.' }
      ],
      event: 'נוסף ליומן',
      replay: 'הפעלה מחדש',
      caption: 'דוגמה: עוזר AI שקובע תורים בוואטסאפ, בכל שעה.'
    },
    promises: [
      { title: 'מחיר קבוע', desc: 'סגור בכתב לפני שמתחילים.' },
      { title: 'עדכון שבועי', desc: 'רואים התקדמות אמיתית כל שבוע.' },
      { title: 'הכל שלכם', desc: 'הקוד, הדומיין והחשבונות בבעלותכם.' },
      { title: 'שלוש שפות', desc: 'עברית, ערבית ואנגלית, בנוי נכון.' }
    ],
    stack: 'בנוי עם הכלים המוכחים של צוותי המוצר הטובים בעולם',
    services: {
      title: 'בניית אתרים, פיתוח אפליקציות ו-AI לעסקים.',
      items: {
        ai: { title: 'צ׳אטבוט AI ואוטומציה לעסקים', desc: 'צ׳אטבוטים שעונים ללקוחות, קובעים פגישות ומסננים לידים. אוטומציות שחוסכות עבודה משרדית חוזרת.' },
        web: { title: 'בניית אתרים וחנויות אינטרנטיות', desc: 'אתרים מהירים ורב-לשוניים שהופכים גולשים לשיחות, הזמנות ותורים.' },
        apps: { title: 'פיתוח אפליקציות ווב ומובייל', desc: 'פורטלים ללקוחות, דשבורדים ואפליקציות ל-iOS ול-Android.' },
        design: { title: 'עיצוב UI/UX', desc: 'ממשקים ברורים שהלקוחות מבינים כבר בפעם הראשונה.' },
        care: { title: 'אחסון ותחזוקה שוטפת', desc: 'אחסון מאובטח, גיבויים, עדכונים וניטור, כדי ששום דבר לא יישבר בשקט.' }
      }
    },
    ai: {
      eyebrow: 'פתרונות AI',
      title: 'מה AI באמת יכול לעשות לעסק שלכם.',
      sub: 'כלים מעשיים, לא באזוורדס. כל אחד מהם עובד בתוך האפליקציות שאתם והלקוחות שלכם כבר משתמשים בהן.',
      tabs: [
        {
          label: 'מענה ללקוחות 24/7',
          desc: 'עוזר שמכיר את השירותים, המחירים והמדיניות שלכם עונה ללקוחות בוואטסאפ או באתר, ביום ובלילה, ומעביר אליכם את השיחה כשצריך.',
          points: ['עונה בעברית, ערבית ואנגלית', 'מכיר מחירים, שעות ומדיניות', 'מעביר שאלות מורכבות לנציג אנושי'],
          flow: ['הודעת לקוח', 'עוזר AI', 'תשובה או העברה']
        },
        {
          label: 'תורים ותזכורות',
          desc: 'הלקוח בוחר שעה בצ׳אט, הפגישה נכנסת ליומן שלכם ותזכורות נשלחות אוטומטית, כך שפחות אנשים שוכחים להגיע.',
          points: ['מסונכרן עם Google Calendar', 'תזכורות אוטומטיות בוואטסאפ', 'שינוי מועד בלי שיחת טלפון'],
          flow: ['בקשה בצ׳אט', 'שעות פנויות', 'יומן + תזכורת']
        },
        {
          label: 'מעקב אחרי לידים',
          desc: 'כל פנייה מהאתר, מפייסבוק או מאינסטגרם נקלטת, מסוננת ומקבלת מענה מיידי, כך ששום ליד לא מתקרר.',
          points: ['כל הלידים במקום אחד', 'מענה ראשון מיידי', 'סיכום יומי לנייד'],
          flow: ['פנייה חדשה', 'סינון עם AI', 'CRM + מענה']
        },
        {
          label: 'מסמכים ונתונים',
          desc: 'חשבוניות, טפסים ומיילים נקראים ומתויקים אוטומטית. הצוות מפסיק להעתיק נתונים בין מערכות ידנית.',
          points: ['קורא PDF, סריקות ותמונות', 'מעדכן גיליונות או CRM', 'מסמן כל דבר חריג'],
          flow: ['חשבונית או טופס', 'חילוץ עם AI', 'גיליון או CRM']
        }
      ]
    },
    work: {
      title: 'עבודות נבחרות.',
      category: 'אתר מסחר אלקטרוני',
      name: 'Calma by Lamar',
      intro: 'חנות אונליין מלאה למותג עיצוב ונרות בעבודת יד, שנבנתה מאפס.',
      challengeLabel: 'המטרה',
      challenge: 'חנות שמרגישה רגועה כמו המוצרים, ושהבעלים יכולים לנהל בלי מפתח.',
      builtLabel: 'מה בנינו',
      built: 'חזית חנות מותאמת עם קטלוג, עגלה ותשלום, ולוח ניהול למוצרים, מלאי והזמנות.',
      deliverablesLabel: 'מה נמסר',
      deliverables: ['חזית חנות מותאמת', 'לוח ניהול', 'ניהול הזמנות', 'עיצוב מובייל תחילה']
    },
    process: {
      title: 'איך אנחנו עובדים יחד.',
      steps: [
        { title: 'שיחת היכרות חינם', desc: 'מדברים על העסק והמטרות. מקבלים ייעוץ כן, גם אם אנחנו לא ההתאמה הנכונה.' },
        { title: 'הצעת מחיר קבועה', desc: 'תוכנית, לוח זמנים ומחיר ברורים בכתב. בלי הפתעות בהמשך.' },
        { title: 'בנייה ותצוגה', desc: 'רואים התקדמות עובדת כל שבוע ונותנים פידבק תוך כדי.' },
        { title: 'השקה וליווי', desc: 'משיקים, מראים לצוות איך הכל עובד ונשארים זמינים גם אחרי.' }
      ]
    },
    about: {
      title: 'מדברים ישירות עם המפתח.',
      body: 'את DevUltra מוביל יונאן נוסרה, מהנדס תוכנה שבונה מערכות ייצור בקנה מידה גדול. בלי מנהלי לקוחות ובלי מיקור חוץ: מי שמדבר איתכם הוא מי שכותב את הקוד.',
      facts: ['פועלים בישראל', 'עובדים בעברית, ערבית ואנגלית', 'חוזרים תוך יום עסקים']
    },
    faq: {
      title: 'שאלות שאנחנו שומעים הרבה.',
      items: [
        { q: 'כמה עולה אתר או עוזר AI?', a: 'תלוי בהיקף. אחרי שיחה קצרה מקבלים הצעת מחיר קבועה בכתב, והמחיר משתנה רק אם אתם מחליטים לשנות את ההיקף.' },
        { q: 'כמה זמן לוקח פרויקט?', a: 'דף נחיתה לוקח בדרך כלל שבוע עד שבועיים. אתר מלא או חנות לוקחים שלושה עד שישה שבועות. רוב עוזרי ה-AI עולים לאוויר תוך שבועיים עד שלושה.' },
        { q: 'האתר והקוד שייכים לי?', a: 'כן. הקוד, הדומיין וכל החשבונות רשומים על שמכם.' },
        { q: 'המידע של הלקוחות שלי בטוח עם AI?', a: 'אנחנו עובדים עם ספקי AI עסקיים שלא מאמנים מודלים על המידע שלכם, ומחברים רק את המידע שהעוזר באמת צריך.' },
        { q: 'מה קורה אחרי ההשקה?', a: 'כל פרויקט כולל ליווי אחרי ההשקה. אפשר גם לבחור חבילת תחזוקה חודשית לאחסון, עדכונים ושיפורים.' },
        { q: 'אתם בונים בעברית ובערבית?', a: 'כן. אנחנו בונים אתרים מלאים מימין לשמאל ועוזרים שמדברים עברית, ערבית ואנגלית.' }
      ]
    },
    contact: {
      title: 'ספרו לנו מה אתם צריכים.',
      sub: 'שלחו הודעה קצרה. נחזור אליכם תוך יום עסקים עם צעדים ברורים להמשך.',
      emailLabel: 'אימייל',
      whatsappLabel: 'וואטסאפ',
      phoneLabel: 'טלפון',
      nameLabel: 'שם מלא',
      namePlaceholder: 'השם שלך',
      emailFieldLabel: 'אימייל',
      emailPlaceholder: 'you@company.com',
      serviceLabel: 'מה אתם צריכים?',
      servicePlaceholder: 'בחרו שירות',
      serviceOptions: {
        automation: 'עוזר AI או אוטומציה',
        'web-development': 'אתר או חנות אונליין',
        'app-development': 'אפליקציית ווב או מובייל',
        design: 'עיצוב UI/UX',
        devops: 'אחסון ותחזוקה'
      },
      messageLabel: 'על הפרויקט',
      messagePlaceholder: 'כמה שורות על העסק ועל מה שתרצו להשיג',
      submit: 'שליחת הודעה',
      sending: 'שולח...',
      privacyNote: 'נשתמש בפרטים רק כדי לחזור אליכם בנוגע לפנייה. מסירתם אינה חובה, אבל בלעדיהם לא נוכל לחזור אליכם. ההודעות נשלחות דרך Formspree (ארה״ב). אפשר לבקש לעיין בפרטים, לתקן או למחוק אותם.',
      privacyLink: 'מדיניות הפרטיות',
      successTitle: 'ההודעה נשלחה.',
      successBody: 'תודה. נחזור אליכם תוך יום עסקים.',
      sendAnother: 'שליחת הודעה נוספת',
      error: 'משהו השתבש. נסו שוב או כתבו לנו בוואטסאפ.'
    },
    footer: {
      desc: 'אתרים, אפליקציות וכלי AI לעסקים צומחים.',
      rights: 'כל הזכויות שמורות.'
    },
    whatsapp: {
      tooltip: 'דברו איתנו בוואטסאפ',
      status: 'בדרך כלל עונים תוך שעה',
      greeting: 'היי! איך נוכל לעזור? שאלו על אתרים, אפליקציות או AI לעסק שלכם.',
      startChat: 'פתיחת וואטסאפ',
      defaultMessage: 'היי! אני מתעניין בשירותים שלכם.'
    }
  },

  ar: {
    dir: 'rtl',
    a11y: { skip: 'تخطي إلى المحتوى', pause: 'إيقاف حركة الشعارات', play: 'تشغيل حركة الشعارات', statement: 'بيان إمكانية الوصول', privacy: 'سياسة الخصوصية' },
    nav: {
      services: 'الخدمات',
      ai: 'الذكاء الاصطناعي',
      work: 'أعمالنا',
      process: 'طريقة العمل',
      faq: 'أسئلة',
      cta: 'ابدأ مشروعك',
      menu: 'القائمة',
      close: 'إغلاق'
    },
    hero: {
      eyebrow: 'تصميم مواقع وتطبيقات وذكاء اصطناعي للمصالح',
      titleA: 'تصميم مواقع وأدوات ذكاء اصطناعي',
      titleEm: 'تجلب لك العملاء.',
      sub: 'نصمم ونبني مواقع وتطبيقات ومساعدين أذكياء للأعمال في البلاد. سعر واضح، تسليم سريع، ودعم حقيقي.',
      cta2: 'شاهد أعمالنا'
    },
    chat: {
      name: 'مساعد الحجوزات',
      status: 'متصل الآن',
      messages: [
        { from: 'user', text: 'مرحباً، هل يوجد موعد غداً لقص الشعر؟' },
        { from: 'bot', text: 'أهلاً! غداً متاح 10:30 أو 13:00 أو 17:15. أي موعد يناسبك؟' },
        { from: 'user', text: '17:15 من فضلك' },
        { from: 'bot', text: 'تم. حجزت لك غداً الساعة 17:15، وسأرسل لك تذكيراً في الصباح.' }
      ],
      event: 'أضيف إلى التقويم',
      replay: 'إعادة التشغيل',
      caption: 'مثال: مساعد ذكي يحجز المواعيد عبر واتساب، في أي ساعة.'
    },
    promises: [
      { title: 'سعر ثابت', desc: 'متفق عليه كتابياً قبل البدء.' },
      { title: 'متابعة أسبوعية', desc: 'تشاهد تقدماً حقيقياً كل أسبوع.' },
      { title: 'كل شيء ملكك', desc: 'الكود والنطاق والحسابات باسمك.' },
      { title: 'ثلاث لغات', desc: 'العربية والعبرية والإنجليزية، مبنية بشكل صحيح.' }
    ],
    stack: 'مبني بأدوات موثوقة تستخدمها أفضل فرق المنتجات',
    services: {
      title: 'تصميم مواقع وتطوير تطبيقات وذكاء اصطناعي لعملك.',
      items: {
        ai: { title: 'بوت واتساب ذكي وأتمتة للمصالح', desc: 'روبوتات محادثة ترد على العملاء وتحجز المواعيد وتفرز العملاء المحتملين. أتمتة توفر العمل المكتبي المتكرر.' },
        web: { title: 'تصميم مواقع ومتاجر إلكترونية', desc: 'مواقع سريعة ومتعددة اللغات تحول الزوار إلى مكالمات وطلبات وحجوزات.' },
        apps: { title: 'تطوير تطبيقات ويب وجوال', desc: 'بوابات للعملاء ولوحات تحكم وتطبيقات لـ iOS وAndroid.' },
        design: { title: 'تصميم UI/UX', desc: 'واجهات واضحة يفهمها عملاؤك من المرة الأولى.' },
        care: { title: 'استضافة وصيانة مستمرة', desc: 'استضافة آمنة ونسخ احتياطي وتحديثات ومراقبة، حتى لا يتعطل شيء بصمت.' }
      }
    },
    ai: {
      eyebrow: 'حلول الذكاء الاصطناعي',
      title: 'ما الذي يمكن للذكاء الاصطناعي فعله لعملك فعلاً.',
      sub: 'أدوات عملية، وليست مصطلحات رنانة. كل أداة تعمل داخل التطبيقات التي تستخدمها أنت وعملاؤك أصلاً.',
      tabs: [
        {
          label: 'رد على العملاء 24/7',
          desc: 'مساعد يعرف خدماتك وأسعارك وسياساتك يرد على العملاء عبر واتساب أو موقعك، ليلاً ونهاراً، ويحوّل المحادثة إليك عند الحاجة.',
          points: ['يرد بالعربية والعبرية والإنجليزية', 'يعرف الأسعار والساعات والسياسات', 'يحوّل الأسئلة المعقدة إلى شخص'],
          flow: ['رسالة العميل', 'مساعد ذكي', 'رد أو تحويل']
        },
        {
          label: 'حجوزات وتذكيرات',
          desc: 'يختار العميل الموعد في المحادثة، ويدخل الموعد إلى تقويمك وتُرسل التذكيرات تلقائياً، فيقل عدد من ينسون الحضور.',
          points: ['متزامن مع Google Calendar', 'تذكيرات تلقائية عبر واتساب', 'تغيير الموعد بدون مكالمة'],
          flow: ['طلب في المحادثة', 'مواعيد متاحة', 'تقويم + تذكير']
        },
        {
          label: 'متابعة العملاء المحتملين',
          desc: 'كل استفسار من موقعك أو فيسبوك أو إنستغرام يُسجّل ويُفرز ويحصل على رد فوري، فلا يضيع أي عميل محتمل.',
          points: ['كل الاستفسارات في مكان واحد', 'رد أول فوري', 'ملخص يومي على هاتفك'],
          flow: ['استفسار جديد', 'فرز بالذكاء الاصطناعي', 'CRM + رد']
        },
        {
          label: 'مستندات وبيانات',
          desc: 'الفواتير والنماذج والرسائل تُقرأ وتُؤرشف تلقائياً. فريقك يتوقف عن نسخ البيانات بين الأنظمة يدوياً.',
          points: ['يقرأ ملفات PDF والصور', 'يحدّث الجداول أو CRM', 'ينبّه لأي شيء غير معتاد'],
          flow: ['فاتورة أو نموذج', 'استخراج ذكي', 'جدول أو CRM']
        }
      ]
    },
    work: {
      title: 'أعمال مختارة.',
      category: 'متجر إلكتروني',
      name: 'Calma by Lamar',
      intro: 'متجر إلكتروني كامل لعلامة ديكور وشموع مصنوعة يدوياً، مبني من الصفر.',
      challengeLabel: 'الهدف',
      challenge: 'متجر يبعث الهدوء مثل المنتجات نفسها، ويمكن لصاحب العمل إدارته بدون مبرمج.',
      builtLabel: 'ما بنيناه',
      built: 'واجهة متجر مخصصة مع كتالوج وسلة ودفع، ولوحة تحكم للمنتجات والمخزون والطلبات.',
      deliverablesLabel: 'ما تم تسليمه',
      deliverables: ['واجهة متجر مخصصة', 'لوحة تحكم', 'إدارة الطلبات', 'تصميم للجوال أولاً']
    },
    process: {
      title: 'كيف نعمل معاً.',
      steps: [
        { title: 'مكالمة تعارف مجانية', desc: 'نتحدث عن عملك وأهدافك. تحصل على نصيحة صادقة حتى لو لم نكن الخيار المناسب.' },
        { title: 'عرض سعر ثابت', desc: 'خطة وجدول زمني وسعر واضح مكتوب. بدون مفاجآت لاحقاً.' },
        { title: 'بناء ومعاينة', desc: 'تشاهد تقدماً فعلياً كل أسبوع وتعطي ملاحظاتك أثناء العمل.' },
        { title: 'إطلاق ودعم', desc: 'نطلق المشروع، نشرح لفريقك كيف يعمل كل شيء، ونبقى متاحين بعد الإطلاق.' }
      ]
    },
    about: {
      title: 'تتحدث مباشرة مع المطوّر.',
      body: 'يقود DevUltra يونان نويصرة، مهندس برمجيات يبني أنظمة إنتاج واسعة النطاق. لا مدراء حسابات ولا تعهيد خارجي: الشخص الذي تتحدث معه هو من يكتب الكود الخاص بك.',
      facts: ['مقرنا في البلاد', 'نعمل بالعربية والعبرية والإنجليزية', 'نرد خلال يوم عمل واحد']
    },
    faq: {
      title: 'أسئلة نسمعها كثيراً.',
      items: [
        { q: 'كم تكلفة موقع أو مساعد ذكي؟', a: 'يعتمد على حجم العمل. بعد مكالمة قصيرة تحصل على عرض سعر ثابت مكتوب، ولا يتغير السعر إلا إذا قررت تغيير نطاق العمل.' },
        { q: 'كم يستغرق المشروع؟', a: 'صفحة الهبوط تستغرق عادة أسبوعاً إلى أسبوعين. الموقع الكامل أو المتجر من ثلاثة إلى ستة أسابيع. معظم المساعدين الأذكياء يعملون خلال أسبوعين إلى ثلاثة.' },
        { q: 'هل الموقع والكود ملكي؟', a: 'نعم. الكود والنطاق وكل الحسابات مسجلة باسمك.' },
        { q: 'هل بيانات عملائي آمنة مع الذكاء الاصطناعي؟', a: 'نعمل مع مزودي ذكاء اصطناعي للأعمال لا يدرّبون نماذجهم على بياناتك، ونربط فقط المعلومات التي يحتاجها المساعد فعلاً.' },
        { q: 'ماذا يحدث بعد الإطلاق؟', a: 'كل مشروع يشمل دعماً بعد الإطلاق. ويمكنك اختيار باقة صيانة شهرية للاستضافة والتحديثات والتحسينات.' },
        { q: 'هل تبنون بالعربية والعبرية؟', a: 'نعم. نبني مواقع كاملة من اليمين إلى اليسار ومساعدين يتحدثون العربية والعبرية والإنجليزية.' }
      ]
    },
    contact: {
      title: 'أخبرنا بما تحتاجه.',
      sub: 'أرسل رسالة قصيرة. نرد خلال يوم عمل واحد مع خطوات واضحة للمتابعة.',
      emailLabel: 'البريد الإلكتروني',
      whatsappLabel: 'واتساب',
      phoneLabel: 'الهاتف',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'اسمك',
      emailFieldLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@company.com',
      serviceLabel: 'ماذا تحتاج؟',
      servicePlaceholder: 'اختر خدمة',
      serviceOptions: {
        automation: 'مساعد ذكي أو أتمتة',
        'web-development': 'موقع أو متجر إلكتروني',
        'app-development': 'تطبيق ويب أو جوال',
        design: 'تصميم UI/UX',
        devops: 'استضافة وصيانة'
      },
      messageLabel: 'عن مشروعك',
      messagePlaceholder: 'بضعة أسطر عن عملك وما تريد تحقيقه',
      submit: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      privacyNote: 'نستخدم بياناتك فقط للرد على استفسارك. تقديمها ليس إلزامياً، لكن بدونها لا يمكننا الرد عليك. تُرسل الرسائل عبر Formspree (الولايات المتحدة). يمكنك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها.',
      privacyLink: 'سياسة الخصوصية',
      successTitle: 'تم إرسال الرسالة.',
      successBody: 'شكراً لك. سنعود إليك خلال يوم عمل واحد.',
      sendAnother: 'إرسال رسالة أخرى',
      error: 'حدث خطأ. حاول مرة أخرى أو راسلنا عبر واتساب.'
    },
    footer: {
      desc: 'مواقع وتطبيقات وأدوات ذكاء اصطناعي للأعمال النامية.',
      rights: 'جميع الحقوق محفوظة.'
    },
    whatsapp: {
      tooltip: 'تحدث معنا عبر واتساب',
      status: 'نرد عادة خلال ساعة',
      greeting: 'مرحباً! كيف يمكننا المساعدة؟ اسأل عن المواقع أو التطبيقات أو الذكاء الاصطناعي لعملك.',
      startChat: 'افتح واتساب',
      defaultMessage: 'مرحباً! أنا مهتم بخدماتكم.'
    }
  }
}
