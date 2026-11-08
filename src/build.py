#!/usr/bin/env python3
"""Builds the NeuMarry website (index, privacy, terms, delete-account) from src/."""
import os, re, json
H = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.join(H, '..')
SUPA_URL = 'https://ndxlguuywifovqdzdvtq.supabase.co'
SUPA_KEY = 'sb_publishable_oBR1e77Tx1mNysmxcZ2cgw_qDOpS4gt'
SITE = 'https://neumarry.com/'
EMAIL = 'support@neumarry.com'

def rd(n): return open(os.path.join(H, n), encoding='utf-8').read()
# ---------- Home page (new design, his ok on the inside-premium mock, 6 Nov 2026) ----------
# Source: src/home_src.html (head part, then <!--BODY-->, then the page). The old home (landing_src.html) is no longer built.
ICONS = {
 'shield': '<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6z"/><path d="M8.6 12l2.3 2.3 4.6-4.6"/>',
 'lock': '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 018 0v2.5"/>',
 'users': '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 19.5c.9-3.3 3.4-5 6.5-5s5.6 1.7 6.5 5"/><circle cx="17" cy="9" r="2.8"/><path d="M17.5 14.5c2.3.3 3.6 1.8 4 4"/>',
 'globe': '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.6 3.6 5.5 3.6 8.5s-1 5.9-3.6 8.5c-2.6-2.6-3.6-5.5-3.6-8.5s1-5.9 3.6-8.5z"/>',
 'menu': '<path d="M4 7h16M4 12h16M4 17h16"/>',
 'check': '<circle cx="12" cy="12" r="9"/><path d="M8.2 12.3l2.6 2.6 5-5.2"/>',
}
def _icon(m): return ('<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" '
                      'stroke-linejoin="round" aria-hidden="true">' + ICONS[m.group(1)] + '</svg>')
_hs = re.sub(r'<!--i:(\w+)-->', _icon, rd('home_src.html'))
_hs = re.sub(r'^<!--.*?-->\n', '', _hs, count=1, flags=re.S)
_hs = (_hs.replace('/*__COUNTRIES__*/', rd('countries_names.js')).replace('__SUPA_URL__', SUPA_URL).replace('__SUPA_KEY__', SUPA_KEY))
head, body = _hs.split('<!--BODY-->')
assert 'RootMate' not in _hs

GUIDES = ['matrimony-abroad-canada', 'toronto-matrimony', 'community-matrimony-canada',
          'matrimony-for-parents', 'verified-matrimony', 'matrimony-abroad-usa-uk', 'find-life-partner-abroad', 'safe-matrimony-for-women']
def guide_meta(slug):
    t = rd('guides/%s.html' % slug)
    get = lambda k: re.search(r'<!--%s: (.*?)-->' % k, t).group(1)
    return dict(slug=slug, title=get('title'), desc=get('desc'), short=get('short'), body=re.sub(r'<!--.*?-->\n?', '', t))
