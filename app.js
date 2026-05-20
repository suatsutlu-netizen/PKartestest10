/* ═══════════════════════════════════════════════
   CONJUGAISON APP — Pure JS, No AI dependency
   ═══════════════════════════════════════════════ */

// ── TRANSLATIONS ──
const T = {
  fr: {
    appTitle: 'Conjugaison', appSub: 'Étude de Langue',
    level: 'Niveau scolaire', character: 'Personnages', charType: 'Type de personnage',
    genre: 'Genre littéraire', tense: 'Temps de conjugaison', sentences: 'Nombre de phrases',
    settings: 'Options', generate: '✨ Générer l\'exercice', back: '← Retour',
    correct: '✅ Corriger', downloadPdf: '📄 Exporter PDF', newText: '🔄 Nouveau texte',
    instruction: 'Recopie le texte et conjugue les verbes entre parenthèses au temps qui convient et écris-les sur les lignes.',
    docTitle: 'Étude de langue : français',
    correctionMode: '✅ Mode correction activé',
    showDate: '📅 Afficher la date',
    images: '🖼️ Dessins décoratifs',
    levelLabels: ['CP', 'CE1', 'CE2', 'CM1', 'CM2'],
    genres: ['Conte', 'Aventure', 'Policier', 'Fantasy', 'Humour', 'Fable', 'Science-fiction', 'Mystère'],
    charTypes: [
      {icon:'🧒', label:'Enfant humain'}, {icon:'🧙', label:'Sorcier/ère'},
      {icon:'🦊', label:'Animal renard'}, {icon:'🐉', label:'Dragon'},
      {icon:'🧚', label:'Fée/Lutin'}, {icon:'🤖', label:'Robot'},
      {icon:'🦁', label:'Animal lion'}, {icon:'👸', label:'Princesse/Prince'},
      {icon:'🧛', label:'Vampire'}, {icon:'🐸', label:'Grenouille'},
      {icon:'🦄', label:'Licorne'}, {icon:'👽', label:'Extraterrestre'},
    ],
    charCount: ['1 personnage', '2 personnages', '3 personnages', '4 personnages'],
    tenses: [
      {id:'present', name:'Présent', ex:'il mange'},
      {id:'imparfait', name:'Imparfait', ex:'il mangeait'},
      {id:'futur', name:'Futur', ex:'il mangera'},
      {id:'passe_compose', name:'Passé composé', ex:'il a mangé'},
    ],
    sentencesLabel: 'phrases',
  },
  en: {
    appTitle: 'Conjugation', appSub: 'Language Study',
    level: 'School level', character: 'Characters', charType: 'Character type',
    genre: 'Literary genre', tense: 'Verb tense', sentences: 'Number of sentences',
    settings: 'Options', generate: '✨ Generate exercise', back: '← Back',
    correct: '✅ Correct', downloadPdf: '📄 Export PDF', newText: '🔄 New text',
    instruction: 'Copy the text and conjugate the verbs in parentheses at the right tense, writing them on the lines.',
    docTitle: 'Language Study: French',
    correctionMode: '✅ Correction mode ON',
    showDate: '📅 Show date',
    images: '🖼️ Decorative images',
    levelLabels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    genres: ['Tale', 'Adventure', 'Detective', 'Fantasy', 'Humour', 'Fable', 'Sci-fi', 'Mystery'],
    charTypes: [
      {icon:'🧒', label:'Human child'}, {icon:'🧙', label:'Wizard'},
      {icon:'🦊', label:'Fox animal'}, {icon:'🐉', label:'Dragon'},
      {icon:'🧚', label:'Fairy/Elf'}, {icon:'🤖', label:'Robot'},
      {icon:'🦁', label:'Lion animal'}, {icon:'👸', label:'Princess/Prince'},
      {icon:'🧛', label:'Vampire'}, {icon:'🐸', label:'Frog'},
      {icon:'🦄', label:'Unicorn'}, {icon:'👽', label:'Alien'},
    ],
    charCount: ['1 character', '2 characters', '3 characters', '4 characters'],
    tenses: [
      {id:'present', name:'Present', ex:'he eats'},
      {id:'imparfait', name:'Imperfect', ex:'he ate'},
      {id:'futur', name:'Future', ex:'he will eat'},
      {id:'passe_compose', name:'Past perfect', ex:'he has eaten'},
    ],
    sentencesLabel: 'sentences',
  },
  tr: {
    appTitle: 'Fiil Çekimi', appSub: 'Dil Eğitimi',
    level: 'Okul seviyesi', character: 'Karakterler', charType: 'Karakter türü',
    genre: 'Edebi tür', tense: 'Fiil zamanı', sentences: 'Cümle sayısı',
    settings: 'Seçenekler', generate: '✨ Egzersiz oluştur', back: '← Geri',
    correct: '✅ Düzelt', downloadPdf: '📄 PDF İndir', newText: '🔄 Yeni metin',
    instruction: 'Metni yeniden yaz ve parantezdeki fiilleri uygun zamana göre çekimle, çizgilere yaz.',
    docTitle: 'Dil Eğitimi: Fransızca',
    correctionMode: '✅ Düzeltme modu açık',
    showDate: '📅 Tarihi göster',
    images: '🖼️ Dekoratif resimler',
    levelLabels: ['1. Sınıf', '2. Sınıf', '3. Sınıf', '4. Sınıf', '5. Sınıf'],
    genres: ['Masal', 'Macera', 'Dedektif', 'Fantezi', 'Mizah', ''],
    charTypes: [
      {icon:'🧒', label:'İnsan çocuk'}, {icon:'🧙', label:'Büyücü'},
      {icon:'🦊', label:'Tilki'}, {icon:'🐉', label:'Ejderha'},
      {icon:'🧚', label:'Peri/Cüce'}, {icon:'🤖', label:'Robot'},
      {icon:'🦁', label:'Aslan'}, {icon:'👸', label:'Prenses/Prens'},
      {icon:'🧛', label:'Vampir'}, {icon:'🐸', label:'Kurbağa'},
      {icon:'🦄', label:'Tek boynuzlu'}, {icon:'👽', label:'Uzaylı'},
    ],
    charCount: ['1 karakter', '2 karakter', '3 karakter', '4 karakter'],
    tenses: [
      {id:'present', name:'Şimdiki zaman', ex:'o yiyor'},
      {id:'imparfait', name:'Geçmiş zaman', ex:'o yiyordu'},
      {id:'futur', name:'Gelecek zaman', ex:'o yiyecek'},
      {id:'passe_compose', name:'Bileşik geçmiş', ex:'o yedi'},
    ],
    sentencesLabel: 'cümle',
  }
};

