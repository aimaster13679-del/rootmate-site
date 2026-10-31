#!/usr/bin/env python3
"""Builds the NeuMarry website (index, privacy, terms, delete-account) from src/."""
import os, re, json
H = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.join(H, '..')
SUPA_URL = 'https://ndxlguuywifovqdzdvtq.supabase.co'
SUPA_KEY = 'sb_publishable_oBR1e77Tx1mNysmxcZ2cgw_qDOpS4gt'
SITE = 'https://neumarry.com/'
EMAIL = 'support@neumarry.com'

def rd(n): return open(os.path.join(H, n), encoding='utf-8').read()
s = rd('landing_src.html').replace('/*__PORTRAIT__*/', rd('portrait.js')).replace('/*__COUNTRIES__*/', rd('countries_names.js'))

# Content fixes for what is live today
fix = [
 ('Then phone, government ID and a live selfie, so everyone you meet is real.', 'Then a government ID and a live selfie, so everyone you meet is real.'),
 ('daily matches, chats, video calls and event seats', 'daily matches, chats and event seats'),
 ('Chat and video call, without sharing your number</li>', 'Chat in the app, without sharing your number</li>'),
 ('unlocks names and photos, interests, chat and video calls, daily picks, event guest lists and Quick Match, from CA$80 a month.', 'unlocks names and photos, interests, chat, daily picks and event guest lists, from CA$80 a month.'),
 ('Yes. When you and a match are ready, you can set up a family video call in the app. Parents join with a link from any country, on a phone or computer, without installing anything, and the app shows the time for both families.', 'Yes. From Me in the app you can share a private family biodata link: your parents open it in any country, on a phone or computer, without installing anything. The link lasts 7 days and you can stop it at any time.'),
 ("verified by phone, government ID and a live selfie.", "verified with a government ID and a live selfie."),
 ("'The full Terms are in the app, under Me, then Legal and privacy.'", "'Read the full Terms of Service on this website.'"),
 ('Open Me, then Legal and privacy, then Delete my account.', 'Open Me, then Delete my account.'),
 ("const BACKEND={url:'',anonKey:''};", "const BACKEND={url:'%s',anonKey:'%s'};" % (SUPA_URL, SUPA_KEY)),
 ("headers:{'apikey':BACKEND.anonKey,'Authorization':`Bearer ${BACKEND.anonKey}`,'Content-Type':'application/json','Prefer':'return=minimal'}", "headers:{'apikey':BACKEND.anonKey,'Content-Type':'application/json','Prefer':'return=minimal'}"),
 ("await send('partners',row)", "await send('work_with_us',row)"),
 ('Every member verifies a phone number, a government ID and a live selfie before they can send interests or messages. Members can also be vouched for by people who know them, and every report is reviewed by a person.', 'Every member verifies a government ID and a live selfie before they can send interests or messages, and every report is reviewed by a person.'),
 ('When you both say yes, a RootMate host sets up a family call for both sides.', 'When you both say yes, a RootMate host helps both families connect.'),
 ('.ctaband{', '.links a.hl{background:#FFF3DC;border:1px solid #E7C27A;color:#8A5A12;border-radius:999px;padding:6px 12px;font-weight:700}.ctaband{'),
 ('<a href="#partners">Work with us</a><a href="#faq">FAQ</a>', '<a class="hl" href="work-with-us.html">Work with us</a><a href="#faq">FAQ</a>'),
 ('<h1>Your person from <em>back home</em> might live ten minutes away.</h1>', '<h1>Every person here is <em>real.</em> Proven.</h1>'),
 ('Both from Gujarat', 'Same roots'),
 ('Lives 8 km apart · ID verified', 'ID · selfie · roots · city checked'),
 ('<div class="proof"><div class="wrap">\n  <div><b>2.57 million</b><span>South Asians live in Canada, the country’s largest racialized group</span></div>\n  <div><b>46%</b><span>of them live in the Toronto area, where they are 19% of the population</span></div>\n  <div><b>32</b><span>is their median age, nine years younger than Canada overall</span></div>\n  <p class="src">Source: <a href="https://www150.statcan.gc.ca/n1/pub/89-657-x/89-657-x2025007-eng.htm" target="_blank" rel="noopener">Statistics Canada, 2021 Census</a></p>\n</div></div>', '<div class="proof"><div class="wrap">\n  <div><b>4 checks</b><span>on every member: government ID, live selfie, roots and the city they live in</span></div>\n  <div><b>0</b><span>unverified profiles shown. Only fully verified members appear to others</span></div>\n  <div><b>Blocked</b><span>money requests in chat, the most common trick of romance scams</span></div>\n  <p class="src">Free tool: <a href="is-this-profile-real.html">Is this matrimony profile real? Take the 1-minute check</a></p>\n</div></div>'),
 ('<span class="pill"><i></i>Launching in Toronto · November 2026</span>', '<span class="pill"><i></i>Matrimony for life abroad · Launching in Toronto, November 2026</span>'),
 ('RootMate is matrimony for people living abroad. Meet verified people', 'RootMate is a matrimony app for people living abroad. Meet verified people'),
 ('Hosted Family Mixers with parent tickets, and a Family Circle where parents can suggest profiles. They never chat as you.', 'Hosted Family Mixers with parent tickets, and soon a Family Circle where parents can suggest profiles. They never chat as you.'),
 ('Parents can sign up on your behalf, come to family events with their own ticket, and join a Family Circle to suggest profiles.', 'Parents can sign up on your behalf and come to family events with their own ticket. A Family Circle where they can suggest profiles is coming soon.'),

 # No video calls in the app yet; the web app is live.
 ('<b>Quick Match<em>December</em></b><p>Both say yes, then a 5-minute video intro the same day. No phone numbers shared.</p>',
  '<b>Family biodata link<em>New</em></b><p>Share your profile with your parents in any country through a private 7-day link. No phone numbers shared.</p>'),
 ('<p>No. The website tells you about RootMate and lets you join the waitlist. Signing up, matching, chats and event bookings all happen in the app for Android and iPhone, so every member is verified on their own phone.</p>',
  '<p>Yes. Open neumarry.com/app in any web browser, on your phone or computer, to create your profile, get verified, see your matches and chat. The Android app uses the same account.</p>'),

 # The web app is live at /app/: point the calls to action there.
 ('<a class="btn primary sm" href="#app">Get the app</a>', '<a class="btn primary sm" href="app/">Open the app</a>'),
 ('<div class="ctas"><a class="btn primary" href="#app">Get the app</a><a class="btn ghost" href="#join">Join the waitlist</a></div>',
  '<div class="ctas"><a class="btn primary" href="app/">Create your free profile</a><a class="btn ghost" href="/sample-verified-profile.html">See a sample verified profile</a></div>'),
 ('<p class="avail">For Android and iPhone · Google Play first, App Store soon after</p>',
  '<p class="avail">Works now in your web browser · Android on Google Play soon, iPhone after</p>'),
 ('<a class="btn primary" href="#app" id="reserve-open">Reserve your seat in the app</a>', '<a class="btn primary" href="app/" id="reserve-open">Reserve your seat in the app</a>'),
 ('<h2>Your story could start at the first Family Mixer.</h2><a class="btn" href="#app">Get the app</a>',
  '<h2>Your story could start at the first Family Mixer.</h2><a class="btn" href="app/">Create your free profile</a>'),
 ('Your profile, verification, daily matches, chats and event seats all live in the RootMate app. This website is only here to tell you about it.',
  'Your profile, verification, daily matches, chats and event seats all live in the RootMate app. Use it now in any web browser, on your phone or computer. The Android and iPhone apps use the same account.'),
 ('<div class="stores">\n      <a class="store" id="st-play"',
  '<div class="stores">\n      <a class="store" id="st-web" href="app/"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" fill="none" stroke="currentColor" stroke-width="2"/></svg><span><small>Use it now in your</small><b>Web browser</b></span></a>\n      <a class="store" id="st-play"'),
 ('<p class="note" id="st-note">Not live yet. Join the waitlist below and we’ll email you the download link the day it goes live.</p>',
  '<p class="note" id="st-note">The phone apps are not live yet. Join the waitlist below and we’ll email you the download link the day they go live.</p>'),
]
for a, b in fix:
    assert a in s, 'missing: ' + a[:60]
    s = s.replace(a, b)