G = [guide_meta(g) for g in GUIDES]
PAGES = ['about', 'how-matching-works', 'pricing', 'privacy-and-safety', 'faq', 'is-this-profile-real', 'is-this-profile-real-hi', 'is-this-profile-real-gu', 'sample-verified-profile', 'brampton-matrimony', 'mississauga-matrimony',
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
guide_links = ''.join(f'<a href="{g["slug"]}.html">{g["short"]}</a>' for g in G)
for _k, _v in [('<!--GUIDES-->', guide_links), ('<!--SOCIAL-->', ''.join(f'<a href="{u}" target="_blank" rel="noopener me">{n}</a>' for n, u in SOCIAL))]:
    assert body.count(_k) == 1, _k
    body = body.replace(_k, _v)
faq = faq_from(body)
assert len(faq) >= 10, 'home FAQ not found'
home_ld = {'@context': 'https://schema.org', '@graph': [
    ORG,
    {'@type': 'WebSite', '@id': SITE + '#site', 'url': SITE, 'name': 'NeuMarry', 'publisher': {'@id': SITE + '#org'}, 'inLanguage': 'en'},
    {'@type': 'MobileApplication', 'name': 'NeuMarry', 'operatingSystem': 'ANDROID', 'applicationCategory': 'LifestyleApplication',
     'description': HOME_DESC, 'url': SITE, 'publisher': {'@id': SITE + '#org'}, 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'CAD'}},
    {'@type': 'WebApplication', 'name': 'NeuMarry', 'operatingSystem': 'Any web browser', 'applicationCategory': 'LifestyleApplication', 'browserRequirements': 'Requires JavaScript',
     'description': HOME_DESC, 'url': SITE + 'app/', 'publisher': {'@id': SITE + '#org'}, 'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'CAD'}},
] + ([{'@type': 'FAQPage', 'mainEntity': faq}] if faq else [])}
HOME_HEAD = head
HOME_BODY = body
HOME_ALT = (f'<link rel="alternate" hreflang="en" href="{SITE}"><link rel="alternate" hreflang="fr" href="{SITE}fr/">'
            f'<link rel="alternate" hreflang="x-default" href="{SITE}">')
# Language switch: a pill in the header (computer) and a link above the title (phone). French copy in fr/.
def home_lang(href, code, label, text):
    return (f'<a class="langh" href="{href}" hreflang="{code}" lang="{code}" aria-label="{label}" '
            f'onclick="try{{localStorage.setItem(\'rm.lang\',\'{code}\')}}catch(e){{}}">{text}</a>')
def put_lang(b, href, code, label, text):
    for k in ('<!--LANG-->', '<!--LANGHERO-->'):
        assert b.count(k) == 1, k
        b = b.replace(k, home_lang(href, code, label, text))
    return b
body = put_lang(body, 'fr/', 'fr', 'Lire en français', 'Français')
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write('<!doctype html><html lang="en"><head>' + meta + HOME_ALT + HOME_HEAD + ld(home_ld) + '</head><body class="nm-home">' + body + '</body></html>')

FOOT_GUIDES = ''.join(f'<a class="link" href="{g["slug"]}.html">{g["short"]}</a>' for g in P + G)
FR_DIR = os.path.join(H, 'fr', 'pages')
FR_FILES = sorted(f[:-5] for f in os.listdir(FR_DIR) if f.endswith('.html')) if os.path.isdir(FR_DIR) else []
FR_LEGAL_DIR = os.path.join(H, 'fr', 'legal')
FR_LEGAL = [x for x in ('privacy', 'terms') if os.path.exists(os.path.join(FR_LEGAL_DIR, x + '.body.html'))] if FR_FILES else []
FR_SLUGS = FR_FILES + (['work-with-us'] if FR_FILES else []) + FR_LEGAL
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
<header><div class="wrap"><a class="brand" href="./"><img class="bmk" src="img/nm-mark.png" alt="" width="34" height="22" style="width:34px;height:22px;object-fit:contain;flex:none">NeuMarry</a><nav><a class="hl" href="work-with-us.html">Work with us</a><a href="app/">Open the app</a></nav></div></header>
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
# Old payment return page (events are closed); kept so old links still open (not for search engines).
page('paid', 'Payment', 'NeuMarry payment page.')
page('bio', 'Family biodata', 'A private NeuMarry profile card shared with family.')
page('partner', 'Partner with NeuMarry', 'Matrimonial bureaus and community groups can partner with NeuMarry.')
_tp = os.path.join(OUT, 'partner.html'); _th = open(_tp, encoding='utf-8').read().replace('content="index,follow,max-image-preview:large"', 'content="noindex,nofollow"'); open(_tp, 'w', encoding='utf-8').write(_th)
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

# ---------- Work with NeuMarry: bureau and community partner program ----------
def wwu_form(role=None):
    roles = [('bureau', 'A bureau or community group')]
    pick = '' if role else ('<fieldset class="fset"><legend>I am</legend>' + ''.join(
        f'<label class="opt"><input type="radio" name="role" value="{v}"{" checked" if i == 0 else ""}><span>{l}</span></label>' for i, (v, l) in enumerate(roles)) + '</fieldset>')
    hidden = f'<input type="hidden" name="role" value="{role}">' if role else ''
    return f"""<form class="wform" id="wform" novalidate>{pick}{hidden}
<label>Your name<input name="name" required maxlength="60" autocomplete="name"></label>
<label>Bureau or group (optional)<input name="org" maxlength="80"></label>
<label>City and country<input name="city" required maxlength="60" placeholder="e.g. Brampton, Canada"></label>
<label>Phone or email<input name="contact" required maxlength="80" autocomplete="email"></label>
<label>Anything we should know (optional)<textarea name="note" maxlength="500" rows="3" placeholder="Languages you speak, communities you work with"></textarea></label>
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

WWU_TITLE = 'Work with NeuMarry: matrimonial bureaus and community groups'
WWU_DESC = 'NeuMarry partners with matrimonial bureaus and community groups in every country. Earn 10% of the first Gold purchase of members you bring. Apply in two minutes.'
wwu_main = f"""<p class="crumbs"><a href="./">NeuMarry</a> › Work with us</p>
<h1>Work with NeuMarry</h1>
<p class="lede">NeuMarry is a verified matrimony app for people living away from the country they grew up in. We partner with matrimonial bureaus and community groups, in every country.</p>
<div class="roles">
<a class="role" href="#apply"><b>Matrimonial bureaus and community groups</b><span class="pay">10% + ₹1,500 per engagement</span><span>Earn 10% of the first Gold purchase of every member who joins with your partner code, plus ₹1,500 when a couple you brought gets engaged. Members always sign up themselves.</span><span class="more">Apply below →</span></a>
</div>
<h2 id="apply">Apply in two minutes</h2>
<p>Tell us who you are and how to reach you. Our team replies within 3 working days.</p>
{wwu_form('bureau')}"""
shell('work-with-us', WWU_TITLE, WWU_DESC, wwu_main, ld({'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
    {'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE}, {'@type': 'ListItem', 'position': 2, 'name': 'Work with us', 'item': SITE + 'work-with-us.html'}]}))


# ---------- About, feature and city pages (src/pages) ----------
for p in P:
    url = SITE + p['slug'] + '.html'
    loc = ('city', 'country')
    near = [o for o in P if o['slug'] != p['slug'] and (o['kind'] in loc) == (p['kind'] in loc)]
    others = near + [o for o in P if o['slug'] != p['slug'] and o not in near] + [g for g in G if g['slug'] in ('verified-matrimony', 'toronto-matrimony')]
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
    fb = put_lang(fb, '../', 'en', 'Read in English', 'English').replace('href="./"', 'href="__FRHOME__"')
    fb = fr_fix_links(fb).replace('href="../app/"', 'href="../app/" onclick="try{localStorage.setItem(\'rm.lang\',\'fr\')}catch(e){}"').replace('href="__FRHOME__"', 'href="./"')
    fb = re.sub(r'src="(img|js)/', r'src="../\1/', fb)
    FR_HOME_TITLE = 'NeuMarry : mariage vérifié pour ceux qui vivent à l’étranger'
    FR_HOME_DESC = 'Application matrimoniale vérifiée pour qui vit loin du pays où il a grandi, de toutes les communautés. Suggestions selon origines, ville et valeurs. Gratuit.'
    fh = re.sub(r'<script type="application/ld\+json">.*?</script>', '', HOME_HEAD, flags=re.S)
    fh = re.sub(r'<title>.*?</title>', '<title>' + FR_HOME_TITLE + '</title>', fh, flags=re.S)
    fmeta = ('<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
             f'<meta name="description" content="{esc(FR_HOME_DESC)}">' + social(FR_HOME_TITLE, FR_HOME_DESC, SITE + 'fr/').replace('content="en_CA"', 'content="fr_CA"')
             .replace('href="icon-192.png"', 'href="../icon-192.png"').replace('href="apple-touch-icon.png"', 'href="../apple-touch-icon.png"'))
    fld = ld({'@context': 'https://schema.org', '@type': 'WebPage', '@id': SITE + 'fr/', 'url': SITE + 'fr/', 'name': FR_HOME_TITLE, 'description': FR_HOME_DESC,
              'inLanguage': 'fr-CA', 'isPartOf': {'@id': SITE + '#site'}, 'publisher': ORG})
    fhtml = '<!doctype html><html lang="fr-CA"><head>' + fmeta + HOME_ALT + fh + fld + '</head><body class="nm-home">' + fb + '</body></html>'
    fhtml = re.sub(r'(src|href)="(icon-\d+\.png|apple-touch-icon\.png|og-image\.png)"', r'\1="../\2"', fhtml)
    open(os.path.join(OUT, 'fr', 'index.html'), 'w', encoding='utf-8').write(fhtml)
    def fr_write(f, url, main, graph):
        head = social(f['title'], f['desc'], url).replace('content="en_CA"', 'content="fr_CA"').replace('href="icon-192.png"', 'href="../icon-192.png"').replace('href="apple-touch-icon.png"', 'href="../apple-touch-icon.png"')
        html = f"""<!doctype html><html lang="fr-CA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{f['title']}</title><meta name="description" content="{esc(f['desc'])}">{head}{alternates(f['slug'])}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600&family=Nunito+Sans:wght@400;600;700;800&display=swap">
<link rel="stylesheet" href="../legal.css">{LANG_CSS}{ld({'@context': 'https://schema.org', '@graph': graph})}</head><body>
<header><div class="wrap"><a class="brand" href="../"><img class="bmk" src="../img/nm-mark.png" alt="" width="34" height="22" style="width:34px;height:22px;object-fit:contain;flex:none">NeuMarry</a><nav><a class="hl" href="work-with-us.html"><span class="lg">Travailler avec nous</span><span class="sh">Collaborer</span></a><a href="../app/" onclick="try{{localStorage.setItem('rm.lang','fr')}}catch(e){{}}">Ouvrir l’app</a></nav></div></header>
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

    # French "Work with us" page
    spec = importlib.util.spec_from_file_location('work_fr', os.path.join(H, 'fr', 'work_fr.py')); wf = importlib.util.module_from_spec(spec); spec.loader.exec_module(wf)
    OPTIONAL_ON_HOST = {'<legend>I am</legend>', '<span>A bureau or community group</span>'}
    def fr_tr(html, pairs):
        for en_, fr_ in pairs:
            assert en_ in html or en_ in OPTIONAL_ON_HOST, 'French work pages: English text not found: ' + en_[:70]
            html = html.replace(en_, fr_)
        return html
    for slug, title, desc, short, src, pairs in [('work-with-us', wf.WWU_TITLE, wf.WWU_DESC, 'Travailler avec nous', wwu_main, wf.WWU)]:
        url = SITE + 'fr/' + slug + '.html'
        main = fr_fix_links(fr_tr(fr_tr(src, pairs), wf.FORM))
        graph = [{'@type': 'WebPage', '@id': url, 'url': url, 'name': title, 'description': desc, 'inLanguage': 'fr-CA', 'isPartOf': {'@id': SITE + '#site'}, 'publisher': ORG, 'dateModified': TODAY},
                 {'@type': 'BreadcrumbList', 'itemListElement': [{'@type': 'ListItem', 'position': 1, 'name': 'NeuMarry', 'item': SITE},
                                                                {'@type': 'ListItem', 'position': 2, 'name': short, 'item': url}]}]
        fr_write({'slug': slug, 'title': title, 'desc': desc}, url, main, graph)

# llms.txt: a plain summary for AI assistants (llmstxt.org format)
llms = ['# NeuMarry', '',
        '> NeuMarry is a verified matrimony app for people living away from the country they grew up in, from every country and community. '
        'Members match on values, lifestyle, roots and distance, and families can see safe facts through a private family link. Launching in Toronto, Canada in November 2026; the app works in every country.', '',
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
urls = [(SITE, '1.0', 'weekly')] + [(SITE + p['slug'] + '.html', '0.8', 'monthly') for p in P] + [(SITE + g['slug'] + '.html', '0.8', 'monthly') for g in G] + [(SITE + 'work-with-us.html', '0.7', 'monthly')] + [(SITE + n + '.html', '0.3', 'yearly') for n in ('privacy', 'terms', 'delete-account', 'child-safety')] + ([(SITE + 'fr/', '0.8', 'weekly')] if FR_SLUGS else []) + [(SITE + 'fr/' + x + '.html', '0.6', 'monthly') for x in FR_SLUGS]
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
# ---------- Website v2 for inner pages (plum hero band, cards; content unchanged) ----------
# LIVE (his ok 1 Nov 20:40 on the mock). NM_V2PAGES=0 switches it off for a test build.
V2PAGES = os.environ.get('NM_V2PAGES', '1') != '0'
V2_SKIP = ('bio.html', 'partner.html', 'paid.html')
def v2page(h):
    m = re.search(r'<link rel="stylesheet" href="((?:\.\./)?)legal\.css">', h)
    if not m or '<main><div class="wrap">' not in h: return h
    h = h.replace(m.group(0), m.group(0) + f'<link rel="stylesheet" href="{m.group(1)}v2pages.css">', 1)
    a = h.index('<main><div class="wrap">') + len('<main><div class="wrap">')
    e = h.find('</h1>', a)
    if e < 0 or h.find('</main>', a) < e: return h
    e += 5
    while True:
        mm = re.match(r'\s*<p class="(?:meta|lede)">.*?</p>', h[e:], flags=re.S)
        if not mm: break
        e += mm.end()
    hero = h[a:e]
    return h[:a - len('<main><div class="wrap">')] + '<section class="phero"><div class="wrap">' + hero + '</div></section><main><div class="wrap">' + h[e:]
if V2PAGES:
    open(os.path.join(OUT, 'v2pages.css'), 'w', encoding='utf-8').write(rd('v2pages.css'))
    for sub in ('', 'fr'):
        d = os.path.join(OUT, sub)
        if not os.path.isdir(d): continue
        for fn in os.listdir(d):
            if not fn.endswith('.html') or fn in V2_SKIP or fn == 'index.html': continue
            fp = os.path.join(d, fn); h0 = open(fp, encoding='utf-8').read(); h1 = v2page(h0)
            if h1 != h0: open(fp, 'w', encoding='utf-8').write(h1)

def banner(lang):
    b = BANNER_TXT[lang]
    return ('<div id="nm-consent" role="dialog" aria-live="polite" aria-label="' + b['link'] + '" hidden>'
            '<style>#nm-consent{position:fixed;left:12px;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:60;max-width:560px;margin:0 auto;'
            'background:#fff;color:#13201A;border:1px solid #DDEEE5;border-radius:18px;box-shadow:0 10px 30px rgba(20,60,40,.16);padding:14px 16px;'
            'font:14px/1.5 "Nunito Sans",system-ui,-apple-system,"Segoe UI",sans-serif}'
            '#nm-consent p{margin:0 0 10px}#nm-consent a{color:#0E7A55;font-weight:700}'
            '#nm-consent .b{display:flex;gap:10px}#nm-consent button{flex:1;min-height:42px;border-radius:999px;font:700 14px/1 "Nunito Sans",system-ui,sans-serif;cursor:pointer}'
            '#nm-consent .y{background:linear-gradient(150deg,#D8F8EA,#9FE6C6);color:#0B4D36;border:1px solid #fff}#nm-consent .n{background:#fff;color:#13201A;border:1px solid #D0E3C9}'
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

# Closed pages (in-person events ended 7 Nov 2026): a tiny redirect, noindex, not in the sitemap.
for old, dest, canon in [('matrimony-events-toronto', './', SITE), ('event-host-toronto', 'work-with-us.html', SITE + 'work-with-us.html')]:
    for sub in ('', 'fr'):
        if sub and not os.path.isdir(os.path.join(OUT, sub)): continue
        open(os.path.join(OUT, sub, old + '.html'), 'w', encoding='utf-8').write(
            '<!doctype html><html><head><meta charset="utf-8"><title>NeuMarry</title><meta name="robots" content="noindex">'
            f'<link rel="canonical" href="{canon}"><meta http-equiv="refresh" content="0; url={dest}"></head>'
            f'<body><p><a href="{dest}">Open NeuMarry</a></p></body></html>')
assert 'events-toronto' not in open(os.path.join(OUT, 'sitemap.xml')).read() and 'event-host' not in open(os.path.join(OUT, 'sitemap.xml')).read()

# Glass look on every page (his ok 7 Nov 2026): glass.css loads last, so it wins over the page styles. Not in app/ (the app has its own).
for _root, _dirs, _files in os.walk(OUT):
    _rel = os.path.relpath(_root, OUT)
    if _rel.split(os.sep)[0] in ('app', 'app-update', 'src', '.git', 'social', 'univ'):
        continue
    for _f in _files:
        if not _f.endswith('.html'):
            continue
        _p = os.path.join(_root, _f); _h = open(_p, encoding='utf-8').read()
        if 'glass.css' in _h or 'http-equiv="refresh"' in _h or '</head>' not in _h or '<body class="nm-home">' in _h:
            continue
        _href = ('../' * (0 if _rel == '.' else len(_rel.split(os.sep)))) + 'glass.css'
        open(_p, 'w', encoding='utf-8').write(_h.replace('</head>', f'<link rel="stylesheet" href="{_href}"></head>', 1))

# ---------- New NeuMarry home (Plan 15; owner ok 8 Nov 2026 01:11). Switched on together with the new app. ----------
LAUNCH15 = True
if LAUNCH15:
    # Split go-live (his 'A', 9 Nov 2026 00:39): neumarry.com = matrimony only. Home = next/homenm*.html (bento, no faces);
    # the broad home (home15) now lives on neuamigo.com (built from these same sources by rootmate/scripts/build_neuamigo_site.py).
    PLAY = 'https://play.google.com/store/apps/details?id=com.neuconet.neumarry'
    NM_HOME = os.environ.get('NM_HOME', 'homenm')
    for src_name, out_rel, lang, other, legal in ((NM_HOME + '.html', 'index.html', 'en', 'fr/', ''), (NM_HOME + '_fr.html', os.path.join('fr', 'index.html'), 'fr', '../', 'fr/')):
        h = rd(os.path.join('next', src_name))
        up = '../' if lang == 'fr' else ''
        h = h.replace('src="img/icon-192.png"', 'src="/app/img/icon-192.png"').replace('src="img/', 'src="/app/img/p15/')
        h = h.replace('<a class="logo" href="#">', '<a class="logo" href="/' + ('fr/' if lang == 'fr' else '') + '">')
        h = h.replace('class="btn p sm" href="#"', 'class="btn p sm" href="/app/"').replace('class="btn p" href="#"', 'class="btn p" href="/app/"').replace('class="btn s" href="#"', 'class="btn s" href="' + PLAY + '" rel="noopener"')
        h = h.replace('class="t g w2" href="#"', 'class="t g w2" href="/app/"').replace('class="t g" href="#"', 'class="t g" href="/app/"').replace('class="bz g" href="#"', 'class="bz g" href="/app/"')
        fl = ['privacy.html', 'terms.html', 'delete-account.html', 'child-safety.html']
        for i, m in enumerate(re.findall(r'<footer>.*?</footer>', h, flags=re.S)[:1]):
            f2 = m
            links = re.findall(r'<a href="#">', f2)
            for j in range(min(4, len(links))):
                tgt = (up + legal if j < 2 else up) + fl[j] if lang == 'fr' else fl[j]
                f2 = f2.replace('<a href="#">', '<a href="' + tgt + '">', 1)
            f2 = f2.replace('<a href="#">support@neumarry.com</a>', '<a href="mailto:support@neumarry.com">support@neumarry.com</a>')
            f2 = f2.replace('<a class="lang" href="#">', '<a class="lang" href="' + other + '" hreflang="' + ('fr' if lang == 'en' else 'en') + '">')
            h = h.replace(m, f2)
        desc = (('Verified matrimony for people living abroad: meet someone from your roots, in your city, with your family by your side.' if lang == 'en'
                 else 'Mariage vérifié pour les personnes qui vivent à l’étranger : rencontrez quelqu’un de vos racines, dans votre ville, avec votre famille.')
                if NM_HOME == 'homenm' else
                ('Rooms, job referrals, a flight buddy for parents, events and friends for people living abroad. Now open in Toronto.' if lang == 'en'
                 else 'Chambres, recommandations d’emploi, compagnon de voyage pour les parents, événements et amis pour les personnes qui vivent à l’étranger.'))
        url = SITE + ('fr/' if lang == 'fr' else '')
        h = h.replace('</title>', '</title>\n<meta name="description" content="' + desc + '"><link rel="canonical" href="' + url + '">'
                      '<link rel="alternate" hreflang="en" href="' + SITE + '"><link rel="alternate" hreflang="fr" href="' + SITE + 'fr/">'
                      '<meta property="og:title" content="NeuMarry"><meta property="og:description" content="' + desc + '"><meta property="og:url" content="' + url + '">', 1)
        open(os.path.join(OUT, out_rel), 'w', encoding='utf-8').write(h)
    print('new home (Plan 15) built')
print('site built')
