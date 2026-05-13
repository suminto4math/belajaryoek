// =====================================================
// DATA DEFAULT BELAJAR YOEK
// File ini berisi data awal. Setelah diedit via admin,
// data tersimpan di localStorage browser pengunjung admin.
// =====================================================

const DEFAULT_DATA = {
  siteConfig: {
    title: "Belajar Yoek",
    tagline: "Platform Belajar Online SD, SMP, SMA",
    description: "Belajar Matematika dan berbagai mata pelajaran dengan mudah dan menyenangkan",
    heroText: "Belajar Lebih Mudah, Lebih Seru!",
    heroSubText: "Platform pembelajaran lengkap untuk SD, SMP, SMA dengan materi, quiz, dan asesmen interaktif.",
    footerText: "Belajar Yoek — Platform Belajar Online Indonesia",
    accentColor: "#6C63FF",
    logoEmoji: "📚"
  },
  menus: [
    {
      id: "sd",
      label: "SD",
      icon: "🏫",
      description: "Materi Sekolah Dasar Kelas 1-6",
      submenus: [
        {
          id: "sd-matematika",
          label: "Matematika",
          parentId: "sd",
          submenus: [
            { id: "sd-mat-k1", label: "Kelas 1", parentId: "sd-matematika" },
            { id: "sd-mat-k2", label: "Kelas 2", parentId: "sd-matematika" },
            { id: "sd-mat-k3", label: "Kelas 3", parentId: "sd-matematika" },
            { id: "sd-mat-k4", label: "Kelas 4", parentId: "sd-matematika" },
            { id: "sd-mat-k5", label: "Kelas 5", parentId: "sd-matematika" },
            { id: "sd-mat-k6", label: "Kelas 6", parentId: "sd-matematika" }
          ]
        },
        {
          id: "sd-lainlain",
          label: "Lain-lain",
          parentId: "sd",
          submenus: [
            { id: "sd-pancasila", label: "Pancasila", parentId: "sd-lainlain" }
          ]
        }
      ]
    },
    {
      id: "smp",
      label: "SMP",
      icon: "🏛️",
      description: "Materi Sekolah Menengah Pertama Kelas 7-9",
      submenus: [
        {
          id: "smp-matematika",
          label: "Matematika",
          parentId: "smp",
          submenus: [
            { id: "smp-mat-k7", label: "Kelas 7", parentId: "smp-matematika" },
            { id: "smp-mat-k8", label: "Kelas 8", parentId: "smp-matematika" },
            { id: "smp-mat-k9", label: "Kelas 9", parentId: "smp-matematika" }
          ]
        }
      ]
    },
    {
      id: "sma",
      label: "SMA",
      icon: "🎓",
      description: "Materi Sekolah Menengah Atas Kelas 10-12",
      submenus: [
        {
          id: "sma-matematika",
          label: "Matematika",
          parentId: "sma",
          submenus: [
            { id: "sma-mat-k10", label: "Kelas 10", parentId: "sma-matematika" },
            { id: "sma-mat-k11", label: "Kelas 11", parentId: "sma-matematika" },
            { id: "sma-mat-k12", label: "Kelas 12", parentId: "sma-matematika" }
          ]
        }
      ]
    },
    {
      id: "kursus",
      label: "Kursus",
      icon: "🌏",
      description: "Kursus Bahasa dan Keterampilan Tambahan",
      submenus: [
        {
          id: "kursus-jepang",
          label: "Bahasa Jepang",
          parentId: "kursus",
          submenus: [
            { id: "kursus-jp-hiragana", label: "Hiragana", parentId: "kursus-jepang" },
            { id: "kursus-jp-katakana", label: "Katakana", parentId: "kursus-jepang" },
            { id: "kursus-jp-l1", label: "Level 1", parentId: "kursus-jepang" },
            { id: "kursus-jp-l2", label: "Level 2", parentId: "kursus-jepang" },
            { id: "kursus-jp-l3", label: "Level 3", parentId: "kursus-jepang" }
          ]
        }
      ]
    },
    {
      id: "tka",
      label: "TKA",
      icon: "📝",
      description: "Tes Kompetensi Akademik SD, SMP, SMA",
      submenus: [
        { id: "tka-sd", label: "SD", parentId: "tka", submenus: [] },
        { id: "tka-smp", label: "SMP", parentId: "tka", submenus: [
          { id: "tka-smp-mat", label: "Matematika", parentId: "tka-smp" },
          { id: "tka-smp-bindo", label: "Bahasa Indonesia", parentId: "tka-smp" }
        ]},
        { id: "tka-sma", label: "SMA", parentId: "tka", submenus: [] }
      ]
    }
  ],
  articles: [
    {
      id: "art-001",
      menuId: "smp-mat-k7",
      title: "Bilangan Bulat",
      type: "materi",
      content: `<h2>Bilangan Bulat</h2>
<p>Bilangan bulat adalah himpunan bilangan yang terdiri dari bilangan negatif, nol, dan bilangan positif.</p>
<h3>Pengertian</h3>
<p>Bilangan bulat dilambangkan dengan huruf <strong>Z</strong> dan dapat ditulis:</p>
<p><strong>Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}</strong></p>
<h3>Operasi Bilangan Bulat</h3>
<ul>
  <li><strong>Penjumlahan:</strong> a + b = b + a (komutatif)</li>
  <li><strong>Pengurangan:</strong> a - b = a + (-b)</li>
  <li><strong>Perkalian:</strong> (+) × (+) = (+), (-) × (-) = (+), (+) × (-) = (-)</li>
  <li><strong>Pembagian:</strong> a ÷ b, di mana b ≠ 0</li>
</ul>
<h3>Contoh Soal</h3>
<p>Hitunglah: -5 + 8 - 3 = ?</p>
<p><strong>Jawab:</strong> -5 + 8 - 3 = 3 - 3 = 0</p>`,
      tags: ["matematika", "bilangan", "smp"],
      createdAt: "2024-01-15",
      published: true
    },
    {
      id: "art-002",
      menuId: "smp-mat-k7",
      title: "Himpunan",
      type: "materi",
      content: `<h2>Himpunan</h2>
<p>Himpunan adalah kumpulan objek yang memiliki sifat yang sama dan dapat didefinisikan dengan jelas.</p>
<h3>Notasi Himpunan</h3>
<p>Himpunan ditulis dengan huruf kapital: A, B, C, ...</p>
<p>Contoh: A = {1, 2, 3, 4, 5}</p>
<h3>Operasi Himpunan</h3>
<ul>
  <li><strong>Gabungan (∪):</strong> A ∪ B = semua anggota A atau B</li>
  <li><strong>Irisan (∩):</strong> A ∩ B = anggota A yang juga di B</li>
  <li><strong>Komplemen (A'):</strong> semua anggota yang tidak di A</li>
  <li><strong>Selisih (-):</strong> A - B = anggota A yang tidak di B</li>
</ul>`,
      tags: ["matematika", "himpunan", "smp"],
      createdAt: "2024-01-20",
      published: true
    },
    {
      id: "art-003",
      menuId: "sma-mat-k10",
      title: "Eksponen dan Logaritma",
      type: "materi",
      content: `<h2>Eksponen dan Logaritma</h2>
<p>Eksponen (pangkat) dan logaritma adalah dua operasi matematika yang saling berkaitan.</p>
<h3>Sifat-sifat Eksponen</h3>
<ul>
  <li>aᵐ × aⁿ = aᵐ⁺ⁿ</li>
  <li>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
  <li>(aᵐ)ⁿ = aᵐⁿ</li>
  <li>a⁰ = 1</li>
  <li>a⁻ⁿ = 1/aⁿ</li>
</ul>
<h3>Logaritma</h3>
<p>Definisi: ᵃlog b = c ⟺ aᶜ = b</p>
<h3>Sifat-sifat Logaritma</h3>
<ul>
  <li>ᵃlog (p × q) = ᵃlog p + ᵃlog q</li>
  <li>ᵃlog (p/q) = ᵃlog p - ᵃlog q</li>
  <li>ᵃlog pⁿ = n × ᵃlog p</li>
</ul>`,
      tags: ["matematika", "eksponen", "logaritma", "sma"],
      createdAt: "2024-02-01",
      published: true
    },
    {
      id: "art-004",
      menuId: "kursus-jp-hiragana",
      title: "Pengenalan Hiragana",
      type: "materi",
      content: `<h2>Pengenalan Hiragana</h2>
<p>Hiragana adalah salah satu sistem penulisan bahasa Jepang yang terdiri dari 46 karakter dasar.</p>
<h3>Vokal Dasar</h3>
<table border="1" style="border-collapse:collapse;width:100%;text-align:center">
  <tr><th>Romaji</th><th>Hiragana</th></tr>
  <tr><td>a</td><td style="font-size:2em">あ</td></tr>
  <tr><td>i</td><td style="font-size:2em">い</td></tr>
  <tr><td>u</td><td style="font-size:2em">う</td></tr>
  <tr><td>e</td><td style="font-size:2em">え</td></tr>
  <tr><td>o</td><td style="font-size:2em">お</td></tr>
</table>
<h3>Tips Menghafal</h3>
<p>Latih menulis setiap karakter minimal 10 kali sehari. Konsistensi adalah kunci!</p>`,
      tags: ["jepang", "hiragana", "bahasa"],
      createdAt: "2024-02-10",
      published: true
    }
  ]
};
