import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        title: "Sheger City",
        subtitle: "Digital Government Portal",
        home: "Home",
        about: "About",
        subcity: "Sub City",
        services: "Services",
        news: "News",
        contact: "Contact",
        apply: "Apply for Service"
      },
      home: {
        hero: {
          badge: "✨ Welcome to the future of civic services",
          title: "Welcome to",
          city: "Sheger City",
          subtitle: "Your digital gateway to efficient, transparent, and citizen-centered government services. Experience seamless governance at your fingertips.",
          explore: "Explore Services",
          find_office: "Find Office"
        },
        leadership: {
          title: "City Leadership",
          subtitle: "Meet the dedicated leaders working to transform Sheger City into a model smart city.",
          mayor_name: "Dr. Teshome Aduna (Ph.D.)",
          mayor_title: "Mayor of Sheger City",
          welcome_title: "Welcome",
          welcome_subtitle: "A Warm Welcome to the Residents and Visitors of Sheger City",
          welcome_text: "As the mayor of Sheger City, I am excited to share our bold vision for the future of our community. We are committed to transforming Sheger into a model smart city—competitive, livable, and responsive to the needs of all residents.",
          read_more: "Read Full Message",
          deputy1_name: "Mr. Guyo Galgalo",
          deputy1_desc: "We invite all stakeholders—businesses, community leaders, and residents—to engage actively in these efforts to foster an inclusive environment.",
          deputy2_name: "Mr. Gugsa Dejene",
          deputy2_desc: "Deputy Mayor and Head of the Administration and Service Sector, committed to enhancing the quality of public services.",
          deputy3_name: "Mr. Hailu Girma",
          deputy3_desc: "Deputy Mayor and Head of the Urban Agriculture Cluster, focusing on sustainability and community well-being."
        },
        quick_services: {
          title: "Quick Services",
          subtitle: "Access our most popular digital government services with just a few clicks.",
          permits: "Building Permits",
          permits_desc: "Apply for construction and building permits seamlessly online.",
          business: "Business License",
          business_desc: "Register and license your new or existing business quickly.",
          driver: "Driver's License",
          driver_desc: "Apply, renew or replace your driver's license with ease.",
          health: "Health Services",
          health_desc: "Access healthcare facilities, records, and medical services.",
          apply_now: "Apply Now"
        },
        stats: {
          sub_cities: "Sub Cities",
          online_services: "Online Services",
          digital_access: "Digital Access",
          satisfaction: "Citizen Satisfaction"
        },
        news: {
          title: "Latest Updates",
          subtitle: "Stay informed about city developments and community announcements.",
          view_all: "View All News",
          tag_service: "New Service",
          tag_update: "Update",
          tag_event: "Event",
          news1_title: "Online Property Registration Launch",
          news1_desc: "Register your property online without visiting offices. Fast, secure, and incredibly convenient for all Sheger residents.",
          news2_title: "Extended Service Hours Announced",
          news2_desc: "All major administrative offices are now open until 6 PM on weekdays to accommodate working professionals.",
          news3_title: "Public Consultation on Smart City",
          news3_desc: "Join city planners for an interactive discussion on integrating AI and smart tech into Sheger City infrastructure.",
          read_story: "Read Full Story"
        },
        cta: {
          title: "Ready to Get Started?",
          subtitle: "Create an account today to manage all your government interactions from one unified dashboard.",
          start: "Start Application Now",
          learn_more: "Learn More"
        },
        ai: "AI Assistant"
      }
    }
  },
  am: {
    translation: {
      header: {
        title: "ሸገር ከተማ",
        subtitle: "የዲጂታል መንግስት ፖርታል",
        home: "ዋና ገፅ",
        about: "ስለ እኛ",
        subcity: "ክፍለ ከተማ",
        services: "አገልግሎቶች",
        news: "ዜና",
        contact: "አድራሻ",
        apply: "አገልግሎት ይጠይቁ"
      },
      home: {
        hero: {
          badge: "✨ የሲቪክ አገልግሎቶች መፃኢ ዕድል እንኳን ደህና መጡ",
          title: "እንኳን ወደ",
          city: "ሸገር ከተማ",
          subtitle: "ቀልጣፋ፣ ግልፅ እና ዜጋ-ተኮር የመንግስት አገልግሎቶች ዲጂታል መግቢያ። እንከን የለሽ አስተዳደርን በእጅዎ ይለማመዱ።",
          explore: "አገልግሎቶችን ያስሱ",
          find_office: "ቢሮ ያግኙ"
        },
        leadership: {
          title: "የከተማው አመራር",
          subtitle: "ሸገር ከተማን ወደ ሞዴል ስማርት ከተማ ለመቀየር የሚሰሩትን የወሰኑ አመራሮች ያግኙ።",
          mayor_name: "ዶ/ር ተሾመ አዱኛ",
          mayor_title: "የሸገር ከተማ ከንቲባ",
          welcome_title: "እንኳን ደህና መጡ",
          welcome_subtitle: "ለሸገር ከተማ ነዋሪዎች እና ጎብኚዎች ሞቅ ያለ አቀባበል",
          welcome_text: "የሸገር ከተማ ከንቲባ እንደመሆኔ ለከተማችን ያለንን ራዕይ ሳካፍላችሁ ደስ ይለኛል። ሸገርን ተወዳዳሪ፣ ምቹ እና ለነዋሪዎች ፍላጎት ምላሽ የምትሰጥ ሞዴል ስማርት ከተማ ለማድረግ ቁርጠኞች ነን።",
          read_more: "ሙሉ መልእክቱን ያንብቡ",
          deputy1_name: "አቶ ጉዮ ገልገሎ",
          deputy1_desc: "ሁሉንም ባለድርሻ አካላት—የንግድ ተቋማትን፣ የህብረተሰብ መሪዎችን እና ነዋሪዎችን—አካታች አካባቢን ለመፍጠር በሚደረገው ጥረት በንቃት እንዲሳተፉ እንጋብዛለን።",
          deputy2_name: "አቶ ጉግሳ ደጀኔ",
          deputy2_desc: "ምክትል ከንቲባ እና የአስተዳደር እና አገልግሎት ዘርፍ ሀላፊ፣ የህዝብ አገልግሎቶችን ጥራት ለማሻሻል ቁርጠኛ ናቸው።",
          deputy3_name: "አቶ ሀይሉ ግርማ",
          deputy3_desc: "ምክትል ከንቲባ እና የከተማ ግብርና ክላስተር ሀላፊ፣ በዘላቂነት እና በህብረተሰብ ደህንነት ላይ ትኩረት ያደርጋሉ።"
        },
        quick_services: {
          title: "ፈጣን አገልግሎቶች",
          subtitle: "በጣም ተወዳጅ የሆኑትን የዲጂታል መንግስት አገልግሎቶቻችንን በጥቂት ጠቅታዎች ያግኙ።",
          permits: "የግንባታ ፈቃዶች",
          permits_desc: "ለግንባታ እና ለህንፃ ፈቃዶች በመስመር ላይ በቀላሉ ያመልክቱ።",
          business: "የንግድ ፈቃድ",
          business_desc: "አዲስ ወይም ነባር ንግድዎን በፍጥነት ያስመዝግቡ እና ፈቃድ ያግኙ።",
          driver: "የመንጃ ፈቃድ",
          driver_desc: "የመንጃ ፈቃድዎን በቀላሉ ያመልክቱ፣ ያሳድሱ ወይም ይተኩ።",
          health: "የጤና አገልግሎቶች",
          health_desc: "የጤና ተቋማትን፣ መረጃዎችን እና የህክምና አገልግሎቶችን ያግኙ።",
          apply_now: "አሁን ያመልክቱ"
        },
        stats: {
          sub_cities: "ክፍለ ከተሞች",
          online_services: "የመስመር ላይ አገልግሎቶች",
          digital_access: "የዲጂታል ተደራሽነት",
          satisfaction: "የዜጎች እርካታ"
        },
        news: {
          title: "የቅርብ ጊዜ መረጃዎች",
          subtitle: "ስለ ከተማዋ ልማት እና ማህበረሰባዊ ማስታወቂያዎች መረጃ ያግኙ።",
          view_all: "ሁሉንም ዜናዎች ይመልከቱ",
          tag_service: "አዲስ አገልግሎት",
          tag_update: "መረጃ",
          tag_event: "ክስተት",
          news1_title: "የመስመር ላይ የንብረት ምዝገባ ተጀመረ",
          news1_desc: "ንብረትዎን ወደ ቢሮ ሳይሄዱ በመስመር ላይ ያስመዝግቡ። ለሁሉም የሸገር ነዋሪዎች ፈጣን፣ ደህንነቱ የተጠበቀ እና ምቹ ነው።",
          news2_title: "የተራዘመ የአገልግሎት ሰዓት ታወጀ",
          news2_desc: "ሰራተኞችን ለማስተናገድ ሁሉም ዋና ዋና የአስተዳደር ቢሮዎች አሁን በስራ ቀናት እስከ 12 ሰዓት (6 PM) ክፍት ናቸው።",
          news3_title: "በስማርት ከተማ ላይ የህዝብ ውይይት",
          news3_desc: "አርቲፊሻል ኢንተለጀንስን (AI) እና ስማርት ቴክኖሎጂን በሸገር ከተማ መሰረተ ልማት ውስጥ ስለማካተት የከተማ ፕላነሮችን ይቀላቀሉ።",
          read_story: "ሙሉውን ታሪክ ያንብቡ"
        },
        cta: {
          title: "ለመጀመር ዝግጁ ነዎት?",
          subtitle: "ሁሉንም የመንግስት አገልግሎቶችዎን ከአንድ ዳሽቦርድ ለማስተዳደር ዛሬ መለያ ይፍጠሩ።",
          start: "አሁኑኑ ማመልከት ይጀምሩ",
          learn_more: "ተጨማሪ ይወቁ"
        },
        ai: "የ AI ረዳት"
      }
    }
  },
  om: {
    translation: {
      header: {
        title: "Magaalaa Shaggar",
        subtitle: "Poortaalii Mootummaa Dijitaalaa",
        home: "Iddoo Duraa",
        about: "Waa'ee",
        subcity: "Kutaa Magaalaa",
        services: "Tajaajiloota",
        news: "Oduu",
        contact: "Quunnamtii",
        apply: "Tajaajilaaf Iyyadhu"
      },
      home: {
        hero: {
          badge: "✨ Gara fuulduraa tajaajila hawaasaatti baga nagaan dhuftan",
          title: "Baga gara",
          city: "Magaalaa Shaggar",
          subtitle: "Karaan dijitaalaa tajaajila mootummaa si'ataa, ifaa fi lammiilee irratti xiyyeeffate argachuuf. Bulchiinsa addaan hin cinne quba keessaniin muuxadhaa.",
          explore: "Tajaajiloota Sakatta'aa",
          find_office: "Waajjira Barbaadaa"
        },
        leadership: {
          title: "Hoggansa Magaalaa",
          subtitle: "Hoggantoota kutaatanii Magaalaa Shaggar gara magaalaa ismaartii fakkeenya ta'utti jijjiiruuf hojjetan walbarsiisuu.",
          mayor_name: "Dr. Tashoomaa Aduunyaa",
          mayor_title: "Kantiibaa Magaalaa Shaggar",
          welcome_title: "Baga Nagaan Dhuftan",
          welcome_subtitle: "Jiraattotaafi Daawwattoota Magaalaa Shaggariif Simannaa Ho'aa",
          welcome_text: "Akka kantiibaa Magaalaa Shaggaritti, mul'ata keenya ifaa ta'e gara fuulduraa hawaasa keenyaaf qooduun na gammachiisa. Shaggar gara magaalaa ismaartii fakkeenyaatti jijjiiruuf kutanneerra—dorgomaa, jireenyaaf mijataa, fi fedhii jiraattota hundaa kan deebisu.",
          read_more: "Ergaa Guutuu Dubbisi",
          deputy1_name: "Obbo Guyyoo Galgaloo",
          deputy1_desc: "Qaamolee dhimmi ilaallatu hunda—daldaltoota, hoggantoota hawaasaa, fi jiraattota—naannoo hunda hammataa ta'e uumuuf carraaqqii kana keessatti dammaqinaan akka hirmaatan ni affeerra.",
          deputy2_name: "Obbo Gugsaa Dajjanee",
          deputy2_desc: "Itti Aanaa Kantiibaa fi Itti Gaafatamaa Damee Bulchiinsaa fi Tajaajilaa, qulqullina tajaajila uummataa cimsuuf kan kutannee hojjetu.",
          deputy3_name: "Obbo Haayiluu Girmaa",
          deputy3_desc: "Itti Aanaa Kantiibaa fi Itti Gaafatamaa Kilaastara Qonna Magaalaa, itti fufinsaa fi nageenya hawaasaa irratti xiyyeeffata."
        },
        quick_services: {
          title: "Tajaajiloota Saffisaa",
          subtitle: "Tajaajiloota mootummaa dijitaalaa baay'ee beekamoo ta'an kilikii muraasaan argadhaa.",
          permits: "Ehayama Ijaarsaa",
          permits_desc: "Ehayama ijaarsaafi gamoo onlaayiniin salphaatti iyyadhaa.",
          business: "Ehayama Daldalaa",
          business_desc: "Daldala keessan haaraa ykn duraan jiru saffisaan galmeessisiitii ehayama fudhadhaa.",
          driver: "Ehayama Konkolaachisummaa",
          driver_desc: "Ehayama konkolaachisummaa keessan salphaatti iyyadhaa, haaromsaa ykn bakka buusaa.",
          health: "Tajaajiloota Fayyaa",
          health_desc: "Dhaabbilee fayyaa, ragaaleefi tajaajiloota yaalaa argadhaa.",
          apply_now: "Amma Iyyadhu"
        },
        stats: {
          sub_cities: "Kutaa Magaalaa",
          online_services: "Tajaajila Onlaayinii",
          digital_access: "Argama Dijitaalaa",
          satisfaction: "Quufinsa Lammiilee"
        },
        news: {
          title: "Oduu Haaraa",
          subtitle: "Waa'ee misooma magaalaafi beeksisa hawaasaa odeeffannoo argadhaa.",
          view_all: "Oduu Hunda Ilaali",
          tag_service: "Tajaajila Haaraa",
          tag_update: "Odeeffannoo",
          tag_event: "Qophii",
          news1_title: "Galmeen Qabeenyaa Onlaayinii Jalqabame",
          news1_desc: "Qabeenya keessan waajjira osoo hin dhaqin onlaayiniin galmeessisaa. Jiraattota Shaggar hundaaf saffisaa, amansiisaafi baay'ee mijataadha.",
          news2_title: "Sa'aatiin Tajaajilaa Dheerachuu Isaa Ibsame",
          news2_desc: "Hojjettoota keessummeessuuf waajjiraaleen bulchiinsaa gurguddoon hundi guyyoota hojii hanga sa'aatii 12:00tti banaa ta'u.",
          news3_title: "Marii Uummataa Waa'ee Magaalaa Ismaartii",
          news3_desc: "Hubannoo namtolchee (AI) fi teeknooloojii ismaartii bu'uura misoomaa Magaalaa Shaggar keessatti makuu irratti marii wal-faana ta'eef karoorsitoota magaalaa waliin hirmaadhaa.",
          read_story: "Guutuu Isaa Dubbisi"
        },
        cta: {
          title: "Eegaluuf Qophiidhaa?",
          subtitle: "Quunnamtii mootummaa keessan hunda daashboordii tokko irraa to'achuuf har'a akkoontii uummadhaa.",
          start: "Amma Iyyachuu Eegali",
          learn_more: "Dabalata Dubbisi"
        },
        ai: "Gargaaraa AI"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