// ── STORY ENGINE ──
// Verb banks by tense
const VERBS = {
  present: [
    {inf:'chanter', conj:['chante','chantes','chante','chantons','chantez','chantent']},
    {inf:'manger', conj:['mange','manges','mange','mangeons','mangez','mangent']},
    {inf:'courir', conj:['cours','cours','court','courons','courez','courent']},
    {inf:'voir', conj:['vois','vois','voit','voyons','voyez','voient']},
    {inf:'dormir', conj:['dors','dors','dort','dormons','dormez','dorment']},
    {inf:'sauter', conj:['saute','sautes','saute','sautons','sautez','sautent']},
    {inf:'partir', conj:['pars','pars','part','partons','partez','partent']},
    {inf:'rire', conj:['ris','ris','rit','rions','riez','rient']},
    {inf:'crier', conj:['crie','cries','crie','crions','criez','crient']},
    {inf:'jouer', conj:['joue','joues','joue','jouons','jouez','jouent']},
    {inf:'trouver', conj:['trouve','trouves','trouve','trouvons','trouvez','trouvent']},
    {inf:'regarder', conj:['regarde','regardes','regarde','regardons','regardez','regardent']},
    {inf:'prendre', conj:['prends','prends','prend','prenons','prenez','prennent']},
    {inf:'venir', conj:['viens','viens','vient','venons','venez','viennent']},
    {inf:'donner', conj:['donne','donnes','donne','donnons','donnez','donnent']},
    {inf:'monter', conj:['monte','montes','monte','montons','montez','montent']},
    {inf:'descendre', conj:['descends','descends','descend','descendons','descendez','descendent']},
    {inf:'ouvrir', conj:['ouvre','ouvres','ouvre','ouvrons','ouvrez','ouvrent']},
    {inf:'traverser', conj:['traverse','traverses','traverse','traversons','traversez','traversent']},
    {inf:'appeler', conj:['appelle','appelles','appelle','appelons','appelez','appellent']},
  ],
  imparfait: [
    {inf:'chanter', conj:['chantais','chantais','chantait','chantions','chantiez','chantaient']},
    {inf:'manger', conj:['mangeais','mangeais','mangeait','mangions','mangiez','mangeaient']},
    {inf:'courir', conj:['courais','courais','courait','courions','couriez','couraient']},
    {inf:'voir', conj:['voyais','voyais','voyait','voyions','voyiez','voyaient']},
    {inf:'dormir', conj:['dormais','dormais','dormait','dormions','dormiez','dormaient']},
    {inf:'jouer', conj:['jouais','jouais','jouait','jouions','jouiez','jouaient']},
    {inf:'crier', conj:['criais','criais','criait','criions','criiez','criaient']},
    {inf:'trouver', conj:['trouvais','trouvais','trouvait','trouvions','trouviez','trouvaient']},
    {inf:'prendre', conj:['prenais','prenais','prenait','prenions','preniez','prenaient']},
    {inf:'venir', conj:['venais','venais','venait','venions','veniez','venaient']},
  ],
  futur: [
    {inf:'chanter', conj:['chanterai','chanteras','chantera','chanterons','chanterez','chanteront']},
    {inf:'manger', conj:['mangerai','mangeras','mangera','mangerons','mangerez','mangeront']},
    {inf:'courir', conj:['courrai','courras','courra','courrons','courrez','courront']},
    {inf:'voir', conj:['verrai','verras','verra','verrons','verrez','verront']},
    {inf:'dormir', conj:['dormirai','dormiras','dormira','dormirons','dormirez','dormiront']},
    {inf:'jouer', conj:['jouerai','joueras','jouera','jouerons','jouerez','joueront']},
    {inf:'trouver', conj:['trouverai','trouveras','trouvera','trouverons','trouverez','trouveront']},
    {inf:'partir', conj:['partirai','partiras','partira','partirons','partirez','partiront']},
    {inf:'venir', conj:['viendrai','viendras','viendra','viendrons','viendrez','viendront']},
    {inf:'prendre', conj:['prendrai','prendras','prendra','prendrons','prendrez','prendront']},
  ],
  passe_compose: [
    {inf:'chanter', conj:['ai chanté','as chanté','a chanté','avons chanté','avez chanté','ont chanté']},
    {inf:'manger', conj:['ai mangé','as mangé','a mangé','avons mangé','avez mangé','ont mangé']},
    {inf:'courir', conj:['ai couru','as couru','a couru','avons couru','avez couru','ont couru']},
    {inf:'voir', conj:['ai vu','as vu','a vu','avons vu','avez vu','ont vu']},
    {inf:'dormir', conj:['ai dormi','as dormi','a dormi','avons dormi','avez dormi','ont dormi']},
    {inf:'jouer', conj:['ai joué','as joué','a joué','avons joué','avez joué','ont joué']},
    {inf:'trouver', conj:['ai trouvé','as trouvé','a trouvé','avons trouvé','avez trouvé','ont trouvé']},
    {inf:'partir', conj:['suis parti','es parti','est parti','sommes partis','êtes partis','sont partis']},
    {inf:'venir', conj:['suis venu','es venu','est venu','sommes venus','êtes venus','sont venus']},
    {inf:'prendre', conj:['ai pris','as pris','a pris','avons pris','avez pris','ont pris']},
  ]
};