s = s.replace('RootMate', 'NeuMarry')
s = s.replace('<title>NeuMarry Toronto</title>', '<title>NeuMarry: Matrimony &amp; Marriage App for People Living Abroad</title>')
assert 'RootMate' not in s
# Full document around the fragment
i = s.index('</style>') + len('</style>')
head, body = s[:i], s[i:]
GUIDES = ['matrimony-abroad-canada', 'toronto-matrimony', 'matrimony-events-toronto', 'community-matrimony-canada',
          'matrimony-for-parents', 'verified-matrimony', 'matrimony-abroad-usa-uk', 'find-life-partner-abroad', 'safe-matrimony-for-women']
def guide_meta(slug):
    t = rd('guides/%s.html' % slug)
    get = lambda k: re.search(r'<!--%s: (.*?)-->' % k, t).group(1)
    return dict(slug=slug, title=get('title'), desc=get('desc'), short=get('short'), body=re.sub(r'<!--.*?-->\n?', '', t))
G = [guide_meta(g) for g in GUIDES]
PAGES = ['about', 'how-matching-works', 'pricing', 'privacy-and-safety', 'faq', 'is-this-profile-real', 'sample-verified-profile', 'brampton-matrimony', 'mississauga-matrimony',
         'uk-matrimony', 'usa-matrimony', 'australia-matrimony', 'uae-matrimony']
def page_meta(slug):
    t = rd('pages/%s.html' % slug)
    get = lambda k: re.search(r'<!--%s: (.*?)-->' % k, t).group(1)
    return dict(slug=slug, title=get('title'), desc=get('desc'), short=get('short'), kind=get('kind'), body=re.sub(r'<!--.*?-->\n?', '', t))
P = [page_meta(p) for p in PAGES]
TODAY = '2026-10-22'
OG = SITE + 'og-image.png'
def esc(x): return x.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;')
def social(title, desc, url, kind='website'):
    return (f'<link rel="canonical" href="{url}"><meta name="robots" content="index,follow,max-image-preview:large">'
            f'<meta property="og:type" content="{kind}"><meta property="og:site_name" content="NeuMarry"><meta property="og:locale" content="en_CA">'
            f'<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(desc)}"><meta property="og:url" content="{url}">'
            f'<meta property="og:image" content="{OG}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">'
            f'<meta property="og:image:alt" content="NeuMarry, verified matrimony for people living abroad">'
            f'<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{esc(title)}"><meta name="twitter:description" content="{esc(desc)}"><meta name="twitter:image" content="{OG}">'
            f'<link rel="icon" href="icon-192.png" sizes="192x192"><link rel="apple-touch-icon" href="apple-touch-icon.png"><meta name="theme-color" content="#FFF8F6">')
