const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'output',
    translationsDirectory: 'src/translations/',
    languages: ['en', 'sk'] // any language you need
});
