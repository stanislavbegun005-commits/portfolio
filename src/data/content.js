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
      overline: 'Hero',
      title: 'Станислав Бегун',
      subtitle:
        'Digital-маркетолог полного цикла. Работаю с маркетингом от стратегии до результата: аналитика, performance, CRM, тесты, бюджетирование.',
      primaryCta: 'Написать в Telegram | Посмотреть кейсы',
      photoAlt: 'Станислав Бегун',
      stats: [
        { value: '$621K', label: 'рекламный бюджет' },
        { value: '367 291', label: 'лидов' },
        { value: '4,1x', label: 'средний ROAS' }
      ]
    },
    about: {
      overline: 'ABOUT (Обо мне)',
      title: '2+ года в digital-маркетинге',
      subtitle:
        'Работал с клиентами из США (Real Estate, EdTech, Healthcare B2B) и России. Свободно говорю на английском (C1) и русском.',
      photoAlt: 'Станислав Бегун',
      paragraphs: [
        'Специализируюсь на performance-маркетинге, аналитике и CRM. Строю воронки, считаю unit-экономику, тестирую гипотезы. В проектах снижал CPL в 2–8 раз через сегментацию, перераспределение бюджетов и A/B-тесты.',
        'Образование: Финансовый университет при Правительстве РФ — Факультет социальных наук и массовых коммуникаций, «Связи с общественностью».',
        'Сертификаты: Яндекс Метрика (2026), HubSpot AI for Marketers и HubSpot Digital Marketing Certification (2025), Mindbox «Автоматизация маркетинга» (2025), Online Marketing eMarketing Institute (2025), Skillbox «Интернет-маркетолог» + Bootcamp (2024), Google Ads for Beginners Coursera (2024).'
      ],
      focus: [
        {
          title: 'Как работаю',
          text: 'Данные → анализирую каждый канал и сегмент (CPC, CTR, CPL, ROAS). Строю CJM, нахожу узкие места. Гипотезы → формулирую конкретные решения и тест-планы с чёткими KPI. Тесты → запускаю A/B-тесты, масштабирую то, что работает, отключаю то, что нет. Процессы → создаю системы измерений, UTM-разметку, еженедельные когортные отчёты — всё прозрачно и воспроизводимо.'
        },
        {
          title: 'Дополнительно',
          text: 'AI в работе: активно интегрирую Claude, Perplexity, ChatGPT, Grok для аналитики, генерации гипотез, отчётов и оптимизации кампаний. Бизнес-аналитика: финмоделирование, прогнозирование LTV, когортный анализ. Блог: лайфстайл-блог о маркетинге и спорте. Спорт: чемпион Москвы по футболу в составе «Торпедо Москва» (2005 г.р.).'
        }
      ]
    },
    cases: {
      overline: 'CASE STUDIES',
      title: 'Кейсы',
      subtitle: 'Здесь — самые крупные проекты. Их было больше.',
      caseCta: 'Читать кейс →',
      backToCases: 'Вернуться к кейсам',
      labels: {
        rolePeriod: 'Роль / период',
        keyMetrics: 'Ключевые метрики',
        situation: 'Situation',
        task: 'Task',
        action: 'Action',
        experiments: 'Эксперименты',
        result: 'Result',
        unitEconomics: 'Unit Economics',
        learnings: 'Learnings',
        transfer: 'Transfer на РФ-стек (мой стандартный процесс)'
      },
      items: [
        {
          id: 'zillow-real-estate',
          title: 'Zillow — Real Estate, США',
          period: '2024–2025',
          summary: 'Снизил CPL в 8 раз через сегментацию аудитории и перераспределение бюджета.',
          metrics: ['Бюджет: $204 921', 'Лидов: 331 248', 'Выручка: $1 188 541', 'ROAS: 5,8x', 'CPL: $0,62 (целевой $5)'],
          details: {
            rolePeriod: 'Роль: Digital-маркетолог / Marketing Analytics Specialist. Период: 2024–2025.',
            keyMetrics: 'CPL $0,62 (цель: $5), ROAS 5,8x, 331 248 лидов, выручка $1 188 541, бюджет $204 921.',
            situation:
              'Zillow проигрывала конкурентам Redfin и Trulia. Медиакоманда запустила 6 рекламных каналов через Meta Ads, но часть расходовала бюджет неэффективно: CPC достигал $1,92–$1,96 при частоте показов до 27 раз в неделю (выгорание аудитории).',
            task: 'Оценить эффективность каждого канала, найти узкие места, снизить CPL до целевого и увеличить объём лидов без роста бюджета.',
            action:
              'Диагностика performance-метрик (CPC, CTR, CPL, Frequency) по 6 каналам. Сегментация ЦА по стадиям CJM, демографии и поведению. Стратегия: заморозить 2 неэффективных канала, перераспределить 70% бюджета на лучшие, 30% на тест новых аудиторий, внедрить frequency cap ≤5 показов/неделю. Координация креативов и еженедельный мониторинг.',
            experiments:
              'Инфографика с ценами vs фото объектов (CTR +34%, CPL $0,58 vs $0,71); frequency cap 5/нед vs без ограничения (CPC −28%); оффер «Подбор по параметрам» vs «Бесплатная консультация» (CR в qualified leads 17,2% vs 12,8%).',
            result:
              'CPL: $0,62 — на 87,6% лучше целевого $5. ROAS: 5,8x. Лидов: 331 248 (в 12,8× больше плана). Выручка: $1 188 541. CTR: 1,68% → 2,14%; Frequency: 8,7 → 3,13.',
            unitEconomics:
              'CPL $0,62 = Budget / Leads. CAC (оценка) ~$3,60 = CPL / CR в qualified leads (17,2%). ROMI 480% = (Revenue – Ad Spend) / Ad Spend.',
            learnings:
              'Сработало: быстрая заморозка неэффективных каналов и перераспределение бюджета; frequency cap. Было сложно: сопротивление медиабайинга. Сделал бы иначе: раньше тестировать видео-форматы.',
            transfer:
              'Яндекс.Директ + myTarget + Метрика: динамические аудитории Метрики (этап X без Y) → экспорт в VK Рекламу для ретаргетинга, A/B-тесты через Метрику, frequency cap в Директе, единая UTM-разметка, еженедельные когорты, Roistat/Calltouch для офлайн-проектов.'
          }
        },
        {
          id: 'capella-university',
          title: 'Capella University — EdTech, США',
          period: '2024–2025',
          summary: 'Улучшил качество лидов на 35% через тестирование форматов.',
          metrics: ['Бюджет: $224 754', 'Лидов: 32 107', 'Выручка: $708 122', 'ROAS: 3x', 'CPL: $7 (целевой $10)', 'Retention: +35%'],
          details: {
            rolePeriod: 'Роль: Digital-маркетолог / Marketing Analytics Specialist. Период: 2024–2025.',
            keyMetrics: 'CPL $7 (цель: $10), ROAS 3x, лидов 32 107, продаж 270, выручка $708 122, бюджет $224 754.',
            situation:
              'Рынок онлайн-образования США перенасыщен. CPL на уровне или выше целевого ($10), а качество лидов низкое — только 2,5–3% студентов завершали программу.',
            task:
              'Снизить CPL ниже $10 и улучшить retention (долю студентов, завершающих программу) с 2,5% до ≥3,3% для ЦА профессионалов 30–50 лет.',
            action:
              'Построил CJM: креатив → клик → регистрация → консультация → оплата → завершение. Сегментировал аудиторию по демографии, мотивации и поведению. Выявил, что мотивированные профессионалы реагируют на конкретные цифры карьерного роста.',
            experiments:
              'Video solo vs Static solo vs Video → Static sequence: sequence дала CPL $7,20 и retention 3,39%. Оффер «Карьерный рост +32%» vs «Гибкость» vs «Аккредитация»: «Карьерный рост» дал CTR 3,2% и CR в оплату 11,8%.',
            result:
              'CPL: $7 — на 30% ниже целевого $10. ROAS: 3x (ROI: +760%). Лидов: 32 107; продаж: 270; retention: 3,39% — улучшение на 35% (считалось от оплат).',
            unitEconomics:
              'CPL $7 = Budget / Leads. CAC (оценка) $832 = Budget / Sales (224 754 / 270). ROMI 215% = (Revenue – Ad Spend) / Ad Spend. CR lead → оплата ~10,8% (оценка).',
            learnings:
              'Сработало: двухэтапная коммуникация video → static, оффер «карьерный рост +32% к зарплате». Было сложно: цикл решения 30–60 дней, тесты продлевались до 4 недель. Сделал бы иначе: раньше измерять retention как ключевую метрику.',
            transfer:
              'В Метрике создаю динамические аудитории (смотрел видео, но не оставил заявку) → экспорт в VK Рекламу для статичных офферов. Цепочки: видео (широкая) → статика (тёплая) → персонализированный оффер (горячая). Когорты по неделям для отслеживания retention.'
          }
        },
        {
          id: 'dental-america',
          title: 'Dental America — Healthcare B2B, США',
          period: '2024–2025',
          summary: 'Привлёк B2B-лидов при CPL вдвое ниже целевого.',
          metrics: ['Бюджет: $191 481', 'Лидов: 3 936', 'Выручка: $651 032', 'ROAS: 3,4x', 'CPL: $48,64 (целевой $100)', 'Средний чек: $3 108'],
          details: {
            rolePeriod: 'Роль: Digital-маркетолог / Marketing Analytics Specialist. Период: 2024–2025.',
            keyMetrics: 'CPL $48,64 (цель: $100), ROAS 3,4x, лидов 3 936, выручка $651 032, средний чек $3 108, бюджет $191 481.',
            situation:
              'Dental America — поставщик стоматологического оборудования для владельцев клиник и главных врачей (B2B). Конкуренты делали упор на спецификации и сертификаты. Преимущество цены на 15–25% ниже рынка почти не использовалось.',
            task: 'Привлечь высококачественных B2B-лидов при CPL ≤ $100 в условиях длинного цикла продажи 90–180 дней.',
            action:
              'Анализ кампаний, конкурентов и A/B-тестов. Глубокая сегментация B2B-аудитории: одиночные клиники, сетевые клиники, дистрибьюторы. Через интервью с продажами и анализ звонков выявлен главный вопрос ЦА: «Как получить качественное оборудование и не переплатить?»',
            experiments:
              'Прямое сравнение цен vs спецификации: CTR +40%, CPL $48,64 vs $94. CTA «Запросить КП» vs «Узнать больше»: CR 28%, доля decision-makers 72%.',
            result:
              'CPL: $48,64 — на 51,4% ниже целевого $100. ROAS: 3,4x. Лидов: 3 936. Выручка: $651 032. Качество лидов подтверждено еженедельной обратной связью от отдела продаж.',
            unitEconomics:
              'CAC (оценка) ~$912 = Budget / Sales (191 481 / ~210 продаж). Средний чек $3 108 = Revenue / Sales. ROMI 240% = (Revenue – Ad Spend) / Ad Spend. LTV/CAC (оценка) ~3,7:1 при repeat rate ~22% и средней повторной покупке ~$1 200.',
            learnings:
              'Сработало: прямое сравнение цен и еженедельная обратная связь от продаж. Было сложно: нужно было убеждать команду данными. Сделал бы иначе: раньше добавить калькулятор ROI на лендинг.',
            transfer:
              'Для B2B в РФ: Директ + myTarget с таргетингом по должности, интеграция Битрикс24 с Метрикой для сквозного трекинга лид → звонок → продажа, Roistat/Calltouch, динамические аудитории Метрики → экспорт в VK.'
          }
        },
        {
          id: 'pgk-crm',
          title: 'Первая Грузовая Компания — CRM, Россия',
          period: 'Дек 2023 – Апр 2024',
          summary: 'Многоканальные CRM-кампании для B2B-логистики: email + SMS + автоворонки.',
          metrics: ['Email-кампаний: 12+', 'SMS-рассылок: 8+', 'Open Rate: 24% (+8% vs. avg)', 'Клиентов сегментировано: 500+'],
          details: {
            rolePeriod: 'Роль: Digital-маркетолог / CRM-менеджер (стажёр). Период: Дек 2023 – Апр 2024.',
            keyMetrics: '12+ email, 8+ SMS, Open Rate 24% (+8% vs B2B avg), 15+ новых клиентов в онбординге, 500+ клиентов сегментировано.',
            situation:
              'ПГК — крупнейший частный оператор ж/д перевозок в России. B2B-аудитория: металлургия, удобрения, промхолдинги. База 500+ клиентов была не сегментирована, коммуникации нерегулярные, автоворонок не было.',
            task: 'Запустить систему CRM-коммуникаций email + SMS, сегментировать базу, создать автоворонки для онбординга и повысить retention.',
            action:
              'Разделил 500+ клиентов на 8 сегментов (объём перевозок, тип груза, регион, частота обращений), выявил 120 «спящих» клиентов. Создал календарь коммуникаций. Запустил 12+ email, 8+ SMS и автоворонку онбординга (7 писем за 30 дней) в Битрикс24.',
            experiments:
              'Персонализация темы письма (имя + тип груза) vs стандартная: OR 26% vs 19% (+37%). Спецпредложения для спящих клиентов: 26 из 120 реактивированы (22%). SMS о статусе vs без: звонки в поддержку −39%.',
            result:
              'Open Rate 24% (на 8% выше среднего по B2B — 16%), запущено 12+ email и 8+ SMS, онбординг 15+ новых корпоративных клиентов, реактивировано 22% спящих клиентов (26 из 120), прирост повторных обращений ~+18%, снижение звонков в поддержку −39% (оценка).',
            unitEconomics:
              'Средний чек клиента ~₽850 000. Оценочная выручка от реактивации ~₽22 млн (26 × ₽850K × 1 заказ). Оценочный прирост выручки ~₽30 млн (+18% повторных обращений). Затраты на CRM ~₽300 000 за 5 месяцев.',
            learnings:
              'Сработало: сегментация базы, персонализация по типу груза/региону, SMS-уведомления о статусе. Было сложно: ограничения роли стажёра. Сделал бы иначе: раньше интегрировать CRM с системой отслеживания грузов для автоматических SMS.',
            transfer: 'Применён в российском B2B-стеке.'
          }
        }
      ]
    },
    resume: {
      overline: 'RESUME (Резюме-страница)',
      title: 'Станислав Бегун — Digital-маркетолог полного цикла',
      subtitle: 'Ключевые результаты: 367K+ лидов при бюджете $621K и среднем ROAS 4,1x.',
      description:
        'Снизил CPL в 8 раз (Zillow), улучшил качество лидов на 35% (Capella), привлёк B2B-лидов при CPL вдвое ниже целевого (Dental America). Запустил 12+ email + 8+ SMS кампаний с OR 24% (ПГК). Опыт: K.Target — Digital-маркетолог / Marketing Analytics Specialist (Май 2024 – Дек 2025), проекты из США: Real Estate, EdTech, Healthcare B2B, SaaS, бюджет $621K, выручка $2,5M+. Первая Грузовая Компания — Digital-маркетолог / CRM-менеджер (Дек 2023 – Апр 2024), CRM-кампании для B2B-логистики, сегментация 500+ клиентов. Навыки: Performance, аналитика, инструменты, CRM, стратегия, аудитория и SEO, языки: русский (родной), английский (C1).',
      downloadLabel: 'Скачать резюме (PDF)'
    },
    contacts: {
      overline: 'CONTACTS',
      title: 'Свяжитесь со мной',
      subtitle:
        'Не рассматриваю индустрии: gambling, оружие, товары двойного назначения с военным использованием, алкогольные и табачные компании.',
      items: [
        { label: 'Telegram', value: '@stanislav_begun', href: 'https://t.me/stanislav_begun' },
        { label: 'Телефон', value: '+7 (901) 906-08-26', href: 'tel:+79019060826' },
        { label: 'Email', value: '[ваш email]', href: 'mailto:stanislavbegun005@gmail.com' }
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
