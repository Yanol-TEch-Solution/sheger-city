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
        district: "District",
        services: "E - Services",
        administrative: "Administrative Sector",
        news: "News",
        contact: "Contact",
        virtual_tour: "Virtual Tour"
      },
      subcities: {
        furii: "Furii",
        galaan: "Galaan",
        galaan_guddaa: "Galaan Guddaa",
        gafarsa_gujee: "Gafarsa Gujee",
        buraayyuu: "Buraayyuu",
        sabbataa: "Sabbataa",
        mana_abbichuu: "Mana Abbichuu",
        malkaa_noonnoo: "Malkaa Noonnoo",
        kooyyee_faccee: "Kooyyee Faccee",
        kuraa_jiddaa: "Kuraa Jiddaa",
        lagaxafoo: "Lagaxafoo"
      },
      administrative_options: {
        kantiibaa: "Mayor's Office",
        public_service: "Public Service & HR Development",
        education: "Education Office",
        health: "Health Office",
        investment: "Investment & Industry",
        revenue: "Revenue Office",
        chuo: "CHUO Office",
        trade: "Trade Office",
        science_tech: "Science & Technology",
        city_council: "City Council",
        correctional: "Correctional Institution",
        police: "Police",
        court: "Court",
        prosecutor: "Attorney General",
        security: "Administration, Security & Militia",
        finance_planning: "Finance, Planning & Development",
        agriculture: "Agriculture, Irrigation & Environment",
        municipality: "Municipality, Planning & Housing",
        women_children: "Women, Children & Youth",
        water_energy: "Water, Mineral & Energy",
        land_construction: "Land, Cadaster & Construction",
        social_rehab: "Disaster Risk & Social Rehab",
        road_transport: "Road & Transport",
        culture_tourism: "Culture & Tourism",
        communication: "Social Labor & Communication"
      },
      administrative: {
        official_sector: "Official Administration Sector",
        online_services: "Online Services",
        public_docs: "Public Documents",
        support: "Support",
        digital: "Digital",
        resolved: "Resolved",
        about_title: "Empowering Sheger's Future through Excellence",
        about_desc: "Dedicated to structural integrity, transparent policy enforcement, and delivering premium administrative services to the citizens and businesses of Sheger City.",
        initiatives: "Key Initiatives",
        leadership_title: "Department Leadership",
        leadership_desc: "Leading with transparency and innovation to serve the community.",
        read_bio: "Read Full Bio"
      },
      about: {
        title: "About",
        heritage: "City Identity & Heritage",
        hero_desc: "Building a modern, transparent, and citizen-centered government for the future of Ethiopia.",
        stats: {
          subcities: "Sub-Cities",
          population: "Population",
          services: "Digital Services",
          satisfaction: "Citizen Satisfaction"
        }
      },
      leadership: {
        title: "City Leadership",
        team: "Team",
        hero_desc: "The dedicated leaders working every day to build a transparent, modern, and citizen-centered Sheger City.",
        officials: "City Officials",
        dept_mayor: "Office of the Mayor",
        dept_admin: "Administration & Public Services",
        dept_dev: "Urban Development & Infrastructure",
        dept_tech: "Technology & Innovation",
        values: {
          accountability: "Accountability",
          transparency: "Transparency",
          citizen_first: "Citizen First",
          innovation: "Innovation"
        }
      },
      contact: {
        title: "Contact Us",
        hero_desc: "We are here to serve you. Reach out to our offices for any inquiries, feedback, or support.",
        get_in_touch: "Get in Touch",
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject",
          message: "Message",
          send: "Send Message"
        },
        offices: "Regional Offices",
        headquarters: "Main Headquarters"
      },
      administration_page: {
        title: "Administrative Directory",
        hero_desc: "Explore the various sectors and departments that manage Sheger City's public services and infrastructure.",
        view_details: "View Details",
        search: "Search Sectors"
      },
      sector_page: {
        back: "Back to All Services",
        portal: "Sector Portal",
        apply: "Apply Online",
        apply_desc: "Submit applications, upload required documents, and track your status securely online.",
        start_app: "Start Application",
        book: "Book Appointment",
        book_desc: "Need to visit in person? Schedule an appointment to avoid queues at the service center.",
        schedule: "Schedule Visit",
        contact_desk: "Contact Desk",
        contact_desc: "Have specific questions? Speak to a department agent directly.",
        sub_services: "Available Sub-Services"
      },
      transparency_page: {
        title: "Transparency & Accountability",
        hero_desc: "Access public reports, budgets, and government performance metrics as part of our commitment to open governance.",
        reports: "Public Reports",
        budgets: "Budget Allocation",
        performance: "Performance Metrics"
      },
      virtual_tour_page: {
        title: "Virtual Experience",
        hero_desc: "Take a 360-degree immersive tour of Sheger City's key landmarks and development projects from anywhere in the world.",
        start_tour: "Start Virtual Tour"
      },
      services_page: {
        title: "E-Services Portal",
        hero_desc: "Access all government services online. Fast, secure, and convenient civic infrastructure at your fingertips.",
        search_placeholder: "What service are you looking for?"
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
        district: "ወረዳ",
        services: "E - አገልግሎቶች",
        administrative: "የአስተዳደር ዘርፍ",
        news: "ዜና",
        contact: "አድራሻ",
        virtual_tour: "ቨርቹዋል ጉብኝት"
      },
      subcities: {
        furii: "ፉሪ",
        galaan: "ገላን",
        galaan_guddaa: "ገላን ጉድዳ",
        gafarsa_gujee: "ገፈርስ ጉጄ",
        buraayyuu: "ቡራዩ",
        sabbataa: "ሰበታ",
        mana_abbichuu: "መና አቢቹ",
        malkaa_noonnoo: "መልካ ኖኖ",
        kooyyee_faccee: "ኮዬ ፈጬ",
        kuraa_jiddaa: "ኩራ ጂዳ",
        sulultaa: "ሱሉልታ",
        lagaxafoo: "ለገጣፎ"
      },
      administrative_options: {
        kantiibaa: "የከንቲባ ጽሕፈት ቤት",
        public_service: "የፐብሊክ ሰርቪስ እና የሰው ሀብት ልማት",
        education: "የትምህርት ጽሕፈት ቤት",
        health: "የጤና ጽሕፈት ቤት",
        investment: "የኢንቨስትመንት እና የኢንዱስትሪ",
        revenue: "የገቢዎች ጽሕፈት ቤት",
        chuo: "የ CHUO ጽሕፈት ቤት",
        trade: "የንግድ ጽሕፈት ቤት",
        science_tech: "የሳይንስ እና ቴክኖሎጂ",
        city_council: "ምክር ቤት",
        correctional: "ማረሚያ ቤት",
        police: "ፖሊስ",
        court: "ፍርድ ቤት",
        prosecutor: "ዓቃቤ ሕግ",
        security: "የአስተዳደር፣ ፀጥታ እና ሚሊሻ",
        finance_planning: "የፋይናንስ፣ ፕላን እና ልማት",
        agriculture: "የግብርና፣ መስኖ እና አካባቢ ጥበቃ",
        municipality: "የማዘጋጃ ቤት፣ ፕላን እና ቤቶች",
        women_children: "የሴቶች፣ ሕፃናት እና ወጣቶች",
        water_energy: "የውሃ፣ ማዕድን እና ኢነርጂ",
        land_construction: "የመሬት፣ ካዳስተር እና ኮንስትራክሽን",
        social_rehab: "የአደጋ ስጋት እና ማህበራዊ ተሃድሶ",
        road_transport: "የመንገድ እና ትራንስፖርት",
        culture_tourism: "የባህል እና ቱሪዝም",
        communication: "የማህበራዊ ሰራተኛ እና ኮሙኒኬሽን"
      },
      administrative: {
        official_sector: "ይፋዊ የአስተዳደር ዘርፍ",
        online_services: "የመስመር ላይ አገልግሎቶች",
        public_docs: "የህዝብ ሰነዶች",
        support: "ድጋፍ",
        digital: "ዲጂታል",
        resolved: "ተፈትቷል",
        about_title: "የሸገርን መፃኢ ዕድል በትጋት ማጎልበት",
        about_desc: "ለሸገር ከተማ ነዋሪዎች እና የንግድ ድርጅቶች መዋቅራዊ ታማኝነትን፣ ግልጽ የሆነ የፖሊሲ አፈፃፀምን እና ፕሪሚየም አስተዳደራዊ አገልግሎቶችን ለመስጠት ቁርጠኛ ነው።",
        initiatives: "ቁልፍ ተነሳሽነቶች",
        leadership_title: "የመምሪያው አመራር",
        leadership_desc: "ማህበረሰቡን ለማገልገል በግልፅነት እና በፈጠራ መምራት።",
        read_bio: "ሙሉውን ባዮ ያንብቡ"
      },
      about: {
        title: "ስለ ሸገር ከተማ",
        heritage: "የከተማ ማንነት እና ቅርስ",
        hero_desc: "ለኢትዮጵያ መፃኢ ዕድል ዘመናዊ፣ ግልፅ እና ዜጋ-ተኮር መንግስት መገንባት።",
        stats: {
          subcities: "ክፍለ ከተሞች",
          population: "የህዝብ ብዛት",
          services: "የዲጂታል አገልግሎቶች",
          satisfaction: "የዜጎች እርካታ"
        }
      },
      leadership: {
        title: "የከተማ አመራር",
        team: "ቡድን",
        hero_desc: "ግልፅ፣ ዘመናዊ እና ዜጋ-ተኮር ሸገር ከተማን ለመገንባት በየቀኑ የሚሰሩ ቁርጠኛ መሪዎች።",
        officials: "የከተማ ባለስልጣናት",
        dept_mayor: "የከንቲባ ጽሕፈት ቤት",
        dept_admin: "አስተዳደር እና የህዝብ አገልግሎቶች",
        dept_dev: "የከተማ ልማት እና መሰረተ ልማት",
        dept_tech: "ቴክኖሎጂ እና ፈጠራ",
        values: {
          accountability: "ተጠያቂነት",
          transparency: "ግልፅነት",
          citizen_first: "ቅድሚያ ለዜጋ",
          innovation: "ፈጠራ"
        }
      },
      contact: {
        title: "ያግኙን",
        hero_desc: "እርስዎን ለማገልገል እዚህ ነን። ለማንኛውም ጥያቄ፣ አስተያየት ወይም ድጋፍ ቢሮዎቻችንን ያነጋግሩ።",
        get_in_touch: "ይገናኙን",
        form: {
          name: "ሙሉ ስም",
          email: "የኢሜል አድራሻ",
          subject: "ርዕሰ ጉዳይ",
          message: "መልዕክት",
          send: "መልዕክት ላክ"
        },
        offices: "የክልል ቢሮዎች",
        headquarters: "ዋና ዋና መሥሪያ ቤት"
      },
      administration_page: {
        title: "የአስተዳደር ማውጫ",
        hero_desc: "የሸገር ከተማ የህዝብ አገልግሎቶችን እና መሰረተ ልማቶችን የሚያስተዳድሩ የተለያዩ ዘርፎችን እና መምሪያዎችን ያስሱ።",
        view_details: "ዝርዝሩን ይመልከቱ",
        search: "ዘርፎችን ይፈልጉ"
      },
      sector_page: {
        back: "ወደ ሁሉም አገልግሎቶች ተመለስ",
        portal: "የዘርፍ ፖርታል",
        apply: "በመስመር ላይ ያመልክቱ",
        apply_desc: "ማመልከቻዎችን ያስገቡ፣ አስፈላጊ ሰነዶችን ይስቀሉ እና ሁኔታዎን ደህንነቱ በተጠበቀ ሁኔታ በመስመር ላይ ይከታተሉ።",
        start_app: "ማመልከቻ ይጀምሩ",
        book: "ቀጠሮ ይያዙ",
        book_desc: "በአካል መገኘት ይፈልጋሉ? በአገልግሎት መስጫ ማእከል ውስጥ ወረፋዎችን ለማስወገድ ቀጠሮ ይያዙ።",
        schedule: "ጉብኝት ያቅዱ",
        contact_desk: "የእገዛ ጠረጴዛ",
        contact_desc: "የተወሰኑ ጥያቄዎች አሉዎት? የመምሪያውን ተወካይ በቀጥታ ያነጋግሩ።",
        sub_services: "የሚገኙ ንዑስ አገልግሎቶች"
      },
      transparency_page: {
        title: "ግልፅነት እና ተጠያቂነት",
        hero_desc: "ለክፍት አስተዳደር ያለንን ቁርጠኝነት አካል አድርገው የህዝብ ሪፖርቶችን፣ በጀቶችን እና የመንግስት አፈፃፀም መለኪያዎችን ያግኙ።",
        reports: "የህዝብ ሪፖርቶች",
        budgets: "የበጀት ድልድል",
        performance: "የአፈፃፀም መለኪያዎች"
      },
      virtual_tour_page: {
        title: "ቨርቹዋል ልምድ",
        hero_desc: "ከየትኛውም የዓለም ክፍል ሆነው የሸገር ከተማን ቁልፍ ምልክቶች እና የልማት ፕሮጀክቶችን የ360 ዲግሪ ጉብኝት ያድርጉ።",
        start_tour: "ቨርቹዋል ጉብኝት ይጀምሩ"
      },
      services_page: {
        title: "የኢ-አገልግሎት ፖርታል",
        hero_desc: "ሁሉንም የመንግስት አገልግሎቶች በመስመር ላይ ያግኙ። ፈጣን፣ ደህንነቱ የተጠበቀ እና ምቹ የሆነ የሲቪክ መሰረተ ልማት በእጅዎ ጫፍ።",
        search_placeholder: "ምን ዓይነት አገልግሎት ይፈልጋሉ?"
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
          deputy3_desc: "ምክትል ከንቲባ እና የከተማ ግብርና ክላስተር ሀላፊ፣ በዘላቂነት እና በህብረተሰብ ደህንነት ላይ ትከረት ያደርጋሉ።"
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
        district: "Aanaa",
        services: "E - Tajaajiloota",
        administrative: "Damee Bulchiinsaa",
        news: "Oduu",
        contact: "Quunnamtii",
        virtual_tour: "Daawwannaa Virtuwalii"
      },
      subcities: {
        furii: "Furii",
        galaan: "Galaan",
        galaan_guddaa: "Galaan Guddaa",
        gafarsa_gujee: "Gafarsa Gujee",
        buraayyuu: "Buraayyuu",
        sabbataa: "Sabbataa",
        mana_abbichuu: "Mana Abbichuu",
        malkaa_noonnoo: "Malkaa Noonnoo",
        kooyyee_faccee: "Kooyyee Faccee",
        kuraa_jiddaa: "Kuraa Jiddaa",
        lagaxafoo: "Lagaxafoo"
      },
      administrative_options: {
        kantiibaa: "W. Kantiibaa",
        public_service: "W. Paabilik Sarvisii fi Misooma Qabeenya Namaa",
        education: "W. Barnootaa",
        health: "W. Fayyaa",
        investment: "W. Inveestimentii fi Industirii",
        revenue: "W. Galii",
        chuo: "W. CHUO",
        trade: "W. Daldalaa",
        science_tech: "W. Saayinsii fi Teknooloojii",
        city_council: "Mana Maree",
        correctional: "Mana Sireessaa",
        police: "Poolisii",
        court: "Mana Murtii",
        prosecutor: "W. Abbaa Alangaa",
        security: "W/Bulchiinsa,Nageenyaa fi Milishaa",
        finance_planning: "Waajira Maallaqa,Karooraa fi Misooma",
        agriculture: "W/Qonnaa,Jallisii E/Naannoo fi W/H/Gamtaa'",
        municipality: "Waajira M/Qopheessaa,Pilaanii, Gal/Siviilii fi Manneenii'",
        women_children: "W/Dhi/Dub/Daa'immanii fi Dargaggoo",
        water_energy: "Waajjira Bishaan,Albuudaa fi Tajaajila bishaan dhugaatii'",
        land_construction: "waajjira lafa, kaadasteraa fi konistiraakshinii",
        social_rehab: "W/Buusaa gonofaa fi Kaafamtoota misoomaa",
        road_transport: "Waajjira Daandii fi Geejjibaa",
        culture_tourism: "W/Aadaa fi Turizimii",
        communication: "W/Dhi/Hoj/Hawaasummaa fi Kominikeeshinii"
      },
      leadership: {
        title: "Hoggansa Magaalaa",
        team: "Garee",
        hero_desc: "Hoggantoota kutaatanii Magaalaa Shaggar ifaa, amayyaa fi lammiilee irratti xiyyeeffate ijaaruuf guyyaa guyyaan hojjetan.",
        officials: "Abbootii Taayitaa Magaalaa",
        dept_mayor: "Waajjira Kantiibaa",
        dept_admin: "Bulchiinsaa fi Tajaajila Uummataa",
        dept_dev: "Misooma Magaalaa fi Bu'uura Misoomaa",
        dept_tech: "Teknooloojii fi Kalaqa",
        values: {
          accountability: "Itti Gaafatamummaa",
          transparency: "Iftoomina",
          citizen_first: "Duraan Duratti Lammiidhaaf",
          innovation: "Kalaqa"
        }
      },
      contact: {
        title: "Nu Quunnamaa",
        hero_desc: "Isin tajaajiluuf as jirra. Inveestimentii, yaada ykn deeggarsa kamiyyuu yoo qabaattan waajjiraalee keenya quunnamaa.",
        get_in_touch: "Wal Quunnamaa",
        form: {
          name: "Maqaa Guutuu",
          email: "Teessoo Imeelii",
          subject: "Dhimma",
          message: "Ergaa",
          send: "Ergaa Ergi"
        },
        offices: "Waajjiraalee Naannoo",
        headquarters: "Waajjira Muummee"
      },
      administration_page: {
        title: "Kallattii Bulchiinsaa",
        hero_desc: "Dameelee fi waajjiraalee tajaajila uummataa fi bu'uura misoomaa Magaalaa Shaggar bulchan sakatta'aa.",
        view_details: "Zilzila Ilaali",
        search: "Dameelee Barbaadi"
      },
      sector_page: {
        back: "Gara Tajaajila Hundaatti Deebi'i",
        portal: "Poortaalii Damee",
        apply: "Onlaayiniin Iyyadhu",
        apply_desc: "Iyyannoo galchaa, ragaalee barbaachisoo ol-funaanaa, fi haala keessan nageenyatti onlaayiniin hordofaa.",
        start_app: "Iyyannoo Jalqabi",
        book: "Beellama Qabadhu",
        book_desc: "Qaamaan argamuu barbaaduu? Bakka tajaajilaatti tarree hambisuuf beellama qabadhu.",
        schedule: "Daawwannaa Karoorsi",
        contact_desk: "Tajaajila Deeggarsaa",
        contact_desc: "Gaaffii addaa qabduu? Kallattiin bakka bu'aa waajjiraa haasofsiisaa.",
        sub_services: "Tajaajiloota Xixiqqoo Jiran"
      },
      transparency_page: {
        title: "Iftoominaa fi Itti Gaafatamummaa",
        hero_desc: "Kutannoo bulchiinsa banaa qabnu irratti hundaa'uun gabaasa uummataa, baajataa fi ragaalee raawwii mootummaa argadhaa.",
        reports: "Gabaasa Uummataa",
        budgets: "Ramaddii Baajataa",
        performance: "Safartuu Raawwii"
      },
      virtual_tour_page: {
        title: "Muuxannoo Virtuwalii",
        hero_desc: "Bakkeewwan beekamoo fi pirojektoota misoomaa Magaalaa Shaggar bakka kamiyyuu ta'anii daawwannaa 360-digrii godhaa.",
        start_tour: "Daawwannaa Jalqabi"
      },
      services_page: {
        title: "Poortaalii E-Tajaajilaa",
        hero_desc: "Tajaajila mootummaa hunda onlaayiniin argadhaa. Saffisaa, amansiisaa fi mijataa.",
        search_placeholder: "Tajaajila akkamii barbaadu?"
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
  },
  hi: {
    translation: {
      leadership: {
        title: "शहर का नेतृत्व",
        team: "टीम",
        hero_desc: "शेगर सिटी को एक पारदर्शी, आधुनिक और नागरिक-केंद्रित शहर बनाने के लिए हर दिन काम करने वाले समर्पित नेता।",
        officials: "शहर के अधिकारी",
        dept_mayor: "मेयर का कार्यालय",
        dept_admin: "प्रशासन और सार्वजनिक सेवा",
        dept_dev: "शहरी विकास और बुनियादी ढांचा",
        dept_tech: "प्रौद्योगिकी और नवाचार",
        values: {
          accountability: "जवाबदेही",
          transparency: "पारदर्शिता",
          citizen_first: "नागरिक प्रथम",
          innovation: "नवाचार"
        }
      },
      contact: {
        title: "संपर्क करें",
        hero_desc: "हम आपकी सेवा के लिए यहाँ हैं। किसी भी पूछताछ, प्रतिक्रिया या सहायता के लिए हमारे कार्यालयों से संपर्क करें।",
        get_in_touch: "संपर्क में रहें",
        form: {
          name: "पूरा नाम",
          email: "ईमेल पता",
          subject: "विषय",
          message: "संदेश",
          send: "संदेश भेजें"
        },
        offices: "क्षेत्रीय कार्यालय",
        headquarters: "मुख्य मुख्यालय"
      },
      administration_page: {
        title: "प्रशासनिक निर्देशिका",
        hero_desc: "शेगर सिटी की सार्वजनिक सेवाओं और बुनियादी ढांचे का प्रबंधन करने वाले विभिन्न क्षेत्रों और विभागों का पता लगाएं।",
        view_details: "विवरण देखें",
        search: "क्षेत्र खोजें"
      },
      sector_page: {
        back: "सभी सेवाओं पर वापस जाएं",
        portal: "क्षेत्र पोर्टल",
        apply: "ऑनलाइन आवेदन करें",
        apply_desc: "आवेदन जमा करें, आवश्यक दस्तावेज अपलोड करें और अपनी स्थिति को ऑनलाइन ट्रैक करें।",
        start_app: "आवेदन शुरू करें",
        book: "अपॉइंटमेंट बुक करें",
        book_desc: "व्यक्तिगत रूप से मिलना चाहते हैं? सेवा केंद्र पर कतारों से बचने के लिए अपॉइंटमेंट लें।",
        schedule: "यात्रा का समय निर्धारित करें",
        contact_desk: "सहायता डेस्क",
        contact_desc: "कोई विशिष्ट प्रश्न है? विभाग के प्रतिनिधि से सीधे बात करें।",
        sub_services: "उपलब्ध उप-सेवाएं"
      },
      header: {
        title: "शेगर सिटी",
        subtitle: "डिजिटल सरकारी पोर्टल",
        home: "होम",
        about: "हमारे बारे में",
        subcity: "उप-शहर",
        district: "जिला",
        services: "ई-सेवाएं",
        administrative: "प्रशासनिक क्षेत्र",
        news: "समाचार",
        contact: "संपर्क",
        virtual_tour: "वर्चुअल टूर"
      },
      administrative_options: {
        kantiibaa: "मेयर का कार्यालय",
        public_service: "सार्वजनिक सेवा और मानव संसाधन विकास",
        education: "शिक्षा कार्यालय",
        health: "स्वास्थ्य कार्यालय",
        investment: "निवेश और उद्योग",
        revenue: "राजस्व कार्यालय",
        chuo: "CHUO कार्यालय",
        trade: "व्यापार कार्यालय",
        science_tech: "विज्ञान और प्रौद्योगिकी",
        city_council: "नगर परिषद",
        police: "पुलिस",
        court: "न्यायालय"
      },
      home: {
        hero: {
          badge: "✨ नागरिक सेवाओं के भविष्य में आपका स्वागत है",
          title: "स्वागत है",
          city: "शेगर सिटी",
          subtitle: "कुशल, पारदर्शी और नागरिक-केंद्रित सरकारी सेवाओं के लिए आपका डिजिटल प्रवेश द्वार। अपनी उंगलियों पर निर्बाध शासन का अनुभव करें।",
          explore: "सेवाएं खोजें",
          find_office: "कार्यालय खोजें"
        },
        leadership: {
          title: "शहर का नेतृत्व",
          mayor_name: "डॉ. तेशोम अदुना",
          mayor_title: "शेगर सिटी के मेयर",
          welcome_title: "स्वागत है"
        },
        quick_services: {
          title: "त्वरित सेवाएं",
          apply_now: "अभी आवेदन करें"
        },
        stats: {
          sub_cities: "उप-शहर",
          online_services: "ऑनलाइन सेवाएं"
        },
        ai: "एआई सहायक"
      }
    }
  },
  ar: {
    translation: {
      leadership: {
        title: "قيادة المدينة",
        team: "الفريق",
        hero_desc: "القادة المكرسون الذين يعملون كل يوم لبناء مدينة شيغر شفافة وحديثة ومركزة على المواطن.",
        officials: "مسؤولو المدينة",
        dept_mayor: "مكتب العمدة",
        dept_admin: "الإدارة والخدمات العامة",
        dept_dev: "التنمية الحضرية والبنية التحتية",
        dept_tech: "التكنولوجيا والابتكار",
        values: {
          accountability: "المساءلة",
          transparency: "الشفافية",
          citizen_first: "المواطن أولاً",
          innovation: "الابتكار"
        }
      },
      contact: {
        title: "اتصل بنا",
        hero_desc: "نحن هنا لخدمتكم. تواصلوا مع مكاتبنا لأي استفسارات أو ملاحظات أو دعم.",
        get_in_touch: "تواصل معنا",
        form: {
          name: "الاسم الكامل",
          email: "البريد الإلكتروني",
          subject: "الموضوع",
          message: "الرسالة",
          send: "إرسال الرسالة"
        },
        offices: "المكاتب الإقليمية",
        headquarters: "المقر الرئيسي"
      },
      administration_page: {
        title: "الدليل الإداري",
        hero_desc: "استكشف القطاعات والإدارات المختلفة التي تدير الخدمات العامة والبنية التحتية في مدينة شيغر.",
        view_details: "عرض التفاصيل",
        search: "البحث في القطاعات"
      },
      sector_page: {
        back: "العودة إلى جميع الخدمات",
        portal: "بوابة القطاع",
        apply: "تقديم الطلب إلكترونياً",
        apply_desc: "قم بتقديم الطلبات وتحميل المستندات المطلوبة وتتبع حالتك بأمان عبر الإنترنت.",
        start_app: "بدء الطلب",
        book: "حجز موعد",
        book_desc: "هل تحتاج لزيارتنا شخصياً؟ احجز موعداً لتجنب الطوابير في مركز الخدمة.",
        schedule: "جدولة زيارة",
        contact_desk: "مكتب الاتصال",
        contact_desc: "هل لديك أسئلة محددة؟ تحدث إلى ممثل القسم مباشرة.",
        sub_services: "الخدمات الفرعية المتاحة"
      },
      header: {
        title: "مدينة شيغر",
        subtitle: "بوابة الحكومة الرقمية",
        home: "الرئيسية",
        about: "عن المدينة",
        subcity: "الضاحية",
        district: "المنطقة",
        services: "الخدمات الإلكترونية",
        administrative: "القطاع الإداري",
        news: "الأخبار",
        contact: "اتصل بنا",
        virtual_tour: "جولة افتراضية"
      },
      home: {
        hero: {
          badge: "✨ مرحباً بكم في مستقبل الخدمات المدنية",
          title: "مرحباً بكم في",
          city: "مدينة شيغر",
          subtitle: "بوابتكم الرقمية لخدمات حكومية فعالة وشفافة ومركزة على المواطن. استمتع بحوكمة سلسة بين يديك.",
          explore: "استكشاف الخدمات",
          find_office: "البحث عن مكتب"
        },
        ai: "المساعد الذكي"
      }
    }
  },
  fr: {
    translation: {
      leadership: {
        title: "Direction de la Ville",
        team: "Équipe",
        hero_desc: "Les leaders dévoués qui travaillent chaque jour pour construire une ville de Sheger transparente, moderne et centrée sur le citoyen.",
        officials: "Responsables de la Ville",
        dept_mayor: "Bureau du Maire",
        dept_admin: "Administration et Services Publics",
        dept_dev: "Développement Urbain et Infrastructure",
        dept_tech: "Technologie et Innovation",
        values: {
          accountability: "Responsabilité",
          transparency: "Transparence",
          citizen_first: "Le Citoyen d'abord",
          innovation: "Innovation"
        }
      },
      contact: {
        title: "Contactez-nous",
        hero_desc: "Nous sommes là pour vous servir. Contactez nos bureaux pour toute demande, feedback ou support.",
        get_in_touch: "Entrer en contact",
        form: {
          name: "Nom complet",
          email: "Adresse e-mail",
          subject: "Sujet",
          message: "Message",
          send: "Envoyer le message"
        },
        offices: "Bureaux régionaux",
        headquarters: "Siège social"
      },
      administration_page: {
        title: "Annuaire Administratif",
        hero_desc: "Explorez les différents secteurs et départements qui gèrent les services publics et les infrastructures de Sheger.",
        view_details: "Voir les détails",
        search: "Rechercher des secteurs"
      },
      sector_page: {
        back: "Retour à tous les services",
        portal: "Portail du secteur",
        apply: "Postuler en ligne",
        apply_desc: "Soumettez vos demandes, téléchargez les documents requis et suivez votre statut en ligne.",
        start_app: "Commencer la demande",
        book: "Prendre rendez-vous",
        book_desc: "Besoin de venir en personne ? Prenez rendez-vous pour éviter les files d'attente.",
        schedule: "Planifier une visite",
        contact_desk: "Bureau d'accueil",
        contact_desc: "Questions spécifiques ? Parlez directement à un agent du département.",
        sub_services: "Sous-services disponibles"
      },
      header: {
        title: "Ville de Sheger",
        subtitle: "Portail du Gouvernement Numérique",
        home: "Accueil",
        about: "À Propos",
        subcity: "Sous-ville",
        district: "District",
        services: "Services-E",
        administrative: "Secteur Administratif",
        news: "Nouvelles",
        contact: "Contact",
        virtual_tour: "Visite Virtuelle"
      },
      home: {
        hero: {
          badge: "✨ Bienvenue dans le futur des services civiques",
          title: "Bienvenue à",
          city: "Ville de Sheger",
          subtitle: "Votre portail numérique pour des services gouvernementaux efficaces, transparents et centrés sur le citoyen.",
          explore: "Explorer les Services",
          find_office: "Trouver un Bureau"
        },
        ai: "Assistant IA"
      }
    }
  },
  es: {
    translation: {
      leadership: {
        title: "Liderazgo de la Ciudad",
        team: "Equipo",
        hero_desc: "Líderes dedicados que trabajan cada día para construir una Ciudad de Sheger transparente, moderna y centrada en el ciudadano.",
        officials: "Funcionarios de la Ciudad",
        dept_mayor: "Oficina del Alcalde",
        dept_admin: "Administración y Servicios Públicos",
        dept_dev: "Desarrollo Urbano e Infraestructura",
        dept_tech: "Tecnología e Innovación",
        values: {
          accountability: "Responsabilidad",
          transparency: "Transparencia",
          citizen_first: "El Ciudadano Primero",
          innovation: "Innovación"
        }
      },
      contact: {
        title: "Contáctenos",
        hero_desc: "Estamos aquí para servirle. Comuníquese con nuestras oficinas para cualquier consulta, sugerencia o apoyo.",
        get_in_touch: "Ponerse en contacto",
        form: {
          name: "Nombre completo",
          email: "Correo electrónico",
          subject: "Asunto",
          message: "Mensaje",
          send: "Enviar mensaje"
        },
        offices: "Oficinas regionales",
        headquarters: "Sede principal"
      },
      administration_page: {
        title: "Directorio Administrativo",
        hero_desc: "Explore los diversos sectores y departamentos que gestionan los servicios públicos y la infraestructura de Sheger.",
        view_details: "Ver detalles",
        search: "Buscar sectores"
      },
      sector_page: {
        back: "Volver a todos los servicios",
        portal: "Portal del sector",
        apply: "Solicitar en línea",
        apply_desc: "Envíe solicitudes, cargue los documentos requeridos y rastree su estado de forma segura en línea.",
        start_app: "Iniciar solicitud",
        book: "Reservar cita",
        book_desc: "¿Necesita venir en persona? Reserve una cita para evitar colas en el centro de servicio.",
        schedule: "Programar visita",
        contact_desk: "Mesa de ayuda",
        contact_desc: "¿Tiene preguntas específicas? Hable directamente con un agente del departamento.",
        sub_services: "Subservicios disponibles"
      },
      header: {
        title: "Ciudad de Sheger",
        subtitle: "Portal de Gobierno Digital",
        home: "Inicio",
        about: "Acerca de",
        subcity: "Subciudad",
        district: "Distrito",
        services: "Servicios-E",
        administrative: "Sector Administrativo",
        news: "Noticias",
        contact: "Contacto",
        virtual_tour: "Visita Virtual"
      },
      home: {
        hero: {
          badge: "✨ Bienvenidos al futuro de los servicios cívicos",
          title: "Bienvenidos a",
          city: "Ciudad de Sheger",
          subtitle: "Su portal digital para servicios gubernamentales eficientes, transparentes y centrados en el ciudadano.",
          explore: "Explorar Servicios",
          find_office: "Buscar Oficina"
        },
        ai: "Asistente IA"
      }
    }
  },
  ti: {
    translation: {
      header: {
        title: "ከተማ ሸገር",
        subtitle: "ዲጂታል መንግስቲ ፖርታል",
        home: "መበገሲ",
        about: "ብዛዕባና",
        subcity: "ክፍለ ከተማ",
        district: "ወረዳ",
        services: "ኢ-አገልግሎት",
        administrative: "ምምሕዳር ዘርፊ",
        news: "ዜና",
        contact: "አድራሻ",
        virtual_tour: "ቨርቹዋል ዑደት"
      },
      administrative_options: {
        kantiibaa: "ቤት ጽሕፈት ከንቲባ",
        public_service: "ልምዓት ሰብኣዊ ጸጋን ፐብሊክ ሰርቪስን",
        education: "ቤት ጽሕፈት ትምህርቲ",
        health: "ቤት ጽሕፈት ጥዕና",
        investment: "ኢንቨስትመንትን ኢንዱስትሪን",
        revenue: "ቤት ጽሕፈት እቶት",
        chuo: "ቤት ጽሕፈት CHUO",
        trade: "ቤት ጽሕፈት ንግዲ",
        science_tech: "ሳይንስን ቴክኖሎጅን",
        city_council: "ምክር ቤት ከተማ",
        police: "ፖሊስ",
        court: "ቤት ፍርዲ",
        correctional: "ትካል መኣረምታ",
        prosecutor: "ጠቆቃሊ ጊሓ",
        security: "ምምሕዳርን ጸጥታን",
        finance_planning: "ፋይናንስን ፕላንን",
        agriculture: "ሕርሻን መስኖን",
        municipality: "ምምሕዳር ከተማን ኣባይትን",
        women_children: "ደቂ ኣንስትዮን ህጻናትን",
        water_energy: "ማይን ጸዓትን",
        land_construction: "መሬትን ኮንስትራክሽንን",
        social_rehab: "ማሕበራዊ ሓገዝ",
        road_transport: "መገድን ትራንስፖርትን",
        culture_tourism: "ባህልን ቱሪዝምን",
        communication: "ኮሙኒኬሽን"
      },
      leadership: {
        title: "ኣመራርሓ ከተማ",
        team: "ጋንታ",
        hero_desc: "ግሉጽ፣ ዘመናዊን ዜጋ-ተኮርን ከተማ ሸገር ንምህናጽ መዓልታዊ ዝሰርሑ ቆራጻት መራሕቲ።",
        officials: "ሰበ-ስልጣን ከተማ",
        dept_mayor: "ቤት ጽሕፈት ከንቲባ",
        dept_admin: "ምምሕዳርን ህዝባዊ ኣገልግሎትን",
        dept_dev: "ልምዓት ከተማን መሰረተ ልምዓትን",
        dept_tech: "ቴክኖሎጅን ፈጠራን",
        values: {
          accountability: "ተሓታትነት",
          transparency: "ግሉጽነት",
          citizen_first: "ቀዳምነት ንዜጋ",
          innovation: "ፈጠራ"
        }
      },
      contact: {
        title: "ርኸቡና",
        hero_desc: "ንስኻትኩም ንምግልጋል ኣብዚ ኣለና። ንዝኾነ ሕቶ፣ ርእይቶ ወይ ሓገዝ ናብ ቢሮታትና ተወከሱ።",
        get_in_touch: "ተራኸቡና",
        form: {
          name: "ምሉእ ስም",
          email: "ኢሜይል",
          subject: "ርእሰ ጉዳይ",
          message: "መልእኽቲ",
          send: "መልእኽቲ ስደድ"
        },
        offices: "ዞባዊ ቢሮታት",
        headquarters: "ቀንዲ ቤት ጽሕፈት"
      },
      administration_page: {
        title: "ምምሕዳራዊ ማውጫ",
        hero_desc: "ህዝባዊ ኣገልግሎታትን መሰረተ ልምዓትን ከተማ ሸገር ዘመሓድሩ ዝተፈላለዩ ዘርፍታትን መምርሒታትን ዳህስሱ።",
        view_details: "ዝርዝር ርአ",
        search: "ዘርፍታት ድለዩ"
      },
      sector_page: {
        back: "ናብ ኩሉ ኣገልግሎታት ተመለስ",
        portal: "ፖርታል ዘርፊ",
        apply: "ኦንላይን ኣመልክቱ",
        apply_desc: "መልከቻታት ኣእትዉ፣ ዘድልዩ ሰነዳት ጽዓኑ፣ ኩነታትኩም ድማ ብውሕስነት ኦንላይን ተኸታተሉ።",
        start_app: "መልከቻ ጀምር",
        book: "ቆጸራ ሓዙ",
        book_desc: "ብኣካል ክትመጽኡ ትደልዩዶ? ኣብ መውሃቢ ኣገልግሎት ማእከል ሰልፊ ንምወጋድ ቆጸራ ሓዙ።",
        schedule: "ዑደት መደብ",
        contact_desk: "ደስክ ሓገዝ",
        contact_desc: "ፍሉይ ሕቶታት ኣለኩምዶ? ምስ ወኪል እቲ መምርሒ ብቀጥታ ተዛረቡ።",
        sub_services: "ዘለዉ ንኡሳን ኣገልግሎታት"
      },
      transparency_page: {
        title: "ግሉጽነትን ተሓታትነትን",
        hero_desc: "ህዝባዊ ጸብጻባት፣ ባጀታትን መለክዒታት ኣፈጻጽማ መንግስትን ከም ኣካል እቲ ንኽፉት ምምሕዳር ዘለና ቆራጽነት ክትረኽቡ ትኽእሉ ኢኹም።",
        reports: "ህዝባዊ ጸብጻባት",
        budgets: "ምደባ ባጀት",
        performance: "መለክዒታት ኣፈጻጽማ"
      },
      virtual_tour_page: {
        title: "ቨርቹዋል ተመክሮ",
        hero_desc: "ካብ ዝኾነ ቦታ ኮይንኩም ናይ 360 ዲግሪ ዑደት ቁልፊ ምልክታትን ናይ ልምዓት ፕሮጀክትታትን ከተማ ሸገር ግበሩ።",
        start_tour: "ቨርቹዋል ዑደት ጀምር"
      },
      services_page: {
        title: "ፖርታል ኢ-ኣገልግሎት",
        hero_desc: "ኩሉ መንግስታዊ ኣገልግሎታት ኦንላይን ረኸቡ። ቅልጡፍ፣ ውሑስን ምቹእን ዝኾነ መሰረተ ልምዓት ኣብ ኣጻብዕትኹም።",
        search_placeholder: "እንታይ ኣገልግሎት ትደልዩ ኣለኹም?"
      },
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
