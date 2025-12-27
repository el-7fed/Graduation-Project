// Language Switcher for جوله في مصر / Tour in Egypt
// Supports Arabic (ar) and English (en)

const translations = {
  ar: {
    // Navigation
    logoText: "جوله في مصر",
    home: "الرئيسية",
    places: "الأماكن",
    tripPacks: "باقات الرحلات",
    about: "عن المشروع",
    contact: "تواصل معنا",
    langToggle: "EN",

    // Hero Section
    heroTitle: "استكشف مصر كما لم تراها من قبل",
    heroSubtitle:
      "اكتشف كنوز الفراعنة وعجائب الحضارة المصرية من الأهرامات إلى المتاحف العالمية",
    explorePlaces: "استكشف الأماكن",

    // Featured Places
    featuredDestinations: "وجهات مميزة",
    featuredSubtitle:
      "استكشف أفضل الوجهات السياحية في مصر من القاهرة والجيزة والإسكندرية",
    viewAllPlaces: "عرض كل الأماكن",

    // Categories
    exploreByCategory: "تصفح حسب الفئة",
    cultural: "ثقافي",
    culturalDesc: "متاحف المجوهرات الملكية والفنون والمراكز الثقافية",
    historical: "تاريخي",
    historicalDesc: "الأهرامات والمتاحف الأثرية والقصور الملكية التاريخية",
    religious: "ديني",
    religiousDesc: "المساجد الأثرية والكنائس القديمة والأماكن المقدسة",
    entertainment: "ترفيهي",
    entertainmentDesc: "دار الأوبرا والمسارح والحفلات الموسيقية والفنية",

    // Features
    whyChooseUs: "ليه تختار جوله في مصر؟",
    comprehensiveInfo: "معلومات شاملة",
    comprehensiveInfoDesc:
      "عناوين دقيقة وأماكن قريبة ومواعيد العمل وأسعار التذاكر",
    heritageStories: "قصص التراث",
    heritageStoriesDesc:
      "اكتشف التاريخ الغني وراء كل وجهة من الفراعنة للعصر الحديث",
    nearbyActivities: "أنشطة قريبة",
    nearbyActivitiesDesc: "اقتراحات لأماكن وأنشطة قريبة من كل موقع سياحي",
    photosGalleries: "صور ومعارض",
    photosGalleriesDesc: "صور عالية الجودة ومعارض مميزة لكل موقع سياحي",

    // Footer
    footerDesc:
      "بوابتك لاكتشاف جمال مصر الخالد وتراثها العريق من الأهرامات إلى المتاحف العالمية.",
    quickLinks: "روابط سريعة",
    categories: "الفئات",
    allRightsReserved: "جميع الحقوق محفوظة",

    // Places Page
    exploreEgypt: "استكشف مصر",
    exploreEgyptSubtitle:
      "اكتشف أجمل الوجهات السياحية في القاهرة والجيزة والإسكندرية",
    searchPlaces: "ابحث عن الأماكن...",
    allCategories: "كل الفئات",
    allLocations: "كل المواقع",
    cairo: "القاهرة",
    giza: "الجيزة",
    alexandria: "الإسكندرية",
    loadingPlaces: "جاري تحميل الأماكن...",
    noPlacesFound: "لم يتم العثور على أماكن",
    tryAdjusting: "جرب تعديل البحث أو معايير الفلترة",

    // Place Details
    aboutThisPlace: "عن هذا المكان",
    highlightsTitle: "✨ أهم ما يميز المكان",
    heritageStory: "📜 قصة التراث",
    importantNotes: "⚠️ ملاحظات مهمة",
    gallery: "📸 معرض الصور",
    visitorReviews: "⭐ تقييمات الزوار",
    quickInfo: "📋 معلومات سريعة",
    openingHours: "🕐 ساعات العمل",
    ticketPrice: "🎫 سعر التذكرة",
    locationLabel: "📍 الموقع",
    nearbyActivities: "🎯 الأنشطة القريبة",
    address: "📍 العنوان",
    placeNotFound: "المكان غير موجود",
    placeNotFoundDesc: "المكان الذي تبحث عنه غير موجود أو تم إزالته.",
    browseAllPlaces: "تصفح جميع الأماكن",
    loading: "جاري تحميل التفاصيل...",
    footerDescription:
      "بوابتك لاكتشاف جمال مصر الخالد وتراثها العريق من الأهرامات إلى المتاحف العالمية.",
    footerCopyright: "© 2025 جوله في مصر. جميع الحقوق محفوظة.",

    // Trips Page
    tripPacksTitle: "باقات الرحلات",
    tripPacksSubtitle: "اختار رحلتك المثالية لاستكشاف مصر من الأهرامات للمتاحف",
    quickTour: "جولة سريعة",
    twoHourTour: "🕐 جولة ساعتين",
    halfDayTour: "🌤️ جولة نصف يوم",
    fullDayTour: "☀️ جولة يوم كامل",
    weekendTrip: "🌅 رحلة نهاية الأسبوع",
    mostPopular: "الأكثر شعبية",
    featured: "مميز",
    premium: "بريميوم",
    duration: "المدة",
    estimatedCost: "التكلفة التقديرية",
    activitiesIncluded: "الأنشطة المتضمنة:",
    recommendedPlaces: "الأماكن الموصى بها:",
    readyToExplore: "جاهز تستكشف مصر؟",
    startPlanning:
      "ابدأ التخطيط لمغامرتك المصرية اللي مش هتتنسى النهارده - من الأهرامات للمتاحف للأماكن الدينية والترفيهية",
    discoverPlaces: "اكتشف الأماكن",
    twoHourDurationValue: "ساعتين",
    twoHourCostValue: "150 - 300 جنيه",
    twoHourActivity1: "جولة سريعة في متحف المجوهرات الملكية",
    twoHourActivity2: "تصوير المجوهرات الذهبية والفضية النادرة",
    twoHourActivity3: "مشاهدة الأسقف المزخرفة والأرضيات الرخامية",
    halfDayDurationValue: "4-5 ساعات",
    halfDayCostValue: "400 - 700 جنيه",
    halfDayActivity1: "زيارة قاعة المومياوات الملكية في المتحف القومي للحضارة",
    halfDayActivity2: "التجول في شارع المعز وزيارة مسجد الأمير طاز",
    halfDayActivity3: "الاستمتاع بمنظر بحيرة عين الصيرة",
    halfDayActivity4: "استكشاف خان الخليلي والأسواق التقليدية",
    fullDayDurationValue: "8-10 ساعات",
    fullDayCostValue: "800 - 1500 جنيه",
    fullDayActivity1: "زيارة أهرامات الجيزة وتمثال أبو الهول",
    fullDayActivity2: "ركوب الجمال والخيل حول الأهرامات",
    fullDayActivity3: "مشاهدة غروب الشمس عند الهضبة",
    fullDayActivity4: "زيارة المتحف القومي للحضارة وقاعة المومياوات",
    fullDayActivity5: "حضور عرض في دار الأوبرا المصرية",
    weekendDurationValue: "2-3 أيام",
    weekendCostValue: "2000 - 5000 جنيه",
    weekendActivity1: "استكشاف القاهرة والإسكندرية في رحلة واحدة",
    weekendActivity2: "زيارة المتحف اليوناني الروماني والمجوهرات الملكية",
    weekendActivity3: "التنزه على كورنيش الإسكندرية وزيارة قلعة قايتباي",
    weekendActivity4: "استكشاف بقايا قصر الأمير عمر طوسون",
    weekendActivity5: "زيارة كنيسة مارمرقس القديمة والأماكن الدينية",
    weekendActivity6: "التسوق في خان الخليلي وسوق الورديان",
    royalJewelryMuseum: "متحف المجوهرات الملكية",
    oldStMarkChurch: "كنيسة مارمرقس القديمة",
    nmec: "المتحف القومي للحضارة",
    princeTazMosque: "مسجد الأمير طاز",
    cairoOperaHouse: "دار الأوبرا المصرية",
    gizaPyramids: "أهرامات الجيزة",
    graecoRomanMuseum: "المتحف اليوناني الروماني",
    princeOmarToussounPalace: "قصر عمر طوسون",

    // About Page
    aboutUs: "عن المشروع",
    aboutSubtitle: "تعرف على مشروع جوله في مصر ورؤيتنا للسياحة المصرية",
    ourMissionTitle: "🎯 مهمتنا",
    missionDesc1:
      "مهمتنا هي تعزيز السياحة الداخلية المصرية من خلال توفير منصة رقمية شاملة وسهلة الاستخدام تعرض جمال مصر وتاريخها وثقافتها للمصريين والزوار. من أهرامات الجيزة العظيمة إلى متحف المجوهرات الملكية في الإسكندرية، نجمع كل كنوز مصر في مكان واحد.",
    missionDesc2:
      "هدفنا إن استكشاف مصر يكون سهل ومعلوماتي وممتع للجميع - سواء كنت بتدور على أماكن تاريخية زي المتحف اليوناني الروماني أو أماكن ترفيهية زي دار الأوبرا المصرية.",
    ourVisionTitle: "👁️ رؤيتنا",
    visionDesc1:
      "نطمح نكون المنصة الرقمية الأولى للسياحة في مصر، نربط المسافرين بتجارب مصرية أصيلة ونحافظ على التراث الثقافي من خلال الحكي والتكنولوجيا. من قصص المومياوات الملكية في المتحف القومي للحضارة إلى زخارف العصر المملوكي في مسجد الأمير طاز.",
    visionDesc2:
      "نتخيل مستقبل كل ركن في مصر يكون متاح للمستكشفين الفضوليين في كل أنحاء العالم - من الإسكندرية للقاهرة للجيزة وأبعد من كده.",
    objectivesTitle: "📋 أهدافنا",
    promoteHeritage: "نشر التراث",
    promoteHeritageDesc:
      "نعرض التراث الثقافي والتاريخي الغني لمصر من خلال معلومات تفصيلية وقصص عن كل مكان - من المجوهرات الملكية النادرة للآثار اليونانية والرومانية.",
    digitalAccess: "وصول رقمي",
    digitalAccessDesc:
      "نوفر وصول رقمي سهل لمعلومات السياحة لكل المستخدمين على مختلف الأجهزة - مواعيد الزيارة، أسعار التذاكر، والأماكن القريبة.",
    tripPlanning: "تخطيط الرحلات",
    tripPlanningDesc:
      "نساعد المستخدمين يخططوا رحلاتهم مع باقات رحلات مختارة وتوصيات - من جولات القاهرة التاريخية لاستكشاف الإسكندرية.",
    visualExperience: "تجربة بصرية",
    visualExperienceDesc:
      "نخلق تجربة بصرية غامرة بصور عالية الجودة ومعارض - من غروب الشمس عند الأهرامات لمنظر بحيرة عين الصيرة.",
    projectConceptTitle: "💡 فكرة المشروع",
    conceptDesc1:
      '"جوله في مصر" هو مشروع تخرج مصمم لإنشاء منصة رقمية شاملة للسياحة الداخلية المصرية. المشروع بيجمع بين تقنيات الويب الحديثة والمحتوى الثقافي الغني لتقديم تجربة مستخدم جذابة ومفيدة.',
    conceptDesc2:
      "المنصة بتعرض وجهات سياحية مصنفة حسب الفئة (ثقافية، تاريخية، دينية، ترفيهية)، معلومات تفصيلية عن كل مكان، قصص التراث، أدوات تخطيط الرحلات، ومعارض صور - كل ده متاح من خلال واجهة سهلة الاستخدام ومتجاوبة مع كل الأجهزة.",
    frontendDev: "تطوير الواجهة الأمامية",
    responsiveDesign: "تصميم متجاوب",
    interactiveUI: "واجهة تفاعلية",
    categoryNav: "تصفح حسب الفئات",
    searchFilter: "نظام بحث وفلترة",
    dynamicContent: "تحميل محتوى ديناميكي",
    ourTeamTitle: "👥 فريقنا",
    teamIntro: "تعرف على الأفراد الموهوبين وراء مشروع جوله في مصر",
    teamMember1: "عضو الفريق 1",
    teamRole1: "مطور واجهات أمامية",
    teamMember2: "عضو الفريق 2",
    teamRole2: "مصمم UI/UX",
    teamMember3: "عضو الفريق 3",
    teamRole3: "كاتب محتوى",
    teamMember4: "عضو الفريق 4",
    teamRole4: "باحث سياحي",

    // Contact Page
    contactUs: "تواصل معنا",
    contactSubtitle: "تواصل معنا لأي استفسار أو اقتراح",
    loveToHear: "نحب نسمع منك!",
    contactIntroDesc:
      "عندك سؤال أو اقتراح أو ملاحظة؟ ابعتلنا رسالة وهنرد عليك في أقرب وقت",
    sendMessage: "ابعتلنا رسالة",
    sendMessageTitle: "📧 ابعتلنا رسالة",
    name: "الاسم",
    namePlaceholder: "اكتب اسمك هنا",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    selectSubject: "اختر موضوع الرسالة",
    generalInquiry: "استفسار عام",
    feedback: "ملاحظات واقتراحات",
    partnership: "تعاون وشراكة",
    technicalSupport: "دعم فني",
    other: "أخرى",
    message: "الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا...",
    sendBtn: "إرسال الرسالة",
    messageSent: "تم إرسال رسالتك بنجاح!",
    thankYou: "شكراً لتواصلك معنا. هنرد عليك في أقرب وقت ممكن.",
    backToHome: "العودة للرئيسية",
    quickResponse: "رد سريع",
    quickResponseDesc: "بنرد على الرسائل خلال 24 ساعة",
    yourSuggestions: "اقتراحاتك مهمة",
    yourSuggestionsDesc: "نحب نسمع أفكارك لتحسين الموقع",
    continuousSupport: "دعم متواصل",
    continuousSupportDesc: "فريقنا جاهز لمساعدتك",

    // Common
    learnMore: "اعرف أكثر",
    viewDetails: "عرض التفاصيل",
    hours: "ساعات",
    days: "أيام",
    egp: "جنيه",
  },
  en: {
    // Navigation
    logoText: "Tour in Egypt",
    home: "Home",
    places: "Places",
    tripPacks: "Trip Packs",
    about: "About",
    contact: "Contact",
    langToggle: "عربي",

    // Hero Section
    heroTitle: "Explore Egypt Like Never Before",
    heroSubtitle:
      "Discover the treasures of the Pharaohs and the wonders of Egyptian civilization from the Pyramids to world-class museums",
    explorePlaces: "Explore Places",

    // Featured Places
    featuredDestinations: "Featured Destinations",
    featuredSubtitle:
      "Explore the best tourist destinations in Egypt from Cairo, Giza, and Alexandria",
    viewAllPlaces: "View All Places",

    // Categories
    exploreByCategory: "Explore by Category",
    cultural: "Cultural",
    culturalDesc: "Royal jewelry museums, arts, and cultural centers",
    historical: "Historical",
    historicalDesc: "Pyramids, archaeological museums, and royal palaces",
    religious: "Religious",
    religiousDesc: "Historic mosques, ancient churches, and sacred places",
    entertainment: "Entertainment",
    entertainmentDesc: "Opera house, theaters, and musical performances",

    // Features
    whyChooseUs: "Why Choose Tour in Egypt?",
    comprehensiveInfo: "Comprehensive Info",
    comprehensiveInfoDesc:
      "Accurate addresses, nearby places, opening hours, and ticket prices",
    heritageStories: "Heritage Stories",
    heritageStoriesDesc:
      "Discover the rich history behind each destination from Pharaohs to modern times",
    nearbyActivities: "Nearby Activities",
    nearbyActivitiesDesc:
      "Suggestions for nearby places and activities for each tourist site",
    photosGalleries: "Photos & Galleries",
    photosGalleriesDesc:
      "High-quality photos and distinctive galleries for each tourist site",

    // Footer
    footerDesc:
      "Your gateway to discovering Egypt's timeless beauty and rich heritage from the Pyramids to world-class museums.",
    quickLinks: "Quick Links",
    categories: "Categories",
    allRightsReserved: "All rights reserved",

    // Places Page
    exploreEgypt: "Explore Egypt",
    exploreEgyptSubtitle:
      "Discover the most beautiful tourist destinations in Cairo, Giza, and Alexandria",
    searchPlaces: "Search places...",
    allCategories: "All Categories",
    allLocations: "All Locations",
    cairo: "Cairo",
    giza: "Giza",
    alexandria: "Alexandria",
    loadingPlaces: "Loading places...",
    noPlacesFound: "No Places Found",
    tryAdjusting: "Try adjusting your search or filter criteria",

    // Place Details
    aboutThisPlace: "About This Place",
    highlightsTitle: "✨ Highlights",
    heritageStory: "📜 Heritage Story",
    importantNotes: "⚠️ Important Notes",
    gallery: "📸 Gallery",
    visitorReviews: "⭐ Visitor Reviews",
    quickInfo: "📋 Quick Info",
    openingHours: "🕐 Opening Hours",
    ticketPrice: "🎫 Ticket Price",
    locationLabel: "📍 Location",
    nearbyActivities: "🎯 Nearby Activities",
    address: "📍 Address",
    placeNotFound: "Place Not Found",
    placeNotFoundDesc:
      "The place you're looking for doesn't exist or has been removed.",
    browseAllPlaces: "Browse All Places",
    loading: "Loading details...",
    footerDescription:
      "Your gateway to discovering Egypt's timeless beauty and rich heritage from the Pyramids to world-class museums.",
    footerCopyright: "© 2025 Tour in Egypt. All rights reserved.",

    // Trips Page
    tripPacksTitle: "Trip Packs",
    tripPacksSubtitle:
      "Choose your ideal trip to explore Egypt from the Pyramids to the museums",
    quickTour: "Quick Tour",
    twoHourTour: "🕐 2-Hour Tour",
    halfDayTour: "🌤️ Half-Day Tour",
    fullDayTour: "☀️ Full Day Tour",
    weekendTrip: "🌅 Weekend Trip",
    mostPopular: "Most Popular",
    featured: "Featured",
    premium: "Premium",
    duration: "Duration",
    estimatedCost: "Estimated Cost",
    activitiesIncluded: "Activities Included:",
    recommendedPlaces: "Recommended Places:",
    readyToExplore: "Ready to Explore Egypt?",
    startPlanning:
      "Start planning your unforgettable Egyptian adventure today - from the Pyramids to museums to religious and entertainment sites",
    discoverPlaces: "Discover Places",
    twoHourDurationValue: "2 hours",
    twoHourCostValue: "150 - 300 EGP",
    twoHourActivity1: "Quick tour of the Royal Jewelry Museum",
    twoHourActivity2: "Photograph rare gold and silver jewelry",
    twoHourActivity3: "Admire the painted ceilings and marble floors",
    halfDayDurationValue: "4-5 hours",
    halfDayCostValue: "400 - 700 EGP",
    halfDayActivity1: "Visit the Royal Mummies Hall at NMEC",
    halfDayActivity2: "Stroll Al-Muizz Street and see Prince Taz Mosque",
    halfDayActivity3: "Enjoy the view of Ain El-Sira Lake",
    halfDayActivity4: "Explore Khan El-Khalili and traditional markets",
    fullDayDurationValue: "8-10 hours",
    fullDayCostValue: "800 - 1500 EGP",
    fullDayActivity1: "Visit the Pyramids of Giza and the Sphinx",
    fullDayActivity2: "Ride camels or horses around the pyramids",
    fullDayActivity3: "Watch the sunset over the plateau",
    fullDayActivity4: "Tour NMEC and the Royal Mummies Hall",
    fullDayActivity5: "Attend a performance at the Cairo Opera House",
    weekendDurationValue: "2-3 days",
    weekendCostValue: "2000 - 5000 EGP",
    weekendActivity1: "Discover Cairo and Alexandria in one getaway",
    weekendActivity2: "Visit the Graeco-Roman Museum and Royal Jewelry Museum",
    weekendActivity3: "Walk the Alexandria Corniche and see Qaitbay Citadel",
    weekendActivity4: "Explore the remains of Prince Omar Toussoun Palace",
    weekendActivity5: "Visit Old St. Mark Church and other sacred spots",
    weekendActivity6: "Shop Khan El-Khalili and Wardian Market",
    royalJewelryMuseum: "Royal Jewelry Museum",
    oldStMarkChurch: "Old St. Mark Church",
    nmec: "National Museum of Egyptian Civilization",
    princeTazMosque: "Prince Taz Mosque",
    cairoOperaHouse: "Cairo Opera House",
    gizaPyramids: "Pyramids of Giza",
    graecoRomanMuseum: "Graeco-Roman Museum",
    princeOmarToussounPalace: "Prince Omar Toussoun Palace",

    // About Page
    aboutUs: "About Us",
    aboutSubtitle:
      "Learn about Tour in Egypt project and our vision for Egyptian tourism",
    ourMissionTitle: "🎯 Our Mission",
    missionDesc1:
      "Our mission is to enhance Egyptian domestic tourism by providing a comprehensive and user-friendly digital platform that showcases Egypt's beauty, history, and culture for Egyptians and visitors. From the Great Pyramids of Giza to the Royal Jewelry Museum in Alexandria, we bring all of Egypt's treasures together in one place.",
    missionDesc2:
      "Our goal is to make exploring Egypt easy, informative, and enjoyable for everyone - whether you're looking for historical sites like the Greco-Roman Museum or entertainment venues like the Egyptian Opera House.",
    ourVisionTitle: "👁️ Our Vision",
    visionDesc1:
      "We aspire to be the leading digital platform for tourism in Egypt, connecting travelers with authentic Egyptian experiences and preserving cultural heritage through storytelling and technology. From the stories of royal mummies at the National Museum of Egyptian Civilization to the Mamluk-era decorations at Prince Taz Mosque.",
    visionDesc2:
      "We envision a future where every corner of Egypt is accessible to curious explorers around the world - from Alexandria to Cairo to Giza and beyond.",
    objectivesTitle: "📋 Our Objectives",
    promoteHeritage: "Promote Heritage",
    promoteHeritageDesc:
      "We showcase Egypt's rich cultural and historical heritage through detailed information and stories about each location - from rare royal jewelry to Greek and Roman artifacts.",
    digitalAccess: "Digital Access",
    digitalAccessDesc:
      "We provide easy digital access to tourism information for all users across different devices - visit times, ticket prices, and nearby places.",
    tripPlanning: "Trip Planning",
    tripPlanningDesc:
      "We help users plan their trips with curated trip packages and recommendations - from historical Cairo tours to Alexandria exploration.",
    visualExperience: "Visual Experience",
    visualExperienceDesc:
      "We create an immersive visual experience with high-quality photos and galleries - from sunsets at the Pyramids to the view of Ain El-Sira Lake.",
    projectConceptTitle: "💡 Project Concept",
    conceptDesc1:
      '"Tour in Egypt" is a graduation project designed to create a comprehensive digital platform for Egyptian domestic tourism. The project combines modern web technologies with rich cultural content to deliver an engaging and informative user experience.',
    conceptDesc2:
      "The platform features tourist destinations categorized by type (cultural, historical, religious, entertainment), detailed information about each place, heritage stories, trip planning tools, and photo galleries - all accessible through an easy-to-use, responsive interface across all devices.",
    frontendDev: "Front-end Development",
    responsiveDesign: "Responsive Design",
    interactiveUI: "Interactive UI",
    categoryNav: "Category Navigation",
    searchFilter: "Search & Filter",
    dynamicContent: "Dynamic Content",
    ourTeamTitle: "👥 Our Team",
    teamIntro: "Meet the talented individuals behind Tour in Egypt",
    teamMember1: "Team Member 1",
    teamRole1: "Front-end Developer",
    teamMember2: "Team Member 2",
    teamRole2: "UI/UX Designer",
    teamMember3: "Team Member 3",
    teamRole3: "Content Writer",
    teamMember4: "Team Member 4",
    teamRole4: "Tourism Researcher",

    // Contact Page
    contactUs: "Contact Us",
    contactSubtitle: "Get in touch for any inquiries or suggestions",
    loveToHear: "We'd Love to Hear from You!",
    contactIntroDesc:
      "Have a question, suggestion, or comment? Send us a message and we'll get back to you soon",
    sendMessage: "Send Us a Message",
    sendMessageTitle: "📧 Send Us a Message",
    name: "Name",
    namePlaceholder: "Enter your name",
    email: "Email",
    subject: "Subject",
    selectSubject: "Select message subject",
    generalInquiry: "General Inquiry",
    feedback: "Feedback & Suggestions",
    partnership: "Partnership",
    technicalSupport: "Technical Support",
    other: "Other",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    sendBtn: "Send Message",
    messageSent: "Your message has been sent successfully!",
    thankYou:
      "Thank you for contacting us. We'll get back to you as soon as possible.",
    backToHome: "Back to Home",
    quickResponse: "Quick Response",
    quickResponseDesc: "We respond to messages within 24 hours",
    yourSuggestions: "Your Suggestions Matter",
    yourSuggestionsDesc: "We love hearing your ideas to improve the site",
    continuousSupport: "Continuous Support",
    continuousSupportDesc: "Our team is ready to help you",

    // Common
    learnMore: "Learn More",
    viewDetails: "View Details",
    hours: "Hours",
    days: "Days",
    egp: "EGP",
  },
};

