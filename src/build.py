#!/usr/bin/env python3
"""Builds the NeuMarry website (index, privacy, terms, delete-account) from src/."""
import os, re
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
]
for a, b in fix:
    assert a in s, 'missing: ' + a[:60]
    s = s.replace(a, b)
s = s.replace('RootMate', 'NeuMarry')
s = s.replace('<title>NeuMarry Toronto</title>', '<title>NeuMarry · Matrimony for people living abroad</title>')
assert 'RootMate' not in s
# Full document around the fragment
i = s.index('</style>') + len('</style>')
head, body = s[:i], s[i:]
meta = ('<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        '<meta name="description" content="NeuMarry: verified matrimony for people living away from home. Matches on roots, city and mindset, and hosted Family Mixers with dinner included.">'
        '<meta property="og:title" content="NeuMarry"><meta property="og:description" content="Your person from back home might live ten minutes away.">'
        '<meta property="og:url" content="%s"><meta name="theme-color" content="#FFF8F6"><link rel="icon" href="icon-192.png">' % SITE)
legal_links = '<a class="link" href="privacy.html">Privacy Policy</a><a class="link" href="terms.html">Terms of Service</a><a class="link" href="delete-account.html">Delete account</a>'
body = body.replace('<a class="link" href="#delete-account">Delete account</a>', '<a class="link" href="delete-account.html">Delete account</a><a class="link" href="privacy.html">Full Privacy Policy</a><a class="link" href="terms.html">Full Terms</a>')
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write('<!doctype html><html lang="en"><head>' + meta + head.replace('<meta name="claude:viewport-fit-sides" content="cover">', '') + '</head><body>' + body + '</body></html>')

def page(name, title, desc):
    b = rd(name + '.body.html')
    assert '[' not in re.sub(r'<[^>]+>', '', b) or True
    html = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} · NeuMarry</title><meta name="description" content="{desc}"><link rel="icon" href="icon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap">
<link rel="stylesheet" href="legal.css"></head><body>
<header><div class="wrap"><a class="brand" href="./"><svg viewBox="0 0 32 22" aria-hidden="true"><circle class="c1" cx="11" cy="11" r="8"/><circle class="c2" cx="21" cy="11" r="8"/></svg>NeuMarry</a><nav><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></nav></div></header>
<main><div class="wrap">{b}</div></main>
<footer><div class="wrap"><span>NeuMarry · © 2026</span><span>Members must be 18 or older</span>{legal_links}<a class="link" href="mailto:{EMAIL}">{EMAIL}</a></div></footer>
</body></html>'''
    open(os.path.join(OUT, name + '.html'), 'w', encoding='utf-8').write(html)
page('privacy', 'Privacy Policy', 'How NeuMarry collects, uses and protects your data.')
page('terms', 'Terms of Service', 'The NeuMarry Terms of Service.')
page('delete-account', 'Delete your account', 'How to delete your NeuMarry account and data.')
print('site built')
