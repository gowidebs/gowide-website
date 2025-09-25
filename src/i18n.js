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
        "contact": "Contact"
      },
      "hero": {
        "title": "Transforming Ideas Into Digital Reality",
        "subtitle": "We're more than just a digital agency. We're your partners in growth, dedicated to turning your vision into impactful digital solutions that drive results.",
        "getStarted": "Get Started",
        "learnMore": "Learn More"
      },
      "common": {
        "learnMore": "Learn More",
        "getStarted": "Get Started",
        "contactUs": "Contact Us",
        "readMore": "Read More",
        "viewAll": "View All",
        "scheduleCall": "Schedule a Call",
        "ourServices": "Our Services",
        "ourProducts": "Our Products",
        "whyChoose": "Why Choose GoWide?",
        "ourProcess": "Our Process",
        "ourImpact": "Our Impact"
      },
      "about": {
        "whoWeAre": "Who We Are",
        "description": "We are GoWide, a creative digital agency. We specialize in branding, advertising, marketing, and technology solutions that help businesses grow and thrive in the digital landscape.",
        "ourVision": "Our Vision",
        "ourMission": "Our Mission",
        "visionText": "To be the leading force in digital innovation, creating transformative solutions that inspire and elevate businesses worldwide.",
        "missionText": "To deliver exceptional digital solutions through innovative thinking, cutting-edge technology, and unwavering commitment to client success."
      },
      "services": {
        "branding": "Branding",
        "technology": "Technology",
        "marketing": "Marketing",
        "advertising": "Advertising",
        "brandingDesc": "Transform Your Brand Identity With Our Expertise",
        "technologyDesc": "Powering Innovation with Advanced Solutions",
        "marketingDesc": "Drive Growth with Strategic Marketing Solutions",
        "advertisingDesc": "Create Impactful Ad Campaigns That Convert"
      },
      "contact": {
        "title": "Ready to Get Started?",
        "subtitle": "Let us know your needs and we'll get back to you",
        "name": "Name",
        "email": "Email",
        "phone": "Phone",
        "company": "Company",
        "message": "Message",
        "send": "Send Message",
        "getInTouch": "Get In Touch",
        "address": "Address",
        "followUs": "Follow Us"
      },
      "footer": {
        "quickLinks": "Quick Links",
        "services": "Services",
        "products": "Products",
        "copyright": "© 2025 Gowide Business Services Pvt Ltd. All rights reserved.",
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
        "contact": "اتصل بنا"
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
        "ourImpact": "تأثيرنا"
      },
      "about": {
        "whoWeAre": "من نحن",
        "description": "نحن جو وايد، وكالة رقمية إبداعية. نتخصص في العلامات التجارية والإعلان والتسويق والحلول التقنية التي تساعد الشركات على النمو والازدهار في المشهد الرقمي.",
        "ourVision": "رؤيتنا",
        "ourMission": "مهمتنا",
        "visionText": "أن نكون القوة الرائدة في الابتكار الرقمي، وإنشاء حلول تحويلية تلهم وترفع الشركات في جميع أنحاء العالم.",
        "missionText": "تقديم حلول رقمية استثنائية من خلال التفكير المبتكر والتكنولوجيا المتطورة والالتزام الثابت بنجاح العملاء."
      },
      "services": {
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
        "quickLinks": "روابط سريعة",
        "services": "الخدمات",
        "products": "المنتجات",
        "copyright": "© 2025 جو وايد لخدمات الأعمال المحدودة. جميع الحقوق محفوظة.",
        "newsletter": "النشرة الإخبارية",
        "subscribe": "اشترك",
        "enterEmail": "أدخل بريدك الإلكتروني"
      }
    }
  },
  ml: {
    translation: {
      "nav": {
        "home": "ഹോം",
        "about": "കുറിച്ച്",
        "services": "സേവനങ്ങൾ",
        "products": "ഉൽപ്പന്നങ്ങൾ",
        "contact": "ബന്ധപ്പെടുക"
      },
      "hero": {
        "title": "ആശയങ്ങളെ ഡിജിറ്റൽ യാഥാർത്ഥ്യമാക്കുന്നു",
        "subtitle": "ഞങ്ങൾ വെറുമൊരു ഡിജിറ്റൽ ഏജൻസിയല്ല. ഞങ്ങൾ നിങ്ങളുടെ വളർച്ചയുടെ പങ്കാളികളാണ്, നിങ്ങളുടെ കാഴ്ചപ്പാടിനെ ഫലപ്രദമായ ഡിജിറ്റൽ പരിഹാരങ്ങളാക്കി മാറ്റാൻ പ്രതിജ്ഞാബദ്ധരാണ്.",
        "getStarted": "ആരംഭിക്കുക",
        "learnMore": "കൂടുതൽ അറിയുക"
      },
      "footer": {
        "quickLinks": "പെട്ടെന്നുള്ള ലിങ്കുകൾ",
        "services": "സേവനങ്ങൾ",
        "products": "ഉൽപ്പന്നങ്ങൾ",
        "copyright": "© 2025 ഗോവൈഡ് ബിസിനസ് സർവീസസ് പ്രൈവറ്റ് ലിമിറ്റഡ്. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതമാണ്."
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "about": "À propos",
        "services": "Services",
        "products": "Produits",
        "contact": "Contact"
      },
      "hero": {
        "title": "Transformer les idées en réalité numérique",
        "subtitle": "Nous sommes plus qu'une simple agence numérique. Nous sommes vos partenaires de croissance, dédiés à transformer votre vision en solutions numériques percutantes qui génèrent des résultats.",
        "getStarted": "Commencer",
        "learnMore": "En savoir plus"
      },
      "footer": {
        "quickLinks": "Liens rapides",
        "services": "Services",
        "products": "Produits",
        "copyright": "© 2025 Gowide Business Services Pvt Ltd. Tous droits réservés."
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "home": "Inicio",
        "about": "Acerca de",
        "services": "Servicios",
        "products": "Productos",
        "contact": "Contacto"
      },
      "hero": {
        "title": "Transformando ideas en realidad digital",
        "subtitle": "Somos más que una agencia digital. Somos sus socios en el crecimiento, dedicados a convertir su visión en soluciones digitales impactantes que generan resultados.",
        "getStarted": "Empezar",
        "learnMore": "Saber más"
      },
      "footer": {
        "quickLinks": "Enlaces rápidos",
        "services": "Servicios",
        "products": "Productos",
        "copyright": "© 2025 Gowide Business Services Pvt Ltd. Todos los derechos reservados."
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "home": "होम",
        "about": "के बारे में",
        "services": "सेवाएं",
        "products": "उत्पाद",
        "contact": "संपर्क"
      },
      "hero": {
        "title": "विचारों को डिजिटल वास्तविकता में बदलना",
        "subtitle": "हम सिर्फ एक डिजिटल एजेंसी से कहीं अधिक हैं। हम आपके विकास के साझीदार हैं, आपकी दृष्टि को प्रभावशाली डिजिटल समाधानों में बदलने के लिए समर्पित हैं जो परिणाम देते हैं।",
        "getStarted": "शुरू करें",
        "learnMore": "और जानें"
      },
      "footer": {
        "quickLinks": "त्वरित लिंक",
        "services": "सेवाएं",
        "products": "उत्पाद",
        "copyright": "© 2025 गोवाइड बिजनेस सर्विसेज प्राइवेट लिमिटेड। सभी अधिकार सुरक्षित।"
      }
    }
  },
  ta: {
    translation: {
      "nav": {
        "home": "முகப்பு",
        "about": "பற்றி",
        "services": "சேவைகள்",
        "products": "தயாரிப்புகள்",
        "contact": "தொடர்பு"
      },
      "hero": {
        "title": "கருத்துக்களை டிஜிட்டல் உண்மையாக மாற்றுதல்",
        "subtitle": "நாங்கள் வெறும் டிஜிட்டல் ஏஜென்சியை விட அதிகம். நாங்கள் உங்கள் வளர்ச்சியின் பங்காளிகள், உங்கள் பார்வையை பலனளிக்கும் டிஜிட்டல் தீர்வுகளாக மாற்ற அர்ப்பணிப்புடன் உள்ளோம்.",
        "getStarted": "தொடங்குங்கள்",
        "learnMore": "மேலும் அறிக"
      },
      "footer": {
        "quickLinks": "விரைவு இணைப்புகள்",
        "services": "சேவைகள்",
        "products": "தயாரிப்புகள்",
        "copyright": "© 2025 கோவைட் பிசினஸ் சர்வீசஸ் பிரைவேட் லிமிடெட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
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