// Subject pronouns for sentence building
const SUBJECTS = [
  {pron:'Je', idx:0}, {pron:'Tu', idx:1}, {pron:'Il', idx:2},
  {pron:'Elle', idx:2}, {pron:'Nous', idx:3}, {pron:'Vous', idx:4},
  {pron:'Ils', idx:5}, {pron:'Elles', idx:5}
];

// Character name banks
const NAMES = {
  human: ['Léa','Tom','Emma','Lucas','Chloé','Nathan','Inès','Théo','Clara','Maxime','Sofia','Hugo'],
  animal: ['Renardo','Léo','Mistigri','Cornélius','Frimousse','Gribouille','Toupie','Ourson'],
  magic: ['Zara','Merlin','Elara','Drako','Pixie','Vortex','Luminos','Eclara','Mystro'],
  robot: ['R2X','Bot-3000','Nixie','Zippy','Droid-7','Beepy'],
};

// Settings / location fragments
const PLACES = {
  conte: ['dans un royaume enchanté','au cœur d\'une forêt magique','sur une île mystérieuse','dans un château merveilleux'],
  aventure: ['dans la jungle','sur une montagne escarpée','au fond d\'une grotte','près d\'un lac mystérieux'],
  policier: ['dans la ville','au musée','dans le quartier','près du port'],
  fantasy: ['dans les royaumes elfiques','sur les nuages','dans les cavernes de cristal','au sommet de la tour'],
  humour: ['dans le village','à l\'école','au marché','dans le jardin'],
  fable: ['dans la forêt','au bord de la rivière','dans la prairie','sur la colline'],
  'science-fiction': ['sur la planète Zorak','dans la station spatiale','dans la cité du futur','à bord du vaisseau'],
  mystère: ['dans la vieille maison','au fond du lac','dans le brouillard','près du cimetière'],
};

