import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ru: {
    translation: {
      hero_title: "AgroRisk — кредитный скоринг фермеров без кредитной истории",
      hero_sub: "Мы помогаем банкам и МФО безопасно кредитовать агробизнес на основе данных о полях и климате.",
      problem: "Проблема",
      solution: "Наше решение",
      why_now: "Почему сейчас",
      team: "Команда",
      why_us: "Почему мы",
      roadmap: "Дорожная карта",
      competitors: "Конкуренты",
      business: "Бизнес-модель",
      contacts: "Контакты",

      // Sections text
      problem_text: "Большинство фермеров Центральной Азии не имеют кредитной истории, их доходы зависят от сезона и климата, а банки не могут объективно оценить риск.",
      solution_text: "AgroRisk переводит данные о полях, климате и урожайности в понятные для банка риск-метрики: устойчивость хозяйства, сезонность, тип культуры и т.д.",
      why_now_text: "Центральная Азия сталкивается с засухами и водным дефицитом, а банки требуют новых инструментов оценки риска.",
      team_text: "Команда AgroRisk сочетает опыт в ML, финтехе, разработке и агросекторе.",
      why_us_text: "Мы создаём платформу, адаптированную под реалии Узбекистана и Центральной Азии.",
      roadmap_text: "Idea → Prototype → MVP → Launched",
      competitors_text: "Региональные агроплатформы дают данные, но не предоставляют кредитный скоринг. AgroRisk соединяет агроданные и финтех.",
      business_text: "B2B SaaS: подписка, pay-per-use и интеграции.",
      contacts_text: "Связаться с нами: info@agrorisk.uz"
    }
  },
  uz: {
    translation: {
      hero_title: "AgroRisk — kredit tarixi bo‘lmagan fermerlar uchun aqlli skoring",
      hero_sub: "Biz banklar va MFOlarga dala va iqlim ma’lumotlari asosida xavfsiz kredit qarorlari qabul qilishga yordam beramiz.",
      problem: "Muammo",
      solution: "Bizning yechim",
      why_now: "Nega aynan hozir",
      team: "Jamoa",
      why_us: "Nega aynan biz",
      roadmap: "Yo‘l xaritasi",
      competitors: "Raqobatchilar",
      business: "Biznes modeli",
      contacts: "Aloqa",

      problem_text: "Markaziy Osiyodagi ko‘plab fermerlarda kredit tarixi yo‘q, daromadlar mavsumiy, banklar esa xavfni baholay olmaydi.",
      solution_text: "AgroRisk dala, iqlim va hosildorlik bo‘yicha ma’lumotlarni banklar uchun tushunarli risk ko‘rsatkichlariga aylantiradi.",
      why_now_text: "Mintaqada qurg‘oqchilik va suv tanqisligi kuchaymoqda, banklarga esa yangi risk baholash vositalari kerak.",
      team_text: "AgroRisk jamoasi ML, fintech va agrotexnologiyalar bo‘yicha tajribaga ega.",
      why_us_text: "Bizning platformamiz O‘zbekiston va Markaziy Osiyo sharoitiga moslashtirilgan.",
      roadmap_text: "Idea → Prototype → MVP → Launched",
      competitors_text: "Mahalliy agroplatformalar ma’lumot beradi, ammo kredit skoringini taqdim etmaydi.",
      business_text: "B2B SaaS: obuna, pay-per-use va integratsiyalar.",
      contacts_text: "Aloqa uchun: info@agrorisk.uz"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: { escapeValue: false }
})

export default i18n