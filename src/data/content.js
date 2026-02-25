export const content = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      cases: 'Кейсы',
      resume: 'Резюме',
      contacts: 'Контакты'
    },
    home: {
      overline: 'Performance Marketing & Product Growth',
      title: 'Станислав Бегун — рост digital-продуктов через гипотезы, аналитику и юнит-экономику.',
      subtitle:
        'Создаю устойчивый рост метрик для b2c и b2b проектов: от диагностики воронки до масштабирования прибыльных каналов.',
      primaryCta: 'Смотреть кейсы',
      photoAlt: 'Портрет Станислава Бегуна',
      stats: [
        { value: '120+', label: 'A/B экспериментов' },
        { value: '34%', label: 'Средний рост CR' },
        { value: '7', label: 'Лет в digital' }
      ]
    },
    about: {
      overline: 'Позиционирование',
      title: 'Системный маркетолог, который соединяет продукт и продажи',
      subtitle:
        'Мой подход строится на данных, скорости тестирования и фокусе на бизнес-эффекте. Работаю на стыке маркетинга, аналитики и автоматизации.',
      photoAlt: 'Станислав Бегун',
      paragraphs: [
        'Веду проекты от формирования стратегии до операционной реализации. Умею выстраивать маркетинговую систему, где каждый канал имеет прозрачную экономику и понятную роль.',
        'Сильная сторона — превращать сложные задачи в четкую дорожную карту: исследование аудитории, гипотезы роста, тест-план, масштабирование и управление рисками.',
        'В работе делаю ставку на креатив, который подкреплен цифрами: от первых касаний до повторных продаж и LTV.'
      ],
      focus: [
        {
          title: 'Growth-подход',
          text: 'Приоритизация гипотез по влиянию на revenue и скорость обучения команды.'
        },
        {
          title: 'Data-driven',
          text: 'Сквозная аналитика, контроль CAC/LTV, unit economics в основе решений.'
        }
      ]
    },
    cases: {
      overline: 'Практика',
      title: 'Кейсы по росту, монетизации и повышению эффективности',
      subtitle: 'Подборка проектов, где удалось улучшить ключевые метрики и построить управляемый рост.',
      caseCta: 'Открыть кейс',
      backToCases: 'Вернуться к кейсам',
      labels: {
        rolePeriod: 'Роль / период',
        keyMetrics: 'Ключевые метрики',
        situation: 'Ситуация',
        task: 'Задача',
        action: 'Действия',
        experiments: 'Эксперименты',
        result: 'Результат',
        unitEconomics: 'Юнит-экономика',
        learnings: 'Выводы',
        transfer: 'Перенос на рынок РФ'
      },
      items: [
        {
          id: 'edtech-funnel',
          title: 'EdTech: реконструкция воронки продаж',
          period: '2023 · 8 месяцев',
          summary: 'Полный перезапуск воронки от трафика до оплаты с фокусом на окупаемость.',
          metrics: ['CR +41%', 'CAC -23%', 'ROMI 184%'],
          details: {
            rolePeriod: 'Head of Performance Marketing, январь—август 2023.',
            keyMetrics: 'CR trial→paid, CAC, LTV 90d, churn 30d, payback period.',
            situation: 'Высокая стоимость лида и низкая конверсия в оплату ограничивали масштабирование.',
            task: 'Увеличить долю платящих пользователей без роста рекламного бюджета.',
            action: 'Пересобрал сегментацию, внедрил lead scoring и новые цепочки коммуникаций в CRM.',
            experiments: 'Серия A/B тестов офферов, лендингов, последовательности касаний и pricing.',
            result: 'Рост конверсии в оплату на 41%, сокращение CAC на 23%, рост выручки на 37%.',
            unitEconomics: 'Payback сократился с 5.8 до 3.9 месяца, contribution margin вырос на 18 п.п.',
            learnings: 'Наиболее сильный эффект дали пакетные предложения и персонализация onboarding.',
            transfer: 'Подход применим для онлайн-школ и сервисов подписки в РФ с акцентом на retention.'
          }
        },
        {
          id: 'ecom-retention',
          title: 'E-commerce: рост LTV через retention-механику',
          period: '2022 · 6 месяцев',
          summary: 'Смещение фокуса с разовых продаж на повторные покупки и маржинальность.',
          metrics: ['LTV +29%', 'Repeat +18%', 'CPA -14%'],
          details: {
            rolePeriod: 'Growth marketing lead, февраль—июль 2022.',
            keyMetrics: 'Repeat rate, LTV 180d, gross margin, CAC blended.',
            situation: 'Бизнес зависел от постоянного притока холодного трафика с уменьшающейся отдачей.',
            task: 'Поднять повторные продажи и улучшить экономику клиента на горизонте 6 месяцев.',
            action: 'Запустил RFM-сегментацию, триггерные сценарии и матрицу персональных предложений.',
            experiments: 'Тесты частоты рассылок, bundles, post-purchase сценариев, loyalty-механик.',
            result: 'LTV вырос на 29%, доля повторных заказов на 18%, CPA снизился на 14%.',
            unitEconomics: 'Contribution на заказ +11%, доля прибыльных кампаний выросла в 1.6 раза.',
            learnings: 'Retention становится главным драйвером прибыли при росте стоимости трафика.',
            transfer: 'Решение адаптируется под российский e-com через телеграм-боты и CDP-интеграции.'
          }
        },
        {
          id: 'saas-launch',
          title: 'SaaS: go-to-market и первые 100 платных клиентов',
          period: '2021 · 5 месяцев',
          summary: 'Запуск GTM-стратегии с нуля для B2B-продукта на раннем этапе.',
          metrics: ['100 paying clients', 'Lead→Demo +32%', 'CAC payback 4.1m'],
          details: {
            rolePeriod: 'Product marketing manager, апрель—август 2021.',
            keyMetrics: 'SQL volume, demo conversion, win rate, CAC payback, MRR growth.',
            situation: 'Продукт имел сильный функционал, но не имел системного позиционирования и продаж.',
            task: 'Сформировать GTM, стабилизировать лидогенерацию и выйти на первые 100 оплат.',
            action: 'Собрал ICP, переупаковал ценностное предложение и внедрил multi-channel outbound.',
            experiments: 'Тесты messaging, вебинары, реферальная модель, ниши и ценовые пакеты.',
            result: 'Получили 100 платящих клиентов за 5 месяцев и устойчивый MRR рост 18% MoM.',
            unitEconomics: 'CAC payback 4.1 месяца, повышение win rate с 14% до 22%.',
            learnings: 'Раннему SaaS нужен четкий ICP и сильная onboarding-модель вместо широкого охвата.',
            transfer: 'Подходит для российских B2B SaaS и агентств, выходящих в продуктовую модель.'
          }
        }
      ]
    },
    resume: {
      overline: 'Профессиональный профиль',
      title: 'Резюме Станислава Бегуна',
      subtitle: 'Скачайте актуальное резюме для детального ознакомления с опытом и компетенциями.',
      description:
        'Резюме включает опыт управления performance-маркетингом, построения аналитической инфраструктуры, разработки growth-стратегий и повышения ROMI.',
      downloadLabel: 'Скачать резюме'
    },
    contacts: {
      overline: 'Связь',
      title: 'Открыт к новым проектам и предложениям',
      subtitle: 'Быстрее всего отвечаю в Telegram. Также доступен по почте и телефону.',
      items: [
        { label: 'Telegram', value: '@stanislav_begun', href: 'https://t.me/stanislav_begun' },
        { label: 'Email', value: 'stanislavbegun005@gmail.com', href: 'mailto:stanislavbegun005@gmail.com' },
        { label: 'Phone', value: '+7-901-906-08-26', href: 'tel:+79019060826' }
      ]
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      cases: 'Cases',
      resume: 'Resume',
      contacts: 'Contacts'
    },
    home: {
      overline: 'Performance Marketing & Product Growth',
      title: 'Stanislav Begun — scaling digital products with experiments, analytics, and unit economics.',
      subtitle:
        'I build sustainable growth systems for B2C and B2B products: from funnel diagnostics to profitable channel scaling.',
      primaryCta: 'View Cases',
      photoAlt: 'Portrait of Stanislav Begun',
      stats: [
        { value: '120+', label: 'A/B experiments' },
        { value: '34%', label: 'Average CR growth' },
        { value: '7', label: 'Years in digital' }
      ]
    },
    about: {
      overline: 'Positioning',
      title: 'A systems marketer bridging product and revenue',
      subtitle:
        'My approach is built on data, fast experimentation, and measurable business outcomes across the full customer journey.',
      photoAlt: 'Stanislav Begun',
      paragraphs: [
        'I lead projects from growth strategy to operational execution, building marketing engines with transparent economics for every channel.',
        'My core strength is turning complexity into a clear roadmap: research, hypothesis stack, test plan, and scalable execution.',
        'Creativity in my work is always supported by data—from first touchpoint to repeat revenue and long-term LTV.'
      ],
      focus: [
        {
          title: 'Growth mindset',
          text: 'Hypothesis prioritization by revenue impact and team learning speed.'
        },
        {
          title: 'Data-first',
          text: 'End-to-end analytics, CAC/LTV control, and unit economics as the decision core.'
        }
      ]
    },
    cases: {
      overline: 'Practice',
      title: 'Case studies in growth, monetization, and efficiency',
      subtitle: 'A curated list of projects where key metrics and operating leverage improved measurably.',
      caseCta: 'Open Case',
      backToCases: 'Back to cases',
      labels: {
        rolePeriod: 'Role / period',
        keyMetrics: 'Key metrics',
        situation: 'Situation',
        task: 'Task',
        action: 'Action',
        experiments: 'Experiments',
        result: 'Result',
        unitEconomics: 'Unit economics',
        learnings: 'Learnings',
        transfer: 'Transfer to Russian market'
      },
      items: [
        {
          id: 'edtech-funnel',
          title: 'EdTech: sales funnel rebuild',
          period: '2023 · 8 months',
          summary: 'A full-funnel redesign from acquisition to payment with ROI as the core objective.',
          metrics: ['CR +41%', 'CAC -23%', 'ROMI 184%'],
          details: {
            rolePeriod: 'Head of Performance Marketing, Jan—Aug 2023.',
            keyMetrics: 'CR trial→paid, CAC, LTV 90d, churn 30d, payback period.',
            situation: 'High CPL and weak paid conversion prevented efficient scale.',
            task: 'Increase paid share without growing media budget.',
            action: 'Rebuilt segmentation, launched lead scoring, and redesigned CRM journeys.',
            experiments: 'A/B tests on offers, landing pages, touchpoint sequence, and pricing.',
            result: 'Paid conversion +41%, CAC -23%, revenue +37%.',
            unitEconomics: 'Payback improved from 5.8 to 3.9 months, contribution margin +18 pp.',
            learnings: 'Bundled offers and personalized onboarding delivered the strongest effect.',
            transfer: 'This model is highly relevant for Russian online schools and subscription services.'
          }
        },
        {
          id: 'ecom-retention',
          title: 'E-commerce: LTV growth via retention mechanics',
          period: '2022 · 6 months',
          summary: 'Shifted growth focus from one-time sales to repeat revenue and margin quality.',
          metrics: ['LTV +29%', 'Repeat +18%', 'CPA -14%'],
          details: {
            rolePeriod: 'Growth Marketing Lead, Feb—Jul 2022.',
            keyMetrics: 'Repeat rate, LTV 180d, gross margin, blended CAC.',
            situation: 'The business relied heavily on cold acquisition with declining return.',
            task: 'Increase repeat purchases and improve six-month customer economics.',
            action: 'Implemented RFM segmentation, trigger journeys, and personalized offer matrix.',
            experiments: 'Tests on cadence, bundles, post-purchase flows, and loyalty incentives.',
            result: 'LTV +29%, repeat share +18%, CPA -14%.',
            unitEconomics: 'Order contribution +11%, profitable campaign share x1.6.',
            learnings: 'Retention becomes a key profit lever when traffic costs keep rising.',
            transfer: 'Adaptable to RU e-commerce via Telegram bots and CDP integration.'
          }
        },
        {
          id: 'saas-launch',
          title: 'SaaS: GTM launch and first 100 paying clients',
          period: '2021 · 5 months',
          summary: 'Built go-to-market from scratch for an early-stage B2B SaaS product.',
          metrics: ['100 paying clients', 'Lead→Demo +32%', 'CAC payback 4.1m'],
          details: {
            rolePeriod: 'Product Marketing Manager, Apr—Aug 2021.',
            keyMetrics: 'SQL volume, demo conversion, win rate, CAC payback, MRR growth.',
            situation: 'Strong product capability but no clear positioning or repeatable sales system.',
            task: 'Define GTM, stabilize pipeline, and reach first 100 paying customers.',
            action: 'Built ICP, repackaged value proposition, and launched multi-channel outbound.',
            experiments: 'Messaging tests, webinars, referral loops, segment and pricing tests.',
            result: 'Reached 100 paying clients in 5 months with MRR growth of 18% MoM.',
            unitEconomics: 'CAC payback at 4.1 months, win rate improved from 14% to 22%.',
            learnings: 'Early SaaS wins with sharp ICP and onboarding excellence, not broad reach.',
            transfer: 'A practical blueprint for Russian B2B SaaS and agencies productizing services.'
          }
        }
      ]
    },
    resume: {
      overline: 'Professional profile',
      title: 'Stanislav Begun Resume',
      subtitle: 'Download the latest CV for a detailed overview of experience and expertise.',
      description:
        'The resume includes experience in performance marketing leadership, analytics infrastructure, growth strategy, and ROMI optimization.',
      downloadLabel: 'Download Resume'
    },
    contacts: {
      overline: 'Contact',
      title: 'Open to new projects and collaboration',
      subtitle: 'Telegram is the fastest channel. Email and phone are also available.',
      items: [
        { label: 'Telegram', value: '@stanislav_begun', href: 'https://t.me/stanislav_begun' },
        { label: 'Email', value: 'stanislavbegun005@gmail.com', href: 'mailto:stanislavbegun005@gmail.com' },
        { label: 'Phone', value: '+7-901-906-08-26', href: 'tel:+79019060826' }
      ]
    }
  }
}
