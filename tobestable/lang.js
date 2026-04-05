// ─── TOBESTABLE i18n ───
// 10 languages: en, de, es, fr, pt, tr, ru, zh, ja, ko

const LANG_META = {
  en: { label: 'English',    flag: '🇬🇧' },
  de: { label: 'Deutsch',    flag: '🇩🇪' },
  es: { label: 'Español',    flag: '🇪🇸' },
  fr: { label: 'Français',   flag: '🇫🇷' },
  pt: { label: 'Português',  flag: '🇧🇷' },
  tr: { label: 'Türkçe',     flag: '🇹🇷' },
  ru: { label: 'Русский',    flag: '🇷🇺' },
  zh: { label: '中文',        flag: '🇨🇳' },
  ja: { label: '日本語',      flag: '🇯🇵' },
  ko: { label: '한국어',      flag: '🇰🇷' },
};

const TRANSLATIONS = {
  // ─── NAV ───
  nav_how: {
    en: 'How It Works', tr: 'Nasıl Çalışır', es: 'Cómo Funciona', pt: 'Como Funciona',
    fr: 'Comment ça marche', de: 'Wie es funktioniert', ru: 'Как это работает',
    zh: '运作方式', ja: '仕組み', ko: '작동 방식',
  },
  nav_tokenomics: {
    en: 'Tokenomics', tr: 'Tokenomiks', es: 'Tokenomics', pt: 'Tokenomics',
    fr: 'Tokenomics', de: 'Tokenomics', ru: 'Токеномика',
    zh: '代币经济', ja: 'トークノミクス', ko: '토크노믹스',
  },
  nav_dashboard: {
    en: 'Dashboard', tr: 'Panel', es: 'Panel', pt: 'Painel',
    fr: 'Tableau de bord', de: 'Dashboard', ru: 'Панель',
    zh: '仪表盘', ja: 'ダッシュボード', ko: '대시보드',
  },
  nav_explorer: {
    en: 'Explorer', tr: 'Gezgin', es: 'Explorador', pt: 'Explorador',
    fr: 'Explorateur', de: 'Explorer', ru: 'Обозреватель',
    zh: '浏览器', ja: 'エクスプローラー', ko: '탐색기',
  },
  connect_wallet: {
    en: 'Connect Wallet', tr: 'Cüzdan Bağla', es: 'Conectar Billetera', pt: 'Conectar Carteira',
    fr: 'Connecter Portefeuille', de: 'Wallet verbinden', ru: 'Подключить кошелёк',
    zh: '连接钱包', ja: 'ウォレット接続', ko: '지갑 연결',
  },

  // ─── RPC BANNER ───
  rpc_error: {
    en: '⚠ Unable to connect to Solana — data may be outdated',
    tr: '⚠ Solana\'ya bağlanılamıyor — veriler güncel olmayabilir',
    es: '⚠ No se puede conectar a Solana — los datos pueden estar desactualizados',
    pt: '⚠ Não é possível conectar à Solana — os dados podem estar desatualizados',
    fr: '⚠ Impossible de se connecter à Solana — les données peuvent être obsolètes',
    de: '⚠ Verbindung zu Solana nicht möglich — Daten möglicherweise veraltet',
    ru: '⚠ Не удалось подключиться к Solana — данные могут быть устаревшими',
    zh: '⚠ 无法连接到 Solana — 数据可能已过时',
    ja: '⚠ Solana に接続できません — データが古い可能性があります',
    ko: '⚠ Solana에 연결할 수 없음 — 데이터가 오래되었을 수 있습니다',
  },
  retry: {
    en: 'Retry', tr: 'Tekrar Dene', es: 'Reintentar', pt: 'Tentar novamente',
    fr: 'Réessayer', de: 'Erneut versuchen', ru: 'Повторить',
    zh: '重试', ja: '再試行', ko: '재시도',
  },

  // ─── HERO ───
  hero_badge: {
    en: 'Live on Solana', tr: 'Solana\'da Yayında', es: 'En vivo en Solana', pt: 'Ao vivo na Solana',
    fr: 'En direct sur Solana', de: 'Live auf Solana', ru: 'В сети Solana',
    zh: '在 Solana 上线', ja: 'Solana でライブ', ko: 'Solana에서 라이브',
  },
  hero_title_1: {
    en: 'Built To Be', tr: 'Kararlı Olmak', es: 'Construido Para Ser', pt: 'Construído Para Ser',
    fr: 'Conçu Pour Être', de: 'Gebaut Um Zu Sein', ru: 'Создан Быть',
    zh: '旨在成为', ja: '安定するために', ko: '안정적으로',
  },
  hero_title_2: {
    en: 'Stable', tr: 'İçin İnşa Edildi', es: 'Estable', pt: 'Estável',
    fr: 'Stable', de: 'Stabil', ru: 'Стабильным',
    zh: '稳定', ja: '構築されました', ko: '설계되었습니다',
  },
  hero_stat_round: {
    en: 'Current Round', tr: 'Mevcut Tur', es: 'Ronda Actual', pt: 'Rodada Atual',
    fr: 'Tour Actuel', de: 'Aktuelle Runde', ru: 'Текущий раунд',
    zh: '当前轮次', ja: '現在のラウンド', ko: '현재 라운드',
  },
  hero_stat_price: {
    en: 'Price / Token', tr: 'Fiyat / Token', es: 'Precio / Token', pt: 'Preço / Token',
    fr: 'Prix / Jeton', de: 'Preis / Token', ru: 'Цена / Токен',
    zh: '价格 / 代币', ja: '価格 / トークン', ko: '가격 / 토큰',
  },
  hero_stat_vault: {
    en: 'Vault Balance', tr: 'Kasa Bakiyesi', es: 'Saldo de Bóveda', pt: 'Saldo do Cofre',
    fr: 'Solde du Coffre', de: 'Tresor-Guthaben', ru: 'Баланс хранилища',
    zh: '金库余额', ja: 'ボールト残高', ko: '볼트 잔액',
  },
  learn_how: {
    en: 'Learn How It Works', tr: 'Nasıl Çalıştığını Öğren', es: 'Aprende cómo funciona', pt: 'Saiba como funciona',
    fr: 'Découvrir le fonctionnement', de: 'Erfahren Sie wie es funktioniert', ru: 'Узнать как это работает',
    zh: '了解运作方式', ja: '仕組みを学ぶ', ko: '작동 방식 알아보기',
  },
  mint_now: {
    en: 'Mint Now →', tr: 'Şimdi Bas →', es: 'Mint Ahora →', pt: 'Criar Agora →',
    fr: 'Mint Maintenant →', de: 'Jetzt Minten →', ru: 'Минт сейчас →',
    zh: '立即铸造 →', ja: '今すぐミント →', ko: '지금 민트 →',
  },
  contract_address: {
    en: 'Contract Address', tr: 'Kontrat Adresi', es: 'Dirección del Contrato', pt: 'Endereço do Contrato',
    fr: 'Adresse du Contrat', de: 'Vertragsadresse', ru: 'Адрес контракта',
    zh: '合约地址', ja: 'コントラクトアドレス', ko: '계약 주소',
  },

  // ─── HOW IT WORKS ───
  how_label: { en: 'Mechanism', tr: 'Mekanizma', es: 'Mecanismo', pt: 'Mecanismo', fr: 'Mécanisme', de: 'Mechanismus', ru: 'Механизм', zh: '机制', ja: 'メカニズム', ko: '메커니즘' },
  how_title: { en: 'How It Works', tr: 'Nasıl Çalışır', es: 'Cómo Funciona', pt: 'Como Funciona', fr: 'Comment ça marche', de: 'Wie es funktioniert', ru: 'Как это работает', zh: '运作方式', ja: '仕組み', ko: '작동 방식' },
  how_desc: { en: 'Three steps to anti-inflation. Each round is identical — 10 SOL in, tokens out.', tr: 'Anti-enflasyona üç adım. Her tur aynıdır — 10 SOL girer, token çıkar.', es: 'Tres pasos contra la inflación. Cada ronda es idéntica — 10 SOL entran, tokens salen.', pt: 'Três passos contra a inflação. Cada rodada é idêntica — 10 SOL entram, tokens saem.', fr: 'Trois étapes contre l\'inflation. Chaque tour est identique — 10 SOL entrent, des jetons sortent.', de: 'Drei Schritte gegen Inflation. Jede Runde ist identisch — 10 SOL rein, Token raus.', ru: 'Три шага к антиинфляции. Каждый раунд одинаков — 10 SOL внутрь, токены наружу.', zh: '三步实现抗通胀。每轮相同 — 投入 10 SOL，获得代币。', ja: 'インフレ対策の3ステップ。各ラウンドは同じ — 10 SOL を投入、トークンを取得。', ko: '인플레이션 방지 3단계. 각 라운드는 동일 — 10 SOL 투입, 토큰 획득.' },
  step1_title: { en: 'Pay 10 SOL', tr: '10 SOL Öde', es: 'Paga 10 SOL', pt: 'Pague 10 SOL', fr: 'Payez 10 SOL', de: 'Zahle 10 SOL', ru: 'Заплатите 10 SOL', zh: '支付 10 SOL', ja: '10 SOL を支払う', ko: '10 SOL 지불' },
  step1_desc: { en: 'Every mint round costs exactly 10 SOL. Payment goes to the project treasury. Same price, every round, forever.', tr: 'Her basım turu tam olarak 10 SOL\'dur. Ödeme proje kasasına gider. Aynı fiyat, her tur, sonsuza kadar.', es: 'Cada ronda de acuñación cuesta exactamente 10 SOL. El pago va al tesoro del proyecto. Mismo precio, cada ronda, para siempre.', pt: 'Cada rodada de cunhagem custa exatamente 10 SOL. O pagamento vai para o tesouro do projeto. Mesmo preço, toda rodada, para sempre.', fr: 'Chaque tour de frappe coûte exactement 10 SOL. Le paiement va au trésor du projet. Même prix, chaque tour, pour toujours.', de: 'Jede Mint-Runde kostet genau 10 SOL. Die Zahlung geht an die Projektkasse. Gleicher Preis, jede Runde, für immer.', ru: 'Каждый раунд минта стоит ровно 10 SOL. Оплата поступает в казну проекта. Одна цена, каждый раунд, навсегда.', zh: '每轮铸造费用恰好为 10 SOL。付款进入项目金库。每轮相同价格，永远如此。', ja: '各ミントラウンドの費用は正確に10 SOL。支払いはプロジェクト金庫に。毎ラウンド同じ価格、永遠に。', ko: '매 민트 라운드 비용은 정확히 10 SOL. 지불금은 프로젝트 금고로. 같은 가격, 매 라운드, 영원히.' },
  step2_title: { en: '50% to You, 50% to Vault', tr: '%50 Sana, %50 Kasaya', es: '50% para Ti, 50% para Bóveda', pt: '50% para Você, 50% para o Cofre', fr: '50% pour Vous, 50% pour le Coffre', de: '50% für Dich, 50% in den Tresor', ru: '50% вам, 50% в хранилище', zh: '50% 归你，50% 归金库', ja: '50% はあなたに、50% はボールトに', ko: '50%는 당신에게, 50%는 볼트에' },
  step2_desc: { en: 'Half the tokens go to your wallet. The other half enters the stability vault. Earlier rounds yield exponentially more tokens.', tr: 'Tokenların yarısı cüzdanınıza gider. Diğer yarısı istikrar kasasına girer. Erken turlar katlanarak daha fazla token verir.', es: 'La mitad de los tokens van a tu billetera. La otra mitad entra en la bóveda de estabilidad. Las rondas anteriores generan exponencialmente más tokens.', pt: 'Metade dos tokens vai para sua carteira. A outra metade entra no cofre de estabilidade. Rodadas anteriores rendem exponencialmente mais tokens.', fr: 'La moitié des jetons va dans votre portefeuille. L\'autre moitié entre dans le coffre de stabilité. Les tours précédents rapportent exponentiellement plus de jetons.', de: 'Die Hälfte der Token geht in dein Wallet. Die andere Hälfte geht in den Stabilitätstresor. Frühere Runden bringen exponentiell mehr Token.', ru: 'Половина токенов поступает в ваш кошелёк. Другая половина — в хранилище стабильности. Ранние раунды дают экспоненциально больше токенов.', zh: '一半代币进入你的钱包。另一半进入稳定金库。早期轮次获得指数级更多代币。', ja: 'トークンの半分はあなたのウォレットに。残りの半分は安定ボールトに。早いラウンドほど指数的に多くのトークンを獲得。', ko: '토큰의 절반은 당신의 지갑으로. 나머지 절반은 안정 볼트로. 초기 라운드일수록 기하급수적으로 더 많은 토큰.' },
  step3_title: { en: 'Vault Sells at $1', tr: 'Kasa $1\'dan Satar', es: 'La Bóveda Vende a $1', pt: 'O Cofre Vende a $1', fr: 'Le Coffre Vend à 1$', de: 'Tresor verkauft bei $1', ru: 'Хранилище продаёт по $1', zh: '金库以 $1 出售', ja: 'ボールトは $1 で売却', ko: '볼트는 $1에 판매' },
  step3_desc: { en: 'When market price exceeds $1, the vault sells at exactly $1.00 — a hard price ceiling. The floor rises with each round.', tr: 'Piyasa fiyatı $1\'ı aştığında, kasa tam olarak $1.00\'dan satar — sert bir tavan fiyat. Taban her turda yükselir.', es: 'Cuando el precio de mercado supera $1, la bóveda vende a exactamente $1.00 — un techo de precio duro. El piso sube con cada ronda.', pt: 'Quando o preço de mercado excede $1, o cofre vende a exatamente $1.00 — um teto de preço rígido. O piso sobe a cada rodada.', fr: 'Quand le prix du marché dépasse 1$, le coffre vend à exactement 1,00$ — un plafond de prix strict. Le plancher monte à chaque tour.', de: 'Wenn der Marktpreis $1 übersteigt, verkauft der Tresor bei genau $1,00 — eine harte Preisobergrenze. Der Boden steigt mit jeder Runde.', ru: 'Когда рыночная цена превышает $1, хранилище продаёт ровно по $1.00 — жёсткий потолок цены. Пол растёт с каждым раундом.', zh: '当市场价格超过 $1 时，金库以恰好 $1.00 出售 — 硬性价格上限。底价随每轮上升。', ja: '市場価格が $1 を超えると、ボールトはちょうど $1.00 で売却 — 厳格な価格上限。フロアは各ラウンドで上昇。', ko: '시장 가격이 $1을 초과하면 볼트는 정확히 $1.00에 판매 — 엄격한 가격 상한. 바닥은 매 라운드마다 상승.' },

  // ─── TUTORIAL ───
  tut_label: { en: 'Guide', tr: 'Rehber', es: 'Guía', pt: 'Guia', fr: 'Guide', de: 'Anleitung', ru: 'Руководство', zh: '指南', ja: 'ガイド', ko: '가이드' },
  step_word: { en: 'STEP', tr: 'ADIM', es: 'PASO', pt: 'PASSO', fr: 'ÉTAPE', de: 'SCHRITT', ru: 'ШАГ', zh: '步骤', ja: 'ステップ', ko: '단계' },
  tut_title: { en: 'How to Mint', tr: 'Nasıl Basılır', es: 'Cómo Acuñar', pt: 'Como Criar', fr: 'Comment Mint', de: 'Wie man Mintet', ru: 'Как минтить', zh: '如何铸造', ja: 'ミント方法', ko: '민트 방법' },
  tut_desc: { en: 'From zero to $TOBE in under two minutes.', tr: 'Sıfırdan $TOBE\'ye iki dakikadan kısa sürede.', es: 'De cero a $TOBE en menos de dos minutos.', pt: 'De zero a $TOBE em menos de dois minutos.', fr: 'De zéro à $TOBE en moins de deux minutes.', de: 'Von Null zu $TOBE in unter zwei Minuten.', ru: 'От нуля до $TOBE менее чем за две минуты.', zh: '两分钟内从零到 $TOBE。', ja: 'ゼロから $TOBE まで2分以内。', ko: '2분 안에 $TOBE 시작하기.' },
  tut_step1_title: { en: 'Get a Solana Wallet', tr: 'Solana Cüzdanı Edin', es: 'Obtén una Billetera Solana', pt: 'Obtenha uma Carteira Solana', fr: 'Obtenez un Portefeuille Solana', de: 'Hol dir ein Solana Wallet', ru: 'Получите кошелёк Solana', zh: '获取 Solana 钱包', ja: 'Solana ウォレットを取得', ko: 'Solana 지갑 받기' },
  tut_step1_desc: { en: 'Download Phantom, Backpack, or Solflare — available as browser extensions and mobile apps. On mobile, open this site from the wallet\'s built-in browser.', tr: 'Phantom, Backpack veya Solflare indirin — tarayıcı uzantıları ve mobil uygulamalar olarak mevcuttur. Mobilde bu siteyi cüzdanın dahili tarayıcısından açın.', es: 'Descarga Phantom, Backpack o Solflare — disponibles como extensiones de navegador y aplicaciones móviles. En móvil, abre este sitio desde el navegador integrado de la billetera.', pt: 'Baixe Phantom, Backpack ou Solflare — disponíveis como extensões de navegador e apps móveis. No celular, abra este site pelo navegador integrado da carteira.', fr: 'Téléchargez Phantom, Backpack ou Solflare — disponibles en extensions de navigateur et applications mobiles.', de: 'Lade Phantom, Backpack oder Solflare herunter — verfügbar als Browser-Erweiterungen und mobile Apps.', ru: 'Скачайте Phantom, Backpack или Solflare — доступны как расширения браузера и мобильные приложения.', zh: '下载 Phantom、Backpack 或 Solflare — 可作为浏览器扩展和移动应用。', ja: 'Phantom、Backpack、または Solflare をダウンロード。', ko: 'Phantom, Backpack 또는 Solflare 다운로드.' },
  tut_step2_title: { en: 'Fund Your Wallet', tr: 'Cüzdanını Fonla', es: 'Fondea tu Billetera', pt: 'Financie sua Carteira', fr: 'Financez votre Portefeuille', de: 'Wallet aufladen', ru: 'Пополните кошелёк', zh: '为钱包充值', ja: 'ウォレットに入金', ko: '지갑 충전' },
  tut_step2_desc: { en: 'Add 10 SOL + a tiny amount for transaction fees to your wallet.', tr: 'Cüzdanınıza 10 SOL + işlem ücretleri için az miktarda SOL ekleyin.', es: 'Agrega 10 SOL + una pequeña cantidad para comisiones de transacción a tu billetera.', pt: 'Adicione 10 SOL + uma pequena quantia para taxas de transação à sua carteira.', fr: 'Ajoutez 10 SOL + un petit montant pour les frais de transaction à votre portefeuille.', de: 'Füge 10 SOL + einen kleinen Betrag für Transaktionsgebühren zu deinem Wallet hinzu.', ru: 'Добавьте 10 SOL + небольшое количество для комиссий за транзакции в кошелёк.', zh: '在钱包中添加 10 SOL + 少量交易费。', ja: 'ウォレットに 10 SOL + 少額の取引手数料を追加。', ko: '지갑에 10 SOL + 소량의 거래 수수료를 추가하세요.' },
  tut_step3_title: { en: 'Connect & Mint', tr: 'Bağlan ve Bas', es: 'Conecta y Acuña', pt: 'Conecte e Crie', fr: 'Connectez et Mint', de: 'Verbinden & Minten', ru: 'Подключитесь и минтите', zh: '连接并铸造', ja: '接続してミント', ko: '연결 및 민트' },
  tut_step3_desc: { en: 'Click "Connect Wallet" above, select your wallet, then hit "Mint" on the dashboard. Approve the transaction.', tr: '"Cüzdan Bağla" butonuna tıklayın, cüzdanınızı seçin, ardından "Bas" butonuna basın.', es: 'Haz clic en "Conectar Billetera", selecciona tu billetera, luego presiona "Mint".', pt: 'Clique em "Conectar Carteira", selecione sua carteira, depois clique em "Criar".', fr: 'Cliquez sur "Connecter", sélectionnez votre portefeuille, puis appuyez sur "Mint".', de: 'Klicke auf "Wallet verbinden", wähle dein Wallet, dann "Mint".', ru: 'Нажмите "Подключить кошелёк", выберите кошелёк, затем "Минт".', zh: '点击"连接钱包"，选择钱包，然后点击"铸造"。', ja: '「ウォレット接続」をクリック、ウォレットを選択、「ミント」を押す。', ko: '"지갑 연결"을 클릭, 지갑 선택, "민트"를 누르세요.' },
  tut_step4_title: { en: 'Receive $TOBE', tr: '$TOBE Al', es: 'Recibe $TOBE', pt: 'Receba $TOBE', fr: 'Recevez $TOBE', de: '$TOBE erhalten', ru: 'Получите $TOBE', zh: '接收 $TOBE', ja: '$TOBE を受け取る', ko: '$TOBE 받기' },
  tut_step4_desc: { en: 'Your tokens arrive in seconds. 50% to you, 50% to the vault. Check your balance in the dashboard above.', tr: 'Tokenlarınız saniyeler içinde gelir. %50 size, %50 kasaya.', es: 'Tus tokens llegan en segundos. 50% para ti, 50% para la bóveda.', pt: 'Seus tokens chegam em segundos. 50% para você, 50% para o cofre.', fr: 'Vos jetons arrivent en quelques secondes. 50% pour vous, 50% pour le coffre.', de: 'Deine Token kommen in Sekunden. 50% für dich, 50% in den Tresor.', ru: 'Ваши токены поступят через секунды. 50% вам, 50% в хранилище.', zh: '代币几秒钟内到达。50% 归你，50% 归金库。', ja: 'トークンは数秒で届きます。50%はあなたに、50%はボールトに。', ko: '토큰이 몇 초 내에 도착. 50%는 당신에게, 50%는 볼트에.' },

  // ─── DASHBOARD ───
  dash_label: { en: 'Real-Time', tr: 'Gerçek Zamanlı', es: 'Tiempo Real', pt: 'Tempo Real', fr: 'Temps Réel', de: 'Echtzeit', ru: 'Реальное время', zh: '实时', ja: 'リアルタイム', ko: '실시간' },
  dash_title: { en: 'Live Dashboard', tr: 'Canlı Panel', es: 'Panel en Vivo', pt: 'Painel ao Vivo', fr: 'Tableau de bord en Direct', de: 'Live Dashboard', ru: 'Живая панель', zh: '实时仪表盘', ja: 'ライブダッシュボード', ko: '실시간 대시보드' },
  dash_desc: { en: 'All data pulled directly from on-chain state.', tr: 'Tüm veriler doğrudan zincir üstü durumdan çekilir.', es: 'Todos los datos se extraen directamente del estado en cadena.', pt: 'Todos os dados extraídos diretamente do estado on-chain.', fr: 'Toutes les données extraites directement de l\'état on-chain.', de: 'Alle Daten direkt aus dem On-Chain-Status.', ru: 'Все данные получены напрямую из состояния блокчейна.', zh: '所有数据直接从链上状态获取。', ja: 'すべてのデータはオンチェーンの状態から直接取得。', ko: '모든 데이터는 온체인 상태에서 직접 가져옵니다.' },
  current_round: { en: 'Current Round', tr: 'Mevcut Tur', es: 'Ronda Actual', pt: 'Rodada Atual', fr: 'Tour Actuel', de: 'Aktuelle Runde', ru: 'Текущий раунд', zh: '当前轮次', ja: '現在のラウンド', ko: '현재 라운드' },
  total_minted: { en: 'Total Minted', tr: 'Toplam Basılan', es: 'Total Acuñado', pt: 'Total Criado', fr: 'Total Frappé', de: 'Gesamt Gemintet', ru: 'Всего отчеканено', zh: '总铸造量', ja: '合計ミント', ko: '총 민트' },
  vault_balance: { en: 'Vault Balance', tr: 'Kasa Bakiyesi', es: 'Saldo de Bóveda', pt: 'Saldo do Cofre', fr: 'Solde du Coffre', de: 'Tresor-Guthaben', ru: 'Баланс хранилища', zh: '金库余额', ja: 'ボールト残高', ko: '볼트 잔액' },
  treasury_revenue: { en: 'Treasury Revenue', tr: 'Hazine Geliri', es: 'Ingresos del Tesoro', pt: 'Receita do Tesouro', fr: 'Revenu du Trésor', de: 'Schatzeinnahmen', ru: 'Доход казны', zh: '国库收入', ja: '財務収入', ko: '재무 수입' },
  current_price: { en: 'Current Price', tr: 'Mevcut Fiyat', es: 'Precio Actual', pt: 'Preço Atual', fr: 'Prix Actuel', de: 'Aktueller Preis', ru: 'Текущая цена', zh: '当前价格', ja: '現在の価格', ko: '현재 가격' },
  vault_revenue: { en: 'Vault Revenue', tr: 'Kasa Geliri', es: 'Ingresos de Bóveda', pt: 'Receita do Cofre', fr: 'Revenu du Coffre', de: 'Tresor-Einnahmen', ru: 'Доход хранилища', zh: '金库收入', ja: 'ボールト収入', ko: '볼트 수입' },
  market_price: { en: 'Market Price', tr: 'Piyasa Fiyatı', es: 'Precio de Mercado', pt: 'Preço de Mercado', fr: 'Prix du Marché', de: 'Marktpreis', ru: 'Рыночная цена', zh: '市场价格', ja: '市場価格', ko: '시장 가격' },
  rounds_progress: { en: 'Rounds Progress', tr: 'Tur İlerlemesi', es: 'Progreso de Rondas', pt: 'Progresso das Rodadas', fr: 'Progression des Tours', de: 'Rundenfortschritt', ru: 'Прогресс раундов', zh: '轮次进度', ja: 'ラウンド進捗', ko: '라운드 진행' },
  rounds_remaining: { en: 'rounds remaining', tr: 'tur kaldı', es: 'rondas restantes', pt: 'rodadas restantes', fr: 'tours restants', de: 'Runden verbleibend', ru: 'раундов осталось', zh: '轮剩余', ja: 'ラウンド残り', ko: '라운드 남음' },
  complete: { en: 'complete', tr: 'tamamlandı', es: 'completado', pt: 'completo', fr: 'terminé', de: 'abgeschlossen', ru: 'завершено', zh: '完成', ja: '完了', ko: '완료' },
  supply_breakdown: { en: 'Supply Breakdown', tr: 'Arz Dağılımı', es: 'Desglose de Suministro', pt: 'Distribuição de Oferta', fr: 'Répartition de l\'Offre', de: 'Angebotsaufteilung', ru: 'Распределение предложения', zh: '供应明细', ja: '供給内訳', ko: '공급 내역' },
  circulating: { en: 'Circulating', tr: 'Dolaşımdaki', es: 'Circulante', pt: 'Em Circulação', fr: 'En Circulation', de: 'Im Umlauf', ru: 'В обращении', zh: '流通中', ja: '流通中', ko: '유통 중' },
  in_vault: { en: 'In Vault', tr: 'Kasada', es: 'En Bóveda', pt: 'No Cofre', fr: 'Dans le Coffre', de: 'Im Tresor', ru: 'В хранилище', zh: '金库中', ja: 'ボールト内', ko: '볼트 내' },
  released: { en: 'Released', tr: 'Serbest Bırakılan', es: 'Liberado', pt: 'Liberado', fr: 'Libéré', de: 'Freigegeben', ru: 'Выпущено', zh: '已释放', ja: 'リリース済み', ko: '릴리스됨' },
  unminted: { en: 'Unminted', tr: 'Basılmamış', es: 'Sin Acuñar', pt: 'Não Criado', fr: 'Non Frappé', de: 'Ungemintet', ru: 'Не отчеканено', zh: '未铸造', ja: '未ミント', ko: '미민트' },
  vault_activity: { en: 'Vault Activity', tr: 'Kasa Aktivitesi', es: 'Actividad de Bóveda', pt: 'Atividade do Cofre', fr: 'Activité du Coffre', de: 'Tresor-Aktivität', ru: 'Активность хранилища', zh: '金库活动', ja: 'ボールトアクティビティ', ko: '볼트 활동' },
  no_activity: { en: 'No activity yet', tr: 'Henüz aktivite yok', es: 'Sin actividad aún', pt: 'Sem atividade ainda', fr: 'Pas d\'activité encore', de: 'Noch keine Aktivität', ru: 'Активности пока нет', zh: '暂无活动', ja: 'まだアクティビティはありません', ko: '아직 활동 없음' },
  live_tx_feed: { en: 'Live Transaction Feed', tr: 'Canlı İşlem Akışı', es: 'Feed de Transacciones en Vivo', pt: 'Feed de Transações ao Vivo', fr: 'Flux de Transactions en Direct', de: 'Live Transaktionsfeed', ru: 'Лента транзакций', zh: '实时交易动态', ja: 'ライブトランザクションフィード', ko: '실시간 거래 피드' },
  waiting_for_mint: { en: 'Waiting for mint activity...', tr: 'Basım aktivitesi bekleniyor...', es: 'Esperando actividad de acuñación...', pt: 'Aguardando atividade de cunhagem...', fr: 'En attente d\'activité de frappe...', de: 'Warten auf Mint-Aktivität...', ru: 'Ожидание активности минта...', zh: '等待铸造活动...', ja: 'ミントアクティビティを待機中...', ko: '민트 활동 대기 중...' },

  // ─── TOKENOMICS ───
  tok_label: { en: 'Economy', tr: 'Ekonomi', es: 'Economía', pt: 'Economia', fr: 'Économie', de: 'Wirtschaft', ru: 'Экономика', zh: '经济', ja: '経済', ko: '경제' },
  tok_title: { en: 'Tokenomics', tr: 'Tokenomiks', es: 'Tokenomics', pt: 'Tokenomics', fr: 'Tokenomics', de: 'Tokenomics', ru: 'Токеномика', zh: '代币经济', ja: 'トークノミクス', ko: '토크노믹스' },
  tok_desc: { en: 'Explore the decreasing supply curve and simulate any round.', tr: 'Azalan arz eğrisini keşfedin ve herhangi bir turu simüle edin.', es: 'Explora la curva de suministro decreciente y simula cualquier ronda.', pt: 'Explore a curva de oferta decrescente e simule qualquer rodada.', fr: 'Explorez la courbe d\'offre décroissante et simulez n\'importe quel tour.', de: 'Erkunde die abnehmende Angebotskurve und simuliere jede Runde.', ru: 'Изучите убывающую кривую предложения и смоделируйте любой раунд.', zh: '探索递减供应曲线并模拟任何轮次。', ja: '減少する供給曲線を探索し、任意のラウンドをシミュレート。', ko: '감소하는 공급 곡선을 탐색하고 모든 라운드를 시뮬레이션.' },
  configure_scenario: { en: 'Configure Scenario', tr: 'Senaryo Yapılandır', es: 'Configurar Escenario', pt: 'Configurar Cenário', fr: 'Configurer le Scénario', de: 'Szenario konfigurieren', ru: 'Настроить сценарий', zh: '配置场景', ja: 'シナリオを設定', ko: '시나리오 구성' },
  mint_round: { en: 'Mint Round', tr: 'Basım Turu', es: 'Ronda de Acuñación', pt: 'Rodada de Cunhagem', fr: 'Tour de Frappe', de: 'Mint-Runde', ru: 'Раунд минта', zh: '铸造轮次', ja: 'ミントラウンド', ko: '민트 라운드' },
  market_price_tobe: { en: 'Market Price ($TOBE)', tr: 'Piyasa Fiyatı ($TOBE)', es: 'Precio de Mercado ($TOBE)', pt: 'Preço de Mercado ($TOBE)', fr: 'Prix du Marché ($TOBE)', de: 'Marktpreis ($TOBE)', ru: 'Рыночная цена ($TOBE)', zh: '市场价格 ($TOBE)', ja: '市場価格 ($TOBE)', ko: '시장 가격 ($TOBE)' },
  vault_release_pct: { en: 'Vault Release %', tr: 'Kasa Serbest Bırakma %', es: '% Liberación de Bóveda', pt: '% Liberação do Cofre', fr: '% Libération du Coffre', de: 'Tresor-Freigabe %', ru: '% высвобождения хранилища', zh: '金库释放 %', ja: 'ボールト解放 %', ko: '볼트 해제 %' },
  tokens_minted: { en: 'Tokens minted', tr: 'Basılan token', es: 'Tokens acuñados', pt: 'Tokens criados', fr: 'Jetons frappés', de: 'Gemintete Token', ru: 'Отчеканено токенов', zh: '铸造的代币', ja: 'ミントされたトークン', ko: '민트된 토큰' },
  you_receive: { en: 'You receive (50%)', tr: 'Alacağınız (%50)', es: 'Recibes (50%)', pt: 'Você recebe (50%)', fr: 'Vous recevez (50%)', de: 'Du erhältst (50%)', ru: 'Вы получаете (50%)', zh: '你获得 (50%)', ja: 'あなたが受け取る (50%)', ko: '당신이 받는 (50%)' },
  vault_receives: { en: 'Vault receives (50%)', tr: 'Kasa alır (%50)', es: 'Bóveda recibe (50%)', pt: 'Cofre recebe (50%)', fr: 'Coffre reçoit (50%)', de: 'Tresor erhält (50%)', ru: 'Хранилище получает (50%)', zh: '金库获得 (50%)', ja: 'ボールトが受け取る (50%)', ko: '볼트가 받는 (50%)' },
  cost_per_token: { en: 'Cost per token', tr: 'Token başına maliyet', es: 'Costo por token', pt: 'Custo por token', fr: 'Coût par jeton', de: 'Kosten pro Token', ru: 'Стоимость за токен', zh: '每代币成本', ja: 'トークンあたりのコスト', ko: '토큰당 비용' },
  vault_sells_at: { en: 'Vault sells at', tr: 'Kasa satış fiyatı', es: 'Bóveda vende a', pt: 'Cofre vende a', fr: 'Coffre vend à', de: 'Tresor verkauft bei', ru: 'Хранилище продаёт по', zh: '金库出售价格', ja: 'ボールト売却価格', ko: '볼트 판매 가격' },
  your_roi: { en: 'Your ROI', tr: 'ROI\'niz', es: 'Tu ROI', pt: 'Seu ROI', fr: 'Votre ROI', de: 'Dein ROI', ru: 'Ваша доходность', zh: '你的投资回报率', ja: 'あなたのROI', ko: '당신의 ROI' },
  total_supply_so_far: { en: 'Total supply so far', tr: 'Şu ana kadar toplam arz', es: 'Suministro total hasta ahora', pt: 'Oferta total até agora', fr: 'Offre totale jusqu\'ici', de: 'Bisherige Gesamtversorgung', ru: 'Общий объём на данный момент', zh: '当前总供应量', ja: 'これまでの総供給量', ko: '현재까지 총 공급량' },
  vault_releasing: { en: 'Vault releasing?', tr: 'Kasa serbest bırakıyor mu?', es: '¿Bóveda liberando?', pt: 'Cofre liberando?', fr: 'Coffre en libération?', de: 'Tresor gibt frei?', ru: 'Хранилище выпускает?', zh: '金库释放中？', ja: 'ボールト解放中？', ko: '볼트 해제 중?' },
  supply_visualization: { en: 'Supply Visualization', tr: 'Arz Görselleştirmesi', es: 'Visualización de Suministro', pt: 'Visualização de Oferta', fr: 'Visualisation de l\'Offre', de: 'Angebotsvisualisierung', ru: 'Визуализация предложения', zh: '供应可视化', ja: '供給の可視化', ko: '공급 시각화' },
  early_bird: { en: 'Early Bird', tr: 'Erken Dönem', es: 'Madrugador', pt: 'Pioneiro', fr: 'Premier Arrivé', de: 'Frühbucher', ru: 'Ранний участник', zh: '早鸟', ja: '早期参加者', ko: '얼리버드' },
  early_bird_desc: { en: 'First minter gets maximum tokens at the lowest price.', tr: 'İlk basıcı en düşük fiyatla maksimum token alır.', es: 'El primer acuñador obtiene el máximo de tokens al precio más bajo.', pt: 'O primeiro cunhador recebe o máximo de tokens pelo menor preço.', fr: 'Le premier frappeur obtient le maximum de jetons au prix le plus bas.', de: 'Der erste Minter bekommt maximale Token zum niedrigsten Preis.', ru: 'Первый участник получает максимум токенов по самой низкой цене.', zh: '第一个铸造者以最低价格获得最多代币。', ja: '最初のミンターが最低価格で最大トークンを獲得。', ko: '첫 번째 민터가 가장 낮은 가격으로 최대 토큰을 획득.' },
  mid_game: { en: 'Mid Game', tr: 'Orta Dönem', es: 'Mitad de Juego', pt: 'Meio do Jogo', fr: 'Mi-Parcours', de: 'Mitte des Spiels', ru: 'Середина игры', zh: '中期', ja: '中盤', ko: '중반' },
  mid_game_desc: { en: 'Halfway through. Tokens scarcer, price approaching $1.', tr: 'Yarı yolda. Tokenlar daha az, fiyat $1\'a yaklaşıyor.', es: 'A mitad de camino. Tokens más escasos, precio acercándose a $1.', pt: 'Na metade. Tokens mais escassos, preço se aproximando de $1.', fr: 'À mi-chemin. Jetons plus rares, prix approchant 1$.', de: 'Halbzeit. Token werden knapper, Preis nähert sich $1.', ru: 'На полпути. Токенов меньше, цена приближается к $1.', zh: '过半。代币更稀缺，价格接近 $1。', ja: '折り返し地点。トークンはより希少に、価格は $1 に近づく。', ko: '절반 진행. 토큰이 더 희소해지고, 가격이 $1에 접근.' },
  late_entry: { en: 'Late Entry', tr: 'Geç Giriş', es: 'Entrada Tardía', pt: 'Entrada Tardia', fr: 'Entrée Tardive', de: 'Später Einstieg', ru: 'Поздний вход', zh: '后期入场', ja: '遅れて参加', ko: '후기 진입' },
  late_entry_desc: { en: 'Almost done. Very few tokens, vault actively selling.', tr: 'Neredeyse bitti. Çok az token, kasa aktif satış yapıyor.', es: 'Casi terminado. Muy pocos tokens, bóveda vendiendo activamente.', pt: 'Quase terminado. Pouquíssimos tokens, cofre vendendo ativamente.', fr: 'Presque terminé. Très peu de jetons, coffre vendant activement.', de: 'Fast fertig. Sehr wenige Token, Tresor verkauft aktiv.', ru: 'Почти завершено. Очень мало токенов, хранилище активно продаёт.', zh: '即将结束。极少代币，金库正在积极出售。', ja: 'ほぼ終了。ごくわずかなトークン、ボールトが積極的に売却中。', ko: '거의 완료. 매우 적은 토큰, 볼트가 적극적으로 판매 중.' },

  // ─── MINT CARD ───
  mint_tobe: { en: 'Mint $TOBE', tr: '$TOBE Bas', es: 'Acuñar $TOBE', pt: 'Criar $TOBE', fr: 'Mint $TOBE', de: '$TOBE Minten', ru: 'Минт $TOBE', zh: '铸造 $TOBE', ja: '$TOBE をミント', ko: '$TOBE 민트' },
  you_pay: { en: 'You Pay', tr: 'Ödeme', es: 'Pagas', pt: 'Você Paga', fr: 'Vous Payez', de: 'Du zahlst', ru: 'Вы платите', zh: '你支付', ja: '支払い', ko: '지불' },
  you_receive_50: { en: 'You Receive (50%)', tr: 'Alacağınız (%50)', es: 'Recibes (50%)', pt: 'Você Recebe (50%)', fr: 'Vous Recevez (50%)', de: 'Du erhältst (50%)', ru: 'Вы получаете (50%)', zh: '你获得 (50%)', ja: 'あなたが受け取る (50%)', ko: '당신이 받는 (50%)' },
  vault_receives_50: { en: 'Vault Receives (50%)', tr: 'Kasa Alır (%50)', es: 'Bóveda Recibe (50%)', pt: 'Cofre Recebe (50%)', fr: 'Coffre Reçoit (50%)', de: 'Tresor erhält (50%)', ru: 'Хранилище получает (50%)', zh: '金库获得 (50%)', ja: 'ボールトが受け取る (50%)', ko: '볼트가 받는 (50%)' },
  effective_price: { en: 'Effective Price', tr: 'Efektif Fiyat', es: 'Precio Efectivo', pt: 'Preço Efetivo', fr: 'Prix Effectif', de: 'Effektiver Preis', ru: 'Эффективная цена', zh: '有效价格', ja: '実効価格', ko: '실효 가격' },
  rounds_remaining_label: { en: 'Rounds Remaining', tr: 'Kalan Turlar', es: 'Rondas Restantes', pt: 'Rodadas Restantes', fr: 'Tours Restants', de: 'Verbleibende Runden', ru: 'Оставшиеся раунды', zh: '剩余轮次', ja: '残りラウンド', ko: '남은 라운드' },
  if_tobe_hits: { en: 'If $TOBE hits $1.00', tr: '$TOBE $1.00\'a ulaşırsa', es: 'Si $TOBE llega a $1.00', pt: 'Se $TOBE atingir $1.00', fr: 'Si $TOBE atteint 1,00$', de: 'Wenn $TOBE $1,00 erreicht', ru: 'Если $TOBE достигнет $1.00', zh: '如果 $TOBE 达到 $1.00', ja: '$TOBE が $1.00 に達した場合', ko: '$TOBE가 $1.00에 도달하면' },
  your_tokens_worth: { en: 'Your tokens worth', tr: 'Tokenlarınızın değeri', es: 'Valor de tus tokens', pt: 'Valor dos seus tokens', fr: 'Valeur de vos jetons', de: 'Wert deiner Token', ru: 'Стоимость ваших токенов', zh: '你的代币价值', ja: 'あなたのトークンの価値', ko: '당신의 토큰 가치' },
  mint_now_btn: { en: 'Mint Now', tr: 'Şimdi Bas', es: 'Acuñar Ahora', pt: 'Criar Agora', fr: 'Mint Maintenant', de: 'Jetzt Minten', ru: 'Минт сейчас', zh: '立即铸造', ja: '今すぐミント', ko: '지금 민트' },
  connect_hint: { en: 'Connect a wallet to get started', tr: 'Başlamak için bir cüzdan bağlayın', es: 'Conecta una billetera para empezar', pt: 'Conecte uma carteira para começar', fr: 'Connectez un portefeuille pour commencer', de: 'Verbinde ein Wallet um loszulegen', ru: 'Подключите кошелёк для начала', zh: '连接钱包以开始', ja: '開始するにはウォレットを接続', ko: '시작하려면 지갑을 연결하세요' },

  // ─── TRANSPARENCY ───
  verifiable: { en: 'Verifiable', tr: 'Doğrulanabilir', es: 'Verificable', pt: 'Verificável', fr: 'Vérifiable', de: 'Verifizierbar', ru: 'Проверяемый', zh: '可验证', ja: '検証可能', ko: '검증 가능' },
  fully_transparent: { en: 'Fully Transparent', tr: 'Tamamen Şeffaf', es: 'Completamente Transparente', pt: 'Totalmente Transparente', fr: 'Entièrement Transparent', de: 'Vollständig Transparent', ru: 'Полностью прозрачный', zh: '完全透明', ja: '完全に透明', ko: '완전히 투명' },
  transparency_desc: { en: 'Every mint, every vault action, every dollar — track it all live from this page.', tr: 'Her basım, her kasa işlemi, her dolar — hepsini bu sayfadan canlı takip edin.', es: 'Cada acuñación, cada acción de bóveda, cada dólar — rastréalo todo en vivo.', pt: 'Cada cunhagem, cada ação do cofre, cada dólar — acompanhe tudo ao vivo.', fr: 'Chaque frappe, chaque action du coffre, chaque dollar — suivez tout en direct.', de: 'Jeder Mint, jede Tresor-Aktion, jeder Dollar — alles live verfolgen.', ru: 'Каждый минт, каждое действие хранилища — всё в реальном времени.', zh: '每次铸造、每个金库操作、每一美元 — 实时追踪。', ja: '全てのミント、ボールト操作 — リアルタイムで追跡。', ko: '모든 민트, 볼트 활동 — 실시간 추적.' },
  program_id: { en: 'Program ID', tr: 'Program ID', es: 'ID del Programa', pt: 'ID do Programa', fr: 'ID du Programme', de: 'Programm-ID', ru: 'ID программы', zh: '程序 ID', ja: 'プログラムID', ko: '프로그램 ID' },
  authority: { en: 'Authority', tr: 'Yetki', es: 'Autoridad', pt: 'Autoridade', fr: 'Autorité', de: 'Autorität', ru: 'Авторитет', zh: '权限', ja: '権限', ko: '권한' },
  treasury: { en: 'Treasury', tr: 'Hazine', es: 'Tesoro', pt: 'Tesouro', fr: 'Trésor', de: 'Schatz', ru: 'Казна', zh: '国库', ja: '財務', ko: '재무' },
  network: { en: 'Network', tr: 'Ağ', es: 'Red', pt: 'Rede', fr: 'Réseau', de: 'Netzwerk', ru: 'Сеть', zh: '网络', ja: 'ネットワーク', ko: '네트워크' },

  // ─── EXPLORER ───
  exp_label: { en: 'On-Chain', tr: 'Zincir Üstü', es: 'En Cadena', pt: 'On-Chain', fr: 'On-Chain', de: 'On-Chain', ru: 'В блокчейне', zh: '链上', ja: 'オンチェーン', ko: '온체인' },
  exp_title: { en: 'Explorer', tr: 'Gezgin', es: 'Explorador', pt: 'Explorador', fr: 'Explorateur', de: 'Explorer', ru: 'Обозреватель', zh: '浏览器', ja: 'エクスプローラー', ko: '탐색기' },
  exp_desc: { en: 'Transparent on-chain data. Mints, holders, supply — all verifiable.', tr: 'Şeffaf zincir üstü veriler. Basımlar, sahipler, arz — hepsi doğrulanabilir.', es: 'Datos transparentes en cadena. Acuñaciones, poseedores, suministro — todo verificable.', pt: 'Dados transparentes on-chain. Cunhagens, detentores, oferta — tudo verificável.', fr: 'Données transparentes on-chain. Tout vérifiable.', de: 'Transparente On-Chain-Daten. Alles verifizierbar.', ru: 'Прозрачные данные блокчейна. Всё проверяемо.', zh: '透明的链上数据。全部可验证。', ja: '透明なオンチェーンデータ。すべて検証可能。', ko: '투명한 온체인 데이터. 모두 검증 가능.' },
  export_csv: { en: 'Export CSV', tr: 'CSV Dışa Aktar', es: 'Exportar CSV', pt: 'Exportar CSV', fr: 'Exporter CSV', de: 'CSV Exportieren', ru: 'Экспорт CSV', zh: '导出 CSV', ja: 'CSV エクスポート', ko: 'CSV 내보내기' },
  price_alert: { en: 'Price Alert', tr: 'Fiyat Alarmı', es: 'Alerta de Precio', pt: 'Alerta de Preço', fr: 'Alerte de Prix', de: 'Preisalarm', ru: 'Оповещение о цене', zh: '价格提醒', ja: '価格アラート', ko: '가격 알림' },
  holders: { en: 'Holders', tr: 'Sahipler', es: 'Poseedores', pt: 'Detentores', fr: 'Détenteurs', de: 'Holder', ru: 'Держатели', zh: '持有者', ja: '保有者', ko: '보유자' },
  usdc_raised: { en: 'SOL Raised', tr: 'Toplanan SOL', es: 'SOL Recaudado', pt: 'SOL Arrecadado', fr: 'SOL Collecté', de: 'SOL gesammelt', ru: 'Собрано SOL', zh: '筹集的 SOL', ja: '調達した SOL', ko: '모금된 SOL' },
  token_info: { en: 'Token Info', tr: 'Token Bilgisi', es: 'Info del Token', pt: 'Info do Token', fr: 'Info du Jeton', de: 'Token Info', ru: 'Информация о токене', zh: '代币信息', ja: 'トークン情報', ko: '토큰 정보' },
  recent_mints: { en: 'Recent Mints', tr: 'Son Basımlar', es: 'Acuñaciones Recientes', pt: 'Cunhagens Recentes', fr: 'Frappes Récentes', de: 'Letzte Mints', ru: 'Последние минты', zh: '最近铸造', ja: '最近のミント', ko: '최근 민트' },
  no_mints_yet: { en: 'No mints yet — be the first!', tr: 'Henüz basım yok — ilk sen ol!', es: '¡Sin acuñaciones aún — sé el primero!', pt: 'Sem cunhagens ainda — seja o primeiro!', fr: 'Pas encore de frappes — soyez le premier!', de: 'Noch keine Mints — sei der Erste!', ru: 'Пока нет минтов — будьте первым!', zh: '还没有铸造 — 成为第一个！', ja: 'まだミントなし — 最初のミンターになろう！', ko: '아직 민트 없음 — 첫 번째가 되세요!' },
  top_holders: { en: 'Top Holders', tr: 'En Büyük Sahipler', es: 'Principales Poseedores', pt: 'Maiores Detentores', fr: 'Principaux Détenteurs', de: 'Top Holder', ru: 'Топ держатели', zh: '顶级持有者', ja: 'トップホルダー', ko: '상위 보유자' },
  no_holders_yet: { en: 'No holders yet', tr: 'Henüz sahip yok', es: 'Sin poseedores aún', pt: 'Sem detentores ainda', fr: 'Pas de détenteurs encore', de: 'Noch keine Holder', ru: 'Держателей пока нет', zh: '暂无持有者', ja: 'まだ保有者はいません', ko: '아직 보유자 없음' },
  price_history: { en: 'Price History', tr: 'Fiyat Geçmişi', es: 'Historial de Precios', pt: 'Histórico de Preços', fr: 'Historique des Prix', de: 'Preisverlauf', ru: 'История цен', zh: '价格历史', ja: '価格履歴', ko: '가격 이력' },
  name_label: { en: 'Name', tr: 'İsim', es: 'Nombre', pt: 'Nome', fr: 'Nom', de: 'Name', ru: 'Имя', zh: '名称', ja: '名前', ko: '이름' },
  ticker: { en: 'Ticker', tr: 'Kısaltma', es: 'Ticker', pt: 'Ticker', fr: 'Ticker', de: 'Ticker', ru: 'Тикер', zh: '代码', ja: 'ティッカー', ko: '티커' },
  decimals: { en: 'Decimals', tr: 'Ondalık', es: 'Decimales', pt: 'Decimais', fr: 'Décimales', de: 'Dezimalstellen', ru: 'Десятичные', zh: '小数位', ja: '小数点以下', ko: '소수점' },
  program: { en: 'Program', tr: 'Program', es: 'Programa', pt: 'Programa', fr: 'Programme', de: 'Programm', ru: 'Программа', zh: '程序', ja: 'プログラム', ko: '프로그램' },
  max_supply: { en: 'Max Supply', tr: 'Maksimum Arz', es: 'Suministro Máximo', pt: 'Oferta Máxima', fr: 'Offre Maximale', de: 'Maximale Versorgung', ru: 'Максимальное предложение', zh: '最大供应量', ja: '最大供給量', ko: '최대 공급량' },
  mint_cost: { en: 'Mint Cost', tr: 'Basım Maliyeti', es: 'Costo de Acuñación', pt: 'Custo de Cunhagem', fr: 'Coût de Frappe', de: 'Mint-Kosten', ru: 'Стоимость минта', zh: '铸造成本', ja: 'ミントコスト', ko: '민트 비용' },
  rounds: { en: 'Rounds', tr: 'Turlar', es: 'Rondas', pt: 'Rodadas', fr: 'Tours', de: 'Runden', ru: 'Раунды', zh: '轮次', ja: 'ラウンド', ko: '라운드' },
  oracle_price: { en: 'Oracle Price', tr: 'Oracle Fiyatı', es: 'Precio Oracle', pt: 'Preço Oracle', fr: 'Prix Oracle', de: 'Oracle Preis', ru: 'Цена оракула', zh: 'Oracle 价格', ja: 'オラクル価格', ko: '오라클 가격' },
  total_minted_chain: { en: 'Total Minted (chain)', tr: 'Toplam Basılan (zincir)', es: 'Total Acuñado (cadena)', pt: 'Total Criado (cadeia)', fr: 'Total Frappé (chaîne)', de: 'Gesamt Gemintet (Chain)', ru: 'Всего отчеканено (блокчейн)', zh: '总铸造量 (链上)', ja: '合計ミント (チェーン)', ko: '총 민트 (체인)' },
  round: { en: 'Round', tr: 'Tur', es: 'Ronda', pt: 'Rodada', fr: 'Tour', de: 'Runde', ru: 'Раунд', zh: '轮', ja: 'ラウンド', ko: '라운드' },
  minter: { en: 'Minter', tr: 'Basıcı', es: 'Acuñador', pt: 'Cunhador', fr: 'Frappeur', de: 'Minter', ru: 'Минтер', zh: '铸造者', ja: 'ミンター', ko: '민터' },
  tokens: { en: 'Tokens', tr: 'Token', es: 'Tokens', pt: 'Tokens', fr: 'Jetons', de: 'Token', ru: 'Токены', zh: '代币', ja: 'トークン', ko: '토큰' },

  // ─── LEADERBOARD ───
  lb_label: { en: 'Community', tr: 'Topluluk', es: 'Comunidad', pt: 'Comunidade', fr: 'Communauté', de: 'Community', ru: 'Сообщество', zh: '社区', ja: 'コミュニティ', ko: '커뮤니티' },
  lb_title: { en: 'Leaderboard', tr: 'Sıralama', es: 'Tabla de Clasificación', pt: 'Classificação', fr: 'Classement', de: 'Rangliste', ru: 'Таблица лидеров', zh: '排行榜', ja: 'リーダーボード', ko: '리더보드' },
  lb_desc: { en: 'Top minters by total tokens received. Data read directly from on-chain history.', tr: 'Alınan toplam tokenlere göre en iyi basıcılar. Veriler zincir üstü geçmişten okunur.', es: 'Principales acuñadores por total de tokens recibidos. Datos del historial en cadena.', pt: 'Maiores cunhadores por total de tokens recebidos. Dados do histórico on-chain.', fr: 'Principaux frappeurs par jetons reçus. Données on-chain.', de: 'Top Minter nach erhaltenen Token. Daten aus der On-Chain-Historie.', ru: 'Лучшие минтеры по количеству токенов. Данные из блокчейна.', zh: '按获得代币排列的顶级铸造者。链上数据。', ja: 'トークン数によるトップミンター。オンチェーンデータ。', ko: '받은 토큰 기준 상위 민터. 온체인 데이터.' },
  rank: { en: 'Rank', tr: 'Sıra', es: 'Rango', pt: 'Posição', fr: 'Rang', de: 'Rang', ru: 'Ранг', zh: '排名', ja: 'ランク', ko: '순위' },
  address: { en: 'Address', tr: 'Adres', es: 'Dirección', pt: 'Endereço', fr: 'Adresse', de: 'Adresse', ru: 'Адрес', zh: '地址', ja: 'アドレス', ko: '주소' },
  your_referral: { en: 'Your Referral Link', tr: 'Referans Linkiniz', es: 'Tu Enlace de Referencia', pt: 'Seu Link de Referência', fr: 'Votre Lien de Parrainage', de: 'Dein Empfehlungslink', ru: 'Ваша реферальная ссылка', zh: '你的推荐链接', ja: 'リファラルリンク', ko: '추천 링크' },
  referral_desc: { en: 'Share this link. When someone mints through it, your address is recorded as the referrer on-chain via the URL.', tr: 'Bu bağlantıyı paylaşın. Biri bu link üzerinden bastığında, adresiniz zincir üstünde referans olarak kaydedilir.', es: 'Comparte este enlace. Cuando alguien acuña a través de él, tu dirección se registra como referente.', pt: 'Compartilhe este link. Quando alguém cunha através dele, seu endereço é registrado como referente.', fr: 'Partagez ce lien. Votre adresse est enregistrée comme parrain on-chain.', de: 'Teile diesen Link. Deine Adresse wird als Empfehler on-chain registriert.', ru: 'Поделитесь ссылкой. Ваш адрес записывается как реферер в блокчейне.', zh: '分享此链接。推荐人地址记录在链上。', ja: 'リンクを共有。リファラーとしてオンチェーンに記録。', ko: '링크를 공유하세요. 추천인으로 온체인에 기록됩니다.' },
  copy: { en: 'Copy', tr: 'Kopyala', es: 'Copiar', pt: 'Copiar', fr: 'Copier', de: 'Kopieren', ru: 'Копировать', zh: '复制', ja: 'コピー', ko: '복사' },
  connect_wallet_to_generate: { en: 'Connect wallet to generate link', tr: 'Link oluşturmak için cüzdan bağlayın', es: 'Conecta billetera para generar enlace', pt: 'Conecte carteira para gerar link', fr: 'Connectez portefeuille pour générer le lien', de: 'Wallet verbinden um Link zu generieren', ru: 'Подключите кошелёк для генерации ссылки', zh: '连接钱包以生成链接', ja: 'リンク生成にはウォレットを接続', ko: '링크 생성을 위해 지갑 연결' },

  // ─── FAQ ───
  faq_label: { en: 'Answers', tr: 'Cevaplar', es: 'Respuestas', pt: 'Respostas', fr: 'Réponses', de: 'Antworten', ru: 'Ответы', zh: '解答', ja: '回答', ko: '답변' },
  faq_title: { en: 'FAQ', tr: 'SSS', es: 'Preguntas Frecuentes', pt: 'Perguntas Frequentes', fr: 'FAQ', de: 'FAQ', ru: 'FAQ', zh: '常见问题', ja: 'よくある質問', ko: '자주 묻는 질문' },
  faq_desc: { en: 'Common questions about TOBE, answered directly.', tr: 'TOBE hakkında sık sorulan sorular.', es: 'Preguntas comunes sobre TOBE, respondidas directamente.', pt: 'Perguntas comuns sobre TOBE.', fr: 'Questions courantes sur TOBE.', de: 'Häufige Fragen zu TOBE.', ru: 'Частые вопросы о TOBE.', zh: '关于 TOBE 的常见问题。', ja: 'TOBEに関するよくある質問。', ko: 'TOBE에 대한 일반적인 질문.' },
  faq_q1: { en: 'Is $TOBE a stablecoin?', tr: '$TOBE bir stablecoin mi?', es: '¿Es $TOBE una moneda estable?', pt: '$TOBE é uma stablecoin?', fr: '$TOBE est-il un stablecoin?', de: 'Ist $TOBE ein Stablecoin?', ru: 'Является ли $TOBE стейблкоином?', zh: '$TOBE 是稳定币吗？', ja: '$TOBE はステーブルコインですか？', ko: '$TOBE는 스테이블코인인가요?' },
  faq_q2: { en: 'What happens after all 1,024 rounds are minted?', tr: '1.024 tur basıldıktan sonra ne olur?', es: '¿Qué pasa después de las 1.024 rondas?', pt: 'O que acontece após as 1.024 rodadas?', fr: 'Que se passe-t-il après les 1 024 tours?', de: 'Was passiert nach 1.024 Runden?', ru: 'Что произойдёт после 1 024 раундов?', zh: '1,024 轮后会怎样？', ja: '1,024 ラウンド後は？', ko: '1,024 라운드 후에는?' },
  faq_q3: { en: 'Can the team rug or change the rules?', tr: 'Takım kaçabilir veya kuralları değiştirebilir mi?', es: '¿Puede el equipo hacer rug pull?', pt: 'A equipe pode dar rug pull?', fr: 'L\'équipe peut-elle faire un rug pull?', de: 'Kann das Team einen Rug Pull machen?', ru: 'Может ли команда сбежать?', zh: '团队能跑路吗？', ja: 'ラグプルは可能ですか？', ko: '러그풀이 가능한가요?' },
  faq_q4: { en: 'Why does each round cost exactly 10 SOL?', tr: 'Her tur neden 10 SOL?', es: '¿Por qué cada ronda cuesta 10 SOL?', pt: 'Por que cada rodada custa 10 SOL?', fr: 'Pourquoi chaque tour coûte 10 SOL?', de: 'Warum kostet jede Runde 10 SOL?', ru: 'Почему каждый раунд стоит 10 SOL?', zh: '为什么每轮 10 SOL？', ja: '各ラウンドが10 SOLなのはなぜ？', ko: '각 라운드가 10 SOL인 이유는?' },
  faq_q5: { en: 'Where does the SOL go when I mint?', tr: 'Bastığımda SOL nereye gidiyor?', es: '¿A dónde va el SOL cuando acuño?', pt: 'Para onde vai o SOL quando eu crio?', fr: 'Où va le SOL quand je frappe?', de: 'Wohin geht das SOL beim Minten?', ru: 'Куда идёт SOL при минте?', zh: '铸造时 SOL 去哪里？', ja: 'ミント時にSOLはどこへ？', ko: '민트 시 SOL은 어디로 가나요?' },
  faq_q6: { en: 'Can I sell my $TOBE tokens?', tr: '$TOBE tokenlarımı satabilir miyim?', es: '¿Puedo vender mis tokens $TOBE?', pt: 'Posso vender meus tokens $TOBE?', fr: 'Puis-je vendre mes jetons $TOBE?', de: 'Kann ich meine $TOBE Token verkaufen?', ru: 'Могу ли я продать $TOBE?', zh: '我可以出售 $TOBE 代币吗？', ja: '$TOBEトークンは売れますか？', ko: '$TOBE 토큰을 팔 수 있나요?' },
  faq_q7: { en: 'Is there a team allocation or pre-mine?', tr: 'Ekip tahsisi veya ön madencilik var mı?', es: '¿Hay asignación de equipo o pre-minado?', pt: 'Há alocação para a equipe ou pré-mineração?', fr: 'Y a-t-il une allocation d\'équipe ou un pré-minage?', de: 'Gibt es eine Team-Zuteilung oder Pre-Mine?', ru: 'Есть ли командные токены или пре-майн?', zh: '有团队分配或预挖矿吗？', ja: 'チーム配分やプレマインはありますか？', ko: '팀 배분이나 프리마이닝이 있나요?' },
  faq_q8: { en: 'What is the vault and how does it work?', tr: 'Kasa nedir ve nasıl çalışır?', es: '¿Qué es la bóveda y cómo funciona?', pt: 'O que é o cofre e como funciona?', fr: 'Qu\'est-ce que le coffre et comment fonctionne-t-il?', de: 'Was ist der Tresor und wie funktioniert er?', ru: 'Что такое хранилище и как оно работает?', zh: '金库是什么，如何运作？', ja: 'ボールトとは何ですか？', ko: '볼트는 무엇이며 어떻게 작동하나요?' },
  faq_q9: { en: 'How is the token price determined?', tr: 'Token fiyatı nasıl belirlenir?', es: '¿Cómo se determina el precio del token?', pt: 'Como o preço do token é determinado?', fr: 'Comment le prix du jeton est-il déterminé?', de: 'Wie wird der Token-Preis bestimmt?', ru: 'Как определяется цена токена?', zh: '代币价格如何确定？', ja: 'トークン価格はどう決まりますか？', ko: '토큰 가격은 어떻게 결정되나요?' },
  faq_q10: { en: 'What network is TOBE on?', tr: 'TOBE hangi ağda?', es: '¿En qué red está TOBE?', pt: 'Em qual rede está o TOBE?', fr: 'Sur quel réseau est TOBE?', de: 'Auf welchem Netzwerk ist TOBE?', ru: 'В какой сети работает TOBE?', zh: 'TOBE 在哪个网络上？', ja: 'TOBEはどのネットワークですか？', ko: 'TOBE는 어떤 네트워크에 있나요?' },
  faq_q11: { en: 'Do I need anything besides 10 SOL to mint?', tr: 'Basmak için 10 SOL dışında bir şeye ihtiyacım var mı?', es: '¿Necesito algo además de 10 SOL para acuñar?', pt: 'Preciso de algo além de 10 SOL para criar?', fr: 'Ai-je besoin d\'autre chose que 10 SOL pour frapper?', de: 'Brauche ich außer 10 SOL noch etwas zum Minten?', ru: 'Нужно ли мне что-то кроме 10 SOL?', zh: '除了 10 SOL 还需要别的吗？', ja: '10 SOL以外に何か必要ですか？', ko: '10 SOL 외에 다른 것이 필요한가요?' },
  faq_q12: { en: 'Why should I trust this over other tokens?', tr: 'Bunu diğer tokenlara neden tercih etmeliyim?', es: '¿Por qué confiar en esto más que en otros tokens?', pt: 'Por que confiar nisto mais que em outros tokens?', fr: 'Pourquoi faire confiance à ceci plutôt qu\'à d\'autres jetons?', de: 'Warum sollte ich diesem Token vertrauen?', ru: 'Почему этому токену можно доверять?', zh: '为什么比其他代币更值得信任？', ja: '他のトークンよりなぜ信頼できますか？', ko: '다른 토큰보다 왜 신뢰할 수 있나요?' },
  faq_q13: { en: "What's stopping the price from going below my cost?", tr: 'Fiyatın maliyetimin altına düşmesini ne engelliyor?', es: '¿Qué impide que el precio caiga por debajo de mi costo?', pt: 'O que impede o preço de cair abaixo do meu custo?', fr: 'Qu\'est-ce qui empêche le prix de tomber en dessous de mon coût?', de: 'Was verhindert, dass der Preis unter meine Kosten fällt?', ru: 'Что мешает цене упасть ниже моих затрат?', zh: '什么阻止价格跌破我的成本？', ja: '価格がコストを下回るのを何が防ぎますか？', ko: '가격이 내 비용 이하로 떨어지는 것을 무엇이 막나요?' },
  faq_a1: { en: 'No. $TOBE is an anti-inflationary token designed to approach $1 — not peg to it. The vault mechanism creates upward pressure toward $1, but the market determines the actual price. Think of $1 as a ceiling the protocol builds toward, not a guarantee.', tr: 'Hayır. $TOBE, $1\'a yaklaşmak için tasarlanmış anti-enflasyonist bir tokendir, ona sabitlenmiş değil. Kasa mekanizması $1\'a doğru yukarı baskı oluşturur, ancak piyasa gerçek fiyatı belirler.', es: 'No. $TOBE es un token anti-inflacionario diseñado para acercarse a $1, no para fijarse a él. El mecanismo de bóveda crea presión alcista hacia $1, pero el mercado determina el precio real.', pt: 'Não. $TOBE é um token anti-inflacionário projetado para se aproximar de $1 — não para se fixar a ele. O mecanismo do cofre cria pressão ascendente em direção a $1, mas o mercado determina o preço real.', fr: 'Non. $TOBE est un jeton anti-inflationniste conçu pour approcher 1$ — pas pour y être indexé. Le mécanisme du coffre crée une pression haussière vers 1$, mais le marché détermine le prix réel.', de: 'Nein. $TOBE ist ein anti-inflationärer Token, der darauf ausgelegt ist, sich $1 anzunähern — nicht daran zu koppeln. Der Tresor-Mechanismus erzeugt Aufwärtsdruck in Richtung $1, aber der Markt bestimmt den tatsächlichen Preis.', ru: 'Нет. $TOBE — антиинфляционный токен, разработанный для приближения к $1, но не привязки к нему. Механизм хранилища создаёт восходящее давление к $1, но рынок определяет фактическую цену.', zh: '不是。$TOBE 是一种抗通胀代币，旨在接近 $1 而非锚定它。金库机制向 $1 创造上行压力，但市场决定实际价格。', ja: 'いいえ。$TOBEは$1に近づくよう設計されたアンチインフレトークンで、ペッグされているわけではありません。ボールトメカニズムが$1への上昇圧力を生みますが、実際の価格は市場が決定します。', ko: '아니요. $TOBE는 $1에 접근하도록 설계된 인플레이션 방지 토큰입니다. 볼트 메커니즘이 $1을 향한 상승 압력을 만들지만 실제 가격은 시장이 결정합니다.' },
  faq_a2: { en: 'Minting stops permanently. No more tokens can ever be created. The vault continues to hold 50% of all tokens ever minted, selling only at the $1 ceiling. The token becomes fully deflationary — fixed supply, growing demand floor.', tr: 'Basım kalıcı olarak durur. Artık hiç token oluşturulamaz. Kasa, basılan tüm tokenlerin %50\'sini tutmaya devam eder ve yalnızca $1 tavanından satar. Token tamamen deflasyoner hale gelir.', es: 'La acuñación se detiene permanentemente. No se pueden crear más tokens. La bóveda sigue manteniendo el 50% de todos los tokens acuñados, vendiendo solo al techo de $1. El token se vuelve completamente deflacionario.', pt: 'A cunhagem para permanentemente. Nenhum token pode ser criado. O cofre continua a manter 50% de todos os tokens criados, vendendo apenas no teto de $1. O token torna-se completamente deflacionário.', fr: 'La frappe s\'arrête définitivement. Plus aucun jeton ne peut être créé. Le coffre continue de détenir 50% de tous les jetons frappés, vendant seulement au plafond de 1$. Le jeton devient entièrement déflationniste.', de: 'Das Minting stoppt dauerhaft. Keine weiteren Token können erstellt werden. Der Tresor hält weiterhin 50% aller gemineten Token und verkauft nur beim $1-Limit. Der Token wird vollständig deflationär.', ru: 'Минт останавливается навсегда. Больше токенов создать нельзя. Хранилище продолжает хранить 50% всех отчеканенных токенов, продавая только при достижении потолка $1. Токен становится полностью дефляционным.', zh: '铸造永久停止。不能再创建更多代币。金库继续持有所有铸造代币的 50%，仅在 $1 上限时出售。代币变为完全通缩 — 固定供应，需求底价上升。', ja: 'ミントは永久に停止します。これ以上トークンは作れません。ボールトは全ミントトークンの50%を保有し続け、$1の上限価格でのみ販売します。トークンは完全にデフレになります。', ko: '민팅이 영구적으로 중단됩니다. 더 이상 토큰을 만들 수 없습니다. 볼트는 모든 민팅된 토큰의 50%를 계속 보유하며 $1 상한선에서만 판매합니다.' },
  faq_a3: { en: 'No. The smart contract controls all minting and vault operations through PDAs. The authority can pause/unpause for emergencies and update the treasury address, but cannot mint extra tokens, drain the vault, or change the supply curve. All actions are verifiable on-chain.', tr: 'Hayır. Akıllı sözleşme, PDA\'lar aracılığıyla tüm basım ve kasa operasyonlarını kontrol eder. Yetki acil durumlarda durdurabilir/sürdürebilir ve hazine adresini güncelleyebilir, ancak ekstra token basıp kasayı boşaltamaz.', es: 'No. El contrato inteligente controla todas las operaciones de acuñación y bóveda a través de PDAs. La autoridad puede pausar/reanudar por emergencias, pero no puede acuñar tokens extra ni vaciar la bóveda.', pt: 'Não. O contrato inteligente controla todas as operações através de PDAs. A autoridade pode pausar/retomar para emergências, mas não pode criar tokens extras, drenar o cofre ou alterar a curva de oferta.', fr: 'Non. Le contrat intelligent contrôle toutes les opérations via des PDAs. L\'autorité peut mettre en pause pour les urgences, mais ne peut pas créer de jetons supplémentaires ni vider le coffre.', de: 'Nein. Der Smart Contract kontrolliert alle Operationen über PDAs. Die Autorität kann für Notfälle pausieren, aber keine zusätzlichen Token minten oder den Tresor leeren.', ru: 'Нет. Смарт-контракт управляет всеми операциями через PDA. Полномочия позволяют приостановить работу при экстренных ситуациях, но не могут создавать токены или опустошать хранилище.', zh: '不能。智能合约通过 PDA 控制所有铸造和金库操作。权限可以暂停/恢复紧急情况，但不能铸造额外代币或清空金库。', ja: 'いいえ。スマートコントラクトがPDA経由で全操作を管理します。権限は緊急時に一時停止できますが、追加トークンのミントやボールトの引き出しはできません。', ko: '아니요. 스마트 컨트랙트가 PDA를 통해 모든 작업을 제어합니다. 권한은 긴급 시 일시중지할 수 있지만 추가 토큰 민팅이나 볼트 비우기는 불가능합니다.' },
  faq_a4: { en: 'Every round costs the same — 10 SOL. What changes is how many tokens you receive. Round 1 gives you 524,288 tokens. Round 1024 gives you 512. Same price, fewer tokens — this is what makes early participation more rewarding and creates the anti-inflationary curve.', tr: 'Her tur aynı maliyete sahip — 10 SOL. Değişen şey kaç token aldığınızdır. 1. tur size 524.288 token verir. 1024. tur 512 verir. Aynı fiyat, daha az token — bu, erken katılımı daha ödüllendirici kılar.', es: 'Cada ronda cuesta lo mismo — 10 SOL. Lo que cambia es cuántos tokens recibes. La ronda 1 da 524.288 tokens. La ronda 1024 da 512. Mismo precio, menos tokens — esto hace la participación temprana más remuneradora.', pt: 'Cada rodada custa o mesmo — 10 SOL. O que muda é quantos tokens você recebe. Rodada 1 dá 524.288 tokens. Rodada 1024 dá 512. Mesmo preço, menos tokens — isso torna a participação antecipada mais recompensadora.', fr: 'Chaque tour coûte la même chose — 10 SOL. Ce qui change, c\'est le nombre de jetons reçus. Tour 1 donne 524 288 jetons. Tour 1024 donne 512. Même prix, moins de jetons — c\'est ce qui rend la participation anticipée plus intéressante.', de: 'Jede Runde kostet dasselbe — 10 SOL. Was sich ändert, ist die Anzahl der erhaltenen Token. Runde 1 gibt 524.288 Token. Runde 1024 gibt 512. Gleicher Preis, weniger Token — das macht frühe Teilnahme lohnender.', ru: 'Каждый раунд стоит одинаково — 10 SOL. Меняется количество получаемых токенов. Раунд 1 даёт 524 288 токенов. Раунд 1024 даёт 512. Одна цена, меньше токенов — это делает раннее участие более выгодным.', zh: '每轮费用相同 — 10 SOL。变化的是获得的代币数量。第 1 轮给 524,288 个代币，第 1024 轮给 512 个。相同价格，更少代币 — 这使早期参与更有利可图。', ja: '各ラウンドのコストは同じ — 10 SOL。変わるのは受け取るトークン数です。ラウンド1は524,288トークン、ラウンド1024は512トークン。同じ価格で少ないトークン — これが早期参加をより有益にします。', ko: '매 라운드 비용은 동일 — 10 SOL. 달라지는 것은 받는 토큰 수입니다. 1라운드는 524,288개, 1024라운드는 512개. 같은 가격, 적은 토큰 — 이것이 초기 참여를 더 유리하게 만듭니다.' },
  faq_a5: { en: 'The 10 SOL goes to the protocol treasury to fund development, liquidity, and operations. 50% of minted tokens go to you, 50% go to the vault that creates the price floor mechanism. Every transaction is trackable on-chain.', tr: '10 SOL geliştirme, likidite ve operasyonları finanse etmek için protokol hazinesine gider. Basılan tokenlerin %50\'si size, %50\'si taban fiyat mekanizması oluşturan kasaya gider.', es: 'Los 10 SOL van al tesoro del protocolo para financiar desarrollo, liquidez y operaciones. El 50% de los tokens acuñados van para ti, el 50% va a la bóveda que crea el mecanismo de precio mínimo.', pt: 'Os 10 SOL vão para o tesouro do protocolo para financiar desenvolvimento, liquidez e operações. 50% dos tokens cunhados vão para você, 50% vão para o cofre que cria o mecanismo de preço mínimo.', fr: 'Les 10 SOL vont au trésor du protocole pour financer le développement, la liquidité et les opérations. 50% des jetons mintés vous reviennent, 50% vont dans le coffre qui crée le mécanisme de prix plancher.', de: 'Die 10 SOL gehen in die Protokollkasse für Entwicklung, Liquidität und Betrieb. 50% der geminten Token gehen an dich, 50% in den Tresor, der den Preisboden-Mechanismus schafft.', ru: '10 SOL идёт в казну протокола на разработку, ликвидность и операции. 50% выпущенных токенов идёт вам, 50% — в хранилище, создающее механизм ценового дна.', zh: '10 SOL 进入协议金库，用于资助开发、流动性和运营。50% 的铸造代币归你，50% 进入创建价格底价机制的金库。', ja: '10 SOLはプロトコル財務に充てられます。ミントされたトークンの50%はあなたに、50%は価格フロアメカニズムを作るボールトに入ります。', ko: '10 SOL는 개발, 유동성, 운영을 위해 프로토콜 재무로 갑니다. 민팅된 토큰의 50%는 당신에게, 50%는 가격 바닥 메커니즘을 만드는 볼트로 갑니다.' },
  faq_a6: { en: 'Yes. $TOBE is a standard SPL token — you can transfer, trade, or sell it freely on any Solana DEX once liquidity is established. There are no transfer restrictions or sell taxes.', tr: 'Evet. $TOBE standart bir SPL tokendir — likidite sağlandığında herhangi bir Solana DEX\'inde serbestçe transfer edebilir, işlem yapabilir veya satabilirsiniz. Transfer kısıtlaması veya satış vergisi yoktur.', es: 'Sí. $TOBE es un token SPL estándar — puedes transferirlo, negociarlo o venderlo libremente en cualquier DEX de Solana una vez establecida la liquidez. No hay restricciones de transferencia ni impuestos de venta.', pt: 'Sim. $TOBE é um token SPL padrão — você pode transferir, negociar ou vendê-lo livremente em qualquer DEX Solana após o estabelecimento de liquidez. Não há restrições de transferência ou impostos de venda.', fr: 'Oui. $TOBE est un jeton SPL standard — vous pouvez le transférer, l\'échanger ou le vendre librement sur tout DEX Solana une fois la liquidité établie. Pas de restrictions de transfert ni de taxes de vente.', de: 'Ja. $TOBE ist ein Standard-SPL-Token — du kannst ihn frei auf jedem Solana DEX übertragen, handeln oder verkaufen, sobald Liquidität vorhanden ist. Keine Transferbeschränkungen oder Verkaufssteuern.', ru: 'Да. $TOBE — стандартный SPL-токен. Вы можете свободно переводить, торговать или продавать его на любом DEX Solana после установления ликвидности. Нет ограничений на перевод или налога на продажу.', zh: '可以。$TOBE 是标准 SPL 代币 — 一旦建立流动性，您可以在任何 Solana DEX 上自由转移、交易或出售。没有转移限制或销售税。', ja: 'はい。$TOBEは標準SPLトークンです。流動性が確立されれば、どのSolana DEXでも自由に送金、取引、売却できます。送金制限や販売税はありません。', ko: '네. $TOBE는 표준 SPL 토큰입니다. 유동성이 확립되면 어떤 Solana DEX에서도 자유롭게 전송, 거래, 판매할 수 있습니다. 전송 제한이나 판매세가 없습니다.' },
  faq_a7: { en: 'Zero. There are no team tokens, no advisor tokens, no VC rounds, no pre-mine. Every single $TOBE token enters circulation through the same 1,024 public mint rounds. The founder mints under the same rules as everyone else.', tr: 'Sıfır. Ekip tokeni, danışman tokeni, VC turu, ön madencilik yok. Her $TOBE tokeni aynı 1.024 halka açık basım turları aracılığıyla dolaşıma girer. Kurucu, diğerleriyle aynı kurallar altında basar.', es: 'Cero. No hay tokens de equipo, tokens de asesor, rondas de VC, ni pre-minado. Cada token $TOBE entra en circulación a través de las mismas 1.024 rondas de acuñación públicas. El fundador acuña bajo las mismas reglas.', pt: 'Zero. Não há tokens de equipe, tokens de assessores, rodadas de VC, nem pré-mineração. Cada token $TOBE entra em circulação pelas mesmas 1.024 rodadas públicas. O fundador cria sob as mesmas regras.', fr: 'Zéro. Il n\'y a pas de jetons d\'équipe, pas de jetons de conseillers, pas de tours VC, pas de pré-minage. Chaque jeton $TOBE entre en circulation via les mêmes 1 024 tours publics. Le fondateur frappe selon les mêmes règles.', de: 'Null. Keine Team-Token, keine Berater-Token, keine VC-Runden, kein Pre-Mine. Jeder $TOBE-Token gelangt durch dieselben 1.024 öffentlichen Mint-Runden in Umlauf. Der Gründer mintet nach denselben Regeln.', ru: 'Ноль. Нет командных токенов, советников, венчурных раундов, пре-майна. Каждый $TOBE токен поступает в обращение через те же 1 024 публичных раунда. Основатель минтит по тем же правилам.', zh: '零。没有团队代币、顾问代币、VC 轮次、预挖矿。每个 $TOBE 代币都通过相同的 1,024 轮公开铸造进入流通。创始人按同样规则铸造。', ja: 'ゼロ。チームトークン、アドバイザートークン、VCラウンド、プレマインはありません。全$TOBEトークンは同じ1,024回の公開ミントラウンドで流通に入ります。創設者も同じルール。', ko: '없습니다. 팀 토큰, 어드바이저 토큰, VC 라운드, 프리마이닝이 없습니다. 모든 $TOBE 토큰은 동일한 1,024 공개 민트 라운드를 통해 유통됩니다.' },
  faq_a8: { en: 'Every time someone mints, 50% of the tokens go to the minter and 50% go to a PDA-controlled vault. The vault only releases tokens when the market price hits the $1 ceiling — creating permanent buy pressure. The vault grows with every mint and acts as a floor mechanism.', tr: 'Birisi her bastığında, tokenlerin %50\'si basıcıya ve %50\'si PDA kontrollü kasaya gider. Kasa, yalnızca piyasa fiyatı $1 tavanına ulaştığında token serbest bırakır — kalıcı alım baskısı yaratır.', es: 'Cada vez que alguien acuña, el 50% de los tokens va al acuñador y el 50% va a una bóveda controlada por PDA. La bóveda solo libera tokens cuando el precio de mercado alcanza el techo de $1.', pt: 'Toda vez que alguém cria, 50% dos tokens vai ao cunhador e 50% vai para um cofre controlado por PDA. O cofre só libera tokens quando o preço de mercado atinge o teto de $1.', fr: 'À chaque frappe, 50% des jetons vont au frappeur et 50% dans un coffre contrôlé par PDA. Le coffre ne libère des jetons que lorsque le prix du marché atteint le plafond de 1$.', de: 'Bei jedem Mint gehen 50% der Token an den Minter und 50% in einen PDA-kontrollierten Tresor. Der Tresor gibt Token nur frei, wenn der Marktpreis die $1-Grenze erreicht.', ru: 'При каждом минте 50% токенов идёт минтеру и 50% в хранилище под управлением PDA. Хранилище выпускает токены только при достижении рыночной цены $1.', zh: '每次铸造时，50% 的代币给铸造者，50% 进入 PDA 控制的金库。金库仅在市场价格达到 $1 上限时才释放代币，创造永久购买压力。', ja: 'ミントのたびに、トークンの50%がミンターに、50%がPDA管理のボールトに送られます。ボールトは市場価格が$1の上限に達したときのみトークンを放出します。', ko: '민팅 시마다 토큰의 50%는 민터에게, 50%는 PDA 제어 볼트로 갑니다. 볼트는 시장 가격이 $1 상한선에 도달했을 때만 토큰을 출시합니다.' },
  faq_a9: { en: 'The market determines the price — $TOBE trades freely on DEXs. What the protocol controls is the cost per token at mint, which increases every round as fewer tokens are issued. The vault creates upward pressure toward $1, but actual trading price is set by supply and demand.', tr: 'Piyasa fiyatı belirler — $TOBE DEX\'lerde serbestçe işlem görür. Protokolün kontrol ettiği şey, her turda daha az token çıkarıldıkça artan mint başına token maliyetidir. Kasa $1\'a doğru yukarı baskı oluşturur.', es: 'El mercado determina el precio — $TOBE se negocia libremente en los DEXs. Lo que controla el protocolo es el costo por token en la acuñación. La bóveda crea presión alcista hacia $1, pero el precio real lo determina la oferta y la demanda.', pt: 'O mercado determina o preço. O que o protocolo controla é o custo por token na criação, que aumenta a cada rodada. O cofre cria pressão ascendente em direção a $1, mas o preço real é definido pela oferta e demanda.', fr: 'Le marché détermine le prix. Ce que le protocole contrôle est le coût par jeton lors de la frappe. Le coffre crée une pression haussière vers 1$, mais le prix réel est déterminé par l\'offre et la demande.', de: 'Der Markt bestimmt den Preis. Was das Protokoll kontrolliert, ist der Mint-Preis pro Token. Der Tresor schafft Aufwärtsdruck Richtung $1, aber der tatsächliche Preis wird durch Angebot und Nachfrage bestimmt.', ru: 'Рынок определяет цену. Протокол контролирует стоимость за токен при минте. Хранилище создаёт давление к $1, но фактическая торговая цена устанавливается спросом и предложением.', zh: '市场决定价格 — $TOBE 在 DEX 上自由交易。协议控制的是每次铸造的代币成本，随着每轮代币减少而上升。金库向 $1 创造上行压力，但实际价格由供需决定。', ja: '市場が価格を決定します。プロトコルが制御するのはミント時のトークンあたりのコストです。ボールトは$1への上昇圧力を生みますが、実際の取引価格は需給で決まります。', ko: '시장이 가격을 결정합니다. 프로토콜이 제어하는 것은 민트 시 토큰당 비용입니다. 볼트가 $1을 향한 상승 압력을 만들지만 실제 가격은 수요와 공급에 의해 결정됩니다.' },
  faq_a10: { en: 'Solana. We chose Solana for sub-second finality, near-zero transaction fees, and a mature SPL token ecosystem. Minting costs a fraction of a cent in gas — compared to $10–$50+ on Ethereum.', tr: 'Solana. Solana\'yı saniyenin altında kesinleşme, sıfıra yakın işlem ücretleri ve olgun SPL token ekosistemi için seçtik. Basım ücreti bir sentin fraksiyonu kadar — Ethereum\'daki $10-$50+\'a kıyasla.', es: 'Solana. Elegimos Solana por su finalidad en menos de un segundo, tarifas de transacción casi nulas y un ecosistema de tokens SPL maduro. Acuñar cuesta una fracción de centavo en gas — comparado con $10–$50+ en Ethereum.', pt: 'Solana. Escolhemos Solana pela finalidade abaixo de um segundo, taxas de transação quase zero e um ecossistema SPL maduro. Criar custa uma fração de centavo em gas — comparado a $10–$50+ no Ethereum.', fr: 'Solana. Nous avons choisi Solana pour sa finalité en moins d\'une seconde, ses frais de transaction quasi nuls et son écosystème SPL mature. Frapper coûte une fraction de centime en gas.', de: 'Solana. Wir wählten Solana für sub-sekündige Finalität, nahezu keine Transaktionsgebühren und ein reifes SPL-Token-Ökosystem. Minting kostet einen Bruchteil eines Cents — verglichen mit $10–$50+ auf Ethereum.', ru: 'Solana. Мы выбрали Solana за финальность менее секунды, почти нулевые комиссии и зрелую экосистему SPL. Минт стоит долю цента — по сравнению с $10–$50+ на Ethereum.', zh: 'Solana。我们选择 Solana 是因为亚秒级最终确定性、近乎零的交易费用和成熟的 SPL 代币生态系统。铸造费用不到一分钱 — 而以太坊需要 $10–$50+。', ja: 'Solanaです。サブセカンドのファイナリティ、ほぼゼロの手数料、成熟したSPLエコシステムのためにSolanaを選びました。ミントのガス代は数分の1セント — Ethereumの$10〜$50+と比較して。', ko: 'Solana입니다. 1초 미만의 최종성, 거의 제로에 가까운 거래 수수료, 성숙한 SPL 생태계 때문에 Solana를 선택했습니다. 민팅 가스 비용은 몇 분의 1 센트 — Ethereum의 $10–$50+와 비교하면.' },
  faq_a11: { en: "Yes — you'll need a small amount of SOL (less than 0.01 SOL) to cover Solana transaction fees, plus a Solana wallet like Phantom, Backpack, or Solflare. That's it. No KYC, no sign-up, no approval process.", tr: 'Evet — Solana işlem ücretlerini karşılamak için az miktarda SOL (0,01 SOL\'dan az) ve Phantom, Backpack veya Solflare gibi bir Solana cüzdanına ihtiyacınız var. KYC yok, kayıt yok, onay süreci yok.', es: 'Sí — necesitarás una pequeña cantidad de SOL (menos de 0,01 SOL) para cubrir las tarifas de transacción de Solana, más una billetera Solana. Eso es todo. Sin KYC, sin registro, sin proceso de aprobación.', pt: 'Sim — você precisará de uma pequena quantidade de SOL (menos de 0,01 SOL) para cobrir as taxas de transação da Solana, mais uma carteira Solana. É isso. Sem KYC, sem cadastro, sem processo de aprovação.', fr: "Oui — vous aurez besoin d'une petite quantité de SOL (moins de 0,01 SOL) pour couvrir les frais de transaction Solana, plus un portefeuille Solana. C'est tout. Pas de KYC, pas d'inscription.", de: 'Ja — du brauchst eine kleine Menge SOL (weniger als 0,01 SOL) für Solana-Transaktionsgebühren und ein Solana-Wallet. Das ist alles. Kein KYC, keine Anmeldung, kein Genehmigungsprozess.', ru: 'Да — вам понадобится немного SOL (менее 0,01 SOL) для комиссий Solana и кошелёк Solana. Всё. Никакого KYC, регистрации или процесса одобрения.', zh: '是的 — 您需要少量 SOL（不到 0.01 SOL）来支付 Solana 交易费，以及 Phantom、Backpack 或 Solflare 等 Solana 钱包。仅此而已。无 KYC，无注册，无审批流程。', ja: 'はい — Solanaの取引手数料を支払うために少量のSOL（0.01 SOL未満）とSolanaウォレットが必要です。それだけです。KYCなし、登録なし、承認プロセスなし。', ko: '예 — Solana 거래 수수료를 위한 소량의 SOL (0.01 SOL 미만)과 Solana 지갑이 필요합니다. 그게 전부입니다. KYC 없음, 가입 없음, 승인 절차 없음.' },
  faq_a12: { en: "Don't trust — verify. The smart contract is open source. Every mint, vault deposit, and token transfer is on-chain and displayed on this page in real time. There's no team allocation, no backdoor, no admin mint function. Math, not marketing.", tr: 'Güvenme — doğrula. Akıllı sözleşme açık kaynaklıdır. Her basım, kasa depozitosu ve token transferi zincir üstündedir ve bu sayfada gerçek zamanlı gösterilir. Ekip tahsisi, arka kapı, yönetici mint fonksiyonu yok.', es: 'No confíes — verifica. El contrato inteligente es de código abierto. Cada acuñación, depósito de bóveda y transferencia está on-chain y se muestra en esta página en tiempo real. Sin asignación de equipo, sin puertas traseras.', pt: 'Não confie — verifique. O contrato inteligente é de código aberto. Cada cunhagem, depósito e transferência está on-chain e exibido nesta página em tempo real. Sem alocação de equipe, sem backdoors.', fr: "Ne faites pas confiance — vérifiez. Le contrat intelligent est open source. Chaque frappe, dépôt et transfert est on-chain et affiché en temps réel. Pas d'allocation d'équipe, pas de backdoor.", de: 'Nicht vertrauen — verifizieren. Der Smart Contract ist Open Source. Jeder Mint, Tresor-Einzahlung und Token-Transfer ist on-chain und wird in Echtzeit angezeigt. Keine Team-Zuteilung, keine Hintertür.', ru: 'Не доверяй — проверяй. Смарт-контракт с открытым исходным кодом. Каждый минт, депозит в хранилище и перевод токена — всё on-chain и отображается в реальном времени. Нет командных токенов, бэкдоров, функции admin mint.', zh: '不要相信 — 验证。智能合约是开源的。每次铸造、金库存款和代币转移都在链上，并在此页面实时显示。没有团队分配，没有后门，没有管理员铸造功能。', ja: '信頼するな — 検証せよ。スマートコントラクトはオープンソース。全てのミント、ボールト入金、トークン転送がオンチェーンでこのページにリアルタイム表示されます。', ko: '신뢰하지 말고 검증하세요. 스마트 컨트랙트는 오픈소스입니다. 모든 민팅, 볼트 예금, 토큰 전송이 온체인에 있으며 이 페이지에 실시간으로 표시됩니다.' },
  faq_a13: { en: "Nothing is guaranteed — this is crypto, not a bank account. What the protocol does is create structural upward pressure: each round mints fewer tokens, the vault accumulates supply that only sells at $1, and no new tokens can be created outside the 1,024 rounds. These mechanics push toward stability, but the market has the final say.", tr: 'Hiçbir şey garanti değil — bu kripto, banka hesabı değil. Protokol yapısal yukarı baskı oluşturur: her turda daha az token basılır, kasa yalnızca $1\'dan satan arz biriktirir ve 1.024 tur dışında yeni token yaratılamaz.', es: 'Nada está garantizado — esto es cripto, no una cuenta bancaria. Lo que hace el protocolo es crear presión estructural alcista: cada ronda acuña menos tokens, la bóveda acumula oferta que solo vende a $1, y no se pueden crear nuevos tokens fuera de las 1.024 rondas.', pt: 'Nada é garantido — isso é cripto, não uma conta bancária. O que o protocolo faz é criar pressão ascendente estrutural: cada rodada cunha menos tokens, o cofre acumula oferta que só vende a $1, e nenhum novo token pode ser criado fora das 1.024 rodadas.', fr: "Rien n'est garanti — c'est de la crypto, pas un compte bancaire. Ce que fait le protocole, c'est créer une pression haussière structurelle : chaque tour frappe moins de jetons, le coffre accumule une offre qui ne vend qu'à 1$.", de: 'Nichts ist garantiert — das ist Krypto, kein Bankkonto. Was das Protokoll tut, ist strukturellen Aufwärtsdruck zu erzeugen: Jede Runde mintet weniger Token, der Tresor akkumuliert Angebot, das nur bei $1 verkauft.', ru: 'Ничто не гарантировано — это криптовалюта, не банковский счёт. Что делает протокол — создаёт структурное восходящее давление: каждый раунд чеканит меньше токенов, хранилище накапливает предложение, продающееся только при $1.', zh: '没有任何保证 — 这是加密货币，不是银行账户。协议的作用是创造结构性上行压力：每轮铸造更少代币，金库积累只在 $1 出售的供应，1,024 轮之外不能创建新代币。', ja: '何も保証されていません — これは暗号通貨で、銀行口座ではありません。プロトコルは構造的な上昇圧力を生みます: 各ラウンドで少ないトークン、$1でのみ売るボールトの供給蓄積、1,024ラウンド外で新トークン不可。', ko: '아무것도 보장되지 않습니다 — 이것은 암호화폐이지 은행 계좌가 아닙니다. 프로토콜이 하는 것은 구조적 상승 압력을 만드는 것입니다: 매 라운드 더 적은 토큰 민팅, $1에서만 판매하는 볼트 공급 축적.' },

  // ─── ROADMAP ───
  roadmap_label: { en: 'Timeline', tr: 'Zaman Çizelgesi', es: 'Línea de Tiempo', pt: 'Cronograma', fr: 'Chronologie', de: 'Zeitplan', ru: 'Хронология', zh: '时间线', ja: 'タイムライン', ko: '타임라인' },
  roadmap_title: { en: 'Roadmap', tr: 'Yol Haritası', es: 'Hoja de Ruta', pt: 'Roteiro', fr: 'Feuille de Route', de: 'Roadmap', ru: 'Дорожная карта', zh: '路线图', ja: 'ロードマップ', ko: '로드맵' },
  roadmap_desc: { en: 'Where we are and where we\'re headed.', tr: 'Neredeyiz ve nereye gidiyoruz.', es: 'Dónde estamos y hacia dónde vamos.', pt: 'Onde estamos e para onde vamos.', fr: 'Où nous en sommes et où nous allons.', de: 'Wo wir stehen und wohin wir gehen.', ru: 'Где мы сейчас и куда движемся.', zh: '我们在哪里以及我们的方向。', ja: '現在地と今後の方向。', ko: '현재 위치와 향후 방향.' },
  phase1: { en: 'Phase 1', tr: 'Faz 1', es: 'Fase 1', pt: 'Fase 1', fr: 'Phase 1', de: 'Phase 1', ru: 'Фаза 1', zh: '第一阶段', ja: 'フェーズ1', ko: '1단계' },
  phase1_title: { en: 'Protocol Development', tr: 'Protokol Geliştirme', es: 'Desarrollo del Protocolo', pt: 'Desenvolvimento do Protocolo', fr: 'Développement du Protocole', de: 'Protokollentwicklung', ru: 'Разработка протокола', zh: '协议开发', ja: 'プロトコル開発', ko: '프로토콜 개발' },
  phase2: { en: 'Phase 2', tr: 'Faz 2', es: 'Fase 2', pt: 'Fase 2', fr: 'Phase 2', de: 'Phase 2', ru: 'Фаза 2', zh: '第二阶段', ja: 'フェーズ2', ko: '2단계' },
  phase2_title: { en: 'Devnet Launch', tr: 'Devnet Lansmanı', es: 'Lanzamiento en Devnet', pt: 'Lançamento na Devnet', fr: 'Lancement Devnet', de: 'Devnet-Start', ru: 'Запуск в Devnet', zh: 'Devnet 启动', ja: 'Devnet ローンチ', ko: 'Devnet 출시' },
  phase3: { en: 'Phase 3', tr: 'Faz 3', es: 'Fase 3', pt: 'Fase 3', fr: 'Phase 3', de: 'Phase 3', ru: 'Фаза 3', zh: '第三阶段', ja: 'フェーズ3', ko: '3단계' },
  phase3_title: { en: 'Mainnet Deployment', tr: 'Mainnet Dağıtımı', es: 'Despliegue en Mainnet', pt: 'Implantação na Mainnet', fr: 'Déploiement Mainnet', de: 'Mainnet-Bereitstellung', ru: 'Развёртывание в Mainnet', zh: 'Mainnet 部署', ja: 'Mainnet デプロイ', ko: 'Mainnet 배포' },
  phase4: { en: 'Phase 4', tr: 'Faz 4', es: 'Fase 4', pt: 'Fase 4', fr: 'Phase 4', de: 'Phase 4', ru: 'Фаза 4', zh: '第四阶段', ja: 'フェーズ4', ko: '4단계' },
  phase4_title: { en: 'DEX Liquidity', tr: 'DEX Likidite', es: 'Liquidez DEX', pt: 'Liquidez DEX', fr: 'Liquidité DEX', de: 'DEX-Liquidität', ru: 'Ликвидность DEX', zh: 'DEX 流动性', ja: 'DEX 流動性', ko: 'DEX 유동성' },
  phase5: { en: 'Phase 5', tr: 'Faz 5', es: 'Fase 5', pt: 'Fase 5', fr: 'Phase 5', de: 'Phase 5', ru: 'Фаза 5', zh: '第五阶段', ja: 'フェーズ5', ko: '5단계' },
  phase5_title: { en: 'Ecosystem Growth', tr: 'Ekosistem Büyümesi', es: 'Crecimiento del Ecosistema', pt: 'Crescimento do Ecossistema', fr: 'Croissance de l\'Écosystème', de: 'Ökosystem-Wachstum', ru: 'Рост экосистемы', zh: '生态系统增长', ja: 'エコシステム成長', ko: '생태계 성장' },
  tag_complete: { en: 'Complete', tr: 'Tamamlandı', es: 'Completado', pt: 'Concluído', fr: 'Terminé', de: 'Abgeschlossen', ru: 'Завершено', zh: '已完成', ja: '完了', ko: '완료' },
  tag_live: { en: 'Live Now', tr: 'Şimdi Canlı', es: 'En Vivo', pt: 'Ao Vivo', fr: 'En Direct', de: 'Jetzt Live', ru: 'Сейчас в сети', zh: '正在直播', ja: 'ライブ中', ko: '라이브 중' },
  tag_upcoming: { en: 'Upcoming', tr: 'Yakında', es: 'Próximamente', pt: 'Em Breve', fr: 'À Venir', de: 'Bald', ru: 'Скоро', zh: '即将到来', ja: '今後', ko: '예정' },

  // ─── RAYDIUM ───
  ray_label: { en: 'Liquidity', tr: 'Likidite', es: 'Liquidez', pt: 'Liquidez', fr: 'Liquidité', de: 'Liquidität', ru: 'Ликвидность', zh: '流动性', ja: '流動性', ko: '유동성' },
  ray_title: { en: 'Raydium Integration', tr: 'Raydium Entegrasyonu', es: 'Integración con Raydium', pt: 'Integração Raydium', fr: 'Intégration Raydium', de: 'Raydium-Integration', ru: 'Интеграция с Raydium', zh: 'Raydium 集成', ja: 'Raydium 統合', ko: 'Raydium 통합' },
  ray_desc: { en: 'How $TOBE goes from minting to a live trading pair — trustlessly, with locked liquidity.', tr: '$TOBE basımdan canlı işlem çiftine nasıl geçer — kilitli likidite ile.', es: 'Cómo $TOBE pasa de la acuñación a un par de trading en vivo.', pt: 'Como $TOBE vai da cunhagem a um par de negociação ao vivo.', fr: 'Comment $TOBE passe de la frappe à une paire de trading.', de: 'Wie $TOBE vom Minting zum Live-Handelspaar wird.', ru: 'Как $TOBE переходит от минта к торговой паре.', zh: '$TOBE 如何从铸造到实时交易对。', ja: '$TOBE がミントからライブ取引ペアへ。', ko: '$TOBE가 민트에서 실시간 거래 쌍으로.' },
  usdc_to_pool: { en: 'SOL to Pool', tr: 'Havuza SOL', es: 'SOL al Pool', pt: 'SOL para Pool', fr: 'SOL au Pool', de: 'SOL zum Pool', ru: 'SOL в пул', zh: 'SOL 到池', ja: 'SOL をプールへ', ko: 'SOL를 풀로' },
  lp_lock_period: { en: 'LP Lock Period', tr: 'LP Kilit Süresi', es: 'Período de Bloqueo LP', pt: 'Período de Bloqueio LP', fr: 'Période de Verrouillage LP', de: 'LP-Sperrzeit', ru: 'Период блокировки LP', zh: 'LP 锁定期', ja: 'LPロック期間', ko: 'LP 잠금 기간' },
  vault_floor: { en: 'Vault Floor Price', tr: 'Kasa Taban Fiyatı', es: 'Precio Mínimo de Bóveda', pt: 'Preço Mínimo do Cofre', fr: 'Prix Plancher du Coffre', de: 'Tresor-Mindestpreis', ru: 'Минимальная цена хранилища', zh: '金库底价', ja: 'ボールト最低価格', ko: '볼트 최저 가격' },

  // ─── SECURITY ───
  sec_label: { en: 'Trust', tr: 'Güven', es: 'Confianza', pt: 'Confiança', fr: 'Confiance', de: 'Vertrauen', ru: 'Доверие', zh: '信任', ja: '信頼', ko: '신뢰' },
  sec_title: { en: 'Security', tr: 'Güvenlik', es: 'Seguridad', pt: 'Segurança', fr: 'Sécurité', de: 'Sicherheit', ru: 'Безопасность', zh: '安全', ja: 'セキュリティ', ko: '보안' },
  sec_desc: { en: 'How TOBE earns your trust — through code, not promises.', tr: 'TOBE güveninizi nasıl kazanır — kodla, vaatlerle değil.', es: 'Cómo TOBE gana tu confianza — con código, no promesas.', pt: 'Como TOBE ganha confiança — com código, não promessas.', fr: 'Comment TOBE gagne votre confiance — par le code.', de: 'Wie TOBE Vertrauen verdient — durch Code.', ru: 'Как TOBE завоёвывает доверие — кодом.', zh: 'TOBE 如何赢得信任 — 通过代码。', ja: 'TOBE の信頼獲得方法 — コードで。', ko: 'TOBE의 신뢰 획득 방법 — 코드로.' },
  sec_pda: { en: 'PDA-Controlled Vault', tr: 'PDA Kontrollü Kasa', es: 'Bóveda Controlada por PDA', pt: 'Cofre Controlado por PDA', fr: 'Coffre Contrôlé par PDA', de: 'PDA-kontrollierter Tresor', ru: 'Хранилище под контролем PDA', zh: 'PDA 控制的金库', ja: 'PDA制御ボールト', ko: 'PDA 제어 볼트' },
  sec_open: { en: 'Open Source', tr: 'Açık Kaynak', es: 'Código Abierto', pt: 'Código Aberto', fr: 'Open Source', de: 'Open Source', ru: 'Открытый исходный код', zh: '开源', ja: 'オープンソース', ko: '오픈 소스' },
  sec_tests: { en: '29/29 Tests Passing', tr: '29/29 Test Geçiyor', es: '29/29 Tests Pasando', pt: '29/29 Testes Passando', fr: '29/29 Tests Réussis', de: '29/29 Tests bestanden', ru: '29/29 тестов пройдено', zh: '29/29 测试通过', ja: '29/29テスト合格', ko: '29/29 테스트 통과' },
  sec_pause: { en: 'Emergency Pause', tr: 'Acil Duraklatma', es: 'Pausa de Emergencia', pt: 'Pausa de Emergência', fr: 'Pause d\'Urgence', de: 'Notfall-Pause', ru: 'Экстренная пауза', zh: '紧急暂停', ja: '緊急停止', ko: '긴급 일시중지' },
  sec_auth: { en: '2-Step Authority Transfer', tr: '2 Adımlı Yetki Devri', es: 'Transferencia de Autoridad en 2 Pasos', pt: 'Transferência de Autoridade em 2 Etapas', fr: 'Transfert d\'Autorité en 2 Étapes', de: '2-Schritt-Autoritätsübertragung', ru: 'Двухэтапная передача полномочий', zh: '两步权限转移', ja: '2段階権限移転', ko: '2단계 권한 이전' },
  sec_lp: { en: 'LP Lock (2 Years)', tr: 'LP Kilidi (2 Yıl)', es: 'Bloqueo LP (2 Años)', pt: 'Bloqueio LP (2 Anos)', fr: 'Verrouillage LP (2 Ans)', de: 'LP-Sperre (2 Jahre)', ru: 'Блокировка LP (2 года)', zh: 'LP 锁定 (2 年)', ja: 'LPロック (2年)', ko: 'LP 잠금 (2년)' },
  sec_pda_desc: { en: 'The vault is controlled by a Program Derived Address — no human holds the keys. Only the smart contract can move vault tokens, and only at the $1 ceiling price.', tr: 'Kasa, Program Türetilmiş Adres tarafından kontrol edilir — anahtarları hiçbir insan tutmaz. Yalnızca akıllı sözleşme kasa tokenlerini hareket ettirebilir ve yalnızca $1 tavan fiyatında.', es: 'La bóveda está controlada por una Dirección Derivada del Programa — ningún humano tiene las claves. Solo el contrato inteligente puede mover tokens de la bóveda, y solo al precio techo de $1.', pt: 'O cofre é controlado por um Endereço Derivado do Programa — nenhum humano tem as chaves. Apenas o contrato inteligente pode mover tokens do cofre, e apenas ao preço teto de $1.', fr: 'Le coffre est contrôlé par une Adresse Dérivée du Programme — aucun humain ne détient les clés. Seul le contrat intelligent peut déplacer les jetons du coffre, et uniquement au prix plafond de 1$.', de: 'Der Tresor wird von einer Program Derived Address kontrolliert — kein Mensch hält die Schlüssel. Nur der Smart Contract kann Tresor-Token bewegen, und nur zum $1-Limit.', ru: 'Хранилище управляется Program Derived Address — ни один человек не держит ключи. Только смарт-контракт может перемещать токены хранилища, и только по потолочной цене $1.', zh: '金库由程序派生地址控制 — 没有人持有密钥。只有智能合约才能移动金库代币，且仅在 $1 上限价格时。', ja: 'ボールトはProgram Derived Addressで制御されています — 誰も鍵を持っていません。スマートコントラクトのみがボールトトークンを移動でき、$1の上限価格でのみ可能です。', ko: '볼트는 Program Derived Address로 제어됩니다 — 어떤 사람도 키를 보유하지 않습니다. 스마트 컨트랙트만이 볼트 토큰을 이동할 수 있으며, $1 상한 가격에서만 가능합니다.' },
  sec_open_desc: { en: 'Every line of the smart contract is publicly verifiable. Full source code, tests, and project config available on GitHub.', tr: 'Akıllı sözleşmenin her satırı kamuya açık olarak doğrulanabilir. Tam kaynak kodu, testler ve proje yapılandırması GitHub\'da mevcuttur.', es: 'Cada línea del contrato inteligente es públicamente verificable. Código fuente completo, pruebas y configuración del proyecto disponibles en GitHub.', pt: 'Cada linha do contrato inteligente é publicamente verificável. Código-fonte completo, testes e configuração do projeto disponíveis no GitHub.', fr: 'Chaque ligne du contrat intelligent est publiquement vérifiable. Code source complet, tests et configuration du projet disponibles sur GitHub.', de: 'Jede Zeile des Smart Contracts ist öffentlich verifizierbar. Vollständiger Quellcode, Tests und Projektkonfiguration auf GitHub verfügbar.', ru: 'Каждая строка смарт-контракта публично верифицируема. Полный исходный код, тесты и конфигурация проекта доступны на GitHub.', zh: '智能合约的每一行都可公开验证。完整源代码、测试和项目配置在 GitHub 上提供。', ja: 'スマートコントラクトの全行が公開検証可能です。完全なソースコード、テスト、プロジェクト設定がGitHubで利用できます。', ko: '스마트 컨트랙트의 모든 줄은 공개적으로 검증 가능합니다. 전체 소스 코드, 테스트, 프로젝트 구성이 GitHub에서 제공됩니다.' },
  sec_tests_desc: { en: 'Full test suite covering mint mechanics, vault operations, LP lock/unlock, pause/unpause, authority transfer, and edge cases. Every function tested before deployment.', tr: 'Mint mekanikleri, kasa operasyonları, LP kilitleme/açma, duraklatma/sürdürme, yetki transferi ve uç durumları kapsayan tam test paketi. Her fonksiyon dağıtımdan önce test edildi.', es: 'Suite de pruebas completa que cubre mecánicas de acuñación, operaciones de bóveda, bloqueo/desbloqueo LP, pausa/reanudación, transferencia de autoridad y casos extremos.', pt: 'Suite de testes completa cobrindo mecânicas de cunhagem, operações do cofre, bloqueio/desbloqueio LP, pausa/retomada, transferência de autoridade e casos extremos.', fr: 'Suite de tests complète couvrant les mécaniques de frappe, les opérations de coffre, le verrouillage/déverrouillage LP, la pause/reprise, le transfert d\'autorité et les cas limites.', de: 'Vollständige Testsuite für Mint-Mechaniken, Tresor-Operationen, LP-Sperre/-Entsperrung, Pause/Fortsetzung, Autoritätsübertragung und Grenzfälle. Jede Funktion vor dem Deployment getestet.', ru: 'Полный набор тестов для механики минта, операций хранилища, блокировки/разблокировки LP, паузы/возобновления, передачи полномочий и граничных случаев.', zh: '涵盖铸造机制、金库操作、LP 锁定/解锁、暂停/恢复、权限转移和边缘情况的完整测试套件。每个功能在部署前均经过测试。', ja: 'ミントメカニクス、ボールト操作、LPロック/アンロック、一時停止/再開、権限移転、エッジケースをカバーする完全なテストスイート。', ko: '민트 메커니즘, 볼트 운영, LP 잠금/해제, 일시중지/재개, 권한 이전, 엣지 케이스를 다루는 전체 테스트 스위트.' },
  sec_pause_desc: { en: 'The authority can pause minting in case of a discovered vulnerability — but cannot drain funds, change supply, or alter the curve. A safety net, not a backdoor.', tr: 'Yetki, keşfedilen bir güvenlik açığı durumunda basımı durdurabilir — ancak fonları boşaltamaz, arzı değiştiremez veya eğriyi değiştiremez. Güvenlik ağı, arka kapı değil.', es: 'La autoridad puede pausar la acuñación en caso de vulnerabilidad — pero no puede drenar fondos, cambiar el suministro ni alterar la curva. Una red de seguridad, no una puerta trasera.', pt: 'A autoridade pode pausar a cunhagem em caso de vulnerabilidade — mas não pode drenar fundos, alterar o fornecimento ou modificar a curva. Uma rede de segurança, não uma backdoor.', fr: "L'autorité peut mettre en pause la frappe en cas de vulnérabilité — mais ne peut pas drainer les fonds, changer l'offre ou modifier la courbe. Un filet de sécurité, pas une porte dérobée.", de: 'Die Autorität kann das Minting bei einer entdeckten Schwachstelle pausieren — aber keine Gelder abziehen, das Angebot ändern oder die Kurve verändern. Ein Sicherheitsnetz, keine Hintertür.', ru: 'Полномочия могут приостановить минт при обнаруженной уязвимости — но не могут вывести средства, изменить предложение или кривую. Страховочная сеть, не бэкдор.', zh: '权限可以在发现漏洞时暂停铸造 — 但不能提取资金、更改供应或修改曲线。安全网，而非后门。', ja: '権限は脆弱性が発見された場合にミントを一時停止できます — ただし資金の引き出し、供給の変更、カーブの変更はできません。バックドアではなくセーフティネット。', ko: '권한은 발견된 취약점이 있을 경우 민팅을 일시중지할 수 있습니다 — 그러나 자금 인출, 공급 변경, 곡선 변경은 불가능합니다. 백도어가 아닌 안전망.' },
  sec_auth_desc: { en: 'Authority changes require proposal + acceptance from the new address. No single transaction can hijack control. Prevents accidental or malicious transfers.', tr: 'Yetki değişiklikleri, yeni adresten teklif + kabul gerektirir. Hiçbir tek işlem kontrolü ele geçiremez. Kazara veya kötü niyetli transferleri önler.', es: 'Los cambios de autoridad requieren propuesta + aceptación de la nueva dirección. Ninguna transacción individual puede secuestrar el control. Previene transferencias accidentales o maliciosas.', pt: 'Mudanças de autoridade requerem proposta + aceitação do novo endereço. Nenhuma transação única pode sequestrar o controle. Previne transferências acidentais ou maliciosas.', fr: "Les changements d'autorité nécessitent proposition + acceptation de la nouvelle adresse. Aucune transaction ne peut détourner le contrôle. Prévient les transferts accidentels ou malveillants.", de: 'Autoritätsänderungen erfordern Vorschlag + Annahme der neuen Adresse. Keine einzelne Transaktion kann die Kontrolle übernehmen. Verhindert versehentliche oder böswillige Übertragungen.', ru: 'Изменения полномочий требуют предложения + принятия от нового адреса. Ни одна транзакция не может захватить управление. Предотвращает случайные или злонамеренные передачи.', zh: '权限更改需要来自新地址的提案 + 接受。没有任何单一交易可以劫持控制权。防止意外或恶意转移。', ja: '権限変更には新しいアドレスからの提案 + 受諾が必要です。単一の取引で制御を乗っ取ることはできません。偶発的または悪意ある転送を防ぎます。', ko: '권한 변경은 새 주소의 제안 + 수락이 필요합니다. 단일 거래로 제어권을 탈취할 수 없습니다. 우발적이거나 악의적인 이전을 방지합니다.' },
  sec_lp_desc: { en: 'Liquidity provider tokens are locked on-chain for 2 years after DEX listing. No rug pulls — the liquidity stays where it belongs.', tr: 'Likidite sağlayıcı tokenları DEX listelemesinden sonra 2 yıl boyunca zincir üzerinde kilitlidir. Rug pull yok — likidite olması gereken yerde kalır.', es: 'Los tokens del proveedor de liquidez están bloqueados on-chain durante 2 años después del listado en DEX. Sin rug pulls — la liquidez se queda donde pertenece.', pt: 'Os tokens do provedor de liquidez ficam bloqueados on-chain por 2 anos após a listagem no DEX. Sem rug pulls — a liquidez fica onde deve ficar.', fr: "Les tokens du fournisseur de liquidité sont verrouillés on-chain pendant 2 ans après le listing DEX. Pas de rug pulls — la liquidité reste là où elle appartient.", de: 'Liquiditätsanbieter-Token sind nach DEX-Listing 2 Jahre lang on-chain gesperrt. Keine Rug Pulls — die Liquidität bleibt, wo sie hingehört.', ru: 'Токены поставщика ликвидности заблокированы on-chain на 2 года после листинга на DEX. Никаких rug pull — ликвидность остаётся там, где должна быть.', zh: '流动性提供者代币在 DEX 上市后链上锁定 2 年。无跑路 — 流动性留在它应该在的地方。', ja: '流動性プロバイダートークンはDEX上場後2年間オンチェーンでロックされます。ラグプルなし — 流動性はあるべき場所に留まります。', ko: '유동성 공급자 토큰은 DEX 상장 후 2년 동안 온체인에서 잠겨 있습니다. 러그풀 없음 — 유동성은 있어야 할 곳에 있습니다.' },

  // ─── TEAM ───
  team_label: { en: 'Team', tr: 'Ekip', es: 'Equipo', pt: 'Equipe', fr: 'Équipe', de: 'Team', ru: 'Команда', zh: '团队', ja: 'チーム', ko: '팀' },
  team_title: { en: 'Built By', tr: 'Yapımcı', es: 'Construido Por', pt: 'Construído Por', fr: 'Construit Par', de: 'Erstellt Von', ru: 'Создано', zh: '构建者', ja: '構築者', ko: '제작자' },
  team_desc: { en: 'One team, one vision, zero hidden allocations.', tr: 'Bir ekip, bir vizyon, sıfır gizli tahsis.', es: 'Un equipo, una visión, cero asignaciones ocultas.', pt: 'Uma equipe, uma visão, zero alocações ocultas.', fr: 'Une équipe, une vision, zéro allocation cachée.', de: 'Ein Team, eine Vision, null versteckte Zuteilungen.', ru: 'Одна команда, одно видение, ноль скрытых распределений.', zh: '一个团队，一个愿景，零隐藏分配。', ja: '一つのチーム、一つのビジョン、隠れた配分はゼロ。', ko: '하나의 팀, 하나의 비전, 숨겨진 할당 제로.' },
  founder_role: { en: 'Founder & Developer', tr: 'Kurucu & Geliştirici', es: 'Fundador y Desarrollador', pt: 'Fundador e Desenvolvedor', fr: 'Fondateur & Développeur', de: 'Gründer & Entwickler', ru: 'Основатель и разработчик', zh: '创始人兼开发者', ja: '創設者 & 開発者', ko: '설립자 & 개발자' },
  founder_desc: { en: 'Designed and built the TOBE protocol from scratch — smart contract, frontend, and economic model. No team tokens, no investors, no shortcuts.', tr: 'TOBE protokolünü sıfırdan tasarladı ve inşa etti. Ekip tokeni yok, yatırımcı yok, kestirme yol yok.', es: 'Diseñó y construyó el protocolo TOBE desde cero. Sin tokens de equipo, sin inversores.', pt: 'Projetou e construiu o protocolo TOBE do zero. Sem tokens de equipe.', fr: 'A construit le protocole TOBE à partir de zéro. Aucun jeton d\'équipe.', de: 'Hat das TOBE-Protokoll von Grund auf gebaut. Keine Team-Token.', ru: 'Спроектировал протокол TOBE с нуля. Без командных токенов.', zh: '从零构建 TOBE 协议。无团队代币。', ja: 'TOBEプロトコルをゼロから構築。チームトークンなし。', ko: 'TOBE 프로토콜을 처음부터 구축. 팀 토큰 없음.' },

  // ─── FOOTER ───
  footer_desc: { en: 'The anti-inflationary token built to reach and hold $1. Fully transparent — every action on-chain, every stat on this page.', tr: '$1\'a ulaşmak için inşa edilmiş anti-enflasyonist token. Tamamen şeffaf.', es: 'El token anti-inflacionario construido para alcanzar y mantener $1. Totalmente transparente.', pt: 'O token anti-inflacionário construído para alcançar $1. Totalmente transparente.', fr: 'Le jeton anti-inflationniste conçu pour atteindre 1$. Entièrement transparent.', de: 'Der anti-inflationäre Token, gebaut um $1 zu erreichen. Vollständig transparent.', ru: 'Антиинфляционный токен для достижения $1. Полностью прозрачный.', zh: '旨在达到 $1 的抗通胀代币。完全透明。', ja: '$1 到達のためのアンチインフレトークン。完全に透明。', ko: '$1 도달을 위한 인플레이션 방지 토큰. 완전히 투명.' },
  product: { en: 'Product', tr: 'Ürün', es: 'Producto', pt: 'Produto', fr: 'Produit', de: 'Produkt', ru: 'Продукт', zh: '产品', ja: '製品', ko: '제품' },
  more: { en: 'More', tr: 'Daha Fazla', es: 'Más', pt: 'Mais', fr: 'Plus', de: 'Mehr', ru: 'Ещё', zh: '更多', ja: 'もっと', ko: '더 보기' },
  resources: { en: 'Resources', tr: 'Kaynaklar', es: 'Recursos', pt: 'Recursos', fr: 'Ressources', de: 'Ressourcen', ru: 'Ресурсы', zh: '资源', ja: 'リソース', ko: '리소스' },
  documentation: { en: 'Documentation', tr: 'Belgeler', es: 'Documentación', pt: 'Documentação', fr: 'Documentation', de: 'Dokumentation', ru: 'Документация', zh: '文档', ja: 'ドキュメント', ko: '문서' },
  manifesto_title: { en: 'Why TOBE Exists', tr: 'TOBE Neden Var', es: 'Por Qué Existe TOBE', pt: 'Por Que TOBE Existe', fr: 'Pourquoi TOBE Existe', de: 'Warum TOBE existiert', ru: 'Почему TOBE существует', zh: '为什么 TOBE 存在', ja: 'TOBE が存在する理由', ko: 'TOBE가 존재하는 이유' },
  manifesto_p1: {
    en: "Crypto promised to give everyone a fair shot. Instead, it created a new class of insiders — teams that pre-mint millions of tokens, VCs that get discounted allocations, and influencers that pump and dump on their own followers. The average person enters late, buys high, and holds the bag. That's not innovation. That's the same old game with a new coat of paint.",
    tr: "Kripto, herkese adil bir fırsat vereceğini vaat etti. Bunun yerine, milyonlarca token önceden basan ekipler, indirimli tahsisatlar alan girişim sermayedarları ve kendi takipçileri üzerinde pump-dump yapan influencer'lardan oluşan yeni bir iç çevre yarattı. Ortalama kişi geç girer, yüksekten alır ve çantayı taşır. Bu inovasyon değil. Bu, yeni bir boya katmanıyla aynı eski oyun.",
    es: "Crypto prometió darle a todos una oportunidad justa. En cambio, creó una nueva clase de iniciados — equipos que pre-minan millones de tokens, VCs que obtienen asignaciones con descuento e influencers que hacen pump and dump con sus propios seguidores. La persona promedio entra tarde, compra caro y se queda con la bolsa. Eso no es innovación. Es el mismo juego de siempre con una capa de pintura nueva.",
    pt: "O cripto prometeu dar a todos uma chance justa. Em vez disso, criou uma nova classe de insiders — equipes que pré-cunham milhões de tokens, VCs que obtêm alocações com desconto e influenciadores que fazem pump and dump em seus próprios seguidores. A pessoa comum entra tarde, compra caro e fica com o prejuízo. Isso não é inovação. É o mesmo jogo de sempre com uma nova camada de tinta.",
    fr: "La crypto promettait de donner une chance équitable à tout le monde. Au lieu de cela, elle a créé une nouvelle classe d'initiés — des équipes qui pré-minent des millions de jetons, des VCs qui obtiennent des allocations à prix réduit et des influenceurs qui font du pump and dump sur leurs propres abonnés. La personne ordinaire entre tard, achète haut et se retrouve avec la mise. Ce n'est pas de l'innovation. C'est le même vieux jeu avec une nouvelle couche de peinture.",
    de: "Krypto versprach, jedem eine faire Chance zu geben. Stattdessen schuf es eine neue Klasse von Insidern — Teams, die Millionen von Token vorminten, VCs, die vergünstigte Zuteilungen erhalten, und Influencer, die ihre eigenen Follower mit Pump-and-Dump-Schemata ausnutzen. Die durchschnittliche Person steigt spät ein, kauft hoch und bleibt auf den Verlusten sitzen. Das ist keine Innovation. Das ist dasselbe alte Spiel mit einem neuen Anstrich.",
    ru: "Крипто обещала дать каждому равный шанс. Вместо этого она создала новый класс инсайдеров — команды, которые предварительно чеканят миллионы токенов, венчурных капиталистов с льготными аллокациями и инфлюенсеров, которые делают pump and dump на своих же подписчиках. Обычный человек входит поздно, покупает дорого и остаётся с убытком. Это не инновация. Это та же старая игра с новым слоем краски.",
    zh: "加密货币承诺给每个人公平的机会。但它却创造了一个新的内部人阶层 — 预先铸造数百万代币的团队、获得折扣分配的风险投资人，以及在自己粉丝身上做拉高出货的影响者。普通人进场晚、买在高位、接最后的盘。这不是创新，这是用新外衣包装的老把戏。",
    ja: "クリプトはすべての人に公平なチャンスを与えると約束した。しかし実際には、何百万ものトークンを事前にミントするチーム、割引された割り当てを受け取るVC、そして自分のフォロワーにポンプ＆ダンプを仕掛けるインフルエンサーという新しい内輪の階級を生み出した。普通の人は遅れて参入し、高値で買い、損失を抱える。これはイノベーションではない。新しい塗装を施しただけの同じ古いゲームだ。",
    ko: "크립토는 모든 사람에게 공정한 기회를 준다고 약속했습니다. 대신 수백만 개의 토큰을 사전 발행하는 팀, 할인된 할당을 받는 VC, 자신의 팔로워를 대상으로 펌프 앤 덤프를 하는 인플루언서로 이루어진 새로운 내부자 계층을 만들었습니다. 평범한 사람은 늦게 진입하고, 비싸게 사고, 손실을 떠안습니다. 이것은 혁신이 아닙니다. 새 페인트를 칠한 같은 낡은 게임입니다.",
  },
  manifesto_p2: {
    en: "TOBE was built on a different principle: value should be earned, not extracted. There are no team tokens. No private rounds. No seed investors with 10x advantages. Every single token enters circulation the same way — through 1,024 public mint rounds that anyone can participate in, at a price set by math, not marketing.",
    tr: "TOBE farklı bir ilke üzerine inşa edildi: değer kazanılmalı, sömürülmemeli. Ekip tokeni yok. Özel tur yok. 10 kat avantajlı seed yatırımcısı yok. Her token dolaşıma aynı şekilde girer — matematikle belirlenen bir fiyatta, herkesin katılabileceği 1.024 herkese açık basım turu aracılığıyla; pazarlama değil.",
    es: "TOBE fue construido sobre un principio diferente: el valor debe ganarse, no extraerse. No hay tokens de equipo. No hay rondas privadas. No hay inversores semilla con ventajas 10x. Cada token entra en circulación de la misma manera — a través de 1.024 rondas públicas de acuñación en las que cualquiera puede participar, a un precio establecido por las matemáticas, no el marketing.",
    pt: "O TOBE foi construído sobre um princípio diferente: o valor deve ser ganho, não extraído. Não há tokens de equipe. Sem rodadas privadas. Sem investidores semente com vantagens de 10x. Cada token entra em circulação da mesma forma — através de 1.024 rodadas públicas de cunhagem em que qualquer um pode participar, a um preço definido pela matemática, não pelo marketing.",
    fr: "TOBE a été construit sur un principe différent : la valeur doit être gagnée, pas extraite. Il n'y a pas de jetons d'équipe. Pas de tours privés. Pas d'investisseurs en phase de démarrage avec des avantages 10x. Chaque jeton entre en circulation de la même façon — à travers 1 024 tours de frappe publics auxquels n'importe qui peut participer, à un prix fixé par les mathématiques, pas le marketing.",
    de: "TOBE wurde auf einem anderen Prinzip aufgebaut: Wert sollte verdient, nicht extrahiert werden. Es gibt keine Team-Token. Keine privaten Runden. Keine Seed-Investoren mit 10-fachen Vorteilen. Jeder einzelne Token tritt auf dieselbe Weise in Umlauf — durch 1.024 öffentliche Mint-Runden, an denen jeder teilnehmen kann, zu einem Preis, der durch Mathematik festgelegt wird, nicht durch Marketing.",
    ru: "TOBE был построен на другом принципе: ценность должна зарабатываться, а не извлекаться. Нет командных токенов. Нет приватных раундов. Нет seed-инвесторов с 10-кратными преимуществами. Каждый токен поступает в обращение одинаково — через 1 024 публичных раунда минта, в которых может участвовать любой, по цене, установленной математикой, а не маркетингом.",
    zh: "TOBE 建立在不同的原则之上：价值应该被赚取，而不是被榨取。没有团队代币，没有私募轮次，没有享有 10 倍优势的种子投资者。每一个代币以相同的方式进入流通 — 通过 1,024 轮任何人都可以参与的公开铸造，价格由数学决定，而非营销。",
    ja: "TOBEは異なる原則の上に構築された：価値は稼がれるべきであり、搾取されるべきではない。チームトークンはない。プライベートラウンドもない。10倍の優位性を持つシード投資家もない。すべてのトークンは同じ方法で流通に入る — 誰でも参加できる1,024回の公開ミントラウンドを通じて、マーケティングではなく数学で設定された価格で。",
    ko: "TOBE는 다른 원칙 위에 구축되었습니다: 가치는 얻어야 하는 것이지, 추출되는 것이 아닙니다. 팀 토큰 없음. 프라이빗 라운드 없음. 10배 유리한 시드 투자자 없음. 모든 토큰은 동일한 방식으로 유통에 진입합니다 — 누구나 참여할 수 있는 1,024 공개 민트 라운드를 통해, 마케팅이 아닌 수학으로 설정된 가격으로.",
  },
  manifesto_p3: {
    en: "The mechanism is simple. Each round, you pay 10 SOL. Half the tokens go to you. The other half goes to a vault that accumulates SOL — creating permanent buy pressure beneath the price. Every round mints fewer tokens than the last, so early participants get more, but late participants pay the same. The supply curve is decreasing, not inflating. The vault grows, not shrinks.",
    tr: "Mekanizma basit. Her turda 10 SOL ödersiniz. Tokenlerin yarısı size gider. Diğer yarısı, SOL biriktiren bir kasaya gider — fiyatın altında kalıcı alım baskısı yaratır. Her tur bir öncekinden daha az token basar, bu nedenle erken katılımcılar daha fazla alır, ancak geç katılımcılar aynı fiyatı öder. Arz eğrisi azalıyor, enflasyona uğramıyor. Kasa büyüyor, küçülmüyor.",
    es: "El mecanismo es simple. En cada ronda, pagas 10 SOL. La mitad de los tokens van para ti. La otra mitad va a una bóveda que acumula SOL — creando presión de compra permanente por debajo del precio. Cada ronda acuña menos tokens que la anterior, por lo que los participantes tempranos obtienen más, pero los tardíos pagan lo mismo. La curva de suministro es decreciente, no inflacionaria. La bóveda crece, no se contrae.",
    pt: "O mecanismo é simples. A cada rodada, você paga 10 SOL. Metade dos tokens vai para você. A outra metade vai para um cofre que acumula SOL — criando pressão de compra permanente abaixo do preço. Cada rodada cunha menos tokens do que a anterior, então os participantes iniciais recebem mais, mas os tardios pagam o mesmo. A curva de oferta é decrescente, não inflacionária. O cofre cresce, não encolhe.",
    fr: "Le mécanisme est simple. À chaque tour, vous payez 10 SOL. La moitié des jetons vous revient. L'autre moitié va dans un coffre qui accumule des SOL — créant une pression d'achat permanente sous le prix. Chaque tour frappe moins de jetons que le précédent, donc les participants précoces en obtiennent plus, mais les tardifs paient la même chose. La courbe d'offre est décroissante, pas inflationniste. Le coffre grandit, pas rétrécit.",
    de: "Der Mechanismus ist einfach. Jede Runde zahlst du 10 SOL. Die Hälfte der Token geht an dich. Die andere Hälfte geht in einen Tresor, der SOL ansammelt — was permanenten Kaufdruck unter dem Preis erzeugt. Jede Runde mintet weniger Token als die vorherige, also bekommen frühe Teilnehmer mehr, aber späte zahlen dasselbe. Die Angebotskurve ist abnehmend, nicht inflationär. Der Tresor wächst, er schrumpft nicht.",
    ru: "Механизм прост. Каждый раунд вы платите 10 SOL. Половина токенов идёт вам. Другая половина поступает в хранилище, которое накапливает SOL — создавая постоянное давление покупок под ценой. Каждый раунд чеканит меньше токенов, чем предыдущий, поэтому ранние участники получают больше, но поздние платят столько же. Кривая предложения убывает, а не растёт. Хранилище растёт, а не сокращается.",
    zh: "机制很简单。每轮你支付 10 SOL。一半代币归你。另一半进入积累 SOL 的金库 — 在价格下方创造永久买入压力。每轮铸造的代币比上一轮少，因此早期参与者获得更多，但晚期参与者支付相同价格。供应曲线是递减的，不是通胀的。金库增长，而不是缩减。",
    ja: "メカニズムはシンプルだ。各ラウンドで10 SOLを支払う。トークンの半分はあなたに渡る。残りの半分はSOLを蓄積するボールトに入る — 価格の下で恒久的な買い圧力を生み出す。毎ラウンド前のラウンドより少ないトークンをミントするため、早期参加者はより多く得るが、後期参加者は同じ金額を払う。供給曲線は減少しており、インフレしていない。ボールトは成長し、縮小しない。",
    ko: "메커니즘은 간단합니다. 매 라운드 10 SOL을 지불합니다. 토큰의 절반은 당신에게 갑니다. 나머지 절반은 SOL을 축적하는 볼트로 갑니다 — 가격 아래에 영구적인 매수 압력을 만듭니다. 매 라운드 이전 라운드보다 적은 토큰을 민팅하므로, 초기 참여자는 더 많이 받지만 늦은 참여자는 같은 금액을 냅니다. 공급 곡선은 감소하고 있으며, 인플레이션이 아닙니다. 볼트는 성장하고, 줄어들지 않습니다.",
  },
  manifesto_p4: {
    en: "There is no admin key that can change the rules. No multisig that can drain the vault. No governance vote that can inflate the supply. The smart contract is the protocol, and the protocol is final. Every mint, every vault deposit, every release — all verifiable on Solana, all displayed on this page in real time.",
    tr: "Kuralları değiştirebilecek bir yönetici anahtarı yok. Kasayı boşaltabilecek bir multisig yok. Arzı şişirebilecek bir yönetişim oyu yok. Akıllı sözleşme protokoldür ve protokol nihai. Her basım, her kasa depozitosu, her sürüm — tümü Solana'da doğrulanabilir, tümü bu sayfada gerçek zamanlı gösterilir.",
    es: "No hay clave de administrador que pueda cambiar las reglas. No hay multisig que pueda vaciar la bóveda. No hay voto de gobernanza que pueda inflar el suministro. El contrato inteligente es el protocolo, y el protocolo es definitivo. Cada acuñación, cada depósito en la bóveda, cada liberación — todo verificable en Solana, todo mostrado en esta página en tiempo real.",
    pt: "Não há chave de administrador que possa mudar as regras. Nenhum multisig que possa drenar o cofre. Nenhum voto de governança que possa inflar o fornecimento. O contrato inteligente é o protocolo, e o protocolo é final. Cada cunhagem, cada depósito no cofre, cada liberação — tudo verificável na Solana, tudo exibido nesta página em tempo real.",
    fr: "Il n'y a pas de clé d'administrateur pouvant modifier les règles. Pas de multisig pouvant vider le coffre. Pas de vote de gouvernance pouvant gonfler l'offre. Le contrat intelligent est le protocole, et le protocole est définitif. Chaque frappe, chaque dépôt dans le coffre, chaque libération — tout vérifiable sur Solana, tout affiché sur cette page en temps réel.",
    de: "Es gibt keinen Admin-Schlüssel, der die Regeln ändern kann. Kein Multisig, das den Tresor leeren kann. Keine Governance-Abstimmung, die das Angebot aufblähen kann. Der Smart Contract ist das Protokoll, und das Protokoll ist endgültig. Jeder Mint, jede Tresoreinzahlung, jede Freigabe — alles auf Solana verifizierbar, alles auf dieser Seite in Echtzeit angezeigt.",
    ru: "Нет ни одного admin-ключа, который мог бы изменить правила. Нет мультисига, который мог бы опустошить хранилище. Нет голосования по управлению, которое могло бы раздуть предложение. Смарт-контракт — это протокол, а протокол окончателен. Каждый минт, каждый депозит в хранилище, каждый релиз — всё верифицируемо в Solana, всё отображается на этой странице в режиме реального времени.",
    zh: "没有可以改变规则的管理员密钥。没有可以清空金库的多签。没有可以通胀供应的治理投票。智能合约即协议，协议是最终的。每次铸造、每次金库存款、每次释放 — 全部在 Solana 上可验证，全部在此页面实时显示。",
    ja: "ルールを変更できるアドミンキーは存在しない。ボールトを空にできるマルチシグもない。供給を増やせるガバナンス投票もない。スマートコントラクトがプロトコルであり、プロトコルは最終的なものだ。すべてのミント、すべてのボールト入金、すべてのリリース — すべてSolanaで検証可能であり、すべてこのページにリアルタイムで表示される。",
    ko: "규칙을 변경할 수 있는 관리자 키가 없습니다. 볼트를 비울 수 있는 멀티시그도 없습니다. 공급을 늘릴 수 있는 거버넌스 투표도 없습니다. 스마트 컨트랙트가 프로토콜이고, 프로토콜은 최종적입니다. 모든 민팅, 모든 볼트 예금, 모든 릴리스 — 모두 Solana에서 검증 가능하며, 모두 이 페이지에 실시간으로 표시됩니다.",
  },
  manifesto_p5: {
    en: "TOBE isn't trying to be the next moonshot. It's trying to be something crypto has very few of: a token that does exactly what it says it will do.",
    tr: "TOBE bir sonraki ay fırsatı olmayı hedeflemiyor. Kriptoda çok az bulunan bir şey olmaya çalışıyor: tam olarak söylediğini yapan bir token.",
    es: "TOBE no está intentando ser el próximo moonshot. Está intentando ser algo que el cripto tiene muy poco: un token que hace exactamente lo que dice que hará.",
    pt: "O TOBE não está tentando ser o próximo moonshot. Está tentando ser algo que o cripto raramente tem: um token que faz exatamente o que diz que vai fazer.",
    fr: "TOBE n'essaie pas d'être le prochain moonshot. Il essaie d'être quelque chose que la crypto possède très rarement : un jeton qui fait exactement ce qu'il dit qu'il fera.",
    de: "TOBE versucht nicht, der nächste Moonshot zu sein. Es versucht, etwas zu sein, das Krypto nur sehr selten hat: ein Token, der genau das tut, was er zu tun verspricht.",
    ru: "TOBE не пытается стать следующим moonshot. Он пытается быть тем, чего в крипто очень мало: токеном, который делает именно то, что обещает.",
    zh: "TOBE 不是要成为下一个暴涨项目。它试图成为加密货币中极为稀缺的东西：一个完全按照承诺行事的代币。",
    ja: "TOBEは次のムーンショットになろうとしていない。クリプトにほとんど存在しないものになろうとしている：言ったことを正確に実行するトークン。",
    ko: "TOBE는 다음 문샷이 되려는 것이 아닙니다. 크립토에서 거의 찾아볼 수 없는 것이 되려고 합니다: 말한 것을 정확히 실행하는 토큰.",
  },
  manifesto_sig: {
    en: '— Built by Team Necdet, verified on Solana.',
    tr: '— Team Necdet tarafından inşa edildi, Solana\'da doğrulandı.',
    es: '— Construido por Team Necdet, verificado en Solana.',
    pt: '— Construído pela Team Necdet, verificado na Solana.',
    fr: '— Construit par Team Necdet, vérifié sur Solana.',
    de: '— Erstellt von Team Necdet, verifiziert auf Solana.',
    ru: '— Создано командой Necdet, проверено на Solana.',
    zh: '— 由 Team Necdet 构建，在 Solana 上验证。',
    ja: '— Team Necdet により構築、Solana で検証済み。',
    ko: '— Team Necdet가 구축, Solana에서 검증됨.',
  },

  // ─── WALLET MODAL ───
  wallet_modal_title: { en: 'Connect Wallet', tr: 'Cüzdan Bağla', es: 'Conectar Billetera', pt: 'Conectar Carteira', fr: 'Connecter Portefeuille', de: 'Wallet verbinden', ru: 'Подключить кошелёк', zh: '连接钱包', ja: 'ウォレット接続', ko: '지갑 연결' },
  wallet_modal_sub: { en: 'Choose a Solana wallet to continue', tr: 'Devam etmek için bir Solana cüzdanı seçin', es: 'Elige una billetera Solana para continuar', pt: 'Escolha uma carteira Solana para continuar', fr: 'Choisissez un portefeuille Solana', de: 'Wähle ein Solana Wallet', ru: 'Выберите кошелёк Solana', zh: '选择一个 Solana 钱包', ja: 'Solana ウォレットを選択', ko: 'Solana 지갑을 선택하세요' },
  detected: { en: 'Detected', tr: 'Algılandı', es: 'Detectada', pt: 'Detectada', fr: 'Détecté', de: 'Erkannt', ru: 'Обнаружен', zh: '已检测到', ja: '検出済み', ko: '감지됨' },
  not_installed: { en: 'Not installed', tr: 'Yüklü değil', es: 'No instalada', pt: 'Não instalada', fr: 'Non installé', de: 'Nicht installiert', ru: 'Не установлен', zh: '未安装', ja: '未インストール', ko: '설치되지 않음' },

  // ─── SUCCESS MODAL ───
  mint_successful: { en: 'Mint Successful!', tr: 'Basım Başarılı!', es: '¡Acuñación Exitosa!', pt: 'Cunhagem Bem-Sucedida!', fr: 'Frappe Réussie!', de: 'Mint Erfolgreich!', ru: 'Минт успешен!', zh: '铸造成功！', ja: 'ミント成功！', ko: '민트 성공!' },
  tokens_on_way: { en: 'Your $TOBE tokens are on the way', tr: '$TOBE tokenlarınız yolda', es: 'Tus tokens $TOBE están en camino', pt: 'Seus tokens $TOBE estão a caminho', fr: 'Vos jetons $TOBE sont en route', de: 'Deine $TOBE Token sind unterwegs', ru: 'Ваши $TOBE токены в пути', zh: '您的 $TOBE 代币正在路上', ja: '$TOBE トークンが届きます', ko: '$TOBE 토큰이 전송 중입니다' },
  you_received: { en: 'You Received', tr: 'Aldığınız', es: 'Recibiste', pt: 'Você Recebeu', fr: 'Vous avez Reçu', de: 'Du hast erhalten', ru: 'Вы получили', zh: '你收到了', ja: '受け取り', ko: '받은 금액' },
  vault_received: { en: 'Vault Received', tr: 'Kasa Aldı', es: 'Bóveda Recibió', pt: 'Cofre Recebeu', fr: 'Coffre a Reçu', de: 'Tresor hat erhalten', ru: 'Хранилище получило', zh: '金库收到', ja: 'ボールト受取', ko: '볼트 수령' },
  cost: { en: 'Cost', tr: 'Maliyet', es: 'Costo', pt: 'Custo', fr: 'Coût', de: 'Kosten', ru: 'Стоимость', zh: '成本', ja: 'コスト', ko: '비용' },
  tx_hash: { en: 'Tx Hash', tr: 'İşlem Hash', es: 'Hash de Tx', pt: 'Hash da Tx', fr: 'Hash de Tx', de: 'Tx Hash', ru: 'Хэш транзакции', zh: '交易哈希', ja: 'Txハッシュ', ko: 'Tx 해시' },
  first_mint: { en: 'First Mint!', tr: 'İlk Basım!', es: '¡Primera Acuñación!', pt: 'Primeira Cunhagem!', fr: 'Première Frappe!', de: 'Erster Mint!', ru: 'Первый минт!', zh: '首次铸造！', ja: '初ミント！', ko: '첫 민트!' },
  welcome_tobe: { en: 'Welcome to the TOBE community', tr: 'TOBE topluluğuna hoş geldiniz', es: 'Bienvenido a la comunidad TOBE', pt: 'Bem-vindo à comunidade TOBE', fr: 'Bienvenue dans la communauté TOBE', de: 'Willkommen in der TOBE Community', ru: 'Добро пожаловать в сообщество TOBE', zh: '欢迎加入 TOBE 社区', ja: 'TOBE コミュニティへようこそ', ko: 'TOBE 커뮤니티에 오신 것을 환영합니다' },
  share_on_x: { en: 'Share on 𝕏', tr: '𝕏\'te Paylaş', es: 'Compartir en 𝕏', pt: 'Compartilhar no 𝕏', fr: 'Partager sur 𝕏', de: 'Auf 𝕏 teilen', ru: 'Поделиться в 𝕏', zh: '分享到 𝕏', ja: '𝕏 でシェア', ko: '𝕏에 공유' },
  done: { en: 'Done', tr: 'Tamam', es: 'Hecho', pt: 'Feito', fr: 'Terminé', de: 'Fertig', ru: 'Готово', zh: '完成', ja: '完了', ko: '완료' },

  // ─── TYPED PHRASES (hero) ───
  typed_1: { en: 'Built to reach and hold $1.', tr: '$1\'a ulaşmak ve tutmak için inşa edildi.', es: 'Construido para alcanzar y mantener $1.', pt: 'Construído para alcançar e manter $1.', fr: 'Conçu pour atteindre et maintenir 1$.', de: 'Gebaut um $1 zu erreichen und zu halten.', ru: 'Создан для достижения и удержания $1.', zh: '旨在达到并维持 $1。', ja: '$1 に到達し維持するために構築。', ko: '$1에 도달하고 유지하도록 구축.' },
  typed_2: { en: 'Anti-inflationary by design.', tr: 'Tasarımı gereği anti-enflasyonist.', es: 'Anti-inflacionario por diseño.', pt: 'Anti-inflacionário por design.', fr: 'Anti-inflationniste par conception.', de: 'Anti-inflationär durch Design.', ru: 'Антиинфляционный по дизайну.', zh: '设计上抗通胀。', ja: '設計上アンチインフレ。', ko: '설계에 의한 인플레이션 방지.' },
  typed_3: { en: 'The earlier you mint, the more you earn.', tr: 'Ne kadar erken basarsan, o kadar çok kazanırsın.', es: 'Cuanto antes acuñes, más ganas.', pt: 'Quanto mais cedo você criar, mais ganha.', fr: 'Plus vous frappez tôt, plus vous gagnez.', de: 'Je früher du mintest, desto mehr verdienst du.', ru: 'Чем раньше минтите, тем больше зарабатываете.', zh: '越早铸造，收益越多。', ja: '早くミントするほど、より多く稼げる。', ko: '일찍 민트할수록 더 많이 벌어요.' },
  typed_4: { en: '100% transparent. 100% on-chain.', tr: '%100 şeffaf. %100 zincir üstü.', es: '100% transparente. 100% en cadena.', pt: '100% transparente. 100% on-chain.', fr: '100% transparent. 100% on-chain.', de: '100% transparent. 100% on-chain.', ru: '100% прозрачность. 100% в блокчейне.', zh: '100% 透明。100% 链上。', ja: '100%透明。100%オンチェーン。', ko: '100% 투명. 100% 온체인.' },
  typed_5: { en: '1,024 rounds. 537M tokens. One target.', tr: '1.024 tur. 537M token. Tek hedef.', es: '1.024 rondas. 537M tokens. Un objetivo.', pt: '1.024 rodadas. 537M tokens. Um alvo.', fr: '1 024 tours. 537M jetons. Un objectif.', de: '1.024 Runden. 537M Token. Ein Ziel.', ru: '1 024 раунда. 537M токенов. Одна цель.', zh: '1,024 轮。5.37 亿代币。一个目标。', ja: '1,024ラウンド。5億3700万トークン。ひとつの目標。', ko: '1,024 라운드. 5억3700만 토큰. 하나의 목표.' },

  // ─── TOASTS / DYNAMIC ───
  toast_copied: { en: 'Copied', tr: 'Kopyalandı', es: 'Copiado', pt: 'Copiado', fr: 'Copié', de: 'Kopiert', ru: 'Скопировано', zh: '已复制', ja: 'コピー済み', ko: '복사됨' },
  toast_contract_copied: { en: 'Contract address copied to clipboard', tr: 'Kontrat adresi panoya kopyalandı', es: 'Dirección del contrato copiada', pt: 'Endereço do contrato copiado', fr: 'Adresse du contrat copiée', de: 'Vertragsadresse kopiert', ru: 'Адрес контракта скопирован', zh: '合约地址已复制', ja: 'コントラクトアドレスをコピーしました', ko: '계약 주소가 복사되었습니다' },
  toast_retrying: { en: 'Retrying connection...', tr: 'Bağlantı tekrar deneniyor...', es: 'Reintentando conexión...', pt: 'Tentando reconectar...', fr: 'Nouvelle tentative de connexion...', de: 'Verbindung wird erneut versucht...', ru: 'Повторное подключение...', zh: '正在重试连接...', ja: '接続を再試行中...', ko: '연결 재시도 중...' },
  toast_still_unable: { en: 'Still unable to connect', tr: 'Hâlâ bağlanılamıyor', es: 'Aún no se puede conectar', pt: 'Ainda não é possível conectar', fr: 'Impossible de se connecter', de: 'Verbindung nicht möglich', ru: 'Не удаётся подключиться', zh: '仍然无法连接', ja: 'まだ接続できません', ko: '여전히 연결할 수 없습니다' },
  toast_connected: { en: 'connected', tr: 'bağlandı', es: 'conectada', pt: 'conectada', fr: 'connecté', de: 'verbunden', ru: 'подключён', zh: '已连接', ja: '接続済み', ko: '연결됨' },
  toast_rejected: { en: 'Connection rejected', tr: 'Bağlantı reddedildi', es: 'Conexión rechazada', pt: 'Conexão rejeitada', fr: 'Connexion rejetée', de: 'Verbindung abgelehnt', ru: 'Подключение отклонено', zh: '连接被拒绝', ja: '接続が拒否されました', ko: '연결이 거부되었습니다' },
  toast_data_refreshed: { en: 'Data refreshed', tr: 'Veriler yenilendi', es: 'Datos actualizados', pt: 'Dados atualizados', fr: 'Données actualisées', de: 'Daten aktualisiert', ru: 'Данные обновлены', zh: '数据已刷新', ja: 'データが更新されました', ko: '데이터가 새로고침되었습니다' },
  loading_onchain: { en: 'Loading on-chain data...', tr: 'Zincir üstü veriler yükleniyor...', es: 'Cargando datos en cadena...', pt: 'Carregando dados on-chain...', fr: 'Chargement des données on-chain...', de: 'On-Chain-Daten werden geladen...', ru: 'Загрузка данных блокчейна...', zh: '加载链上数据...', ja: 'オンチェーンデータを読み込み中...', ko: '온체인 데이터 로딩 중...' },
  rpc_network: { en: 'Network', tr: 'Ağ', es: 'Red', pt: 'Rede', fr: 'Réseau', de: 'Netzwerk', ru: 'Сеть', zh: '网络', ja: 'ネットワーク', ko: '네트워크' },
  rpc_slot: { en: 'Slot', tr: 'Slot', es: 'Slot', pt: 'Slot', fr: 'Slot', de: 'Slot', ru: 'Слот', zh: 'Slot', ja: 'スロット', ko: '슬롯' },
  rpc_latency: { en: 'Latency', tr: 'Gecikme', es: 'Latencia', pt: 'Latência', fr: 'Latence', de: 'Latenz', ru: 'Задержка', zh: '延迟', ja: 'レイテンシ', ko: '지연' },
  rpc_block_time: { en: 'Block Time', tr: 'Blok Zamanı', es: 'Tiempo de Bloque', pt: 'Tempo de Bloco', fr: 'Temps de Bloc', de: 'Blockzeit', ru: 'Время блока', zh: '区块时间', ja: 'ブロックタイム', ko: '블록 시간' },
  rpc_auto_refresh: { en: 'Auto Refresh', tr: 'Otomatik Yenileme', es: 'Actualización Automática', pt: 'Atualização Automática', fr: 'Actualisation Auto', de: 'Auto-Aktualisierung', ru: 'Автообновление', zh: '自动刷新', ja: '自動更新', ko: '자동 새로고침' },

  // ─── ROADMAP DESCRIPTIONS ───
  phase1_desc: {
    en: 'Smart contract built with Anchor framework. 29/29 tests passing. Mint mechanics, vault system, LP lock, pause/unpause, 2-step authority transfer, on-chain price oracle, and metadata updates — all implemented and verified.',
    tr: 'Anchor framework ile oluşturulmuş akıllı sözleşme. 29/29 test geçti. Mint mekaniği, kasa sistemi, LP kilidi, durdurma/başlatma, 2 aşamalı yetki transferi, zincir üstü fiyat oracle\'ı ve metadata güncellemeleri — tümü uygulandı ve doğrulandı.',
    es: 'Contrato inteligente construido con el framework Anchor. 29/29 pruebas pasando. Mecánica de mint, sistema de bóveda, bloqueo LP, pausa/reanudación, transferencia de autoridad en 2 pasos, oracle de precio on-chain y actualizaciones de metadata — todo implementado y verificado.',
    pt: 'Contrato inteligente construído com o framework Anchor. 29/29 testes passando. Mecânica de mint, sistema de cofre, bloqueio LP, pausa/retomada, transferência de autoridade em 2 etapas, oracle de preço on-chain e atualizações de metadata — tudo implementado e verificado.',
    fr: 'Contrat intelligent construit avec le framework Anchor. 29/29 tests réussis. Mécanique de mint, système de coffre, verrouillage LP, pause/reprise, transfert d\'autorité en 2 étapes, oracle de prix on-chain et mises à jour de métadonnées — tout mis en œuvre et vérifié.',
    de: 'Smart Contract mit dem Anchor-Framework erstellt. 29/29 Tests bestanden. Mint-Mechanik, Tresor-System, LP-Sperre, Pause/Fortsetzung, 2-Schritt-Autoritätsübertragung, On-Chain-Preisorakel und Metadaten-Updates — alles implementiert und verifiziert.',
    ru: 'Смарт-контракт построен на фреймворке Anchor. 29/29 тестов пройдено. Механика минтинга, система хранилища, LP-блокировка, пауза/возобновление, двухэтапная передача полномочий, ценовой оракул и обновление метаданных — всё реализовано и проверено.',
    zh: '使用 Anchor 框架构建的智能合约。29/29 测试通过。铸造机制、金库系统、LP 锁定、暂停/恢复、两步权限转移、链上价格预言机和元数据更新——全部实现并验证。',
    ja: 'Anchorフレームワークで構築されたスマートコントラクト。29/29テスト合格。ミントメカニクス、ボールトシステム、LPロック、一時停止/再開、2ステップ権限移転、オンチェーン価格オラクル、メタデータ更新 — すべて実装・検証済み。',
    ko: 'Anchor 프레임워크로 구축된 스마트 컨트랙트. 29/29 테스트 통과. 민트 메커니즘, 볼트 시스템, LP 잠금, 일시정지/재개, 2단계 권한 이전, 온체인 가격 오라클 및 메타데이터 업데이트 — 모두 구현 및 검증 완료.',
  },
  phase2_desc: {
    en: 'Live on Solana devnet. Real wallet integration (Phantom, Backpack, Solflare). Public testing of mint rounds, on-chain data verification, and frontend polish.',
    tr: 'Solana devnet\'te canlı. Gerçek cüzdan entegrasyonu (Phantom, Backpack, Solflare). Mint turlarının halka açık testi, zincir üstü veri doğrulama ve ön yüz iyileştirmeleri.',
    es: 'En vivo en Solana devnet. Integración real de billeteras (Phantom, Backpack, Solflare). Pruebas públicas de rondas de mint, verificación de datos on-chain y pulido del frontend.',
    pt: 'Ao vivo na Solana devnet. Integração real de carteiras (Phantom, Backpack, Solflare). Testes públicos de rodadas de mint, verificação de dados on-chain e refinamento do frontend.',
    fr: 'En direct sur Solana devnet. Intégration réelle de portefeuilles (Phantom, Backpack, Solflare). Tests publics des tours de mint, vérification des données on-chain et polish du frontend.',
    de: 'Live auf Solana Devnet. Echte Wallet-Integration (Phantom, Backpack, Solflare). Öffentliche Tests der Mint-Runden, On-Chain-Datenverifizierung und Frontend-Politur.',
    ru: 'Работает в Solana devnet. Интеграция реальных кошельков (Phantom, Backpack, Solflare). Публичное тестирование раундов минтинга, верификация данных в блокчейне и доработка интерфейса.',
    zh: '在 Solana devnet 上线。真实钱包集成（Phantom、Backpack、Solflare）。铸造轮次的公开测试、链上数据验证和前端优化。',
    ja: 'Solana devnetでライブ。実際のウォレット統合（Phantom、Backpack、Solflare）。ミントラウンドの公開テスト、オンチェーンデータ検証、フロントエンドの仕上げ。',
    ko: 'Solana devnet에서 라이브. 실제 지갑 통합 (Phantom, Backpack, Solflare). 민트 라운드 공개 테스트, 온체인 데이터 검증 및 프론트엔드 개선.',
  },
  phase3_desc: {
    en: 'Deploy to Solana mainnet-beta. Real SOL integration. Round 1 opens to the public. Full on-chain transparency from block one.',
    tr: 'Solana mainnet-beta\'ya dağıtım. Gerçek SOL entegrasyonu. Tur 1 halka açılıyor. Birinci bloktan itibaren tam zincir üstü şeffaflık.',
    es: 'Despliegue en Solana mainnet-beta. Integración real de SOL. La ronda 1 se abre al público. Total transparencia on-chain desde el bloque uno.',
    pt: 'Implantação na Solana mainnet-beta. Integração real de SOL. Rodada 1 abre ao público. Transparência total on-chain desde o bloco um.',
    fr: 'Déploiement sur Solana mainnet-beta. Intégration réelle de SOL. Le tour 1 ouvre au public. Transparence totale on-chain dès le premier bloc.',
    de: 'Bereitstellung auf Solana Mainnet-Beta. Echte SOL-Integration. Runde 1 öffnet für die Öffentlichkeit. Vollständige On-Chain-Transparenz ab Block eins.',
    ru: 'Развёртывание в Solana mainnet-beta. Реальная интеграция SOL. Раунд 1 открывается для публики. Полная прозрачность в блокчейне с первого блока.',
    zh: '部署至 Solana mainnet-beta。真实 SOL 集成。第 1 轮向公众开放。从第一个区块起完全链上透明。',
    ja: 'Solana mainnet-betaへのデプロイ。実際のSOL統合。ラウンド1が公開。ブロック1から完全なオンチェーン透明性。',
    ko: 'Solana mainnet-beta에 배포. 실제 SOL 통합. 라운드 1 공개. 첫 번째 블록부터 완전한 온체인 투명성.',
  },
  phase4_desc: {
    en: 'Establish $TOBE/SOL trading pairs on Raydium and Orca. LP tokens locked for 2 years. Price discovery begins with vault-backed floor.',
    tr: 'Raydium ve Orca\'da $TOBE/SOL işlem çiftleri oluşturma. LP token\'ları 2 yıl kilitli. Kasa destekli taban ile fiyat keşfi başlıyor.',
    es: 'Establecer pares de trading $TOBE/SOL en Raydium y Orca. Tokens LP bloqueados por 2 años. El descubrimiento de precios comienza con el respaldo de la bóveda.',
    pt: 'Estabelecer pares de trading $TOBE/SOL na Raydium e Orca. Tokens LP bloqueados por 2 anos. A descoberta de preço começa com o suporte do cofre.',
    fr: 'Établir des paires de trading $TOBE/SOL sur Raydium et Orca. Tokens LP verrouillés pendant 2 ans. La découverte de prix commence avec le plancher soutenu par le coffre.',
    de: 'Etablierung von $TOBE/SOL-Handelspaaren auf Raydium und Orca. LP-Token für 2 Jahre gesperrt. Preisfindung beginnt mit tresorgestütztem Boden.',
    ru: 'Создание торговых пар $TOBE/SOL на Raydium и Orca. LP-токены заблокированы на 2 года. Обнаружение цены начинается с поддержкой хранилища.',
    zh: '在 Raydium 和 Orca 建立 $TOBE/SOL 交易对。LP 代币锁定 2 年。价格发现从金库支撑的底价开始。',
    ja: 'RaydiumとOrcaで$TOBE/SOLトレーディングペアを確立。LPトークンは2年間ロック。ボールト担保フロアで価格発見が始まる。',
    ko: 'Raydium과 Orca에서 $TOBE/SOL 거래 쌍 구축. LP 토큰 2년 잠금. 볼트 지원 바닥가로 가격 발견 시작.',
  },
  phase5_desc: {
    en: 'CoinGecko and CoinMarketCap listings. Community tools, analytics dashboard improvements, and partnership exploration. The protocol runs itself — growth is organic.',
    tr: 'CoinGecko ve CoinMarketCap listelemeleri. Topluluk araçları, analitik panel iyileştirmeleri ve ortaklık araştırmaları. Protokol kendiliğinden çalışır — büyüme organiktir.',
    es: 'Listados en CoinGecko y CoinMarketCap. Herramientas comunitarias, mejoras en el panel de análisis y exploración de asociaciones. El protocolo se ejecuta solo — el crecimiento es orgánico.',
    pt: 'Listagens no CoinGecko e CoinMarketCap. Ferramentas comunitárias, melhorias no painel de análise e exploração de parcerias. O protocolo se executa sozinho — o crescimento é orgânico.',
    fr: 'Inscriptions sur CoinGecko et CoinMarketCap. Outils communautaires, améliorations du tableau de bord analytique et exploration de partenariats. Le protocole se gère lui-même — la croissance est organique.',
    de: 'CoinGecko- und CoinMarketCap-Listings. Community-Tools, Verbesserungen des Analyse-Dashboards und Partnerschaftserkundung. Das Protokoll läuft von selbst — Wachstum ist organisch.',
    ru: 'Листинг на CoinGecko и CoinMarketCap. Инструменты сообщества, улучшения аналитической панели и изучение партнёрства. Протокол работает сам по себе — рост органичен.',
    zh: 'CoinGecko 和 CoinMarketCap 上市。社区工具、分析仪表盘改进和合作探索。协议自动运行——增长是有机的。',
    ja: 'CoinGeckoとCoinMarketCapへの上場。コミュニティツール、分析ダッシュボードの改善、パートナーシップの探求。プロトコルは自律稼働 — 成長は有機的。',
    ko: 'CoinGecko 및 CoinMarketCap 상장. 커뮤니티 도구, 분석 대시보드 개선 및 파트너십 탐색. 프로토콜은 스스로 작동 — 성장은 유기적입니다.',
  },

  // ─── RAYDIUM STEP TITLES ───
  ray_step1_title: { en: 'Minting Fills the Pool Reserve', tr: 'Mint İşlemleri Havuz Rezervini Doldurur', es: 'El Minteo Llena la Reserva del Pool', pt: 'O Mint Preenche a Reserva do Pool', fr: 'Le Mint Remplit la Réserve du Pool', de: 'Minting füllt die Pool-Reserve', ru: 'Минтинг Пополняет Резерв Пула', zh: '铸造填充流动池储备', ja: 'ミントがプールリザーブを充填する', ko: '민팅이 풀 리저브를 채웁니다' },
  ray_step2_title: { en: 'Vault Tokens Pair with SOL', tr: 'Kasa Token\'ları SOL ile Eşleşir', es: 'Tokens de la Bóveda se Emparejan con SOL', pt: 'Tokens do Cofre se Emparelham com SOL', fr: 'Les Tokens du Coffre se Couplent avec SOL', de: 'Tresor-Token werden mit SOL gepaart', ru: 'Токены Хранилища Соединяются с SOL', zh: '金库代币与 SOL 配对', ja: 'ボールトトークンがSOLとペアになる', ko: '볼트 토큰이 SOL과 페어링됩니다' },
  ray_step3_title: { en: 'Pool Seeded On-Chain', tr: 'Havuz Zincir Üstünde Başlatıldı', es: 'Pool Sembrado On-Chain', pt: 'Pool Semeado On-Chain', fr: 'Pool Amorcé On-Chain', de: 'Pool On-Chain besät', ru: 'Пул Запущен в Блокчейне', zh: '链上初始化流动池', ja: 'オンチェーンでプールがシードされる', ko: '온체인 풀 씨딩' },
  ray_step4_title: { en: 'LP Tokens Locked for 2 Years', tr: 'LP Token\'ları 2 Yıl Kilitlendi', es: 'Tokens LP Bloqueados por 2 Años', pt: 'Tokens LP Bloqueados por 2 Anos', fr: 'Tokens LP Verrouillés pour 2 Ans', de: 'LP-Token für 2 Jahre gesperrt', ru: 'LP-Токены Заблокированы на 2 Года', zh: 'LP 代币锁定 2 年', ja: 'LPトークンが2年間ロックされる', ko: 'LP 토큰 2년 잠금' },
  ray_step5_title: { en: 'Live Trading Begins', tr: 'Canlı İşlem Başlıyor', es: 'Comienza el Trading en Vivo', pt: 'O Trading ao Vivo Começa', fr: 'Le Trading en Direct Commence', de: 'Live-Trading beginnt', ru: 'Начинается Живая Торговля', zh: '实时交易开始', ja: 'ライブ取引が始まる', ko: '라이브 거래 시작' },

  // ─── RAYDIUM STEP DESCRIPTIONS (contain inline HTML) ───
  ray_step1_desc: {
    en: 'Every mint costs <span class="raydium-highlight mint">10 SOL</span> — half goes to the minter as tokens, half enters the protocol. Of that protocol half, <span class="raydium-highlight vault">5 SOL</span> is held in the pool reserve, earmarked exclusively for Raydium liquidity.',
    tr: 'Her mint işlemi <span class="raydium-highlight mint">10 SOL</span> tutar — yarısı minter\'a token olarak gider, yarısı protokole girer. Protokol payının yarısı olan <span class="raydium-highlight vault">5 SOL</span> yalnızca Raydium likidite havuzu için ayrılmış şekilde havuz rezervinde tutulur.',
    es: 'Cada mint cuesta <span class="raydium-highlight mint">10 SOL</span> — la mitad va al minter como tokens, la mitad entra al protocolo. De esa mitad del protocolo, <span class="raydium-highlight vault">5 SOL</span> se mantiene en la reserva del pool, destinada exclusivamente a la liquidez de Raydium.',
    pt: 'Cada mint custa <span class="raydium-highlight mint">10 SOL</span> — metade vai para o minter como tokens, metade entra no protocolo. Dessa metade do protocolo, <span class="raydium-highlight vault">5 SOL</span> é mantida na reserva do pool, destinada exclusivamente à liquidez do Raydium.',
    fr: 'Chaque mint coûte <span class="raydium-highlight mint">10 SOL</span> — la moitié va au minter en tokens, la moitié entre dans le protocole. De cette moitié du protocole, <span class="raydium-highlight vault">5 SOL</span> est conservée dans la réserve du pool, exclusivement réservée à la liquidité Raydium.',
    de: 'Jeder Mint kostet <span class="raydium-highlight mint">10 SOL</span> — die Hälfte geht als Token an den Minter, die andere Hälfte geht ins Protokoll. Von dieser Protokollhälfte werden <span class="raydium-highlight vault">5 SOL</span> in der Pool-Reserve gehalten, ausschließlich für Raydium-Liquidität.',
    ru: 'Каждый минт стоит <span class="raydium-highlight mint">10 SOL</span> — половина идёт минтеру в виде токенов, половина поступает в протокол. Из доли протокола <span class="raydium-highlight vault">5 SOL</span> хранится в резерве пула, предназначенном исключительно для ликвидности Raydium.',
    zh: '每次铸造花费 <span class="raydium-highlight mint">10 SOL</span> — 一半作为代币发给铸造者，另一半进入协议。协议的这一半中，<span class="raydium-highlight vault">5 SOL</span> 保存在流动池储备中，专门用于 Raydium 流动性。',
    ja: 'ミントごとに <span class="raydium-highlight mint">10 SOL</span> かかります — 半分はトークンとしてミンターへ、半分はプロトコルへ。そのプロトコル分の半分 <span class="raydium-highlight vault">5 SOL</span> はプールリザーブに保持され、Raydium流動性専用として指定されています。',
    ko: '각 민트는 <span class="raydium-highlight mint">10 SOL</span>이 필요합니다 — 절반은 토큰으로 민터에게, 절반은 프로토콜로 들어갑니다. 프로토콜 절반 중 <span class="raydium-highlight vault">5 SOL</span>는 풀 리저브에 보관되며, Raydium 유동성 전용으로 지정됩니다.',
  },
  ray_step2_desc: {
    en: 'The vault holds 50% of all minted $TOBE. When pool seeding triggers, these vault tokens are paired with the accumulated SOL reserve to create the <span class="raydium-highlight mint">$TOBE / SOL</span> liquidity pool on Raydium.',
    tr: 'Kasa, basılmış tüm $TOBE\'nin %50\'sini tutar. Havuz başlatma tetiklendiğinde, bu kasa token\'ları birikmiş SOL rezerviyle eşleştirilerek Raydium\'da <span class="raydium-highlight mint">$TOBE / SOL</span> likidite havuzu oluşturulur.',
    es: 'La bóveda contiene el 50% de todos los $TOBE minteados. Cuando se activa la siembra del pool, estos tokens de la bóveda se emparejan con la reserva de SOL acumulada para crear el pool de liquidez <span class="raydium-highlight mint">$TOBE / SOL</span> en Raydium.',
    pt: 'O cofre detém 50% de todos os $TOBE cunhados. Quando a semeadura do pool é ativada, esses tokens do cofre são emparelhados com a reserva acumulada de SOL para criar o pool de liquidez <span class="raydium-highlight mint">$TOBE / SOL</span> na Raydium.',
    fr: 'Le coffre détient 50% de tous les $TOBE mintés. Lorsque l\'amorçage du pool se déclenche, ces tokens du coffre sont couplés avec la réserve SOL accumulée pour créer le pool de liquidité <span class="raydium-highlight mint">$TOBE / SOL</span> sur Raydium.',
    de: 'Der Tresor hält 50% aller geminten $TOBE. Wenn die Pool-Bestückung ausgelöst wird, werden diese Tresor-Token mit der akkumulierten SOL-Reserve gepaart, um den <span class="raydium-highlight mint">$TOBE / SOL</span> Liquiditätspool auf Raydium zu erstellen.',
    ru: 'Хранилище держит 50% всех выпущенных $TOBE. Когда запускается наполнение пула, токены хранилища объединяются с накопленным резервом SOL для создания пула ликвидности <span class="raydium-highlight mint">$TOBE / SOL</span> на Raydium.',
    zh: '金库持有所有铸造的 $TOBE 的 50%。当流动池初始化触发时，这些金库代币与累积的 SOL 储备配对，在 Raydium 上创建 <span class="raydium-highlight mint">$TOBE / SOL</span> 流动池。',
    ja: 'ボールトはすべてのミント済み$TOBEの50%を保持しています。プールシードが発動すると、これらのボールトトークンは蓄積されたSOLリザーブとペアになり、Raydiumで<span class="raydium-highlight mint">$TOBE / SOL</span>流動性プールを作成します。',
    ko: '볼트는 모든 민팅된 $TOBE의 50%를 보유합니다. 풀 시딩이 트리거되면, 볼트 토큰은 축적된 SOL 리저브와 페어링되어 Raydium에서 <span class="raydium-highlight mint">$TOBE / SOL</span> 유동성 풀을 생성합니다.',
  },
  ray_step3_desc: {
    en: 'The <code style="color:var(--accent);font-size:12px;">seed_pool</code> instruction is called once by the authority. It transfers vault tokens + SOL reserve into a Raydium concentrated liquidity pool. This is a one-time, irreversible action — verified on-chain.',
    tr: '<code style="color:var(--accent);font-size:12px;">seed_pool</code> komutu yetki tarafından bir kez çağrılır. Kasa token\'larını + SOL rezervini Raydium konsantre likidite havuzuna aktarır. Bu tek seferlik, geri alınamaz bir işlemdir — zincir üstünde doğrulanmıştır.',
    es: 'La instrucción <code style="color:var(--accent);font-size:12px;">seed_pool</code> es llamada una vez por la autoridad. Transfiere tokens de la bóveda + reserva SOL a un pool de liquidez concentrada de Raydium. Esta es una acción única e irreversible — verificada on-chain.',
    pt: 'A instrução <code style="color:var(--accent);font-size:12px;">seed_pool</code> é chamada uma vez pela autoridade. Ela transfere tokens do cofre + reserva SOL para um pool de liquidez concentrada do Raydium. Esta é uma ação única e irreversível — verificada on-chain.',
    fr: 'L\'instruction <code style="color:var(--accent);font-size:12px;">seed_pool</code> est appelée une fois par l\'autorité. Elle transfère les tokens du coffre + la réserve SOL dans un pool de liquidité concentrée Raydium. C\'est une action unique et irréversible — vérifiée on-chain.',
    de: 'Die <code style="color:var(--accent);font-size:12px;">seed_pool</code>-Anweisung wird einmal von der Autorität aufgerufen. Sie überträgt Tresor-Token + SOL-Reserve in einen Raydium-Konzentrat-Liquiditätspool. Dies ist eine einmalige, irreversible Aktion — on-chain verifiziert.',
    ru: 'Инструкция <code style="color:var(--accent);font-size:12px;">seed_pool</code> вызывается авторитетом один раз. Она переводит токены хранилища + резерв SOL в концентрированный пул ликвидности Raydium. Это одноразовое, необратимое действие — верифицировано в блокчейне.',
    zh: '<code style="color:var(--accent);font-size:12px;">seed_pool</code> 指令由权威方调用一次。它将金库代币 + SOL 储备转入 Raydium 集中流动池。这是一次性、不可逆的操作——在链上验证。',
    ja: '<code style="color:var(--accent);font-size:12px;">seed_pool</code>命令は権限者によって一度だけ呼び出されます。ボールトトークン + SOLリザーブをRaydiumの集中流動性プールに転送します。これは一回限りの取り消し不能なアクション — オンチェーンで検証済み。',
    ko: '<code style="color:var(--accent);font-size:12px;">seed_pool</code> 명령은 권한자에 의해 한 번 호출됩니다. 볼트 토큰 + SOL 리저브를 Raydium 집중 유동성 풀로 전송합니다. 이것은 일회성, 되돌릴 수 없는 작업 — 온체인에서 검증됩니다.',
  },
  ray_step4_desc: {
    en: 'The LP tokens received from Raydium are immediately locked via the <code style="color:var(--accent);font-size:12px;">lock_lp</code> instruction. <span class="raydium-highlight lock">No rug pulls</span> — liquidity cannot be removed until the lock expires. The unlock timestamp is stored on-chain and publicly verifiable.',
    tr: 'Raydium\'dan alınan LP token\'ları, <code style="color:var(--accent);font-size:12px;">lock_lp</code> komutuyla anında kilitlenir. <span class="raydium-highlight lock">Rug pull yok</span> — kilit süresi dolana kadar likidite çıkarılamaz. Kilit açma zaman damgası zincir üstünde saklanır ve herkese açık şekilde doğrulanabilir.',
    es: 'Los tokens LP recibidos de Raydium se bloquean inmediatamente mediante la instrucción <code style="color:var(--accent);font-size:12px;">lock_lp</code>. <span class="raydium-highlight lock">Sin rug pulls</span> — la liquidez no puede eliminarse hasta que expire el bloqueo. La marca de tiempo de desbloqueo se almacena on-chain y es públicamente verificable.',
    pt: 'Os tokens LP recebidos do Raydium são imediatamente bloqueados via instrução <code style="color:var(--accent);font-size:12px;">lock_lp</code>. <span class="raydium-highlight lock">Sem rug pulls</span> — a liquidez não pode ser removida até o bloqueio expirar. O timestamp de desbloqueio é armazenado on-chain e publicamente verificável.',
    fr: 'Les tokens LP reçus de Raydium sont immédiatement verrouillés via l\'instruction <code style="color:var(--accent);font-size:12px;">lock_lp</code>. <span class="raydium-highlight lock">Pas de rug pulls</span> — la liquidité ne peut pas être retirée jusqu\'à l\'expiration du verrouillage. L\'horodatage de déverrouillage est stocké on-chain et vérifiable publiquement.',
    de: 'Die von Raydium erhaltenen LP-Token werden sofort über die <code style="color:var(--accent);font-size:12px;">lock_lp</code>-Anweisung gesperrt. <span class="raydium-highlight lock">Keine Rug-Pulls</span> — Liquidität kann bis zum Ablauf der Sperre nicht entfernt werden. Der Entsperr-Zeitstempel wird on-chain gespeichert und ist öffentlich überprüfbar.',
    ru: 'LP-токены, полученные от Raydium, немедленно блокируются через инструкцию <code style="color:var(--accent);font-size:12px;">lock_lp</code>. <span class="raydium-highlight lock">Никаких rug pull</span> — ликвидность не может быть выведена до истечения блокировки. Метка времени разблокировки хранится в блокчейне и публично верифицируема.',
    zh: '从 Raydium 收到的 LP 代币通过 <code style="color:var(--accent);font-size:12px;">lock_lp</code> 指令立即锁定。<span class="raydium-highlight lock">无地毯抽走</span> — 在锁定到期之前无法移除流动性。解锁时间戳存储在链上，公开可验证。',
    ja: 'Raydiumから受け取ったLPトークンは<code style="color:var(--accent);font-size:12px;">lock_lp</code>命令で即座にロックされます。<span class="raydium-highlight lock">ラグプルなし</span> — ロックが期限切れになるまで流動性を引き出せません。ロック解除タイムスタンプはオンチェーンに保存され、公開検証可能です。',
    ko: 'Raydium에서 받은 LP 토큰은 <code style="color:var(--accent);font-size:12px;">lock_lp</code> 명령을 통해 즉시 잠깁니다. <span class="raydium-highlight lock">러그풀 없음</span> — 잠금이 만료될 때까지 유동성을 제거할 수 없습니다. 잠금 해제 타임스탬프는 온체인에 저장되며 공개적으로 검증 가능합니다.',
  },
  ray_step5_desc: {
    en: 'Once the pool is live, anyone can trade $TOBE on Raydium. The vault\'s remaining tokens create a price floor — they only release at $1.00, providing structural buy pressure and stability.',
    tr: 'Havuz canlıya geçtiğinde, herkes Raydium\'da $TOBE işlemi yapabilir. Kasanın kalan token\'ları bir fiyat tabanı oluşturur — yalnızca $1,00\'dan serbest bırakılır, yapısal alım baskısı ve istikrar sağlar.',
    es: 'Una vez que el pool esté en vivo, cualquiera puede operar $TOBE en Raydium. Los tokens restantes de la bóveda crean un suelo de precio — solo se liberan a $1.00, proporcionando presión de compra estructural y estabilidad.',
    pt: 'Assim que o pool estiver ativo, qualquer pessoa pode negociar $TOBE na Raydium. Os tokens restantes do cofre criam um piso de preço — eles só são liberados a $1,00, fornecendo pressão de compra estrutural e estabilidade.',
    fr: 'Une fois le pool en direct, n\'importe qui peut trader $TOBE sur Raydium. Les tokens restants du coffre créent un plancher de prix — ils ne se libèrent qu\'à $1,00, fournissant une pression d\'achat structurelle et de la stabilité.',
    de: 'Sobald der Pool live ist, kann jeder $TOBE auf Raydium handeln. Die verbleibenden Token des Tresors schaffen einen Preisboden — sie werden nur bei $1,00 freigegeben und bieten strukturellen Kaufdruck und Stabilität.',
    ru: 'Как только пул запустится, любой может торговать $TOBE на Raydium. Оставшиеся токены хранилища создают ценовой пол — они выпускаются только при $1,00, обеспечивая структурное давление покупателей и стабильность.',
    zh: '流动池上线后，任何人都可以在 Raydium 上交易 $TOBE。金库剩余代币创造价格底部——它们仅在 $1.00 时释放，提供结构性买入压力和稳定性。',
    ja: 'プールが稼働すると、誰でもRaydiumで$TOBEを取引できます。ボールトの残りトークンがプライスフロアを作り出します — $1.00でのみ解放され、構造的な買い圧力と安定性を提供します。',
    ko: '풀이 라이브 상태가 되면 누구든 Raydium에서 $TOBE를 거래할 수 있습니다. 볼트의 남은 토큰은 가격 바닥을 만듭니다 — $1.00에서만 해제되어 구조적인 매수 압력과 안정성을 제공합니다.',
  },

  // ─── THEME TOGGLE ───
  light_mode: { en: 'Light Mode', tr: 'Açık Tema', es: 'Modo Claro', pt: 'Modo Claro', fr: 'Mode Clair', de: 'Heller Modus', ru: 'Светлый режим', zh: '浅色模式', ja: 'ライトモード', ko: '라이트 모드' },
  dark_mode:  { en: 'Dark Mode',  tr: 'Koyu Tema',  es: 'Modo Oscuro', pt: 'Modo Escuro', fr: 'Mode Sombre', de: 'Dunkler Modus', ru: 'Тёмный режим',  zh: '深色模式', ja: 'ダークモード',  ko: '다크 모드'  },

  // ─── ROUNDS / PROGRESS ───
  of_rounds:  { en: '/ 1,024 rounds', tr: '/ 1.024 tur', es: '/ 1,024 rondas', pt: '/ 1.024 rodadas', fr: '/ 1 024 tours', de: '/ 1.024 Runden', ru: '/ 1 024 раунда', zh: '/ 1,024 轮', ja: '/ 1,024 ラウンド', ko: '/ 1,024 라운드' },
  round_word: { en: 'ROUND', tr: 'TUR', es: 'RONDA', pt: 'RODADA', fr: 'TOUR', de: 'RUNDE', ru: 'РАУНД', zh: '轮', ja: 'ラウンド', ko: '라운드' },

  // ─── CHART LABELS ───
  chart_supply_vault: { en: 'Cumulative supply + vault', tr: 'Kümülatif arz + kasa', es: 'Suministro acumulado + bóveda', pt: 'Fornecimento acumulado + cofre', fr: 'Offre cumulée + coffre', de: 'Kumuliertes Angebot + Tresor', ru: 'Совокупное предложение + хранилище', zh: '累计供应 + 金库', ja: '累積供給 + ボールト', ko: '누적 공급 + 볼트' },
  chart_ceiling:      { en: '$1.00 ceiling', tr: '$1,00 tavan', es: 'Techo de $1,00', pt: 'Teto de $1,00', fr: 'Plafond $1,00', de: '$1,00 Obergrenze', ru: 'Потолок $1,00', zh: '$1.00 上限', ja: '$1.00 の上限', ko: '$1.00 상한선' },

  // ─── PRICE ALERT ───
  alert_price_hits: { en: 'Alert when price hits $', tr: 'Fiyat $\'a ulaşınca uyar', es: 'Alerta cuando el precio alcance $', pt: 'Alertar quando o preço atingir $', fr: 'Alerte quand le prix atteint $', de: 'Warnung bei Preis $', ru: 'Уведомить при цене $', zh: '当价格达到 $ 时提醒', ja: '価格が $ に達したらアラート', ko: '가격이 $에 도달하면 알림' },
  set_alert:        { en: 'Set Alert', tr: 'Uyarı Kur', es: 'Establecer Alerta', pt: 'Definir Alerta', fr: 'Définir Alerte', de: 'Alarm setzen', ru: 'Установить уведомление', zh: '设置提醒', ja: 'アラート設定', ko: '알림 설정' },

  // ─── TX FEED / VAULT ACTIVITY (JS-generated) ───
  mint_label_tx:  { en: 'Mint', tr: 'Mint', es: 'Mint', pt: 'Mint', fr: 'Mint', de: 'Mint', ru: 'Минт', zh: '铸造', ja: 'ミント', ko: '민트' },
  tobe_deposited: { en: 'TOBE deposited', tr: 'TOBE yatırıldı', es: 'TOBE depositado', pt: 'TOBE depositado', fr: 'TOBE déposé', de: 'TOBE eingezahlt', ru: 'TOBE внесён', zh: 'TOBE 存入', ja: 'TOBE 入金', ko: 'TOBE 입금' },
  mint_singular:  { en: 'mint', tr: 'mint', es: 'mint', pt: 'mint', fr: 'mint', de: 'Mint', ru: 'минт', zh: '笔铸造', ja: 'ミント', ko: '민트' },
  mint_plural:    { en: 'mints', tr: 'mint', es: 'mints', pt: 'mints', fr: 'mints', de: 'Mints', ru: 'минтов', zh: '笔铸造', ja: 'ミント', ko: '민트' },

  // ─── SIMULATOR ───
  sim_vault_ceiling: { en: '$1.00 (ceiling)', tr: '$1,00 (tavan)', es: '$1,00 (techo)', pt: '$1,00 (teto)', fr: '$1,00 (plafond)', de: '$1,00 (Obergrenze)', ru: '$1,00 (потолок)', zh: '$1.00（上限）', ja: '$1.00（上限）', ko: '$1.00 (상한선)' },
  sim_yes_selling:   { en: 'Yes — selling at $1.00', tr: 'Evet — $1,00\'dan satıyor', es: 'Sí — vendiendo a $1,00', pt: 'Sim — vendendo a $1,00', fr: 'Oui — vente à $1,00', de: 'Ja — Verkauf bei $1,00', ru: 'Да — продаёт по $1,00', zh: '是——以 $1.00 出售', ja: 'はい — $1.00 で売却中', ko: '예 — $1.00에 판매 중' },
  sim_no_price:      { en: 'No (price < $1)', tr: 'Hayır (fiyat < $1)', es: 'No (precio < $1)', pt: 'Não (preço < $1)', fr: 'Non (prix < $1)', de: 'Nein (Preis < $1)', ru: 'Нет (цена < $1)', zh: '否（价格 < $1）', ja: 'いいえ（価格 < $1）', ko: '아니요 (가격 < $1)' },
};

