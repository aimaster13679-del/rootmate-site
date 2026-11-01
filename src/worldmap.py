# World connections map for the home hero (his ask 1 Nov 15:57: more countries, every flag its own line,
# lines must not all meet in one city). Dotted world map drawn from simple continent outlines, equirectangular.
# Each pair = grew up in (flag) -> lives in (city). Examples only, not member counts.
import json

LAND = {
 'na': [(-168,66),(-162,70),(-140,70),(-125,70),(-95,72),(-80,73),(-62,67),(-60,55),(-55,52),(-66,45),(-70,42),(-76,35),(-81,31),(-80,25),(-82,27),(-84,30),(-90,29),(-97,26),(-97,22),(-105,20),(-110,23),(-115,30),(-118,34),(-124,40),(-124,48),(-130,55),(-140,60),(-152,58),(-158,56),(-165,60)],
 'ca': [(-105,20),(-97,16),(-92,15),(-86,12),(-83,9),(-77,8),(-78,10),(-83,15),(-87,21),(-90,21),(-97,22)],
 'sa': [(-77,8),(-72,12),(-62,10),(-52,5),(-50,0),(-35,-5),(-35,-9),(-39,-15),(-41,-22),(-48,-26),(-53,-33),(-57,-38),(-63,-41),(-65,-45),(-68,-50),(-70,-53),(-74,-50),(-73,-40),(-71,-30),(-70,-18),(-76,-14),(-81,-5),(-80,0)],
 'gl': [(-55,60),(-44,60),(-38,66),(-22,70),(-20,77),(-50,78),(-60,76),(-56,70),(-53,66)],
 'is': [(-24,64),(-14,64),(-15,66.5),(-22,66.5)],
 'eu': [(-10,36),(-9,43),(-2,44),(-5,48),(2,51),(8,54),(10,57),(5,58),(5,62),(12,66),(20,70),(30,71),(42,68),(60,69),(60,55),(48,45),(40,42),(35,42),(28,41),(26,38),(23,36),(20,40),(18,40),(16,38),(12,42),(8,44),(3,43),(-2,37),(-6,36)],
 'as': [(60,69),(70,73),(80,73),(100,77),(115,74),(130,71),(150,71),(170,70),(180,68),(180,65),(172,62),(163,60),(157,52),(142,59),(137,54),(140,48),(135,43),(129,42),(127,38),(126,35),(121,40),(118,38),(122,31),(120,25),(110,20),(106,17),(109,12),(105,9),(101,13),(100,7),(103,1),(98,8),(98,16),(94,20),(90,22),(86,21),(80,15),(77,8),(73,16),(72,21),(67,25),(62,25),(57,26),(56,24),(59,22),(52,17),(44,12),(43,15),(39,22),(35,28),(34,31),(35,36),(28,37),(26,41),(35,42),(40,42),(48,45),(60,55)],
 'af': [(-17,21),(-17,15),(-12,8),(-8,4),(-2,5),(8,4),(10,0),(12,-6),(13,-12),(12,-18),(15,-27),(18,-33),(20,-35),(26,-34),(33,-28),(35,-22),(40,-15),(40,-10),(40,-3),(43,0),(51,11),(43,12),(38,18),(33,30),(25,32),(20,31),(10,34),(10,37),(-1,36),(-6,36),(-10,30)],
 'mg': [(44,-25),(47,-25),(50,-15),(49,-12),(44,-17)],
 'uk': [(-6,50),(2,51),(0,54),(-2,57),(-3,59),(-6,58),(-5,55),(-3,54),(-5,52)],
 'ie': [(-10,52),(-6,52),(-6,55),(-8,55.3),(-10,54)],
 'jp': [(130,31),(135,34),(140,35),(142,40),(141,45),(145,44),(140,41),(136,37),(131,34)],
 'ph': [(120,18.5),(122.5,18.5),(126,7),(125,5.5),(122,7.5),(119.5,11)],
 'su': [(95,5.5),(98,4),(106,-6),(104,-6),(100,-2)],
 'jv': [(106,-5.8),(114.5,-7),(114.5,-8.7),(106,-7.8)],
 'bo': [(109,1),(115,5),(119,6.5),(118,0),(116,-4),(110,-3)],
 'ng': [(131,-1),(141,-3),(150,-10),(147,-9.5),(141,-9),(137,-5)],
 'au': [(114,-22),(114,-34),(118,-35),(124,-34),(131,-31),(138,-35),(141,-38),(146,-39),(150,-37),(153,-31),(153,-25),(146,-19),(142,-11),(141,-17),(136,-12),(130,-12),(126,-14),(122,-18)],
 'nz': [(172,-35),(175,-37),(178,-38),(175,-41.5),(171,-46),(167,-46),(171,-42)],
 'lk': [(80,10),(82,7),(81,6),(80,7)],
}
# (flag, grew-up country EN, FR, lon, lat, lives-in city EN, FR, lon, lat, label dx, dy)
PAIRS = [
 ('🇮🇳', 'India', 'Inde', 78, 22, 'Toronto', 'Toronto', -79.4, 43.7, 4, 6),
 ('🇳🇬', 'Nigeria', 'Nigeria', 8, 9.5, 'Houston', 'Houston', -95.4, 29.8, 9, 3),
 ('🇵🇭', 'Philippines', 'Philippines', 122, 13, 'Dubai', 'Dubaï', 55.3, 25.2, 0, 0),
 ('🇲🇽', 'Mexico', 'Mexique', -102, 23, 'Chicago', 'Chicago', -87.6, 41.9, -6, 0),
 ('🇱🇧', 'Lebanon', 'Liban', 35.8, 33.9, 'Montréal', 'Montréal', -73.6, 45.5, 6, -7),
 ('🇰🇷', 'Korea', 'Corée', 127.8, 36.5, 'Sydney', 'Sydney', 151.2, -33.9, 0, 0),
 ('🇵🇱', 'Poland', 'Pologne', 19, 52, 'Dublin', 'Dublin', -6.3, 53.3, 0, -3),
 ('🇰🇪', 'Kenya', 'Kenya', 37.9, 0.5, 'London', 'Londres', -0.1, 51.5, 0, 0),
 ('🇧🇷', 'Brazil', 'Brésil', -47, -12, 'Lisbon', 'Lisbonne', -9.1, 38.7, 0, 0),
 ('🇵🇰', 'Pakistan', 'Pakistan', 69, 30, 'Berlin', 'Berlin', 13.4, 52.5, -12, -8),
 ('🇨🇳', 'China', 'Chine', 104, 34, 'Vancouver', 'Vancouver', -123.1, 49.3, 0, 0),
 ('🇻🇳', 'Vietnam', 'Viêt Nam', 106, 15, 'Melbourne', 'Melbourne', 145, -37.8, 0, 0),
 ('🇬🇭', 'Ghana', 'Ghana', -1, 7.9, 'New York', 'New York', -74, 40.7, -10, 0),
 ('🇨🇴', 'Colombia', 'Colombie', -74, 4.6, 'Madrid', 'Madrid', -3.7, 40.4, 0, 0),
 ('🇪🇬', 'Egypt', 'Égypte', 30, 26, 'Milan', 'Milan', 9.2, 45.5, -6, 7),
 ('🇯🇲', 'Jamaica', 'Jamaïque', -77, 18, 'Brampton', 'Brampton', -79.8, 43.7, 6, -4),
]
W, H, LON0, LAT0, K = 700, 260, -170, 80, 2.0
def xy(lon, lat): return round((lon - LON0) * K, 1), round((LAT0 - lat) * K, 1)
def inside(pt, poly):
    x, y = pt; c = False; n = len(poly)
    for i in range(n):
        x1, y1 = poly[i]; x2, y2 = poly[(i + 1) % n]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1: c = not c
    return c