// Action contexts fragments
const CONTEXTS = {
  conte: ['Un beau matin','Soudain','À la tombée de la nuit','Le lendemain','Bien des jours après'],
  aventure: ['Soudain','Plus loin','En chemin','Courageusement','Sans hésiter'],
  policier: ['Mystérieusement','À ce moment-là','En observant','Sans bruit','Rapidement'],
  fantasy: ['Par magie','Dans les étoiles','Grâce à son pouvoir','En un éclair','Au coucher du soleil'],
  humour: ['Maladroitement','En rigolant','Avec beaucoup de peine','Très gaiment','D\'une drôle de façon'],
  fable: ['Un jour','Avec sagesse','Prudemment','D\'un air malin','En réfléchissant bien'],
  'science-fiction': ['Dans l\'espace','Par hologramme','À la vitesse de la lumière','Grâce au robot','Sur l\'écran'],
  mystère: ['Dans l\'ombre','Silencieusement','Sans laisser de trace','Dans le noir','À l\'aube'],
};

// Random utilities
const rnd = arr => arr[Math.floor(Math.random() * arr.length)];
const rndInt = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

// Decorative emojis per genre
const GENRE_EMOJIS = {
  conte: ['🌟','🏰','🌙','🦋','🌈','🌸'],
  aventure: ['⛰️','🗺️','🧭','🌿','🔥','💎'],
  policier: ['🔍','🕵️','📋','🚔','🔦','🗝️'],
  fantasy: ['🐉','✨','🔮','⚡','🌀','🗡️'],
  humour: ['🤣','🎪','🎠','🎈','🎭','🌻'],
  fable: ['🦊','🌿','🌾','🦉','🐢','🌼'],
  'science-fiction': ['🚀','🤖','🪐','⭐','🛸','💡'],
  mystère: ['🌑','👣','🕯️','🦇','🌫️','🔐'],
};

