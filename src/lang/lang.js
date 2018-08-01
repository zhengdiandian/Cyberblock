import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  zh: {
    message: {
      i18n: 'zh',
      title: '一站式管理，让数字资产安全无忧',
      letter1: '多重技术 多种存储',
      letterInfo1: 'Cyberblock采⽤用多种技术⽅方案为⽤户提供可选择的数字钱包，支持本地存储及云存储，本地存储私 钥⾃自持，云存储急速⽀付',
      letter2: 'FullServerless 安全无忧',
      letterInfo2:'Cyberblock所有的外⽹服务都使⽤的Google Firebase 提供的 Nodejs 扩展实现App端所有的数据通讯全部封装在Google的服务中, Google Cloud安全，Cyberblock外网就安全',
      letter3: '支持多币 方便管理',
      letterInfo3:'支持比特币、以太币、莱特币等数十种主要数字资产，⼀应俱有。快捷添加币种，丰富您的资产配置',
      about: '关于Cyberblock',
      aboutTitle1: 'Cyberblock 是一家专注于金融科技的区块链技术应用与开发的公司',
      aboutTitle2: '主打产品Cyberblock作为专业数字资产钱包，支持云钱包、本地钱包两种资产存储方式',
      aboutTitle3: '实现多链一站管理，简单易用、方便快捷、安全无忧，打造区块链入口级应用,',
      aboutTitle4: '我们支持所有数字货币技术的发展，同时将为用户竭尽所能!',
      aboutTitle5: '愿景，让价值自由流动',
      contactUs: '联系我们',
      downloadApp: '下载APP',
      imgSrc: 'img-zh'

    }
  },
  en: {
    message: {
      i18n: 'en',
      title: 'One-stop management, keep your digital assets absolutely secured',
      letter1: 'Multi-tech/multi-store',
      letterInfo1: 'Cyberblock uses multi-technology operation to optional digital wallet for users, it supports local store and cloud store. Private key will be kept in local store, cloud store is only for instant payment.',
      letter2: 'Full server-less, safety ensured',
      letterInfo2:'All external network service of Cyberblock is conducted by Nodejs extension offered by Google Firebase. All data of App is kept inside of Google sever. Therefore, Cyberblock will be totally secured if Google Cloud sever is safe',
      letter3: 'Multi-currency supported, easy to manage',
      letterInfo3:'Cyberblock supports tens of main digital currency including Bitcoin, Ethereum, Litecoin. Other currencies are also easily added, which helps users enrich asset allocation.',
      about: 'About Cyberblock',
      aboutTitle1: 'Cyberblock is a company that specializes in the application and development of blockchain technology for financial technology.',
      aboutTitle2: 'The main product, Cyberblock, is a professional digital asset wallet that supports cloud wallet and local wallet storage.',
      aboutTitle3: 'Achieve multi-chain one-stop management, easy to use, convenient, fast, safe, to create blockchain entry-level applications,',
      aboutTitle4: 'We support the development of all digital currency technologies and will do our best for users!',
      aboutTitle5: 'Let value flow freely',
      contactUs: 'Contact Us',
      downloadApp: 'Download App',
      imgSrc: 'img-en'
    }
  },
  jp: {
    message: {
      i18n: 'jp',

      title: 'デジタル資産を安全かつ安心して管理できるワンストップ管理',
      letter1: 'マルチテク/マルチストア',
      letterInfo1: 'Cyberblockはマルチテクノロジー操作を用いて、オプショナルデジタルウォレットをユーザーに提供し、ローカルストアとクラウドストアをサポートします。 秘密鍵はローカルストアに保存され、クラウドストアは即時支払いのみに使用されます。',
      letter2: '完全なサーバレス、安全かつ安心',
      letterInfo2:'Cyberblockのすべての外部ネットワークサービスは、Google Firebaseが提供するNodejs拡張機能によって実行されます。 アプリのすべてのデータはGoogleのサーバーの中に保存されます。 Google Cloudサーバーが安全であればサイバーブロックは完全に保護されます',
      letter3: 'マルチ通貨がサポートされ容易に管理できます',
      letterInfo3:'Cyberblockはビットコイン、イーサリアム、ライトコインを含む数十の主要デジタル通貨をサポートしています。 他の通貨も簡単に追加でき、ユーザーが資産配分を充実させるのに役立ちます。',
      about: 'Cyberblockについて ',
      aboutTitle1: 'Cyberblockは金融技術のブロックチェーン技術の応用と開発を専門とする会社です。',
      aboutTitle2: 'メイン製品のCyberblockは、プロフェッショナルなデジタルアセットウォレットとして、クラウドウォレットとローカルウォレットストレージをサポートできます。使いやすく、便利で速い、安全かつ安心なマルチチェーンのワンストップ管理を実現。',
      aboutTitle3: 'ブロックチェーンのエントリレベルのアプリケーションをつくる。',
      aboutTitle4: '私たちはすべてのデジタル通貨技術の開発をサポートし、ユーザーに最善を尽くします！',
      aboutTitle5: '価値を自由に流れる',
      contactUs: 'お問い合わせ',
      downloadApp: 'アプリをダウンロード',
      imgSrc: 'img-jp'

    }
  }
}

// // 以下为语言包单独设置的场景，单独设置时语言包需单独引入
// const messages: {
//   'zh-CN': require('./common/lang/zh'),   // 中文语言包
//   'en-US': require('./common/lang/en')    // 英文语言包
// }


export default new VueI18n({
  locale: 'zh',
  messages
})