def ld(obj): return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') + '</script>'
def faq_from(html):
    out = []
    for q, a in re.findall(r'<details><summary>(.*?)</summary>(.*?)</details>', html, re.S):
        q = re.sub(r'<[^>]+>', '', q).strip(); a = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', a)).strip()
        if q and a: out.append({'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}})
    return out
SOCIAL = [('Instagram', 'https://www.instagram.com/neumarry_match'), ('Facebook', 'https://www.facebook.com/profile.php?id=61595614954211'), ('LinkedIn', 'https://www.linkedin.com/company/144030892/')]
SOCIAL_LINKS = ''.join(f'<a class="link" href="{u}" target="_blank" rel="noopener me">{n}</a>' for n, u in SOCIAL)
ORG = {'@type': 'Organization', '@id': SITE + '#org', 'name': 'NeuMarry', 'url': SITE, 'logo': SITE + 'icon-512.png', 'email': EMAIL,
       'description': 'Verified matrimony app for people living away from the country they grew up in.', 'sameAs': [u for n, u in SOCIAL]}
HOME_TITLE = 'NeuMarry: Matrimony & Marriage App for People Living Abroad'
HOME_DESC = 'Verified matrimony for people living away from the country they grew up in, from every country and community. Match on roots, city and values. Free to join.'
KEYWORDS = 'matrimony, matrimonial, marriage app, matrimony abroad, expat matrimony, expat marriage, immigrant matrimony, verified matrimony app, matrimony Canada, matrimony USA, matrimony UK, matrimony UAE, Dubai matrimony, matrimony Australia, Indian matrimony Canada, shaadi, marriage, rishta, life partner, bride, groom, Toronto matrimony, Brampton matrimony, Gujarati matrimony, Punjabi matrimony, matrimony app'
meta = ('<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        f'<meta name="description" content="{esc(HOME_DESC)}"><meta name="keywords" content="{KEYWORDS}">' + social(HOME_TITLE, HOME_DESC, SITE))
legal_links = '<a class="link" href="privacy.html">Privacy Policy</a><a class="link" href="terms.html">Terms of Service</a><a class="link" href="delete-account.html">Delete account</a><a class="link" href="child-safety.html">Child safety</a>'
body = body.replace('<a class="link" href="#delete-account">Delete account</a>', '<a class="link" href="delete-account.html">Delete account</a><a class="link" href="privacy.html">Full Privacy Policy</a><a class="link" href="terms.html">Full Terms</a></span><span class="legal-links">' + SOCIAL_LINKS)
guide_links = ''.join(f'<a href="{g["slug"]}.html">{g["short"]}</a>' for g in G)
guides_sec = ('<section class="sec" id="guides" style="padding-top:0"><div class="wrap"><p class="eyebrow">Guides</p>'
              '<h2>Matrimony abroad, explained.</h2><nav class="guides" aria-label="Guides">' + guide_links + '</nav></div></section>')
assert '</main>' in body
body = body.replace('</main>', guides_sec + '</main>', 1)
faq = faq_from(body)
home_ld = {'@context': 'https://schema.org', '@graph': [
    ORG,
    {'@type': 'WebSite', '@id': SITE + '#site', 'url': SITE, 'name': 'NeuMarry', 'publisher': {'@id': SITE + '#org'}, 'inLanguage': 'en'},
    {'@type': 'MobileApplication', 'name': 'NeuMarry', 'operatingSystem': 'ANDROID', 'applicationCategory': 'LifestyleApplication',
     'description': HOME_DESC, 'url': SITE, 'publisher': {'@id': SITE + '#org'}, 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'CAD'}},
    {'@type': 'WebApplication', 'name': 'NeuMarry', 'operatingSystem': 'Any web browser', 'applicationCategory': 'LifestyleApplication', 'browserRequirements': 'Requires JavaScript',
     'description': HOME_DESC, 'url': SITE + 'app/', 'publisher': {'@id': SITE + '#org'}, 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'CAD'}},
    {'@type': 'Event', 'name': 'NeuMarry Family Mixer, Toronto', 'startDate': '2026-11-28T17:30:00-05:00', 'endDate': '2026-11-28T20:30:00-05:00',
     'eventStatus': 'https://schema.org/EventScheduled', 'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
     'description': 'An evening of conversation and dinner for verified singles aged 18 to 38 looking for marriage. Parents welcome.',
     'image': [OG], 'url': SITE + 'matrimony-events-toronto.html',
     'location': {'@type': 'Place', 'name': 'Partner restaurant in the Greater Toronto Area', 'address': {'@type': 'PostalAddress', 'addressLocality': 'Toronto', 'addressRegion': 'ON', 'addressCountry': 'CA'}},
     'organizer': {'@id': SITE + '#org'},
     'offers': {'@type': 'Offer', 'price': '99', 'priceCurrency': 'CAD', 'availability': 'https://schema.org/InStock', 'validFrom': '2026-10-22T00:00:00-04:00', 'url': SITE + 'matrimony-events-toronto.html'}},
] + ([{'@type': 'FAQPage', 'mainEntity': faq}] if faq else [])}
head = head.replace('</style>', '.guides{margin-top:22px;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px}.guides a{display:block;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:14px 16px;font-weight:700;color:var(--ink);text-decoration:none;box-shadow:var(--shadow)}.guides a:hover{border-color:var(--rose);color:var(--rose-deep)}</style>', 1) + ld(home_ld)
# Language switch in the home header (French copy in fr/)
HOME_LANG_CSS = ('<style>header .langh{margin-left:auto;font-weight:700;font-size:14px;color:var(--rose-deep);text-decoration:none;'
                 'border:1px solid var(--line);border-radius:999px;padding:7px 11px;line-height:1;white-space:nowrap}header .langh:hover{border-color:var(--rose)}'
                 'header .langh~.btn{margin-left:0}@media (min-width:761px){header .langh{margin-left:0}}'
                 '.langhero{display:none}@media (max-width:420px){header .langh{display:none}header .langh~.btn{margin-left:auto}'
                 '.langhero{display:flex;justify-content:flex-end;margin:0 0 12px}.langhero .langh{margin:0;font-weight:700;font-size:14px;color:var(--rose-deep);text-decoration:none;'
                 'border:1px solid var(--line);border-radius:999px;padding:7px 12px;line-height:1;background:var(--surface)}}</style>')
def home_lang(href, code, label):
    return (f'<a class="langh" href="{href}" hreflang="{code}" lang="{code}" aria-label="{label}" '
            f'onclick="try{{localStorage.setItem(\'rm.lang\',\'{code}\')}}catch(e){{}}">{code.upper()}</a>')
OPEN_BTN = '<a class="btn primary sm" href="app/">Open the app</a>'
assert body.count(OPEN_BTN) == 1
HOME_HEAD = head.replace('<meta name="claude:viewport-fit-sides" content="cover">', '')
# Consent error goes on its own line under the checkbox text (it was squeezed beside it)
HOME_HEAD = HOME_HEAD.replace('</style>', '.check{flex-wrap:wrap}.check>span:not(.err){flex:1 1 0;min-width:0}.check .err{flex-basis:100%;padding-left:30px}</style>', 1)
HOME_BODY = body
HOME_ALT = (f'<link rel="alternate" hreflang="en" href="{SITE}"><link rel="alternate" hreflang="fr" href="{SITE}fr/">'
            f'<link rel="alternate" hreflang="x-default" href="{SITE}">')
body = body.replace(OPEN_BTN, home_lang('fr/', 'fr', 'Lire en français') + OPEN_BTN)
HERO_START = '<section class="hero" id="hero"><div class="wrap">\n  <div>'
assert body.count(HERO_START) == 1
body = body.replace(HERO_START, HERO_START + '<p class="langhero">' + home_lang('fr/', 'fr', 'Lire en français').replace('>FR<', '>Français<') + '</p>')
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write('<!doctype html><html lang="en"><head>' + meta + HOME_ALT + HOME_HEAD + HOME_LANG_CSS + '</head><body>' + body + '</body></html>')

FOOT_GUIDES = ''.join(f'<a class="link" href="{g["slug"]}.html">{g["short"]}</a>' for g in P + G)
FR_DIR = os.path.join(H, 'fr', 'pages')
FR_FILES = sorted(f[:-5] for f in os.listdir(FR_DIR) if f.endswith('.html')) if os.path.isdir(FR_DIR) else []
FR_LEGAL_DIR = os.path.join(H, 'fr', 'legal')
FR_LEGAL = [x for x in ('privacy', 'terms') if os.path.exists(os.path.join(FR_LEGAL_DIR, x + '.body.html'))] if FR_FILES else []
FR_SLUGS = FR_FILES + (['work-with-us', 'event-host-toronto'] if FR_FILES else []) + FR_LEGAL
def alternates(name):
    if name not in FR_SLUGS: return ''
    return (f'<link rel="alternate" hreflang="en" href="{SITE}{name}.html"><link rel="alternate" hreflang="fr" href="{SITE}fr/{name}.html">'
            f'<link rel="alternate" hreflang="x-default" href="{SITE}{name}.html">')
LANG_CSS = ('<style>.langsw{float:right;margin:0 0 0 12px;font-size:14px;font-weight:700}.langsw a{color:var(--rose);text-decoration:none;border:1px solid var(--line);border-radius:999px;padding:3px 10px}'
            '.langsw a:hover{border-color:var(--rose)}nav .sh{display:none}@media (max-width:520px){nav a.ev{display:none}nav .lg{display:none}nav .sh{display:inline}}</style>')
def lang_link(href, code, label, text):
    return (f'<p class="langsw"><a href="{href}" hreflang="{code}" lang="{code}" aria-label="{label}" '
            f'onclick="try{{localStorage.setItem(\'rm.lang\',\'{code}\')}}catch(e){{}}">{text}</a></p>')
def shell(name, title_tag, desc, main, extra_head='', kind='website'):
    url = SITE + ('' if name == 'index' else name + '.html')
    if name in FR_SLUGS: extra_head += alternates(name) + LANG_CSS
    html = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title_tag}</title><meta name="description" content="{esc(desc)}">{social(title_tag, desc, url, kind)}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600&family=Nunito+Sans:wght@400;600;700;800&display=swap">