// ── STORY BUILDER ──
function buildStory(opts) {
  const {charCount, charTypes, genre, tense, sentenceCount} = opts;
  const g = genre.toLowerCase().replace(/ /g,'-');
  const tenseKey = tense;
  const verbs = VERBS[tenseKey] || VERBS['present'];
  
  // Pick character names
  const typeKey = charTypes[0] || 'human';
  let nameBank;
  if (['🧒','👸'].includes(typeKey)) nameBank = NAMES.human;
  else if (['🦊','🦁','🐸'].includes(typeKey)) nameBank = NAMES.animal;
  else if (['🤖'].includes(typeKey)) nameBank = NAMES.robot;
  else nameBank = NAMES.magic;

  const shuffledNames = shuffle(nameBank);
  const chars = shuffledNames.slice(0, Math.min(charCount, 4));

  const places = PLACES[g] || PLACES.conte;
  const ctxs = CONTEXTS[g] || CONTEXTS.conte;

  const sentences = [];
  const usedVerbs = [];
  const verbPool = shuffle(verbs);
  let verbIdx = 0;

  // Determine which sentences use infinitive (50%)
  const infPositions = new Set();
  const total = sentenceCount;
  const infCount = Math.max(1, Math.floor(total / 2));
  while (infPositions.size < infCount) {
    infPositions.add(rndInt(0, total - 1));
  }

  for (let i = 0; i < total; i++) {
    const charName = rnd(chars);
    const verb = verbPool[verbIdx % verbPool.length];
    verbIdx++;

    const subj = charName;
    const subjIdx = 2; // 3rd person singular (il/elle)
    const conjForm = verb.conj[subjIdx];
    const place = rnd(places);
    const ctx = i % 4 === 0 ? rnd(ctxs) + ', ' : '';

    const useInfinitive = infPositions.has(i);

    if (useInfinitive) {
      sentences.push({
        text: `${ctx}${subj} (${verb.inf}) ${place}.`,
        infinitive: verb.inf,
        correction: conjForm,
        subject: subj,
        isInfinitive: true,
      });
      usedVerbs.push({inf: verb.inf, conj: conjForm, subject: subj});
    } else {
      sentences.push({
        text: `${ctx}${subj} ${conjForm} ${place}.`,
        isInfinitive: false,
      });
    }
  }

  // Generate a story title
  const titleTemplates = [
    `L'aventure de ${chars[0]}`,
    `${chars[0]} et le grand voyage`,
    `Les aventures de ${chars.join(' et ')}`,
    `Le mystère de ${rnd(places).replace('dans ','').replace('au ','').replace('sur ','').replace('à ','').replace('près ','').trim()}`,
    `${chars[0]}, héros du ${genre}`,
  ];
  const title = rnd(titleTemplates);

  return {title, sentences, usedVerbs, chars, genre: g};
}

// ── HTML RENDERING ──
function renderStoryHTML(story, opts) {
  const {showDate, showImages, genre} = opts;
  const g = genre.toLowerCase().replace(/ /g, '-');
  const emojis = GENRE_EMOJIS[g] || GENRE_EMOJIS.conte;

  let html = '';

  // Title
  html += `<div class="doc-title">Étude de langue : français</div>`;

  // Date
  if (showDate) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
    html += `<div class="doc-date">${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)}</div>`;
  }

  // Instruction
  html += `<div class="doc-instruction">Recopie le texte et conjugue les verbes entre parenthèses au temps qui convient et écris-les sur les lignes.</div>`;

  // Story title
  html += `<div class="doc-story-title">${story.title}</div>`;

  // Story body
  html += `<div class="doc-body" id="story-body">`;
  story.sentences.forEach((s, i) => {
    if (s.isInfinitive) {
      const textParts = s.text.split(`(${s.infinitive})`);
      html += `<span class="sentence">${textParts[0]}<span class="verb-infinitive">(${s.infinitive})</span> <span class="write-line" data-inf="${s.infinitive}" data-answer="${s.correction}" data-idx="${i}">&nbsp;</span>${textParts[1] || ''}</span> `;
    } else {
      html += `<span class="sentence">${s.text}</span> `;
    }
  });
  html += `</div>`;

  // Decorative illustrations
  if (showImages) {
    const positions = [
      {top:'8%', right:'5%', size:'80px', z:0},
      {top:'25%', left:'2%', size:'65px', z:2},
      {top:'55%', right:'3%', size:'70px', z:0},
      {bottom:'15%', left:'5%', size:'60px', z:2},
      {top:'75%', right:'8%', size:'50px', z:0},
    ];
    positions.forEach((pos, i) => {
      const emoji = emojis[i % emojis.length];
      const cls = pos.z === 2 ? 'deco-illus fg' : 'deco-illus';
      const style = Object.entries(pos).filter(([k])=>k!=='z').map(([k,v])=>`${k}:${v}`).join(';');
      html += `<div class="${cls}" style="${style};font-size:${pos.size};line-height:1;position:absolute;">${emoji}</div>`;
    });
  }

  return html;
}

