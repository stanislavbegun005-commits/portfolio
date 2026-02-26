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
      overline: 'Performance Marketing & Growth',
      title: 'Станислав Бегун — performance-маркетолог с фокусом на лидогенерацию и окупаемый рост.',
      subtitle:
        'В портфолио — проекты Zillow, Capella University, Dental America и Первая Грузовая Компания (ПГК). Общий результат: 367K+ лидов, рекламный бюджет $621K и средний ROAS 4,1x.',
      primaryCta: 'Смотреть кейсы',
      photoAlt: 'Портрет Станислава Бегуна',
      stats: [
        { value: '367K+', label: 'лидов' },
        { value: '$621K', label: 'рекламный бюджет' },
        { value: '4,1x', label: 'средний ROAS' }
      ]
    },
    about: {
      overline: 'Обо мне',
      title: 'Работаю на стыке трафика, аналитики и бизнес-результата',
      subtitle:
        'Основной профиль — запуск и масштабирование performance-каналов, системная работа с воронкой и юнит-экономикой.',
      photoAlt: 'Станислав Бегун',
      paragraphs: [
        'Специализируюсь на проектах с измеримыми KPI: стоимость лида, конверсия по этапам, окупаемость и ROMI/ROAS. В работе опираюсь на данные, тестирование гипотез и прозрачную отчетность.',
        'В кейсах Zillow, Capella University, Dental America и ПГК выстроены понятные воронки, улучшено качество лидов и достигнуты стабильные показатели масштабирования при контроле стоимости привлечения.',
        'Суммарно по проектам: 367K+ лидов при бюджете $621K и среднем ROAS 4,1x.'
      ],
      focus: [
        {
          title: 'Performance-система',
          text: 'Постановка KPI, медиапланирование, запуск гипотез и масштабирование рабочих связок.'
        },
        {
          title: 'Аналитика и экономика',
          text: 'Сквозная оценка воронки, контроль CPL/CPA и фокус на прибыльном росте.'
        }
      ]
    },
    cases: {
      overline: 'Кейсы',
      title: 'Реальные проекты из портфолио',
      subtitle: 'Подборка кейсов с фактическими задачами, действиями и результатами.',
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
          id: 'zillow',
          title: 'Zillow',
          period: 'США · Real Estate',
          summary: 'Лидогенерация и оптимизация воронки в нише недвижимости с упором на качество заявок.',
          metrics: ['Лиды', 'CPL', 'ROAS'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'Объем лидов, CPL, качество заявок, ROAS.',
            situation: 'Высокая конкуренция в аукционе и необходимость стабильно получать целевые обращения.',
            task: 'Увеличить объем качественных лидов без потери окупаемости рекламных кампаний.',
            action: 'Пересобрана структура аккаунтов, сегментирована аудитория и обновлены креативы/офферы под намерение пользователя.',
            experiments: 'A/B-тесты связок объявлений, лендингов и стратегий ставок по сегментам.',
            result: 'Рост управляемости воронки и масштабирование лидогенерации при контроле стоимости заявки.',
            unitEconomics: 'Оптимизация бюджета по эффективным сегментам с упором на рентабельные источники.',
            learnings: 'Качество лидов критично: объем без контроля последующих этапов снижает итоговую эффективность.',
            transfer: 'Подход применим для российского рынка недвижимости и сервисов с длинным циклом принятия решения.'
          }
        },
        {
          id: 'capella-university',
          title: 'Capella University',
          period: 'США · Education',
          summary: 'Performance-поддержка набора студентов и улучшение конверсии образовательной воронки.',
          metrics: ['Лиды', 'CPL', 'Конверсия в целевое действие'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'CPL, конверсия лидов, стоимость целевого действия.',
            situation: 'Требовалось стабилизировать поток заявок и повысить эффективность каналов в конкурентной EdTech-среде.',
            task: 'Снизить стоимость лида и повысить качество входящего потока.',
            action: 'Оптимизированы кампании по этапам воронки, доработаны офферы и сегментация аудиторий.',
            experiments: 'Тесты сообщений, посадочных страниц и стратегий распределения бюджета между каналами.',
            result: 'Улучшены целевые показатели воронки и повышена предсказуемость результата по месяцам.',
            unitEconomics: 'Фокус на источниках, где итоговая стоимость привлечения соответствует целевой экономике.',
            learnings: 'В образовательных проектах важно синхронизировать маркетинг и последующую работу с лидами.',
            transfer: 'Практика релевантна для онлайн-образования в РФ при учете локальной сезонности и спроса.'
          }
        },
        {
          id: 'dental-america',
          title: 'Dental America',
          period: 'США · Healthcare',
          summary: 'Привлечение пациентов и повышение эффективности рекламных каналов для стоматологических услуг.',
          metrics: ['Пациентские лиды', 'CPL', 'ROAS'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'Стоимость лида, конверсия в запись, ROAS.',
            situation: 'Необходимо обеспечить стабильный поток обращений в условиях локальной конкуренции.',
            task: 'Сформировать устойчивую систему привлечения пациентов с контролем стоимости заявки.',
            action: 'Усилены локальные рекламные кампании, обновлены креативы и оптимизированы посадочные страницы.',
            experiments: 'Тесты гео-таргетинга, рекламных сообщений и форм захвата заявки.',
            result: 'Рост количества целевых обращений и улучшение окупаемости каналов.',
            unitEconomics: 'Приоритизация сегментов с лучшим соотношением стоимости обращения и выручки.',
            learnings: 'Для healthcare особенно важны доверие к бренду и понятный путь пользователя до заявки.',
            transfer: 'Подход подходит для медицинских клиник в РФ с фокусом на локальный спрос и репутацию.'
          }
        },
        {
          id: 'pgk',
          title: 'Первая Грузовая Компания (ПГК)',
          period: 'Россия · B2B Logistics',
          summary: 'B2B-лидогенерация и повышение прозрачности маркетинговых результатов в логистике.',
          metrics: ['B2B-лиды', 'CPL', 'Конверсия по этапам'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'Количество лидов, CPL, конверсия MQL/SQL.',
            situation: 'Сложный B2B-цикл сделки и необходимость синхронизировать маркетинг с продажами.',
            task: 'Увеличить объем целевых запросов от бизнеса при сохранении качества лидов.',
            action: 'Пересобрана воронка заявок, уточнены сегменты ЦА, внедрена более детальная аналитика по этапам.',
            experiments: 'Тесты офферов, каналов и форматов лид-форм для разных категорий клиентов.',
            result: 'Рост объема релевантных обращений и более стабильная передача лидов в отдел продаж.',
            unitEconomics: 'Смещение бюджета в каналы с лучшей стоимостью квалифицированного лида.',
            learnings: 'В B2B критично измерять не только первичную заявку, но и прохождение по этапам сделки.',
            transfer: 'Модель масштабируема для промышленных и логистических B2B-проектов на рынке РФ.'
          }
        }
      ]
    },
    resume: {
      overline: 'Резюме',
      title: 'Резюме Станислава Бегуна',
      subtitle: 'Ключевые показатели и опыт по проектам Zillow, Capella University, Dental America и ПГК.',
      description:
        'Сводные результаты из портфолио: 367K+ лидов, рекламный бюджет $621K и средний ROAS 4,1x. В резюме отражены ключевые достижения по проектам Zillow, Capella University, Dental America и Первая Грузовая Компания (ПГК).',
      highlights: [
        'Zillow — масштабирование лидогенерации и улучшение управляемости воронки.',
        'Capella University — усиление эффективности образовательной воронки и качества лидов.',
        'Dental America — рост целевых обращений и повышение окупаемости каналов.',
        'ПГК — развитие B2B-лидогенерации и прозрачности по этапам воронки.'
      ],
      downloadLabel: 'Скачать резюме'
    },
    contacts: {
      overline: 'Контакты',
      title: 'Открыт к сотрудничеству',
      subtitle: 'Свяжитесь удобным способом — быстрее всего отвечаю в Telegram.',
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
      overline: 'Performance Marketing & Growth',
      title: 'Stanislav Begun — performance marketer focused on scalable lead generation and profitable growth.',
      subtitle:
        'Portfolio projects include Zillow, Capella University, Dental America, and First Freight Company (PGK). Combined results: 367K+ leads, $621K ad budget, and average ROAS of 4.1x.',
      primaryCta: 'View cases',
      photoAlt: 'Portrait of Stanislav Begun',
      stats: [
        { value: '367K+', label: 'leads' },
        { value: '$621K', label: 'ad budget' },
        { value: '4.1x', label: 'average ROAS' }
      ]
    },
    about: {
      overline: 'About',
      title: 'I work at the intersection of paid traffic, analytics, and business outcomes',
      subtitle:
        'Core focus: launching and scaling performance channels with strong funnel control and unit economics.',
      photoAlt: 'Stanislav Begun',
      paragraphs: [
        'I specialize in KPI-driven projects: cost per lead, step-by-step conversion, payback, and ROMI/ROAS. My process is data-led and built around hypothesis testing and transparent reporting.',
        'Across Zillow, Capella University, Dental America, and PGK, I built clearer funnels, improved lead quality, and scaled channels while keeping acquisition costs under control.',
        'Combined project result: 367K+ leads with a $621K budget and average ROAS of 4.1x.'
      ],
      focus: [
        {
          title: 'Performance system',
          text: 'KPI setup, media planning, hypothesis testing, and scaling of high-performing campaign bundles.'
        },
        {
          title: 'Analytics & economics',
          text: 'End-to-end funnel evaluation, CPL/CPA control, and a consistent focus on profitable growth.'
        }
      ]
    },
    cases: {
      overline: 'Cases',
      title: 'Real portfolio projects',
      subtitle: 'Case studies with factual goals, actions, and outcomes.',
      caseCta: 'Open case',
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
          id: 'zillow',
          title: 'Zillow',
          period: 'US · Real Estate',
          summary: 'Lead generation and funnel optimization in real estate with a strong focus on lead quality.',
          metrics: ['Leads', 'CPL', 'ROAS'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'Lead volume, CPL, lead quality, ROAS.',
            situation: 'Highly competitive auctions required stable inflow of qualified leads.',
            task: 'Increase qualified lead volume while preserving campaign payback.',
            action: 'Rebuilt account structure, segmented audiences, and refreshed creatives/offers by intent.',
            experiments: 'A/B tests across ad bundles, landing pages, and bidding strategies.',
            result: 'Improved funnel control and scalable lead generation with cost discipline.',
            unitEconomics: 'Budget shifted toward segments with stronger profitability.',
            learnings: 'Lead quality control is critical for downstream efficiency and revenue outcomes.',
            transfer: 'Applicable to Russian real estate and other long decision-cycle services.'
          }
        },
        {
          id: 'capella-university',
          title: 'Capella University',
          period: 'US · Education',
          summary: 'Performance support for student acquisition and better conversion through the education funnel.',
          metrics: ['Leads', 'CPL', 'Target conversion'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'CPL, lead conversion, target action cost.',
            situation: 'Needed a stable lead flow and better channel efficiency in a competitive EdTech environment.',
            task: 'Lower lead costs and improve incoming lead quality.',
            action: 'Optimized campaigns by funnel stage and refined offers and audience segmentation.',
            experiments: 'Messaging, landing page, and budget-allocation tests across channels.',
            result: 'Core funnel KPIs improved with more predictable monthly results.',
            unitEconomics: 'Prioritized sources where acquisition cost matched target economics.',
            learnings: 'Education funnels require close alignment between marketing and follow-up stages.',
            transfer: 'Highly relevant for Russian online education with local seasonality adaptation.'
          }
        },
        {
          id: 'dental-america',
          title: 'Dental America',
          period: 'US · Healthcare',
          summary: 'Patient acquisition and channel-efficiency improvements for dental services.',
          metrics: ['Patient leads', 'CPL', 'ROAS'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'Cost per lead, booking conversion, ROAS.',
            situation: 'Needed a stable flow of patient inquiries in a competitive local market.',
            task: 'Build a consistent patient acquisition system with controlled lead cost.',
            action: 'Strengthened local campaigns, updated creatives, and optimized landing pages.',
            experiments: 'Geo-targeting, ad messaging, and lead-form format testing.',
            result: 'Higher volume of qualified inquiries and improved channel payback.',
            unitEconomics: 'Prioritized segments with stronger inquiry-to-revenue economics.',
            learnings: 'In healthcare, trust and frictionless UX have outsized impact on conversion.',
            transfer: 'Applicable for private clinics in Russia with local demand and reputation focus.'
          }
        },
        {
          id: 'pgk',
          title: 'Первая Грузовая Компания (ПГК)',
          period: 'Russia · B2B Logistics',
          summary: 'B2B lead generation and greater transparency of marketing performance in logistics.',
          metrics: ['B2B leads', 'CPL', 'Stage conversion'],
          details: {
            rolePeriod: 'Performance Marketing Specialist.',
            keyMetrics: 'Lead volume, CPL, MQL/SQL conversion.',
            situation: 'Long B2B sales cycle required tighter coordination between marketing and sales.',
            task: 'Increase qualified business inquiries while preserving lead quality.',
            action: 'Reworked lead funnel, refined ICP segments, and introduced stage-level analytics.',
            experiments: 'Offer, channel, and lead-form tests by client segment.',
            result: 'Higher volume of relevant inquiries and steadier lead handoff to sales.',
            unitEconomics: 'Budget shifted to channels with stronger qualified-lead cost.',
            learnings: 'In B2B, primary lead volume must be evaluated against downstream deal progression.',
            transfer: 'Scalable for industrial and logistics B2B projects in Russia.'
          }
        }
      ]
    },
    resume: {
      overline: 'Resume',
      title: 'Stanislav Begun Resume',
      subtitle: 'Key metrics and project experience across Zillow, Capella University, Dental America, and PGK.',
      description:
        'Portfolio summary highlights: 367K+ leads, $621K ad budget, and average ROAS of 4.1x. The resume includes core outcomes for Zillow, Capella University, Dental America, and Первая Грузовая Компания (ПГК).',
      highlights: [
        'Zillow — scaled lead generation and improved funnel control.',
        'Capella University — stronger education funnel efficiency and lead quality.',
        'Dental America — higher volume of qualified inquiries and better channel payback.',
        'Первая Грузовая Компания (ПГК) — stronger B2B lead generation and stage-level visibility.'
      ],
      downloadLabel: 'Download Resume'
    },
    contacts: {
      overline: 'Contacts',
      title: 'Open for collaboration',
      subtitle: 'Reach out via your preferred channel — Telegram is the fastest.',
      items: [
        { label: 'Telegram', value: '@stanislav_begun', href: 'https://t.me/stanislav_begun' },
        { label: 'Email', value: 'stanislavbegun005@gmail.com', href: 'mailto:stanislavbegun005@gmail.com' },
        { label: 'Phone', value: '+7-901-906-08-26', href: 'tel:+79019060826' }
      ]
    }
  }
}
