export const site = {
  name: 'Contivo',
  domain: 'contivoapp.com',
  supportEmail: 'support@contivoapp.com',
  privacyEmail: 'privacy@contivoapp.com',
  googlePlayUrl: '#',
  appStoreUrl: '#',
  version: '1.0.0',
};

export const languages = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'ru', label: 'Русский', prefix: '/ru' },
  { code: 'de', label: 'Deutsch', prefix: '/de' },
];

export const text = {
  ru: {
    nav: { home: 'Главная', help: 'Помощь', news: 'Новости', contact: 'Контакты', support: 'Поддержка' },
    footer: { rights: 'Все права защищены.', privacy: 'Конфиденциальность', terms: 'Условия', help: 'Помощь', contact: 'Контакты' },
    home: {
      title: 'Contivo — финансы, бюджеты и цели',
      description: 'Contivo помогает вести личные и совместные финансы, бюджеты, цели и отчёты.',
      badge: 'Финансы · Бюджеты · Отчёты',
      h1: 'Контролируйте финансы спокойно и понятно.',
      lead: 'Contivo помогает вести доходы и расходы, создавать бюджеты, планировать цели и экспортировать отчёты в PDF и Excel.',
      play: 'Google Play — скоро',
      store: 'App Store — скоро',
      activeBudget: 'Активный бюджет', familyBudget: 'Семейный бюджет', totalBalance: 'Общий баланс', income: 'Доход', expense: 'Расход', latest: 'Последние операции', rent: 'Аренда', salary: 'Зарплата', groceries: 'Продукты',
      featuresTitle: 'Всё важное для финансов в одном месте',
      featuresSubtitle: 'Первая версия Contivo сфокусирована на модуле Finance: стабильность, понятный интерфейс и удобные отчёты.',
      budgetsTitle: 'Бюджеты', budgetsText: 'Создавайте личные и совместные бюджеты, приглашайте участников и распределяйте роли.',
      goalsTitle: 'Цели', goalsText: 'Планируйте накопления, отслеживайте прогресс и держите финансовые цели отдельно от расходов.',
      reportsTitle: 'Отчёты', reportsText: 'Экспортируйте данные в PDF и Excel для личного анализа или семейного обсуждения.',
      soonTitle: 'Скоро в приложении', soonText: 'После стабильного релиза Finance мы планируем добавить Calendar, Tasks, темы оформления и расширенную аналитику.', soonButton: 'Новости проекта'
    },
    pages: {
      notFound: 'Страница не найдена', notFoundText: 'Такой страницы нет или она была перемещена.', homeButton: 'На главную',
      contactTitle: 'Контакты', contactText: 'Если у вас есть вопрос, идея или проблема, напишите нам.', supportTitle: 'Поддержка', privacyTitle: 'Конфиденциальность',
      helpTitle: 'Помощь', helpQ1: 'Как создать бюджет?', helpA1: 'Откройте раздел финансов и создайте новый бюджет. После этого можно добавлять доходы, расходы, категории, цели и планы.', helpQ2: 'Как добавить доход или расход?', helpA2: 'Нажмите плюс или минус, выберите категорию, введите сумму и сохраните операцию.', helpQ3: 'Как работают совместные бюджеты?', helpA3: 'Владелец бюджета может приглашать участников и назначать роли. Участники видят общий бюджет в зависимости от прав доступа.', helpQ4: 'Как экспортировать отчёт?', helpA4: 'Откройте экспорт отчёта, выберите период и создайте PDF или Excel-файл.',
      newsTitle: 'Новости', newsText: 'Здесь позже будут публиковаться новости проекта Contivo, обновления приложения и планы развития.', newsCardTitle: 'Contivo Finance v1', newsCardText: 'Первая версия приложения будет сфокусирована на финансах, бюджетах, целях и отчётах.',
      privacyTitleLong: 'Политика конфиденциальности', privacyIntro: 'Эта страница является стартовым шаблоном. Перед публичным релизом текст нужно внимательно проверить и при необходимости адаптировать под юридические требования.', dataTitle: 'Какие данные используются', dataText: 'Contivo может использовать адрес электронной почты, данные профиля, бюджеты, категории, операции, цели и другие данные, которые пользователь самостоятельно вводит в приложение.', purposeTitle: 'Зачем используются данные', purposeText: 'Данные нужны для работы аккаунта, синхронизации между устройствами, совместных бюджетов, отчётов и восстановления доступа.', storageTitle: 'Где хранятся данные', storageText: 'Данные приложения хранятся в облачной инфраструктуре, используемой Contivo, включая Supabase.', deleteTitle: 'Удаление данных', deleteText: 'Пользователь может запросить удаление своих данных, написав на адрес:',
      termsTitle: 'Условия использования', termsIntro: 'Эта страница является стартовым шаблоном. Перед публичным релизом текст нужно проверить и адаптировать.', useTitle: 'Использование приложения', useText: 'Contivo помогает вести личные и совместные финансы. Пользователь самостоятельно отвечает за корректность введённых данных.', financeTitle: 'Финансовые решения', financeText: 'Contivo не является финансовым консультантом. Информация в приложении предназначена для личного учёта и анализа.', availabilityTitle: 'Доступность сервиса', availabilityText: 'Мы стремимся поддерживать стабильную работу приложения, но не гарантируем отсутствие временных технических сбоев.'
    }
  },
  en: {
    nav: { home: 'Home', help: 'Help', news: 'News', contact: 'Contact', support: 'Support' },
    footer: { rights: 'All rights reserved.', privacy: 'Privacy', terms: 'Terms', help: 'Help', contact: 'Contact' },
    home: {
      title: 'Contivo — finances, budgets and goals', description: 'Contivo helps manage personal and shared finances, budgets, goals and reports.', badge: 'Finance · Budgets · Reports', h1: 'Manage your finances calmly and clearly.', lead: 'Contivo helps you track income and expenses, create budgets, plan goals and export reports to PDF and Excel.', play: 'Google Play — soon', store: 'App Store — soon', activeBudget: 'Active budget', familyBudget: 'Family budget', totalBalance: 'Total balance', income: 'Income', expense: 'Expense', latest: 'Latest transactions', rent: 'Rent', salary: 'Salary', groceries: 'Groceries', featuresTitle: 'Everything important for finances in one place', featuresSubtitle: 'The first Contivo version focuses on Finance: stability, clear UI and convenient reports.', budgetsTitle: 'Budgets', budgetsText: 'Create personal and shared budgets, invite members and manage roles.', goalsTitle: 'Goals', goalsText: 'Plan savings, track progress and keep financial goals separate from expenses.', reportsTitle: 'Reports', reportsText: 'Export data to PDF and Excel for personal analysis or family discussion.', soonTitle: 'Coming soon in the app', soonText: 'After the stable Finance release, we plan to add Calendar, Tasks, themes and advanced analytics.', soonButton: 'Project news'
    },
    pages: { notFound: 'Page not found', notFoundText: 'This page does not exist or has been moved.', homeButton: 'Go home', contactTitle: 'Contact', contactText: 'If you have a question, idea or problem, contact us.', supportTitle: 'Support', privacyTitle: 'Privacy', helpTitle: 'Help', helpQ1: 'How do I create a budget?', helpA1: 'Open the finance section and create a new budget. Then you can add income, expenses, categories, goals and plans.', helpQ2: 'How do I add income or expense?', helpA2: 'Tap plus or minus, choose a category, enter the amount and save the transaction.', helpQ3: 'How do shared budgets work?', helpA3: 'The budget owner can invite members and assign roles. Members see the shared budget according to their permissions.', helpQ4: 'How do I export a report?', helpA4: 'Open report export, choose a period and create a PDF or Excel file.', newsTitle: 'News', newsText: 'Project news, app updates and development plans will be published here later.', newsCardTitle: 'Contivo Finance v1', newsCardText: 'The first version will focus on finances, budgets, goals and reports.', privacyTitleLong: 'Privacy Policy', privacyIntro: 'This page is a starter template. Before public release, review and adapt it to legal requirements if needed.', dataTitle: 'What data is used', dataText: 'Contivo may use email address, profile data, budgets, categories, transactions, goals and other data entered by the user.', purposeTitle: 'Why data is used', purposeText: 'Data is needed for account functionality, device sync, shared budgets, reports and account recovery.', storageTitle: 'Where data is stored', storageText: 'App data is stored in cloud infrastructure used by Contivo, including Supabase.', deleteTitle: 'Data deletion', deleteText: 'The user can request data deletion by writing to:', termsTitle: 'Terms of Use', termsIntro: 'This page is a starter template. Before public release, review and adapt it.', useTitle: 'Using the app', useText: 'Contivo helps manage personal and shared finances. The user is responsible for the correctness of entered data.', financeTitle: 'Financial decisions', financeText: 'Contivo is not a financial advisor. The information in the app is intended for personal tracking and analysis.', availabilityTitle: 'Service availability', availabilityText: 'We aim to keep the app stable, but temporary technical issues may occur.' }
  },
  de: {
    nav: { home: 'Startseite', help: 'Hilfe', news: 'Neuigkeiten', contact: 'Kontakt', support: 'Support' },
    footer: { rights: 'Alle Rechte vorbehalten.', privacy: 'Datenschutz', terms: 'Bedingungen', help: 'Hilfe', contact: 'Kontakt' },
    home: { title: 'Contivo — Finanzen, Budgets und Ziele', description: 'Contivo hilft bei persönlichen und gemeinsamen Finanzen, Budgets, Zielen und Berichten.', badge: 'Finanzen · Budgets · Berichte', h1: 'Finanzen ruhig und verständlich verwalten.', lead: 'Contivo hilft dir, Einnahmen und Ausgaben zu erfassen, Budgets zu erstellen, Ziele zu planen und Berichte als PDF und Excel zu exportieren.', play: 'Google Play — bald', store: 'App Store — bald', activeBudget: 'Aktives Budget', familyBudget: 'Familienbudget', totalBalance: 'Gesamtsaldo', income: 'Einnahmen', expense: 'Ausgaben', latest: 'Letzte Buchungen', rent: 'Miete', salary: 'Gehalt', groceries: 'Lebensmittel', featuresTitle: 'Alles Wichtige für Finanzen an einem Ort', featuresSubtitle: 'Die erste Contivo-Version konzentriert sich auf Finance: Stabilität, klare Oberfläche und praktische Berichte.', budgetsTitle: 'Budgets', budgetsText: 'Erstelle persönliche und gemeinsame Budgets, lade Mitglieder ein und verwalte Rollen.', goalsTitle: 'Ziele', goalsText: 'Plane Ersparnisse, verfolge Fortschritte und trenne finanzielle Ziele von Ausgaben.', reportsTitle: 'Berichte', reportsText: 'Exportiere Daten als PDF und Excel für persönliche Analyse oder gemeinsame Auswertung.', soonTitle: 'Demnächst in der App', soonText: 'Nach dem stabilen Finance-Release planen wir Calendar, Tasks, Designs und erweiterte Analysen.', soonButton: 'Projektneuigkeiten' },
    pages: { notFound: 'Seite nicht gefunden', notFoundText: 'Diese Seite existiert nicht oder wurde verschoben.', homeButton: 'Zur Startseite', contactTitle: 'Kontakt', contactText: 'Wenn du eine Frage, Idee oder ein Problem hast, kontaktiere uns.', supportTitle: 'Support', privacyTitle: 'Datenschutz', helpTitle: 'Hilfe', helpQ1: 'Wie erstelle ich ein Budget?', helpA1: 'Öffne den Finanzbereich und erstelle ein neues Budget. Danach kannst du Einnahmen, Ausgaben, Kategorien, Ziele und Pläne hinzufügen.', helpQ2: 'Wie füge ich Einnahmen oder Ausgaben hinzu?', helpA2: 'Tippe auf Plus oder Minus, wähle eine Kategorie, gib den Betrag ein und speichere die Buchung.', helpQ3: 'Wie funktionieren gemeinsame Budgets?', helpA3: 'Der Budgetinhaber kann Mitglieder einladen und Rollen vergeben. Mitglieder sehen das gemeinsame Budget abhängig von ihren Rechten.', helpQ4: 'Wie exportiere ich einen Bericht?', helpA4: 'Öffne den Berichtsexport, wähle einen Zeitraum und erstelle eine PDF- oder Excel-Datei.', newsTitle: 'Neuigkeiten', newsText: 'Hier werden später Projektneuigkeiten, App-Updates und Entwicklungspläne veröffentlicht.', newsCardTitle: 'Contivo Finance v1', newsCardText: 'Die erste Version konzentriert sich auf Finanzen, Budgets, Ziele und Berichte.', privacyTitleLong: 'Datenschutzerklärung', privacyIntro: 'Diese Seite ist eine Startvorlage. Vor dem öffentlichen Release sollte der Text geprüft und bei Bedarf rechtlich angepasst werden.', dataTitle: 'Welche Daten verwendet werden', dataText: 'Contivo kann E-Mail-Adresse, Profildaten, Budgets, Kategorien, Buchungen, Ziele und weitere vom Nutzer eingegebene Daten verwenden.', purposeTitle: 'Wofür Daten verwendet werden', purposeText: 'Daten werden für Konto, Synchronisierung, gemeinsame Budgets, Berichte und Wiederherstellung des Zugangs benötigt.', storageTitle: 'Wo Daten gespeichert werden', storageText: 'App-Daten werden in der von Contivo genutzten Cloud-Infrastruktur gespeichert, einschließlich Supabase.', deleteTitle: 'Daten löschen', deleteText: 'Der Nutzer kann die Löschung seiner Daten per E-Mail anfordern:', termsTitle: 'Nutzungsbedingungen', termsIntro: 'Diese Seite ist eine Startvorlage. Vor dem öffentlichen Release sollte der Text geprüft und angepasst werden.', useTitle: 'Nutzung der App', useText: 'Contivo hilft bei persönlichen und gemeinsamen Finanzen. Der Nutzer ist für die Richtigkeit der eingegebenen Daten verantwortlich.', financeTitle: 'Finanzielle Entscheidungen', financeText: 'Contivo ist kein Finanzberater. Informationen in der App dienen der persönlichen Erfassung und Analyse.', availabilityTitle: 'Verfügbarkeit des Dienstes', availabilityText: 'Wir bemühen uns um einen stabilen Betrieb, können vorübergehende technische Störungen jedoch nicht ausschließen.' }
  }
};

export function prefixFor(lang) {
  return lang === 'en' ? '' : `/${lang}`;
}

export function pathFor(lang, path = '/') {
  const prefix = prefixFor(lang);
  return `${prefix}${path === '/' ? '' : path}` || '/';
}
