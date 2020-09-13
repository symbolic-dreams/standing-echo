module.exports = {
    //productionTip: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/standing-echo/'
        : '/',
    pwa: {
        manifestPath: 'manifest.webmanifest',
        name: 'Standing Echo',
        themeColor: '#0169CE',
        msTileColor: '#000000',
        iconPaths: {
            favicon32: 'img/icons/favicons/favicon-32x32.png',
            favicon16: 'img/icons/favicons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple/apple-icon-152x152.png',
            //maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/microsoft/ms-icon-144x144.png'
        }
    }
}