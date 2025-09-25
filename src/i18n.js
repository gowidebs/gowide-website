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
        "scheduleDemo": "جدولة عرض توضيحي"
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
        "impactDesc": "أرقام تتحدث عن نفسها"
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
        "brandingServices": "خدمات العلامة التجارية",
        "servicesDesc": "حلول شاملة لرفع حضور علامتك التجارية"
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
        "servicesDesc": "حلول إعلانية شاملة تدفع النمو"
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