// ─── i18n Engine ───
function t(key) {
  const lang = getCurrentLang();
  const entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[lang] || entry['en'] || key;
}

function getCurrentLang() {
  return localStorage.getItem('tobe_lang') || 'en';
}

function setLang(lang) {
  if (!LANG_META[lang]) return;
  localStorage.setItem('tobe_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  updateTypedPhrases();
  updateLangPickerLabel();
  if (typeof updateThemePreview === 'function') {
    updateThemePreview(document.documentElement.getAttribute('data-theme') || 'dark');
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = t(key);
    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      el.placeholder = val;
    } else if (el.tagName === 'INPUT' && el.readOnly) {
      el.value = val;
    } else {
      el.textContent = val;
    }
  });
  // Update elements with mixed HTML content (code/span tags inside translations)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var parsed = new DOMParser().parseFromString(t(el.getAttribute('data-i18n-html')), 'text/html');
    while (el.firstChild) el.removeChild(el.firstChild);
    Array.from(parsed.body.childNodes).forEach(function(n) { el.appendChild(n.cloneNode(true)); });
  });
  // Update data-tooltip attributes
  document.querySelectorAll('[data-i18n-tooltip]').forEach(function(el) {
    el.setAttribute('data-tooltip', t(el.getAttribute('data-i18n-tooltip')));
  });
}

