# 🚀 Next.js Projesi Kurma Rehberi (Çocuklar İçin!)

Merhaba küçük kodcu! Bu rehber ile Next.js öğrenmeye başlayacaksın. Next.js, web sitesi yapmak için kullandığımız süper bir araç!

## 🎯 Bu Rehberde Neler Öğreneceğiz?

- [ ] Bilgisayarımızı Next.js için hazırlamak
- [ ] İlk Next.js projemizi oluşturmak
- [ ] Projemizi çalıştırmak
- [ ] İlk web sayfamızı yapmak

---

## 📋 Gerekli Şeyler (Malzemeler)

Kodlama yapmadan önce, tıpkı resim çizmeye başlamadan önce kalem ve kağıt hazırladığımız gibi, bazı programlara ihtiyacımız var:

### 1. 📱 Node.js İndirmek
Node.js, bilgisayarımızın JavaScript kodlarını anlayabilmesi için gerekli bir program.

**Nasıl İndirilir:**
1. [nodejs.org](https://nodejs.org) sitesine git
2. Yeşil "LTS" yazan butona tıkla (Bu en güvenli versiyon!)
3. İndirdiğin dosyayı çalıştır ve kurulumu tamamla

### 2. 📝 Kod Editörü (VS Code)
Kodlarımızı yazacağımız not defteri gibi bir program.

**Nasıl İndirilir:**
1. [code.visualstudio.com](https://code.visualstudio.com) sitesine git
2. Mavi "Download" butonuna tıkla
3. Kurulumu tamamla

---

## 🛠️ Kurulum Kontrolü

Node.js'in doğru kurulup kurulmadığını kontrol edelim:

### Windows için:
```powershell
# Terminal/PowerShell'i aç (Windows tuşu + R → "powershell" yaz)
node --version
npm --version
```

Bu komutları yazdığında numaralar görürsen (örnek: v18.17.0), kurulum başarılı! 🎉

---

## 🎨 İlk Next.js Projeni Oluştur

### 1. Proje Klasörü Oluştur
Önce projemiz için bir ev (klasör) hazırlayalım:

```powershell
# Masaüstüne git
cd Desktop

# Yeni bir klasör oluştur
mkdir benim-ilk-websitem

# Klasöre gir
cd benim-ilk-websitem
```

### 2. Next.js Projesi Oluştur
Şimdi sihirli komutu kullanacağız:

```powershell
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Bu komut ne yapıyor?**
- `npx create-next-app`: Next.js projesi oluşturur
- `--typescript`: Daha güvenli kod yazmak için
- `--tailwind`: Güzel tasarımlar için
- `--app`: En yeni Next.js özelliklerini kullanır

### 3. Proje Dosyalarını İncele
Projende şu dosyalar oluşacak:

```
benim-ilk-websitem/
├── 📁 src/
│   └── 📁 app/
│       ├── page.tsx (Ana sayfan!)
│       └── layout.tsx (Genel düzen)
├── 📁 public/ (Resimler burada)
├── package.json (Proje bilgileri)
└── README.md (Proje açıklaması)
```

---

## 🚀 Projeni Çalıştır

Artık web siteni çalıştırmaya hazırsın!

```powershell
# Projeni başlat
npm run dev
```

Bu komuttan sonra şunu göreceksin:
```
Local:        http://localhost:3000
```

### Tarayıcıda Aç
1. Web tarayıcını (Chrome, Firefox, Edge) aç
2. Adres çubuğuna `http://localhost:3000` yaz
3. Enter'a bas

🎉 **Tebrikler! İlk Next.js projeni çalıştırdın!**

---

## ✏️ İlk Değişikliği Yap

Şimdi web sitende küçük bir değişiklik yapalım:

### 1. VS Code'da Proje Aç
```powershell
# VS Code'da projeyi aç
code .
```

### 2. Ana Sayfayı Düzenle
`src/app/page.tsx` dosyasını aç ve şunu bul:
```tsx
<h1>Welcome to Next.js!</h1>
```

Bunu şununla değiştir:
```tsx
<h1>Merhaba! Ben [Senin Adın]'in ilk web sitesi!</h1>
```

### 3. Değişikliği Gör
Dosyayı kaydet (Ctrl + S) ve tarayıcıya dön. Sayfa otomatik olarak yenilenecek! 🪄

---

## 🎨 Daha Fazla Özelleştirme

### Sayfa Rengi Değiştir
`src/app/globals.css` dosyasında:
```css
body {
  background-color: lightblue; /* Açık mavi arka plan */
}
```

### Yeni Sayfa Ekle
`src/app/` klasörüne `hakkimda` klasörü oluştur ve içine `page.tsx` dosyası ekle:

```tsx
export default function Hakkimda() {
  return (
    <div>
      <h1>Hakkımda</h1>
      <p>Ben küçük bir kodcuyum! 🚀</p>
    </div>
  );
}
```

Bu sayfaya `http://localhost:3000/hakkimda` adresinden ulaşabilirsin!

---

## 🏁 Proje Durdurma

Çalışmayı bitirdiğinde:

### Terminal'de:
```powershell
# Ctrl + C tuşlarına bas
# Sonra Y harfine bas ve Enter'a tık
```

---

## 🎯 Özet - Ne Öğrendik?

✅ Node.js ve VS Code kurduk
✅ İlk Next.js projemizi oluşturduk
✅ Projemizi çalıştırdık
✅ İlk değişikliğimizi yaptık
✅ Yeni sayfa ekledik

---

## 🔗 Yararlı Linkler

- [Next.js Dokümantasyon](https://nextjs.org/docs) - Daha fazla öğrenmek için
- [React Dokümantasyon](https://react.dev) - Next.js React kullanır
- [Tailwind CSS](https://tailwindcss.com) - Güzel tasarımlar için

---

## 🤔 Sorun Yaşıyorsan?

### Sık Karşılaşılan Sorunlar:

**"node komutu bulunamadı" hatası:**
- Node.js'i yeniden kur
- Bilgisayarı yeniden başlat

**Sayfa yüklenmiyor:**
- Terminal'de proje hala çalışıyor mu kontrol et
- `npm run dev` komutunu tekrar çalıştır

**Kodda hata var:**
- Dosyayı kaydetmeyi unutmuş olabilirsin (Ctrl + S)
- Yazdığın kodda yazım hatası var mı kontrol et

---

## 🎉 Tebrikler!

Artık sen de bir Next.js geliştiricisisin! Bu sadece başlangıç - hayal ettiğin web sitelerini yapabilirsin! 🌟

**Sonraki adımlar:**
- Daha fazla sayfa ekle
- Resimleri projene ekle (`public` klasörüne at)
- Farklı renkler ve tasarımlar dene
- Eğlenceli animasyonlar ekle

**Unutma:** Her büyük geliştirici küçük adımlarla başladı. Sen de çok güzel web siteleri yapacaksın! 🚀

---

> 💡 **İpucu:** Bu rehberi takip ederken takıldığın yerde durakla, sabırla oku ve adım adım ilerle. Kodlama öğrenmek bisiklet sürmeyi öğrenmek gibidir - önce yavaş, sonra hızlı! 🚴‍♀️