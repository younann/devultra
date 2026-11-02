// Accessibility statement and privacy policy content
export const LEGAL_UPDATED = { he: '2 בנובמבר 2026', en: '2 November 2026', ar: '2 تشرين الثاني 2026' }

const CONTACT = {
  name: 'Younan Nwesre',
  phone: '+972 50-659-8192',
  email: 'younan.n@gmail.com'
}

export const legal = {
  accessibility: {
    he: {
      title: 'הצהרת נגישות',
      description: 'הצהרת הנגישות של אתר DevUltra: רמת התאימות לתקן הישראלי 5568, ההתאמות שבוצעו ופרטי הקשר לפניות בנושא נגישות.',
      updatedLabel: 'עודכן לאחרונה',
      sections: [
        { p: ['ב-DevUltra אנחנו רואים חשיבות בכך שכל אדם, כולל אנשים עם מוגבלות, יוכל להשתמש באתר בקלות ובעצמאות. האתר הותאם לפי התקן הישראלי ת"י 5568 ברמה AA, המבוסס על הנחיות WCAG, ונבנה לפי WCAG 2.1 ברמה AA, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.'] },
        { h: 'מה הותאם באתר', list: [
          'האתר זמין בעברית, בערבית ובאנגלית, עם כיווניות נכונה (מימין לשמאל ומשמאל לימין) והגדרת שפה לכל עמוד.',
          'ניווט מלא במקלדת, קישור "דילוג לתוכן" בתחילת כל עמוד ומסגרת מיקוד ברורה לכל רכיב.',
          'מבנה כותרות היררכי ואזורי ניווט מסומנים לקוראי מסך.',
          'טקסט חלופי לתמונות בעלות משמעות, ותמונות דקורטיביות מוסתרות מקוראי מסך.',
          'ניגודיות צבעים העומדת ביחס 4.5:1 לפחות לטקסט רגיל.',
          'טופס יצירת קשר עם תוויות לכל שדה, השלמה אוטומטית והודעות שגיאה המוקראות לקוראי מסך.',
          'כפתור לעצירת פס הלוגואים הנע, והפסקת אנימציות אצל מי שהגדיר במכשיר "הפחתת תנועה".',
          'אפשר להגדיל את הטקסט עד 200% בלי לאבד תוכן או פונקציונליות.'
        ] },
        { h: 'איך נבדק האתר', p: ['האתר נבדק בכלי בדיקה אוטומטיים (axe-core) ובבדיקות ידניות של ניווט במקלדת, בדפדפן Chrome, במחשב ובתצוגת נייד.'] },
        { h: 'מגבלות ידועות', list: [
          'קישורים לשירותים חיצוניים (WhatsApp, Instagram ושירות שליחת הטפסים Formspree) מובילים לאתרים שאינם בשליטתנו ושרמת הנגישות שלהם באחריות מפעיליהם.',
          'הדגמת הצ׳אט בראש העמוד היא אנימציה להמחשה בלבד, וכל המידע שבה מופיע גם בטקסט רגיל בעמוד.'
        ] },
        { h: 'נתקלתם בבעיה? דברו איתנו', p: ['אם משהו באתר לא נגיש לכם, או שאתם צריכים את המידע בדרך אחרת, נשמח לעזור. פנו לרכז הנגישות:'], contact: true, after: ['נשתדל לחזור אליכם תוך 3 ימי עסקים. כדי שנוכל לטפל בפנייה, כדאי לציין מה ניסיתם לעשות, באיזה עמוד, ובאיזה דפדפן או טכנולוגיה מסייעת השתמשתם.'] }
      ]
    },
    en: {
      title: 'Accessibility statement',
      description: 'The DevUltra accessibility statement: conformance with Israeli Standard 5568, the adjustments made, and how to contact us about accessibility.',
      updatedLabel: 'Last updated',
      sections: [
        { p: ['At DevUltra we want everyone, including people with disabilities, to use this site easily and independently. The site was adapted to Israeli Standard IS 5568 at level AA, which is based on the WCAG guidelines, and was built to WCAG 2.1 level AA, in line with the Equal Rights for Persons with Disabilities (Service Accessibility Adjustments) Regulations, 2013.'] },
        { h: 'What we adapted', list: [
          'The site is available in Hebrew, Arabic and English, with the correct text direction and a language set on every page.',
          'Full keyboard navigation, a "Skip to content" link at the top of every page and a clear focus outline on every control.',
          'A logical heading structure and labelled navigation regions for screen readers.',
          'Text alternatives for meaningful images; decorative images are hidden from screen readers.',
          'Colour contrast of at least 4.5:1 for normal text.',
          'A contact form with a label on every field, autocomplete, and error messages announced to screen readers.',
          'A button to pause the moving logo strip, and animations turned off for anyone who has set "reduce motion" on their device.',
          'Text can be zoomed to 200% without losing content or functionality.'
        ] },
        { h: 'How the site was tested', p: ['The site was checked with automated testing tools (axe-core) and manual keyboard navigation checks, in Chrome on desktop and in a mobile viewport.'] },
        { h: 'Known limitations', list: [
          'Links to external services (WhatsApp, Instagram and the Formspree form service) lead to sites we do not control; their accessibility is the responsibility of their operators.',
          'The chat demo at the top of the page is an illustrative animation; all of its information also appears as regular text on the page.'
        ] },
        { h: 'Found a problem? Tell us', p: ['If anything on the site is not accessible to you, or you need the information in another format, we are happy to help. Contact our accessibility coordinator:'], contact: true, after: ['We aim to reply within 3 business days. To help us fix it, please tell us what you were trying to do, on which page, and which browser or assistive technology you used.'] }
      ]
    },
    ar: {
      title: 'بيان إمكانية الوصول',
      description: 'بيان إمكانية الوصول لموقع DevUltra: مستوى المطابقة للمعيار الإسرائيلي 5568، والتعديلات التي أُجريت، وطرق التواصل بشأن إمكانية الوصول.',
      updatedLabel: 'آخر تحديث',
      sections: [
        { p: ['في DevUltra نحرص على أن يتمكن الجميع، بمن فيهم الأشخاص ذوو الإعاقة، من استخدام الموقع بسهولة واستقلالية. تمت ملاءمة الموقع للمعيار الإسرائيلي ت"י 5568 بمستوى AA، المبني على إرشادات WCAG، وبُني وفق WCAG 2.1 بمستوى AA، بموجب أنظمة المساواة في الحقوق للأشخاص ذوي الإعاقة (ملاءمات إمكانية الوصول للخدمة) لسنة 2013.'] },
        { h: 'ما الذي تمت ملاءمته', list: [
          'الموقع متوفر بالعربية والعبرية والإنجليزية، مع اتجاه كتابة صحيح وتحديد اللغة في كل صفحة.',
          'تنقل كامل بلوحة المفاتيح، ورابط "تخطي إلى المحتوى" في أعلى كل صفحة، وإطار تركيز واضح لكل عنصر.',
          'بنية عناوين منظمة ومناطق تنقل معرّفة لقارئات الشاشة.',
          'نص بديل للصور ذات المعنى، وإخفاء الصور الزخرفية عن قارئات الشاشة.',
          'تباين ألوان بنسبة 4.5:1 على الأقل للنص العادي.',
          'نموذج تواصل مع تسمية لكل حقل، وإكمال تلقائي، ورسائل خطأ تُقرأ لقارئات الشاشة.',
          'زر لإيقاف شريط الشعارات المتحرك، وإيقاف الحركة لمن فعّل خيار "تقليل الحركة" في جهازه.',
          'يمكن تكبير النص حتى 200% دون فقدان المحتوى أو الوظائف.'
        ] },
        { h: 'كيف تم فحص الموقع', p: ['تم فحص الموقع بأدوات فحص آلية (axe-core) وبفحوصات يدوية للتنقل بلوحة المفاتيح، في متصفح Chrome على الحاسوب وبعرض الهاتف.'] },
        { h: 'قيود معروفة', list: [
          'روابط الخدمات الخارجية (واتساب، إنستغرام وخدمة إرسال النماذج Formspree) تؤدي إلى مواقع خارج سيطرتنا، وإمكانية الوصول فيها مسؤولية الجهات المشغلة لها.',
          'عرض المحادثة في أعلى الصفحة هو حركة توضيحية فقط، وكل المعلومات الواردة فيه موجودة أيضاً كنص عادي في الصفحة.'
        ] },
        { h: 'واجهت مشكلة؟ تواصل معنا', p: ['إذا لم يكن أي جزء من الموقع متاحاً لك، أو احتجت المعلومات بطريقة أخرى، يسعدنا المساعدة. تواصل مع منسق إمكانية الوصول:'], contact: true, after: ['نحرص على الرد خلال 3 أيام عمل. لمساعدتنا في المعالجة، يُرجى ذكر ما حاولت فعله، وفي أي صفحة، وأي متصفح أو تقنية مساعدة استخدمت.'] }
      ]
    }
  },

  privacy: {
    he: {
      title: 'מדיניות פרטיות',
      description: 'מדיניות הפרטיות של DevUltra: איזה מידע נאסף דרך האתר, לאיזו מטרה, מי מקבל אותו, כמה זמן הוא נשמר ואילו זכויות יש לכם.',
      updatedLabel: 'עודכן לאחרונה',
      sections: [
        { p: ['DevUltra מכבדת את פרטיותכם. במדיניות הזו מוסבר איזה מידע אנחנו אוספים כשאתם משתמשים באתר devultra.net או פונים אלינו, ומה אנחנו עושים בו, בהתאם לחוק הגנת הפרטיות, התשמ"א-1981.'] },
        { h: 'מי אחראי על המידע', p: ['בעל המאגר הוא DevUltra, בניהולו של יונאן נוסרה. אפשר לפנות אלינו בכל שאלה על פרטיות:'], contact: true },
        { h: 'איזה מידע אנחנו אוספים', list: [
          'פרטים שאתם ממלאים בטופס יצירת הקשר: שם, אימייל, סוג השירות והודעה.',
          'פרטים שאתם שולחים כשאתם פונים אלינו בוואטסאפ, באימייל או בטלפון.',
          'מידע טכני בסיסי שנאסף אוטומטית בידי ספקית האחסון (כמו כתובת IP, סוג הדפדפן ומדדי מהירות טעינה אנונימיים), לצורך הפעלת האתר ואבטחתו.'
        ] },
        { h: 'למה אנחנו משתמשים במידע', p: ['רק כדי לחזור אליכם, להבין את הצורך שלכם, לתת הצעת מחיר, ואם נעבוד יחד, לספק את השירות ולנהל את הקשר העסקי. לא נשלח לכם דיוור שיווקי בלי הסכמה מפורשת, ולא נמכור את המידע לאף אחד.'] },
        { h: 'האם חובה למסור את המידע', p: ['לא. אין חובה חוקית למסור לנו מידע, והמסירה תלויה ברצונכם ובהסכמתכם. בלי פרטי קשר פשוט לא נוכל לחזור אליכם.'] },
        { h: 'מי מקבל את המידע', p: ['אנחנו נעזרים בספקי שירות שמעבדים מידע עבורנו, לצורך המטרות שלמעלה בלבד:'], list: [
          'Formspree: קבלת ההודעות מטופס יצירת הקשר. השרתים שלה נמצאים בארצות הברית.',
          'Netlify: אחסון האתר.',
          'Google (Gmail): קבלת אימיילים וניהולם.',
          'WhatsApp (Meta): אם בחרתם לפנות אלינו בוואטסאפ.'
        ], after: ['חלק מהספקים מאחסנים מידע מחוץ לישראל. נמסור מידע לגורם אחר רק אם החוק מחייב זאת.'] },
        { h: 'עוגיות (Cookies)', p: ['האתר לא משתמש בעוגיות פרסום, מעקב או אנליטיקה. ייתכן שספקית האחסון תשתמש בעוגיות טכניות הכרחיות בלבד להפעלת האתר.'] },
        { h: 'כמה זמן נשמר המידע', p: ['פניות שלא הובילו לעבודה משותפת נמחקות תוך 24 חודשים. מידע של לקוחות נשמר כל עוד הוא נחוץ למתן השירות ולפי הנדרש בחוק, למשל לצורכי מס.'] },
        { h: 'אבטחת מידע', p: ['אנחנו שומרים על המידע באמצעים סבירים: חיבור מוצפן (HTTPS) לאתר, אימות דו-שלבי בחשבונות שבהם נשמר המידע, וגישה מוגבלת לבעל העסק בלבד.'] },
        { h: 'הזכויות שלכם', p: ['לפי החוק, אתם רשאים לעיין במידע שנשמר עליכם, ולבקש לתקן או למחוק מידע שאינו נכון, שלם, ברור או מעודכן. אפשר לפנות אלינו בעברית, בערבית או באנגלית בפרטי הקשר שלמעלה, ונענה תוך 30 יום.'] },
        { h: 'שינויים במדיניות', p: ['אם נעדכן את המדיניות, הגרסה החדשה תפורסם בעמוד הזה עם תאריך העדכון.'] }
      ]
    },
    en: {
      title: 'Privacy policy',
      description: 'The DevUltra privacy policy: what information the site collects, why, who receives it, how long it is kept and what rights you have.',
      updatedLabel: 'Last updated',
      sections: [
        { p: ['DevUltra respects your privacy. This policy explains what information we collect when you use devultra.net or contact us, and what we do with it, in line with the Israeli Protection of Privacy Law, 1981.'] },
        { h: 'Who is responsible for your information', p: ['The database owner is DevUltra, run by Younan Nwesre. You can contact us with any privacy question:'], contact: true },
        { h: 'What we collect', list: [
          'Details you enter in the contact form: name, email, the service you need and your message.',
          'Details you send when you contact us on WhatsApp, by email or by phone.',
          'Basic technical information collected automatically by our hosting provider (such as IP address, browser type and anonymous page-speed metrics), to run and secure the site.'
        ] },
        { h: 'Why we use it', p: ['Only to reply to you, understand what you need, send a quote and, if we work together, deliver the service and manage our business relationship. We will not send you marketing messages without your explicit consent, and we never sell your information.'] },
        { h: 'Do you have to give us this information?', p: ['No. There is no legal obligation to give us any information; it is up to you and given with your consent. Without contact details we simply cannot reply to you.'] },
        { h: 'Who receives the information', p: ['We use service providers that process information on our behalf, only for the purposes above:'], list: [
          'Formspree: receives messages from the contact form. Its servers are in the United States.',
          'Netlify: hosts the website.',
          'Google (Gmail): receives and stores email.',
          'WhatsApp (Meta): if you choose to contact us on WhatsApp.'
        ], after: ['Some providers store information outside Israel. We will only share information with anyone else where the law requires it.'] },
        { h: 'Cookies', p: ['The site does not use advertising, tracking or analytics cookies. The hosting provider may use strictly necessary technical cookies to run the site.'] },
        { h: 'How long we keep it', p: ['Enquiries that do not lead to a project are deleted within 24 months. Client information is kept for as long as it is needed to deliver the service and as required by law, for example for tax purposes.'] },
        { h: 'How we protect it', p: ['We use reasonable safeguards: an encrypted (HTTPS) connection to the site, two-factor authentication on the accounts that hold your information, and access limited to the business owner.'] },
        { h: 'Your rights', p: ['Under the law you may review the information we hold about you and ask us to correct or delete information that is inaccurate, incomplete, unclear or out of date. Contact us in Hebrew, Arabic or English using the details above, and we will reply within 30 days.'] },
        { h: 'Changes to this policy', p: ['If we update this policy, the new version will be published on this page with its date.'] }
      ]
    },
    ar: {
      title: 'سياسة الخصوصية',
      description: 'سياسة الخصوصية لـ DevUltra: ما المعلومات التي يجمعها الموقع، ولأي غرض، ومن يتلقاها، وكم تُحفظ، وما هي حقوقك.',
      updatedLabel: 'آخر تحديث',
      sections: [
        { p: ['تحترم DevUltra خصوصيتك. توضح هذه السياسة ما المعلومات التي نجمعها عند استخدامك لموقع devultra.net أو تواصلك معنا، وماذا نفعل بها، وفقاً لقانون حماية الخصوصية لسنة 1981.'] },
        { h: 'من المسؤول عن المعلومات', p: ['مالك قاعدة البيانات هو DevUltra، بإدارة يونان نويصرة. يمكنك التواصل معنا بأي سؤال يخص الخصوصية:'], contact: true },
        { h: 'ما المعلومات التي نجمعها', list: [
          'التفاصيل التي تُدخلها في نموذج التواصل: الاسم، البريد الإلكتروني، نوع الخدمة والرسالة.',
          'التفاصيل التي ترسلها عند تواصلك معنا عبر واتساب أو البريد الإلكتروني أو الهاتف.',
          'معلومات تقنية أساسية تجمعها شركة الاستضافة تلقائياً (مثل عنوان IP ونوع المتصفح ومقاييس سرعة تحميل مجهولة الهوية)، لتشغيل الموقع وحمايته.'
        ] },
        { h: 'لماذا نستخدم المعلومات', p: ['فقط للرد عليك، وفهم احتياجك، وتقديم عرض سعر، وفي حال عملنا معاً، لتقديم الخدمة وإدارة العلاقة التجارية. لن نرسل لك رسائل تسويقية دون موافقتك الصريحة، ولن نبيع معلوماتك لأي جهة.'] },
        { h: 'هل يجب عليك تقديم المعلومات؟', p: ['لا. لا يوجد أي التزام قانوني بتقديم المعلومات، وتقديمها يعود لرغبتك وموافقتك. بدون تفاصيل التواصل لن نتمكن ببساطة من الرد عليك.'] },
        { h: 'من يتلقى المعلومات', p: ['نستعين بمزودي خدمات يعالجون المعلومات نيابة عنا، للأغراض المذكورة أعلاه فقط:'], list: [
          'Formspree: استقبال الرسائل من نموذج التواصل. خوادمها في الولايات المتحدة.',
          'Netlify: استضافة الموقع.',
          'Google (Gmail): استقبال البريد الإلكتروني وحفظه.',
          'واتساب (Meta): إذا اخترت التواصل معنا عبر واتساب.'
        ], after: ['يحفظ بعض المزودين المعلومات خارج البلاد. لن نشارك المعلومات مع أي جهة أخرى إلا إذا ألزمنا القانون بذلك.'] },
        { h: 'ملفات تعريف الارتباط (Cookies)', p: ['لا يستخدم الموقع ملفات تعريف ارتباط للإعلانات أو التتبع أو التحليلات. قد تستخدم شركة الاستضافة ملفات تقنية ضرورية فقط لتشغيل الموقع.'] },
        { h: 'كم نحتفظ بالمعلومات', p: ['تُحذف الاستفسارات التي لم تتحول إلى مشروع خلال 24 شهراً. تُحفظ معلومات العملاء طالما كانت ضرورية لتقديم الخدمة ووفق ما يقتضيه القانون، مثلاً لأغراض ضريبية.'] },
        { h: 'كيف نحمي المعلومات', p: ['نستخدم وسائل حماية معقولة: اتصال مشفر (HTTPS) بالموقع، ومصادقة ثنائية في الحسابات التي تُحفظ فيها المعلومات، وصلاحية وصول محصورة بصاحب العمل فقط.'] },
        { h: 'حقوقك', p: ['بموجب القانون، يحق لك الاطلاع على المعلومات المحفوظة عنك، وطلب تصحيح أو حذف أي معلومات غير صحيحة أو غير كاملة أو غير واضحة أو غير محدّثة. تواصل معنا بالعربية أو العبرية أو الإنجليزية عبر التفاصيل أعلاه، وسنرد خلال 30 يوماً.'] },
        { h: 'التغييرات في السياسة', p: ['إذا قمنا بتحديث هذه السياسة، ستُنشر النسخة الجديدة في هذه الصفحة مع تاريخ التحديث.'] }
      ]
    }
  }
}

export const legalContact = CONTACT
export const contactLabels = {
  he: { name: 'שם', phone: 'טלפון', email: 'אימייל', role: 'רכז נגישות', person: 'יונאן נוסרה' },
  en: { name: 'Name', phone: 'Phone', email: 'Email', role: 'Accessibility coordinator', person: 'Younan Nwesre' },
  ar: { name: 'الاسم', phone: 'الهاتف', email: 'البريد الإلكتروني', role: 'منسق إمكانية الوصول', person: 'يونان نويصرة' }
}