function getTypedPhrases() {
  return [t('typed_1'), t('typed_2'), t('typed_3'), t('typed_4'), t('typed_5')];
}

function updateTypedPhrases() {
  if (window._typedPhrases) {
    window._typedPhrases = getTypedPhrases();
  }
}

function updateLangPickerLabel() {
  var lang = getCurrentLang();
  var btn = document.getElementById('langPickerBtn');
  if (btn) {
    var flag = document.createElement('span');
    flag.textContent = LANG_META[lang].flag;
    var code = document.createElement('span');
    code.className = 'lang-code';
    code.textContent = lang.toUpperCase();
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'badge-chevron');
    svg.setAttribute('width', '10');
    svg.setAttribute('height', '10');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M6 9l6 6 6-6');
    svg.appendChild(path);
    btn.textContent = '';
    btn.appendChild(flag);
    btn.appendChild(document.createTextNode(' '));
    btn.appendChild(code);
    btn.appendChild(svg);
  }
}

function initLangPicker() {
  var lang = getCurrentLang();
  document.documentElement.lang = lang;
  updateLangPickerLabel();
  applyTranslations();
}

// Toggle dropdown
function toggleLangDropdown() {
  var dd = document.getElementById('langDropdown');
  dd.classList.toggle('open');
}

// Close dropdown on outside click
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('langPickerWrap');
  var dd = document.getElementById('langDropdown');
  if (wrap && dd && !wrap.contains(e.target)) {
    dd.classList.remove('open');
  }
});

// Init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLangPicker);
} else {
  initLangPicker();
}
