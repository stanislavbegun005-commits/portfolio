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
        'Product Marketing / Growth-специалист с сильной базой в performance и CRM. Для меня важны не просто заявки, а то, сколько из них доходит до сделки.',
      telegramCta: 'Написать в Telegram',
      casesCta: 'Посмотреть кейсы',
      photoAlt: 'Станислав Бегун',
      stats: [
        { value: '$621K', label: 'рекламный бюджет' },
        { value: '367 291', label: 'лидов' },
        { value: '4,1x', label: 'средний ROAS' }
      ]
    },
    about: {
      overline: 'ABOUT (Обо мне)',
      title: '2+ года в product marketing с сильной базой в performance и CRM',
      subtitle:
        'Проекты в США (Real Estate, EdTech, Healthcare B2B) и России. Свободно работаю на русском и английском (C1).',
      photoAlt: 'Станислав Бегун',
      paragraphs: [
        'В первую очередь смотрю на то, как рынок считывает продукт: что именно обещает сообщение, кто на него откликается и где мотивированный спрос теряется по пути к сделке. Мой фокус — не только привлечение, а качество спроса на всём пути от первого касания до активации и повторных обращений.',
        'Образование: Финансовый университет при Правительстве РФ — Факультет социальных наук и массовых коммуникаций, «Связи с общественностью в политике и бизнесе/Public relations in politics and business».',
        'Медийных метрик обычно недостаточно: важно понимать message-market fit, где обещание не совпадает с ожиданием и как разные сегменты проходят CJM. Поэтому в работе связываю позиционирование, GTM-логику, performance и CRM как одну систему.',
        'Сертификаты: Яндекс Метрика (2026), HubSpot AI for Marketers и HubSpot Digital Marketing Certification (2025), Mindbox «Автоматизация маркетинга» (2025), Online Marketing eMarketing Institute (2025), Skillbox «Интернет-маркетолог» + Bootcamp (2024), Google Ads for Beginners Coursera (2024).'
      ],
      focus: [
        {
          title: 'Как работаю',
          text: 'Сначала проверяю, как продукт читается аудиторией: где не совпадают обещание и ожидание, и на каком этапе CJM теряется конверсия. Потом формулирую гипотезы по сообщению, value proposition, сегментам и касаниям. В работу оставляю только решения, которые улучшают качество спроса и экономику воронки; измерения держу прозрачными (UTM, когорты, регулярный разбор).'
        },
        {
          title: 'Дополнительно',
          text: 'AI в работе: использую Claude, Perplexity, ChatGPT и Grok для аналитики, подготовки гипотез и ускорения отчётности. Бизнес-аналитика: финмоделирование, прогнозирование LTV, когортный анализ. Блог: лайфстайл-блог о маркетинге и спорте. Спорт: чемпион Москвы по футболу в составе «Торпедо Москва» (2005 г.р.).'
        }
      ],
      usefulIf: {
        title: 'Я буду вам полезен, если:',
        items: [
          'Нужно уточнить positioning продукта или оффера перед масштабированием привлечения.',
          'Нужно пересобрать value proposition и сообщения под разные сегменты спроса.',
          'Нужно связать acquisition с activation и retention, а не оптимизировать только верх воронки.',
          'Нужно повысить качество спроса и доходимость до сделки, а не только объём лидов.',
          'Нужно проверить growth-гипотезы через CJM, сегменты и логику касаний.',
          'Нужно синхронизировать маркетинговую, продуктовую и коммерческую логику в одном контуре.'
        ]
      }
    },
    cases: {
      overline: 'CASE STUDIES',
      title: 'Кейсы',
      subtitle: 'Крупные проекты, где приходилось разбираться в сообщении, доходимости и экономике спроса.',
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
          summary: 'Через дисциплину частоты, сегментацию по стадии спроса и перераспределение бюджета вывел CPL в 8 раз ниже при росте объёма лидов.',
          metrics: ['Бюджет: $204 921', 'Лидов: 331 248', 'Выручка: $1 188 541', 'ROAS: 5,8x', 'CPL: $0,62 (целевой $5)'],
          details: {
            rolePeriod: 'Роль: Product Marketing Manager & Analytics Specialist. Период: 2024–2025.',
            keyMetrics: 'CPL $0,62 (цель: $5), ROAS 5,8x, 331 248 лидов, выручка $1 188 541, бюджет $204 921.',
            situation:
              'Zillow конкурировала с Redfin и Trulia в перегретом рынке. В Meta Ads уже работали 6 каналов, но часть из них расходовала бюджет вхолостую: CPC доходил до $1,92–$1,96, а частота поднималась до 27 показов в неделю. По поведению кампаний было видно, что спрос выгорает до того, как пользователь доходит до следующего шага.',
            task: 'Оценить эффективность каждого канала, найти узкие места, снизить CPL до целевого и увеличить объём лидов без роста бюджета.',
            action:
              'Провёл разбор по CPC, CTR, CPL и Frequency на уровне каналов и сегментов. Разделил аудитории по стадиям CJM, демографии и поведению, чтобы отделить холодный спрос от более тёплого. После этого отключил 2 неэффективных канала, 70% бюджета перевёл в рабочие связки и 30% оставил на тест новых аудиторий. Зафиксировал frequency cap ≤5 показов в неделю и оставил еженедельный цикл пересмотра бюджета.',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Креатив', 'Инфографика с ценами vs фото объектов', 'CTR +34%, CPL $0,58 vs $0,71'],
                ['Частота', 'frequency cap 5/нед vs без ограничения', 'CPC −28%'],
                ['Оффер', '«Подбор по параметрам» vs «Бесплатная консультация»', 'CR в qualified leads 17,2% vs 12,8%']
              ]
            },
            result:
              'CPL снизился до $0,62 (на 87,6% лучше цели $5), ROAS составил 5,8x. Получили 331 248 лидов и выручку $1 188 541. Одновременно улучшились поведенческие сигналы: CTR 1,68% → 2,14%, Frequency 8,7 → 3,13. Для бизнеса это был не разовый всплеск, а более управляемая модель закупки спроса.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Формула', 'Значение'],
              rows: [
                ['CPL', 'Budget / Leads', '$0,62'],
                ['CAC (оценка)', 'CPL / CR в qualified leads (17,2%)', '~$3,60'],
                ['ROMI', '(Revenue – Ad Spend) / Ad Spend', '480%']
              ]
            },
            learnings:
              'Решающим оказался не один креатив, а дисциплина решений: быстро отключать слабые связки и жёстко контролировать частоту. Самое сложное — синхронизация с медиабайингом в момент перераспределения бюджета. Если бы повторял проект, раньше проверил бы видео-форматы.',
            transfer:
              'Яндекс.Директ + myTarget + Метрика: динамические аудитории Метрики (этап X без Y) → экспорт в VK Рекламу для ретаргетинга, A/B-тесты через Метрику, frequency cap в Директе, единая UTM-разметка, еженедельные когорты, Roistat/Calltouch для офлайн-проектов.'
          }
        },
        {
          id: 'capella-university',
          title: 'Capella University — EdTech, США',
          period: '2024–2025',
          summary: 'Сфокусировался на качестве спроса, а не только на CPL: за счёт CJM и формата коммуникации retention вырос на 35%.',
          metrics: ['Бюджет: $224 754', 'Лидов: 32 107', 'Выручка: $708 122', 'ROAS: 3x', 'CPL: $7 (целевой $10)', 'Retention: +35%'],
          details: {
            rolePeriod: 'Роль: Product Marketing Manager & Analytics Specialist. Период: 2024–2025.',
            keyMetrics: 'CPL $7 (цель: $10), ROAS 3x, лидов 32 107, продаж 270, выручка $708 122, бюджет $224 754.',
            situation:
              'Рынок онлайн-образования США был перегрет: CPL держался около целевого $10, но до завершения программы доходило только 2,5–3% студентов. Это означало, что проблема была не только в цене лида, но и в соответствии сообщения реальному намерению аудитории.',
            task:
              'Снизить CPL ниже $10 и улучшить retention (долю студентов, завершающих программу) с 2,5% до ≥3,3% для ЦА профессионалов 30–50 лет.',
            action:
              'Разложил CJM от креатива до завершения программы и посмотрел, где именно теряется мотивация. Сегментировал аудиторию по демографии, мотивации и поведению. По тестам стало видно: профессионалы 30–50 лучше реагируют на конкретную карьерную выгоду, чем на общие обещания. Отсюда и связка форматов: сначала video для объяснения ценности, затем static для дожима решения.',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Формат коммуникации', 'Video solo vs Static solo vs Video → Static sequence', 'Sequence: CPL $7,20, retention 3,39%'],
                ['Оффер', '«Карьерный рост +32%» vs «Гибкость» vs «Аккредитация»', '«Карьерный рост»: CTR 3,2%, CR в оплату 11,8%']
              ]
            },
            result:
              'CPL снизился до $7 (на 30% ниже цели $10), ROAS — 3x. Получили 32 107 лидов и 270 продаж. Retention вырос до 3,39%, что дало улучшение на 35% (расчёт от оплат). Кейс подтвердил, что не весь трафик одинаково полезен: часть эффекта дала именно работа с намерением и сообщением.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Формула', 'Значение'],
              rows: [
                ['CPL', 'Budget / Leads', '$7'],
                ['CAC (оценка)', 'Budget / Sales (224 754 / 270)', '$832'],
                ['ROMI', '(Revenue – Ad Spend) / Ad Spend', '215%'],
                ['CR lead → оплата (оценка)', 'Sales / Leads', '~10,8%']
              ]
            },
            learnings:
              'Лучше всего сработала двухэтапная связка video → static и конкретный оффер про карьерный рост. Ограничение проекта — длинный цикл решения (30–60 дней), поэтому тесты шли дольше обычного. В похожей задаче раньше закрепил бы retention как ключевую метрику качества и принимал бы по нему решения быстрее.',
            transfer:
              'В Метрике создаю динамические аудитории (смотрел видео, но не оставил заявку) → экспорт в VK Рекламу для статичных офферов. Цепочки: видео (широкая) → статика (тёплая) → персонализированный оффер (горячая). Когорты по неделям для отслеживания retention.'
          }
        },
        {
          id: 'dental-america',
          title: 'Dental America — Healthcare B2B, США',
          period: '2024–2025',
          summary: 'Переупаковал сообщение вокруг экономического аргумента и получил B2B-лиды с CPL вдвое ниже целевого.',
          metrics: ['Бюджет: $191 481', 'Лидов: 3 936', 'Выручка: $651 032', 'ROAS: 3,4x', 'CPL: $48,64 (целевой $100)', 'Средний чек: $3 108'],
          details: {
            rolePeriod: 'Роль: Product Marketing Manager & Analytics Specialist. Период: 2024–2025.',
            keyMetrics: 'CPL $48,64 (цель: $100), ROAS 3,4x, лидов 3 936, выручка $651 032, средний чек $3 108, бюджет $191 481.',
            situation:
              'Dental America продавала стоматологическое оборудование владельцам клиник и главным врачам (B2B). На рынке доминировали сообщения про спецификации и сертификаты, а главный коммерческий аргумент компании — цена на 15–25% ниже рынка — звучал слабо. В результате первое касание не объясняло, зачем рассматривать именно это предложение.',
            task: 'Привлечь высококачественных B2B-лидов при CPL ≤ $100 в условиях длинного цикла продажи 90–180 дней.',
            action:
              'Проанализировал кампании, сообщения конкурентов и результаты тестов. Сегментировал аудиторию на одиночные клиники, сети и дистрибьюторов, чтобы разделить логику аргументации по сегментам. Через интервью с продажами и разбор звонков уточнил ключевой запрос ЦА: «Как получить качественное оборудование и не переплатить?». В коммуникации первого касания усилил этот тезис, а технические детали оставил для более глубокого рассмотрения.',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Сообщение', 'Прямое сравнение цен vs спецификации', 'CTR +40%, CPL $48,64 vs $94'],
                ['CTA', '«Запросить КП» vs «Узнать больше»', 'CR 28%, доля decision-makers 72%']
              ]
            },
            result:
              'CPL составил $48,64 (на 51,4% ниже цели $100), ROAS — 3,4x. Привлекли 3 936 лидов и выручку $651 032. Качество лидов подтверждали еженедельной обратной связью от продаж, чтобы не терять связь между рекламным сообщением и реальным спросом.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Формула', 'Значение'],
              rows: [
                ['CAC (оценка)', 'Budget / Sales (191 481 / ~210 продаж)', '~$912'],
                ['Средний чек', 'Revenue / Sales', '$3 108'],
                ['ROMI', '(Revenue – Ad Spend) / Ad Spend', '240%'],
                ['LTV/CAC (оценка)', 'при repeat rate ~22% и средней повторной покупке ~$1 200', '~3,7:1']
              ]
            },
            learnings:
              'Лучше всего сработала ясная коммерческая рамка: сначала экономика закупки, затем детали. Регулярная обратная связь от продаж помогала держать качество лида под контролем. Сложность — согласование изменений внутри команды. Если повторять проект, раньше добавил бы ROI-калькулятор на лендинг.',
            transfer:
              'Для B2B в РФ: Директ + myTarget с таргетингом по должности, интеграция Битрикс24 с Метрикой для сквозного трекинга лид → звонок → продажа, Roistat/Calltouch, динамические аудитории Метрики → экспорт в VK.'
          }
        },
        {
          id: 'pgk-crm',
          title: 'Первая Грузовая Компания — CRM, Россия',
          period: 'Дек 2023 – Апр 2024',
          summary: 'Выстроил базовую CRM-логику для длинного B2B-цикла: сегментация, регулярные касания и реактивация базы.',
          metrics: ['Email-кампаний: 12+', 'SMS-рассылок: 8+', 'Open Rate: 24% (+8% vs. avg)', 'Клиентов сегментировано: 500+'],
          details: {
            rolePeriod: 'Роль: CRM & Retention Marketing Specialist (Junior). Период: Дек 2023 – Апр 2024.',
            keyMetrics: '12+ email, 8+ SMS, Open Rate 24% (+8% vs B2B avg), 15+ новых клиентов в онбординге, 500+ клиентов сегментировано.',
            situation:
              'ПГК — крупнейший частный оператор ж/д перевозок в России. В B2B-базе 500+ клиентов коммуникация шла нерегулярно: без сегментации, без автоворонок и с ограниченной управляемостью повторных касаний. Для длинного цикла сделки это означало потерю уместности касаний и слабую работу с удержанием.',
            task: 'Запустить систему CRM-коммуникаций email + SMS, сегментировать базу, создать автоворонки для онбординга и повысить retention.',
            action:
              'Сегментировал 500+ клиентов на 8 групп по объёму перевозок, типу груза, региону и частоте обращений, отдельно выделил 120 «спящих» клиентов. Настроил календарь касаний и связал его с lifecycle-логикой по сегментам. Запустил 12+ email, 8+ SMS и онбординг-воронку в Битрикс24 (7 писем за 30 дней).',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Тема письма', 'Персонализация (имя + тип груза) vs стандартная', 'OR 26% vs 19% (+37%)'],
                ['Реактивация', 'Спецпредложения для спящих клиентов', '26 из 120 реактивированы (22%)'],
                ['SMS', 'SMS о статусе vs без SMS', 'Звонки в поддержку −39%']
              ]
            },
            result:
              'Open Rate достиг 24% (на 8% выше среднего по B2B — 16%). Запущено 12+ email и 8+ SMS, в онбординг переведено 15+ новых корпоративных клиентов. Реактивировано 22% «спящих» (26 из 120), повторные обращения выросли примерно на 18%, звонки в поддержку снизились на 39% (оценка). Для junior-контекста это показало, что даже базовая CRM-дисциплина заметно улучшает удержание и сервисную нагрузку.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Расчёт', 'Значение'],
              rows: [
                ['Средний чек клиента', 'по данным проекта', '~₽850 000'],
                ['Выручка от реактивации (оценка)', '26 × ₽850K × 1 заказ', '~₽22 млн'],
                ['Прирост выручки (оценка)', '+18% повторных обращений', '~₽30 млн'],
                ['Затраты на CRM', 'за 5 месяцев', '~₽300 000']
              ]
            },
            learnings:
              'Лучше всего сработали сегментация базы, персонализация по типу груза и региону, а также SMS по статусу. Ограничение — junior-формат роли и объём доступа к системам. Если повторять, раньше связал бы CRM с системой отслеживания грузов для автоматических триггеров.',
            transfer: 'Применён в российском B2B-стеке.'
          }
        }
      ]
    },
    resume: {
      overline: 'RESUME (Резюме-страница)',
      title: 'Станислав Бегун — Product Marketing / Growth',
      subtitle: 'Ключевые результаты: 367K+ лидов при бюджете $621K и среднем ROAS 4,1x.',
      description:
        'Фокус — на качестве спроса и управляемой воронке. Ключевые результаты: CPL ниже в 8 раз (Zillow), retention выше на 35% в EdTech-проекте (Capella), B2B-лиды с CPL вдвое ниже цели (Dental America), запуск CRM-системы 12+ email и 8+ SMS с OR 24% (ПГК). Опыт: K.Target — Product Marketing Manager & Analytics Specialist (Май 2024 – Дек 2025), проекты из США: Real Estate, EdTech, Healthcare B2B, SaaS, бюджет $621K, выручка $2,5M+. Первая Грузовая Компания — CRM & Retention Marketing Specialist (Junior) (Дек 2023 – Апр 2024), CRM-коммуникации для B2B-логистики, сегментация 500+ клиентов. Навыки: аналитика, performance, CRM, unit-экономика, SEO. Языки: русский (родной), английский (C1).',
      downloadLabel: 'Скачать резюме (PDF)'
    },
    contacts: {
      overline: 'CONTACTS',
      title: 'На связи',
      subtitle:
        'Рассматриваю роли в продуктовых командах. Не работаю с проектами в индустриях: gambling, оружие, товары двойного назначения с военным использованием, алкоголь и табак.',
      items: [
        { label: 'Telegram', value: '@stanislav_begun', href: 'https://t.me/stanislav_begun' },
        { label: 'Телефон', value: '+7 (901) 906-08-26', href: 'tel:+79019060826' },
        { label: 'Email', value: 'stanislavbegun005@gmail.com', href: 'mailto:stanislavbegun005@gmail.com' }
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