// ── APP STATE ──
const state = {
  lang: 'fr',
  level: 'CP',
  charCount: 1,
  charTypeIcons: [],
  genre: 'Conte',
  tense: 'present',
  sentenceCount: 10,
  showDate: false,
  showImages: true,
  story: null,
  correctionMode: false,
};

// ── DOM HELPERS ──
const $ = id => document.getElementById(id);
const t = key => T[state.lang][key] || T.fr[key] || key;

function setLang(lang) {
  state.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderForm();
}

// ── FORM RENDERING ──
function renderForm() {
  const lang = state.lang;
  const tr = T[lang];

  // App header
  $('app-title').textContent = tr.appTitle;
  $('app-sub').textContent = tr.appSub;

  // Level
  $('section-level').innerHTML = `
    <div class="card">
      <div class="card-title"><span class="icon">🎓</span>${tr.level}</div>
      <div class="level-pills">
        ${tr.levelLabels.map((l,i) => `
          <div class="pill${state.level === l ? ' selected' : ''}" onclick="selectLevel('${l}')">${l}</div>
        `).join('')}
      </div>
    </div>`;

  // Character count
  $('section-chars').innerHTML = `
    <div class="card">
      <div class="card-title"><span class="icon">👥</span>${tr.character}</div>
      <div class="option-grid">
        ${tr.charCount.map((c,i) => `
          <div class="opt-card green-theme${state.charCount === i+1 ? ' selected' : ''}" onclick="selectCharCount(${i+1})">
            <span class="opt-icon">${['1️⃣','2️⃣','3️⃣','4️⃣'][i]}</span>
            <span class="opt-label">${c}</span>
          </div>
        `).join('')}
      </div>
    </div>`;

  // Character types
  $('section-chartype').innerHTML = `
    <div class="card">
      <div class="card-title"><span class="icon">🎭</span>${tr.charType}</div>
      <div class="option-grid">
        ${tr.charTypes.map((c,i) => `
          <div class="opt-card${state.charTypeIcons.includes(c.icon) ? ' selected' : ''}" onclick="toggleCharType('${c.icon}')">
            <span class="opt-icon">${c.icon}</span>
            <span class="opt-label">${c.label}</span>
          </div>
        `).join('')}
      </div>
    </div>`;

  // Genre
  $('section-genre').innerHTML = `
    <div class="card">
      <div class="card-title"><span class="icon">📚</span>${tr.genre}</div>
      <div class="option-grid">
        ${(tr.genres || T.fr.genres).map((g,i) => {
          const icons = ['🌙','⛰️','🔍','🐉','😄','🦊','🚀','❓'];
          return `<div class="opt-card yellow-theme${state.genre === g ? ' selected' : ''}" onclick="selectGenre('${g}')">
            <span class="opt-icon">${icons[i]||'📖'}</span>
            <span class="opt-label">${g}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;

  // Tense
  $('section-tense').innerHTML = `
    <div class="card">
      <div class="card-title"><span class="icon">⏱️</span>${tr.tense}</div>
      <div class="tense-grid">
        ${tr.tenses.map(tn => `
          <div class="tense-btn${state.tense === tn.id ? ' selected' : ''}" onclick="selectTense('${tn.id}')">
            <span class="tense-name">${tn.name}</span>
            <span class="tense-ex">${tn.ex}</span>
          </div>
        `).join('')}
      </div>
    </div>`;

  // Sentence count slider
  const counts = [5,10,15,20,25,30,45,50,100];
  const currentIdx = counts.indexOf(state.sentenceCount);
  const pct = (currentIdx / (counts.length - 1)) * 100;
  $('section-sentences').innerHTML = `
    <div class="card">
      <div class="card-title"><span class="icon">📝</span>${tr.sentences}</div>
      <div class="slider-wrap">
        <div class="count-display" id="count-display">
          ${state.sentenceCount} <span>${tr.sentencesLabel}</span>
        </div>
        <input type="range" id="sentence-slider" min="0" max="${counts.length-1}"
          value="${Math.max(0,currentIdx)}" step="1"
          style="--pct:${pct}%"
          oninput="updateSlider(this)">
        <div class="slider-labels">
          <span>5</span><span>10</span><span>20</span><span>30</span><span>50</span><span>100</span>
        </div>
      </div>
    </div>`;

  // Settings card
  $('section-settings').innerHTML = `
    <div class="card">
      <div class="card-title"><span class="icon">⚙️</span>${tr.settings}</div>
      <div class="toggle-row">
        <div>
          <div class="toggle-label">${tr.showDate}</div>
        </div>
        <label class="toggle">
          <input type="checkbox" ${state.showDate ? 'checked' : ''} onchange="state.showDate=this.checked">
          <span class="toggle-slider"></span>
        </label>
      </div>
      <div class="toggle-row">
        <div>
          <div class="toggle-label">${tr.images}</div>
        </div>
        <label class="toggle">
          <input type="checkbox" ${state.showImages ? 'checked' : ''} onchange="state.showImages=this.checked">
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>`;

  // Generate button
  $('btn-generate').innerHTML = `<span class="btn-icon">✨</span>${tr.generate}`;
  $('btn-generate').onclick = generateExercise;
}

