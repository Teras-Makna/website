export interface GraphNode {
  id: string;
  label: string;
  category: "inti" | "logika" | "batin" | "ekspresi";
  x: number; // normalized 0..1
  y: number; // normalized 0..1
  shortDesc: string;
  reflection: string;
  keywords: string[];
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
    whatsappCommunity: "https://chat.whatsapp.com/GANTI-DENGAN-LINK-GRUP-TERAS-MAKNA",
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
    ],
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
        x: 0.5,
        y: 0.48,
        shortDesc: "Poros utama seluruh perjumpaan di Teras Makna.",
        reflection:
          "Kesadaran bukan sekadar objek kajian, melainkan ruang hening tempat nalar, rasa, dan karya saling bertemu secara utuh.",
        keywords: ["Consciousness", "Kehadiran", "Jati Diri"],
      },
      {
        id: "neurosains",
        label: "Neurosains",
        category: "logika",
        x: 0.22,
        y: 0.24,
        shortDesc: "Memetakan cara kerja otak, persepsi, dan emosi manusia.",
        reflection:
          "Membantu kita memahami mekanisme biologis di balik pikiran, trauma, kebiasaan, dan pengalaman kontemplatif secara jernih.",
        keywords: ["Otak & Persepsi", "Neuroplastisitas", "Sains Kognitif"],
      },
      {
        id: "filsafat",
        label: "Filsafat",
        category: "batin",
        x: 0.78,
        y: 0.24,
        shortDesc: "Ketajaman bertanya dan keberanian menguji asumsi hidup.",
        reflection:
          "Filsafat di Teras Makna bukan ajang pamer istilah, melainkan pisau jernih untuk membedah keresahan hidup sehari-hari.",
        keywords: ["Nalar Kritis", "Eksistensi", "Etika"],
      },
      {
        id: "spiritualitas",
        label: "Spiritualitas & Sufisme",
        category: "batin",
        x: 0.84,
        y: 0.62,
        shortDesc: "Keluhuran rasa batin dan keterhubungan dengan yang hakiki.",
        reflection:
          "Menghadirkan kedalaman rasa, kerendahan hati, dan pengalaman batin yang membumi dalam laku hidup sehari-hari.",
        keywords: ["Sufisme", "Kontemplasi", "Keluhuran Rasa"],
      },
      {
        id: "seni",
        label: "Seni & Karya",
        category: "ekspresi",
        x: 0.5,
        y: 0.84,
        shortDesc: "Ekspresi otentik pelukis, penulis, pemusik, dan kreator.",
        reflection:
          "Ketika bakat terhubung dengan kesadaran, karya tidak berhenti sebagai hobi—ia menjadi jembatan makna bagi sesama.",
        keywords: ["Musik & Visual", "Sastra", "Ekspresi Diri"],
      },
      {
        id: "sospol",
        label: "Ekonomi & Sospol",
        category: "logika",
        x: 0.16,
        y: 0.62,
        shortDesc: "Membaca realitas sosial dan dampaknya bagi harmoni bersama.",
        reflection:
          "Kesadaran sejati tidak menjauh dari realitas; ia turun tangan membaca struktur sosial dan menghadirkan dampak nyata.",
        keywords: ["Realitas Sosial", "Harmoni", "Dampak Nyata"],
      },
    ] as GraphNode[],
    edges: [
      { from: "kesadaran", to: "neurosains", relation: "Sains memahami kesadaran" },
      { from: "kesadaran", to: "filsafat", relation: "Refleksi eksistensial" },
      { from: "kesadaran", to: "spiritualitas", relation: "Kedalaman batin" },
      { from: "kesadaran", to: "seni", relation: "Manifestasi kreatif" },
      { from: "kesadaran", to: "sospol", relation: "Kesadaran sosial" },
      { from: "neurosains", to: "filsafat", relation: "Filsafat pikiran" },
      { from: "filsafat", to: "spiritualitas", relation: "Kebijaksanaan & rasa" },
      { from: "spiritualitas", to: "seni", relation: "Estetika sakral" },
      { from: "seni", to: "sospol", relation: "Karya berdampak" },
      { from: "sospol", to: "neurosains", relation: "Perilaku kolektif" },
    ] as GraphEdge[],
  },
} as const;
