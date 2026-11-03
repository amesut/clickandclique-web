/* Sitenin görünen metinleri.
   NE İŞE YARAR: Tarayıcı dili bu dosyada varsa o dil basılır.
   Yoksa İngilizce basılır. Sayfalar data-i18n ile okur.
   e.html yönlendirme cümleleri de buradan gelir.
   NEDEN VAR: Dil düğmesi yok. Hesap okunmaz. Firebase çağrısı yok.
   Yeni dil: en ve tr yanına aynı anahtarlarla bir blok eklenir.
   Anahtar, tarayıcı kodunun ilk parçasıdır (de-DE -> de). */
(function () {
  "use strict";

  var COPY = {
    en: {
      "skip": "Skip to content",
      "nav.menu": "Menu",
      "nav.aria": "Primary",
      "nav.home": "Home",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.delete": "Delete account",
      "foot.home": "Home",
      "foot.privacy": "Privacy Policy",
      "foot.terms": "Terms of Service",
      "foot.delete": "Delete Account",
      "foot.support": "Support",

      "home.title": "Click & Clique",
      "home.meta": "Click & Clique — discover events in your city, match with people going, and build your social circle.",
      "home.heroAria": "Click and Clique",
      "home.tagline": "Find events in your city, meet people who are going, and turn plans into real nights out.",
      "home.how": "How it works",
      "home.privacyBtn": "Privacy",
      "home.eyebrow": "The app",
      "home.h2": "Events first. People next.",
      "home.lead": "Browse ticketable and user-created events in your city, join what you like, and connect with people who are going — all in one place.",
      "home.f1t": "Events in your city",
      "home.f1b": "Ticketable listings and user-created nights in your city.",
      "home.f2t": "Meet people going",
      "home.f2b": "Connect with others attending the same event.",
      "home.f3t": "Stay in touch",
      "home.f3b": "Message people you connect with and share the night together.",
      "home.ctaTitle": "Need your data removed?",
      "home.ctaBody": "Delete your account in the app, or request deletion from the web.",
      "home.ctaBtn": "Delete account",

      "err.title": "Page not found — Click & Clique",
      "err.h1": "Page not found",
      "err.lead": "That link does not exist. Head home or open privacy / account deletion.",
      "err.home": "Home",
      "err.privacy": "Privacy",

      "sent.title": "Request sent — Click & Clique",
      "sent.eyebrow": "Done",
      "sent.h1": "Request received",
      "sent.lead": "Thanks — your account deletion request was sent. We process web requests within 7 days and will follow up at the email you provided.",
      "sent.home": "Home",
      "sent.privacy": "Privacy Policy",

      "del.title": "Delete Account — Click & Clique",
      "del.meta": "Request deletion of your Click & Clique account and associated personal data.",
      "del.eyebrow": "Your data",
      "del.h1": "Delete your account",
      "del.lead": "Permanently remove your Click & Clique account and associated personal data. The fastest path is inside the app; use the form below if you cannot open it.",
      "del.appTitle": "In the app",
      "del.app1": "Open <strong>Profile</strong> → <strong>Settings</strong>",
      "del.app2": "Tap <strong>Delete Account</strong>",
      "del.app3": "Read any penalty warnings, then confirm with your password",
      "del.appNote": "In-app deletion is immediate after confirmation.",
      "del.webTitle": "Request by web",
      "del.webLead": "Submit the form using the email linked to your account. We process web requests within <strong>7 days</strong> and reply to that address.",
      "del.email": "Account email",
      "del.emailPh": "you@example.com",
      "del.user": "Username (optional)",
      "del.userPh": "Your Click & Clique username",
      "del.message": "Message",
      "del.messageBody": "Please delete my Click & Clique account and associated personal data.",
      "del.note": "This sends a message to our support inbox. Use the same email as your app account so we can verify the request.",
      "del.send": "Send deletion request",
      "del.policy": "Read Privacy Policy",
      "del.whatTitle": "What we delete",
      "del.what1": "Profile, photo, username, devices, and login account",
      "del.what2": "Messages and other personal data tied to your account",
      "del.what3": "Your event participation records",
      "del.whatNote": "If you delete your account while you still have outstanding obligations under App rules, consequences disclosed before in-app deletion may apply. A limited non-identifying signal may be kept so re-registration cannot evade restrictions. See the <a href=\"privacy.html\">Privacy Policy</a> for details.",

      "e.opening": "Opening the event…",
      "e.openApp": "Open in app",
      "e.getApp": "Get the app",
      "e.getBrand": "Get Click & Clique.",
      "e.openEvent": "Open this event in the Click & Clique app.",
      "e.aria": "Open Click and Clique",

      "privacy.title": "Privacy Policy — Click & Clique",
      "privacy.meta": "Privacy Policy for the Click & Clique mobile app.",
      "privacy.eyebrow": "Legal",
      "privacy.h1": "Privacy Policy",
      "privacy.updated": "Last updated: October 27, 2026",
      "privacy.intro": "This Privacy Policy explains how <strong>Click &amp; Clique</strong> (“we”, “us”) collects, uses, and shares information when you use our mobile application and related services (the “App”).",
      "privacy.s1": "1. Who we are",
      "privacy.s1p": "Click &amp; Clique helps people discover ticketable and user-created events in their city and connect with others who are going. For privacy questions, contact <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a>.",
      "privacy.s2": "2. Information we collect",
      "privacy.s2a": "Account & profile",
      "privacy.a1": "Email address and login credentials",
      "privacy.a2": "Username, country, state/city, time zone, birth date, gender, language",
      "privacy.a3": "Optional profile photo",
      "privacy.a4": "Interests and app preferences (for example notifications)",
      "privacy.s2b": "Activity in the App",
      "privacy.b1": "Events you join or create",
      "privacy.b2": "Interactions with other users",
      "privacy.b3": "Messages you send",
      "privacy.b4": "Reviews and ratings you give or receive",
      "privacy.b5": "Device tokens used to deliver notifications you enable",
      "privacy.s2c": "Technical & local data",
      "privacy.c1": "Technical information needed to operate the App (for example device and session data)",
      "privacy.c2": "On-device data used to improve performance",
      "privacy.c3": "Public event listings and similar catalog data, which are not your personal profile",
      "privacy.s3": "3. How we use information",
      "privacy.u1": "Provide and operate the App",
      "privacy.u2": "Keep the product safe and fair (including abuse and spam prevention)",
      "privacy.u3": "Send notifications you enable",
      "privacy.u4": "Improve reliability and performance",
      "privacy.u5": "Comply with law and respond to valid requests",
      "privacy.s4": "4. Where data is stored",
      "privacy.s4p": "We store and process data using cloud service providers that host the App on our behalf. Data may be processed in the regions those providers operate in.",
      "privacy.s5": "5. Sharing",
      "privacy.s5a": "Other users can see information you choose to make visible — for example your username and photo, and content you share with them.",
      "privacy.s5b": "We do not sell your personal information. We use service providers (such as cloud hosting, authentication, and messaging providers) that process data on our behalf to run the App.",
      "privacy.s6": "6. Retention",
      "privacy.s6p": "We keep account and activity data while your account is active. When you delete your account, we delete or anonymize personal data as described below, except limited signals needed for abuse prevention or where law requires retention.",
      "privacy.s7": "7. Account deletion",
      "privacy.s7a": "You can delete your account in the App: <strong>Profile → Settings → Delete Account</strong>. You can also request deletion on the web: <a href=\"delete-account.html\">Delete account page</a>.",
      "privacy.s7b": "When deletion completes, we remove or anonymize personal data such as:",
      "privacy.d1": "Your profile, photo, username reservation, devices, and login account",
      "privacy.d2": "Your messages and other personal data tied to your account",
      "privacy.d3": "Your event participation records",
      "privacy.s7d": "Names shown to others in historical contexts may be replaced with a non-identifying label (for example “Deleted User”).",
      "privacy.s7e": "<strong>Important:</strong> If you delete your account while you still have outstanding obligations under App rules, the App may apply consequences disclosed in the confirmation screens before deletion. A limited non-identifying signal may be retained so the same email cannot evade restrictions by re-registering.",
      "privacy.s8": "8. Your choices",
      "privacy.ch1": "Update city, language, and profile details in Settings / Profile",
      "privacy.ch2": "Control notification preferences in Settings",
      "privacy.ch3": "Manage your activity in the App according to the rules shown there",
      "privacy.ch4": "Delete your account as described above",
      "privacy.s9": "9. Children",
      "privacy.s9p": "The App is not directed to children under the age required by local law to consent to data processing without parental approval. Do not create an account if you do not meet the applicable age requirement.",
      "privacy.s10": "10. Changes",
      "privacy.s10p": "We may update this policy from time to time. We will change the “Last updated” date above and, when appropriate, provide additional notice in the App.",
      "privacy.s11": "11. Contact",
      "privacy.s11p": "Questions or requests: <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a>",

      "terms.title": "Terms of Service — Click & Clique",
      "terms.meta": "Terms of Service for the Click & Clique mobile app.",
      "terms.eyebrow": "Legal",
      "terms.h1": "Terms of Service",
      "terms.updated": "Last updated: October 27, 2026",
      "terms.intro": "These Terms of Service (“Terms”) govern your use of the <strong>Click &amp; Clique</strong> mobile application and related services (the “App”) operated by us (“we”, “us”). By creating an account or using the App, you agree to these Terms. If you do not agree, do not use the App.",
      "terms.privacy": "How we handle personal data is described in our <a href=\"privacy.html\">Privacy Policy</a>.",
      "terms.s1": "1. Who we are",
      "terms.s1p": "Click &amp; Clique helps people discover ticketable and user-created events in their city and connect with others who are going. For questions about these Terms, contact <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a>.",
      "terms.s2": "2. Eligibility",
      "terms.el1": "You must be old enough under the laws of your country to use social networking and messaging services and to agree to these Terms (and at least the minimum age required by applicable store policies in your region).",
      "terms.el2": "You must provide accurate registration information and keep it up to date.",
      "terms.el3": "One person should not create multiple accounts to evade bans, ratings, or penalties.",
      "terms.s3": "3. Accounts",
      "terms.ac1": "You sign up with email and password. You must verify your email to use the App.",
      "terms.ac2": "You are responsible for keeping your password confidential and for activity under your account.",
      "terms.ac3": "You may delete your account in the App (<strong>Profile → Settings → Delete Account</strong>) or via our <a href=\"delete-account.html\">web deletion page</a>.",
      "terms.s4": "4. The service",
      "terms.s4p": "Subject to these Terms, we provide features that may include:",
      "terms.sv1": "Browsing ticketable and user-created events in your city",
      "terms.sv2": "Joining events and connecting with other attendees",
      "terms.sv3": "Messaging other users",
      "terms.sv4": "Reviews and ratings after events, within the limits shown in the App",
      "terms.s4q": "We may change, suspend, or discontinue features. Third-party event listings are provided for discovery only — we do not sell tickets and we do not guarantee that any event will occur as listed.",
      "terms.s5": "5. Acceptable use",
      "terms.s5p": "You agree not to:",
      "terms.ok1": "Harass, threaten, stalk, or scam other users, online or offline",
      "terms.ok2": "Post illegal, hateful, sexual content involving minors, or otherwise prohibited content",
      "terms.ok3": "Impersonate others or misrepresent your identity or age",
      "terms.ok4": "Spam other users",
      "terms.ok5": "Attempt to access other users’ accounts or reverse-engineer the App in order to abuse it",
      "terms.ok6": "Use the App to organize or promote illegal activity",
      "terms.ok7": "Interfere with App infrastructure (scraping at abusive scale, automated bots, etc.)",
      "terms.s5q": "We may remove content, limit features, or suspend or terminate accounts that violate these rules or create safety or integrity risks.",
      "terms.s5z": "<strong>Zero tolerance.</strong> We have zero tolerance for objectionable content and abusive users. This includes harassment, hate speech, sexual content involving minors, scams, and illegal activity. We remove such content and may suspend or terminate accounts without prior notice.",
      "terms.s5r": "Reports submitted in the App (profile, chat, reviews, or community events) or sent to <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a> are reviewed within 24 hours.",
      "terms.s6": "6. Connecting with others and meeting in person",
      "terms.mt1": "Connecting with another user in the App is not a romantic, employment, or safety guarantee.",
      "terms.mt2": "If you meet someone in person, you do so at your own risk. Take normal precautions. We are not responsible for offline conduct of other users.",
      "terms.mt3": "Some actions may be limited by App rules, as shown in the App.",
      "terms.s7": "7. User-created events",
      "terms.ev1": "People who create events are responsible for the accuracy of the details they post and for treating others fairly.",
      "terms.ev2": "Creating, joining, and leaving events may be limited as shown in the App.",
      "terms.ev3": "Removing an event you created may have consequences disclosed before you confirm.",
      "terms.s8": "8. Reviews & ratings",
      "terms.s8p": "Reviews must be honest and related to the shared event experience. How many reviews you can submit may be limited, as shown in the App. Fake, abusive, or retaliatory reviews may be removed, and accounts may be restricted.",
      "terms.s9": "9. Your content",
      "terms.s9a": "You retain rights to content you submit (such as profile photos, messages, and reviews). You grant us a limited license to host, store, display, and transmit that content as needed to operate the App (including to the other users you interact with).",
      "terms.s9b": "You confirm you have the rights to submit that content and that it does not violate law or these Terms.",
      "terms.s10": "10. Our intellectual property",
      "terms.s10p": "The App, branding, logos, and software are owned by us or our licensors. You may not copy, modify, or redistribute them except as allowed by the App stores’ normal use of the installed application.",
      "terms.s11": "11. Fees",
      "terms.s11p": "The App is currently offered without in-app purchases for core features. We may introduce paid features later; if we do, we will describe prices and terms in the App and store listings before you are charged.",
      "terms.s12": "12. Account deletion & penalties",
      "terms.s12p": "Account deletion is described in the <a href=\"privacy.html\">Privacy Policy</a> and in-app confirmation screens. If you delete your account while you still have outstanding obligations under App rules, consequences disclosed before confirmation may apply. A limited non-identifying signal may be retained so the same email cannot evade restrictions by re-registering.",
      "terms.s13": "13. Disclaimers",
      "terms.s13p": "The App is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of uninterrupted service, perfect event data accuracy, or fitness for a particular purpose. Third-party event information may be incomplete or out of date.",
      "terms.s14": "14. Limitation of liability",
      "terms.s14p": "To the fullest extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for losses arising from: other users’ conduct; offline meetings; cancelled or changed events; ticket purchases with third parties; or temporary unavailability of the App. Where liability cannot be excluded, it is limited to the maximum extent allowed by applicable law.",
      "terms.s15": "15. Termination",
      "terms.s15p": "You may stop using the App and delete your account at any time. We may suspend or terminate access if you violate these Terms, create safety risks, or if we discontinue the service. Provisions that by nature should survive (including intellectual property, disclaimers, and liability limits) survive termination.",
      "terms.s16": "16. Changes to these Terms",
      "terms.s16p": "We may update these Terms from time to time. We will change the “Last updated” date above and, when appropriate, provide additional notice in the App. Continued use after the effective date means you accept the updated Terms.",
      "terms.s17": "17. Contact",
      "terms.s17p": "Questions about these Terms: <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a>"
    },
    tr: {
      "skip": "İçeriğe geç",
      "nav.menu": "Menü",
      "nav.aria": "Ana menü",
      "nav.home": "Ana sayfa",
      "nav.privacy": "Gizlilik",
      "nav.terms": "Koşullar",
      "nav.delete": "Hesabı sil",
      "foot.home": "Ana sayfa",
      "foot.privacy": "Gizlilik Politikası",
      "foot.terms": "Kullanım Koşulları",
      "foot.delete": "Hesabı Sil",
      "foot.support": "Destek",

      "home.title": "Click & Clique",
      "home.meta": "Click & Clique — şehrinizdeki etkinlikleri keşfedin, giden insanlarla eşleşin, sosyal çevrenizi büyütün.",
      "home.heroAria": "Click and Clique",
      "home.tagline": "Şehrinizdeki etkinlikleri bulun, giden insanlarla tanışın, planları gerçek gecelere çevirin.",
      "home.how": "Nasıl çalışır",
      "home.privacyBtn": "Gizlilik",
      "home.eyebrow": "Uygulama",
      "home.h2": "Önce etkinlik. Sonra insanlar.",
      "home.lead": "Şehrinizdeki biletli ve kullanıcıların oluşturduğu etkinliklere göz atın, istediğinize katılın ve giden insanlarla bağlantı kurun. Hepsi tek yerde.",
      "home.f1t": "Şehrinizdeki etkinlikler",
      "home.f1b": "Şehrinizdeki biletli listeler ve kullanıcıların oluşturduğu geceler.",
      "home.f2t": "Giden insanlarla tanışın",
      "home.f2b": "Aynı etkinliğe katılan diğer kişilerle bağlantı kurun.",
      "home.f3t": "İletişimde kalın",
      "home.f3b": "Bağlantı kurduğunuz insanlara yazın ve geceyi birlikte geçirin.",
      "home.ctaTitle": "Verileriniz silinsin mi?",
      "home.ctaBody": "Hesabınızı uygulamada silin ya da web üzerinden silme isteği gönderin.",
      "home.ctaBtn": "Hesabı sil",

      "err.title": "Sayfa bulunamadı — Click & Clique",
      "err.h1": "Sayfa bulunamadı",
      "err.lead": "Bu bağlantı yok. Ana sayfaya dönün ya da gizlilik ve hesap silme sayfalarını açın.",
      "err.home": "Ana sayfa",
      "err.privacy": "Gizlilik",

      "sent.title": "İstek gönderildi — Click & Clique",
      "sent.eyebrow": "Tamam",
      "sent.h1": "İstek alındı",
      "sent.lead": "Teşekkürler. Hesap silme isteğiniz gönderildi. Web isteklerini 7 gün içinde işler, yazdığınız e-posta adresinden size döneriz.",
      "sent.home": "Ana sayfa",
      "sent.privacy": "Gizlilik Politikası",

      "del.title": "Hesabı Sil — Click & Clique",
      "del.meta": "Click & Clique hesabınızın ve bağlı kişisel verilerin silinmesini isteyin.",
      "del.eyebrow": "Verileriniz",
      "del.h1": "Hesabınızı silin",
      "del.lead": "Click & Clique hesabınız ve bağlı kişisel verileriniz kalıcı olarak kaldırılır. En hızlı yol uygulamanın içidir. Uygulamayı açamıyorsanız aşağıdaki formu kullanın.",
      "del.appTitle": "Uygulamada",
      "del.app1": "<strong>Profil</strong> → <strong>Ayarlar</strong> ekranını açın",
      "del.app2": "<strong>Hesabı Sil</strong> düğmesine basın",
      "del.app3": "Ceza uyarılarını okuyun, ardından şifrenizle onaylayın",
      "del.appNote": "Uygulamadaki silme, onaydan sonra hemen yapılır.",
      "del.webTitle": "Web üzerinden istek",
      "del.webLead": "Formu, hesabınıza bağlı e-posta ile gönderin. Web isteklerini <strong>7 gün</strong> içinde işler, yanıtı o adrese yazarız.",
      "del.email": "Hesap e-postası",
      "del.emailPh": "siz@ornek.com",
      "del.user": "Kullanıcı adı (isteğe bağlı)",
      "del.userPh": "Click & Clique kullanıcı adınız",
      "del.message": "Mesaj",
      "del.messageBody": "Click & Clique hesabımın ve bağlı kişisel verilerimin silinmesini rica ederim.",
      "del.note": "Bu, destek gelen kutumuza bir mesaj gönderir. İsteği doğrulayabilmemiz için uygulama hesabınızdaki e-postayı kullanın.",
      "del.send": "Silme isteği gönder",
      "del.policy": "Gizlilik Politikasını oku",
      "del.whatTitle": "Neleri sileriz",
      "del.what1": "Profil, fotoğraf, kullanıcı adı, cihazlar ve giriş hesabı",
      "del.what2": "Mesajlar ve hesabınıza bağlı diğer kişisel veriler",
      "del.what3": "Etkinlik katılım kayıtlarınız",
      "del.whatNote": "Uygulama kuralları kapsamında hâlâ yerine getirilmemiş yükümlülükleriniz varken hesabınızı silerseniz, uygulama içi silmeden önce bildirilen sonuçlar uygulanabilir. Yeniden kaydolarak kısıtlamalardan kaçılmaması için kimliği belli etmeyen sınırlı bir işaret tutulabilir. Ayrıntılar için <a href=\"privacy.html\">Gizlilik Politikası</a> sayfasına bakın.",

      "e.opening": "Etkinlik açılıyor…",
      "e.openApp": "Uygulamada aç",
      "e.getApp": "Uygulamayı indir",
      "e.getBrand": "Click & Clique'i indir.",
      "e.openEvent": "Bu etkinliği Click & Clique uygulamasında aç.",
      "e.aria": "Click and Clique uygulamasını aç",

      "privacy.title": "Gizlilik Politikası — Click & Clique",
      "privacy.meta": "Click & Clique mobil uygulamasının gizlilik politikası.",
      "privacy.eyebrow": "Yasal",
      "privacy.h1": "Gizlilik Politikası",
      "privacy.updated": "Son güncelleme: 27 Ekim 2026",
      "privacy.intro": "Bu Gizlilik Politikası, <strong>Click &amp; Clique</strong> (“biz”) mobil uygulamamızı ve ilgili hizmetleri (“Uygulama”) kullandığınızda bilgileri nasıl topladığımızı, kullandığımızı ve paylaştığımızı açıklar.",
      "privacy.s1": "1. Biz kimiz",
      "privacy.s1p": "Click &amp; Clique, insanların şehirlerindeki biletli ve kullanıcıların oluşturduğu etkinlikleri keşfetmesine ve giden diğer kişilerle bağlantı kurmasına yardımcı olur. Gizlilik soruları için <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a> adresine yazın.",
      "privacy.s2": "2. Topladığımız bilgiler",
      "privacy.s2a": "Hesap ve profil",
      "privacy.a1": "E-posta adresi ve giriş bilgileri",
      "privacy.a2": "Kullanıcı adı, ülke, eyalet/şehir, saat dilimi, doğum tarihi, cinsiyet, dil",
      "privacy.a3": "İsteğe bağlı profil fotoğrafı",
      "privacy.a4": "İlgi alanları ve uygulama tercihleri (örneğin bildirimler)",
      "privacy.s2b": "Uygulamadaki etkinlik",
      "privacy.b1": "Katıldığınız veya oluşturduğunuz etkinlikler",
      "privacy.b2": "Diğer kullanıcılarla etkileşimleriniz",
      "privacy.b3": "Gönderdiğiniz mesajlar",
      "privacy.b4": "Verdiğiniz veya aldığınız değerlendirmeler ve puanlar",
      "privacy.b5": "Açtığınız bildirimleri iletmek için kullanılan cihaz belirteçleri",
      "privacy.s2c": "Teknik ve yerel veriler",
      "privacy.c1": "Uygulamayı çalıştırmak için gereken teknik bilgiler (örneğin cihaz ve oturum verileri)",
      "privacy.c2": "Performansı iyileştirmek için cihazda tutulan veriler",
      "privacy.c3": "Herkese açık etkinlik listeleri ve benzeri katalog verileri; bunlar kişisel profiliniz değildir",
      "privacy.s3": "3. Bilgileri nasıl kullanırız",
      "privacy.u1": "Uygulamayı sunmak ve işletmek",
      "privacy.u2": "Ürünü güvenli ve adil tutmak (kötüye kullanım ve istenmeyen ileti engeli dahil)",
      "privacy.u3": "Açtığınız bildirimleri göndermek",
      "privacy.u4": "Güvenilirliği ve performansı iyileştirmek",
      "privacy.u5": "Yasaya uymak ve geçerli taleplere yanıt vermek",
      "privacy.s4": "4. Veriler nerede saklanır",
      "privacy.s4p": "Verileri, Uygulamayı bizim adımıza barındıran bulut hizmeti sağlayıcılarıyla saklar ve işleriz. Veriler, bu sağlayıcıların çalıştığı bölgelerde işlenebilir.",
      "privacy.s5": "5. Paylaşım",
      "privacy.s5a": "Diğer kullanıcılar, görünür kılmayı seçtiğiniz bilgileri görebilir. Örneğin kullanıcı adınız, fotoğrafınız ve onlarla paylaştığınız içerik.",
      "privacy.s5b": "Kişisel bilgilerinizi satmayız. Uygulamayı çalıştırmak için verileri bizim adımıza işleyen hizmet sağlayıcıları kullanırız (bulut barındırma, kimlik doğrulama ve mesajlaşma sağlayıcıları gibi).",
      "privacy.s6": "6. Saklama süresi",
      "privacy.s6p": "Hesabınız aktifken hesap ve etkinlik verilerini tutarız. Hesabınızı sildiğinizde kişisel verileri aşağıda anlatıldığı gibi siler veya anonimleştiririz. Kötüye kullanımı önlemek için gereken sınırlı işaretler ve yasanın saklamayı zorunlu kıldığı kayıtlar bunun dışındadır.",
      "privacy.s7": "7. Hesap silme",
      "privacy.s7a": "Hesabınızı Uygulamada silebilirsiniz: <strong>Profil → Ayarlar → Hesabı Sil</strong>. Web üzerinden de silme isteği gönderebilirsiniz: <a href=\"delete-account.html\">Hesabı sil sayfası</a>.",
      "privacy.s7b": "Silme tamamlandığında şu kişisel verileri kaldırır veya anonimleştiririz:",
      "privacy.d1": "Profiliniz, fotoğrafınız, kullanıcı adı ayırmanız, cihazlarınız ve giriş hesabınız",
      "privacy.d2": "Mesajlarınız ve hesabınıza bağlı diğer kişisel veriler",
      "privacy.d3": "Etkinlik katılım kayıtlarınız",
      "privacy.s7d": "Geçmiş bağlamlarda başkalarına görünen adlar, kimliği belli etmeyen bir etiketle değiştirilebilir (örneğin “Deleted User”).",
      "privacy.s7e": "<strong>Önemli:</strong> Uygulama kuralları kapsamında hâlâ yerine getirilmemiş yükümlülükleriniz varken hesabınızı silerseniz, silmeden önce onay ekranlarında bildirilen sonuçlar uygulanabilir. Aynı e-postanın yeniden kaydolarak kısıtlamalardan kaçmaması için kimliği belli etmeyen sınırlı bir işaret tutulabilir.",
      "privacy.s8": "8. Seçimleriniz",
      "privacy.ch1": "Şehir, dil ve profil ayrıntılarını Ayarlar / Profil üzerinden güncelleyin",
      "privacy.ch2": "Bildirim tercihlerini Ayarlar’dan yönetin",
      "privacy.ch3": "Etkinliğinizi, Uygulamada gösterilen kurallara göre yönetin",
      "privacy.ch4": "Hesabınızı yukarıda anlatıldığı gibi silin",
      "privacy.s9": "9. Çocuklar",
      "privacy.s9p": "Uygulama, yerel yasanın ebeveyn onayı olmadan veri işlemeye rıza göstermesi için aradığı yaşın altındaki çocuklara yönelik değildir. Geçerli yaş şartını karşılamıyorsanız hesap açmayın.",
      "privacy.s10": "10. Değişiklikler",
      "privacy.s10p": "Bu politikayı zaman zaman güncelleyebiliriz. Yukarıdaki “Son güncelleme” tarihini değiştiririz ve uygun olduğunda Uygulamada ek bildirim veririz.",
      "privacy.s11": "11. İletişim",
      "privacy.s11p": "Sorular veya talepler: <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a>",

      "terms.title": "Kullanım Koşulları — Click & Clique",
      "terms.meta": "Click & Clique mobil uygulamasının kullanım koşulları.",
      "terms.eyebrow": "Yasal",
      "terms.h1": "Kullanım Koşulları",
      "terms.updated": "Son güncelleme: 27 Ekim 2026",
      "terms.intro": "Bu Kullanım Koşulları (“Koşullar”), bizim (“biz”) işlettiğimiz <strong>Click &amp; Clique</strong> mobil uygulamasını ve ilgili hizmetleri (“Uygulama”) kullanımınızı düzenler. Hesap açarak veya Uygulamayı kullanarak bu Koşulları kabul edersiniz. Kabul etmiyorsanız Uygulamayı kullanmayın.",
      "terms.privacy": "Kişisel verileri nasıl işlediğimiz <a href=\"privacy.html\">Gizlilik Politikası</a> sayfasında anlatılır.",
      "terms.s1": "1. Biz kimiz",
      "terms.s1p": "Click &amp; Clique, insanların şehirlerindeki biletli ve kullanıcıların oluşturduğu etkinlikleri keşfetmesine ve giden diğer kişilerle bağlantı kurmasına yardımcı olur. Bu Koşullar hakkında sorular için <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a> adresine yazın.",
      "terms.s2": "2. Uygunluk",
      "terms.el1": "Ülkenizin yasalarına göre sosyal ağ ve mesajlaşma hizmetlerini kullanacak ve bu Koşulları kabul edecek yaşta olmalısınız (ve bölgenizdeki mağaza politikalarının istediği asgari yaştan küçük olmamalısınız).",
      "terms.el2": "Kayıt bilgileriniz doğru olmalı ve güncel tutulmalıdır.",
      "terms.el3": "Yasak, puan veya cezadan kaçmak için bir kişi birden fazla hesap açmamalıdır.",
      "terms.s3": "3. Hesaplar",
      "terms.ac1": "E-posta ve şifre ile kaydolursunuz. Uygulamayı kullanmak için e-postanızı doğrulamalısınız.",
      "terms.ac2": "Şifrenizi gizli tutmak ve hesabınızdaki işlemler sizin sorumluluğunuzdadır.",
      "terms.ac3": "Hesabınızı Uygulamada (<strong>Profil → Ayarlar → Hesabı Sil</strong>) veya <a href=\"delete-account.html\">web silme sayfamızdan</a> silebilirsiniz.",
      "terms.s4": "4. Hizmet",
      "terms.s4p": "Bu Koşullara bağlı olarak sunduğumuz özellikler şunları içerebilir:",
      "terms.sv1": "Şehrinizdeki biletli ve kullanıcıların oluşturduğu etkinliklere göz atmak",
      "terms.sv2": "Etkinliklere katılmak ve diğer katılımcılarla bağlantı kurmak",
      "terms.sv3": "Diğer kullanıcılara mesaj göndermek",
      "terms.sv4": "Etkinliklerden sonra, Uygulamada gösterilen sınırlar içinde değerlendirme ve puan",
      "terms.s4q": "Özellikleri değiştirebilir, askıya alabilir veya kaldırabiliriz. Üçüncü taraf etkinlik listeleri yalnızca keşif içindir. Bilet satmayız ve listelenen bir etkinliğin yazıldığı gibi gerçekleşeceğini garanti etmeyiz.",
      "terms.s5": "5. Kabul edilebilir kullanım",
      "terms.s5p": "Şunları yapmamayı kabul edersiniz:",
      "terms.ok1": "Diğer kullanıcıları taciz etmek, tehdit etmek, takip etmek veya dolandırmak (çevrimiçi ya da çevrimdışı)",
      "terms.ok2": "Yasadışı, nefret içeren, çocuklara yönelik cinsel içerik veya başka türlü yasak içerik paylaşmak",
      "terms.ok3": "Başkasının kimliğine bürünmek ya da kimliğinizi veya yaşınızı yanlış göstermek",
      "terms.ok4": "Diğer kullanıcılara istenmeyen ileti göndermek",
      "terms.ok5": "Başka kullanıcıların hesaplarına erişmeye çalışmak veya Uygulamayı kötüye kullanmak için tersine mühendislik yapmak",
      "terms.ok6": "Uygulamayı yasadışı bir faaliyeti düzenlemek veya tanıtmak için kullanmak",
      "terms.ok7": "Uygulama altyapısına müdahale etmek (ölçüsüz veri çekme, otomatik botlar vb.)",
      "terms.s5q": "Bu kuralları ihlal eden veya güvenlik ya da bütünlük riski oluşturan içerikleri kaldırabilir, özellikleri sınırlayabilir, hesapları askıya alabilir veya sonlandırabiliriz.",
      "terms.s5z": "<strong>Sıfır tolerans.</strong> Sakıncalı içeriğe ve kötüye kullanan kullanıcılara sıfır toleransımız vardır. Buna taciz, nefret söylemi, çocuklara yönelik cinsel içerik, dolandırıcılık ve yasadışı faaliyet dahildir. Bu tür içeriği kaldırırız ve hesapları önceden haber vermeden askıya alabilir veya sonlandırabiliriz.",
      "terms.s5r": "Uygulamada gönderilen bildirimler (profil, sohbet, değerlendirme veya topluluk etkinlikleri) ya da <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a> adresine gönderilenler 24 saat içinde incelenir.",
      "terms.s6": "6. Başkalarıyla bağlantı ve yüz yüze görüşme",
      "terms.mt1": "Uygulamada başka bir kullanıcıyla bağlantı kurmak romantik, iş veya güvenlik garantisi değildir.",
      "terms.mt2": "Birisiyle yüz yüze görüşürseniz bunu kendi sorumluluğunuzda yaparsınız. Olağan önlemleri alın. Diğer kullanıcıların çevrimdışı davranışından sorumlu değiliz.",
      "terms.mt3": "Bazı işlemler, Uygulamada gösterildiği gibi kurallarla sınırlanabilir.",
      "terms.s7": "7. Kullanıcıların oluşturduğu etkinlikler",
      "terms.ev1": "Etkinlik oluşturan kişiler, paylaştıkları bilgilerin doğruluğundan ve başkalarına adil davranmaktan sorumludur.",
      "terms.ev2": "Oluşturma, katılma ve ayrılma, Uygulamada gösterildiği gibi sınırlanabilir.",
      "terms.ev3": "Oluşturduğunuz bir etkinliği kaldırmanın, onaydan önce bildirilen sonuçları olabilir.",
      "terms.s8": "8. Değerlendirme ve puan",
      "terms.s8p": "Değerlendirmeler dürüst olmalı ve paylaşılan etkinlik deneyimiyle ilgili olmalıdır. Kaç değerlendirme gönderebileceğiniz, Uygulamada gösterildiği gibi sınırlanabilir. Sahte, kötüye kullanan veya misilleme amaçlı değerlendirmeler kaldırılabilir ve hesaplar kısıtlanabilir.",
      "terms.s9": "9. İçeriğiniz",
      "terms.s9a": "Gönderdiğiniz içerikteki haklarınız sizde kalır (profil fotoğrafı, mesaj ve değerlendirme gibi). Bu içeriği Uygulamayı işletmek için gereken ölçüde barındırmamız, saklamamız, göstermemiz ve iletmemiz (etkileşime girdiğiniz diğer kullanıcılar dahil) için bize sınırlı bir lisans verirsiniz.",
      "terms.s9b": "Bu içeriği gönderme hakkınız olduğunu ve içeriğin yasayı veya bu Koşulları ihlal etmediğini onaylarsınız.",
      "terms.s10": "10. Fikri mülkiyetimiz",
      "terms.s10p": "Uygulama, marka, logolar ve yazılım bize veya lisans verenlerimize aittir. Yüklü uygulamayı mağazaların olağan kullanımının izin verdiği dışında kopyalayamaz, değiştiremez veya yeniden dağıtamazsınız.",
      "terms.s11": "11. Ücretler",
      "terms.s11p": "Uygulamanın temel özellikleri şu anda uygulama içi satın alma olmadan sunulur. Daha sonra ücretli özellikler ekleyebiliriz. Eklersek, ücretlendirilmeden önce fiyatları ve koşulları Uygulamada ve mağaza listelerinde belirtiriz.",
      "terms.s12": "12. Hesap silme ve cezalar",
      "terms.s12p": "Hesap silme, <a href=\"privacy.html\">Gizlilik Politikası</a> sayfasında ve uygulama içi onay ekranlarında anlatılır. Uygulama kuralları kapsamında hâlâ yerine getirilmemiş yükümlülükleriniz varken hesabınızı silerseniz, onaydan önce bildirilen sonuçlar uygulanabilir. Aynı e-postanın yeniden kaydolarak kısıtlamalardan kaçmaması için kimliği belli etmeyen sınırlı bir işaret tutulabilir.",
      "terms.s13": "13. Feragat",
      "terms.s13p": "Uygulama “olduğu gibi” ve “sunulduğu ölçüde” sağlanır. Yasanın izin verdiği en geniş ölçüde, kesintisiz hizmet, etkinlik verisinin kusursuz doğruluğu veya belirli bir amaca uygunluk konusunda garanti vermeyiz. Üçüncü taraf etkinlik bilgileri eksik veya güncel olmayabilir.",
      "terms.s14": "14. Sorumluluğun sınırı",
      "terms.s14p": "Yasanın izin verdiği en geniş ölçüde, dolaylı, arızi, özel, sonuç olarak doğan veya cezai zararlardan ya da şunlardan kaynaklanan kayıplardan sorumlu değiliz: diğer kullanıcıların davranışı; yüz yüze görüşmeler; iptal edilen veya değişen etkinlikler; üçüncü taraflarla bilet alımı; Uygulamanın geçici olarak kullanılamaması. Sorumluluğun hariç tutulamayacağı durumlarda, sorumluluk yürürlükteki yasanın izin verdiği azami ölçüde sınırlıdır.",
      "terms.s15": "15. Sona erme",
      "terms.s15p": "Uygulamayı kullanmayı bırakabilir ve hesabınızı istediğiniz zaman silebilirsiniz. Bu Koşulları ihlal ederseniz, güvenlik riski oluşturursanız veya hizmeti sonlandırırsak erişimi askıya alabilir veya sonlandırabiliriz. Doğası gereği yürürlükte kalması gereken hükümler (fikri mülkiyet, feragatler ve sorumluluk sınırları dahil) sona ermeden sonra da geçerlidir.",
      "terms.s16": "16. Bu Koşullardaki değişiklikler",
      "terms.s16p": "Bu Koşulları zaman zaman güncelleyebiliriz. Yukarıdaki “Son güncelleme” tarihini değiştiririz ve uygun olduğunda Uygulamada ek bildirim veririz. Yürürlük tarihinden sonra kullanmaya devam etmeniz, güncellenmiş Koşulları kabul ettiğiniz anlamına gelir.",
      "terms.s17": "17. İletişim",
      "terms.s17p": "Bu Koşullar hakkında sorular: <a href=\"mailto:support@clickandclique.com\">support@clickandclique.com</a>"
    }
  };

  var nav = typeof navigator === "undefined" ? {} : navigator;
  var raw = String(nav.language || nav.userLanguage || "").toLowerCase();
  var code = raw.split(/[-_]/)[0];
  if (!COPY[code]) code = "en";

  /* ÇAĞIRAN: Bu dosya açılışta. e.html kendi cümlesini buradan alır.
     NE İŞE YARAR: İstenen anahtarı seçilen dilde, yoksa İngilizce verir.
     GİDER: Sayfadaki metin veya e.html durum satırı. */
  function pick(key) {
    var pack = COPY[code] || COPY.en;
    var value = pack && pack[key];
    if (value != null && value !== "") return value;
    value = COPY.en && COPY.en[key];
    if (value != null) return value;
    return null;
  }

  /* ÇAĞIRAN: Sayfa hazır olunca bu dosya. e.html yönlendirmeden önce.
     NE İŞE YARAR: data-i18n düğümlerine seçilen dili yazar.
     GİDER: Başlık, gövde, yer tutucu ve aria metni. */
  function apply() {
    var nodes;
    var i;
    var node;
    var value;
    try {
      nodes = document.querySelectorAll("[data-i18n]");
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        value = pick(node.getAttribute("data-i18n"));
        if (value == null) continue;
        node.textContent = value;
      }
      nodes = document.querySelectorAll("[data-i18n-html]");
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        value = pick(node.getAttribute("data-i18n-html"));
        if (value == null) continue;
        node.innerHTML = value;
      }
      nodes = document.querySelectorAll("[data-i18n-placeholder]");
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        value = pick(node.getAttribute("data-i18n-placeholder"));
        if (value == null) continue;
        node.setAttribute("placeholder", value);
      }
      nodes = document.querySelectorAll("[data-i18n-aria]");
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        value = pick(node.getAttribute("data-i18n-aria"));
        if (value == null) continue;
        node.setAttribute("aria-label", value);
      }
      nodes = document.querySelectorAll("[data-i18n-content]");
      for (i = 0; i < nodes.length; i++) {
        node = nodes[i];
        value = pick(node.getAttribute("data-i18n-content"));
        if (value == null) continue;
        node.setAttribute("content", value);
      }
    } finally {
      document.documentElement.classList.remove("i18n-pending");
    }
  }

  document.documentElement.lang = code;
  if (code !== "en") document.documentElement.classList.add("i18n-pending");
  window.SITE_LANG = { code: code, t: pick, apply: apply };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
  setTimeout(function () {
    document.documentElement.classList.remove("i18n-pending");
  }, 1500);
})();
