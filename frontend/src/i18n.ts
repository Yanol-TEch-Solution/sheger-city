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

      home: {
        hero: {
          badge: "✨ Welcome to the Future of Civic Services",
          title: "Gateway to the",
          city: "Future of Sheger",
          subtitle: "Experience the next generation of urban living. Sheger City combines sustainable innovation with rich cultural heritage to create a world-class metropolitan experience.",
          explore: "Explore Services",
          start_exploring: "Start Exploring"
        },
        highlights: {
          badge: "A Glimpse of the Future",
          title: "Divinity and Earth Meet in Sheger",
          card1: "The Sheger National Aquatics Center and towering redline.",
          card2: "As discussed, Sheger's main square is full of vibrant life.",
          card3: "Though the ancient paths are preserved, modern development soars.",
          card4: "Though Sheger does have a city center, its beauty spans far beyond."
        },
        explore: {
          badge: "Discover the City",
          title: "Explore Sheger",
          view_map: "View Map",
          heritage_badge: "Heritage",
          grand_square: "The Grand Square",
          grand_square_desc: "Experience the vibrant cultural heart of Sheger City, where tradition meets modern public spaces.",
          eco_parks: "Eco-Parks",
          eco_parks_desc: "Over 500 hectares of green space.",
          tech_hub: "Tech Hub",
          tech_hub_desc: "The innovation center of East Africa."
        },
        leadership: {
          title: "Our Leadership",
          mayor_title: "The Mayor",
          mayor_name: "Dr. Teshome Adugna",
          mayor_text: "Leading the vision for a sustainable and digitally integrated Sheger City.",
          deputy1_title: "Deputy Mayor",
          deputy1_name: "Mr. Guyo Galgalo",
          deputy1_text: "Focusing on infrastructure development and urban planning excellence.",
          deputy2_title: "Deputy Mayor",
          deputy2_name: "Mr. Gugsa Dejene",
          deputy2_text: "Overseeing social welfare, education, and health service quality.",
          deputy3_title: "Deputy Mayor",
          deputy3_name: "Mr. Hailu Jale",
          deputy3_text: "Managing economic growth and digital administrative transformation."
        },
        services_hub: {
          badge: "Digital Gateway",
          title: "Smart Services Hub",
          view_all: "View All Services",
          land: "Land & Property",
          land_count: "12,000+ Records",
          land_desc: "Apply for land holding certificates and property transfers.",
          business: "Business Portal",
          business_count: "4,500+ Licenses",
          business_desc: "Register businesses and renew trade licenses online.",
          citizen: "Civil Registry",
          citizen_count: "2.5M+ Profiles",
          citizen_desc: "Request birth certificates and official identification.",
          revenue: "Revenue & Bills",
          revenue_count: "Secure Payments",
          revenue_desc: "Pay taxes, utility bills, and municipal service fees.",
          open_portal: "Open Portal",
          one_platform: "One Platform. All Services.",
          one_platform_desc: "Manage your city life from a single dashboard. Track applications, pay bills, and receive official notifications in real-time.",
          create_account: "Create Account",
          security: "Security & Privacy",
          user_name: "John Doe",
          user_badge: "Premium Resident",
          user_status: "Verified",
          app1_title: "Residential Building Permit",
          app1_status: "Approved",
          app2_title: "Digital ID Renewal",
          app2_status: "Processing",
          app3_title: "Trade License App",
          app3_status: "Pending Action"
        },
        mobile_app: {
          badge: "Coming Soon to App Store & Play Store",
          title: "Sheger City",
          subtitle: "Super App",
          desc: "Everything Sheger, in your pocket. Access all e-government services, track applications, and pay utilities with a single tap.",
          feature1: "Smart Payments",
          feature2: "ID Verification",
          feature3: "24/7 Support",
          feature4: "Live Tracking",
          early_access: "Get Early Access",
          app_store: "App Store",
          play_store: "Play Store",
          version: "Smart Portal v1.0",
          live_now: "Live Now"
        },
        investment_hub: {
          badge: "Business & Economy",
          title: "The Investment Hub",
          hub1_title: "Special Economic Zones",
          hub1_text: "Access massive tax incentives and zero-tariff export opportunities.",
          hub2_title: "Global Connectivity",
          hub2_text: "Direct access to the new international transit hub and rail network.",
          hub3_title: "Smart Infrastructure",
          hub3_text: "Plug into a 100% renewable energy grid and city-wide 5G networks.",
          learn_more: "Learn More"
        },
        social: {
          whatsapp: "WhatsApp Support",
          telegram: "Telegram Channel"
        },
        ai: "AI Assistant"
      },
      news_page: {
        title: "Newsroom",
        hero_badge: "Official Newsroom",
        hero_title: "Latest Updates from",
        hero_desc: "Stay informed about city developments, municipal announcements, and major policy updates from the official government portal.",
        search_placeholder: "Search articles...",
        all_news: "All News",
        featured_story: "Featured Story",
        read_full: "Read Full Article",
        todays_top: "Today's Top News",
        explore_more: "Explore More",
        all_announcements: "All Announcements",
        read_story: "Read Story",
        no_results: "No Articles Found",
        no_results_desc: "Try a different search term or category.",
        newsletter_badge: "Stay Connected",
        newsletter_title: "Subscribe to",
        newsletter_desc: "Receive the weekly digest of municipal announcements and city updates directly in your inbox.",
        email_placeholder: "Your email address",
        subscribe_btn: "Join Now",
        categories: {
          all: "All News",
          municipal: "Municipal",
          economy: "Economy",
          infrastructure: "Infrastructure",
          social: "Social Welfare"
        },
        articles: {
          art1: {
            title: "Sheger City Inaugurates New Digital Service Hub",
            excerpt: "The Mayor of Sheger City officially opened the state-of-the-art Digital Service Hub in Buraayyuu, aimed at streamlining administrative processes.",
            date: "May 24, 2024",
            readTime: "5 min read"
          },
          art2: {
            title: "New Road Project to Connect Sabbataa and Sulultaa",
            excerpt: "A major infrastructure project has been announced to build a 45km high-speed road connecting the key industrial zones.",
            date: "May 22, 2024",
            readTime: "3 min read"
          },
          art3: {
            title: "Annual Economic Summit Highlights Growth Potential",
            excerpt: "Economists and city officials gathered to discuss the unprecedented growth of Sheger City as a regional economic powerhouse.",
            date: "May 20, 2024",
            readTime: "8 min read"
          },
          art4: {
            title: "New Green Spaces and Parks Initiative Launched",
            excerpt: "The 'Green Sheger' initiative aims to create 50 new public parks and recreational spaces across all sub-cities by 2026.",
            date: "May 18, 2024",
            readTime: "4 min read"
          }
        }
      },
      services_page: {
        title: "E-Services Portal",
        hero_badge: "Official E-Service Portal",
        hero_title: "Sheger City",
        hero_subtitle: "Smart Services",
        hero_desc: "Access city administrative services, pay bills, and track applications through our unified digital gateway.",
        search_placeholder: "What service are you looking for today?",
        search_btn: "Search Portal",
        popular_title: "Popular Services",
        view_all: "View All Services",
        view_details: "View Details",
        features: {
          secure: { label: "Secure & Reliable", desc: "Your data is protected and secure." },
          easy: { label: "Easy Process", desc: "Simple steps to complete your applications." },
          track: { label: "Track Application", desc: "Track your application at every step." },
          support: { label: "Support", desc: "We are here to help you anytime." }
        },
        categories: {
          all: "All Services",
          business: "Business & Economy",
          civil: "Civil Registry",
          land: "Land & Construction",
          utilities: "Utilities & Billing",
          transport: "Transport",
          employment: "Employment"
        },
        list: {
          trade_license: {
            title: "Trade License",
            desc: "Apply for a new or renewal trade license for your business.",
            time: "3-5 Days",
            price: "500 ETB"
          },
          birth_certificate: {
            title: "Birth Certificate",
            desc: "Request a new or replacement birth certificate.",
            time: "1-2 Days",
            price: "50 ETB"
          },
          land_certificate: {
            title: "Land Holding Certificate",
            desc: "Apply for land holding certificate.",
            time: "5-7 Days",
            price: "300 ETB"
          },
          water_bill: {
            title: "Pay Water Bill",
            desc: "Pay your monthly water consumption bill online.",
            time: "Instant",
            price: "Varies"
          },
          vehicle_reg: {
            title: "Vehicle Registration",
            desc: "Register a new vehicle or renew vehicle documents.",
            time: "3-7 Days",
            price: "1,200 ETB"
          },
          employment_permit: {
            title: "Employment Permit",
            desc: "Apply for employment permit for foreign nationals.",
            time: "5-10 Days",
            price: "500 ETB"
          },
          building_permit: {
            title: "Building Permit",
            desc: "Apply for construction or building permit.",
            time: "7-14 Days",
            price: "1,000 ETB"
          },
          business_reg: {
            title: "Business Registration",
            desc: "Register your business in Sheger City.",
            time: "2-3 Days",
            price: "500 ETB"
          }
        }
      },
      service_detail: {
        back: "Service Directory",
        apply_online: "Complete your application entirely online through our secure administrative gateway.",
        start_app: "Start Application",
        processing_time: "Processing Time",
        service_fee: "Service Fee",
        version: "Version",
        last_updated: "Last Updated",
        summary: "Service Summary",
        apply_btn: "Apply Online Now",
        favorites: "Add to Favorites",
        req_docs: "Required Documents",
        need_help: "Need Assistance?",
        support_desc: "Our support team is available during office hours.",
        call: "Call Support",
        email: "Email Us",
        hours: "Working Hours",
        description: "Description",
        process: "Process & Steps",
        important_note: "Important Note",
        important_desc: "Please ensure all documents are original and valid to avoid delays.",
        tabs: {
          overview: "Overview",
          steps: "Steps",
          docs: "Documents",
          related: "Related"
        },
        services_data: {
          trade_license: {
            title: "Trade License",
            category: "Business & Economy",
            description: "This service enables businesses to obtain or renew their trade license issued by Sheger City Administration.",
            status: "Active",
            process: [
              { step: 1, title: "Application Submission", office: "Revenue Office", info: "Submit your application form.", location: "2nd Floor" },
              { step: 2, title: "Payment", office: "Cashier", info: "Pay fee.", location: "1st Floor" }
            ],
            docs: [
              { name: "National ID", type: "PDF/JPG" },
              { name: "Business Reg", type: "PDF" }
            ]
          }
        }
      },
      contact: {
        hero_title: "Get in Touch",
        hero_desc: "We are here to help. Contact us for any inquiries or support regarding our services.",
        call_us: "Call Us",
        mon_fri: "Mon–Fri",
        email_us: "Email Us",
        message_success_desc: "Reply within 24 hours",
        visit_us: "Visit Us",
        location_badge: "Our Location",
        location_title: "Find Our Main Office",
        location_desc: "The Sheger City Administration Headquarters is located in the Legetafo-Legedadi area — easily accessible from the Addis Ababa outer ring road.",
        open_maps: "Open in Google Maps",
        message_badge: "Send a Message",
        message_title: "We'd Love to Hear From You",
        message_success: "Message Sent!",
        form: {
          another: "Send Another",
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          subject: "Subject",
          message: "Your Message",
          send: "Send Message"
        },
        office_network: "Office Network",
        office_network_title: "Our Office Locations",
        offices: {
          main: {
            name: "Main City Administration",
            address: "Legetafo-Legedadi, Sheger City",
            hours: "Mon–Fri: 8:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM"
          },
          citizens: {
            name: "Citizens Services Centre",
            address: "Sululta Town, Sheger City",
            hours: "Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM"
          },
          digital: {
            name: "Digital Services Hub",
            address: "Burayu, Sheger City",
            hours: "Mon–Fri: 8:00 AM – 8:00 PM\nSat–Sun: 10:00 AM – 4:00 PM"
          }
        }
      },
      footer: {
        about_title: "Sheger City",
        about_desc: "Your digital gateway to efficient, transparent government services.",
        quick_links: "Quick Links",
        services: "Services",
        contact: "Contact",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        accessibility: "Accessibility"
      },
      about_page: {
        overview_badge: "City Overview",
        overview_title: "A City Built for People",
        overview_p1: "Sheger City is a rapidly growing metropolitan area established to serve the communities surrounding Addis Ababa. With a commitment to efficient, transparent, and citizen-centered governance, Sheger is redefining what a modern Ethiopian city can be.",
        overview_p2: "Spanning 12 sub-cities and home to over 3 million residents, the city offers comprehensive services in land administration, health, transport, education, and business development — all increasingly accessible through digital platforms.",
        explore_subcities: "Explore Sub-Cities",
        vision_badge: "Direction & Purpose",
        vision_title: "Vision & Mission",
        our_vision: "Our Vision",
        vision_text: "To be a leading smart city that provides world-class services, promotes sustainable development, and ensures the well-being and prosperity of all citizens across every sub-city.",
        our_mission: "Our Mission",
        mission_text: "To deliver efficient, transparent, and accessible government services through digital innovation while fostering economic growth, social equity, and environmental sustainability.",
        journey_badge: "Our Journey",
        journey_title: "History of Sheger",
        milestones_badge: "Key Milestones",
        milestones_title: "What We've Achieved",
        get_involved: "Get Involved",
        future_title: "Be Part of Sheger's Future",
        future_desc: "Whether you are a resident, investor, or visitor — Sheger City has a place for you. Explore our services and connect with your city government today.",
        contact_btn: "Contact the City",
        timeline: {
          t1_year: "2021",
          t1_title: "Sheger City Established",
          t1_desc: "The city was officially established as a new administrative entity, separating from Oromia Special Zone and encompassing towns previously surrounding Addis Ababa.",
          t2_year: "2022",
          t2_title: "First City Administration",
          t2_desc: "The first elected city administration was formed, laying the groundwork for transparent governance, digital services, and citizen-first policies.",
          t3_year: "2023",
          t3_title: "Smart City Initiative Launch",
          t3_desc: "Sheger launched its digital transformation program — digitizing land registration, business licensing, and public health services across all sub-cities.",
          t4_year: "2024",
          t4_title: "Digital Portal Goes Live",
          t4_desc: "The Sheger City Digital Government Portal launched, giving residents 24/7 access to over 30 government services from any device, anywhere.",
          t5_year: "2025",
          t5_title: "Expansion & AI Integration",
          t5_desc: "The city expanded its service zones and integrated AI-powered tools including smart traffic management, predictive maintenance, and this very AI assistant."
        },
        achievements: {
          a1_title: "Digital Transformation",
          a1_desc: "of all government services successfully digitized and accessible online.",
          a2_title: "Green City Initiative",
          a2_desc: "trees planted across the city as part of the urban greening campaign.",
          a3_title: "Citizen Satisfaction",
          a3_desc: "satisfaction rating recorded across all public services surveys.",
          a4_title: "Infrastructure Projects",
          a4_desc: "active infrastructure projects improving roads, utilities, and public spaces.",
          a5_title: "Schools Built",
          a5_desc: "new schools and learning centers constructed or renovated since 2022.",
          a6_title: "Jobs Created",
          a6_desc: "direct and indirect jobs created through city-led development programs."
        }
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
        galaan_guddaa: "ገላን ጉዳ",
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


      home: {
        hero: {
          badge: "✨ የሲቪክ አገልግሎቶች መፃኢ ዕድል እንኳን ደህና መጡ",
          title: "የመዳረሻ በር ለ",
          city: "የሸገር የወደፊት ተስፋ",
          subtitle: "የሚቀጥለውን ትውልድ የከተማ ኑሮ ይለማመዱ። ሸገር ከተማ ዓለም አቀፍ ደረጃውን የጠበቀ የከተማ ልምድ ለመፍጠር ዘላቂ ፈጠራን ከበለፀገ ባህላዊ ቅርስ ጋር ያጣምራል።",
          explore: "አገልግሎቶችን ያስሱ",
          start_exploring: "ፍለጋ ይጀምሩ"
        },
        highlights: {
          badge: "የወደፊቱን ፍንጭ",
          title: "በሸገር ሰማይና ምድር ይገናኛሉ",
          card1: "የሸገር ብሔራዊ አኳቲክስ ማዕከል እና ታላቁ ቀይ መስመር።",
          card2: "እንደተገለፀው የሸገር ዋና አደባባይ በደመቀ ሕይወት የተሞላ ነው።",
          card3: "ምንም እንኳን ጥንታዊ መንገዶች ተጠብቀው ቢቆዩም፣ ዘመናዊ ልማት እየተስፋፋ ነው።",
          card4: "ምንም እንኳን ሸገር የከተማ መሃል ቢኖረውም ውበቱ ግን ከዚያ በላይ ይርቃል።"
        },
        explore: {
          badge: "ከተማዋን ያግኙ",
          title: "ሸገርን ያስሱ",
          view_map: "ካርታውን ይመልከኑ",
          heritage_badge: "ቅርስ",
          grand_square: "ታላቁ አደባባይ",
          grand_square_desc: "ባህል ከዘመናዊ የህዝብ ቦታዎች ጋር የሚገናኝበትን የሸገር ከተማ ደማቅ ባህላዊ እምብርት ይለማመዱ።",
          eco_parks: "ኢኮ-ፓርኮች",
          eco_parks_desc: "ከ500 ሄክታር በላይ አረንጓዴ ቦታ።",
          tech_hub: "የቴክኖሎጂ ማዕከል",
          tech_hub_desc: "የምስራቅ አፍሪካ የፈጠራ ማዕከል።"
        },
        leadership: {
          title: "አመራራችን",
          mayor_title: "ከንቲባው",
          mayor_name: "ዶ/ር ተሾመ አዱኛ",
          mayor_text: "ለዘላቂ እና በዲጂታል ለተቀናጀች ሸገር ከተማ ራዕይን በመምራት ላይ።",
          deputy1_title: "ምክትል ከንቲባ",
          deputy1_name: "አቶ ጉዮ ጋልጋሎ",
          deputy1_text: "በመሠረተ ልማት ዝርጋታ እና በከተማ ፕላን ጥራት ላይ ትኩረት በማድረግ ላይ።",
          deputy2_title: "ምክትል ከንቲባ",
          deputy2_name: "አቶ ጉግሳ ደጀኔ",
          deputy2_text: "የማህበራዊ ደህንነትን፣ ትምህርትን እና የጤና አገልግሎት ጥራትን በመቆጣጠር ላይ።",
          deputy3_title: "ምክትል ከንቲባ",
          deputy3_name: "አቶ ሀይሉ ጃሌ",
          deputy3_text: "የኢኮኖሚ እድገትን እና የዲጂታል አስተዳደር ሽግግርን በማስተባበር ላይ።"
        },
        services_hub: {
          badge: "ዲጂታል መግቢያ",
          title: "የስማርት አገልግሎቶች ማዕከል",
          view_all: "ሁሉንም አገልግሎቶች ይመልከቱ",
          land: "መሬት እና ንብረት",
          land_count: "12,000+ መረጃዎች",
          land_desc: "የመሬት ይዞታ ማረጋገጫ እና የንብረት ዝውውር ማመልከቻ ያስገቡ።",
          business: "የንግድ ፖርታል",
          business_count: "4,500+ ፈቃዶች",
          business_desc: "ንግድዎን ይመዝግቡ እና የንግድ ፈቃድዎን በመስመር ላይ ያድሱ።",
          citizen: "የሲቪል ምዝገባ",
          citizen_count: "2.5M+ ግለሰቦች",
          citizen_desc: "የልደት የምስክር ወረቀት እና ኦፊሴላዊ መታወቂያ ይጠይቁ።",
          revenue: "ገቢዎች እና ክፍያዎች",
          revenue_count: "ደህንነቱ የተጠበቀ ክፍያ",
          revenue_desc: "ግብሮችን፣ የፍጆታ ሂሳቦችን እና የማዘጋጃ ቤት አገልግሎት ክፍያዎችን ይክፈሉ።",
          open_portal: "ፖርታሉን ይክፈቱ",
          one_platform: "አንድ መድረክ። ሁሉም አገልግሎቶች።",
          one_platform_desc: "የከተማ ህይወትዎን ከአንድ ዳሽቦርድ ያስተዳድሩ። ማመልከቻዎችን ይከታተሉ፣ ክፍያዎችን ይክፈሉ እና ኦፊሴላዊ ማሳወቂያዎችን በቅጽበት ያግኙ።",
          create_account: "መለያ ይፍጠሩ",
          security: "ደህንነት እና ግላዊነት",
          user_name: "ጆን ዶ",
          user_badge: "ፕሪሚየም ነዋሪ",
          user_status: "የተረጋገጠ",
          app1_title: "የመኖሪያ ቤት ግንባታ ፈቃድ",
          app1_status: "የጸደቀ",
          app2_title: "የዲጂታል መታወቂያ እድሳት",
          app2_status: "በሂደት ላይ",
          app3_title: "የንግድ ፈቃድ ማመልከቻ",
          app3_status: "እርምጃ የሚፈልግ"
        },
        mobile_app: {
          badge: "በቅርቡ በApp Store እና Play Store",
          title: "ሸገር ከተማ",
          subtitle: "ሱፐር አፕ",
          desc: "ሁሉም የሸገር አገልግሎቶች በኪስዎ ውስጥ። ሁሉንም የኢ-መንግስት አገልግሎቶችን ያግኙ፣ ማመልከቻዎችን ይከታተሉ እና የፍጆታ ክፍያዎችን በአንድ ጠቅታ ይክፈሉ።",
          feature1: "ብልህ ክፍያዎች",
          feature2: "የመታወቂያ ማረጋገጫ",
          feature3: "24/7 ድጋፍ",
          feature4: "የቀጥታ ክትትል",
          early_access: "ቀደምት መዳረሻ ያግኙ",
          app_store: "App Store",
          play_store: "Play Store",
          version: "ስማርት ፖርታል v1.0",
          live_now: "አሁን ቀጥታ"
        },
        investment_hub: {
          badge: "ቢዝነስ እና ኢኮኖሚ",
          title: "የኢንቨስትመንት ማዕከል",
          hub1_title: "ልዩ የኢኮኖሚ ቀጠናዎች",
          hub1_text: "ከፍተኛ የግብር ማበረታቻዎችን እና ከቀረጥ ነፃ የወጪ ንግድ ዕድሎችን ያግኙ።",
          hub2_title: "ዓለም አቀፍ ትስስር",
          hub2_text: "ወደ አዲሱ ዓለም አቀፍ የትራንዚት ማዕከል እና የባቡር መስመር ቀጥታ መዳረሻ።",
          hub3_title: "ስማርት መሰረተ ልማት",
          hub3_text: "ከ100% ታዳሽ ኃይል እና ከተማ አቀፍ የ5G ኔትወርኮች ጋር ይገናኙ።",
          learn_more: "ተጨማሪ ይወቁ"
        },
        social: {
          whatsapp: "የዋትስአፕ ድጋፍ",
          telegram: "የቴሌግራም ቻናል"
        },
        ai: "የ AI ረዳት"
      },
      news_page: {
        title: "የዜና ክፍል",
        hero_badge: "ይፋዊ የዜና ክፍል",
        hero_title: "የቅርብ ጊዜ መረጃዎች ከ",
        hero_desc: "ስለ ከተማ ልማት፣ የማዘጋጃ ቤት ማስታወቂያዎች እና ዋና ዋና የፖሊሲ ማሻሻያዎች ከኦፊሴላዊው የመንግስት ፖርታል መረጃ ያግኙ።",
        search_placeholder: "ጽሑፎችን ይፈልጉ...",
        all_news: "ሁሉም ዜናዎች",
        featured_story: "ተለይቶ የቀረበ ታሪክ",
        read_full: "ሙሉውን ጽሑፍ ያንብቡ",
        todays_top: "የዛሬው ምርጥ ዜና",
        explore_more: "ተጨማሪ ያስሱ",
        all_announcements: "ሁሉም ማስታወቂያዎች",
        read_story: "ታሪኩን ያንብቡ",
        no_results: "ምንም ጽሑፎች አልተገኙም",
        no_results_desc: "ሌላ የፍለጋ ቃል ወይም ምድብ ይሞክሩ።",
        newsletter_badge: "እንደተገናኙ ይቆዩ",
        newsletter_title: "ሰብስክራይብ ያድርጉ ለ",
        newsletter_desc: "ሳምንታዊ የማዘጋጃ ቤት ማስታወቂያዎችን እና የከተማ ማሻሻያዎችን በቀጥታ በኢሜልዎ ያግኙ።",
        email_placeholder: "የእርስዎ የኢሜል አድራሻ",
        subscribe_btn: "አሁኑኑ ይቀላቀሉ",
        categories: {
          all: "ሁሉም ዜናዎች",
          municipal: "ማዘጋጃ ቤታዊ",
          economy: "ኢኮኖሚ",
          infrastructure: "መሰረተ ልማት",
          social: "ማህበራዊ ደህንነት"
        },
        articles: {
          art1: {
            title: "የሸገር ከተማ አዲስ የዲጂታል አገልግሎት ማዕከል መረቀ",
            excerpt: "የሸገር ከተማ ከንቲባ የአስተዳደር ሂደቶችን ለማቀላጠፍ ያለመውን ዘመናዊ የዲጂታል አገልግሎት ማዕከል በቡራዩ በይፋ ከፈቱ።",
            date: "ግንቦት 16 ቀን 2016",
            readTime: "የ5 ደቂቃ ንባብ"
          },
          art2: {
            title: "ሰበታን እና ሱሉልታን የሚያገናኝ አዲስ የመንገድ ፕሮጀክት",
            excerpt: "ቁልፍ የኢንዱስትሪ ዞኖችን የሚያገናኝ 45 ኪሎ ሜትር ርዝመት ያለው ባለከፍተኛ ፍጥነት መንገድ ለመገንባት የሚያስችል ትልቅ የመሠረተ ልማት ፕሮጀክት ይፋ ሆኗል።",
            date: "ግንቦት 14 ቀን 2016",
            readTime: "የ3 ደቂቃ ንባብ"
          },
          art3: {
            title: "አመታዊ የኢኮኖሚ ጉባኤ የእድገት እምቅ አቅምን አጎላ",
            excerpt: "የሸገር ከተማን ታይቶ የማይታወቅ የክልል ኢኮኖሚ ማዕከልነት እድገት ለመወያየት የምጣኔ ሀብት ባለሙያዎች እና የከተማው ባለስልጣናት ተሰብስበዋል።",
            date: "ግንቦት 12 ቀን 2016",
            readTime: "የ8 ደቂቃ ንባብ"
          },
          art4: {
            title: "አዲስ የአረንጓዴ ቦታዎች እና የፓርኮች ተነሳሽነት ተጀመረ",
            excerpt: "የ'አረንጓዴ ሸገር' ተነሳሽነት እስከ 2018 ዓ.ም ድረስ በሁሉም ክፍለ ከተሞች 50 አዳዲስ የህዝብ መናፈሻዎችን እና የመዝናኛ ቦታዎችን ለመፍጠር ያለመ ነው።",
            date: "ግንቦት 10 ቀን 2016",
            readTime: "የ4 ደቂቃ ንባብ"
          }
        }
      },
      services_page: {
        title: "የኢ-አገልግሎት ፖርታል",
        hero_badge: "ኦፊሴላዊ የኢ-አገልግሎት ፖርታል",
        hero_title: "ሸገር ከተማ",
        hero_subtitle: "ስማርት አገልግሎቶች",
        hero_desc: "የከተማ አስተዳደር አገልግሎቶችን ያግኙ፣ ሂሳቦችን ይክፈሉ እና ማመልከቻዎችን በእኛ በተቀናጀ ዲጂታል መግቢያ ይከታተሉ።",
        search_placeholder: "ዛሬ ምን ዓይነት አገልግሎት እየፈለጉ ነው?",
        search_btn: "ፖርታሉን ይፈልጉ",
        popular_title: "ታዋቂ አገልግሎቶች",
        view_all: "ሁሉንም አገልግሎቶች ይመልከቱ",
        view_details: "ዝርዝሮችን ይመልከቱ",
        features: {
          secure: { label: "ደህንነቱ የተጠበቀ እና አስተማማኝ", desc: "የእርስዎ ውሂብ የተጠበቀ እና ደህንነቱ የተጠበቀ ነው።" },
          easy: { label: "ቀላል ሂደት", desc: "ማመልከቻዎችዎን ለማጠናቀቅ ቀላል ደረጃዎች።" },
          track: { label: "ማመልከቻን ይከታተሉ", desc: "ማመልከቻዎን በእያንዳንዱ ደረጃ ይከታተሉ።" },
          support: { label: "ድጋፍ", desc: "በማንኛውም ጊዜ እርስዎን ለመርዳት እዚህ መገኘት እንችላለን።" }
        },
        categories: {
          all: "ሁሉም አገልግሎቶች",
          business: "ንግድ እና ኢኮኖሚ",
          civil: "የሲቪል ምዝገባ",
          land: "መሬት እና ግንባታ",
          utilities: "መገልገያዎች እና ክፍያ",
          transport: "ትራንስፖርት",
          employment: "ቅጥር"
        },
        list: {
          trade_license: {
            title: "የንግድ ፈቃድ",
            desc: "ለንግድዎ አዲስ ወይም የታደሰ የንግድ ፈቃድ ያመልክቱ።",
            time: "ከ3-5 ቀናት",
            price: "500 ETB"
          },
          birth_certificate: {
            title: "የልደት የምስክር ወረቀት",
            desc: "አዲስ ወይም ምትክ የልደት የምስክር ወረቀት ይጠይቁ።",
            time: "ከ1-2 ቀናት",
            price: "50 ETB"
          },
          land_certificate: {
            title: "የመሬት ይዞታ ማረጋገጫ",
            desc: "ለየመሬት ይዞታ ማረጋገጫ የምስክር ወረቀት ያመልክቱ።",
            time: "ከ5-7 ቀናት",
            price: "300 ETB"
          },
          water_bill: {
            title: "የውሃ ክፍያ ይክፈሉ",
            desc: "የወርሃዊ የውሃ ፍጆታ ሂሳብዎን በመስመር ላይ ይክፈሉ።",
            time: "ፈጣን",
            price: "ይለያያል"
          },
          vehicle_reg: {
            title: "የተሽከርካሪ ምዝገባ",
            desc: "አዲስ ተሽከርካሪ ያስመዝግቡ ወይም የተሽከርካሪ ሰነዶችን ያድሱ።",
            time: "ከ3-7 ቀናት",
            price: "1,200 ETB"
          },
          employment_permit: {
            title: "የስራ ፈቃድ",
            desc: "ለውጭ አገር ዜጎች የስራ ፈቃድ ያመልክቱ።",
            time: "ከ5-10 ቀናት",
            price: "500 ETB"
          },
          building_permit: {
            title: "የግንባታ ፈቃድ",
            desc: "ለግንባታ ወይም ለህንፃ ፈቃድ ያመልክቱ።",
            time: "ከ7-14 ቀናት",
            price: "1,000 ETB"
          },
          business_reg: {
            title: "የንግድ ምዝገባ",
            desc: "ንግድዎን በሸገር ከተማ ያስመዝግቡ።",
            time: "ከ2-3 ቀናት",
            price: "500 ETB"
          }
        }
      },
      service_detail: {
        back: "የአገልግሎት ማውጫ",
        apply_online: "ማመልከቻዎን ሙሉ በሙሉ ደህንነቱ በተጠበቀው የአስተዳደር መግቢያችን በመስመር ላይ ያጠናቅቁ።",
        start_app: "ማመልከቻ ይጀምሩ",
        processing_time: "የማስኬጃ ጊዜ",
        service_fee: "የአገልግሎት ክፍያ",
        version: "ስሪት",
        last_updated: "ለመጨረሻ ጊዜ የተሻሻለው",
        summary: "የአገልግሎት ማጠቃለያ",
        apply_btn: "አሁኑኑ በመስመር ላይ ያመልክቱ",
        favorites: "ወደ ተወዳጆች ያክሉ",
        req_docs: "አስፈላጊ ሰነዶች",
        need_help: "እርዳታ ይፈልጋሉ?",
        support_desc: "የእኛ የድጋፍ ቡድን በስራ ሰዓት ዝግጁ ነው።",
        call: "ድጋፍ ይደውሉ",
        email: "ኢሜል ይላኩልን",
        hours: "የስራ ሰዓታት",
        description: "መግለጫ",
        process: "ሂደት እና ደረጃዎች",
        important_note: "ጠቃሚ ማሳሰቢያ",
        important_desc: "እባክዎን መዘግየቶችን ለማስወገድ ሁሉም ሰነዶች ዋና እና ትክክለኛ መሆናቸውን ያረጋግጡ።",
        tabs: {
          overview: "አጠቃላይ እይታ",
          steps: "ደረጃዎች",
          docs: "ሰነዶች",
          related: "ተዛማጅ"
        },
        services_data: {
          trade_license: {
            title: "የንግድ ፈቃድ",
            category: "ንግድ እና ኢኮኖሚ",
            description: "ይህ አገልግሎት ንግዶች በሸገር ከተማ አስተዳደር የሚሰጠውን የንግድ ፈቃድ እንዲያገኙ ወይም እንዲያድሱ ያስችላቸዋል።",
            status: "ንቁ",
            process: [
              { step: 1, title: "ማመልከቻ ማስገባት", office: "ገቢዎች ቢሮ", info: "የማመልከቻ ቅጹን ያስገቡ።", location: "2ኛ ፎቅ" },
              { step: 2, title: "ክፍያ", office: "ገንዘብ ያዥ", info: "አስፈላጊውን ክፍያ ይክፈሉ።", location: "1ኛ ፎቅ" }
            ],
            docs: [
              { name: "የብሄራዊ መታወቂያ ቅጂ", type: "PDF, JPG, PNG" },
              { name: "የንግድ ምዝገባ", type: "PDF" }
            ]
          }
        }
      },
      contact: {
        hero_title: "አግኙን",
        hero_desc: "እርስዎን ለመርዳት እዚህ ነን። ስለ አገልግሎቶቻችን ማንኛውንም ጥያቄ ወይም ድጋፍ ለማግኘት ያነጋግሩን።",
        call_us: "ይደውሉልን",
        mon_fri: "ሰኞ - አርብ",
        email_us: "ኢሜል ይላኩልን",
        message_success_desc: "በ24 ሰዓታት ውስጥ ምላሽ እንሰጣለን",
        visit_us: "ይጎብኙን",
        location_badge: "አድራሻችን",
        location_title: "ዋናውን ጽሕፈት ቤታችንን ያግኙ",
        location_desc: "የሸገር ከተማ አስተዳደር ዋና ጽሕፈት ቤት በለገጣፎ-ለገዳዲ አካባቢ ይገኛል — ከአዲስ አበባ የውጭ ቀለበት መንገድ በቀላሉ ይገኛል።",
        open_maps: "በGoogle ካርታዎች ላይ ይክፈቱ",
        message_badge: "መልእክት ይላኩ",
        message_title: "ከእርስዎ መስማት እንወዳለን",
        message_success: "መልእክቱ ተልኳል!",
        form: {
          another: "ሌላ ይላኩ",
          name: "ሙሉ ስም",
          email: "የኢሜል አድራሻ",
          phone: "ስልክ ቁጥር",
          subject: "ጉዳይ",
          message: "መልእክትዎ",
          send: "መልእክት ይላኩ"
        },
        office_network: "የቢሮ አውታረ መረብ",
        office_network_title: "የቢሮ አድራሻዎቻችን",
        offices: {
          main: {
            name: "ዋና ከተማ አስተዳደር",
            address: "ለገጣፎ-ለገዳዲ፣ ሸገር ከተማ",
            hours: "ሰኞ - አርብ: 8:00 ጥዋት - 5:00 ከሰዓት\nቅዳሜ: 9:00 ጥዋት - 1:00 ከሰዓት"
          },
          citizens: {
            name: "የዜጎች አገልግሎት ማዕከል",
            address: "ሱሉልታ ከተማ፣ ሸገር ከተማ",
            hours: "ሰኞ - አርብ: 8:00 ጥዋት - 6:00 ከሰዓት\nቅዳሜ: 9:00 ጥዋት - 2:00 ከሰዓት"
          },
          digital: {
            name: "የዲጂታል አገልግሎቶች ማዕከል",
            address: "ቡራዩ፣ ሸገር ከተማ",
            hours: "ሰኞ - አርብ: 8:00 ጥዋት - 8:00 ማታ\nቅዳሜ - እሑድ: 10:00 ጥዋት - 4:00 ከሰዓት"
          }
        }
      },
      footer: {
        about_title: "ሸገር ከተማ",
        about_desc: "ቀልጣፋ፣ ግልፅ እና ዜጋ-ተኮር የመንግስት አገልግሎቶች ዲጂታል መግቢያ።",
        quick_links: "ፈጣን ሊንኮች",
        services: "አገልግሎቶች",
        contact: "አድራሻ",
        rights: "መብቱ በህግ የተጠበቀ ነው።",
        privacy: "የግላዊነት ፖሊሲ",
        terms: "የአጠቃቀም ውል",
        accessibility: "ተደራሽነት"
      },
      about_page: {
        overview_badge: "የከተማው አጠቃላይ እይታ",
        overview_title: "ለሰዎች የተገነባች ከተማ",
        overview_p1: "ሸገር ከተማ አዲስ አበባን የሚከቡ ማህበረሰቦችን ለማገልገል የተቋቋመች በፍጥነት እያደገች ያለች ሜትሮፖሊታን አካባቢ ናት። ቀልጣፋ፣ ግልጽ እና ዜጋ-ተኮር አስተዳደር ለመዘርጋት ባለው ቁርጠኝነት ሸገር ዘመናዊ የኢትዮጵያ ከተማ ምን መሆን እንዳለባት ዳግም እየተረጎመች ነው።",
        overview_p2: "12 ክፍለ ከተሞችን የምታካትት እና ከ3 ሚሊዮን በላይ ነዋሪዎች መኖሪያ የሆነችው ከተማ በመሬት አስተዳደር፣ በጤና፣ በትራንስፖርት፣ በትምህርት እና በንግድ ልማት ዘርፎች የተሟላ አገልግሎት ትሰጣለች — ሁሉም በዲጂታል አማራጮች እየቀረቡ ይገኛሉ።",
        explore_subcities: "ክፍለ ከተሞችን ያስሱ",
        vision_badge: "አቅጣጫ እና ዓላማ",
        vision_title: "ራዕይ እና ተልዕኮ",
        our_vision: "ራዕያችን",
        vision_text: "ዓለም አቀፍ ደረጃቸውን የጠበቁ አገልግሎቶችን የምትሰጥ፣ ዘላቂ ልማትን የምታበረታታ እና በሁሉም ክፍለ ከተሞች ያሉ ዜጎችን ደህንነት እና ብልጽግና የምታረጋግጥ ግንባር ቀደም ስማርት ከተማ መሆን።",
        our_mission: "ተልዕኳችን",
        mission_text: "የኢኮኖሚ እድገትን፣ ማህበራዊ ፍትሃዊነትን እና የአካባቢ ጥበቃን በማጎልበት በዲጂታል ፈጠራ አማካኝነት ቀልጣፋ፣ ግልጽ እና ተደራሽ የመንግስት አገልግሎቶችን መስጠት።",
        journey_badge: "ጉዟችን",
        journey_title: "የሸገር ታሪክ",
        milestones_badge: "ቁልፍ ክንውኖች",
        milestones_title: "ያከናወናቸው ስኬቶች",
        get_involved: "ይሳተፉ",
        future_title: "የሸገር መፃኢ ዕድል አካል ይሁኑ",
        future_desc: "ነዋሪ፣ ባለሀብት ወይም ጎብኚ ይሁኑ — ሸገር ከተማ ለሁሉም ቦታ አላት። አገልግሎቶቻችንን ያስሱ እና ዛሬ ከከተማዎ አስተዳደር ጋር ይገናኙ።",
        contact_btn: "ከተማውን ያነጋግሩ",
        timeline: {
          t1_year: "2013",
          t1_title: "ሸገር ከተማ ተመሰረተች",
          t1_desc: "ከተማዋ ከአዲስ አበባ ዙሪያ ያሉ ከተሞችን በማካተት እንደ አዲስ አስተዳደራዊ አካል በይፋ ተመሰረተች።",
          t2_year: "2014",
          t2_title: "የመጀመሪያው የከተማ አስተዳደር",
          t2_desc: "የመጀመሪያው የተመረጠ የከተማ አስተዳደር ተመስርቶ ለግልጽ አስተዳደር፣ ለዲጂታል አገልግሎቶች እና ለዜጋ-ተኮር ፖሊሲዎች መሰረት ጥሏል።",
          t3_year: "2015",
          t3_title: "የስማርት ከተማ ተነሳሽነት ጅማሮ",
          t3_desc: "ሸገር የመሬት ምዝገባን፣ የንግድ ፈቃድን እና የህዝብ ጤና አገልግሎቶችን በሁሉም ክፍለ ከተሞች ዲጂታል የማድረግ ፕሮግራም ጀምሯል።",
          t4_year: "2016",
          t4_title: "የዲጂታል ፖርታል ስራ ጀመረ",
          t4_desc: "የሸገር ከተማ ዲጂታል መንግስት ፖርታል ስራ ጀምሮ ነዋሪዎች ከየትኛውም ቦታ ሆነው ከ30 በላይ አገልግሎቶችን 24/7 እንዲያገኙ አድርጓል።",
          t5_year: "2017",
          t5_title: "መስፋፋት እና የ AI ውህደት",
          t5_desc: "ከተማዋ የአገልግሎት ቀጠናዎቿን በማስፋት ስማርት የትራፊክ አስተዳደርን እና ይህንን የ AI ረዳትን ጨምሮ በ AI የሚሰሩ መሳሪያዎችን አስተዋውቃለች።"
        },
        achievements: {
          a1_title: "ዲጂታል ትራንስፎርሜሽን",
          a1_desc: "ከሁሉም የመንግስት አገልግሎቶች ውስጥ በስኬት ዲጂታል ተደርገው በመስመር ላይ የሚገኙ።",
          a2_title: "የአረንጓዴ ከተማ ተነሳሽነት",
          a2_desc: "በከተማዋ አረንጓዴ ልማት ዘመቻ አማካኝነት የተተከሉ ዛፎች።",
          a3_title: "የዜጎች እርካታ",
          a3_desc: "በሁሉም የህዝብ አገልግሎቶች ጥናቶች የተመዘገበ የእርካታ መጠን።",
          a4_title: "የመሰረተ ልማት ፕሮጀክቶች",
          a4_desc: "መንገዶችን፣ መገልገያዎችን እና የህዝብ ቦታዎችን የሚያሻሽሉ ንቁ የመሰረተ ልማት ፕሮጀክቶች።",
          a5_title: "የተገነቡ ትምህርት ቤቶች",
          a5_desc: "ከ2014 ጀምሮ የተገነቡ ወይም የታደሱ አዳዲስ ትምህርት ቤቶች።",
          a6_title: "የተፈጠሩ የስራ እድሎች",
          a6_desc: "በከተማው የልማት ፕሮግራሞች አማካኝነት የተፈጠሩ ቀጥተኛ እና ቀጥተኛ ያልሆኑ የስራ እድሎች።"
        }
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


      home: {
        hero: {
          badge: "✨ Gara fuulduraa tajaajila hawaasaatti baga nagaan dhuftan",
          title: "Karaa Gara",
          city: "Fuuldura Shaggar",
          subtitle: "Jireenya magaalaa dhaloota itti aanuu dhandhamaa. Magaalaan Shaggar kalaqa itti fufiinsa qabu aadaa badhaadhaa waliin qindeessuun muuxannoo magaalaa sadarkaa addunyaa uuma.",
          explore: "Tajaajiloota Sakatta'i",
          start_exploring: "Sakatta'uu Jalqabi"
        },
        highlights: {
          badge: "Fuulduraaf Mul'ata",
          title: "Shaggar keessatti Samiifi Lafa wal quunnamu",
          card1: "Gidduugala Akuwaatiksii Biyyooleessaa Shaggar fi sarara diimaa olka'aa.",
          card2: "Akka mari'atametti, addababayiin guddaan Shaggar jireenya dammaqaa ta'een guutamedha.",
          card3: "Daandiwwan durii eegamanii kan jiran ta'us, misoomni amayyaa saffisaan babal'achaa jira.",
          card4: "Shaggar gidduugala magaalaa kan qabu ta'us, miidhaginni isaa sanaa ol fagaata."
        },
        explore: {
          badge: "Magaalaa Argadhu",
          title: "Shaggar Sakatta'i",
          view_map: "Kaartaa Ilaali",
          heritage_badge: "Aadaa",
          grand_square: "Addababayii Guddaa",
          grand_square_desc: "Bakka aadaan gidduugala hawaasummaa amayyaa waliin wal quunnamu Shaggar keessatti dhandhamaa.",
          eco_parks: "Paarkii Ekoo",
          eco_parks_desc: "Hektaara 500 ol iddoo magariisaa.",
          tech_hub: "Gidduugala Teeknooloojii",
          tech_hub_desc: "Gidduugala kalaqa Afriikaa Bahaa."
        },
        leadership: {
          title: "Aramaraa Keenya",
          mayor_title: "Kantiibaa",
          mayor_name: "Dr. Teshome Adugna",
          mayor_text: "Mul'ata magaalaa Shaggar itti fufiinsa qabduufi karaa dijitaalaa walitti makamte hogganaa jiru.",
          deputy1_title: "Ittaanaa Kantiibaa",
          deputy1_name: "Obbo Guyo Galgalo",
          deputy1_text: "Misooma bu'uura misoomaafi pilaanii magaalaa irratti xiyyeeffachuun hojjetaa jiru.",
          deputy2_title: "Ittaanaa Kantiibaa",
          deputy2_name: "Obbo Gugsa Dejene",
          deputy2_text: "Nageenya hawaasummaa, barnootaafi qulqullina tajaajila fayyaa hordofaa jiru.",
          deputy3_title: "Ittaanaa Kantiibaa",
          deputy3_name: "Obbo Hailu Jale",
          deputy3_text: "Guddina ikoonomiifi jijjiirama bulchiinsa dijitaalaa hoogganaa jiru."
        },
        services_hub: {
          badge: "Kallattii Dijitaalaa",
          title: "Gidduugala Tajaajila Ismaartii",
          view_all: "Tajaajiloota Hunda Ilaali",
          land: "Lafaa fi Qabeenya",
          land_count: "Galmeewwan 12,000+ ",
          land_desc: "Waraqaa ragaa qabiyyee lafaafi dabarsa qabeenyaaf iyyannoo galchaa.",
          business: "Poortaalii Daldalaa",
          business_count: "Hayyama 4,500+",
          business_desc: "Daldala galmeessisuufi hayyama daldalaa onlaayiniin haaromsaa.",
          citizen: "Galmee Lammiilee",
          citizen_count: "Piroofayilii 2.5M+",
          citizen_desc: "Waraqaa ragaa dhalootaafi madda eenyummaa idilee gaafadhaa.",
          revenue: "Galii fi Kaffaltii",
          revenue_count: "Kaffaltii Amansiisaa",
          revenue_desc: "Gabbata, kaffaltii tajaajila uummataafi tajaajila munisipaalaa kaffalaa.",
          open_portal: "Poortaalii Bani",
          one_platform: "Maddee Tokko. Tajaajila Hunda.",
          one_platform_desc: "Jireenya magaalaa keessanii hunda bakka tokkotti hoogganaa. Iyyannoo hordofaa, kaffaltii kaffalaa, akkasumas beeksisa idilee yeroo qabatamaatti argadhaa.",
          create_account: "Horoftee Ijaari",
          security: "Nageenyafi Dhuunfaa",
          user_name: "John Doe",
          user_badge: "Jiraataa Filatamaa",
          user_status: "Mirkanaa'e",
          app1_title: "Hayyama Ijaarsa Mana Jireenyaa",
          app1_status: "Mirkanaa'e",
          app2_title: "Haaromsa ID Dijitaalaa",
          app2_status: "Adeemsa Irra Jira",
          app3_title: "Iyyannoo Hayyama Daldalaa",
          app3_status: "Tarkaanfii Barbaada"
        },
        mobile_app: {
          badge: "Dhiyootti App Store fi Play Store irratti",
          title: "Magaalaa Shaggar",
          subtitle: "Super App",
          desc: "Wanti Shaggar hundi kiisii keessan keessa. Tajaajiloota e-mootummaa hunda argadhaa, iyyannoowwan hordofaa, fi kaffaltiiwwan tajaajilaa kilikii tokkoon kaffalaa.",
          feature1: "Kaffaltii Smart",
          feature2: "Mirkaneessa ID",
          feature3: "Deeggarsa 24/7",
          feature4: "Hordoffii Kallattii",
          early_access: "Dursee Argadhu",
          app_store: "App Store",
          play_store: "Play Store",
          version: "Poortaalii Smart v1.0",
          live_now: "Amma Kallattiin"
        },
        investment_hub: {
          badge: "Daldala fi Ikoonomii",
          title: "Haba Inveestimentii",
          hub1_title: "Zonoota Ikoonomii Addaa",
          hub1_text: "Inseenitivii taaksii guddaa fi carraawwan gurgurtaa ala qaxnaa malee argadhaa.",
          hub2_title: "Walitti Hidhamiinsa Global",
          hub2_text: "Gara wiirtuu tiraanzitii idil-addunyaa haaraa fi sarara baaburaatti kallattiin seenaa.",
          hub3_title: "Bu'uura Misooma Smart",
          hub3_text: "Annisaa 100% haaromfamuu danda'u fi neetworkii 5G magaalaa guutuutti itti hidhamaa.",
          learn_more: "Dabalata Baradhu"
        },
        social: {
          whatsapp: "Deeggarsa WhatsApp",
          telegram: "Chaanaalii Telegram"
        },
        ai: "Gargaaraa AI"
      },
      news_page: {
        title: "Daree Oduu",
        hero_badge: "Daree Oduu Idilee",
        hero_title: "Odeeffannoowwan Haaraa kan",
        hero_desc: "Misooma magaalaa, beeksisa munisipaalaafi fooyya'iinsa qajeelfama gurguddoo poortaalii mootummaa idilee irraa hordofaa.",
        search_placeholder: "Barreeffamoota barbaadi...",
        all_news: "Oduu Hunda",
        featured_story: "Seenaa Addatti Filatame",
        read_full: "Barreeffama Guutuu Dubbisi",
        todays_top: "Oduu Guyyaa Har'aa Filatame",
        explore_more: "Dabalata Sakatta'i",
        all_announcements: "Beeksisa Hunda",
        read_story: "Seenaa Dubbisi",
        no_results: "Barreeffamni Argame Hin Jiru",
        no_results_desc: "Jecha barbachaa ykn ramaddii biraa yaali.",
        newsletter_badge: "Walitti Hidhamanii Turuu",
        newsletter_title: "Galmaa'aa kan",
        newsletter_desc: "Beeksisa munisipaalaafi odeeffannoo magaalaa torbanii kallattiin imeelii keessaniin argadhaa.",
        email_placeholder: "Teessoo imeelii keessanii",
        subscribe_btn: "Amma Makamaa",
        categories: {
          all: "Oduu Hunda",
          municipal: "Munisipaalaa",
          economy: "Ikoonomii",
          infrastructure: "Bu'uura Misoomaa",
          social: "Walafee Hawaasummaa"
        },
        articles: {
          art1: {
            title: "Magaalaan Shaggar Gidduugala Tajaajila Dijitaalaa Haaraa Eebbisiise",
            excerpt: "Kantiibaan Magaalaa Shaggar adeemsa bulchiinsaa si'eessuuf kan kaayyeffate gidduugala tajaajila dijitaalaa amayyaa Buraayyuu keessatti argamu idileetti bananiiru.",
            date: "Caamsaa 16, 2016",
            readTime: "Dubbisa Daq. 5"
          },
          art2: {
            title: "Pirojektiin Daandii Haaraa Sabbataa fi Sulultaa Walitti Hidhu",
            excerpt: "Zonoota industirii furtuu ta'an walitti hidhuuf pirojektiin bu'uura misoomaa guddaan daandii saffisaa kiiloo meetira 45 ijaaruuf beeksifameera.",
            date: "Caamsaa 14, 2016",
            readTime: "Dubbisa Daq. 3"
          },
          art3: {
            title: "Yaa'iin Ikoonomii Waggaa Guddina Magaalichaa Addeesse",
            excerpt: "Hayyoonni ikoonomiifi qondaaltonni magaalaa guddina Magaalaa Shaggar akka gidduugala ikoonomii naannichaatti agarsiisaa jiru irratti mari'achuuf walitti dhufaniiru.",
            date: "Caamsaa 12, 2016",
            readTime: "Dubbisa Daq. 8"
          },
          art4: {
            title: "Injiizaatiiviin Bakkeewwan Magariisaa fi Paarkiilee Haaraa Jalqabame",
            excerpt: "Injiizaatiiviin 'Shaggar Magariisa' hanga bara 2018tti kutaalee magaalaa hunda keessatti paarkiilee uummataafi iddoo boqonnaa haaraa 50 uumuuf kaayyeffata.",
            date: "Caamsaa 10, 2016",
            readTime: "Dubbisa Daq. 4"
          }
        }
      },
      services_page: {
        title: "Poortaalii E-Tajaajilaa",
        hero_badge: "Poortaalii E-Tajaajilaa Idilee",
        hero_title: "Magaalaa Shaggar",
        hero_subtitle: "Tajaajiloota Smart",
        hero_desc: "Tajaajiloota bulchiinsa magaalaa argadhaa, kaffaltiiwwan kaffalaa, fi iyyannoowwan karaa poortaalii keenya isa walitti makame hordofaa.",
        search_placeholder: "Har'a tajaajila akkamii barbaadaa jirtu?",
        search_btn: "Poortaalii Barbaadi",
        popular_title: "Tajaajiloota Beekamoo",
        view_all: "Tajaajiloota Hunda Ilaali",
        view_details: "Zilzila Ilaali",
        features: {
          secure: { label: "Nageenyasafi Amanamaa", desc: "Ragaan keessan eegumsa qaba akkasumas amansiisaadha." },
          easy: { label: "Adeemsa Salphaa", desc: "Iyyannoo keessan xumuruuf tarkaanfiiwwan salphaa." },
          track: { label: "Iyyannoo Hordofaa", desc: "Tarkaanfii hunda irratti iyyannoo keessan hordofaa." },
          support: { label: "Deeggarsa", desc: "Yeroo kamiyyuu isin gargaaruuf as jirra." }
        },
        categories: {
          all: "Tajaajiloota Hunda",
          business: "Daldala fi Ikoonomii",
          civil: "Galmee Siviilii",
          land: "Lafaa fi Ijaarsa",
          utilities: "Tajaajila fi Kaffaltii",
          transport: "Geejjiba",
          employment: "Qaxara"
        },
        list: {
          trade_license: {
            title: "Hayyama Daldalaa",
            desc: "Daldala keessaniif hayyama daldalaa haaraa ykn haaromsaaf iyyadhaa.",
            time: "Guyyaa 3-5",
            price: "500 ETB"
          },
          birth_certificate: {
            title: "Waraqaa Ragaa Dhalootaa",
            desc: "Waraqaa ragaa dhalootaa haaraa ykn bakka bu'aa gaafadhaa.",
            time: "Guyyaa 1-2",
            price: "50 ETB"
          },
          land_certificate: {
            title: "Waraqaa Ragaa Qabiyyee Lafaa",
            desc: "Waraqaa ragaa qabiyyee lafaaf iyyadhaa.",
            time: "Guyyaa 5-7",
            price: "300 ETB"
          },
          water_bill: {
            title: "Kaffaltii Bishaan Kaffali",
            desc: "Kaffaltii fayyadama bishaan ji'aa keessanii onlaayiniin kaffalaa.",
            time: "Battalatti",
            price: "Garaagaradha"
          },
          vehicle_reg: {
            title: "Galmee Konkolaataa",
            desc: "Konkolaataa haaraa galmeessisi ykn ragaalee konkolaataa haaromsi.",
            time: "Guyyaa 3-7",
            price: "1,200 ETB"
          },
          employment_permit: {
            title: "Hayyama Qaxaraa",
            desc: "Lammiilee biyya alaaf hayyama qaxaraaf iyyadhaa.",
            time: "Guyyaa 5-10",
            price: "500 ETB"
          },
          building_permit: {
            title: "Hayyama Ijaarsaa",
            desc: "Ijaarsa gamoo ykn hayyama ijaarsaaf iyyadhaa.",
            time: "Guyyaa 7-14",
            price: "1,000 ETB"
          },
          building_reg: {
            title: "Galmee Daldalaa",
            desc: "Daldala keessan Magaalaa Shaggar keessatti galmeessisaa.",
            time: "Guyyaa 2-3",
            price: "500 ETB"
          }
        }
      },
      service_detail: {
        back: "Kallattii Tajaajilaa",
        apply_online: "Iyyannoo keessan guutummaatti onlaayiniin poortaalii bulchiinsaa keenya isa amansiisaa ta'een xumuraa.",
        start_app: "Iyyannoo Jalqabi",
        processing_time: "Yeroo Hojii",
        service_fee: "Kaffaltii Tajaajilaa",
        version: "Baasii",
        last_updated: "Yeroo Dhumaaf Kan Haaromfame",
        summary: "Cuunfa Tajaajilaa",
        apply_btn: "Amma Onlaayiniin Iyyadhaa",
        favorites: "Gara Filannootti Dabali",
        req_docs: "Ragaalee Barbaachisoo",
        need_help: "Gargaarsa Barbaadduu?",
        support_desc: "Garee deeggarsa keenyaa sa'aatii hojiitti argachuu dandeessu.",
        call: "Deeggarsa Bilbilaa",
        email: "Iimeelii Nuuf Ergaa",
        hours: "Sa'aatii Hojiikkaa",
        description: "Ibsa",
        process: "Adeemsa fi Tarkaanfiiwwan",
        important_note: "Hubachiisa Barbaachisaa",
        important_desc: "Maaloo ragaaleen hundi kan jalqabaafi kan hojjetan ta'uu isaanii mirkaneessaa.",
        tabs: {
          overview: "Ilaalcha Waliigalaa",
          steps: "Tarkaanfiiwwan",
          docs: "Ragaalee",
          related: "Walitti Hidhaman"
        },
        services_data: {
          trade_license: {
            title: "Hayyama Daldalaa",
            category: "Daldala fi Ikoonomii",
            description: "Tajaajilli kun daldaltoonni hayyama daldalaa Bulchiinsa Magaalaa Shaggariin kennamu akka argatan ykn haaromsan dandeessisa.",
            status: "Hojjira",
            process: [
              { step: 1, title: "Iyyannoo Galchuu", office: "Waajjira Galiiwwanii", info: "Unka iyyannoo galchaa.", location: "Fooqii 2ffaa" },
              { step: 2, title: "Kaffaltii", office: "Kaffaltii", info: "Kaffaltii kaffalaa.", location: "Fooqii 1ffaa" }
            ],
            docs: [
              { name: "Waraqaa Eenyummaa", type: "PDF, JPG, PNG" },
              { name: "Galmee Daldalaa", type: "PDF" }
            ]
          }
        }
      },
      contact: {
        hero_title: "Nu Quunnamaa",
        hero_desc: "Isin gargaaruuf as jirra. Gaaffii ykn deeggarsa tajaajila keenya ilaalchisee qabdan kamiyyuuf nu quunnamaa.",
        call_us: "Nuuf Bilbilaa",
        mon_fri: "Wix - Jimaa",
        email_us: "Iimeelii Nuuf Ergaa",
        message_success_desc: "Sa'aatii 24 keessatti deebii ni kennina",
        visit_us: "Nu Daawwadhaa",
        location_badge: "Teessoo Keenya",
        location_title: "Waajjira Muummee Keenya Argadhaa",
        location_desc: "Waajjirri Muummee Bulchiinsa Magaalaa Shaggar naannoo Laga Xaafoo-Laga Daadii keessatti argama — daandii ringii alaa Finfinnee irraa salphaatti qaqqabamuu danda'a.",
        open_maps: "Kaartaa Google irratti Banaa",
        message_badge: "Ergaa Ergaa",
        message_title: "Isin Irraa Dhaga'uuf Ni Hawwina",
        message_success: "Ergaan Ergameera!",
        form: {
          another: "Kan Biraa Ergaa",
          name: "Maqaa Guutuu",
          email: "Teessoo Iimeelii",
          phone: "Lakkoofsa Bilbilaa",
          subject: "Dhimma",
          message: "Ergaa Keessan",
          send: "Ergaa Ergaa"
        },
        office_network: "Cimdaa Waajjiraa",
        office_network_title: "Teessoo Waajjiraalee Keenyaa",
        offices: {
          main: {
            name: "Bulchiinsa Magaalaa Muummee",
            address: "Laga Xaafoo-Laga Daadii, Magaalaa Shaggar",
            hours: "Wix - Jimaa: 8:00 WBD - 5:00 WB\nSanbata: 9:00 WBD - 1:00 WB"
          },
          citizens: {
            name: "Giddugala Tajaajila Lammiilee",
            address: "Magaalaa Sulultaa, Magaalaa Shaggar",
            hours: "Wix - Jimaa: 8:00 WBD - 6:00 WB\nSanbata: 9:00 WBD - 2:00 WB"
          },
          digital: {
            name: "Giddugala Tajaajila Dijitaalaa",
            address: "Buraayyuu, Magaalaa Shaggar",
            hours: "Wix - Jimaa: 8:00 WBD - 8:00 WB\nSan-Dil: 10:00 WBD - 4:00 WB"
          }
        }
      },
      footer: {
        about_title: "Magaalaa Shaggar",
        about_desc: "Karaan dijitaalaa tajaajila mootummaa si'ataa, ifaa fi lammiilee irratti xiyyeeffate argachuuf.",
        quick_links: "Liinkii Saffisaa",
        services: "Tajaajiloota",
        contact: "Quunnamtii",
        rights: "Mirgi hundi seeraan kan eegame.",
        privacy: "Imaammata Dhuunfaa",
        terms: "Haala Ittifayyadamaa",
        accessibility: "Gahumsa"
      },
      about_page: {
        overview_badge: "Hubannoo Walii Gala Magaalaa",
        overview_title: "Magaalaa Namootaaf Ijaarame",
        overview_p1: "Magaalaan Shaggar naannoo metiroopoolitaan saffisaan guddachaa jiruufi hawaasa naannoo Finfinnee jiran tajaajiluuf hundaa'edha. Bulchiinsa si'ataa, ifaafi lammiilee irratti xiyyeeffate diriirsuuf kutannoo qabuun, Shaggar magaalaan Itoophiyaa amayyaa maaltu ta'uu akka qabu lammata ibsaa jirti.",
        overview_p2: "Kutaa magaalaalee 12 kan hammattuufi jiraattota miliyoona 3 ol kan qabdu magaalaan kun, bulchiinsa lafaa, fayyaa, geejjiba, barnootaafi misooma daldalaa keessatti tajaajila guutuu kennaa jirti — hundi isaaniis karaa dijitaalaa dhiyaachaa jiru.",
        explore_subcities: "Kutaa Magaalaalee Sakatta'i",
        vision_badge: "Kallattii fi Kaayyoo",
        vision_title: "Mul'ata fi Ergaa",
        our_vision: "Mul'ata Keenya",
        vision_text: "Magaalaa ismaartii hoggantuu tajaajila sadarkaa addunyaa kennitu, misooma itti fufiinsa qabu jajjabeessituufi nageenya akkasumas badhaadhina lammiilee kutaa magaalaa hunda keessa jiran mirkaneessitu ta'uu.",
        our_mission: "Ergaa Keenya",
        mission_text: "Guddina ikoonomii, haqa hawaasummaafi eegumsa naannoo cimsuun kalaqa dijitaalaatiin tajaajila mootummaa si'ataa, ifaafi dhuqqatamaa ta'e kennuu.",
        journey_badge: "Imala Keenya",
        journey_title: "Seenaa Shaggar",
        milestones_badge: "Milkaayyoota Gurguddoo",
        milestones_title: "Waan Nuti Milkeessine",
        get_involved: "Hirmaadhaa",
        future_title: "Fuuldura Shaggar keessatti Hirmaataa Ta'aa",
        future_desc: "Jiraataa, abbaa qabeenyaa ykn daawwataa yoo taatanis — Magaalaan Shaggar hundaaf iddoo qabdi. Tajaajiloota keenya sakatta'aatii har'uma bulchiinsa magaalaa keessan waliin wal quunnamaa.",
        contact_btn: "Magaalaa Quunnamaa",
        timeline: {
          t1_year: "2013",
          t1_title: "Magaalaan Shaggar Hundaa'e",
          t1_desc: "Magaalichi akka qaama bulchiinsaa haaraatti, magaalota naannoo Finfinnee jiran hammachuun akka idileetti hundaa'e.",
          t2_year: "2014",
          t2_title: "Bulchiinsa Magaalaa Jalqabaa",
          t2_desc: "Bulchiinsi magaalaa filatame inni jalqabaa hundaa'uun, bulchiinsa ifa ta'e, tajaajila dijitaalaafi imaammata lammiidhaaf dursa kennuuf bu'uura kaa'e.",
          t3_year: "2015",
          t3_title: "Eegalama Tajaajila Magaalaa Ismaartii",
          t3_desc: "Shaggar sagantaa jijjiirama dijitaalaa isaa — galmeessa lafaa, hayyama daldalaafi tajaajila fayyaa uummataa kutaa magaalaa hunda keessatti dijitaalessu eegale.",
          t4_year: "2016",
          t4_title: "Poortaaliin Dijitaalaa Hojii Jalqabe",
          t4_desc: "Poortaaliin Mootummaa Dijitaalaa Magaalaa Shaggar hojii jalqabuun, jiraattonni bakka kamiyyuu ta'anii tajaajila mootummaa 30 ol sa'aatii 24/7 akka argatan godhe.",
          t5_year: "2017",
          t5_title: "Babal'achuu fi Walitti Makama AI",
          t5_desc: "Magaalichi naannoo tajaajila isaa babal'isuun meeshaalee AI-n hojjetan kanneen akka to'annoo tiraafikaa ismaartiifi gargaaraa AI kana dabalatee hojii irra oolche."
        },
        achievements: {
          a1_title: "Jijjiirama Dijitaalaa",
          a1_desc: "tajaajiloota mootummaa hunda keessaa milkaayinaan dijitaala ta'anii onlaayiniin argaman.",
          a2_title: "Tarkaanfii Magaalaa Magariisaa",
          a2_desc: "duula magariisummaa magaalaa keessatti kan dhaabaman.",
          a3_title: "Quufinsa Lammiilee",
          a3_desc: "qorannoo tajaajila uummataa hunda irratti quufinsi galmaa'e.",
          a4_title: "Pirojektoota Bu'uura Misoomaa",
          a4_desc: "pirojektoota bu'uura misoomaa hojii irra jiran kanneen daandii, tajaajilootaafi bakkeewwan uummataa fooyyessan.",
          a5_title: "Manneen Barnootaa Ijaaraman",
          a5_desc: "manneen barnootaa haaraafi gidduugalawwan barumsaa bara 2014 irraa eegalee ijaaraman ykn haaromfaman.",
          a6_title: "Carraa Hojii Uumame",
          a6_desc: "carraa hojii kallattiifi al-kallattii sagantaalee misooma magaalaatiin uumame."
        }
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