// Get current language from localStorage or default to Arabic
function getCurrentLanguage() {
  return localStorage.getItem("language") || "ar";
}

// Set language
function setLanguage(lang) {
  localStorage.setItem("language", lang);
  applyLanguage(lang);
}

// Toggle language
function toggleLanguage() {
  const currentLang = getCurrentLanguage();
  const newLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(newLang);
}

// Apply language to the page
function applyLanguage(lang) {
  const html = document.documentElement;

  // Set HTML attributes
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Add/remove RTL class to body
  document.body.classList.toggle("rtl", lang === "ar");
  document.body.classList.toggle("ltr", lang === "en");

  // Update language toggle button
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = translations[lang].langToggle;
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  // Update aria-labels
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria");
    if (translations[lang][key]) {
      element.setAttribute("aria-label", translations[lang][key]);
    }
  });

  // Update logo images to match language (if imgs include data attributes)
  document.querySelectorAll(".site-logo").forEach((img) => {
    const arSrc = img.getAttribute("data-logo-ar");
    const enSrc = img.getAttribute("data-logo-en");
    if (lang === "ar" && arSrc) {
      img.src = arSrc;
    } else if (lang === "en" && enSrc) {
      img.src = enSrc;
    }
    // Update accessible alt/title
    const altText = translations[lang] && translations[lang].logoText;
    if (altText) {
      img.alt = altText;
      img.setAttribute("title", altText);
    }
  });

  // Dispatch custom event for other scripts to react
  document.dispatchEvent(
    new CustomEvent("languageChanged", { detail: { language: lang } })
  );
}

// Get translation
function t(key) {
  const lang = getCurrentLanguage();
  return translations[lang][key] || key;
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", function () {
  const currentLang = getCurrentLanguage();
  applyLanguage(currentLang);

  // Add click handler to language toggle button
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }
});

// Export for use in other scripts
window.languageUtils = {
  getCurrentLanguage,
  setLanguage,
  toggleLanguage,
  t,
  translations,
};
