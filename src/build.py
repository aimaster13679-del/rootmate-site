#!/usr/bin/env python3
"""Builds the NeuMarry website (index, privacy, terms, delete-account) from src/."""
import os, re, json
H = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.join(H, '..')
SUPA_URL = 'https://ndxlguuywifovqdzdvtq.supabase.co'
SUPA_KEY = 'sb_publishable_oBR1e77Tx1mNysmxcZ2cgw_qDOpS4gt'
SITE = 'https://neumarry.com/'
EMAIL = 'aimaster13679@gmail.com'

def rd(n): return open(os.path.join(H, n), encoding='utf-8').read()
s = rd('landing_src.html').replace('/*__PORTRAIT__*/', rd('portrait.js')).replace('/*__COUNTRIES__*/', rd('countries_names.js'))

# Content fixes for what is live today
fix = [
 ('Then phone, government ID and a live selfie, so everyone you meet is real.', 'Then a government ID and a live selfie, so everyone you meet is real.'),
 ('daily matches, chats, video calls and event seats', 'daily matches, chats and event seats'),
 ('Chat and video call, without sharing your number</li>', 'Chat in the app, without sharing your number</li>'),
 ('unlocks names and photos, interests, chat and video calls, daily picks, event guest lists and Quick Match, from CA$49.99 a month.', 'unlocks names and photos, interests, chat, daily picks and event guest lists, from CA$49.99 a month.'),
 ('Yes. When you and a match are ready, you can set up a family video call in the app. Parents join with a link from any country, on a phone or computer, without installing anything, and the app shows the time for both families.', 'Yes. Family video calls are coming to the app soon: when you and a match are ready, parents will join with a link from any country, on a phone or computer, without installing anything, and the app will show the time for both families.'),
 ("verified by phone, government ID and a live selfie.", "verified with a government ID and a live selfie."),
 ("'The full Terms are in the app, under Me, then Legal and privacy.'", "'Read the full Terms of Service on this website.'"),
 ('Open Me, then Legal and privacy, then Delete my account.', 'Open Me, then Delete my account.'),
 ("const BACKEND={url:'',anonKey:''};", "const BACKEND={url:'%s',anonKey:'%s'};" % (SUPA_URL, SUPA_KEY)),
 ("headers:{'apikey':BACKEND.anonKey,'Authorization':`Bearer ${BACKEND.anonKey}`,'Content-Type':'application/json','Prefer':'return=minimal'}", "headers:{'apikey':BACKEND.anonKey,'Content-Type':'application/json','Prefer':'return=minimal'}"),
 ("await send('partners',row)", "await send('work_with_us',row)"),
 ('Every member verifies a phone number, a government ID and a live selfie before they can send interests or messages. Members can also be vouched for by people who know them, and every report is reviewed by a person.', 'Every member verifies a government ID and a live selfie before they can send interests or messages, and every report is reviewed by a person.'),
 ('When you both say yes, a RootMate host sets up a family call for both sides.', 'When you both say yes, a RootMate host helps both families connect.'),
 ('<span class="pill"><i></i>Launching in Toronto · November 2026</span>', '<span class="pill"><i></i>NRI matrimony · Launching in Toronto, November 2026</span>'),
 ('RootMate is matrimony for people living abroad. Meet verified people', 'RootMate is a matrimony app for people living abroad. Meet verified people'),
 ('Hosted Family Mixers with parent tickets, and a Family Circle where parents can suggest profiles. They never chat as you.', 'Hosted Family Mixers with parent tickets, and soon a Family Circle where parents can suggest profiles. They never chat as you.'),
 ('Parents can sign up on your behalf, come to family events with their own ticket, and join a Family Circle to suggest profiles.', 'Parents can sign up on your behalf and come to family events with their own ticket. A Family Circle where they can suggest profiles is coming soon.'),

 # The web app is live at /app/: point the calls to action there.
 ('<a class="btn primary sm" href="#app">Get the app</a>', '<a class="btn primary sm" href="app/">Open the app</a>'),
 ('<div class="ctas"><a class="btn primary" href="#app">Get the app</a><a class="btn ghost" href="#join">Join the waitlist</a></div>',
  '<div class="ctas"><a class="btn primary" href="app/">Create your free profile</a><a class="btn ghost" href="#app">Get the app</a></div>'),
 ('<p class="avail">For Android and iPhone · Google Play first, App Store soon after</p>',
  '<p class="avail">Works now in your web browser · Android on Google Play soon, iPhone after</p>'),
 ('<a class="btn primary" href="#app" id="reserve-open">Reserve free in the app</a>', '<a class="btn primary" href="app/" id="reserve-open">Reserve free in the app</a>'),
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
s = s.replace('<title>NeuMarry Toronto</title>', '<title>NeuMarry: NRI Matrimony &amp; Shaadi App for Life Abroad</title>')
assert 'RootMate' not in s
# Full document around the fragment
i = s.index('</style>') + len('</style>')
head, body = s[:i], s[i:]
GUIDES = ['nri-matrimony-canada', 'toronto-matrimony', 'matrimony-events-toronto', 'community-matrimony-canada',
          'matrimony-for-parents', 'verified-matrimony', 'nri-matrimony-usa-uk', 'find-life-partner-abroad']
def guide_meta(slug):
    t = rd('guides/%s.html' % slug)
    get = lambda k: re.search(r'<!--%s: (.*?)-->' % k, t).group(1)
    return dict(slug=slug, title=get('title'), desc=get('desc'), short=get('short'), body=re.sub(r'<!--.*?-->\n?', '', t))
G = [guide_meta(g) for g in GUIDES]
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
ORG = {'@type': 'Organization', '@id': SITE + '#org', 'name': 'NeuMarry', 'url': SITE, 'logo': SITE + 'icon-512.png', 'email': EMAIL,
       'description': 'Verified matrimony app for people living away from the country they grew up in.'}
HOME_TITLE = 'NeuMarry: NRI Matrimony & Shaadi App for Life Abroad'
HOME_DESC = 'Verified NRI matrimony for Indians and South Asians in Canada, the USA and the UK. Match on roots, city and values. Meet families at events. Free to join.'
KEYWORDS = 'matrimony, matrimonial, NRI matrimony, Indian matrimony Canada, shaadi, marriage, rishta, life partner, bride, groom, Toronto matrimony, Brampton matrimony, Gujarati matrimony, Punjabi matrimony, matrimony app'
meta = ('<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        f'<meta name="description" content="{esc(HOME_DESC)}"><meta name="keywords" content="{KEYWORDS}">' + social(HOME_TITLE, HOME_DESC, SITE))
legal_links = '<a class="link" href="privacy.html">Privacy Policy</a><a class="link" href="terms.html">Terms of Service</a><a class="link" href="delete-account.html">Delete account</a>'
body = body.replace('<a class="link" href="#delete-account">Delete account</a>', '<a class="link" href="delete-account.html">Delete account</a><a class="link" href="privacy.html">Full Privacy Policy</a><a class="link" href="terms.html">Full Terms</a>')
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
    {'@type': 'Event', 'name': 'NeuMarry Family Mixer, Toronto', 'startDate': '2026-11-28T17:30:00-05:00', 'endDate': '2026-11-28T21:30:00-05:00',
     'eventStatus': 'https://schema.org/EventScheduled', 'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
     'description': 'An evening of conversation and dinner for verified singles aged 24 to 32 looking for marriage. Parents welcome.',
     'image': [OG], 'url': SITE + 'matrimony-events-toronto.html',
     'location': {'@type': 'Place', 'name': 'Partner restaurant in the Greater Toronto Area', 'address': {'@type': 'PostalAddress', 'addressLocality': 'Toronto', 'addressRegion': 'ON', 'addressCountry': 'CA'}},
     'organizer': {'@id': SITE + '#org'},
     'offers': {'@type': 'Offer', 'price': '54', 'priceCurrency': 'CAD', 'availability': 'https://schema.org/InStock', 'validFrom': '2026-10-22T00:00:00-04:00', 'url': SITE + 'matrimony-events-toronto.html'}},
] + ([{'@type': 'FAQPage', 'mainEntity': faq}] if faq else [])}
head = head.replace('</style>', '.guides{margin-top:22px;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px}.guides a{display:block;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:14px 16px;font-weight:700;color:var(--ink);text-decoration:none;box-shadow:var(--shadow)}.guides a:hover{border-color:var(--rose);color:var(--rose-deep)}</style>', 1) + ld(home_ld)
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write('<!doctype html><html lang="en"><head>' + meta + head.replace('<meta name="claude:viewport-fit-sides" content="cover">', '') + '</head><body>' + body + '</body></html>')