def dots(step=2.6):
    out = []; lat = 78.0
    while lat > -50:
        lon = -170.0 + (step / 2 if int(round((78 - lat) / step)) % 2 else 0)
        while lon < 180:
            if any(inside((lon, lat), p) for p in LAND.values()): out.append(xy(lon, lat))
            lon += step
        lat -= step
    return out

def svg():
    d = ''.join(f'M{x} {y}h0' for x, y in dots())
    arcs, ends = [], []
    for i, p in enumerate(PAIRS):
        x1, y1 = xy(p[3], p[4]); x2, y2 = xy(p[7], p[8])
        dist = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** .5
        cx, cy = (x1 + x2) / 2, min(y1, y2) - max(18, dist * .28)
        arcs.append(f'<path class="wm-arc" data-i="{i}" d="M{x1} {y1}Q{cx:.1f} {cy:.1f} {x2} {y2}"/>')
        ends.append(f'<circle class="wm-to" data-i="{i}" cx="{x2}" cy="{y2}" r="3"/>')
    return ('<svg class="wm-svg" viewBox="0 0 700 260" aria-hidden="true">'
            f'<path class="wm-land" d="{d}"/>' + ''.join(arcs) + ''.join(ends) + '</svg>')

def flags():
    out = []
    for i, p in enumerate(PAIRS):
        x, y = xy(p[3], p[4])
        out.append(f'<span class="wm-flag" data-i="{i}" style="left:{(x + p[9]) / W * 100:.2f}%;top:{(y + p[10]) / H * 100:.2f}%">{p[0]}</span>')
    return ''.join(out)