// ── SELECTION HANDLERS ──
function selectLevel(l) { state.level = l; renderForm(); }
function selectCharCount(n) { state.charCount = n; renderForm(); }
function toggleCharType(icon) {
  const idx = state.charTypeIcons.indexOf(icon);
  if (idx >= 0) state.charTypeIcons.splice(idx, 1);
  else state.charTypeIcons.push(icon);
  renderForm();
}
function selectGenre(g) { state.genre = g; renderForm(); }
function selectTense(t) { state.tense = t; renderForm(); }

function updateSlider(el) {
  const counts = [5,10,15,20,25,30,45,50,100];
  const idx = parseInt(el.value);
  state.sentenceCount = counts[idx];
  const pct = (idx / (counts.length - 1)) * 100;
  el.style.setProperty('--pct', pct + '%');
  $('count-display').innerHTML = `${state.sentenceCount} <span>${T[state.lang].sentencesLabel}</span>`;
}

// ── GENERATE ──
function generateExercise() {
  // Default char type if none selected
  if (state.charTypeIcons.length === 0) state.charTypeIcons = ['🧒'];

  const story = buildStory({
    charCount: state.charCount,
    charTypes: state.charTypeIcons,
    genre: state.genre,
    tense: state.tense,
    sentenceCount: state.sentenceCount,
  });
  state.story = story;
  state.correctionMode = false;

  // Switch to page 2
  showPage('page-text');

  // Render text
  const paperContent = $('paper-content');
  paperContent.innerHTML = renderStoryHTML(story, {
    showDate: state.showDate,
    showImages: state.showImages,
    genre: state.genre,
  });

  // Update header labels
  $('btn-back-label').textContent = T[state.lang].back || '← Retour';
  $('btn-correct-label').textContent = T[state.lang].correct || '✅ Corriger';
  $('btn-pdf-label').textContent = T[state.lang].downloadPdf || '📄 PDF';
  $('btn-new-label').textContent = T[state.lang].newText || '🔄 Nouveau';
  $('correction-bar').textContent = T[state.lang].correctionMode;
  $('correction-bar').classList.remove('visible');
}

// ── CORRECTION ──
function toggleCorrection() {
  state.correctionMode = !state.correctionMode;
  const lines = document.querySelectorAll('.write-line');
  lines.forEach(line => {
    if (state.correctionMode) {
      line.textContent = line.dataset.answer;
      line.classList.add('corrected');
    } else {
      line.innerHTML = '&nbsp;';
      line.classList.remove('corrected');
    }
  });
  $('correction-bar').classList.toggle('visible', state.correctionMode);
}

// ── PAGES ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo(0,0);
}

