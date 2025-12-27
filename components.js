// 1. 導航欄組件 (Navbar)
const navbarHTML = `
<nav class="fixed w-full z-50 top-0 nav-blur border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
                <a href="index.html" class="flex items-center">
                    <img
                        src="/iride/image/iRide_白.png"
                        alt="iRide主頁"
                        class="h-6 w-auto md:h-7 lg:h-8"
                    />
                </a>
            </div>

            <div class="hidden md:flex items-center space-x-10 text-lg">
                <a href="index.html" data-i18n="nav_home" class="text-lg font-medium text-gray-300 hover:text-white transition-colors">首頁</a>

                <a href="about.html" data-i18n="nav_about" class="text-lg font-medium text-gray-300 hover:text-white transition-colors">關於我們</a>

                <div class="relative dropdown group py-4"> 
                    <a href="iRide.html" class="text-lg font-medium text-gray-300 group-hover:text-white flex items-center transition-colors">
                        <span data-i18n="nav_iRide">產品列表</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 ml-1"></i>
                    </a>
                    <div class="dropdown-menu hidden absolute top-full left-0 w-56 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl py-2">
                            <div class="relative nested-dropdown px-4 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white cursor-default flex justify-between items-center group/nested">
                                <span data-i18n="cat_moto">摩托車通訊系統</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>
                                <div class="nested-menu">
                                    <div class="w-40 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl py-2">
                                        <a href="JX01.html" class="block px-4 py-2 text-base text-gray-400 hover:text-white hover:bg-white/5">JX01</a>
                                        <a href="JX03.html" class="block px-4 py-2 text-base text-gray-400 hover:text-white hover:bg-white/5">JX03</a>
                                        <a href="JX09.html" class="block px-4 py-2 text-base text-gray-400 hover:text-white hover:bg-white/5">JX09</a>
                                    </div>
                                </div>
                            </div>
                            <div class="relative nested-dropdown px-4 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white cursor-default flex justify-between items-center group/nested">
                                <span data-i18n="cat_sport">BIKTOK系統</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>
                                <div class="nested-menu">
                                    <div class="w-40 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl py-2">
                                        <a href="BT30.html" class="block px-4 py-2 text-base text-gray-400 hover:text-white hover:bg-white/5">BT30</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <div class="relative dropdown group py-4">
                    <a class="text-lg font-medium text-gray-300 group-hover:text-white flex items-center transition-colors">
                        <span data-i18n="nav_support">技術支援</span><i data-lucide="chevron-down" class="w-4 h-4 ml-1"></i>
                    </a>
                    <div class="dropdown-menu hidden absolute top-full left-0 w-56 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl py-2">
                        <a href="Manual.html" data-i18n="sup_Manual" class="block px-4 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white">說明書下載</a>
                        <a href="https://www.youtube.com/@summitech2014" class="flex items-center px-4 py-2 text-base text-gray-300 hover:bg-white/10 hover:text-white">
                            <span data-i18n="sup_video">YouTube 影片教學</span>
                            <i data-lucide="external-link" class="w-3 h-3 ml-auto opacity-50"></i>
                        </a>
                    </div>
                </div>

                <a href="buy.html" data-i18n="nav_shop" class="text-lg font-medium text-gray-300 hover:text-white transition-colors">線上商城</a>
            </div>

            <div class="flex items-center space-x-3">
                <div class="flex items-center space-x-1 text-sm font-medium text-gray-500">
                    <button onclick="changeLang('zh')" class="hover:text-white">繁</button>
                    <span>|</span>
                    <button onclick="changeLang('en')" class="hover:text-white">EN</button>
                    <span>|</span>
                    <button onclick="changeLang('jp')" class="hover:text-white">JP</button>
                </div>

                <!-- Mobile menu button (right-top on small screens) -->
                <button
                    type="button"
                    class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-gray-200 hover:text-white hover:bg-white/5 transition"
                    aria-label="Open menu"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onclick="toggleMobileMenu()"
                >
                    <i data-lucide="menu" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
        <!-- Mobile menu panel -->
        <div id="mobile-menu" class="md:hidden hidden border-t border-white/10 bg-black/40 nav-blur">
            <div class="px-2 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
                <a href="index.html" data-i18n="nav_home" class="block px-3 py-2  rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">首頁</a>
                <a href="about.html" data-i18n="nav_about" class="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">關於我們</a>

                <!-- Mobile accordion: Products -->
                <div class="px-0">
                    <button
                        type="button"
                        class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white"
                        aria-controls="mobile-products-panel"
                        aria-expanded="false"
                        onclick="toggleAccordion('mobile-products-panel', this)"
                    >
                        <span data-i18n="nav_iRide">產品列表</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 transition-transform"></i>
                    </button>

                    <div id="mobile-products-panel" class="hidden pl-3 space-y-1 pt-1">
                        <a href="iRide.html" class="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">
                            <span data-i18n="nav_iRide">產品列表</span>
                        </a>

                        <!-- Nested accordion: Motorcycle Systems -->
                        <button
                            type="button"
                            class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white"
                            aria-controls="mobile-moto-panel"
                            aria-expanded="false"
                            onclick="toggleAccordion('mobile-moto-panel', this)"
                        >
                            <span data-i18n="cat_moto">摩托車通訊系統</span>
                            <i data-lucide="chevron-down" class="w-4 h-4 transition-transform"></i>
                        </button>
                        <div id="mobile-moto-panel" class="hidden pl-3 space-y-1">
                            <a href="JX01.html" class="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">JX01</a>
                            <a href="JX03.html" class="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">JX03</a>
                            <a href="JX09.html" class="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">JX09</a>
                        </div>

                        <!-- Nested accordion: BIKTOK Systems -->
                        <button
                            type="button"
                            class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-white"
                            aria-controls="mobile-biktok-panel"
                            aria-expanded="false"
                            onclick="toggleAccordion('mobile-biktok-panel', this)"
                        >
                            <span data-i18n="cat_sport">BIKTOK系統</span>
                            <i data-lucide="chevron-down" class="w-4 h-4 transition-transform"></i>
                        </button>
                        <div id="mobile-biktok-panel" class="hidden pl-3 space-y-1">
                            <a href="BT30.html" class="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">BT30</a>
                        </div>
                    </div>
                </div>

                <!-- Mobile accordion: Support -->
                <div class="px-0">
                    <button
                        type="button"
                        class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white"
                        aria-controls="mobile-support-panel"
                        aria-expanded="false"
                        onclick="toggleAccordion('mobile-support-panel', this)"
                    >
                        <span data-i18n="nav_support">技術支援</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 transition-transform"></i>
                    </button>

                    <div id="mobile-support-panel" class="hidden pl-3 space-y-1 pt-1">
                        <a href="Manual.html" data-i18n="sup_Manual" class="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">說明書下載</a>
                        <a href="https://www.youtube.com/@summitech2014" data-i18n="sup_video" class="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">YouTube 影片教學</a>
                    </div>
                </div>

                <a href="buy.html" data-i18n="nav_shop" class="block px-3 py-2 rounded-lg text-base font-medium text-gray-200 hover:bg-white/5 hover:text-white" onclick="closeMobileMenu()">線上商城</a>
            </div>
        </div>
    </div>
</nav>
`;