CSS = """
.wm{position:relative;width:100%;max-width:640px;margin:0 auto;padding:14px 14px 16px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12)}
.wm-head{display:flex;justify-content:space-between;align-items:baseline;gap:10px;margin:0 2px 10px;font-size:11.5px;white-space:nowrap;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.62)}
.wm-head b{color:#FFB4C2;font-weight:800}
.wm-box{position:relative;aspect-ratio:700/260}
.wm-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.wm-land{stroke:rgba(255,255,255,.26);stroke-width:2.6;stroke-linecap:round;fill:none}
.wm-arc{fill:none;stroke:#FFB4C2;stroke-opacity:.28;stroke-width:1.1;transition:stroke-opacity .5s,stroke-width .5s}
.wm-arc.on{stroke:#FFD7A8;stroke-opacity:1;stroke-width:2.2;stroke-dasharray:5 5;animation:wmdash 1.4s linear infinite}
@keyframes wmdash{to{stroke-dashoffset:-20}}
.wm-to{fill:#FF8FA1;opacity:.55;transition:opacity .5s}.wm-to.on{opacity:1;fill:#FFD7A8;filter:drop-shadow(0 0 6px #FFD7A8)}
.wm-flag{position:absolute;transform:translate(-50%,-50%);font-size:clamp(11px,2.6vw,17px);line-height:1;filter:drop-shadow(0 1px 2px rgba(0,0,0,.45));transition:transform .4s;z-index:1}
.wm-flag.on{transform:translate(-50%,-50%) scale(1.55);z-index:2}
.wm-cap{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:12px;min-height:40px;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.1);font-size:14px;font-weight:700;color:#fff;text-align:center}
.wm-cap small{font-weight:600;color:rgba(255,255,255,.65)}
.wm-cap .ar{color:#FFD7A8}
.wm-note{margin:8px 0 0;font-size:11.5px;color:rgba(255,255,255,.5);text-align:center}
@media (prefers-reduced-motion:reduce){.wm-arc.on{animation:none;stroke-dasharray:none}.wm-flag{transition:none}}
"""

def html(lang='en'):
    fr = lang == 'fr'
    data = [[p[0], p[2] if fr else p[1], p[6] if fr else p[5]] for p in PAIRS]
    head = ('<span>Racines ici, vie là-bas</span><b>16 parcours</b>' if fr
            else '<span>Roots here, home there</span><b>16 journeys</b>')
    note = ('Exemples de parcours, pas des chiffres de membres.' if fr else 'Example journeys, not member numbers.')
    js = ('<script>(function(){var D=' + json.dumps(data, ensure_ascii=False) + ',L=' + json.dumps(['Grandi en', 'vit à'] if fr else ['Grew up in', 'lives in'], ensure_ascii=False) +
          ',r=document.getElementById("wm"),c=document.getElementById("wm-cap"),i=0;if(!r)return;'
          'function s(n){r.querySelectorAll(".on").forEach(function(e){e.classList.remove("on")});r.querySelectorAll(\'[data-i="\'+n+\'"]\').forEach(function(e){e.classList.add("on")});'
          'var d=D[n];c.innerHTML="<small>"+L[0]+"</small> "+d[0]+" "+d[1]+" <span class=ar>→</span> <small>"+L[1]+"</small> "+d[2]}'
          's(0);if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;setInterval(function(){i=(i+1)%D.length;s(i)},2600)})();</script>')
    return (f'<div class="wm" id="wm"><div class="wm-head">{head}</div><div class="wm-box">{svg()}{flags()}</div>'
            f'<div class="wm-cap" id="wm-cap" aria-live="off"></div><p class="wm-note">{note}</p></div>' + js)