FOOT_GUIDES = ''.join(f'<a class="link" href="{g["slug"]}.html">{g["short"]}</a>' for g in G)
def shell(name, title_tag, desc, main, extra_head='', kind='website'):
    url = SITE + ('' if name == 'index' else name + '.html')
    html = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title_tag}</title><meta name="description" content="{esc(desc)}">{social(title_tag, desc, url, kind)}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600&family=Nunito+Sans:wght@400;600;700;800&display=swap">
<link rel="stylesheet" href="legal.css">{extra_head}</head><body>
<header><div class="wrap"><a class="brand" href="./"><svg viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>NeuMarry</a><nav><a href="matrimony-events-toronto.html">Events</a><a href="app/">Open the app</a></nav></div></header>
<main><div class="wrap">{main}</div></main>
<footer><div class="wrap"><div class="fg">{FOOT_GUIDES}</div><span>NeuMarry · © 2026</span><span>Members must be 18 or older</span>{legal_links}<a class="link" href="mailto:{EMAIL}">{EMAIL}</a></div></footer>
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

CTA = ('<div class="cta"><div><b>Create your free NeuMarry profile today.</b><p>It works in your web browser now, and the Android app uses the same account. '
       'The first 500 verified women in Canada get 3 months of Gold free.</p></div><a class="btn" href="app/">Create your profile</a></div>')
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

# robots.txt and sitemap.xml
open(os.path.join(OUT, 'robots.txt'), 'w').write(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}sitemap.xml\n')
urls = [(SITE, '1.0', 'weekly')] + [(SITE + g['slug'] + '.html', '0.8', 'monthly') for g in G] + [(SITE + n + '.html', '0.3', 'yearly') for n in ('privacy', 'terms', 'delete-account')]
open(os.path.join(OUT, 'sitemap.xml'), 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    ''.join(f'  <url><loc>{u}</loc><lastmod>{TODAY}</lastmod><changefreq>{c}</changefreq><priority>{pr}</priority></url>\n' for u, pr, c in urls) + '</urlset>\n')
print('site built')
