import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "products": "Products",
        "contact": "Contact",
        "team": "Team",
        "blog": "Blog",
        "careers": "Careers",
        "caseStudies": "Case Studies",
        "branding": "Branding",
        "technology": "Technology",
        "marketing": "Marketing",
        "advertising": "Advertising"
      },
      "hero": {
        "title": "Transforming Ideas into Digital Reality",
        "subtitle": "We are more than just a digital agency. We are your growth partners, dedicated to transforming your vision into impactful digital solutions that deliver results.",
        "getStarted": "Get Started",
        "learnMore": "Learn More"
      },
      "common": {
        "learnMore": "Learn More",
        "getStarted": "Get Started",
        "contactUs": "Contact Us",
        "readMore": "Read More",
        "viewAll": "View All",
        "scheduleCall": "Schedule Call",
        "ourServices": "Our Services",
        "ourProducts": "Our Products",
        "whyChoose": "Why Choose GoWide?",
        "ourProcess": "Our Process",
        "ourImpact": "Our Impact",
        "loading": "Loading...",
        "applyNow": "Apply Now",
        "viewMore": "View More",
        "sendMessage": "Send Message",
        "callNow": "Call Now",
        "watchDemo": "Watch Demo",
        "joinWaitlist": "Join Waitlist",
        "launchPlatform": "Launch Platform",
        "scheduleDemo": "Schedule Demo"
      },
      "about": {
        "whoWeAre": "Who We Are",
        "description": "We are GoWide, a creative digital agency. We specialize in branding, advertising, marketing, and technology solutions that help businesses grow and thrive in the digital landscape.",
        "ourVision": "Our Vision",
        "ourMission": "Our Mission",
        "visionText": "To be the leading force in digital innovation, creating transformative solutions that inspire and elevate businesses worldwide.",
        "missionText": "To deliver exceptional digital solutions through innovative thinking, cutting-edge technology, and unwavering commitment to client success.",
        "title": "Who We Are",
        "subtitle": "Innovative thinking",
        "coreValues": "Our Core Values",
        "coreValuesDesc": "The principles that guide everything we do",
        "tailoredSolution": "Our Tailored Solution",
        "tailoredSolutionDesc": "A systematic approach to deliver exceptional results",
        "impact": "Our Impact",
        "impactDesc": "Numbers that speak for themselves"
      },
      "services": {
        "title": "Our Services",
        "subtitle": "Comprehensive digital solutions to grow your business",
        "branding": "Branding",
        "technology": "Technology",
        "marketing": "Marketing",
        "advertising": "Advertising",
        "brandingDesc": "Transform your brand identity with our expertise",
        "technologyDesc": "Power innovation with advanced solutions",
        "marketingDesc": "Drive growth with strategic marketing solutions",
        "advertisingDesc": "Create impactful advertising campaigns that convert"
      },
      "contact": {
        "heroTitle": "Ready to Transform Your Business?",
        "heroSubtitle": "From innovative technology solutions to creative branding strategies, we're here to help your business thrive and bring your vision to life",
        "title": "Ready to get started?",
        "subtitle": "Tell us what you need and we'll get back to you",
        "name": "Name",
        "email": "Email",
        "phone": "Phone",
        "company": "Company",
        "message": "Message",
        "send": "Send Message",
        "getInTouch": "Get In Touch",
        "address": "Address",
        "followUs": "Follow Us",
        "ourLocations": "Our Locations",
        "locationsDesc": "Find us across multiple locations worldwide",
        "groupOfCompanies": "Group of Companies",
        "companiesDesc": "Diverse portfolio of innovative solutions",
        "sendUsMessage": "Send Us a Message",
        "messageDesc": "Tell us about your project and we'll get back to you within 24 hours",
        "preferDirectContact": "Prefer Direct Contact?",
        "directContactDesc": "Choose the method that works best for you"
      },
      "team": {
        "title": "Meet the Minds Behind GoWide",
        "subtitle": "Our diverse team of passionate professionals brings together creativity, technical expertise, and innovative thinking",
        "teamMembers": "Team Members",
        "yearsExperience": "Years Experience",
        "projectsDelivered": "Projects Delivered"
      },
      "blog": {
        "title": "Our Blog",
        "subtitle": "Insights, tips, and industry knowledge to help you stay ahead in the digital world.",
        "loading": "Loading blog posts...",
        "noDate": "No date",
        "general": "General"
      },
      "careers": {
        "title": "Join Our Team",
        "subtitle": "Build your career with us and help create amazing digital experiences for clients worldwide.",
        "loading": "Loading career opportunities...",
        "noOpenPositions": "No Open Positions",
        "noPositionsDesc": "We don't have any open positions right now, but we're always looking for talented people!",
        "sendResume": "Send Us Your Resume"
      },
      "caseStudies": {
        "title": "Case Studies",
        "subtitle": "Real results from real clients. Discover how we've helped businesses achieve their goals.",
        "loading": "Loading case studies...",
        "viewCaseStudy": "View Case Study",
        "resultsAchieved": "Results Achieved"
      },
      "branding": {
        "heroTitle": "Elevate Your Brand Identity",
        "heroSubtitle": "We craft compelling brand experiences that resonate with your audience and drive meaningful connections through strategic design and storytelling.",
        "startJourney": "Start Your Journey",
        "whatWeOffer": "What We Offer",
        "ourServices": "Our Services",
        "servicesSubtitle": "Comprehensive solutions to elevate your brand",
        "mostPopular": "Most Popular",
        "howWeWork": "How We Work",
        "provenProcess": "Our Proven Process",
        "processSubtitle": "A systematic approach to create exceptional brands",
        "whyGoWide": "Why GoWide",
        "whatSetsUsApart": "What Sets Us Apart",
        "advantagesSubtitle": "Discover why we're your ideal branding partner",
        "brandingServices": "Our Branding Services",
        "servicesDesc": "Comprehensive solutions to elevate your brand presence"
      },
      "technology": {
        "heroTitle": "Power Your Digital Future",
        "heroSubtitle": "We deliver cutting-edge technology solutions that transform businesses and drive innovation through strategic development and digital excellence.",
        "ourExpertise": "Our Expertise",
        "technologySolutions": "Technology Solutions",
        "solutionsDesc": "Innovative technology services that transform your business"
      },
      "marketing": {
        "heroTitle": "Elevate Your Marketing Game",
        "heroSubtitle": "Strategic marketing campaigns that build brand awareness, engage audiences, and drive sustainable business growth through innovative digital strategies.",
        "marketingServices": "Marketing Services",
        "servicesDesc": "Comprehensive marketing solutions that drive growth"
      },
      "advertising": {
        "heroTitle": "Amplify Your Brand Reach",
        "heroSubtitle": "Strategic advertising campaigns that drive results and maximize your ROI through targeted digital marketing solutions.",
        "advertisingServices": "Advertising Services",
        "servicesDesc": "Comprehensive advertising solutions that drive growth"
      },
      "products": {
        "title": "Our Products",
        "subtitle": "Explore our innovative software solutions designed to meet your needs.",
        "rendre": {
          "title": "Rendre Recycling",
          "tagline": "Transform waste, drive sustainability.",
          "subtitle": "Transform vehicle recycling with smart identification, efficient collection, and eco-friendly processing for environmental sustainability.",
          "launchingMid2026": "🚀 Launching Mid 2026",
          "getNotified": "Get Notified at Launch"
        },
        "upflyover": {
          "title": "UpFlyOver",
          "tagline": "Fly Over Business Barriers",
          "subtitle": "The world's most trusted B2B networking platform",
          "description": "Join thousands of verified companies worldwide. Find suppliers, customers, and business partners with our AI-powered matching system.",
          "launchingUAE": "🚀 Now Launching in UAE!",
          "firstYearFree": "First Year Completely FREE"
        },
        "gymestry": {
          "title": "Gymestry",
          "tagline": "Revolutionizing Fitness Management",
          "subtitle": "The most comprehensive fitness management platform designed specifically for modern gyms and fitness centers.",
          "launchingJan2026": "🚀 Launching January 1, 2026"
        }
      },
      "footer": {
        "description": "We are a creative agency focused on growing brands through innovative digital solutions and memorable experiences.",
        "quickLinks": "Quick Links",
        "services": "Services",
        "products": "Products",
        "copyright": "© 2025 Gowide Business Services Pvt Ltd. All rights reserved.",
        "termsConditions": "Terms & Conditions",
        "privacyPolicy": "Privacy Policy",
        "refundPolicy": "Refund Policy",
        "cookiePolicy": "Cookie Policy",
        "newsletter": "Newsletter",
        "subscribe": "Subscribe",
        "enterEmail": "Enter your email"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "about": "حول",
        "services": "الخدمات",
        "products": "المنتجات",
        "contact": "اتصل بنا",
        "team": "الفريق",
        "blog": "المدونة",
        "careers": "الوظائف",
        "caseStudies": "دراسات الحالة",
        "branding": "العلامة التجارية",
        "technology": "التكنولوجيا",
        "marketing": "التسويق",
        "advertising": "الإعلان"
      },
      "hero": {
        "title": "تحويل الأفكار إلى واقع رقمي",
        "subtitle": "نحن أكثر من مجرد وكالة رقمية. نحن شركاؤك في النمو، مكرسون لتحويل رؤيتك إلى حلول رقمية مؤثرة تحقق النتائج.",
        "getStarted": "ابدأ الآن",
        "learnMore": "اعرف المزيد"
      },
      "common": {
        "learnMore": "اعرف المزيد",
        "getStarted": "ابدأ الآن",
        "contactUs": "اتصل بنا",
        "readMore": "اقرأ المزيد",
        "viewAll": "عرض الكل",
        "scheduleCall": "جدولة مكالمة",
        "ourServices": "خدماتنا",
        "ourProducts": "منتجاتنا",
        "whyChoose": "لماذا تختار جو وايد؟",
        "ourProcess": "عمليتنا",
        "ourImpact": "تأثيرنا",
        "loading": "جاري التحميل...",
        "applyNow": "تقدم الآن",
        "viewMore": "عرض المزيد",
        "sendMessage": "إرسال رسالة",
        "callNow": "اتصل الآن",
        "watchDemo": "مشاهدة العرض التوضيحي",
        "joinWaitlist": "انضم لقائمة الانتظار",
        "launchPlatform": "تشغيل المنصة",
        "scheduleDemo": "جدولة عرض توضيحي",
        "strategicSolutions": "حلول رقمية استراتيجية",
        "expertTeam": "فريق خبراء محترفين",
        "innovativeApproach": "نهج تكنولوجي مبتكر",
        "growthAnalytics": "تحليلات النمو",
        "teamCollaboration": "تعاون الفريق",
        "innovation": "الابتكار",
        "fastDelivery": "تسليم سريع",
        "fastDeliveryDesc": "أوقات تسليم سريعة دون التنازل عن الجودة",
        "reliableSolutions": "حلول موثوقة",
        "reliableSolutionsDesc": "موثوق بها من قبل الشركات في جميع أنحاء العالم للحصول على نتائج متسقة",
        "innovativeApproachTitle": "نهج مبتكر",
        "innovativeApproachDesc": "حلول متطورة مصممة خصيصاً لاحتياجاتك",
        "support247": "دعم 24/7",
        "support247Desc": "مساعدة على مدار الساعة لجميع استفساراتك",
        "discover": "اكتشاف",
        "discoverDesc": "فهم احتياجاتك وأهدافك",
        "design": "تصميم",
        "designDesc": "إنشاء حلول مخصصة",
        "develop": "تطوير",
        "developDesc": "البناء بدقة",
        "deploy": "نشر",
        "deployDesc": "إطلاق نجاحك",
        "projectsCompleted": "المشاريع المكتملة",
        "happyClients": "العملاء السعداء",
        "yearsExperience": "سنوات الخبرة",
        "supportAvailable": "الدعم متاح",
        "clientSatisfaction": "رضا العملاء",
        "builtWithTech": "مبني بتقنية متطورة",
        "builtWithTechDesc": "بيانات في الوقت الفعلي، رسوم متحركة متقدمة، وهندسة معمارية على مستوى المؤسسة",
        "realTimeAnalytics": "تحليلات في الوقت الفعلي",
        "realTimeAnalyticsDesc": "تتبع الزوار في الوقت الفعلي ومراقبة الأداء",
        "advancedAnimations": "رسوم متحركة متقدمة",
        "advancedAnimationsDesc": "رسوم متحركة بمعدل 60 إطار في الثانية مع انتقالات قائمة على الفيزياء",
        "multiLanguageSystem": "نظام متعدد اللغات",
        "multiLanguageSystemDesc": "كشف ذكي للغة وتبديل سلس",
        "whatOurClientsSay": "ما يقوله عملاؤنا",
        "clientTestimonial": "جو وايد حولت حضورنا الرقمي بالكامل. نهجهم المبتكر واهتمامهم بالتفاصيل فاق توقعاتنا. خبرة الفريق في التصميم والتكنولوجيا رائعة.",
        "stayUpdated": "ابق على اطلاع",
        "stayUpdatedDesc": "احصل على أحدث الرؤى والنصائح والتحديثات في صندوق الوارد الخاص بك",
        "enterEmail": "أدخل بريدك الإلكتروني",
        "subscribe": "اشترك"
      },
      "about": {
        "whoWeAre": "من نحن",
        "description": "نحن جو وايد، وكالة رقمية إبداعية. نتخصص في العلامات التجارية والإعلان والتسويق والحلول التقنية التي تساعد الشركات على النمو والازدهار في المشهد الرقمي.",
        "ourVision": "رؤيتنا",
        "ourMission": "مهمتنا",
        "visionText": "أن نكون القوة الرائدة في الابتكار الرقمي، وإنشاء حلول تحويلية تلهم وترفع الشركات في جميع أنحاء العالم.",
        "missionText": "تقديم حلول رقمية استثنائية من خلال التفكير المبتكر والتكنولوجيا المتطورة والالتزام الثابت بنجاح العملاء.",
        "title": "من نحن",
        "subtitle": "التفكير المبتكر",
        "coreValues": "قيمنا الأساسية",
        "coreValuesDesc": "المبادئ التي توجه كل ما نقوم به",
        "tailoredSolution": "حلولنا المخصصة",
        "tailoredSolutionDesc": "نهج منهجي لتحقيق نتائج استثنائية",
        "impact": "تأثيرنا",
        "impactDesc": "أرقام تتتحدث عن نفسها",
        "scrollToExplore": "مرر للاستكشاف",
        "stepLearn": "تعلم",
        "stepLearnDesc": "نبدأ بفهم احتياجاتك وأهدافك الفريدة.",
        "stepResearch": "بحث",
        "stepResearchDesc": "يقوم فريقنا بإجراء بحث متعمق لتحديد الاستراتيجية الأكثر فعالية.",
        "stepDiscuss": "مناقشة",
        "stepDiscussDesc": "نتعاون معك لمناقشة الحل المقترح وضمان التوافق.",
        "stepSolution": "حل",
        "stepSolutionDesc": "نقدم حلاً مخصصاً مصمماً خصيصاً لمتطلباتك.",
        "stepImplement": "تنفيذ",
        "stepImplementDesc": "ينفذ فريقنا الحل، ويحول الاستراتيجية إلى واقع.",
        "stepInvoice": "فاتورة",
        "stepInvoiceDesc": "نوفر عملية فوترة شفافة بناءً على الخدمات المقدمة.",
        "stepAnalyze": "تحليل",
        "stepAnalyzeDesc": "نراجع النتائج ونجري التعديلات اللازمة لضمان النجاح المستمر.",
        "innovationValue": "الابتكار",
        "innovationValueDesc": "نتجاوز الحدود باستمرار ونتبنى التقنيات الجديدة لتقديم حلول متطورة.",
        "integrityValue": "النزاهة",
        "integrityValueDesc": "نبني الثقة من خلال الشفافية والصدق والممارسات التجارية الأخلاقية.",
        "excellenceValue": "التميز",
        "excellenceValueDesc": "نسعى للكمال في كل مشروع، ونقدم جودة تفوق التوقعات.",
        "collaborationValue": "التعاون",
        "collaborationValueDesc": "نؤمن بقوة العمل الجماعي والشراكة لتحقيق نتائج استثنائية."
      },
      "services": {
        "title": "خدماتنا",
        "subtitle": "حلول رقمية شاملة لنمو عملك",
        "branding": "العلامة التجارية",
        "technology": "التكنولوجيا",
        "marketing": "التسويق",
        "advertising": "الإعلان",
        "brandingDesc": "حول هوية علامتك التجارية بخبرتنا",
        "technologyDesc": "تشغيل الابتكار بحلول متقدمة",
        "marketingDesc": "قيادة النمو بحلول تسويقية استراتيجية",
        "advertisingDesc": "إنشاء حملات إعلانية مؤثرة تحقق التحويل"
      },
      "contact": {
        "heroTitle": "مستعد لتحويل عملك؟",
        "heroSubtitle": "من الحلول التقنية المبتكرة إلى استراتيجيات العلامة التجارية الإبداعية، نحن هنا لمساعدة عملك على الازدهار وتحقيق رؤيتك",
        "letsConnect": "دعنا نتواصل",
        "support": "الدعم",
        "projects": "المشاريع",
        "happyClients": "العملاء السعداء",
        "sendMessage": "إرسال رسالة",
        "globalPresence": "الحضور العالمي",
        "headOffice": "المكتب الرئيسي - جو وايد",
        "kochiBranch": "فرع كوتشي",
        "dubaiOffice": "مكتب دبي - جلوبال تريد أليز ذ.م.م",
        "londonOffice": "مكتب لندن",
        "openingQ4": "الافتتاح الربع الرابع 2025",
        "ourCompanies": "شركاتنا",
        "fastResponse": "استجابة سريعة",
        "fastResponseDesc": "نرد على جميع الاستفسارات خلال 24 ساعة",
        "securePrivate": "آمن وخاص",
        "securePrivateDesc": "معلوماتك سرية تماماً",
        "freeConsultation": "استشارة مجانية",
        "freeConsultationDesc": "مناقشة أولية مجانية حول مشروعك",
        "firstName": "الاسم الأول",
        "lastName": "اسم العائلة",
        "service": "الخدمة المطلوبة",
        "emailUs": "راسلنا",
        "callUs": "اتصل بنا",
        "scheduleCall": "جدولة مكالمة",
        "bookConsultation": "احجز استشارة",
        "title": "مستعد للبدء؟",
        "subtitle": "أخبرنا باحتياجاتك وسنعاود الاتصال بك",
        "name": "الاسم",
        "email": "البريد الإلكتروني",
        "phone": "الهاتف",
        "company": "الشركة",
        "message": "الرسالة",
        "send": "إرسال الرسالة",
        "getInTouch": "تواصل معنا",
        "address": "العنوان",
        "followUs": "تابعنا",
        "ourLocations": "مواقعنا",
        "locationsDesc": "اعثر علينا في مواقع متعددة حول العالم",
        "groupOfCompanies": "مجموعة الشركات",
        "companiesDesc": "محفظة متنوعة من الحلول المبتكرة",
        "sendUsMessage": "أرسل لنا رسالة",
        "messageDesc": "أخبرنا عن مشروعك وسنعاود الاتصال بك خلال 24 ساعة",
        "preferDirectContact": "تفضل التواصل المباشر؟",
        "directContactDesc": "اختر الطريقة التي تناسبك"
      },
      "team": {
        "title": "تعرف على العقول وراء جو وايد",
        "subtitle": "فريقنا المتنوع من المحترفين المتحمسين يجمع بين الإبداع والخبرة التقنية والتفكير المبتكر",
        "teamMembers": "أعضاء الفريق",
        "yearsExperience": "سنوات الخبرة",
        "projectsDelivered": "المشاريع المنجزة"
      },
      "blog": {
        "title": "مدونتنا",
        "subtitle": "رؤى ونصائح ومعرفة الصناعة لمساعدتك على البقاء في المقدمة في العالم الرقمي.",
        "loading": "جاري تحميل منشورات المدونة...",
        "noDate": "لا يوجد تاريخ",
        "general": "عام"
      },
      "careers": {
        "title": "انضم إلى فريقنا",
        "subtitle": "ابن مسيرتك المهنية معنا وساعد في إنشاء تجارب رقمية مذهلة للعملاء في جميع أنحاء العالم.",
        "loading": "جاري تحميل الفرص الوظيفية...",
        "noOpenPositions": "لا توجد وظائف شاغرة",
        "noPositionsDesc": "ليس لدينا أي وظائف شاغرة الآن، لكننا نبحث دائماً عن الأشخاص الموهوبين!",
        "sendResume": "أرسل لنا سيرتك الذاتية"
      },
      "caseStudies": {
        "title": "دراسات الحالة",
        "subtitle": "نتائج حقيقية من عملاء حقيقيين. اكتشف كيف ساعدنا الشركات على تحقيق أهدافها.",
        "loading": "جاري تحميل دراسات الحالة...",
        "viewCaseStudy": "عرض دراسة الحالة",
        "resultsAchieved": "النتائج المحققة"
      },
      "branding": {
        "heroTitle": "ارتق بهوية علامتك التجارية",
        "heroSubtitle": "نحن نصنع تجارب علامة تجارية مقنعة تتردد صداها مع جمهورك وتدفع الاتصالات الهادفة من خلال التصميم الاستراتيجي والسرد.",
        "startJourney": "ابدأ رحلتك",
        "whatWeOffer": "ما نقدمه",
        "ourServices": "خدماتنا",
        "servicesSubtitle": "حلول شاملة لرفع حضور علامتك التجارية",
        "mostPopular": "الأكثر شعبية",
        "howWeWork": "كيف نعمل",
        "provenProcess": "عمليتنا المثبتة",
        "processSubtitle": "نهج منهجي لإنشاء علامات تجارية استثنائية",
        "whyGoWide": "لماذا جو وايد",
        "whatSetsUsApart": "ما يميزنا",
        "advantagesSubtitle": "اكتشف لماذا نحن شريك العلامة التجارية المثالي",
        "brandingServices": "خدمات العلامة التجارية",
        "servicesDesc": "حلول شاملة لرفع حضور علامتك التجارية",
        "visualIdentityDesign": "تصميم الهوية البصرية",
        "visualIdentityDesc": "إنشاء لغة بصرية متماسكة تحكي قصة علامتك التجارية من خلال الشعارات والألوان والطباعة وأنظمة التصميم.",
        "logoDesignVariations": "تصميم الشعار والتنويعات",
        "brandGuidelines": "إرشادات العلامة التجارية",
        "colorPaletteTypography": "لوحة الألوان والطباعة",
        "brandStrategy": "استراتيجية العلامة التجارية",
        "brandStrategyDesc": "تطوير خارطة طريق شاملة لوضع علامتك التجارية بفعالية في المشهد التنافسي للسوق.",
        "marketResearch": "بحث السوق",
        "competitorAnalysis": "تحليل المنافسين",
        "brandPositioning": "وضع العلامة التجارية",
        "brandVoiceMessaging": "صوت العلامة التجارية والرسائل",
        "brandVoiceDesc": "صياغة نبرة ثابتة واستراتيجية رسائل تتردد صداها مع جمهورك المستهدف عبر جميع نقاط الاتصال.",
        "voiceGuidelines": "إرشادات الصوت",
        "contentStrategy": "استراتيجية المحتوى",
        "messagingFramework": "إطار الرسائل",
        "brandImplementation": "تنفيذ العلامة التجارية",
        "brandImplementationDesc": "دمج هوية علامتك التجارية الجديدة بسلاسة عبر جميع المنصات وتمكين فريقك من تمثيلها بثبات.",
        "teamTraining": "تدريب الفريق",
        "assetCreation": "إنشاء الأصول",
        "launchStrategy": "استراتيجية الإطلاق",
        "discoveryResearch": "الاكتشاف والبحث",
        "discoveryDesc": "الغوص العميق في عملك ومشهد السوق والجمهور المستهدف لفهم وضعك الفريد والفرص المتاحة.",
        "marketAnalysis": "تحليل السوق",
        "competitorResearch": "بحث المنافسين",
        "brandAudit": "مراجعة العلامة التجارية",
        "strategyDevelopment": "تطوير الاستراتيجية",
        "strategyDesc": "إنشاء استراتيجية علامة تجارية شاملة تحدد وضعك ورسائلك وخارطة طريق نجاح السوق.",
        "brandArchitecture": "هندسة العلامة التجارية",
        "messagingStrategy": "استراتيجية الرسائل",
        "creativeDesign": "التصميم الإبداعي",
        "creativeDesc": "إحياء علامتك التجارية من خلال الهوية البصرية المقنعة، بما في ذلك الشعارات والألوان والطباعة وأصول العلامة التجارية.",
        "logoDesign": "تصميم الشعار",
        "visualIdentity": "الهوية البصرية",
        "launchImplementation": "الإطلاق والتنفيذ",
        "launchDesc": "نشر علامتك التجارية الجديدة عبر جميع نقاط الاتصال وتقديم الدعم المستمر لضمان تنفيذ العلامة التجارية بثبات.",
        "brandRollout": "طرح العلامة التجارية",
        "ongoingSupport": "الدعم المستمر",
        "creativeExcellence": "التميز الإبداعي",
        "creativeExcellenceDesc": "فريق إبداعي حائز على جوائز مع سجل حافل في تقديم حلول علامة تجارية مبتكرة تأسر الجماهير.",
        "awardWinningDesigns": "• 50+ تصميم حائز على جوائز",
        "creativeIndustryRecognition": "• اعتراف صناعة الإبداع",
        "dataDrivenStrategy": "استراتيجية مدفوعة بالبيانات",
        "dataDrivenDesc": "كل قرار للعلامة التجارية مدعوم ببحث السوق الشامل والتحليلات لضمان أقصى تأثير وعائد استثمار.",
        "marketResearchAnalysis": "• بحث وتحليل السوق",
        "performanceTracking": "• تتبع الأداء",
        "partnershipApproach": "نهج الشراكة",
        "partnershipDesc": "نعمل كامتداد لفريقك، ونقدم الدعم التعاوني والتواصل الشفاف طوال الرحلة.",
        "dedicatedAccountManager": "• مدير حساب مخصص",
        "support247Available": "• دعم 24/7 متاح",
        "futureReadySolutions": "حلول جاهزة للمستقبل",
        "futureReadyDesc": "حلول علامة تجارية قابلة للتوسع مصممة للنمو مع عملك والتكيف مع اتجاهات السوق والتقنيات المتطورة.",
        "scalableBrandSystems": "• أنظمة علامة تجارية قابلة للتوسع",
        "futureProofDesign": "• تصميم مقاوم للمستقبل",
        "visualIdentityDesignTitle": "تصميم الهوية البصرية",
        "visualIdentityDesignDesc": "إنشاء لغة بصرية متماسكة تحكي قصة علامتك التجارية من خلال الشعارات والألوان والطباعة وأنظمة التصميم.",
        "brandStrategyTitle": "استراتيجية العلامة التجارية",
        "brandStrategyTitleDesc": "تطوير خارطة طريق شاملة لوضع علامتك التجارية بفعالية في المشهد التنافسي للسوق.",
        "brandVoiceMessagingTitle": "صوت العلامة التجارية والرسائل",
        "brandVoiceMessagingTitleDesc": "صياغة نبرة ثابتة واستراتيجية رسائل تتردد صداها مع جمهورك المستهدف عبر جميع نقاط الاتصال.",
        "brandImplementationTitle": "تنفيذ العلامة التجارية",
        "brandImplementationTitleDesc": "دمج هوية علامتك التجارية الجديدة بسلاسة عبر جميع المنصات وتمكين فريقك من تمثيلها بثبات.",
        "discoveryResearchTitle": "الاكتشاف والبحث",
        "discoveryResearchTitleDesc": "الغوص العميق في عملك ومشهد السوق والجمهور المستهدف لفهم وضعك الفريد والفرص المتاحة.",
        "strategyDevelopmentTitle": "تطوير الاستراتيجية",
        "strategyDevelopmentTitleDesc": "إنشاء استراتيجية علامة تجارية شاملة تحدد وضعك ورسائلك وخارطة طريق نجاح السوق.",
        "creativeDesignTitle": "التصميم الإبداعي",
        "creativeDesignTitleDesc": "إحياء علامتك التجارية من خلال الهوية البصرية المقنعة، بما في ذلك الشعارات والألوان والطباعة وأصول العلامة التجارية.",
        "launchImplementationTitle": "الإطلاق والتنفيذ",
        "launchImplementationTitleDesc": "نشر علامتك التجارية الجديدة عبر جميع نقاط الاتصال وتقديم الدعم المستمر لضمان تنفيذ العلامة التجارية بثبات.",
        "creativeExcellenceTitle": "التميز الإبداعي",
        "creativeExcellenceTitleDesc": "فريق إبداعي حائز على جوائز مع سجل حافل في تقديم حلول علامة تجارية مبتكرة تأسر الجماهير.",
        "dataDrivenStrategyTitle": "استراتيجية مدفوعة بالبيانات",
        "dataDrivenStrategyTitleDesc": "كل قرار للعلامة التجارية مدعوم ببحث السوق الشامل والتحليلات لضمان أقصى تأثير وعائد استثمار.",
        "partnershipApproachTitle": "نهج الشراكة",
        "partnershipApproachTitleDesc": "نعمل كامتداد لفريقك، ونقدم الدعم التعاوني والتواصل الشفاف طوال الرحلة.",
        "futureReadySolutionsTitle": "حلول جاهزة للمستقبل",
        "futureReadySolutionsTitleDesc": "حلول علامة تجارية قابلة للتوسع مصممة للنمو مع عملك والتكيف مع اتجاهات السوق والتقنيات المتطورة."
      },
      "technology": {
        "heroTitle": "قوة مستقبلك الرقمي",
        "heroSubtitle": "نحن نقدم حلول تقنية متطورة تحول الشركات وتدفع الابتكار من خلال التطوير الاستراتيجي والتميز الرقمي.",
        "ourExpertise": "خبرتنا",
        "technologySolutions": "الحلول التقنية",
        "solutionsDesc": "خدمات تكنولوجية مبتكرة تحول عملك"
      },
      "marketing": {
        "heroTitle": "ارتق بلعبة التسويق الخاصة بك",
        "heroSubtitle": "حملات تسويقية استراتيجية تبني الوعي بالعلامة التجارية وتشرك الجماهير وتدفع النمو المستدام للأعمال من خلال استراتيجيات رقمية مبتكرة.",
        "marketingServices": "خدمات التسويق",
        "servicesDesc": "حلول تسويقية شاملة تدفع النمو"
      },
      "advertising": {
        "heroTitle": "ضخم وصول علامتك التجارية",
        "heroSubtitle": "حملات إعلانية استراتيجية تحقق النتائج وتزيد من عائد الاستثمار من خلال حلول التسويق الرقمي المستهدفة.",
        "advertisingServices": "خدمات الإعلان",
        "servicesDesc": "حلول إعلانية شاملة تدفع النمو",
        "advertisingSolutions": "حلول إعلانية",
        "avgROIIncrease": "متوسط زيادة عائد الاستثمار",
        "impressionsGenerated": "الظهور المحققة",
        "clientSatisfaction": "رضا العملاء",
        "campaignPerformance": "أداء الحملة",
        "growth": "نمو",
        "ourServices": "خدماتنا",
        "servicesSubtitle": "حلول إعلانية شاملة لدفع النمو",
        "googleAds": "إعلانات جوجل",
        "googleAdsDesc": "حملات إعلانات جوجل استراتيجية تستهدف الجمهور المناسب وتعظم إنفاقك الإعلاني.",
        "searchAds": "إعلانات البحث",
        "displayAds": "إعلانات العرض",
        "shoppingAds": "إعلانات التسوق",
        "videoAds": "إعلانات الفيديو",
        "socialMediaAdvertising": "إعلانات وسائل التواصل الاجتماعي",
        "socialMediaAdvertisingDesc": "حملات وسائل التواصل الاجتماعي الجذابة عبر جميع المنصات الرئيسية لبناء الوعي بالعلامة التجارية ودفع التحويلات.",
        "facebookAds": "إعلانات فيسبوك",
        "instagramAds": "إعلانات إنستاجرام",
        "linkedinAds": "إعلانات لينكد إن",
        "twitterAds": "إعلانات تويتر",
        "targetedCampaigns": "حملات مستهدفة",
        "targetedCampaignsDesc": "حملات إعلانية مستهدفة بدقة تصل إلى عملائك المثاليين في الوقت والمكان المناسب.",
        "audienceTargeting": "استهداف الجمهور",
        "retargeting": "إعادة الاستهداف",
        "lookalikeاudiences": "جماهير مشابهة",
        "behavioralTargeting": "استهداف سلوكي",
        "performanceTracking": "تتبع الأداء",
        "performanceTrackingDesc": "تحليلات وتقارير شاملة لقياس نجاح الحملة والتحسين للحصول على نتائج أفضل.",
        "realTimeAnalytics": "تحليلات في الوقت الفعلي",
        "conversionTracking": "تتبع التحويلات",
        "roiReporting": "تقارير عائد الاستثمار",
        "customDashboards": "لوحات معلومات مخصصة",
        "creativeDesign": "التصميم الإبداعي",
        "creativeDesignDesc": "إبداعات إعلانية لافتة للنظر ونصوص مقنعة تجذب الانتباه وتدفع إلى العمل.",
        "bannerDesign": "تصميم اللافتات",
        "videoCreatives": "إبداعات الفيديو",
        "copywriting": "كتابة النصوص",
        "brandConsistency": "ثبات العلامة التجارية",
        "campaignOptimization": "تحسين الحملة",
        "campaignOptimizationDesc": "تحسين مستمر واختبار A/B لتحسين أداء الحملة وتعظيم عائد الاستثمار.",
        "abTesting": "اختبار A/B",
        "bidOptimization": "تحسين العطاءات",
        "keywordResearch": "بحث الكلمات المفتاحية",
        "landingPageOptimization": "تحسين صفحة الهبوط",
        "ourProcess": "عمليتنا",
        "advertisingProcess": "عملية الإعلان",
        "processSubtitle": "نهج منهجي لتعظيم عائد استثمارك الإعلاني",
        "researchAnalysis": "بحث وتحليل",
        "researchAnalysisDesc": "بحث عميق في السوق وتحليل المنافسين لتحديد الفرص.",
        "strategyDevelopment": "تطوير الاستراتيجية",
        "strategyDevelopmentDesc": "إنشاء استراتيجيات إعلانية مستهدفة متوافقة مع أهداف عملك.",
        "campaignLaunch": "إطلاق الحملة",
        "campaignLaunchDesc": "تنفيذ الحملات عبر منصات متعددة بتوقيت دقيق.",
        "optimizeTrack": "تحسين وتتبع",
        "optimizeTrackDesc": "مراقبة مستمرة وتحسين لأقصى أداء.",
        "whyChooseUs": "لماذا تختارنا",
        "advertisingAdvantages": "مزايا الإعلان",
        "advantagesSubtitle": "اكتشف لماذا نحن شريك الإعلان المثالي",
        "dataDrivenResults": "نتائج مدفوعة بالبيانات",
        "dataDrivenResultsDesc": "حملات استراتيجية مدعومة بتحليلات شاملة ورؤى الأداء.",
        "roiOptimization": "تحسين عائد الاستثمار",
        "expertTeam": "فريق خبراء",
        "expertTeamDesc": "محترفو إعلان معتمدون مع سنوات من الخبرة عبر جميع المنصات الرئيسية.",
        "googleCertified": "معتمد من جوجل",
        "facebookBlueprint": "فيسبوك بلوبرينت",
        "yearsExperience": "سنوات خبرة",
        "impressionsManaged": "ظهور مُدارة",
        "quickResults": "نتائج سريعة",
        "quickResultsDesc": "إعداد وتحسين سريع للحملة لبدء رؤية النتائج خلال الأسبوع الأول.",
        "setup24to48hr": "إعداد 24-48 ساعة",
        "instantOptimization": "تحسين فوري",
        "weeklyReports": "تقارير أسبوعية",
        "daysToResults": "أيام للنتائج",
        "dedicatedSupport": "دعم مخصص",
        "dedicatedSupportDesc": "مدير حساب شخصي ودعم 24/7 لجميع احتياجاتك الإعلانية.",
        "accountManager": "مدير حساب",
        "chatSupport247": "دعم دردشة 24/7",
        "monthlyReviews": "مراجعات شهرية",
        "supportAvailable": "الدعم متاح",
        "ourPlatforms": "منصاتنا",
        "advertisingPlatforms": "منصات الإعلان",
        "platformsSubtitle": "نهج متعدد المنصات لأقصى وصول",
        "googleAdsTitle": "إعلانات جوجل",
        "googleAdsDesc2": "الوصول إلى العملاء عندما يبحثون عن منتجاتك وخدماتك على جوجل.",
        "dailySearches": "عمليات بحث يومية",
        "facebookAdsTitle": "إعلانات فيسبوك",
        "facebookAdsDesc2": "تواصل مع جمهورك على أكبر منصة وسائل تواصل اجتماعي في العالم.",
        "monthlyUsers": "مستخدم شهرياً",
        "instagramAdsTitle": "إعلانات إنستاجرام",
        "instagramAdsDesc2": "تفاعل مع المحتوى البصري الذي يجذب الانتباه ويدفع إلى العمل.",
        "linkedinAdsTitle": "إعلانات لينكد إن",
        "linkedinAdsDesc2": "استهدف المحترفين وصناع القرار في صناعتك.",
        "professionals": "محترف",
        "youtubeAdsTitle": "إعلانات يوتيوب",
        "youtubeAdsDesc2": "الوصول إلى جمهورك بمحتوى فيديو مقنع وإعلانات.",
        "twitterAdsTitle": "إعلانات تويتر",
        "twitterAdsDesc2": "انضم إلى المحادثات وروج لعلامتك التجارية في المناقشات الفورية."
      },
      "rendre": {
        "sustainableInnovation": "الابتكار المستدام",
        "heroTitle": "رندر لإعادة التدوير",
        "heroSubtitle": "تحويل إعادة تدوير المركبات بالتعرف الذكي والجمع الفعال والمعالجة الصديقة للبيئة للاستدامة البيئية.",
        "launchingMid2026": "🚀 الإطلاق منتصف 2026",
        "days": "أيام",
        "hours": "ساعات",
        "minutes": "دقائق",
        "seconds": "ثواني",
        "getNotified": "احصل على إشعار عند الإطلاق",
        "currentProblems": "المشاكل الحالية",
        "challengeTitle": "التحدي الذي نحله",
        "challengeSubtitle": "معالجة التحديات الحضرية",
        "environmentalPollution": "التلوث البيئي",
        "environmentalPollutionDesc": "المركبات المهجورة تسرب سوائل ضارة، مما يلوث التربة والمياه الجوفية بينما تنبعث غازات سامة.",
        "visualBlight": "التشويه البصري",
        "visualBlightDesc": "السيارات المهجورة تخلق مناظر قبيحة تقلل من قيم العقارات وجمالية المجتمع.",
        "safetyHazards": "مخاطر السلامة",
        "safetyHazardsDesc": "هذه المركبات تعرقل المساحات العامة ويمكن أن تصبح مراكز للأنشطة الإجرامية.",
        "resourceWastage": "هدر الموارد",
        "resourceWastageDesc": "المواد القيمة تبقى غير مستغلة بدلاً من إعادة تدويرها بشكل مسؤول.",
        "ourSolution": "حلنا",
        "solutionTitle": "حلنا الشامل",
        "solutionSubtitle": "الممارسات المستدامة",
        "ourServices": "خدماتنا",
        "servicesTitle": "خدمات إعادة تدوير المركبات",
        "servicesSubtitle": "حلول",
        "vehicleIdentification": "تحديد هوية المركبة",
        "vehicleIdentificationDesc": "الكشف والفهرسة بالذكاء الاصطناعي للمركبات المهجورة باستخدام تقنية التصوير الذكية.",
        "collectionServices": "خدمات الجمع",
        "collectionServicesDesc": "الاستلام والنقل الفعال للمركبات إلى مرافق إعادة التدوير مع تتبع GPS.",
        "materialProcessing": "معالجة المواد",
        "materialProcessingDesc": "عمليات إعادة تدوير متقدمة لاستعادة المواد والمكونات القيمة بأمان.",
        "impactTracking": "تتبع التأثير",
        "impactTrackingDesc": "المراقبة والتقرير في الوقت الفعلي للتأثير البيئي ومقاييس إعادة التدوير."
      },
      "products": {
        "title": "منتجاتنا",
        "subtitle": "استكشف حلولنا البرمجية المبتكرة المصممة لتلبية احتياجاتك.",
        "comingSoon": "قريباً",
        "learnMore": "اعرف المزيد",
        "rendre": {
          "title": "رندر لإعادة التدوير",
          "tagline": "تحويل النفايات، دفع الاستدامة.",
          "subtitle": "تحويل إعادة تدوير المركبات بالتعرف الذكي والجمع الفعال والمعالجة الصديقة للبيئة للاستدامة البيئية.",
          "launchingMid2026": "🚀 الإطلاق منتصف 2026",
          "getNotified": "احصل على إشعار عند الإطلاق",
          "currentProblems": "المشاكل الحالية",
          "challengeTitle": "التحدي الذي نحله",
          "challengeSubtitle": "معالجة التحديات البيئية والحضرية الحرجة",
          "ourSolution": "حلنا",
          "solutionTitle": "حلنا الشامل",
          "solutionSubtitle": "رندر يدمج التكنولوجيا مع الممارسات المستدامة لإدارة دورة حياة المركبات الكاملة.",
          "ourServices": "خدماتنا",
          "servicesTitle": "خدمات إعادة تدوير المركبات",
          "servicesSubtitle": "حلول إدارة المركبات من البداية إلى النهاية",
          "days": "أيام",
          "hours": "ساعات",
          "minutes": "دقائق",
          "seconds": "ثواني"
        },
        "upflyover": {
          "title": "أب فلاي أوفر",
          "tagline": "تحليق فوق حواجز الأعمال",
          "subtitle": "منصة الشبكات التجارية الأكثر ثقة في العالم",
          "description": "انضم إلى آلاف الشركات المعتمدة في جميع أنحاء العالم. ابحث عن الموردين والعملاء وشركاء الأعمال مع نظام المطابقة المدعوم بالذكاء الاصطناعي.",
          "launchingUAE": "🚀 الآن يتم الإطلاق في الإمارات!",
          "firstYearFree": "السنة الأولى مجانية تماماً",
          "firstThousand": "كن من بين أول 1000 شركة تنضم",
          "limitedOffer": "عرض محدود الوقت",
          "offerDetails": "لا حاجة للدفع • وصول كامل لجميع الميزات • انضم الآن واحجز مكانك",
          "whyChoose": "لماذا تختار أب فلاي أوفر؟",
          "whyChooseDesc": "اكتشف الميزات الثورية التي تجعل أب فلاي أوفر منصة الشبكات التجارية الأكثر ثقة في العالم",
          "howItWorks": "كيف يعمل",
          "howItWorksDesc": "ابدأ في دقائق وتواصل مع الشركات المعتمدة في جميع أنحاء العالم",
          "uaeLaunchPricing": "أسعار إطلاق الإمارات",
          "pricingDesc": "عرض خاص لأول 1000 شركة إماراتية تنضم لمنصتنا",
          "pricingNote": "🎉 السنة الأولى مجانية تماماً - لا حاجة لبطاقة ائتمان",
          "takeAnywhere": "خذ أب فلاي أوفر في أي مكان",
          "mobileDesc": "تواصل مع الشركات أثناء التنقل مع تطبيقنا المحمول القوي",
          "platformFeatures": "ميزات المنصة",
          "featuresDesc": "أدوات قوية للشبكات التجارية العالمية",
          "builtWithTech": "مبني بتقنية حديثة",
          "techDesc": "مدعوم بتقنيات متطورة للأداء الأمثل وقابلية التوسع",
          "readyFoundingMember": "مستعد لتكون عضو مؤسس؟",
          "foundingDesc": "انضم لأول 1000 شركة إماراتية واحصل على مزايا مدى الحياة كمتبني مبكر",
          "getStartedNow": "ابدأ الآن",
          "contactSales": "اتصل بالمبيعات",
          "launchPlatform": "تشغيل المنصة"
        },
        "gymestry": {
          "title": "جيمستري",
          "tagline": "ثورة في إدارة اللياقة البدنية",
          "subtitle": "منصة إدارة اللياقة البدنية الأكثر شمولية المصممة خصيصاً لصالات الألعاب الرياضية ومراكز اللياقة البدنية الحديثة.",
          "launchingJan2026": "🚀 الإطلاق 1 يناير 2026",
          "uaeLaunchStrategy": "🇦🇪 استراتيجية إطلاق الإمارات",
          "targetMarket": "🎯 السوق المستهدف",
          "platformFeatures": "ميزات المنصة الشاملة",
          "whyChoose": "لماذا تختار جيمستري؟",
          "readyToTransform": "مستعد لتحويل أعمال اللياقة البدنية؟",
          "getNotified": "احصل على إشعار عند الإطلاق",
          "joinWaitlist": "انضم لقائمة الانتظار"
        }
      },
      "footer": {
        "description": "نحن وكالة إبداعية تركز على تنمية العلامات التجارية من خلال الحلول الرقمية المبتكرة والتجارب التي لا تُنسى.",
        "quickLinks": "روابط سريعة",
        "services": "الخدمات",
        "products": "المنتجات",
        "copyright": "© 2025 جو وايد لخدمات الأعمال المحدودة. جميع الحقوق محفوظة.",
        "termsConditions": "الشروط والأحكام",
        "privacyPolicy": "سياسة الخصوصية",
        "refundPolicy": "سياسة الاسترداد",
        "cookiePolicy": "سياسة ملفات تعريف الارتباط",
        "newsletter": "النشرة الإخبارية",
        "subscribe": "اشترك",
        "enterEmail": "أدخل بريدك الإلكتروني"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;