// ── PDF EXPORT ──
function exportPDF() {
  // Use browser print as PDF fallback (works on mobile too)
  const story = state.story;
  if (!story) return;

  const w = window.open('', '_blank');
  const lang = state.lang;
  const tr = T[lang];

  const now = new Date();
  const dateStr = state.showDate
    ? now.toLocaleDateString('fr-FR', {weekday:'long', year:'numeric', month:'long', day:'numeric'})
    : '';

  let bodyHTML = '';
  story.sentences.forEach(s => {
    if (s.isInfinitive) {
      const parts = s.text.split(`(${s.infinitive})`);
      bodyHTML += `${parts[0]}<span style="color:#4A90D9;font-style:italic;font-weight:bold;">(${s.infinitive})</span>&nbsp;<span style="display:inline-block;min-width:90px;border-bottom:1.5px solid #222;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>${parts[1]||''} `;
    } else {
      bodyHTML += s.text + ' ';
    }
  });

  const genre = state.genre;
  const emojis = GENRE_EMOJIS[genre.toLowerCase().replace(/ /g,'-')] || GENRE_EMOJIS.conte;

  w.document.write(`<!DOCTYPE html><html><head>
  <meta charset="utf-8">
  <title>Étude de langue</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
    * { box-sizing: border-box; margin:0; padding:0; }
    body {
      font-family: Calibri, 'Nunito', sans-serif;
      background: #F5EDE0;
      padding: 0;
      min-height: 100vh;
    }
    .sheet {
      width: 21cm; min-height: 29.7cm;
      margin: 0 auto;
      background: white;
      padding: 2cm 2.2cm 2.5cm 2.5cm;
      position: relative;
      /* Ruled paper */
      background-image: linear-gradient(rgba(180,200,240,0.25) 1px, transparent 1px);
      background-size: 100% 0.85cm;
      background-position: 0 1.8cm;
      box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    }
    .sheet::before {
      content:''; position:absolute; top:0; bottom:0; left:2cm;
      width:1.5px; background:rgba(230,140,140,0.5);
    }
    h1 { font-size: 16pt; text-align: center; font-family: Calibri, sans-serif; font-weight: bold; margin-bottom: 8pt; }
    .date { text-align: right; font-size: 10pt; color: #666; margin-bottom: 8pt; }
    .instruction { font-size: 11pt; text-decoration: underline; font-weight: bold; margin-bottom: 14pt; line-height: 1.5; }
    h2 { font-size: 14pt; font-family: Calibri, sans-serif; font-weight: bold; text-align: center; color: #E8734A; margin-bottom: 12pt; }
    .body { font-size: 11pt; text-align: justify; line-height: 2; }
    .deco { position:absolute; font-size: 80px; opacity: 0.1; user-select:none; }
    @media print {
      body { background: white; }
      .sheet { box-shadow: none; margin:0; width:100%; }
    }
  </style>
  </head><body>
  <div class="sheet">
    ${state.showImages ? `
      <div class="deco" style="top:8%;right:3%;">${emojis[0]||'🌟'}</div>
      <div class="deco" style="top:30%;left:0.5%;opacity:0.08;">${emojis[1]||'⭐'}</div>
      <div class="deco" style="bottom:15%;right:2%;opacity:0.09;">${emojis[2]||'🌙'}</div>
      <div class="deco" style="top:60%;left:1%;opacity:0.07;">${emojis[3]||'✨'}</div>
    ` : ''}
    <h1>Étude de langue : français</h1>
    ${dateStr ? `<div class="date">${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)}</div>` : ''}
    <div class="instruction">Recopie le texte et conjugue les verbes entre parenthèses au temps qui convient et écris-les sur les lignes.</div>
    <h2>${story.title}</h2>
    <div class="body">${bodyHTML}</div>
  </div>
  <script>window.onload=()=>window.print();<\/script>
  </body></html>`);
  w.document.close();
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  // Register SW
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(()=>{});
  }

  // Default selections
  state.level = 'CP';
  state.charCount = 1;
  state.genre = 'Conte';
  state.tense = 'present';
  state.sentenceCount = 10;
  state.showImages = true;

  renderForm();
  showPage('page-form');
});
