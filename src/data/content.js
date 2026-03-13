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
        'Product Marketing Manager с сильной базой в performance и CRM. Мой фокус — позиционирование, логика выхода в рынок и качество спроса на всём пути клиента, а не только объём привлечения.',
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
      title: '2+ года в Product Marketing: позиционирование, GTM и качество спроса',
      subtitle:
        'Проекты в США (Real Estate, EdTech, Healthcare B2B, SaaS) и России. Свободно работаю на русском и английском (C1).',
      photoAlt: 'Станислав Бегун',
      paragraphs: [
        'Обычно я начинаю с того, как рынок читает продукт: что обещает коммуникация, кто на неё откликается и где по пути к сделке теряется мотивированный спрос. Поэтому смотрю не только на привлечение, но и на то, как связаны acquisition, activation и retention.',
        'Образование: Финансовый университет при Правительстве РФ — Факультет социальных наук и массовых коммуникаций, «Связи с общественностью в политике и бизнесе/Public relations in politics and business».',
        'Одних медийных метрик обычно недостаточно. Важно понимать, где обещание расходится с ожиданием, как разные сегменты проходят CJM и в какой точке ломается конверсия. На практике я держу вместе позиционирование, GTM-логику, performance и CRM как одну систему.',
        'Сертификаты: Яндекс Метрика (2026), HubSpot AI for Marketers и HubSpot Digital Marketing Certification (2025), Mindbox «Автоматизация маркетинга» (2025), Online Marketing eMarketing Institute (2025), Skillbox «Интернет-маркетолог» + Bootcamp (2024), Google Ads for Beginners Coursera (2024).'
      ],
      focus: [
        {
          title: 'Как работаю',
          text:
            'Сначала проверяю, как продукт читается аудиторией: где обещание не совпадает с ожиданием и на каком этапе CJM теряется конверсия. Потом формулирую гипотезы по сообщению, ценностному предложению, сегментам и логике касаний. В работу оставляю только те решения, которые улучшают качество спроса и экономику воронки; измерения держу прозрачными — UTM, когорты, регулярный разбор.'
        },
        {
          title: 'Дополнительно',
          text:
            'AI в работе: использую Claude, Perplexity, ChatGPT и Grok для аналитики, подготовки гипотез и ускорения отчётности. Бизнес-аналитика: финмоделирование, прогнозирование LTV, когортный анализ. Блог: лайфстайл-блог о маркетинге и спорте. Спорт: чемпион Москвы по футболу в составе «Торпедо Москва» (2005 г.р.).'
        }
      ],
      usefulIf: {
        title: 'Я буду вам полезен, если:',
        items: [
          'Нужно уточнить позиционирование продукта или оффера до масштабирования привлечения.',
          'Нужно пересобрать ценностное предложение и сообщения под разные сегменты.',
          'Нужно связать acquisition с activation и retention, а не оптимизировать только верх воронки.',
          'Нужно поднять качество спроса и доходимость до сделки, а не просто объём лидов.',
          'Нужно проверить growth-гипотезы через CJM, сегменты и сценарии касаний.',
          'Нужно синхронизировать маркетинговую, продуктовую и коммерческую логику в одном процессе.'
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
          summary:
            'Через дисциплину частоты, сегментацию по стадии спроса и перераспределение бюджета вывел CPL в 8 раз ниже при росте объёма лидов.',
          metrics: ['Бюджет: $204 921', 'Лидов: 331 248', 'Выручка: $1 188 541', 'ROAS: 5,8x', 'CPL: $0,62 (целевой $5)'],
          details: {
            rolePeriod: 'Роль: Product Marketing Manager & Analytics Specialist. Период: 2024–2025.',
            keyMetrics:
              'CPL $0,62 (цель: $5), ROAS 5,8x, 331 248 лидов, выручка $1 188 541, бюджет $204 921.',
            situation:
              'Zillow конкурировала с Redfin и Trulia в перегретом рынке. В Meta Ads уже работали 6 каналов, но часть из них расходовала бюджет вхолостую: CPC доходил до $1,92–$1,96, а частота поднималась до 27 показов в неделю. По поведению кампаний было видно, что спрос выгорает до того, как пользователь доходит до следующего шага.',
            task:
              'Оценить эффективность каждого канала, найти узкие места, снизить CPL до целевого и увеличить объём лидов без роста бюджета.',
            action:
              'Провёл разбор по CPC, CTR, CPL и Frequency на уровне каналов и сегментов. Разделил аудитории по стадиям спроса и жизненного цикла клиента, чтобы отделить холодный спрос от уже выгоревшей аудитории. После этого отключил 2 неэффективных канала, 70% бюджета перевёл в рабочие связки и 30% оставил на тест новых сегментов. Дополнительно ввёл frequency cap, чтобы снизить давление на аудиторию и не тратить бюджет на повторное догоняние людей, которые уже перестали реагировать на сообщение.',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Диагностика каналов', '6 каналов Meta Ads', '2 канала с CPC $1,92–$1,96 и частотой 14–27 раз в неделю признаны неэффективными'],
                ['Рабочие связки', 'эффективные каналы vs слабые', 'у рабочих каналов CPC $0,55–$0,62 и CTR 1,78–3,04%'],
                ['Управление частотой', 'frequency cap + обновление креативов', 'после оптимизации Frequency снизился до 3,13']
              ]
            },
            result:
              'CPL снизился до $0,62 (на 87,6% лучше цели $5), ROAS составил 5,8x. Получили 331 248 лидов и выручку $1 188 541. Итоговые поведенческие сигналы стали заметно здоровее: CTR составил 1,68%, а частота снизилась до 3,13. Для бизнеса это был не разовый всплеск, а более управляемая модель закупки спроса.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Что показывает', 'Значение'],
              rows: [
                ['CPL', 'стоимость лида', '$0,62'],
                ['ROAS', 'окупаемость рекламы', '5,8x'],
                ['CTR', 'качество первичного контакта', '1,68%'],
                ['Frequency', 'контроль выгорания аудитории', '3,13']
              ]
            },
            learnings:
              'Решающим оказался не один креатив, а дисциплина решений: быстро отключать слабые связки и жёстко контролировать частоту. Самое сложное — синхронизировать перераспределение бюджета и обновление креативов так, чтобы спрос не успевал выгорать повторно.',
            transfer:
              'Для РФ-стека логика переносится в Яндекс.Директ, VK Рекламу и Метрику: сегментация по этапам спроса, динамические аудитории, frequency cap, единая UTM-разметка и еженедельный разбор качества трафика и лидов.'
          }
        },
        {
          id: 'capella-university',
          title: 'Capella University — EdTech, США',
          period: '2024–2025',
          summary:
            'Сфокусировался на качестве спроса, а не только на CPL: за счёт CJM и формата коммуникации retention вырос на 35%.',
          metrics: [
            'Бюджет: $224 754',
            'Лидов: 32 107',
            'Выручка: $708 122',
            'ROAS: 3x',
            'CPL: $7 (целевой $10)',
            'Retention: +35%'
          ],
          details: {
            rolePeriod: 'Роль: Product Marketing Manager & Analytics Specialist. Период: 2024–2025.',
            keyMetrics:
              'CPL $7 (цель: $10), ROAS 3x, лидов 32 107, продаж 270, выручка $708 122, бюджет $224 754.',
            situation:
              'Рынок онлайн-образования США был перегрет: CPL держался около целевого $10, но до завершения программы доходило только 2,5–3% студентов. Это означало, что проблема была не только в цене лида, но и в том, насколько сообщение совпадало с реальным намерением аудитории.',
            task:
              'Снизить CPL ниже $10 и улучшить retention — долю студентов, завершающих программу — с 2,5–3% до 3,39% для аудитории профессионалов 30–50 лет.',
            action:
              'Построил полную Customer Journey Map от первого контакта до завершения программы и посмотрел, где именно теряется мотивация. Анализ показал, что motion video хорошо привлекает внимание, но приводит более случайный спрос, а static banners работают точнее и лучше фильтруют намерение. На этом построил связку: видео — для формирования интереса, статичный оффер — для уточнения ценности и дожима решения. Параллельно подготовил план A/B-тестов и брифы на креативы с фокусом на карьерный рост, гибкость обучения и аккредитацию.',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Формат креатива', 'motion video vs static banner', 'video давал больше внимания, static — более мотивированный спрос'],
                ['Коммуникационная связка', 'video → static', 'последовательность лучше работала на качество спроса, чем одиночный формат'],
                ['Ключевая метрика', 'удержание по программе', 'retention вырос до 3,39%']
              ]
            },
            result:
              'CPL снизился до $7 (на 30% ниже цели $10), ROAS — 3x. Получили 32 107 лидов и 270 продаж. Retention вырос до 3,39%, что дало улучшение на 35%. Кейс подтвердил, что не весь трафик одинаково полезен: существенную часть эффекта дала работа с намерением, сообщением и последовательностью касаний.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Что показывает', 'Значение'],
              rows: [
                ['CPL', 'стоимость лида', '$7'],
                ['ROAS', 'окупаемость рекламы', '3x'],
                ['Retention', 'доля завершивших программу', '3,39%'],
                ['Продажи', 'объём оплаченных программ', '270']
              ]
            },
            learnings:
              'Лучше всего сработала двухэтапная логика: сначала заинтересовать, потом уточнить ценность для более мотивированного сегмента. Ограничение проекта — длинный цикл решения, из-за чего часть гипотез приходилось оценивать не сразу. В похожей задаче retention я бы ставил в центр ещё раньше.',
            transfer:
              'В российском стеке эта логика переносится через Метрику, VK Рекламу и CRM-цепочки: видео или широкий охват для первого интереса, статичный оффер и персонализация — для уточнения намерения и дальнейшего движения по воронке.'
          }
        },
        {
          id: 'dental-america',
          title: 'Dental America — Healthcare B2B, США',
          period: '2024–2025',
          summary:
            'Переупаковал сообщение вокруг экономического аргумента и получил B2B-лиды с CPL вдвое ниже целевого.',
          metrics: [
            'Бюджет: $191 481',
            'Лидов: 3 936',
            'Выручка: $651 032',
            'ROAS: 3,4x',
            'CPL: $48,64 (целевой $100)',
            'Средний чек: $3 108'
          ],
          details: {
            rolePeriod: 'Роль: Product Marketing Manager & Analytics Specialist. Период: 2024–2025.',
            keyMetrics:
              'CPL $48,64 (цель: $100), ROAS 3,4x, лидов 3 936, выручка $651 032, средний чек $3 108, бюджет $191 481.',
            situation:
              'Dental America продавала стоматологическое оборудование владельцам клиник и главным врачам. На рынке доминировали сообщения про спецификации и сертификаты, а главный коммерческий аргумент компании — цена на 15–25% ниже рынка — звучал слабо. В результате первое касание не объясняло, зачем рассматривать именно это предложение.',
            task:
              'Привлечь качественные B2B-лиды при CPL не выше $100 в условиях длинного цикла продажи 90–180 дней.',
            action:
              'Провёл конкурентный анализ и разобрал текущие кампании, прошлые тесты и поведение спроса. Отдельно исследовал, как целевая аудитория принимает решение: владельцам клиник и главным врачам важнее было быстро понять экономику закупки, чем сразу получать весь объём технических деталей. Поэтому в первой коммуникации акцент сместил на ценовое преимущество, гарантию качества и сертификацию, а подробные характеристики перенёс на лендинг и более глубокие этапы воронки.',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Позиционирование', 'спецификации vs экономический аргумент', 'лучше сработала подача через цену и окупаемость закупки'],
                ['Первое касание', 'общий продуктовый креатив vs сравнение цен', 'сообщение с ценовым преимуществом давало более качественный B2B-интерес'],
                ['Структура сообщения', 'детали сразу vs детали на лендинге', 'короткая коммерческая рамка лучше работала на первичный отклик']
              ]
            },
            result:
              'CPL составил $48,64 (на 51,4% ниже цели $100), ROAS — 3,4x. Привлекли 3 936 лидов и выручку $651 032. Для проекта было критично не просто получить заявки, а привести B2B-аудиторию, которая сразу понимала, в чём коммерческое преимущество предложения.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Что показывает', 'Значение'],
              rows: [
                ['CPL', 'стоимость лида', '$48,64'],
                ['ROAS', 'окупаемость рекламы', '3,4x'],
                ['Средний чек', 'размер сделки', '$3 108'],
                ['Цикл продажи', 'длина принятия решения', '90–180 дней']
              ]
            },
            learnings:
              'Лучше всего сработала ясная коммерческая рамка: сначала экономика закупки, потом детали. В B2B-аудитории это особенно важно, когда цикл продажи длинный, а сообщение на первом касании должно сразу отсеивать случайный интерес.',
            transfer:
              'Для российского B2B это переносится в Яндекс.Директ, VK Рекламу, Метрику и CRM: короткое сообщение о коммерческой выгоде на первом касании, более детальная аргументация — уже на лендинге, в рассылках и в коммерческом диалоге.'
          }
        },
        {
          id: 'pgk-crm',
          title: 'Первая Грузовая Компания — CRM, Россия',
          period: 'Дек 2023 – Апр 2024',
          summary:
            'Выстроил базовую CRM-логику для длинного B2B-цикла: сегментация, регулярные касания и реактивация базы.',
          metrics: [
            'Email-кампаний: 12+',
            'SMS-рассылок: 8+',
            'Open Rate: 24% (+8% vs. avg)',
            'Клиентов сегментировано: 500+'
          ],
          details: {
            rolePeriod: 'Роль: CRM & Retention Marketing Specialist (Junior). Период: Дек 2023 – Апр 2024.',
            keyMetrics:
              '12+ email, 8+ SMS, Open Rate 24% (+8% vs B2B avg), 15+ новых клиентов в онбординге, 500+ клиентов сегментировано.',
            situation:
              'В B2B-базе ПГК коммуникация шла нерегулярно: без сегментации, без автоворонок и с ограниченной управляемостью повторных касаний. Для длинного цикла сделки это означало потерю уместности контакта и слабую работу с удержанием.',
            task:
              'Запустить систему CRM-коммуникаций email + SMS, сегментировать базу, собрать базовую lifecycle-логику для онбординга, удержания и реактивации.',
            action:
              'Сегментировал 500+ клиентов на 8 групп по объёму перевозок, типу груза, региону и частоте обращений. Отдельно выделил 120 «спящих» клиентов. Дальше собрал календарь касаний, привязал его к логике сегментов и запустил 12+ email, 8+ SMS и онбординг-цепочку в Bitrix24. Фокус был не на сложности механики, а на регулярности, уместности контакта и понятной системе действий внутри длинного B2B-цикла.',
            experiments: {
              type: 'table',
              headers: ['Эксперимент', 'Сравнение', 'Результат'],
              rows: [
                ['Сегментация базы', 'единая база vs 8 сегментов', '500+ клиентов переведены в рабочую сегментную модель'],
                ['Реактивация', 'отдельный сценарий для 120 спящих', '26 из 120 клиентов реактивированы (22%)'],
                ['SMS-уведомления', 'сервисные касания по статусу', 'звонки в поддержку снизились на 39% (оценка)']
              ]
            },
            result:
              'Open Rate достиг 24% — на 8% выше среднего по B2B. Запущено 12+ email и 8+ SMS, в онбординг переведено 15+ новых корпоративных клиентов. Реактивировано 22% «спящих» клиентов, повторные обращения выросли примерно на 18%, а сервисная нагрузка снизилась. Для junior-контекста это показало, что даже базовая CRM-дисциплина заметно улучшает удержание и управляемость клиентской базы.',
            unitEconomics: {
              type: 'table',
              headers: ['Показатель', 'Что показывает', 'Значение'],
              rows: [
                ['Open Rate', 'эффективность email-коммуникации', '24%'],
                ['Сегментация', 'размер рабочей базы', '500+ клиентов'],
                ['Реактивация', 'возврат спящих клиентов', '26 из 120 (22%)'],
                ['Повторные обращения', 'эффект CRM-логики', '+18%']
              ]
            },
            learnings:
              'Лучше всего сработали сегментация базы, персонализация по типу груза и региону, а также SMS по статусу. Ограничение проекта — junior-формат роли и объём доступа к системам, поэтому фокус был на аккуратной рабочей логике, а не на сложной архитектуре решений.',
            transfer:
              'Кейс показывает базовую PMM/CRM-логику для B2B-рынка с длинным циклом: сначала навести порядок в сегментах и касаниях, а уже потом усложнять механику и автоматизацию.'
          }
        }
      ]
    },
    resume: {
      overline: 'RESUME (Резюме-страница)',
      title: 'Станислав Бегун — Product Marketing Manager / Growth',
      subtitle: 'Ключевые результаты: 367K+ лидов при бюджете $621K и среднем ROAS 4,1x.',
      description:
        'Фокус — на качестве спроса и управляемой воронке. Ключевые результаты: CPL ниже в 8 раз (Zillow), retention выше на 35% в EdTech-проекте (Capella), B2B-лиды с CPL вдвое ниже цели (Dental America), запуск CRM-системы 12+ email и 8+ SMS с OR 24% (ПГК). Опыт: K.Target — Product Marketing Manager & Analytics Specialist (Май 2024 – Дек 2025), проекты из США: Real Estate, EdTech, Healthcare B2B, SaaS, бюджет $621K, выручка $2,5M+. Первая Грузовая Компания — CRM & Retention Marketing Specialist (Junior) (Дек 2023 – Апр 2024), CRM-коммуникации для B2B-логистики, сегментация 500+ клиентов. Навыки: positioning, GTM, аналитика, performance, CRM, unit-экономика, SEO. Языки: русский (родной), английский (C1).',
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
      overline: 'Hero',
      title: 'Stanislav Begun',
      subtitle:
        'Product Marketing Manager with a strong foundation in performance and CRM. My focus is positioning, go-to-market logic, and demand quality across the full customer journey.',
      telegramCta: 'Message on Telegram',
      casesCta: 'View cases',
      photoAlt: 'Stanislav Begun',
      stats: [
        { value: '$621K', label: 'ad budget' },
        { value: '367,291', label: 'leads' },
        { value: '4.1x', label: 'average ROAS' }
      ]
    },
    about: {
      overline: 'ABOUT',
      title: '2+ years in Product Marketing: positioning, GTM, and demand quality',
      subtitle:
        'Projects across the US (Real Estate, EdTech, Healthcare B2B, SaaS) and Russia. Fluent in Russian and English (C1).',
      photoAlt: 'Stanislav Begun',
      paragraphs: [
        'I usually start with how the market reads a product: what the message promises, who responds to it, and where motivated demand gets lost before the deal happens. That is why I look not only at acquisition, but at how acquisition, activation, and retention connect across the funnel.',
        'Education: Financial University under the Government of the Russian Federation — Faculty of Social Sciences and Mass Communications, Public Relations in Politics and Business.',
        'Media metrics alone are rarely enough. It is important to understand where the promise diverges from expectations, how different segments move through the customer journey, and at which point conversion breaks. In practice, I keep positioning, GTM logic, performance, and CRM in one working system.',
        'Certifications: Yandex Metrica (2026), HubSpot AI for Marketers and HubSpot Digital Marketing Certification (2025), Mindbox Marketing Automation (2025), Online Marketing eMarketing Institute (2025), Skillbox Internet Marketer + Bootcamp (2024), Google Ads for Beginners Coursera (2024).'
      ],
      focus: [
        {
          title: 'How I work',
          text:
            'I start by checking how the product is read by the audience: where the promise does not match expectations and at which point in the customer journey conversion gets lost. Then I form hypotheses around messaging, value proposition, segments, and touchpoint logic. I only keep the decisions that improve demand quality and funnel economics; measurement stays transparent through UTMs, cohorts, and regular reviews.'
        },
        {
          title: 'Additional',
          text:
            'AI at work: I use Claude, Perplexity, ChatGPT, and Grok for analysis, hypothesis development, and faster reporting. Business analytics: financial modeling, LTV forecasting, cohort analysis. Blog: lifestyle blog about marketing and sports. Sport: Moscow football champion with Torpedo Moscow (2005 age group).'
        }
      ],
      usefulIf: {
        title: 'I can be useful if:',
        items: [
          'You need to sharpen product or offer positioning before scaling acquisition.',
          'You need to rebuild value proposition and messaging for different segments.',
          'You need to connect acquisition with activation and retention instead of optimizing only the top of the funnel.',
          'You need to improve demand quality and deal progression, not just lead volume.',
          'You need to test growth hypotheses through customer journey, segments, and touchpoint scenarios.',
          'You need to align marketing, product, and commercial logic within one process.'
        ]
      }
    },
    cases: {
      overline: 'CASE STUDIES',
      title: 'Cases',
      subtitle: 'Larger projects where the work went beyond traffic and into messaging, demand quality, and funnel economics.',
      caseCta: 'Open case →',
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
        transfer: 'Transfer to RU stack'
      },
      items: [
        {
          id: 'zillow-real-estate',
          title: 'Zillow — Real Estate, US',
          period: '2024–2025',
          summary:
            'Reduced CPL 8x through frequency discipline, demand-stage segmentation, and budget reallocation.',
          metrics: ['Budget: $204,921', 'Leads: 331,248', 'Revenue: $1,188,541', 'ROAS: 5.8x', 'CPL: $0.62 (target $5)'],
          details: {
            rolePeriod: 'Role: Product Marketing Manager & Analytics Specialist. Period: 2024–2025.',
            keyMetrics:
              'CPL $0.62 (target: $5), ROAS 5.8x, 331,248 leads, revenue $1,188,541, budget $204,921.',
            situation:
              'Zillow was competing with Redfin and Trulia in a crowded real estate market. Six Meta Ads channels were already running, but some of them were burning budget inefficiently: CPC reached $1.92–$1.96 and frequency climbed to 27 impressions per week. Campaign behavior showed that demand was burning out before users moved further down the funnel.',
            task:
              'Evaluate channel efficiency, identify bottlenecks, reduce CPL to target, and increase lead volume without increasing budget.',
            action:
              'I audited CPC, CTR, CPL, and Frequency across channels and segments. Then I separated audiences by demand stage and customer journey to distinguish colder demand from exhausted retargeting pools. Two weak channels were shut down, 70% of budget was reallocated into working combinations, and 30% was kept for testing new segments. I also introduced a frequency cap to reduce audience pressure and improve media efficiency.',
            experiments: {
              type: 'table',
              headers: ['Experiment', 'Comparison', 'Result'],
              rows: [
                ['Channel diagnosis', '6 Meta Ads channels', '2 channels with CPC $1.92–$1.96 and frequency 14–27/week were identified as inefficient'],
                ['Working combinations', 'efficient vs weak channels', 'efficient channels showed CPC $0.55–$0.62 and CTR 1.78–3.04%'],
                ['Frequency management', 'frequency cap + creative refresh', 'post-optimization frequency dropped to 3.13']
              ]
            },
            result:
              'CPL dropped to $0.62, or 87.6% better than the $5 target, while ROAS reached 5.8x. The campaign generated 331,248 leads and $1,188,541 in revenue. CTR ended at 1.68% and frequency dropped to 3.13, making demand acquisition more manageable and scalable.',
            unitEconomics: {
              type: 'table',
              headers: ['Metric', 'What it shows', 'Value'],
              rows: [
                ['CPL', 'cost per lead', '$0.62'],
                ['ROAS', 'ad efficiency', '5.8x'],
                ['CTR', 'quality of first interaction', '1.68%'],
                ['Frequency', 'control over audience fatigue', '3.13']
              ]
            },
            learnings:
              'The main win came not from one creative, but from decision discipline: cutting weak combinations fast and controlling repetition aggressively. The hardest part was synchronizing budget shifts and creative updates so demand would not burn out again.',
            transfer:
              'This logic transfers well to Yandex Direct, VK Ads, and Yandex Metrica: stage-based segmentation, dynamic audiences, frequency caps, clean UTM structure, and weekly reviews of traffic and lead quality.'
          }
        },
        {
          id: 'capella-university',
          title: 'Capella University — EdTech, US',
          period: '2024–2025',
          summary:
            'Shifted the focus from CPL alone to demand quality: CJM and message sequencing helped improve retention by 35%.',
          metrics: [
            'Budget: $224,754',
            'Leads: 32,107',
            'Revenue: $708,122',
            'ROAS: 3x',
            'CPL: $7 (target $10)',
            'Retention: +35%'
          ],
          details: {
            rolePeriod: 'Role: Product Marketing Manager & Analytics Specialist. Period: 2024–2025.',
            keyMetrics:
              'CPL $7 (target: $10), ROAS 3x, 32,107 leads, 270 sales, revenue $708,122, budget $224,754.',
            situation:
              'The US online education market was overcrowded. CPL was around the $10 target, but only 2.5–3% of students completed the program. This meant the issue was not only cost per lead, but how well the message matched real intent.',
            task:
              'Reduce CPL below $10 and improve retention — the share of students completing the program — from 2.5–3% to 3.39% for working professionals aged 30–50.',
            action:
              'I mapped the full customer journey from creative view to program completion and analyzed where motivation was being lost. Video drove attention, but static banners filtered intent better and brought in more motivated demand. Based on that, I built a two-step logic: video to create interest, then static messaging to clarify value and push decision-making. At the same time, I prepared an A/B testing plan and content briefs around career growth, flexibility, and accreditation.',
            experiments: {
              type: 'table',
              headers: ['Experiment', 'Comparison', 'Result'],
              rows: [
                ['Creative format', 'motion video vs static banner', 'video drove more attention, static brought more motivated demand'],
                ['Message sequence', 'video → static', 'the sequence worked better for demand quality than single-format communication'],
                ['Retention as quality metric', 'baseline vs post-test', 'retention reached 3.39%']
              ]
            },
            result:
              'CPL dropped to $7, which is 30% below target, while ROAS reached 3x. The campaign generated 32,107 leads and 270 sales. Retention increased to 3.39%, up 35% from baseline. The case showed that not all traffic is equally valuable: a meaningful part of the result came from better intent and message fit.',
            unitEconomics: {
              type: 'table',
              headers: ['Metric', 'What it shows', 'Value'],
              rows: [
                ['CPL', 'cost per lead', '$7'],
                ['ROAS', 'ad efficiency', '3x'],
                ['Retention', 'program completion rate', '3.39%'],
                ['Sales', 'paid enrollments', '270']
              ]
            },
            learnings:
              'The strongest effect came from the two-step logic: first capture interest, then sharpen value for a more motivated segment. Because the decision cycle was relatively long, part of the learning emerged later. In similar work, I would treat retention as a central quality metric even earlier.',
            transfer:
              'In a Russian stack, this logic translates through Metrica, VK Ads, and CRM-based journeys: broader interest generation first, then sharper static offers and segment-specific messaging to qualify intent.'
          }
        },
        {
          id: 'dental-america',
          title: 'Dental America — Healthcare B2B, US',
          period: '2024–2025',
          summary:
            'Reframed the message around the economic argument and generated B2B leads at half the target CPL.',
          metrics: [
            'Budget: $191,481',
            'Leads: 3,936',
            'Revenue: $651,032',
            'ROAS: 3.4x',
            'CPL: $48.64 (target $100)',
            'Average deal: $3,108'
          ],
          details: {
            rolePeriod: 'Role: Product Marketing Manager & Analytics Specialist. Period: 2024–2025.',
            keyMetrics:
              'CPL $48.64 (target: $100), ROAS 3.4x, 3,936 leads, revenue $651,032, average deal $3,108, budget $191,481.',
            situation:
              'Dental America sold dental equipment to clinic owners and chief doctors. Market messaging was dominated by specifications and certifications, while the company’s strongest commercial argument — pricing 15–25% below market — was barely visible. As a result, the first touchpoint did not explain why the offer was worth considering.',
            task:
              'Bring in quality B2B leads at CPL ≤ $100 in a long 90–180 day sales cycle.',
            action:
              'I reviewed current campaigns, competitor messaging, past tests, and how the audience made decisions. The main pattern was clear: at first touch, the market needed to understand the economics of the purchase, not receive every technical detail at once. So I moved the communication toward price advantage, quality assurance, and certification, while keeping detailed specifications for later stages and landing pages.',
            experiments: {
              type: 'table',
              headers: ['Experiment', 'Comparison', 'Result'],
              rows: [
                ['Positioning', 'specifications vs economic argument', 'messaging built around price and purchase economics performed better'],
                ['First touchpoint', 'general product message vs price comparison', 'price-led communication attracted more relevant B2B demand'],
                ['Message structure', 'all details upfront vs details later', 'a shorter commercial frame worked better for initial response']
              ]
            },
            result:
              'CPL reached $48.64, which is 51.4% below the $100 target, while ROAS was 3.4x. The campaign produced 3,936 leads and $651,032 in revenue. More importantly, the incoming B2B demand understood the commercial value proposition much faster at the first touchpoint.',
            unitEconomics: {
              type: 'table',
              headers: ['Metric', 'What it shows', 'Value'],
              rows: [
                ['CPL', 'cost per lead', '$48.64'],
                ['ROAS', 'ad efficiency', '3.4x'],
                ['Average deal', 'deal size', '$3,108'],
                ['Sales cycle', 'decision-making length', '90–180 days']
              ]
            },
            learnings:
              'The clearest win came from simplifying the commercial frame: economics first, details second. In long-cycle B2B, the first message must qualify interest quickly instead of trying to explain everything at once.',
            transfer:
              'In Russian B2B this translates into Yandex Direct, VK Ads, Metrica, and CRM workflows: commercial advantage at first touch, deeper product justification on the landing page, in nurture flows, and in sales materials.'
          }
        },
        {
          id: 'pgk-crm',
          title: 'Freight One (PGK) — CRM, Russia',
          period: 'Dec 2023 – Apr 2024',
          summary:
            'Built a basic CRM logic for a long B2B cycle: segmentation, regular touchpoints, and dormant-base reactivation.',
          metrics: [
            '12+ email campaigns',
            '8+ SMS campaigns',
            'Open Rate: 24% (+8% vs avg)',
            '500+ clients segmented'
          ],
          details: {
            rolePeriod: 'Role: CRM & Retention Marketing Specialist (Junior). Period: Dec 2023 – Apr 2024.',
            keyMetrics:
              '12+ email campaigns, 8+ SMS campaigns, Open Rate 24% (+8% vs B2B average), 15+ new clients in onboarding, 500+ clients segmented.',
            situation:
              'In PGK’s B2B client base, communication was irregular: there was no clear segmentation, no onboarding or reactivation logic, and little control over repeated touchpoints. In a long sales cycle, that meant low contact relevance and weak retention work.',
            task:
              'Launch an email + SMS CRM communication system, segment the base, and build a basic lifecycle logic for onboarding, retention, and reactivation.',
            action:
              'I segmented 500+ clients into 8 groups by shipment volume, cargo type, region, and contact frequency, and separately выделил 120 dormant clients. Then I built a touchpoint calendar tied to those segments and launched 12+ email campaigns, 8+ SMS campaigns, and a Bitrix24 onboarding flow. The point was not to create complex automation, but to build regular, relevant communication within a long B2B cycle.',
            experiments: {
              type: 'table',
              headers: ['Experiment', 'Comparison', 'Result'],
              rows: [
                ['Base segmentation', 'single base vs 8 segments', '500+ clients moved into a working segment model'],
                ['Reactivation', 'separate flow for 120 dormant clients', '26 of 120 clients reactivated (22%)'],
                ['SMS notifications', 'service touchpoints by shipment status', 'support calls down by 39% (estimate)']
              ]
            },
            result:
              'Open Rate reached 24%, which is 8% above the B2B average. 12+ email campaigns and 8+ SMS campaigns were launched, 15+ new corporate clients entered onboarding, 22% of dormant clients were reactivated, and repeat inquiries increased by around 18%. Even within a junior role, the case showed how basic CRM discipline can improve both retention and service manageability.',
            unitEconomics: {
              type: 'table',
              headers: ['Metric', 'What it shows', 'Value'],
              rows: [
                ['Open Rate', 'email communication effectiveness', '24%'],
                ['Segmentation', 'working base size', '500+ clients'],
                ['Reactivation', 'return of dormant clients', '26 of 120 (22%)'],
                ['Repeat inquiries', 'effect of CRM logic', '+18%']
              ]
            },
            learnings:
              'The most useful levers were base segmentation, personalization by cargo type and region, and SMS status updates. The main limitation was the junior role format and restricted system access, so the emphasis stayed on a clean working logic rather than a complex architecture.',
            transfer:
              'The case shows a practical PMM/CRM logic for B2B markets with a long cycle: first create order in segments and touchpoints, and only then make the system more sophisticated.'
          }
        }
      ]
    },
    resume: {
      overline: 'Professional profile',
      title: 'Stanislav Begun — Product Marketing Manager / Growth',
      subtitle: 'Key results: 367K+ leads on a $621K budget with 4.1x average ROAS.',
      description:
        'Focus: demand quality and a more controllable funnel. Key outcomes: CPL reduced 8x (Zillow), retention improved by 35% in an EdTech project (Capella), B2B leads at half the target CPL (Dental America), and CRM setup with 12+ email and 8+ SMS campaigns at 24% open rate (PGK). Experience: K.Target — Product Marketing Manager & Analytics Specialist (May 2024 – Dec 2025), US projects in Real Estate, EdTech, Healthcare B2B, and SaaS, with $621K budget and $2.5M+ client revenue. Freight One — CRM & Retention Marketing Specialist (Junior) (Dec 2023 – Apr 2024), CRM communications for B2B logistics and segmentation of 500+ clients. Skills: positioning, GTM, analytics, performance, CRM, unit economics, SEO. Languages: Russian (native), English (C1).',
      downloadLabel: 'Download Resume (PDF)'
    },
    contacts: {
      overline: 'CONTACTS',
      title: 'Get in touch',
      subtitle:
        'Open to roles in product teams. I do not work with projects in gambling, weapons, dual-use military goods, alcohol, or tobacco.',
      items: [
        { label: 'Telegram', value: '@stanislav_begun', href: 'https://t.me/stanislav_begun' },
        { label: 'Phone', value: '+7 (901) 906-08-26', href: 'tel:+79019060826' },
        { label: 'Email', value: 'stanislavbegun005@gmail.com', href: 'mailto:stanislavbegun005@gmail.com' }
      ]
    }
  }
}