// 2. 頁腳組件 (Footer)
const footerHTML = `
<footer id="contact" class="bg-zinc-950 py-8 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div class="col-span-1 md:col-span-2">
                <img
                    src="image/iRide_白.png"
                    alt="iRide"
                    class="h-6 w-auto md:h-7 lg:h-8"
                />
                <p data-i18n="contact_about" class="text-gray-500 max-w-sm mb-6">致力於打造全球領先的戶外與運動通訊系統，讓冒險者的聲音不再孤單。</p>
            </div>
            <div>
                <h4 data-i18n="contact" class="text-white font-bold mb-4">聯繫我們</h4>
                <ul class="text-gray-500 space-y-2 text-sm">
                    <li data-i18n="contact_date">客服時間：週一至週五 09:00–18:00</li>
                    <li data-i18n="contact_rest">（國定假日及例假日暫停服務）</li>                       
                    <li data-i18n="contact_email">電子郵件: summitech2014@gmail.com</li>
                    <li>
                        <a href="https://lin.ee/3pjykdt" target="_blank" class="hover:text-white transition-colors flex items-center">
                            <span data-i18n="contact_line">Line官方帳號</span>
                            <i data-lucide="external-link" class="w-3 h-3 ml-1 opacity-50"></i>
                        </a>
                    </li>
                    <li data-i18n="contact_add">地址: 新北市林口區文化二路一段266號B1-8</li>
                </ul>
            </div>
            <div>
                <h4 data-i18n="contact_sns" class="text-white font-bold mb-4">社群媒體</h4>
                <div class="flex space-x-4 text-gray-500">
                    <a href="https://www.facebook.com/profile.php?id=61584105245079&locale=zh_TW" class="hover:text-white"><i data-lucide="facebook"></i></a>
                    <a href="https://www.instagram.com/summitech2014/" class="hover:text-white"><i data-lucide="instagram"></i></a>
                    <a href="https://x.com/summitech2014" class="hover:text-white"><i data-lucide="x"></i></a>
                    <a href="https://www.youtube.com/@summitech2014" class="hover:text-white"><i data-lucide="youtube"></i></a>
                    <a href="#" class="hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="pt-8 border-t border-white/5 text-center text-xs text-gray-600">
            <p>&copy; 2014 summit. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

// 3.語言字典
const langData = {
    'zh': {
        //head
        'nav_home':'首頁','nav_about': '關於我們', 'nav_support': '技術支援',
        'nav_iRide':'產品列表', 'nav_shop': '線上商城',
        'cat_moto': 'J-TREK 系列', 'cat_sport': 'BIKTOK 系列',
        'sup_Manual': '說明書下載', 'sup_jtrek': 'J-TREK 說明書下載', 'sup_video': 'YouTube 影片教學',
        //body
        'hero_h1': '溝通，無遠弗屆', 'hero_p': '頂尖通訊技術與極致工業設計的完美結合。',
        'about_iride': '專注於運動美學與輕量化通訊，讓每一位熱愛冒險的靈魂都能自在交流。',
        'about_jtrek': '為極限騎行而生。搭載最新 Qualcomm 技術，在風切與引擎聲中守護最純粹的對話。',
        //footer
        'contact':'聯繫我們', 'contact_date':'客服時間：週一至週五 09:00–18:00', 'contact_rest':'（國定假日及例假日暫停服務）',
        'contact_email':'電子郵件: summitech2014@gmail.com','contact_line':'Line官方帳號',
        'contact_add':'地址: 新北市林口區文化二路一段266號B1-8', 'contact_sns':'社群媒體',
        'contact_about':'致力於打造全球領先的戶外與運動通訊系統，讓冒險者的聲音不再孤單。'
    },
    'en': {
        //head
        'nav_home':'Home','nav_about': 'About Us', 'nav_support': 'Support',
        'nav_iRide':'Products', 'nav_shop': 'Store',
        'cat_moto': 'J-TREK Series', 'cat_sport': 'BIKTOK Series',
        'sup_Manual': 'Manuals', 'sup_jtrek': 'J-TREK Manuals', 'sup_video': 'Video Tutorials',
        //body

        //footer
        'contact':'Contact Us','contact_date':'Support Hours: Mon–Fri 9:00 AM–6:00 PM', 'contact_rest':'(Closed on public holidays)',
        'contact_email':'Email: summitech2014@gmail.com','contact_line':'LINE Official Account',
        'contact_add':'Address: B1-8, No. 266, Sec. 1, Wenhua 2nd Rd.,Linkou Dist., New Taipei City, Taiwan','contact_sns':'Social Media',
        'contact_about':'Building world-class outdoor and sports communication systems—so adventurers are never alone.'        
    },
    'jp': {
        //head
        'nav_home':'ホーム','nav_about': '会社案内', 'nav_support': 'サポート',
        'nav_iRide':'製品一覧', 'nav_shop': 'オンラインストア',
        'cat_moto': 'J-TREK シリーズ', 'cat_sport': 'BIKTOK シリーズ',
        'sup_Manual': '説明書', 'sup_jtrek': 'J-TREK 説明書', 'sup_video': '動画チュートリアル',

        //footer
        'contact':'お問い合わせ','contact_date':'サポート時間：平日 9:00～18:00','contact_rest':'（土日・祝日は休業）',
        'contact_email':'メール: summitech2014@gmail.com','contact_line':'LINE公式アカウント',
        'contact_add':'住所：台湾 新北市 林口区 文化二路一段266号 B1-8','contact_sns':'公式SNS',
        'contact_about':'アウトドア・スポーツ向け通信システムの可能性を広げ、冒険者の声をつなぎ続けます。'
    }
};

// 4. 自動注入與初始化功能
function initPage() {
    const navElem = document.getElementById('nav-placeholder');
    const footerElem = document.getElementById('footer-placeholder');

    if (navElem) navElem.innerHTML = navbarHTML;
    if (footerElem) footerElem.innerHTML = footerHTML;

    lucide.createIcons(); // 必須在注入 HTML 後執行
    changeLang(localStorage.getItem('lang') || 'zh');
}

function changeLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const val = (langData && langData[lang]) ? langData[lang][key] : undefined;
        if (val === undefined || val === null) return;

        // Support line breaks: allow either "<br>" in strings or "\n" in dictionaries.
        const html = String(val).replace(/\n/g, '<br>');

        // Inputs/Textareas: translate placeholder if present, otherwise value
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            if (el.hasAttribute('placeholder')) {
                el.setAttribute('placeholder', String(val));
            } else {
                el.value = String(val);
            }
            return;
        }

        // Default: render as HTML so <br> works
        el.innerHTML = html;
    });

    localStorage.setItem('lang', lang);
    lucide.createIcons();
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;

    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
        menu.classList.remove('hidden');
        lucide.createIcons();
    } else {
        menu.classList.add('hidden');
    }

    // Update aria-expanded on the button
    const btn = document.querySelector('button[aria-controls="mobile-menu"]');
    if (btn) btn.setAttribute('aria-expanded', String(isHidden));
}

function toggleAccordion(panelId, btnEl) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const isHidden = panel.classList.contains('hidden');
    // toggle panel
    if (isHidden) panel.classList.remove('hidden');
    else panel.classList.add('hidden');

    // aria state
    if (btnEl) btnEl.setAttribute('aria-expanded', String(isHidden));

    // rotate chevron
    const icon = btnEl ? btnEl.querySelector('i[data-lucide]') : null;
    if (icon) {
        if (isHidden) icon.classList.add('rotate-180');
        else icon.classList.remove('rotate-180');
    }
    lucide.createIcons();
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    menu.classList.add('hidden');

    // Collapse accordions when closing the menu
    ['mobile-products-panel', 'mobile-support-panel', 'mobile-moto-panel', 'mobile-biktok-panel'].forEach(id => {
        const p = document.getElementById(id);
        if (p) p.classList.add('hidden');
    });

    document.querySelectorAll(
        'button[aria-controls="mobile-products-panel"], button[aria-controls="mobile-support-panel"], button[aria-controls="mobile-moto-panel"], button[aria-controls="mobile-biktok-panel"]'
    ).forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const ic = b.querySelector('i[data-lucide]');
        if (ic) ic.classList.remove('rotate-180');
    });

    const btn = document.querySelector('button[aria-controls="mobile-menu"]');
    if (btn) btn.setAttribute('aria-expanded', 'false');
}

window.onload = () => {
    const lang = localStorage.getItem('lang') || 'zh';
    if (typeof changeLang === 'function') {
        changeLang(lang);
    }
};

document.addEventListener("DOMContentLoaded", initPage);
