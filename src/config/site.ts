export interface GraphSubNode {
  id: string;
  label: string;
  shortDesc: string;
  reflection: string;
  keywords: string[];
}

export interface GraphNode {
  id: string;
  label: string;
  category: "inti" | "logika" | "batin" | "penyembuhan" | "ekspresi";
  angleDeg?: number; // radial angle around center for level-1 nodes
  shortDesc: string;
  reflection: string;
  keywords: string[];
  children: GraphSubNode[];
}

export interface GraphEdge {
  from: string;
  to: string;
  relation: string;
}

export const siteConfig = {
  name: "Teras Makna",
  subtitle: "Ruang Refleksi & Kolaborasi",
  domain: "terasmakna.id",
  url: "https://terasmakna.id",
  tagline:
    "Ruang temu lintas generasi, ilmu, dan karya untuk merawat kesadaran hidup.",
  description:
    "Komunitas ruang aman lintas generasi dan lintas bidang yang mempertemukan sains, filsafat, spiritualitas, dan karya seni dalam dialog setara untuk merawat kesadaran hidup.",

  /**
   * Tautan Komunitas & Kontak
   * Ganti placeholder di bawah ini dengan tautan resmi Teras Makna.
   */
  links: {
    whatsappCommunity: "https://chat.whatsapp.com/IJiiPCezbb24PSAjhhNvwv",
    instagram: "https://instagram.com/terasmakna.id",
    email: "halo@terasmakna.id",
    github: "https://github.com/Teras-Makna",
  },

  /**
   * Endpoint Form Waitlist (Opsional)
   * Isi dengan endpoint Formspree (misal: "https://formspree.io/f/xxxxxx")
   * atau biarkan kosong ("") untuk mode preview lokal sementara.
   */
  waitlistEndpoint: "",

  philosophy: {
    teras: {
      title: "Teras",
      essence: "Ruang Terbuka yang Cair & Setara",
      description:
        "Simbol ruang terbuka yang cair, setara, dan hangat tanpa sekat senioritas maupun gelar akademik.",
    },
    makna: {
      title: "Makna",
      essence: "Titik Temu Utuh Kehidupan",
      description:
        "Titik temu antara logika (sains & sosial), kedalaman batin (filsafat & spiritualitas), dan ekspresi diri (seni & karya) untuk memahami kehidupan secara utuh.",
    },
  },

  purpose: {
    title: "Tujuan Utama",
    content:
      "Membangun ruang aman lintas generasi dan lintas bidang yang mengubah wawasan, keresahan hidup, serta bakat/potensi kreatif setiap individu menjadi jati diri yang berkesadaran dan berperan nyata bagi kehidupan.",
  },

  vision: {
    title: "Visi",
    content:
      "Menjadi ekosistem belajar dan bertumbuh bersama yang memadukan ketajaman nalar, keluhuran rasa spiritual, dan keunikan karya seni untuk melahirkan manusia yang utuh dan berkesadaran.",
  },

  missions: [
    {
      number: "01",
      title: "Menyediakan Ruang Dialog Setara",
      description:
        "Menghubungkan anak muda dan para sepuh dalam obrolan membumi berbasis keresahan dan pengalaman hidup nyata.",
      pillar: "Dialog Lintas Generasi",
    },
    {
      number: "02",
      title: "Menjembatani Ilmu & Spiritualitas",
      description:
        "Mempertemukan berbagai sudut pandang (neurosains, filsafat, sufisme, ekonomi, dan sospol) sebagai alat memahami kehidupan secara jernih, bukan ajang pamer kepintaran.",
      pillar: "Sintesis Pengetahuan",
    },
    {
      number: "03",
      title: "Mengasah Bakat Menjadi Jati Diri",
      description:
        "Mewadahi pemuda berbakat (seniman, pelukis, penulis, pemusik) agar potensi unik mereka terhubung dengan kesadaran spiritual dan tidak berhenti sekadar menjadi hobi.",
      pillar: "Ekspresi & Karya",
    },
    {
      number: "04",
      title: "Mendorong Dampak Nyata",
      description:
        "Menerjemahkan hasil refleksi dan kolaborasi lintas bidang menjadi perilaku sehari-hari serta karya yang bermanfaat bagi harmoni masyarakat sekitar.",
      pillar: "Aksi & Harmoni",
    },
  ],

  kopdar: {
    badge: "Aktif Berjalan · Tatap Muka",
    title: "Kopdar & Lingkar Dialog",
    subtitle:
      "Sebelum menjadi platform digital, Teras Makna lahir dan bernapas dari perjumpaan nyata — duduk melingkar, menyeduh percakapan jujur tanpa topeng gelar maupun jarak usia.",
    highlights: [
      {
        label: "Tema Percakapan",
        value: "Kesadaran, Filsafat, Sains & Spiritualitas",
      },
      {
        label: "Format Pertemuan",
        value: "Tatap Muka (Kopdar) & Diskusi Terbuka",
      },
      {
        label: "Suasana Ruang",
        value: "Setara, Cair, Tanpa Sekat Senioritas",
      },
      {
        label: "Identitas Anggota",
        value: "Email Komunitas username@terasmakna.id",
      },
    ],
    memberEmailBenefit: {
      badge: "Identitas Resmi Anggota",
      title: "Dapatkan Email Komunitas Pribadi",
      example: "username@terasmakna.id",
      description:
        "Setiap sahabat yang bergabung bersama Teras Makna berkesempatan mendapatkan alamat email khusus berakhiran @terasmakna.id — sebagai identitas personal untuk korespondensi, publikasi esai, dan kolaborasi lintas karya di dalam ekosistem kami.",
    },
    topics: [
      "Kesadaran & Pikiran Manusia",
      "Neurosains & Refleksi Batin",
      "Filsafat Hidup & Eksistensi",
      "Sufisme & Spiritualitas Membumi",
      "Ekonomi, Sospol & Keresahan Zaman",
      "Seni sebagai Jalan Pulang",
    ],
  },

  ecosystem: [
    {
      id: "ruang-tulis",
      status: "Segera Hadir",
      category: "Platform Publikasi & Esai",
      title: "Ruang Tulis",
      analogy: "Sebuah ruang esai mendalam seperti Medium & Substack",
      description:
        "Platform penulisan independen bagi anggota komunitas dan pemikir lintas disiplin untuk menuangkan refleksi, kajian sains-filsafat, catatan spiritualitas, hingga esai sosial secara tenang tanpa kebisingan algoritma.",
      pillars: ["Esai Panjang & Kurasi", "Newsletter Reflektif", "Dialog Pembaca"],
    },
    {
      id: "ruang-pulih",
      status: "Segera Hadir",
      category: "Aplikasi Penyembuhan Diri & Kesehatan Mental",
      title: "Ruang Pulih",
      analogy: "Pendamping interaktif layaknya Headspace & Fabulous",
      description:
        "Aplikasi interaktif yang memadukan pendekatan neurosains, psikologi kontemplatif, dan kearifan spiritual untuk menemani proses penyembuhan diri, membangun kebiasaan sadar, dan merawat kesehatan mental sehari-hari.",
      pillars: ["Jurnal & Refleksi Terpandu", "Ritual Harian Sadar", "Panduan Regulasi Batin"],
    },
    {
      id: "ruang-karya",
      status: "Segera Hadir",
      category: "Wadah Ekspresi & Kolaborasi Komunitas",
      title: "Ruang Karya",
      analogy: "Galeri hidup bagi seniman, pelukis, penulis & pemusik",
      description:
        "Wadah berekspresi dan berkolaborasi lintas disiplin yang menghubungkan bakat kreatif pemuda dengan kedalaman makna—mengubah karya dari sekadar hobi menjadi kontribusi nyata bagi harmoni sekitar.",
      pillars: ["Pameran & Arsip Karya", "Kolaborasi Lintas Bidang", "Resonansi Komunitas"],
    },
  ],

  graph: {
    nodes: [
      {
        id: "kesadaran",
        label: "Kesadaran",
        category: "inti",
        shortDesc: "Poros utama seluruh perjumpaan di Teras Makna.",
        reflection:
          "Kesadaran bukan sekadar objek kajian, melainkan ruang hening tempat nalar, penyembuhan batin, rasa spiritual, dan karya saling bertemu secara utuh.",
        keywords: ["Consciousness", "Kehadiran Utuh", "Jati Diri"],
        children: [
          {
            id: "kehadiran-utuh",
            label: "Kehadiran Utuh",
            shortDesc: "Hadir penuh di momen kini dengan kejernihan rasa dan nalar.",
            reflection:
              "Latihan berhenti sejenak dari autopilot pikiran untuk menyadari napas, tubuh, dan kenyataan yang sedang berlangsung.",
            keywords: ["Mindfulness", "Hadir Kini", "Keheningan"],
          },
          {
            id: "jati-diri",
            label: "Jati Diri",
            shortDesc: "Mengubah wawasan dan keresahan menjadi keutuhan pribadi.",
            reflection:
              "Bukan sekadar peran sosial atau gelar, melainkan keselarasan antara nilai batin, bakat unik, dan laku hidup sehari-hari.",
            keywords: ["Otentisitas", "Makna Hidup", "Pertumbuhan"],
          },
          {
            id: "dialog-setara",
            label: "Dialog Setara",
            shortDesc: "Ruang aman lintas generasi tanpa sekat senioritas.",
            reflection:
              "Mendengarkan dengan kerendahan hati—tempat anak muda dan para sepuh saling memperkaya perspektif hidup.",
            keywords: ["Lintas Generasi", "Empati", "Ruang Aman"],
          },
        ],
      },
      {
        id: "filsafat",
        label: "Filsafat",
        category: "batin",
        angleDeg: -90,
        shortDesc: "Ketajaman bertanya dan keberanian menguji asumsi hidup.",
        reflection:
          "Filsafat di Teras Makna bukan ajang pamer istilah, melainkan pisau jernih untuk membedah keresahan hidup sehari-hari.",
        keywords: ["Nalar Kritis", "Eksistensi", "Etika"],
        children: [
          {
            id: "eksistensialisme",
            label: "Eksistensialisme",
            shortDesc: "Merawat kebebasan dan tanggung jawab atas makna hidup.",
            reflection:
              "Menghadapi kecemasan, absurditas, dan pilihan hidup secara jujur agar melahirkan keberanian untuk menjadi diri sendiri.",
            keywords: ["Makna", "Kebebasan", "Keberanian"],
          },
          {
            id: "fenomenologi",
            label: "Fenomenologi",
            shortDesc: "Mengamati pengalaman langsung secara jernih tanpa prasangka.",
            reflection:
              "Kembali pada pengalaman sadar sebagaimana ia dialami langsung oleh tubuh dan batin sebelum dibingkai label.",
            keywords: ["Pengalaman Langsung", "Persepsi", "Kejernihan"],
          },
          {
            id: "etika-kebijaksanaan",
            label: "Etika & Kebijaksanaan",
            shortDesc: "Menerjemahkan kejernihan berpikir menjadi laku yang adil.",
            reflection:
              "Kebijaksanaan praktis yang menuntun cara kita bersikap kepada diri sendiri, sesama, dan persoalan zaman.",
            keywords: ["Kebijaksanaan", "Integritas", "Welas Asih"],
          },
        ],
      },
      {
        id: "spiritualitas",
        label: "Spiritualitas & Sufisme",
        category: "batin",
        angleDeg: -30,
        shortDesc: "Keluhuran rasa batin dan keterhubungan dengan yang hakiki.",
        reflection:
          "Menghadirkan kedalaman rasa, kerendahan hati, dan pengalaman batin yang membumi dalam laku hidup sehari-hari.",
        keywords: ["Sufisme", "Kontemplasi", "Keluhuran Rasa"],
        children: [
          {
            id: "sufisme-tazkiyah",
            label: "Sufisme & Tazkiyah",
            shortDesc: "Penjernihan hati dan cinta yang melampaui ego.",
            reflection:
              "Jalan mengenali diri untuk mengenali Sang Hakiki—melepas kesombongan intelektual menuju kelembutan hati.",
            keywords: ["Tazkiyah", "Kerendahan Hati", "Mahabbah"],
          },
          {
            id: "kontemplasi-hening",
            label: "Kontemplasi & Hening",
            shortDesc: "Merawat ruang hening di tengah bisingnya keseharian.",
            reflection:
              "Praktik tafakur, zikir, dan keheningan sadar yang menambatkan batin pada ketenangan yang dalam.",
            keywords: ["Tafakur", "Keheningan", "Ketenangan"],
          },
          {
            id: "kearifan-membumi",
            label: "Kearifan Membumi",
            shortDesc: "Spiritualitas yang hadir dalam perilaku nyata sehari-hari.",
            reflection:
              "Spiritualitas bukan pelarian dari dunia, melainkan daya untuk hadir lebih tulus, sabar, dan bermanfaat bagi sekitar.",
            keywords: ["Laku Hidup", "Kearifan Lokal", "Harmoni"],
          },
        ],
      },
      {
        id: "psikologi",
        label: "Psikologi & Penyembuhan",
        category: "penyembuhan",
        angleDeg: 30,
        shortDesc: "Merawat luka batin, sistem saraf, dan pemulihan diri yang utuh.",
        reflection:
          "Menjembatani psikologi modern dan praktik penyembuhan diri—dari pelepasan trauma somatik (TRE) hingga seni menerima rasa (letting-in) secara sadar.",
        keywords: ["TRE", "Letting-In", "Penyembuhan Diri", "Somatik"],
        children: [
          {
            id: "tre-somatik",
            label: "TRE (Trauma Release)",
            shortDesc: "Pelepasan ketegangan & trauma melalui mekanisme alami tubuh.",
            reflection:
              "Tension & Trauma Releasing Exercises (TRE) membantu sistem saraf melepaskan stres mendalam yang tersimpan di otot dan tubuh secara aman dan alami.",
            keywords: ["TRE", "Somatik", "Pelepasan Stres"],
          },
          {
            id: "letting-in",
            label: "Letting-In",
            shortDesc: "Mengizinkan emosi & luka hadir utuh tanpa penolakan.",
            reflection:
              "Alih-alih memaksa diri cepat-cepat 'melepas', letting-in mengajak kita membuka ruang penerimaan yang hangat agar emosi yang tertahan bisa bernapas dan pulih.",
            keywords: ["Letting-In", "Penerimaan", "Regulasi Emosi"],
          },
          {
            id: "shadow-inner-child",
            label: "Shadow & Inner Child",
            shortDesc: "Mengenali pola luka lama dan mengintegrasikan sisi bayangan.",
            reflection:
              "Berjumpa dengan bagian diri yang lama tersembunyi—melalui refleksi, journaling, dan welas asih—agar tumbuh menjadi pribadi yang merdeka secara emosional.",
            keywords: ["Shadow Work", "Inner Child", "Self-Compassion"],
          },
        ],
      },
      {
        id: "seni",
        label: "Seni & Karya",
        category: "ekspresi",
        angleDeg: 90,
        shortDesc: "Ekspresi otentik pelukis, penulis, pemusik, dan kreator.",
        reflection:
          "Ketika bakat terhubung dengan kesadaran, karya tidak berhenti sebagai hobi—ia menjadi jembatan makna bagi sesama.",
        keywords: ["Musik & Visual", "Sastra", "Ekspresi Diri"],
        children: [
          {
            id: "sastra-esai",
            label: "Sastra & Esai",
            shortDesc: "Merangkai refleksi dan kegelisahan menjadi tulisan bernyawa.",
            reflection:
              "Menulis sebagai jalan menjernihkan pikiran sekaligus meninggalkan jejak percakapan bermakna lintas generasi.",
            keywords: ["Esai", "Puisi", "Ruang Tulis"],
          },
          {
            id: "musik-resonansi",
            label: "Musik & Resonansi",
            shortDesc: "Nada dan irama sebagai bahasa batin yang melampaui kata.",
            reflection:
              "Menjadikan bunyi dan komposisi musik sebagai medium katarsis, kontemplasi, dan perjumpaan rasa.",
            keywords: ["Musik", "Katarsis", "Harmoni"],
          },
          {
            id: "seni-visual",
            label: "Seni Visual & Rupa",
            shortDesc: "Lukisan, ilustrasi, dan simbol sebagai cermin perjalanan batin.",
            reflection:
              "Mewadahi pelukis dan perupa agar karya visual mereka terhubung dengan kedalaman makna dan kesadaran.",
            keywords: ["Lukisan", "Ilustrasi", "Estetika"],
          },
        ],
      },
      {
        id: "sospol",
        label: "Ekonomi & Sospol",
        category: "logika",
        angleDeg: 150,
        shortDesc: "Membaca realitas sosial dan dampaknya bagi harmoni bersama.",
        reflection:
          "Kesadaran sejati tidak menjauh dari realitas; ia turun tangan membaca struktur sosial dan menghadirkan dampak nyata.",
        keywords: ["Realitas Sosial", "Harmoni", "Dampak Nyata"],
        children: [
          {
            id: "ekonomi-bermakna",
            label: "Ekonomi Bermakna",
            shortDesc: "Menyelaraskan kerja, nilai, dan kebermanfaatan sosial.",
            reflection:
              "Memandang ekonomi bukan sekadar angka dan akumulasi, melainkan cara merawat martabat dan kesejahteraan bersama.",
            keywords: ["Keberlanjutan", "Etika Kerja", "Kesejahteraan"],
          },
          {
            id: "ekologi-sosial",
            label: "Ekologi Sosial",
            shortDesc: "Merawat relasi sehat antara komunitas dan masyarakat sekitar.",
            reflection:
              "Menerjemahkan kolaborasi lintas bidang menjadi aksi kecil yang nyata bagi harmoni lingkungan sosial.",
            keywords: ["Komunitas", "Kolaborasi", "Dampak Nyata"],
          },
          {
            id: "kesadaran-kolektif",
            label: "Kesadaran Kolektif",
            shortDesc: "Membaca dinamika zaman secara kritis dan jernih.",
            reflection:
              "Mengurai persoalan sosial-politik dengan kepala dingin dan hati terbuka, bebas dari polarisasi dangkal.",
            keywords: ["Sospol", "Nalar Publik", "Kejernihan"],
          },
        ],
      },
      {
        id: "neurosains",
        label: "Neurosains",
        category: "logika",
        angleDeg: 210,
        shortDesc: "Memetakan cara kerja otak, persepsi, dan emosi manusia.",
        reflection:
          "Membantu kita memahami mekanisme biologis di balik pikiran, trauma, kebiasaan, dan pengalaman kontemplatif secara jernih.",
        keywords: ["Otak & Persepsi", "Neuroplastisitas", "Sains Kognitif"],
        children: [
          {
            id: "neuroplastisitas",
            label: "Neuroplastisitas",
            shortDesc: "Kemampuan otak membentuk pola baru lewat latihan sadar.",
            reflection:
              "Sains membuktikan pikiran dan kebiasaan kita dapat terus bertumbuh serta pulih sepanjang hayat.",
            keywords: ["Kebiasaan Sadar", "Adaptasi Otak", "Pembelajaran"],
          },
          {
            id: "sistem-saraf",
            label: "Sistem Saraf & Vagus",
            shortDesc: "Memahami respons stres tubuh dan jalur menuju rasa aman.",
            reflection:
              "Menjelaskan secara biologis mengapa napas, ketenangan, dan praktik somatik mampu menenangkan sistem saraf.",
            keywords: ["Polivagal", "Regulasi Saraf", "Ketenangan"],
          },
          {
            id: "sains-kesadaran",
            label: "Sains Kesadaran",
            shortDesc: "Menjembatani riset empiris otak dengan pengalaman batin.",
            reflection:
              "Dialog terbuka antara ilmu kognitif mutakhir dan pertanyaan klasik tentang hakikat kesadaran manusia.",
            keywords: ["Kognitif", "Persepsi", "Riset Kesadaran"],
          },
        ],
      },
    ] as GraphNode[],
    edges: [
      { from: "kesadaran", to: "filsafat", relation: "Refleksi eksistensial" },
      { from: "kesadaran", to: "spiritualitas", relation: "Kedalaman batin" },
      { from: "kesadaran", to: "psikologi", relation: "Pemulihan & penerimaan" },
      { from: "kesadaran", to: "seni", relation: "Manifestasi kreatif" },
      { from: "kesadaran", to: "sospol", relation: "Kesadaran sosial" },
      { from: "kesadaran", to: "neurosains", relation: "Sains memahami kesadaran" },
      { from: "neurosains", to: "filsafat", relation: "Filsafat pikiran" },
      { from: "filsafat", to: "spiritualitas", relation: "Kebijaksanaan & rasa" },
      { from: "spiritualitas", to: "psikologi", relation: "Kontemplasi & letting-in" },
      { from: "psikologi", to: "seni", relation: "Katarsis & ekspresi" },
      { from: "seni", to: "sospol", relation: "Karya berdampak" },
      { from: "sospol", to: "neurosains", relation: "Perilaku kolektif" },
      { from: "neurosains", to: "psikologi", relation: "Regulasi saraf & TRE" },
    ] as GraphEdge[],
  },
} as const;
