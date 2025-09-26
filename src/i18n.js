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
        "scheduleDemo": "Schedule Demo",
        "growthAnalytics": "Growth Analytics",
        "teamCollaboration": "Team Collaboration",
        "innovation": "Innovation"
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
        "impactDesc": "Numbers that speak for themselves",
        "strategicDigitalSolutions": "Strategic digital solutions",
        "expertTeamProfessionals": "Expert team of professionals",
        "innovativeTechnologyApproach": "Innovative technology approach",
        "exploreInnovativeSoftware": "Explore our innovative software solutions designed to meet your needs",
        "readyToGetStarted": "Ready to get started?",
        "letUsKnowNeeds": "Tell us what you need and we'll get back to you",
        "tellUsAboutProject": "Tell us about your project",
        "projectDescription": "Whether you need branding, technology solutions, marketing strategies, or any of our products, we're here to help. Share your requirements with us and our expert team will get back to you with the perfect solution.",
        "scheduleACall": "Schedule a Call",
        "whyChooseGoWide": "Why Choose GoWide?",
        "deliverExceptionalResults": "We deliver exceptional results through innovation and expertise",
        "howWeDeliverSuccess": "How we deliver success",
        "numbersThatSpeak": "Numbers that speak for themselves"
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
        "growthAnalytics": "تحليلات النمو",
        "teamCollaboration": "تعاون الفريق",
        "innovation": "الابتكار"
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
        "impactDesc": "أرقام تتحدث عن نفسها",
        "strategicDigitalSolutions": "حلول رقمية استراتيجية",
        "expertTeamProfessionals": "فريق خبراء محترفين",
        "innovativeTechnologyApproach": "نهج تكنولوجي مبتكر",
        "exploreInnovativeSoftware": "استكشف حلولنا البرمجية المبتكرة المصممة لتلبية احتياجاتك",
        "readyToGetStarted": "مستعد للبدء؟",
        "letUsKnowNeeds": "أخبرنا باحتياجاتك وسنعاود الاتصال بك",
        "tellUsAboutProject": "أخبرنا عن مشروعك",
        "projectDescription": "سواء كنت تحتاج إلى علامة تجارية، أو حلول تقنية، أو استراتيجيات تسويقية، أو أي من منتجاتنا، نحن هنا للمساعدة.",
        "scheduleACall": "جدولة مكالمة",
        "whyChooseGoWide": "لماذا تختار جو وايد؟",
        "deliverExceptionalResults": "نحن نقدم نتائج استثنائية من خلال الابتكار والخبرة",
        "howWeDeliverSuccess": "كيف نحقق النجاح",
        "numbersThatSpeak": "أرقام تتحدث عن نفسها"
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
        "followUs": "تابعنا"
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