<link rel="stylesheet" href="legal.css">{extra_head}</head><body>
<header><div class="wrap"><a class="brand" href="./"><svg viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>NeuMarry</a><nav><a href="matrimony-events-toronto.html">Events</a><a class="hl" href="work-with-us.html">Work with us</a><a href="app/">Open the app</a></nav></div></header>
<main><div class="wrap">{lang_link("fr/" + name + ".html", "fr", "Lire cette page en français", "Français") if name in FR_SLUGS else ""}{main}</div></main>
<footer><div class="wrap"><div class="fg">{FOOT_GUIDES}</div><span>NeuMarry · © 2026</span><span>Members must be 18 or older</span>{legal_links}<a class="link" href="mailto:{EMAIL}">{EMAIL}</a>{SOCIAL_LINKS}</div></footer>
</body></html>'''
    open(os.path.join(OUT, name + '.html'), 'w', encoding='utf-8').write(html)
def page(name, title, desc):
    b = rd(name + '.body.html')
    crumbs = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE},
        {'@type': 'ListItem', 'position': 2, 'name': title, 'item': SITE + name + '.html'}]}
    shell(name, f'{title} · NeuMarry', desc, b, ld(crumbs))
page('privacy', 'Privacy Policy', 'How NeuMarry collects, uses and protects your data.')
page('terms', 'Terms of Service', 'The NeuMarry Terms of Service.')
page('delete-account', 'Delete your account', 'How to delete your NeuMarry account and data.')
page('child-safety', 'Child safety standards', 'NeuMarry is for adults only. Our standards against child sexual abuse and exploitation, how to report a concern, and our child safety contact.')
# Where PayPal sends members back from the phone app after paying for an event (not for search engines).
page('paid', 'Payment done', 'Your NeuMarry event payment.')
page('bio', 'Family biodata', 'A private NeuMarry profile card shared with family.')
_bp = os.path.join(OUT, 'bio.html'); _bh = open(_bp, encoding='utf-8').read().replace('content="index,follow,max-image-preview:large"', 'content="noindex,nofollow"'); open(_bp, 'w', encoding='utf-8').write(_bh)
_pp = os.path.join(OUT, 'paid.html'); _ph = open(_pp, encoding='utf-8').read().replace('content="index,follow,max-image-preview:large"', 'content="noindex"'); open(_pp, 'w', encoding='utf-8').write(_ph)

CTA = ('<div class="cta"><div><b>Create your free NeuMarry profile today.</b><p>It works in your web browser now, and the Android app uses the same account. '
       'The first 300 verified women, in every country, get 3 months of Gold free.</p></div><a class="btn" href="app/">Create your profile</a></div>')
for g in G:
    others = [o for o in G if o['slug'] != g['slug']][:4]
    related = '<h2>Read next</h2><ul class="rel">' + ''.join(f'<li><a href="{o["slug"]}.html">{o["short"]}</a></li>' for o in others) + '</ul>'
    crumb = f'<p class="crumbs"><a href="./">NeuMarry</a> › {g["short"]}</p>'
    h1end = g['body'].index('</h1>') + 5
    main = crumb + g['body'][:h1end] + f'<p class="meta">Updated 22 October 2026 · NeuMarry</p>' + g['body'][h1end:] + CTA + related
    url = SITE + g['slug'] + '.html'
    graph = [{'@type': 'Article', 'headline': re.sub(r'<[^>]+>', '', re.search(r'<h1>(.*?)</h1>', g['body']).group(1)), 'description': g['desc'],
              'datePublished': TODAY, 'dateModified': TODAY, 'mainEntityOfPage': url, 'image': [OG], 'inLanguage': 'en',
              'author': {'@type': 'Organization', 'name': 'NeuMarry', 'url': SITE}, 'publisher': ORG},
             {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE},
                                                            {'@type': 'ListItem', 'position': 2, 'name': g['short'], 'item': url}]}]
    faq = faq_from(g['body'])
    if faq: graph.append({'@type': 'FAQPage', 'mainEntity': faq})
    shell(g['slug'], g['title'], g['desc'], main, ld({'@context': 'https://schema.org', '@graph': graph}), 'article')

# ---------- Work with NeuMarry: overview + event host job page ----------
def wwu_form(role=None):
    roles = [('host', 'An event host'), ('restaurant', 'A restaurant'), ('bureau', 'A bureau or community group')]
    pick = '' if role else ('<fieldset class="fset"><legend>I am</legend>' + ''.join(
        f'<label class="opt"><input type="radio" name="role" value="{v}"{" checked" if i == 0 else ""}><span>{l}</span></label>' for i, (v, l) in enumerate(roles)) + '</fieldset>')
    hidden = f'<input type="hidden" name="role" value="{role}">' if role else ''
    return f"""<form class="wform" id="wform" novalidate>{pick}{hidden}
<label>Your name<input name="name" required maxlength="60" autocomplete="name"></label>
{"" if role == "host" else '<label>Restaurant, bureau or group (optional)<input name="org" maxlength="80"></label>'}
<label>City and country<input name="city" required maxlength="60" placeholder="e.g. Brampton, Canada"></label>
<label>Phone or email<input name="contact" required maxlength="80" autocomplete="email"></label>
<label>Anything we should know (optional)<textarea name="note" maxlength="500" rows="3" placeholder="Languages you speak, seats in your hall, communities you work with"></textarea></label>
<label class="ck"><input type="checkbox" name="consent" required><span>NeuMarry may contact me about working together. My details are used only for this.</span></label>
<button class="btn" type="submit">Send</button><p class="fmsg" id="fmsg" role="status"></p></form>
<script>(function(){{const f=document.getElementById('wform'),m=document.getElementById('fmsg');
f.addEventListener('submit',async e=>{{e.preventDefault();const d=Object.fromEntries(new FormData(f));
const bad=[];if((d.name||'').trim().length<2)bad.push('your name');if((d.city||'').trim().length<2)bad.push('your city');if((d.contact||'').trim().length<5)bad.push('a phone number or email');
if(bad.length){{m.textContent='Please add '+bad.join(', ')+'.';m.className='fmsg err';return}}
if(!f.consent.checked){{m.textContent='Please tick the box so we can contact you.';m.className='fmsg err';return}}
const b=f.querySelector('button');b.disabled=true;m.textContent='Sending…';m.className='fmsg';
try{{const r=await fetch('{SUPA_URL}/rest/v1/work_with_us',{{method:'POST',headers:{{'apikey':'{SUPA_KEY}','Content-Type':'application/json','Prefer':'return=minimal'}},
body:JSON.stringify({{role:d.role,name:d.name.trim(),org:(d.org||'').trim()||null,city:d.city.trim(),contact:d.contact.trim(),note:((d.note||'').trim()+' · From the website').replace(/^ · /,''),consent_at:new Date().toISOString()}})}});
if(!r.ok)throw new Error(r.status);f.reset();m.textContent='Thank you. Our team will contact you within 3 working days.';m.className='fmsg ok'}}
catch(x){{m.textContent='Could not send. Check your connection and try again, or email {EMAIL}.';m.className='fmsg err'}}b.disabled=false}})}})();</script>"""

WWU_TITLE = 'Work with NeuMarry: event hosts, restaurants and marriage bureaus'
WWU_DESC = 'NeuMarry is hiring event hosts in Toronto (CA$100 per event) and partnering with restaurants and matrimonial bureaus. Apply in two minutes.'
wwu_main = f"""<p class="crumbs"><a href="./">NeuMarry</a> › Work with us</p>
<h1>Work with NeuMarry</h1>
<p class="lede">We’re hiring. NeuMarry brings verified singles and their families together at Family Mixers, hosted dinners in their own city. We are looking for event hosts, partner restaurants and matrimonial bureaus, starting in Toronto, Brampton and Mississauga.</p>
<div class="roles">
<a class="role" href="event-host-toronto.html"><b>Event hosts</b><span class="pay">CA$100 for every event</span><span>Welcome families, keep time and seat members with their best matches. Training, the guest list and the seating plan come from us. Paid weekly.</span><span class="more">See the host role →</span></a>
<a class="role" href="#apply"><b>Partner restaurants</b><span class="pay">30 to 60 paying guests a night</span><span>Give us a private room on a quiet evening. Every guest has already paid, the meal is sold by you at your price, and you are listed as a NeuMarry partner venue.</span><span class="more">Apply below →</span></a>
<a class="role" href="#apply"><b>Matrimonial bureaus and community groups</b><span class="pay">10% + ₹1,500 per engagement</span><span>Earn 10% of the first Gold purchase of every member who joins with your partner code, plus ₹1,500 when a couple you brought gets engaged. Members always sign up themselves.</span><span class="more">Apply below →</span></a>
</div>
<h2 id="apply">Apply in two minutes</h2>
<p>Tell us who you are and how to reach you. Our team replies within 3 working days.</p>
{wwu_form()}"""
shell('work-with-us', WWU_TITLE, WWU_DESC, wwu_main, ld({'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
    {'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE}, {'@type': 'ListItem', 'position': 2, 'name': 'Work with us', 'item': SITE + 'work-with-us.html'}]}))

JOB_DESC_HTML = ('<p>NeuMarry is a matrimony app for people living abroad. We run Family Mixers: hosted dinner evenings in Toronto where verified singles, '
    'and often their parents, meet in person at separate tables in one shared room.</p>'
    '<p><b>What you do:</b> welcome guests and check their QR tickets, keep the evening on time, seat members with their best matches, '
    'and help families feel at ease. Each evening runs about 4 hours.</p>'
    '<p><b>Pay:</b> CA$100 for every event you host, paid weekly. Training, the guest list and the seating plan come from us.</p>'
    '<p><b>You are a good fit if</b> you are warm and organised, know your community, and speak English plus at least one South Asian language. '
    'Hosts agree to a background check and a code of conduct, and keep every guest’s details private.</p>')
job_ld = {'@context': 'https://schema.org', '@type': 'JobPosting', 'title': 'Event host (part-time), Family Mixer evenings',
    'description': JOB_DESC_HTML, 'datePosted': '2026-10-22', 'validThrough': '2027-01-31T23:59:00-05:00',
    'employmentType': ['PART_TIME', 'CONTRACTOR'], 'directApply': True,
    'hiringOrganization': {'@type': 'Organization', 'name': 'NeuMarry', 'sameAs': SITE, 'logo': SITE + 'icon-512.png'},
    'jobLocation': {'@type': 'Place', 'address': {'@type': 'PostalAddress', 'addressLocality': 'Toronto', 'addressRegion': 'ON', 'addressCountry': 'CA'}},
    'identifier': {'@type': 'PropertyValue', 'name': 'NeuMarry', 'value': 'host-toronto-2026'}}
host_main = f"""<p class="crumbs"><a href="./">NeuMarry</a> › <a href="work-with-us.html">Work with us</a> › Event host, Toronto</p>
<h1>Event host (part-time), Toronto</h1>
<p class="lede">CA$100 for every Family Mixer you host, paid weekly. Evenings and weekends, in Toronto, Brampton and Mississauga.</p>
{JOB_DESC_HTML}
<h2 id="apply">Apply now</h2>
<p>Add the languages you speak and the communities you know in the last box. Our team replies within 3 working days.</p>
{wwu_form('host')}"""
shell('event-host-toronto', 'Event host jobs in Toronto: CA$100 per event · NeuMarry', 'Part-time event host in Toronto, Brampton and Mississauga. Host NeuMarry Family Mixer dinners and earn CA$100 per event, paid weekly. Apply in two minutes.', host_main, ld(job_ld))

# ---------- About, feature and city pages (src/pages) ----------
for p in P:
    url = SITE + p['slug'] + '.html'
    loc = ('city', 'country')
    near = [o for o in P if o['slug'] != p['slug'] and (o['kind'] in loc) == (p['kind'] in loc)]
    others = near + [o for o in P if o['slug'] != p['slug'] and o not in near] + [g for g in G if g['slug'] in ('verified-matrimony', 'matrimony-events-toronto', 'toronto-matrimony')]
    if p['kind'] in loc: others = near[:3] + [o for o in P if o['slug'] in ('how-matching-works', 'privacy-and-safety')]
    related = '<h2>Read next</h2><ul class="rel">' + ''.join(f'<li><a href="{o["slug"]}.html">{o["short"]}</a></li>' for o in others[:5]) + '</ul>'
    main = f'<p class="crumbs"><a href="./">NeuMarry</a> › {p["short"]}</p>' + p['body'] + CTA + related
    kind = {'about': 'AboutPage', 'feature': 'WebPage', 'city': 'WebPage', 'country': 'WebPage'}[p['kind']]
    if p['slug'] == 'faq': kind = 'FAQPage'
    node = {'@type': kind, '@id': url, 'url': url, 'name': p['title'], 'description': p['desc'], 'inLanguage': 'en',
            'isPartOf': {'@id': SITE + '#site'}, 'publisher': ORG, 'dateModified': TODAY}
    if p['kind'] == 'city':
        node['about'] = {'@type': 'City', 'name': p['short'].replace('Matrimony in ', '')}
    if p['kind'] == 'country':
        node['about'] = {'@type': 'Country', 'name': p['short'].replace('Matrimony in the ', '').replace('Matrimony in ', '')}
    graph = [node, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE},
                                                                  {'@type': 'ListItem', 'position': 2, 'name': p['short'], 'item': url}]}]
    faq = faq_from(p['body'])
    if faq and kind == 'FAQPage': node['mainEntity'] = faq
    elif faq: graph.append({'@type': 'FAQPage', 'mainEntity': faq})
    shell(p['slug'], p['title'], p['desc'], main, ld({'@context': 'https://schema.org', '@graph': graph}))

# ---------- French (fr/): same pages for visitors who choose French ----------
def fr_fix_links(html):
    def fix(m):
        h = m.group(1)
        if h.startswith(('http', 'mailto', '#', '/', '../')): return m.group(0)
        if h == 'app/' or h.startswith('app/'): return 'href="../' + h + '"'
        if h in ('./', ''): return 'href="../"'
        slug = h.split('#')[0][:-5] if h.split('#')[0].endswith('.html') else None
        if slug and slug in FR_SLUGS: return m.group(0)
        return 'href="../' + h + '"'
    return re.sub(r'href="([^"]*)"', fix, html)
FR_CTA = ('<div class="cta"><div><b>Créez votre profil NeuMarry gratuit dès aujourd’hui.</b><p>L’application fonctionne déjà dans votre navigateur Web, et l’application Android utilise le même compte. '
          'Les 300 premières femmes vérifiées, dans tous les pays, reçoivent 3 mois de Gold gratuits.</p></div><a class="btn" href="app/">Créer mon profil</a></div>')
if FR_SLUGS:
    os.makedirs(os.path.join(OUT, 'fr'), exist_ok=True)
    def fr_meta(slug):
        t = open(os.path.join(FR_DIR, slug + '.html'), encoding='utf-8').read()
        get = lambda k: re.search(r'<!--%s: (.*?)-->' % k, t).group(1)
        return dict(slug=slug, title=get('title'), desc=get('desc'), short=get('short'), kind=get('kind'), body=re.sub(r'<!--.*?-->\n?', '', t))
    FR = [fr_meta(x) for x in FR_FILES]
    fr_foot = ''.join(f'<a class="link" href="{f["slug"]}.html">{f["short"]}</a>' for f in FR)
    fr_legal = ('<a class="link" href="privacy.html">Politique de confidentialité</a>'
                '<a class="link" href="terms.html">Conditions d’utilisation</a>'
                '<a class="link" href="../delete-account.html" hreflang="en">Supprimer mon compte (en anglais)</a>'
                '<a class="link" href="../child-safety.html" hreflang="en">Sécurité des enfants (en anglais)</a>')
    # French home page: the English home with every piece of text swapped (src/fr/home_fr.py)
    import importlib.util
    spec = importlib.util.spec_from_file_location('home_fr', os.path.join(H, 'fr', 'home_fr.py')); hf = importlib.util.module_from_spec(spec); spec.loader.exec_module(hf)
    fb = HOME_BODY
    fr_guides = ''.join(f'<a href="{g["slug"]}.html">{next((x["short"] for x in FR if x["slug"] == g["slug"]), g["short"])}</a>' for g in G)
    fb = fb.replace(guide_links, fr_guides)
    for en_, fr_ in sorted(hf.PAIRS, key=lambda x: -len(x[0])):
        assert en_ in fb, 'French home: English text not found: ' + en_[:70]
        fb = fb.replace(en_, fr_)
    fb = fb.replace('<a class="btn primary sm" href="app/">Ouvrir l’app</a>', home_lang('../', 'en', 'Read in English') + '<a class="btn primary sm" href="app/">Ouvrir l’app</a>')
    fb = fb.replace(HERO_START, HERO_START + '<p class="langhero">' + home_lang('../', 'en', 'Read in English').replace('>EN<', '>English<') + '</p>')
    fb = fr_fix_links(fb).replace('href="../app/"', 'href="../app/" onclick="try{localStorage.setItem(\'rm.lang\',\'fr\')}catch(e){}"')
    FR_HOME_TITLE = 'NeuMarry : mariage vérifié pour ceux qui vivent à l’étranger'
    FR_HOME_DESC = 'Application matrimoniale vérifiée pour qui vit loin du pays où il a grandi, de toutes les communautés. Suggestions selon origines, ville et valeurs. Gratuit.'
    fh = re.sub(r'<script type="application/ld\+json">.*?</script>', '', HOME_HEAD, flags=re.S)
    fh = re.sub(r'<title>.*?</title>', '<title>' + FR_HOME_TITLE + '</title>', fh, flags=re.S)
    fmeta = ('<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
             f'<meta name="description" content="{esc(FR_HOME_DESC)}">' + social(FR_HOME_TITLE, FR_HOME_DESC, SITE + 'fr/').replace('content="en_CA"', 'content="fr_CA"')
             .replace('href="icon-192.png"', 'href="../icon-192.png"').replace('href="apple-touch-icon.png"', 'href="../apple-touch-icon.png"'))
    fld = ld({'@context': 'https://schema.org', '@type': 'WebPage', '@id': SITE + 'fr/', 'url': SITE + 'fr/', 'name': FR_HOME_TITLE, 'description': FR_HOME_DESC,
              'inLanguage': 'fr-CA', 'isPartOf': {'@id': SITE + '#site'}, 'publisher': ORG})
    fhtml = '<!doctype html><html lang="fr-CA"><head>' + fmeta + HOME_ALT + fh + HOME_LANG_CSS + '<style>.legal-links{flex-wrap:wrap;gap:8px 16px}</style>' + fld + '</head><body>' + fb + '</body></html>'
    fhtml = re.sub(r'(src|href)="(icon-\d+\.png|apple-touch-icon\.png|og-image\.png)"', r'\1="../\2"', fhtml)
    open(os.path.join(OUT, 'fr', 'index.html'), 'w', encoding='utf-8').write(fhtml)
    def fr_write(f, url, main, graph):
        head = social(f['title'], f['desc'], url).replace('content="en_CA"', 'content="fr_CA"').replace('href="icon-192.png"', 'href="../icon-192.png"').replace('href="apple-touch-icon.png"', 'href="../apple-touch-icon.png"')
        html = f"""<!doctype html><html lang="fr-CA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{f['title']}</title><meta name="description" content="{esc(f['desc'])}">{head}{alternates(f['slug'])}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600&family=Nunito+Sans:wght@400;600;700;800&display=swap">
<link rel="stylesheet" href="../legal.css">{LANG_CSS}{ld({'@context': 'https://schema.org', '@graph': graph})}</head><body>
<header><div class="wrap"><a class="brand" href="../"><svg viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>NeuMarry</a><nav><a class="ev" href="matrimony-events-toronto.html">Événements</a><a class="hl" href="work-with-us.html"><span class="lg">Travailler avec nous</span><span class="sh">Collaborer</span></a><a href="../app/" onclick="try{{localStorage.setItem('rm.lang','fr')}}catch(e){{}}">Ouvrir l’app</a></nav></div></header>
<main><div class="wrap">{lang_link('../' + f['slug'] + '.html', 'en', 'Read this page in English', 'English')}{main}</div></main>
<footer><div class="wrap"><div class="fg">{fr_foot}</div><span>NeuMarry · © 2026</span><span>Les membres doivent avoir 18 ans ou plus</span>{fr_legal}<a class="link" href="mailto:{EMAIL}">{EMAIL}</a>{SOCIAL_LINKS}</div></footer>
</body></html>"""
        open(os.path.join(OUT, 'fr', f['slug'] + '.html'), 'w', encoding='utf-8').write(html)
    for f in FR:
        url = SITE + 'fr/' + f['slug'] + '.html'
        others = [o for o in FR if o['slug'] != f['slug']]
        related = ('<h2>À lire aussi</h2><ul class="rel">' + ''.join(f'<li><a href="{o["slug"]}.html">{o["short"]}</a></li>' for o in others[:5]) + '</ul>') if others else ''
        main = fr_fix_links(f'<p class="crumbs"><a href="./">NeuMarry</a> › {f["short"]}</p>' + f['body'] + FR_CTA + related)
        kind = 'FAQPage' if f['slug'] == 'faq' else 'WebPage'
        node = {'@type': kind, '@id': url, 'url': url, 'name': f['title'], 'description': f['desc'], 'inLanguage': 'fr-CA',
                'isPartOf': {'@id': SITE + '#site'}, 'publisher': ORG, 'dateModified': TODAY}
        faq = faq_from(f['body'])
        graph = [node, {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE},
                                                                      {'@type': 'ListItem', 'position': 2, 'name': f['short'], 'item': url}]}]
        if faq and kind == 'FAQPage': node['mainEntity'] = faq
        elif faq: graph.append({'@type': 'FAQPage', 'mainEntity': faq})
        fr_write(f, url, main, graph)

    # French Terms of Service and Privacy Policy (same value as the English ones)
    for slug, title, desc in [('privacy', 'Politique de confidentialité', 'Comment NeuMarry recueille, utilise et protège vos renseignements personnels.'),
                              ('terms', 'Conditions d’utilisation', 'Les conditions d’utilisation de NeuMarry.')]:
        if slug not in FR_LEGAL: continue
        url = SITE + 'fr/' + slug + '.html'
        main = fr_fix_links(open(os.path.join(FR_LEGAL_DIR, slug + '.body.html'), encoding='utf-8').read())
        graph = [{'@type': 'WebPage', '@id': url, 'url': url, 'name': title, 'description': desc, 'inLanguage': 'fr-CA', 'isPartOf': {'@id': SITE + '#site'}, 'publisher': ORG, 'dateModified': TODAY},
                 {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE},
                                                                {'@type': 'ListItem', 'position': 2, 'name': title, 'item': url}]}]
        fr_write({'slug': slug, 'title': title + ' · NeuMarry', 'desc': desc}, url, main, graph)

    # French "Work with us" and "Event host" pages
    spec = importlib.util.spec_from_file_location('work_fr', os.path.join(H, 'fr', 'work_fr.py')); wf = importlib.util.module_from_spec(spec); spec.loader.exec_module(wf)
    OPTIONAL_ON_HOST = {'<legend>I am</legend>', '<span>An event host</span>', '<span>A restaurant</span>', '<span>A bureau or community group</span>',
                        '<label>Restaurant, bureau or group (optional)<input'}
    def fr_tr(html, pairs):
        for en_, fr_ in pairs:
            assert en_ in html or en_ in OPTIONAL_ON_HOST, 'French work pages: English text not found: ' + en_[:70]
            html = html.replace(en_, fr_)
        return html
    for slug, title, desc, short, src, pairs in [('work-with-us', wf.WWU_TITLE, wf.WWU_DESC, 'Travailler avec nous', wwu_main, wf.WWU),
                                                 ('event-host-toronto', wf.HOST_TITLE, wf.HOST_DESC, 'Animateur d’événements, Toronto', host_main, wf.HOST)]:
        url = SITE + 'fr/' + slug + '.html'
        main = fr_fix_links(fr_tr(fr_tr(src, pairs), wf.FORM))
        graph = [{'@type': 'WebPage', '@id': url, 'url': url, 'name': title, 'description': desc, 'inLanguage': 'fr-CA', 'isPartOf': {'@id': SITE + '#site'}, 'publisher': ORG, 'dateModified': TODAY},
                 {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE},
                                                                {'@type': 'ListItem', 'position': 2, 'name': short, 'item': url}]}]
        fr_write({'slug': slug, 'title': title, 'desc': desc}, url, main, graph)

# llms.txt: a plain summary for AI assistants (llmstxt.org format)
llms = ['# NeuMarry', '',
        '> NeuMarry is a verified matrimony app for people living away from the country they grew up in, from every country and community. '
        'Members match on values, lifestyle, roots and distance, and meet with their families at hosted Family Mixer evenings. Launching in Toronto, Canada in November 2026; the app works in every country.', '',
        'Key facts:',
        '- Every member verifies a government ID and a live selfie, and proves their roots and the city they live in, before others can see them.',
        '- No income, salary or wealth requirement for anyone, men or women. NeuMarry is not Knot.dating and has no Rs 50 lakh rule.',
        '- Not only for Indians: open to people of every country and community, matched with people of their own roots.',
        '- Free: profile, verification, number of people who fit you and your match % with each. Gold (from CA$80 a month) adds names, photos, interests and chat.',
        '- Web app: https://neumarry.com/app/ . Android app on Google Play; iPhone later. App languages: English and French.',
        '- For adults 18 and over looking for marriage. Not a casual dating app.', '',
        '## About', ''] + [f'- [{p["short"]}]({SITE}{p["slug"]}.html): {p["desc"]}' for p in P] + \
       ['', '## Guides', ''] + [f'- [{g["short"]}]({SITE}{g["slug"]}.html): {g["desc"]}' for g in G] + \
       ['', '## Work with us', '', f'- [Work with NeuMarry]({SITE}work-with-us.html): {WWU_DESC}', '',
        '## Optional', '', f'- [Privacy Policy]({SITE}privacy.html)', f'- [Terms of Service]({SITE}terms.html)', '']
open(os.path.join(OUT, 'llms.txt'), 'w', encoding='utf-8').write('\n'.join(llms))

# robots.txt and sitemap.xml
open(os.path.join(OUT, 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}sitemap.xml\n')
urls = [(SITE, '1.0', 'weekly')] + [(SITE + p['slug'] + '.html', '0.8', 'monthly') for p in P] + [(SITE + g['slug'] + '.html', '0.8', 'monthly') for g in G] + [(SITE + 'work-with-us.html', '0.7', 'monthly'), (SITE + 'event-host-toronto.html', '0.7', 'weekly')] + [(SITE + n + '.html', '0.3', 'yearly') for n in ('privacy', 'terms', 'delete-account', 'child-safety')] + ([(SITE + 'fr/', '0.8', 'weekly')] if FR_SLUGS else []) + [(SITE + 'fr/' + x + '.html', '0.6', 'monthly') for x in FR_SLUGS]
open(os.path.join(OUT, 'sitemap.xml'), 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    ''.join(f'  <url><loc>{u}</loc><lastmod>{TODAY}</lastmod><changefreq>{c}</changefreq><priority>{pr}</priority></url>\n' for u, pr, c in urls) + '</urlset>\n')
# ---------- Google Analytics (website only, not /app/) with Consent Mode v2 ----------
GA_ID = 'G-N3V0JG9X0D'
# Meta Pixel (dataset "NeuMarry Website", portfolio Neuconet; his ok 28 Oct 21:50). Website only, never in /app/.
# Europe (EEA, UK, Switzerland, by time zone): only after "Accept". Elsewhere on, with a one-time notice and a "Decline" choice.
# Lead = a click on "Create profile" / "Open app" (any link into /app/). No names, emails or profile data are sent.
PX_ID = '1427089529012759'
PX_HEAD = ("<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};"
           "if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;"
           "s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');"
           "(function(){var tz='',c=null;try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';c=localStorage.getItem('nm.ads')}catch(e){}"
           "var eu=/^(Europe\\/|Atlantic\\/(Reykjavik|Canary|Madeira|Faroe|Azores))/.test(tz);window.nmEU=eu;"
           "var gpc=navigator.globalPrivacyControl===true;window.nmGPC=gpc;if(c==='denied'||((eu||gpc)&&c!=='granted'))fbq('consent','revoke');"
           "fbq('init','" + PX_ID + "');fbq('track','PageView');"
           "document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href]');"
           "if(a&&/(^|\\/)app\\/?(\\?|#|$)/.test(a.getAttribute('href')))fbq('track','Lead')},true)})();</script>")
EU = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']
GA_HEAD = ('<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}'
           "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:" + json.dumps(EU) + "});"
           "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});"
           "try{var nmC=localStorage.getItem('nm.analytics');if(nmC==='granted'||nmC==='denied')gtag('consent','update',{analytics_storage:nmC})}catch(e){}"
           "gtag('js',new Date());gtag('config','" + GA_ID + "',{allow_google_signals:false,allow_ad_personalization_signals:false});</script>"
           '<script async src="https://www.googletagmanager.com/gtag/js?id=' + GA_ID + '"></script>' + PX_HEAD)
BANNER_TXT = {
 'en': dict(t='This website uses Google Analytics to count visits and the Meta Pixel to measure our ads on Facebook and Instagram. We never sell your data.', ok='Accept', no='Decline', more='Privacy Policy', link='Cookie settings', href='privacy.html'),
 'fr': dict(t='Ce site utilise Google Analytics pour compter les visites et le pixel Meta pour mesurer nos publicités sur Facebook et Instagram. Nous ne vendons jamais vos données.', ok='Accepter', no='Refuser', more='Politique de confidentialité', link='Paramètres des témoins', href='../privacy.html'),
}
def banner(lang):
    b = BANNER_TXT[lang]
    return ('<div id="nm-consent" role="dialog" aria-live="polite" aria-label="' + b['link'] + '" hidden>'
            '<style>#nm-consent{position:fixed;left:12px;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:60;max-width:560px;margin:0 auto;'
            'background:#fff;color:#3B1F2A;border:1px solid #F3E0E1;border-radius:18px;box-shadow:0 10px 30px rgba(59,31,42,.16);padding:14px 16px;'
            'font:14px/1.5 "Nunito Sans",system-ui,-apple-system,"Segoe UI",sans-serif}'
            '#nm-consent p{margin:0 0 10px}#nm-consent a{color:#C8325A;font-weight:700}'
            '#nm-consent .b{display:flex;gap:10px}#nm-consent button{flex:1;min-height:42px;border-radius:999px;font:700 14px/1 "Nunito Sans",system-ui,sans-serif;cursor:pointer}'
            '#nm-consent .y{background:#E8436B;color:#fff;border:1px solid #E8436B}#nm-consent .n{background:#fff;color:#3B1F2A;border:1px solid #E7CFD2}'
            '.nm-alink{background:none;border:0;padding:0;font:inherit;color:inherit;text-decoration:underline;cursor:pointer}</style>'
            '<p>' + b['t'] + ' <a href="' + b['href'] + '">' + b['more'] + '</a></p>'
            '<div class="b"><button type="button" class="n" data-c="denied">' + b['no'] + '</button><button type="button" class="y" data-c="granted">' + b['ok'] + '</button></div></div>'
            "<script>(function(){var tz='';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||''}catch(e){}"
            "var eu=/^(Europe\\/|Atlantic\\/(Reykjavik|Canary|Madeira|Faroe|Azores))/.test(tz);"
            "var d=document.getElementById('nm-consent'),c=null;try{c=localStorage.getItem('nm.ads')}catch(e){}"
            "function set(v){try{localStorage.setItem('nm.ads',v);if(eu||v==='denied')localStorage.setItem('nm.analytics',v)}catch(e){}"
            "if(eu||v==='denied')gtag('consent','update',{analytics_storage:v});if(window.fbq)fbq('consent',v==='granted'?'grant':'revoke');d.hidden=true}"
            "d.addEventListener('click',function(e){var v=e.target&&e.target.getAttribute('data-c');if(v)set(v)});"
            "if(c!=='granted'&&c!=='denied')d.hidden=false;"
            "var f=document.querySelector('footer .wrap');if(f){var a=document.createElement('button');a.type='button';a.className='nm-alink link';a.textContent='" + b['link'].replace("'", "\\'") + "';"
            "a.addEventListener('click',function(){d.hidden=false});f.appendChild(a)}})();</script>")
for root, dirs, files in os.walk(OUT):
    rel = os.path.relpath(root, OUT)
    if rel.split(os.sep)[0] in ('app', 'src', '.git'): continue
    for fn in files:
        if not fn.endswith('.html'): continue
        fp = os.path.join(root, fn); h = open(fp, encoding='utf-8').read()
        if GA_ID in h: continue
        lang = 'fr' if '<html lang="fr' in h else 'en'
        assert '</head>' in h and '</body>' in h, fp
        h = h.replace('</head>', GA_HEAD + '</head>', 1)
        i = h.rindex('</body>'); h = h[:i] + banner(lang) + h[i:]
        open(fp, 'w', encoding='utf-8').write(h)

# Old page names (renamed 29 Oct: no "NRI" on NeuMarry). Visitors and Google are sent to the new page.
for old, new in [('nri-matrimony-canada', 'matrimony-abroad-canada'), ('nri-matrimony-usa-uk', 'matrimony-abroad-usa-uk')]:
    for sub, base in [('', SITE), ('fr', SITE + 'fr/')]:
        if sub and not os.path.isdir(os.path.join(OUT, sub)): continue
        url = base + new + '.html'
        open(os.path.join(OUT, sub, old + '.html'), 'w', encoding='utf-8').write(
            '<!doctype html><html><head><meta charset="utf-8"><title>NeuMarry</title><meta name="robots" content="noindex,follow">'
            f'<link rel="canonical" href="{url}"><meta http-equiv="refresh" content="0; url={url}"></head>'
            f'<body><p><a href="{url}">This page has moved. Open the new page.</a></p></body></html>')
print('site built')
