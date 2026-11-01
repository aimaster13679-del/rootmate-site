/* NeuMarry app. Built from app/src by build.py. */
(function(){
"use strict";
/* ---------- Icons ---------- */
const IC={
 heart:'<path d="M12 20.5s-7.6-4.6-9.4-9.4C1.2 7.6 3.5 4.5 6.8 4.5c2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3 3.3 0 5.6 3.1 4.2 6.6-1.8 4.8-9.4 9.4-9.4 9.4z"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 star:'<path d="M12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
 chat:'<path d="M4 5.5h16v10.5H10l-5 4.5V16H4z"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.4 4.2-6.5 8-6.5s7 2.1 8 6.5"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 rings:'<circle cx="9" cy="12" r="5.5"/><circle cx="15" cy="12" r="5.5"/>',
 shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 badge:'<path d="M12 2.8l2.3 1.7 2.8-.1.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.1L12 21.2l-2.3-1.7-2.8.1-.9-2.7-2.3-1.6.9-2.7-.9-2.7 2.3-1.6.9-2.7 2.8.1z"/><path d="M8.6 12.2l2.3 2.3 4.5-4.6"/>',
 filter:'<path d="M4 6h16M7 12h10M10 18h4"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 018 0v3"/>',
 video:'<rect x="3" y="6" width="13" height="12" rx="2.5"/><path d="M16 10l5-3v10l-5-3z"/>',
 send:'<path d="M4.5 12L20 4.5 15 20l-2.8-6.2z"/><path d="M12.2 13.8L20 4.5"/>',
 back:'<path d="M15 5l-7 7 7 7"/>',
 chev:'<path d="M7 10l5 5 5-5"/>',
 more:'<circle cx="5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="19" cy="12" r="1.7"/>',
 flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
 pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z"/>',
 mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M15.5 4.8a3.5 3.5 0 010 6.4M18 14.8c1.8.8 3 2.5 3.5 5.2"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6v.2"/>',
 id:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2.3"/><path d="M5.8 16c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4M14.5 10h4M14.5 13.5h3"/>',
 camera:'<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
 eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
 crown:'<path d="M4 18h16M5 15l-1.5-8 5 4L12 5l3.5 6 5-4L19 15z"/>',
 sparkle:'<path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
 refresh:'<path d="M20 11a8 8 0 10-2.3 5.7M20 4v7h-7"/>',
 bolt:'<path d="M13 2.5L5 13.5h6.2L10 21.5l8.5-11.5h-6.3z"/>',
 ticket:'<path d="M3 8a2 2 0 002-2h14a2 2 0 002 2v2a2 2 0 000 4v2a2 2 0 00-2 2H5a2 2 0 00-2-2v-2a2 2 0 000-4z"/><path d="M14 6.5v11" stroke-dasharray="2 2.5"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
 gift:'<rect x="3.5" y="9" width="17" height="11.5" rx="2"/><path d="M2.5 9h19M12 9v11.5M12 9c-2-4.5-7-4.5-5.5-1.5C7.6 9 12 9 12 9zm0 0c2-4.5 7-4.5 5.5-1.5C16.4 9 12 9 12 9z"/>',
 key:'<circle cx="8" cy="14" r="4.5"/><path d="M11.3 10.8L20 2.5M16.5 6l2.5 2.5M14 8.5l2 2"/>',
 home:'<path d="M3.5 11L12 4l8.5 7M6 9.5V20h12V9.5"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z"/>'
};
function ic(n,cls){const f=n==='more';return `<svg viewBox="0 0 24 24" class="ic${f?' fill':''}${cls?' '+cls:''}" aria-hidden="true">${IC[n]||''}</svg>`}
const SIL='<svg class="av-sil" viewBox="0 0 100 92" aria-hidden="true"><circle cx="50" cy="34" r="19"/><path d="M8 92c4-24 20-36 42-36s38 12 42 36z"/></svg>';

/* ---------- World data ---------- */
const CMAP={};COUNTRIES.forEach(c=>{CMAP[c[0]]=c});
const COUNTRY_NAMES=COUNTRIES.map(c=>c[0]);
function statesOf(country){const c=CMAP[country];return c&&STATES[c[1]]?STATES[c[1]]:[]}
function dial(country){const c=CMAP[country];return c&&c[2]?'+'+c[2]:''}
function flag(country){const c=CMAP[country];return c?c[6]:''}
function stateCoords(country,state){const s=statesOf(country).find(x=>x[0]===state);return s?[s[1],s[2]]:null}
function countryCoords(country){const c=CMAP[country];return c?[c[4],c[5]]:null}

/* Cities: key -> [name, country, state, lat, lng]. Profiles live in these; others are suggestions. */
const CITIES={
 toronto:['Toronto','Canada','Ontario',43.653,-79.383], mississauga:['Mississauga','Canada','Ontario',43.589,-79.644], brampton:['Brampton','Canada','Ontario',43.731,-79.762],
 ottawa:['Ottawa','Canada','Ontario',45.421,-75.697], montreal:['Montreal','Canada','Quebec',45.502,-73.567], vancouver:['Vancouver','Canada','British Columbia',49.283,-123.121],
 surrey:['Surrey','Canada','British Columbia',49.191,-122.849], calgary:['Calgary','Canada','Alberta',51.045,-114.072], edmonton:['Edmonton','Canada','Alberta',53.546,-113.494], winnipeg:['Winnipeg','Canada','Manitoba',49.895,-97.138],
 'new-jersey':['Edison','United States','New Jersey',40.519,-74.412], 'new-york':['New York','United States','New York',40.713,-74.006], 'bay-area':['San Jose','United States','California',37.338,-121.886],
 seattle:['Seattle','United States','Washington',47.606,-122.332], houston:['Houston','United States','Texas',29.760,-95.370], chicago:['Chicago','United States','Illinois',41.878,-87.630],
 london:['London','United Kingdom','Greater London',51.507,-0.128], leicester:['Leicester','United Kingdom','East Midlands',52.637,-1.135], birmingham:['Birmingham','United Kingdom','West Midlands',52.486,-1.890],
 sydney:['Sydney','Australia','New South Wales',-33.869,151.209], melbourne:['Melbourne','Australia','Victoria',-37.814,144.963],
 dubai:['Dubai','United Arab Emirates','Dubai',25.205,55.271], abudhabi:['Abu Dhabi','United Arab Emirates','Abu Dhabi Emirate',24.454,54.377],
 berlin:['Berlin','Germany','Berlin',52.520,13.405], munich:['Munich','Germany','Bavaria',48.135,11.582]
};
const MORE_CITIES=`Hamilton|Canada|Ontario|43.26|-79.87;Kitchener|Canada|Ontario|43.45|-80.49;Waterloo|Canada|Ontario|43.46|-80.52;London|Canada|Ontario|42.98|-81.25;Windsor|Canada|Ontario|42.31|-83.04;Oakville|Canada|Ontario|43.47|-79.69;Markham|Canada|Ontario|43.86|-79.34;Vaughan|Canada|Ontario|43.84|-79.50;Milton|Canada|Ontario|43.52|-79.88;Regina|Canada|Saskatchewan|50.45|-104.61;Saskatoon|Canada|Saskatchewan|52.13|-106.67;Halifax|Canada|Nova Scotia|44.65|-63.58;Victoria|Canada|British Columbia|48.43|-123.37;Burnaby|Canada|British Columbia|49.25|-122.98;Abbotsford|Canada|British Columbia|49.05|-122.33;Quebec City|Canada|Quebec|46.81|-71.21;Laval|Canada|Quebec|45.61|-73.71;
Dallas|United States|Texas|32.78|-96.80;Austin|United States|Texas|30.27|-97.74;Atlanta|United States|Georgia|33.75|-84.39;Boston|United States|Massachusetts|42.36|-71.06;Los Angeles|United States|California|34.05|-118.24;San Francisco|United States|California|37.77|-122.42;Fremont|United States|California|37.55|-121.99;Sunnyvale|United States|California|37.37|-122.04;Philadelphia|United States|Pennsylvania|39.95|-75.17;Washington|United States|District of Columbia|38.91|-77.04;Phoenix|United States|Arizona|33.45|-112.07;Detroit|United States|Michigan|42.33|-83.05;Charlotte|United States|North Carolina|35.23|-80.84;Raleigh|United States|North Carolina|35.78|-78.64;Jersey City|United States|New Jersey|40.73|-74.08;Minneapolis|United States|Minnesota|44.98|-93.27;Denver|United States|Colorado|39.74|-104.99;Orlando|United States|Florida|28.54|-81.38;Miami|United States|Florida|25.76|-80.19;
Manchester|United Kingdom|North West England|53.48|-2.24;Leeds|United Kingdom|Yorkshire and the Humber|53.80|-1.55;Bradford|United Kingdom|Yorkshire and the Humber|53.80|-1.76;Coventry|United Kingdom|West Midlands|52.41|-1.51;Wolverhampton|United Kingdom|West Midlands|52.59|-2.13;Slough|United Kingdom|South East England|51.51|-0.59;Reading|United Kingdom|South East England|51.45|-0.97;Glasgow|United Kingdom|Scotland|55.86|-4.25;Edinburgh|United Kingdom|Scotland|55.95|-3.19;Cardiff|United Kingdom|Wales|51.48|-3.18;Belfast|United Kingdom|Northern Ireland|54.60|-5.93;
Brisbane|Australia|Queensland|-27.47|153.03;Perth|Australia|Western Australia|-31.95|115.86;Adelaide|Australia|South Australia|-34.93|138.60;Canberra|Australia|Australian Capital Territory|-35.28|149.13;
Sharjah|United Arab Emirates|Sharjah Emirate|25.35|55.42;Ajman|United Arab Emirates|Ajman Emirate|25.41|55.51;
Frankfurt|Germany|Hesse|50.11|8.68;Hamburg|Germany|Hamburg|53.55|9.99;Stuttgart|Germany|Baden-Württemberg|48.78|9.18;Cologne|Germany|North Rhine-Westphalia|50.94|6.96;Düsseldorf|Germany|North Rhine-Westphalia|51.23|6.77;
Auckland|New Zealand|Auckland Region|-36.85|174.76;Wellington|New Zealand|Wellington Region|-41.29|174.78;Christchurch|New Zealand|Canterbury Region|-43.53|172.64;
Singapore|Singapore||1.35|103.82;Doha|Qatar|Doha|25.29|51.53;Riyadh|Saudi Arabia|Riyadh|24.71|46.68;Jeddah|Saudi Arabia|Makkah|21.49|39.19;Dammam|Saudi Arabia|Eastern Province|26.43|50.10;Kuwait City|Kuwait||29.38|47.99;Muscat|Oman||23.59|58.41;Manama|Bahrain||26.23|50.59;
Dublin|Ireland||53.35|-6.26;Amsterdam|Netherlands||52.37|4.90;Paris|France||48.86|2.35;Milan|Italy||45.46|9.19;Rome|Italy||41.90|12.50;Madrid|Spain||40.42|-3.70;Lisbon|Portugal||38.72|-9.14;Zurich|Switzerland||47.38|8.54;Stockholm|Sweden||59.33|18.07;Oslo|Norway||59.91|10.75;Copenhagen|Denmark||55.68|12.57;Brussels|Belgium||50.85|4.35;Vienna|Austria||48.21|16.37;Warsaw|Poland||52.23|21.01;
Kuala Lumpur|Malaysia||3.14|101.69;Hong Kong|Hong Kong S.A.R.||22.32|114.17;Tokyo|Japan||35.68|139.69;Bangkok|Thailand||13.76|100.50;Johannesburg|South Africa||-26.20|28.05;Durban|South Africa||-29.86|31.02;Nairobi|Kenya||-1.29|36.82;Port Louis|Mauritius||-20.16|57.50;Suva|Fiji Islands||-18.12|178.44`.split(/;\s*/).map(r=>r.split('|')).map(r=>[r[0],r[1],r[2],+r[3],+r[4]]);
const ALL_CITIES=Object.values(CITIES).map(c=>c.slice()).concat(MORE_CITIES);

const PRICE={CAD:['CA$','49.99','799'],USD:['US$','39.99','599'],GBP:['£','29.99','449'],AUD:['A$','54.99','849'],AED:['AED ','149','2199'],EUR:['€','34.99','549'],NZD:['NZ$','59.99','899'],SGD:['S$','49.99','799'],CHF:['CHF ','34.99','549']};
const RES={Canada:['Citizen','Permanent resident','Work permit','Study permit','Visitor visa'],'United States':['Citizen','Green card','H-1B / work visa','F-1 / OPT','Dependent visa'],
 'United Kingdom':['Citizen','ILR / settled','Skilled worker visa','Student visa','Dependent visa'],Australia:['Citizen','Permanent resident','Work visa','Student visa'],
 'United Arab Emirates':['Citizen','Golden visa','Resident visa'],Germany:['Citizen','Settlement permit','EU Blue Card','Student visa']};
const RES_DEFAULT=['Citizen','Permanent resident','Work visa','Student visa','Dependent visa','Other'];
const SETTLED=['Citizen','Permanent resident','Green card','ILR / settled','Golden visa','Settlement permit'];
function resOf(country){return RES[country]||RES_DEFAULT}

const LANGS=['Afrikaans','Akan','Albanian','Amharic','Arabic','Armenian','Assamese','Awadhi','Aymara','Azerbaijani','Badaga','Bagheli','Balochi','Bambara','Banjara','Bashkir','Basque','Belarusian','Bemba','Bengali','Bhili','Bhojpuri','Bhutia','Bislama','Bodo','Bosnian','Braj','Breton','Bulgarian','Bundeli','Burmese','Cantonese','Catalan','Cebuano','Chakma','Chhattisgarhi','Chichewa','Chittagonian','Corsican','Croatian','Czech','Danish','Dari','Dhivehi','Dogri','Dutch','Dzongkha','English','Estonian','Ewe','Faroese','Fijian','Fiji Hindi','Filipino','Finnish','French','Frisian','Fula','Galician','Ganda','Garhwali','Garo','Georgian','German','Gondi','Greek','Guarani','Gujarati','Haitian Creole','Hakka','Haryanvi','Hausa','Hawaiian','Hebrew','Hindi','Hmong','Ho','Hokkien','Hungarian','Icelandic','Igbo','Ilocano','Indonesian','Irish','Italian','Japanese','Javanese','Kangri','Kannada','Kashmiri','Kazakh','Khasi','Khmer','Kikuyu','Kinyarwanda','Kirundi','Kodava','Kokborok','Konkani','Korean','Kumaoni','Kurdish','Kurukh','Kutchi','Kyrgyz','Ladakhi','Lao','Latvian','Lepcha','Limbu','Lingala','Lithuanian','Luo','Luxembourgish','Macedonian','Magahi','Maithili','Malagasy','Malay','Malayalam','Maltese','Malvi','Mandarin','Manipuri (Meitei)','Maori','Marathi','Marwari','Mewari','Mizo','Mongolian','Montenegrin','Mundari','Nagamese','Nagpuri','Ndebele','Nepali','Newari','Nimadi','Norwegian','Odia','Oromo','Pahari','Pashto','Persian (Farsi)','Polish','Portuguese','Pothwari','Punjabi','Quechua','Rajasthani','Romanian','Romani','Russian','Samoan','Sanskrit','Santali','Saraiki','Scottish Gaelic','Serbian','Sesotho','Setswana','Shanghainese','Sherpa','Shona','Sign language','Sindhi','Sinhala','Slovak','Slovenian','Somali','Sourashtra','Spanish','Sundanese','Swahili','Swati','Swedish','Sylheti','Tagalog','Tajik','Tamil','Tatar','Telugu','Teochew','Tetum','Thai','Tibetan','Tigrinya','Tok Pisin','Tongan','Tsonga','Tulu','Turkish','Turkmen','Twi','Ukrainian','Urdu','Uyghur','Uzbek','Venda','Vietnamese','Wagdi','Welsh','Wolof','Xhosa','Yiddish','Yoruba','Zulu'];
const POP_TONGUE=['Hindi','English','Gujarati','Punjabi','Bengali','Marathi','Tamil','Telugu','Urdu','Malayalam','Kannada','Odia','Nepali','Sindhi'];
const RELIGIONS=['Hindu','Muslim','Christian','Sikh','Jain','Buddhist','Parsi (Zoroastrian)','Jewish','Bahá’í','Shinto','Taoist','Confucian','Spiritual, not religious','Traditional / Indigenous','Agnostic','Atheist','No religion','Other'];
const COMM={
 Hindu:['Brahmin','Brahmin – Anavil','Brahmin – Audichya','Brahmin – Bengali','Brahmin – Bhargava','Brahmin – Chitpavan','Brahmin – Daivadnya','Brahmin – Deshastha','Brahmin – Dhima','Brahmin – Gaur','Brahmin – Gaud Saraswat (GSB)','Brahmin – Havyaka','Brahmin – Iyengar','Brahmin – Iyer','Brahmin – Jangid','Brahmin – Kanyakubj','Brahmin – Karhade','Brahmin – Kashmiri Pandit','Brahmin – Khandelwal','Brahmin – Kokanastha','Brahmin – Madhwa','Brahmin – Maithil','Brahmin – Mohyal','Brahmin – Nagar','Brahmin – Namboodiri','Brahmin – Niyogi','Brahmin – Pushkarna','Brahmin – Rarhi','Brahmin – Sanadhya','Brahmin – Saraswat','Brahmin – Saryuparin','Brahmin – Shrimali','Brahmin – Smartha','Brahmin – Tyagi','Brahmin – Utkal','Brahmin – Vaidiki','Adi Dravida','Agarwal','Agri','Ahir','Ahom','Arora','Arya Vysya','Baidya','Baishya','Balija','Bania','Banjara','Barai','Bari','Besta','Bhandari','Bhatia','Bhavsar','Bhoi','Bhumihar','Billava','Bishnoi','Boyar','Chamar','Charan','Chaurasia','Chettiar','Chhetri','Devanga','Dhangar','Dhobi','Ezhava','Gadaria','Ganiga','Garhwali','Gavali','Goud','Gounder','Gowda','Gujjar','Gupta','Gurav','Halwai','Jaiswal','Jat','Jatav','Kalar','Kalwar','Kamma','Kammalar','Kansari','Kapu','Kashyap','Kayastha','Khandayat','Khatik','Khatri','Koli','Konkani','Koshti','Kshatriya','Kudumbi','Kumaoni','Kumawat','Kumbhar','Kunbi','Kurmi','Kuruba','Lingayat','Lodhi','Lohana','Lohar','Mahajan','Maheshwari','Mali','Mallah','Maratha','Marwari','Meena','Menon','Mudaliar','Mukkulathor','Munnuru Kapu','Nadar','Nai','Naidu','Nair','Namasudra','Nambiar','Nayaka','Newar','Padmashali','Pal','Panchal','Pasi','Patel','Patidar','Pillai','Prajapati','Rajbhar','Rajput','Ramgarhia','Rastogi','Ravidasia','Reddy','Saini','Scheduled Caste','Scheduled Tribe','Shetty','Sindhi','Sonar','Sourashtra','Sutar','Tamboli','Teli','Thakur','Thevar','Thiyya','Vaishnav','Vaishya','Valmiki','Vanniyar','Varshney','Velama','Vellalar','Vishwakarma','Vokkaliga','Vysya','Yadav'],
 Muslim:['Sunni','Shia','Ahmadiyya','Ansari','Arain','Awan','Bohra – Dawoodi','Bohra – Sulaimani','Dekkani','Dudekula','Hanafi','Hanbali','Ismaili','Ithna Ashari','Jat Muslim','Khoja','Kutchi Memon','Lebbai','Malik','Maliki','Mappila','Memon','Mughal','Pathan','Qureshi','Rajput Muslim','Rowther','Saifi','Salafi','Shafi','Sheikh','Siddiqui','Sufi','Syed','Turk'],
 Christian:['Anglican','Assemblies of God','Baptist','Born Again','Brethren','Catholic','Church of North India (CNI)','Church of South India (CSI)','Evangelical','Jacobite','Jehovah’s Witness','Knanaya','Latin Catholic','Lutheran','Malankara Catholic','Marthoma','Methodist','Orthodox','Pentecostal','Presbyterian','Protestant','Roman Catholic','Seventh-day Adventist','Syro-Malabar','Syrian Catholic','Syrian Orthodox'],
 Sikh:['Ahluwalia','Arora Sikh','Bhatia Sikh','Gursikh','Jat Sikh','Kamboj','Khatri Sikh','Labana','Mazhabi','Namdhari','Rai Sikh','Rajput Sikh','Ramdasia','Ramgarhia','Ravidasia','Saini Sikh','Sindhi Sikh','Tarkhan'],
 Jain:['Digambar','Shwetambar','Sthanakvasi','Terapanthi','Murtipujak','Agarwal Jain','Jaiswal Jain','Khandelwal Jain','Oswal','Porwal','Shrimal','Vaishya Jain'],
 Buddhist:['Theravada','Mahayana','Vajrayana','Tibetan','Zen','Nichiren','Pure Land','Navayana (Ambedkarite)','Newar Buddhist','Sherpa'],
 'Parsi (Zoroastrian)':['Parsi','Irani'],
 Jewish:['Ashkenazi','Sephardi','Mizrahi','Bene Israel','Cochin Jewish','Baghdadi','Orthodox','Conservative','Reform']
};
COMM.Hindu.sort((a,b)=>(a.startsWith('Brahmin')===b.startsWith('Brahmin'))?a.localeCompare(b):a.startsWith('Brahmin')?-1:1);
function commOf(r){return COMM[r]||[]}
const NEAR_COMM={Gujarat:['Brahmin – Audichya','Brahmin – Nagar','Brahmin – Anavil','Brahmin – Shrimali','Patel','Lohana','Bania','Bhavsar','Prajapati','Jain'],Punjab:['Khatri','Arora','Jat','Saini','Brahmin – Mohyal','Jat Sikh','Khatri Sikh','Arora Sikh','Ramgarhia'],
 'Uttar Pradesh':['Brahmin – Kanyakubj','Brahmin – Saryuparin','Brahmin – Gaur','Kayastha','Agarwal','Rajput','Bhumihar'],Maharashtra:['Brahmin – Chitpavan','Brahmin – Deshastha','Brahmin – Karhade','Maratha','Kunbi','CKP'],Rajasthan:['Brahmin – Gaur','Brahmin – Pushkarna','Agarwal','Maheshwari','Rajput','Jain'],
 'Tamil Nadu':['Brahmin – Iyer','Brahmin – Iyengar','Mudaliar','Pillai','Chettiar','Nadar','Vellalar','Gounder'],Kerala:['Nair','Ezhava','Brahmin – Namboodiri','Menon'],Karnataka:['Brahmin – Havyaka','Brahmin – Madhwa','Brahmin – Smartha','Lingayat','Vokkaliga','Gowda'],
 'Andhra Pradesh':['Brahmin – Niyogi','Brahmin – Vaidiki','Reddy','Kamma','Kapu','Velama','Arya Vysya'],Telangana:['Brahmin – Niyogi','Brahmin – Vaidiki','Reddy','Kamma','Velama','Arya Vysya'],'West Bengal':['Brahmin – Bengali','Brahmin – Rarhi','Kayastha','Baidya','Mahishya'],Bihar:['Brahmin – Maithil','Bhumihar','Kayastha','Rajput','Yadav']};
function nearComm(o,rel){const list=commOf(rel),own=(o&&o.c)||'',pref=(o&&o.prefs&&o.prefs.community)||'';const out=[];
  const add=x=>{if(list.includes(x)&&x!==pref&&!out.includes(x)&&!(pref==='Brahmin'&&x.startsWith('Brahmin')))out.push(x)};
  (NEAR_COMM[o&&o.os]||[]).forEach(add);if(own.startsWith('Brahmin')||pref.startsWith('Brahmin'))list.filter(x=>x.startsWith('Brahmin')).forEach(add);
  if(rel==='Sikh')['Jat Sikh','Khatri Sikh','Arora Sikh','Ramgarhia','Saini Sikh','Gursikh'].forEach(add);if(rel==='Muslim')['Sunni','Shia','Syed','Sheikh','Pathan'].forEach(add);if(rel==='Jain')['Shwetambar','Digambar','Oswal','Porwal'].forEach(add);
  return out.slice(0,10)}
const POP_ORIGIN=['India','Pakistan','Bangladesh','Nepal','Sri Lanka','Philippines','China','Nigeria','Mexico'];
const POP_LIVE=['Canada','United States','United Kingdom','Australia','United Arab Emirates','Germany','New Zealand','Singapore','Saudi Arabia','Qatar','Ireland'];
const DIETS=['Vegetarian','Eggetarian','Non-vegetarian','Vegan','Jain vegetarian'];
const SMOKE=['No','Occasionally','Yes'];
const DRINK=['No','Socially','Regularly'];
const MARITAL=['Never married','Divorced','Widowed','Awaiting divorce'];
const QS=[
 {q:'After marriage, where do you want to settle?',k:'Settling',o:['Stay in the city I live in now','Open to moving within this country','Open to another country, or back home'],b:['Both want to stay in their city','Both open to moving within the country','Both open to any country']},
 {q:'Careers after marriage?',k:'Careers',o:['Both of us build full careers','Flexible, we decide together','One of us focuses on home'],b:['Both want two full careers','Both flexible on careers','Same view on home and career']},
 {q:'Living with family?',k:'Family home',o:['Live with parents','Close to parents, own home','Independent, visit often'],b:['Both want to live with parents','Both want a home near parents','Both prefer living independently']},
 {q:'Children?',k:'Children',o:['In the first 2–3 years','After we settle, no rush','Not sure yet'],b:['Both want kids early','Same pace on kids','Both unsure about kids']},
 {q:'Role of faith in daily life?',k:'Faith',o:['Daily prayer and rituals','Festivals and traditions','Personal, not a big part'],b:['Both practise daily','Both keep festivals and traditions','Faith is personal for both']},
 {q:'A good weekend looks like…',k:'Weekends',o:['Home and family time','Friends and going out','Travel and the outdoors'],b:['Both love family weekends','Both social on weekends','Both love to travel']},
 {q:'Money habits?',k:'Money',o:['Save and plan ahead','Balance saving and spending','Enjoy now, sort it later'],b:['Both savers','Both balance saving and spending','Both live in the moment']},
 {q:'When you disagree, you…',k:'Disagreements',o:['Talk it through right away','Take some space, then talk','Let it pass quietly'],b:['Both talk things out','Both need space, then talk','Both let things pass']},
 {q:'How soon do you want to marry?',k:'Timeline',o:['Within a year','In 1–2 years','When it feels right'],b:['Both ready within a year','Same timeline: 1–2 years','Both in no rush']}
];
/* Gold prices from 28 Oct (his ok): [symbol, 1 month, 3 months, 6 months]. Each plan stays under Google Play's ~US$400 limit. */
Object.assign(PRICE,{CAD:['CA$','119.99','299.99','479.99'],USD:['US$','89.99','219.99','349.99'],GBP:['£','69.99','169.99','269.99'],AUD:['A$','129.99','329.99','529.99'],
 AED:['AED ','329','799','1,279'],EUR:['€','79.99','199.99','319.99'],NZD:['NZ$','149.99','359.99','579.99'],SGD:['S$','119.99','289.99','459.99'],CHF:['CHF ','79.99','199.99','319.99']});
/* Icons added after the prototype (28 Oct): clock, QR ticket, scanner. */
Object.assign(IC,{
 clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
 qr:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"/><path d="M14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5zM14 18.5V20M18.5 14H20"/>',
 scan:'<path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4H9M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15M9 20H5.5A1.5 1.5 0 0 1 4 18.5V15M4 12h16"/>'});

const API=window.RM_API, CFG=window.RM_CONFIG;
/* Editorial portraits: tonal head-and-shoulders silhouettes used as stand-ins where no
   member photo exists (welcome screen, store images). No faces, skin tones or regional
   dress (every head is the same soft white), so they read as adults from anywhere. portrait(seed, g, {tone}) where tone picks one of P_TONES. */
function rngP(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function mixHex(a,b,t){const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));const A=p(a),B=p(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')}
/* Each tone: background light, background deep, figure, clothing */
const P_TONES=[
  ['#F8E8EC','#EBC6D0','#9A4A62','#E9D2D8'],   // rose
  ['#F1E8F4','#D9C6E3','#6A4A82','#EADFEF'],   // mauve
  ['#E9EDF5','#C9D1E4','#3E4B74','#DCE2EE'],   // slate
  ['#E8F0EC','#C8DCD1','#3D6656','#DCE8E1'],   // sage
  ['#E6F0F1','#C3DCDF','#2F6670','#D7E7E9'],   // teal
  ['#F5E7EE','#E3C2D3','#6E3558','#EEDBE5'],   // plum
];
const PCACHE=new Map();
function portrait(seed,g,o){
  o=o||{};const key=seed+g+(o.tone!=null?'t'+o.tone:'');if(PCACHE.has(key))return PCACHE.get(key);
  const r=rngP(seed*9301+49297),pick=a=>a[Math.floor(r()*a.length)],F=g==='F';
  const T=P_TONES[o.tone!=null?o.tone:pick([0,0,1,1,5,5,2,3,4])],id='p'+String(key).replace(/\W/g,'');
  /* Head, neck and ears are the same soft white for every portrait, man or woman, so no
     figure ever reads as a skin colour. The tone only colours hair, clothes and backdrop. */
  const fig=T[2],head='#FBF9FA',headL='#FFFFFF',headD='#E9E2E6',hair=mixHex(fig,'#000000',.38);
  const figL=headL,figD=headD;
  const cloth=pick([T[3],mixHex(fig,'#ffffff',.35),mixHex(fig,'#000000',.1),'#F4F1EC']),clothL=mixHex(cloth,'#ffffff',.18),clothD=mixHex(cloth,'#000000',.2);
  const lean=Math.round((r()-.5)*6);           // slight head turn
  const hx=100+lean, hy=84, hrx=F?24:25.5, hry=F?31:32;
  const K=1.13, TR=`transform="translate(${hx} ${hy}) scale(${K}) translate(${-hx} ${-hy})"`;
  let s=`<svg viewBox="0 0 200 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>`
   +`<linearGradient id="${id}b" x1="0" y1="0" x2=".8" y2="1"><stop offset="0" stop-color="${mixHex(T[0],T[1],.45)}"/><stop offset="1" stop-color="${mixHex(T[1],fig,.12)}"/></linearGradient>`
   +`<radialGradient id="${id}g" cx=".3" cy=".22" r=".75"><stop offset="0" stop-color="#ffffff" stop-opacity=".7"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>`
   +`<linearGradient id="${id}f" x1="0" y1="0" x2="1" y2=".25"><stop offset="0" stop-color="${figL}"/><stop offset=".55" stop-color="${head}"/><stop offset="1" stop-color="${figD}"/></linearGradient>`
   +`<linearGradient id="${id}c" x1="0" y1="0" x2="1" y2=".3"><stop offset="0" stop-color="${clothL}"/><stop offset=".6" stop-color="${cloth}"/><stop offset="1" stop-color="${clothD}"/></linearGradient>`
   +`<linearGradient id="${id}h" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${mixHex(hair,'#ffffff',.14)}"/><stop offset="1" stop-color="${hair}"/></linearGradient>`
   +`</defs>`;
  s+=`<rect width="200" height="220" fill="url(#${id}b)"/><rect width="200" height="220" fill="url(#${id}g)"/>`;
  // soft shadow on the backdrop
  s+=`<ellipse cx="${118+lean}" cy="196" rx="92" ry="40" fill="${T[1]}" opacity=".55"/>`;
  const hairStyle=F?pick(['long','long','bob','wavy','updo','shoulder']):pick(['crop','side','textured','swept']);
  // long hair falls behind the shoulders
  s+=`<g ${TR}>`;
  if(F&&(hairStyle==='long'||hairStyle==='wavy'))s+=`<path d="M${hx-30} ${hy-6}C${hx-36} ${hy-48} ${hx+36} ${hy-48} ${hx+30} ${hy-6}C${hx+34} ${hy+40} ${hx+40} ${hy+76} ${hx+44} ${hy+102}${hairStyle==='wavy'?`q-10 8-18 2q-8 8-18 2`:''}L${hx-44} ${hy+102}${hairStyle==='wavy'?`q-6 6-14 0`:''}C${hx-40} ${hy+76} ${hx-34} ${hy+40} ${hx-30} ${hy-6}z" fill="url(#${id}h)"/>`;
  if(F&&hairStyle==='shoulder')s+=`<path d="M${hx-29} ${hy-6}C${hx-34} ${hy-46} ${hx+34} ${hy-46} ${hx+29} ${hy-6}C${hx+33} ${hy+28} ${hx+34} ${hy+46} ${hx+36} ${hy+60}L${hx-36} ${hy+60}C${hx-34} ${hy+46} ${hx-33} ${hy+28} ${hx-29} ${hy-6}z" fill="url(#${id}h)"/>`;
  if(F&&hairStyle==='updo')s+=`<ellipse cx="${hx+16}" cy="${hy-30}" rx="14" ry="12" fill="url(#${id}h)"/>`;
  s+=`</g>`;
  // neck
  const nw=F?12:15;
  s+=`<path d="M${hx-nw} ${hy+20}C${hx-nw} ${hy+36} ${hx-nw-1} ${hy+50} ${hx-nw-3} ${hy+62}L${hx+nw+3} ${hy+62}C${hx+nw+1} ${hy+50} ${hx+nw} ${hy+36} ${hx+nw} ${hy+20}z" fill="${figD}"/>`;
  // shoulders and torso
  const sw=F?66:78, top=hy+50, L=100-sw, R=100+sw;
  const torso=`M${hx-nw-2} ${top}C${hx-nw-16} ${top+7} ${L+12} ${top+9} ${L} ${top+24}C${L-8} ${top+32} ${L-12} ${top+52} ${L-13} 220L${R+13} 220C${R+12} ${top+52} ${R+8} ${top+32} ${R} ${top+24}C${R-12} ${top+9} ${hx+nw+16} ${top+7} ${hx+nw+2} ${top}z`;
  s+=`<path d="${torso}" fill="url(#${id}c)"/>`;
  const outfit=F?pick(['vneck','boat','blazer','crew','turtle']):pick(['blazer','blazer','shirt','crew','turtle']);
  if(outfit==='vneck')s+=`<path d="M${hx-nw-6} ${top+4}L${hx} ${top+34}L${hx+nw+6} ${top+4}z" fill="${figD}"/>`;
  if(outfit==='boat')s+=`<path d="M${hx-nw-8} ${top+4}Q${hx} ${top+14} ${hx+nw+8} ${top+4}z" fill="${figD}"/>`;
  if(outfit==='crew')s+=`<path d="M${hx-nw-4} ${top+3}Q${hx} ${top+12} ${hx+nw+4} ${top+3}" stroke="${clothD}" stroke-width="3" fill="none"/>`;
  if(outfit==='turtle')s+=`<path d="M${hx-nw-1} ${hy+40}Q${hx} ${hy+44} ${hx+nw+1} ${hy+40}L${hx+nw+6} ${top+6}Q${hx} ${top+12} ${hx-nw-6} ${top+6}z" fill="url(#${id}c)"/><path d="M${hx-nw-1} ${hy+40}Q${hx} ${hy+44} ${hx+nw+1} ${hy+40}" stroke="${clothD}" stroke-width="1" fill="none" opacity=".6"/>`;
  if(outfit==='shirt'||outfit==='blazer'){
    const inner=outfit==='blazer'?pick(['#F7F4F0',mixHex(T[0],'#ffffff',.5)]):clothL;
    s+=`<path d="M${hx-nw-5} ${top+3}L${hx} ${top+40}L${hx+nw+5} ${top+3}z" fill="${outfit==='blazer'?inner:clothL}"/>`;
    s+=`<path d="M${hx-nw-5} ${top+2}L${hx-3} ${top+16}L${hx-nw+1} ${top+22}zM${hx+nw+5} ${top+2}L${hx+3} ${top+16}L${hx+nw-1} ${top+22}z" fill="${mixHex(outfit==='blazer'?inner:clothL,'#ffffff',.5)}" stroke="${mixHex(cloth,'#000',.12)}" stroke-width=".6"/>`;
    if(outfit==='blazer')s+=`<path d="M${hx-nw-7} ${top+4}L${hx-4} ${top+62}L${hx-18} ${top+30}L${hx-nw-14} ${top+18}zM${hx+nw+7} ${top+4}L${hx+4} ${top+62}L${hx+18} ${top+30}L${hx+nw+14} ${top+18}z" fill="${clothD}" opacity=".55"/>`;
  }
  // head
  s+=`<g ${TR}>`;
  s+=`<ellipse cx="${hx}" cy="${hy}" rx="${hrx}" ry="${hry}" fill="url(#${id}f)"/>`;
  // ears
  s+=`<ellipse cx="${hx-hrx+1}" cy="${hy+4}" rx="3.5" ry="7" fill="${head}"/><ellipse cx="${hx+hrx-1}" cy="${hy+4}" rx="3.5" ry="7" fill="${figD}"/>`;
  // front hair
  if(F){
    if(hairStyle==='bob')s+=`<path d="M${hx-29} ${hy+30}C${hx-36} ${hy-14} ${hx-20} ${hy-40} ${hx+2} ${hy-38}C${hx+26} ${hy-38} ${hx+38} ${hy-14} ${hx+29} ${hy+30}C${hx+24} ${hy+12} ${hx+22} ${hy-6} ${hx+12} ${hy-16}C${hx-2} ${hy-6} ${hx-16} ${hy-8} ${hx-22} ${hy-4}C${hx-24} ${hy+8} ${hx-24} ${hy+18} ${hx-29} ${hy+30}z" fill="url(#${id}h)"/>`;
    else if(hairStyle==='updo')s+=`<path d="M${hx-25} ${hy+2}C${hx-28} ${hy-30} ${hx-8} ${hy-38} ${hx+4} ${hy-37}C${hx+24} ${hy-36} ${hx+30} ${hy-16} ${hx+25} ${hy+2}C${hx+18} ${hy-16} ${hx+6} ${hy-22} ${hx-6} ${hy-20}C${hx-14} ${hy-14} ${hx-20} ${hy-8} ${hx-25} ${hy+2}z" fill="url(#${id}h)"/>`;
    else s+=`<path d="M${hx-27} ${hy+14}C${hx-32} ${hy-26} ${hx-14} ${hy-40} ${hx+4} ${hy-38}C${hx+26} ${hy-36} ${hx+34} ${hy-14} ${hx+27} ${hy+14}C${hx+24} ${hy-4} ${hx+18} ${hy-14} ${hx+8} ${hy-20}C${hx-4} ${hy-10} ${hx-14} ${hy-10} ${hx-22} ${hy-6}C${hx-24} ${hy} ${hx-25} ${hy+6} ${hx-27} ${hy+14}z" fill="url(#${id}h)"/>`;
  }else{
    if(hairStyle==='crop')s+=`<path d="M${hx-25} ${hy-2}C${hx-28} ${hy-30} ${hx-12} ${hy-36} ${hx+2} ${hy-35}C${hx+20} ${hy-35} ${hx+30} ${hy-24} ${hx+25} ${hy-2}C${hx+22} ${hy-14} ${hx+14} ${hy-20} ${hx} ${hy-20}C${hx-12} ${hy-20} ${hx-20} ${hy-14} ${hx-25} ${hy-2}z" fill="url(#${id}h)"/>`;
    if(hairStyle==='side')s+=`<path d="M${hx-26} ${hy}C${hx-30} ${hy-32} ${hx-10} ${hy-38} ${hx+4} ${hy-37}C${hx+24} ${hy-36} ${hx+31} ${hy-22} ${hx+26} ${hy}C${hx+22} ${hy-12} ${hx+16} ${hy-18} ${hx+6} ${hy-22}C${hx-6} ${hy-16} ${hx-18} ${hy-14} ${hx-26} ${hy}z" fill="url(#${id}h)"/><path d="M${hx-8} ${hy-34}Q${hx-2} ${hy-26} ${hx-4} ${hy-21}" stroke="${mixHex(hair,'#fff',.2)}" stroke-width="1.2" fill="none"/>`;
    if(hairStyle==='textured')s+=`<path d="M${hx-26} ${hy-2}C${hx-30} ${hy-24} ${hx-22} ${hy-36} ${hx-10} ${hy-38}C${hx-4} ${hy-42} ${hx+8} ${hy-42} ${hx+14} ${hy-38}C${hx+28} ${hy-34} ${hx+30} ${hy-18} ${hx+26} ${hy-2}C${hx+22} ${hy-14} ${hx+12} ${hy-20} ${hx} ${hy-19}C${hx-12} ${hy-19} ${hx-21} ${hy-13} ${hx-26} ${hy-2}z" fill="url(#${id}h)"/>`;
    if(hairStyle==='swept')s+=`<path d="M${hx-26} ${hy}C${hx-30} ${hy-30} ${hx-14} ${hy-42} ${hx+6} ${hy-41}C${hx+26} ${hy-40} ${hx+32} ${hy-22} ${hx+26} ${hy}C${hx+22} ${hy-16} ${hx+12} ${hy-24} ${hx} ${hy-23}C${hx-12} ${hy-22} ${hx-20} ${hy-14} ${hx-26} ${hy}z" fill="url(#${id}h)"/>`;
    if(r()<.4)r(); /* (no beard shading: it read as a darker face) keeps the same picks as before */
  }
  s+=`</g></svg>`;
  PCACHE.set(key,s);return s;
}


/* ---------- Helpers ---------- */
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=o=>JSON.parse(JSON.stringify(o));
const norm=s=>String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[’']/g,'').trim();
function getPath(o,p){return p.split('.').reduce((a,k)=>a==null?a:a[k],o)}
function setPath(obj,path,val){const ks=path.split('.');let o=obj;for(let i=0;i<ks.length-1;i++){if(o[ks[i]]==null)o[ks[i]]={};o=o[ks[i]]}o[ks[ks.length-1]]=val}
function ageFrom(dob){if(!dob)return null;const d=new Date(dob+'T00:00:00');if(isNaN(d))return null;const n=new Date();let a=n.getFullYear()-d.getFullYear();const m=n.getMonth()-d.getMonth();if(m<0||(m===0&&n.getDate()<d.getDate()))a--;return a}
function ftIn(cm){const t=Math.round(cm/2.54);return `${Math.floor(t/12)}'${t%12}"`}
const HEIGHTS=[];for(let i=54;i<=84;i++)HEIGHTS.push({cm:Math.round(i*2.54),label:`${Math.floor(i/12)}'${i%12}" · ${Math.round(i*2.54)} cm`});
function hav(a,b){if(!a||!b)return 99999;const R=6371,t=x=>x*Math.PI/180;const dLa=t(b[0]-a[0]),dLo=t(b[1]-a[1]);const h=Math.sin(dLa/2)**2+Math.cos(t(a[0]))*Math.cos(t(b[0]))*Math.sin(dLo/2)**2;return 2*R*Math.asin(Math.sqrt(h))}
function coordsOf(o){if(!o)return null;const c=ALL_CITIES.find(x=>x[1]===o.country&&norm(x[0])===norm(o.city||''));if(c)return [c[3],c[4]];return stateCoords(o.country,o.state)||countryCoords(o.country)}
function pCoords(p){return p.lat!=null&&p.lng!=null?[p.lat,p.lng]:coordsOf({country:p.country,state:p.state,city:p.cityName})}
function km(p){return hav(coordsOf(S.me),pCoords(p))}
function sameCity(p){return p.country===S.me.country&&norm(p.cityName)===norm(S.me.city||'')}
function myPlace(){return S.me.city||S.me.state||S.me.country}
function distLabel(p){if(p.country!==S.me.country)return p.country;if(sameCity(p))return 'same city';const d=Math.round(km(p));return d>=99999?p.country:`${d} km away`}
function today(){const d=new Date();return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`}
function timeStr(ts){const d=new Date(ts),n=new Date();const same=d.toDateString()===n.toDateString();return same?d.toLocaleTimeString(RM_I18N.lang==='fr'?'fr-CA':[],{hour:'numeric',minute:'2-digit'}):d.toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'})}
function shown(p){return p.name||'Member'}
function isBlurred(p){return !(p.photos&&p.photos.length)&&p.photoCount>0}
function price(){const c=CMAP[S.me.country];const cur=c?c[3]:'USD';const pr=PRICE[cur]||PRICE.USD;const n=v=>parseFloat(String(v).replace(/,/g,''));
  const per=(v,m)=>{const x=n(v)/m;return cur==='AED'?String(Math.round(x)):x.toFixed(2)};
  return {sym:pr[0],gold:pr[1],m3:pr[2],m6:pr[3],pm3:per(pr[2],3),pm6:per(pr[3],6)}}
/* Fork and knife, for partner restaurants. */
IC.dish='<path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 21V3c-2.2 0-3.5 2.8-3.5 6.5S14.8 14 17 14"/>';
/* Google Play Billing: one subscription (neumarry_gold) with three base plans m1, m3, m6. */
const GOLD_PRODUCT='neumarry_gold',GOLD_MONTHS={m1:1,m3:3,m6:6};
const Bill=()=>isNative&&Plug().Billing?Plug().Billing:null;
let store=null,storeLoading=null;
function loadStore(){const B=Bill();if(!B||store)return Promise.resolve(store);if(storeLoading)return storeLoading;
  storeLoading=Promise.resolve(B.getProducts({ids:[GOLD_PRODUCT]})).then(r=>{const pd=((r&&r.products)||[]).find(x=>x.productId===GOLD_PRODUCT);const o={};
    if(pd)(pd.offers||[]).forEach(x=>{if(!x.offerId&&GOLD_MONTHS[x.basePlanId]&&x.offerToken)o[x.basePlanId]=x});
    store=o.m1||o.m3||o.m6?o:null;storeLoading=null;return store}).catch(e=>{console.warn('[billing] products',e&&(e.code||e.message));storeLoading=null;return null});
  return storeLoading}
function money2(micros,cur){try{return new Intl.NumberFormat(RM_I18N.locale,{style:'currency',currency:cur}).format(micros/1e6)}catch(e){return (micros/1e6).toFixed(2)+' '+cur}}
/* The three Gold plans as shown: [key, label, total, per month, tag]. Google Play prices win when they are loaded. */
function planOpts(){const L=price(),tags={m1:'',m3:'Most popular',m6:'Best value'},lab={m1:'1 month',m3:'3 months',m6:'6 months'};
  const local={m1:[L.gold,L.gold],m3:[L.m3,L.pm3],m6:[L.m6,L.pm6]};
  return ['m1','m3','m6'].map(k=>{const o=store&&store[k];
    if(o&&o.priceMicros&&o.currency)return [k,lab[k],money2(o.priceMicros,o.currency),money2(Math.round(o.priceMicros/GOLD_MONTHS[k]/1e4)*1e4,o.currency),tags[k]];
    return [k,lab[k],L.sym+local[k][0],L.sym+local[k][1],tags[k]]})}
function commMatch(pc,pref){return pc===pref||String(pc||'').startsWith(pref+' – ')}
function uuid(){if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return (c==='x'?r:(r&3|8)).toString(16)})}
function hashStr(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function money(cents,cur){const sym={CAD:'CA$',USD:'US$',GBP:'£',AUD:'A$',EUR:'€',INR:'₹',NZD:'NZ$',SGD:'S$',CHF:'CHF ',AED:'AED ',MXN:'MX$',PHP:'₱',PLN:'zł ',SEK:'SEK ',NOK:'NOK ',DKK:'DKK ',HKD:'HK$',ILS:'₪',THB:'฿',CZK:'CZK '}[cur]||((cur||'')+' ');const v=cents/100;return sym+(Number.isInteger(v)?v:v.toFixed(2))}
const isNative=!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform());
const Plug=()=>(window.Capacitor&&window.Capacitor.Plugins)||{};

/* ---------- State ---------- */
/* S holds what the screens show. Server data is loaded into it; a few personal
   conveniences (saved, passed, sort, last tab) are kept on this device only. */
function fresh(){return {screen:'boot',tab:'matches',seg:'chats',step:1,editMode:false,auth:null,draft:null,errors:{},
  me:null,interests:{},passed:[],shortlist:[],blocked:[],reported:[],chats:{},unread:{},sort:'best',showPassed:false,evFilter:'for',picks:null,
  events:[],admin:null,loaded:false,storyFor:{}}}
let S=fresh();
let PROFILES=[];
let view=null, sheet=null, picker=null, celebrate=null, toastT=null, busy='';
const LKEY='rm.local.v1';
function localKey(){return LKEY+'.'+(API.userId()||'anon')}
function loadLocal(){try{const o=JSON.parse(localStorage.getItem(localKey())||'null');if(o&&typeof o==='object'){['passed','shortlist','reported','sort','showPassed','evFilter','picks','tab','seg','storyFor'].forEach(k=>{if(o[k]!==undefined)S[k]=o[k]})}}catch(e){}}
function save(){try{const o={};['passed','shortlist','reported','sort','showPassed','evFilter','picks','tab','seg','storyFor'].forEach(k=>o[k]=S[k]);localStorage.setItem(localKey(),JSON.stringify(o))}catch(e){}
  if(S.screen==='signup'&&S.draft&&!S.editMode){try{const d=Object.assign({},S.draft);d.photo=null;d.selfie=null;d.idPreview=null;d.loc=null;localStorage.setItem('rm.draft.'+(API.userId()||'anon'),JSON.stringify({d,step:S.step}))}catch(e){}}}
function loadDraft(){try{const o=JSON.parse(localStorage.getItem('rm.draft.'+(API.userId()||'anon'))||'null');if(o&&o.d){return o}}catch(e){}return null}
function clearDraft(){try{localStorage.removeItem('rm.draft.'+(API.userId()||'anon'))}catch(e){}}
const byId=id=>PROFILES.find(p=>p.id===id);
function isGold(){return S.me&&S.me.plan!=='free'}
function locked(p){return !isGold()&&!p.mutual}
function fullyV(p){return !!p.v.id&&!!p.v.selfie&&!!p.v.roots&&!!p.v.lives}
function verified(){const v=S.me&&S.me.v;return !!v&&v.id&&v.selfie&&v.roots&&v.lives}
/* Live = every check passed and a photo approved. Only live members are shown to others, and only they see others. */
function photoOk(){return !!S.me&&(S.me.photos||[]).some(x=>x.status==='approved')}
function isLive(){return verified()&&photoOk()}
function canChat(id){const p=byId(id);return !!p&&p.mutual&&(isGold()||p.gold)}
function chatWhy(id){const p=byId(id);if(isGold()||!p)return '';if(p.gold)return `${p.first||'They'} ${p.first?'has':'have'} Gold, so you can chat for free`;return ''}
const BETA=Date.now()<Date.parse(CFG.betaUntil);

/* ---------- Server data → screen shapes ---------- */
function meFromServer(m){
  const p=m.profile,q=m.prefs||{};
  const pr={ageMin:q.age_min??18,ageMax:q.age_max??75,hMin:q.h_min??HEIGHTS[0].cm,hMax:q.h_max??HEIGHTS[HEIGHTS.length-1].cm,liveCountry:q.live_country||'Any',radius:q.radius_km||0,
    oc:q.origin_country||'Any',os:q.origin_state||'Any',religion:q.religion||'Any',community:q.community||'Any',alsoComm:q.also_communities||[],tongue:q.tongue||'Any',diet:q.diet||'Any',timeline:q.timeline||'Any',settled:!!q.settled_only,verifiedOnly:q.verified_only!==false};
  const photos=(m.photos||[]).filter(x=>x.status!=='rejected');const rejectedPhoto=(m.photos||[]).find(x=>x.status==='rejected');
  const ver=k=>{const list=(m.verifications||[]).filter(v=>v.kind===k);return list.length?list[list.length-1]:null};
  return {id:p.id,name:p.full_name,g:p.gender,lookingFor:p.looking_for,dob:p.dob,age:ageFrom(p.dob),h:p.height_cm,marital:p.marital,createdBy:p.created_by,
    oc:p.origin_country,os:p.origin_state,t:p.mother_tongue,r:p.religion,c:p.community||'',country:p.country,state:p.state||'',city:p.city,res:p.residency,reloc:p.relocate,
    job:p.job,edu:p.education,about:p.about,diet:p.diet,sm:p.smoke,dr:p.drink,ans:(p.answers||[]).map(Number),phone:p.phone||'',
    v:{phone:!!p.phone_verified,id:!!p.id_verified,selfie:!!p.selfie_verified,roots:!!p.roots_verified,lives:!!p.lives_verified&&(!p.lives_until||Date.parse(p.lives_until)>Date.now())},
    rootsAt:p.roots_checked_at,livesAt:p.lives_checked_at,livesUntil:p.lives_until,livesRound:p.lives_round_at,locOk:!!p.loc_ok,locAt:p.loc_checked_at,
    privacy:{blur:p.blur_photos,vis:p.hidden?'hidden':'verified',showC:p.show_community,incognito:p.incognito},
    prefs:pr,plan:m.plan||'free',goldUntil:m.gold_until,goldSource:m.gold_source,isAdmin:!!p.is_admin,womenOffer:p.women_offer_until,womenLeft:m.women_offer_left,
    photos,photoPaths:photos.map(x=>x.path),photoPending:photos.some(x=>x.status==='pending'),rejectedPhoto:rejectedPhoto&&!photos.length?rejectedPhoto:null,
    idCheck:ver('id'),selfieCheck:ver('selfie'),rootsCheck:ver('roots'),statusCheck:ver('status'),addrCheck:ver('address'),checks:m.verifications||[],photo:S.me&&S.me.photoPaths&&S.me.photoPaths[0]===(photos[0]||{}).path?S.me.photo:null,
    lat:p.city_lat,lng:p.city_lng,banned:p.banned,createdAt:p.created_at}
}
function cardFromServer(c){
  const parts=String(c.display_name||'').split(' ');
  return {id:c.id,name:c.display_name,first:c.first_name||'',last:parts.slice(1).join(' '),g:c.gender,age:c.age,h:c.height_cm,marital:c.marital,createdBy:c.created_by,
    oc:c.origin_country,os:c.origin_state,t:c.mother_tongue,r:c.religion,c:c.community||'',cityName:c.city,country:c.country,state:c.state||'',lat:c.city_lat,lng:c.city_lng,
    res:c.residency,reloc:c.relocate,job:c.job||'',edu:c.education||'',about:c.about||'',diet:c.diet,sm:c.smoke,dr:c.drink,ans:(c.answers||[]).map(Number),
    v:{id:!!c.id_verified,selfie:!!c.selfie_verified,roots:!!c.roots_verified,lives:!!c.lives_verified,phone:false,work:false},rootsAt:c.roots_checked_at,livesAt:c.lives_checked_at,locOk:!!c.loc_ok,locAt:c.loc_checked_at,days:c.joined_days||0,photoPaths:c.photo_paths||[],photos:[],photoCount:c.photo_count||0,
    mutual:!!c.mutual,locked:!!c.locked,gold:!!c.gold,fits:!!c.fits,paused:!!c.paused,turban:c.gender==='M'&&c.religion==='Sikh'}
}
const URLS={};   // storage path → signed URL
async function signPaths(paths){const need=paths.filter(p=>p&&!(URLS[p]&&URLS[p].exp>Date.now()+300e3));if(!need.length)return;
  try{const got=await API.signMany('photos',need,7200);Object.keys(got).forEach(k=>{URLS[k]={u:got[k],exp:Date.now()+7200e3}})}catch(e){}}
function urlOf(path){return URLS[path]?URLS[path].u:null}
function attachPhotos(){PROFILES.forEach(p=>{p.photos=p.photoPaths.map(urlOf).filter(Boolean)});if(S.me){const u=S.me.photoPaths[0]&&urlOf(S.me.photoPaths[0]);if(u)S.me.photo=u}}

/* Instant open (29 Oct): the last server answers are kept on this phone (RAW), shown at once on the next
   start, and replaced by fresh answers a moment later. Cleared on sign-out. */
const RAW={};const CK='rm.cache.v1';
/* Bureau partner link neumarry.com/?p=CODE: kept on the phone, saved once on the profile. */
try{const q=new URLSearchParams(location.search).get('p');if(q&&/^[A-Za-z0-9]{2,20}$/.test(q))localStorage.setItem('rm.p',q.toUpperCase())}catch(e){}
function savePartner(m){let c='';try{c=localStorage.getItem('rm.p')||''}catch(e){}if(!c||(m.profile&&m.profile.partner_code))return;API.rpc('set_partner_code',{c}).then(()=>{try{localStorage.removeItem('rm.p')}catch(e){}}).catch(()=>{})}
async function loadMe(){const m=await API.rpc('me');if(!m||!m.profile)return null;RAW.me=m;S.me=meFromServer(m);savePartner(m);return S.me}
async function loadCards(){
  if(!S.me)return;
  const [fit,ints,fitN]=await Promise.all([API.rpc('member_cards',{lim:400,off:0}),API.select('interests',{select:'*'}),isLive()?null:API.rpc('fit_count').catch(()=>0)]);
  const have=new Set((fit||[]).map(c=>c.id));const extra=[];
  (ints||[]).forEach(i=>{const o=i.from_user===S.me.id?i.to_user:i.from_user;if(!have.has(o)&&!extra.includes(o))extra.push(o)});
  let rel=[];if(extra.length)rel=await API.rpc('member_cards',{only_ids:extra,lim:400,off:0});
  RAW.cards=(fit||[]).concat(rel||[]);RAW.ints=ints||[];RAW.fitN=fitN||0;applyCards();
  await signPaths(PROFILES.flatMap(p=>p.photoPaths.slice(0,3)).concat(S.me.photoPaths.slice(0,1)));
  attachPhotos();
}
function applyCards(){
  S.fitN=RAW.fitN||0;
  const me=S.me.id,map={};
  (RAW.ints||[]).forEach(i=>{const other=i.from_user===me?i.to_user:i.from_user;let st;
    if(i.status==='accepted')st='mutual';
    else if(i.from_user===me)st='sent';
    else st=i.status==='declined'?'declined':'received';
    if(!map[other]||st==='mutual')map[other]=st});
  S.interests=map;
  PROFILES=(RAW.cards||[]).map(cardFromServer);attachPhotos();
}
async function loadBlocks(){const b=await API.select('blocks',{select:'blocked'});RAW.blocks=b||[];S.blocked=(b||[]).map(x=>x.blocked)}
let lastMsg=0;
async function loadMessages(){
  const list=await API.rpc('my_messages',{after_id:lastMsg});
  const me=S.me.id;let fresh_=false;
  (list||[]).forEach(m=>{const other=m.sender===me?m.recipient:m.sender;
    if(!S.chats[other])S.chats[other]=[];
    if(S.chats[other].some(x=>x.id===m.id))return;
    S.chats[other].push({id:m.id,f:m.sender===me?'me':'them',x:m.body,ts:Date.parse(m.created_at),flag:m.flagged,read:!!m.read_at});
    if(m.sender!==me&&!m.read_at){S.unread[other]=(S.unread[other]||0)+1;fresh_=true}
    lastMsg=Math.max(lastMsg,m.id)});
  return fresh_;
}
function ensureMatchChats(){Object.keys(S.interests).forEach(id=>{if(S.interests[id]==='mutual'&&!S.chats[id])S.chats[id]=[{f:'sys',x:'You both said yes. Say hello! Phone numbers stay hidden.',ts:Date.now()-1000}]})}
async function loadEvents(){const [list,staff,board,pn]=await Promise.all([API.rpc('event_list'),API.rpc('staff_events').catch(()=>[]),API.rpc('city_board').catch(()=>null),API.rpc('partners_near').catch(()=>[]),API.rpc('online_next').catch(()=>null),API.rpc('my_bio_reactions').catch(()=>null)]).then(r=>{S.online=r[4]||null;const br=r[5];S.bioReacts=Array.isArray(br)?br:(br&&br.my_bio_reactions)||[];return r});RAW.ev=list||[];RAW.staff=staff||[];S.board=board||S.board||null;S.partnersNear=pn||[];applyEvents()}
function applyEvents(){S.events=(RAW.ev||[]).map(eventFromServer);S.staff=(RAW.staff||[]).map(x=>typeof x==='string'?x:(x.staff_events||Object.values(x)[0]))}
function cacheSave(){try{if(!RAW.me||!RAW.cards||!API.userId())return;const u={},keep=Date.now()+900e3;
  Object.keys(URLS).forEach(k=>{if(URLS[k].exp>keep)u[k]=URLS[k]});
  localStorage.setItem(CK,JSON.stringify({uid:API.userId(),at:Date.now(),raw:RAW,urls:u}))}catch(e){}}
function cacheLoad(){try{const c=JSON.parse(localStorage.getItem(CK)||'null');
  if(!c||c.uid!==API.userId()||Date.now()-c.at>7*864e5||!c.raw||!c.raw.me||!c.raw.cards)return false;
  Object.assign(RAW,c.raw);Object.assign(URLS,c.urls||{});S.me=meFromServer(RAW.me);applyCards();
  S.blocked=(RAW.blocks||[]).map(x=>x.blocked);applyEvents();ensureMatchChats();return true}catch(e){console.warn('[cache]',e&&e.message);return false}}
function cacheClear(){try{localStorage.removeItem(CK)}catch(e){}Object.keys(RAW).forEach(k=>delete RAW[k])}
async function loadAll(){
  await Promise.all([loadCards(),loadBlocks(),loadMessages(),loadEvents()]);
  ensureMatchChats();S.loaded=true;
}

/* ---------- Matching ---------- */
function dietGroup(d){return d==='Non-vegetarian'?2:d==='Eggetarian'?1:0}
function compat(p){
  const me=S.me;
  let v=0;for(let i=0;i<QS.length;i++){const d=Math.abs((me.ans[i]??1)-(p.ans[i]??1));v+=d===0?1:d===1?.5:0}v/=QS.length;
  const dg=Math.abs(dietGroup(me.diet)-dietGroup(p.diet));const ds=dg===0?1:dg===1?.6:.25;
  const si=Math.abs(SMOKE.indexOf(me.sm)-SMOKE.indexOf(p.sm));const ss=si===0?1:si===1?.6:.2;
  const di=Math.abs(DRINK.indexOf(me.dr)-DRINK.indexOf(p.dr));const dd=di===0?1:di===1?.7:.3;
  const life=ds*.5+ss*.25+dd*.25;
  const pr=me.prefs;
  const aOk=p.age>=pr.ageMin&&p.age<=pr.ageMax, hOk=p.h>=pr.hMin&&p.h<=pr.hMax;
  const tA=p.g==='F'?(me.age>=p.age-1&&me.age<=p.age+6):(me.age>=p.age-6&&me.age<=p.age+2);
  const tH=p.g==='F'?me.h>=p.h:true;
  const pref=((aOk?1:0)+(hOk?1:0)+(tA?1:0)+(tH?1:0))/4;
  const d=km(p), same=p.country===me.country;
  const loc=same&&d<=25?1:same&&d<=100?.85:same&&d<=500?.6:same?.4:.1;
  const roots=(p.oc===me.oc?.5:0)+(p.oc===me.oc&&p.os===me.os?.3:0)+(p.t===me.t?.2:0);
  const total=Math.round(v*55+life*15+pref*10+loc*10+roots*10);
  return {total:Math.max(1,Math.min(99,total)),values:v,life,pref,loc,roots};
}
function whyChips(p){
  const me=S.me,out=[];
  if(p.oc===me.oc&&p.os===me.os)out.push({t:`Both from ${p.os}`,r:1});
  else if(p.t===me.t)out.push({t:`Both speak ${p.t}`,r:1});
  else if(p.oc===me.oc)out.push({t:`Both from ${p.oc}`,r:1});
  for(const i of [0,1,2,3,8,4,7,5,6]){if(out.length>=3)break;if(me.ans[i]===p.ans[i]&&QS[i].b[p.ans[i]])out.push({t:QS[i].b[p.ans[i]]})}
  if(out.length<3&&dietGroup(me.diet)===0&&dietGroup(p.diet)===0)out.push({t:'Both vegetarian'});
  return out.slice(0,3);
}
function baseEligible(p){return p.g===S.me.lookingFor&&!S.blocked.includes(p.id)&&!S.reported.includes(p.id)}
function passFilters(p,o){
  const me=S.me,pr=Object.assign({},me.prefs,o||{});
  if(p.age<pr.ageMin||p.age>pr.ageMax)return false;
  if(p.h<pr.hMin||p.h>pr.hMax)return false;
  if(pr.liveCountry!=='Any'&&p.country!==pr.liveCountry)return false;
  if(pr.radius>0&&pr.liveCountry===me.country&&km(p)>pr.radius)return false;
  if(pr.oc!=='Any'&&p.oc!==pr.oc)return false;
  if(pr.oc!=='Any'&&pr.os!=='Any'&&p.os!==pr.os)return false;
  if(pr.religion!=='Any'&&p.r!==pr.religion)return false;
  if(pr.timeline==='year'&&p.ans&&p.ans[8]!==0)return false;
  if(pr.timeline==='two'&&p.ans&&p.ans[8]!==0&&p.ans[8]!==1)return false;
  if(pr.religion!=='Any'&&pr.community!=='Any'&&!commMatch(p.c,pr.community)&&!(pr.alsoComm||[]).some(x=>commMatch(p.c,x)))return false;
  if(pr.tongue!=='Any'&&p.t!==pr.tongue)return false;
  if(pr.diet==='veg'&&dietGroup(p.diet)!==0)return false;
  if(pr.settled&&!SETTLED.includes(p.res))return false;
  return true;
}
function matchList(){return PROFILES.filter(p=>p.fits&&!p.paused&&baseEligible(p)&&passFilters(p)&&S.interests[p.id]!=='declined'&&(S.showPassed||!S.passed.includes(p.id)))}
function sortList(list,mode){
  const c=new Map(list.map(p=>[p.id,compat(p).total]));const arr=list.slice();
  if(mode==='near')arr.sort((a,b)=>km(a)-km(b)||c.get(b.id)-c.get(a.id));
  else if(mode==='new')arr.sort((a,b)=>a.days-b.days);
  else arr.sort((a,b)=>c.get(b.id)-c.get(a.id));
  return arr;
}
function activeFilterCount(){const pr=S.me.prefs,d=defaultPrefs(S.me);let n=0;['liveCountry','radius','oc','os','religion','community','tongue','diet','settled'].forEach(k=>{if(String(pr[k])!==String(d[k]))n++});if((pr.alsoComm||[]).length)n++;return n}

/* ---------- Defaults ---------- */
function blankDraft(){return {name:'',createdBy:'Self',g:'',lookingFor:'',dob:'',h:'',marital:'Never married',photo:null,photoBlob:null,
  oc:'',os:'',t:'',r:'',c:'',country:'',state:'',city:'',res:'',reloc:'',job:'',edu:'',about:'',diet:'',sm:'No',dr:'No',ans:QS.map(()=>null),
  v:{phone:false,id:false,selfie:false,roots:false,lives:false},phone:'',idName:'',idBlob:null,idPreview:null,selfie:null,selfieBlob:null,
  rootsType:'',rootsBlob:null,rootsName:'',statusType:'',statusBlob:null,statusName:'',addrType:'',addrBlob:null,addrName:'',tzAck:'',vs:0,
  privacy:{blur:true,vis:'verified',showC:true,incognito:false},prefs:null}}
function defaultPrefs(d){const a=ageFrom(d.dob)||27;const male=d.g==='M';
  return {ageMin:Math.max(18,male?a-5:a-1),ageMax:male?a+1:a+6,hMin:male?HEIGHTS[0].cm:(+d.h||HEIGHTS[0].cm),hMax:HEIGHTS[HEIGHTS.length-1].cm,
    liveCountry:d.country||'Any',radius:0,oc:d.oc||'Any',os:'Any',religion:d.r||'Any',community:'Any',alsoComm:[],tongue:'Any',diet:'Any',timeline:'Any',settled:false}}

/* ---------- Pickers ---------- */
const cOpt=n=>({v:n,l:n,pre:flag(n)});
const sOpt=s=>({v:s[0],l:s[0]});
function relocOpts(country){return [{v:'no',l:'No, I want to stay here'},{v:'within',l:`Yes, within ${country||'my country'}`},{v:'anywhere',l:'Yes, anywhere, including back home'}]}
function ages(){const a=[];for(let i=18;i<=70;i++)a.push({v:i,l:String(i)});return a}
function pickerDef(key,t){
  const o=t==='me'?S.me:S.draft, pr=(o&&o.prefs)||{};
  const H=HEIGHTS.map(x=>({v:x.cm,l:x.label}));
  switch(key){
    case 'createdBy':return {title:'Profile created by',opts:['Self','Parent','Sibling','Relative','Friend'].map(x=>({v:x,l:x}))};
    case 'h':return {title:'Your height',opts:H,num:true,ph:'Search height, e.g. 5\'8'};
    case 'marital':return {title:'Marital status',opts:MARITAL.map(x=>({v:x,l:x}))};
    case 'oc':return {title:'Country of origin',ph:'Search all countries',secs:[['Popular',POP_ORIGIN.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]};
    case 'os':return {title:`State / region in ${o.oc}`,ph:'Search states and regions',opts:statesOf(o.oc).map(sOpt),custom:true};
    case 't':return {title:'Mother tongue',ph:'Search all languages',secs:[['Common',POP_TONGUE.map(x=>({v:x,l:x}))],['All languages',LANGS.map(x=>({v:x,l:x}))]],custom:true};
    case 'r':return {title:'Religion',ph:'Search religions',opts:RELIGIONS.map(x=>({v:x,l:x}))};
    case 'c':return {title:`Community · ${o.r}`,ph:'Search or type your community',opts:[{v:'',l:'Prefer not to say'}].concat(commOf(o.r).map(x=>({v:x,l:x}))),custom:true};
    case 'country':return {title:'Country you live in',ph:'Search all countries',secs:[['Popular',POP_LIVE.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]};
    case 'state':return {title:`State / province in ${o.country}`,ph:'Search states and provinces',opts:statesOf(o.country).map(sOpt),custom:true};
    case 'city':{const list=ALL_CITIES.filter(c=>c[1]===o.country).sort((a,b)=>(b[2]===o.state)-(a[2]===o.state)||a[0].localeCompare(b[0]));
      const seen=new Set();const opts=list.filter(c=>!seen.has(c[0])&&seen.add(c[0])).map(c=>({v:c[0],l:c[0],sub:c[2]||''}));
      return {title:'City',ph:'Search or type your city',opts,custom:true}}
    case 'res':return {title:`Residency in ${o.country}`,opts:resOf(o.country).map(x=>({v:x,l:x}))};
    case 'reloc':return {title:'Open to relocating?',opts:relocOpts(o.country)};
    case 'diet':return {title:'Diet',opts:DIETS.map(x=>({v:x,l:x}))};
    case 'sm':return {title:'Smoking',opts:SMOKE.map(x=>({v:x,l:x}))};
    case 'dr':return {title:'Drinking',opts:DRINK.map(x=>({v:x,l:x}))};
    case 'privacy.vis':return {title:'Who can see my profile',opts:[{v:'verified',l:'Verified members only'},{v:'matches',l:'Only people who fit my preferences'},{v:'hidden',l:'Nobody for now (paused)'}]};
    case 'prefs.ageMin':return {title:'Age from',opts:ages(),num:true};
    case 'prefs.ageMax':return {title:'Age to',opts:ages(),num:true};
    case 'prefs.hMin':return {title:'Height from',opts:H,num:true};
    case 'prefs.hMax':return {title:'Height to',opts:H,num:true};
    case 'prefs.liveCountry':{const mine=o.country;return {title:'Where they live',ph:'Search all countries',secs:[['',[{v:'Any',l:'Any country',pre:'🌍'}].concat(mine?[Object.assign(cOpt(mine),{sub:'Where you live'})]:[])],['Popular',POP_LIVE.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]}}
    case 'prefs.radius':return {title:`Distance from ${o.city||o.state||'you'}`,num:true,opts:[{v:0,l:`Anywhere in ${pr.liveCountry}`}].concat([25,50,100,250,500,1000].map(k=>({v:k,l:`Within ${k} km`})))};
    case 'prefs.oc':return {title:'Their roots: country',ph:'Search all countries',secs:[['',[{v:'Any',l:'Any country',pre:'🌍'}]],['Popular',POP_ORIGIN.map(cOpt)],['All countries',COUNTRY_NAMES.map(cOpt)]]};
    case 'prefs.os':return {title:`State / region in ${pr.oc}`,ph:'Search states and regions',opts:[{v:'Any',l:'Any state or region'}].concat(statesOf(pr.oc).map(sOpt))};
    case 'prefs.religion':return {title:'Religion',ph:'Search religions',opts:[{v:'Any',l:'Any religion'}].concat(RELIGIONS.map(x=>({v:x,l:x})))};
    case 'prefs.community':return {title:`Community · ${pr.religion}`,ph:'Search communities',opts:[{v:'Any',l:'Any community'}].concat(commOf(pr.religion).map(x=>({v:x,l:x,sub:x==='Brahmin'?'Includes every Brahmin sub-community':''})))};
    case 'prefs.tongue':return {title:'Mother tongue',ph:'Search all languages',secs:[['',[{v:'Any',l:'Any language'}]],['Common',POP_TONGUE.map(x=>({v:x,l:x}))],['All languages',LANGS.map(x=>({v:x,l:x}))]]};
    case 'prefs.diet':return {title:'Diet',opts:[{v:'Any',l:'Any diet'},{v:'veg',l:'Vegetarian, vegan or Jain only'}]};
    case 'prefs.alsoComm':{const sg=nearComm(o,pr.religion);return {title:'Also open to',multi:true,ph:'Search communities',secs:[['Close to your roots',sg.map(x=>({v:x,l:x}))],[`All ${pr.religion} communities`,commOf(pr.religion).filter(x=>x!==pr.community&&!(pr.community==='Brahmin'&&x.startsWith('Brahmin'))).map(x=>({v:x,l:x}))]]}}
  }
  return {title:'',opts:[]};
}
function secsOf(def){return def.secs||[['',def.opts||[]]]}
function allOpts(def){const seen=new Set(),out=[];secsOf(def).forEach(([,os])=>os.forEach(x=>{const k=String(x.v);if(!seen.has(k)){seen.add(k);out.push(x)}}));return out}
function labelOf(def,v){const f=allOpts(def).find(x=>String(x.v)===String(v));return f?f:{l:String(v),pre:''}}
function pickF(key,label,t,x){x=x||{};const o=t==='me'?S.me:S.draft;const v=getPath(o,key);const def=pickerDef(key,t);
  if(def.multi){const arr=Array.isArray(v)?v:[];const id=key.replace(/\./g,'-');const txt=arr.length?(arr.length<=2?arr.join(', '):`${arr.slice(0,2).join(', ')} +${arr.length-2} more`):(x.ph||'None yet');
    return `<div class="fld" data-f="${key}"><span class="flabel" id="lb-${id}">${label}</span><button type="button" class="pick${arr.length?'':' empty'}" id="pk-${id}" data-a="pick" data-k="${key}" data-t="${t}" aria-labelledby="lb-${id} pk-${id}" aria-haspopup="dialog"${x.disabled?' disabled':''}><span class="pv">${esc(txt)}</span>${ic('chev')}</button>${x.hint?`<span class="hint">${x.hint}</span>`:''}</div>`}
  const has=v!==''&&v!=null&&!(x.blankAny&&v==='Any');const L=has?labelOf(def,v):null;const id=key.replace(/\./g,'-');
  const shownL=has?L.l:(v===''&&def.opts&&def.opts[0]&&def.opts[0].v===''&&x.showBlank?def.opts[0].l:'');
  return `<div class="${fldCls(key)}" data-f="${key}"><span class="flabel" id="lb-${id}">${label}</span><button type="button" class="pick${shownL?'':' empty'}" id="pk-${id}" data-a="pick" data-k="${key}" data-t="${t}" aria-labelledby="lb-${id} pk-${id}" aria-haspopup="dialog"${x.disabled?' disabled':''}><span class="pv">${shownL?`${L&&L.pre?esc(L.pre)+' ':''}${esc(shownL)}`:esc(x.ph||'Select')}</span>${ic('chev')}</button>${x.hint?`<span class="hint">${x.hint}</span>`:''}${errOf(key)}</div>`}
function pickRows(){
  const def=pickerDef(picker.k,picker.t);const o=picker.t==='me'?S.me:S.draft;const raw=getPath(o,picker.k);const cur=String(raw??'');const q=norm(picker.q||'');const marr=def.multi?(Array.isArray(raw)?raw:[]):null;
  const row=x=>{const on=marr?marr.includes(x.v):String(x.v)===cur;return `<button class="prow${on?' on':''}" data-a="pickSet" data-v="${esc(x.v)}" role="option" aria-selected="${on}">${x.pre?`<span class="fl" aria-hidden="true">${esc(x.pre)}</span>`:''}<span class="lb">${esc(x.l)}${x.sub?`<small>${esc(x.sub)}</small>`:''}</span>${on?ic('check'):''}</button>`};
  let html='',exact=false;
  if(q){const m=allOpts(def).filter(x=>norm(x.l).includes(q)||(x.sub&&norm(x.sub).includes(q)));
    m.sort((a,b)=>(norm(b.l).startsWith(q))-(norm(a.l).startsWith(q)));exact=m.some(x=>norm(x.l)===q);html=m.slice(0,400).map(row).join('')}
  else secsOf(def).forEach(([h,os])=>{if(!os.length)return;if(h)html+=`<div class="phead">${esc(h)}</div>`;html+=os.map(row).join('')});
  const typed=(picker.q||'').trim();
  if(def.custom&&typed&&!exact)html=`<button class="prow custom" data-a="pickSet" data-v="${esc(typed)}">${ic('plus')}<span class="lb">Use “${esc(typed)}”</span></button>`+html;
  if(!html)html=`<p class="pempty">${typed?`Nothing found for “${esc(typed)}”. Try another spelling.`:(def.custom?'Type to add yours.':'Nothing to choose here yet.')}</p>`;
  return html;
}
function renderPicker(){
  const def=pickerDef(picker.k,picker.t);const n=allOpts(def).length;const showSearch=n>7||def.custom;
  return `<div class="sheet-wrap picker-wrap${showSearch?' tall':''}"><button class="backdrop" data-a="pickClose" aria-label="Close"></button><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(def.title)}"><div class="grip" aria-hidden="true"></div>
   <div class="sheet-h pad"><h2>${esc(def.title)}</h2><button class="iconbtn" data-a="pickClose" aria-label="Close">${ic('x')}</button></div>
   ${showSearch?`<div class="psearch pad">${ic('search')}<input id="pick-q" type="search" placeholder="${esc(def.ph||'Search')}" value="${esc(picker.q||'')}" autocomplete="off" enterkeyhint="done" aria-label="${esc(def.ph||'Search')}"></div>`:''}
   <div class="plist pad" id="pick-list" role="listbox"${def.multi?' aria-multiselectable="true"':''}>${pickRows()}</div>${def.multi?`<div class="sheet-f pad"><button class="btn primary block" data-a="pickClose">Done${(()=>{const a=getPath(picker.t==='me'?S.me:S.draft,picker.k);return Array.isArray(a)&&a.length?` · ${a.length} selected`:''})()}</button></div>`:''}</div></div>`;
}
/* Marriage timeline (28 Oct, his ok): filter "Ready to marry" + a pill on each card, from question 9 "How soon do you want to marry?". */
const _pickerDef0=pickerDef;
pickerDef=function(key,t){if(key==='prefs.timeline')return {title:'Ready to marry',opts:[{v:'Any',l:'Any time'},{v:'year',l:'Within a year'},{v:'two',l:'Within 2 years'}]};return _pickerDef0(key,t)};
const TL_PILL=['Ready to marry within a year','Ready to marry in 1–2 years','Marriage when it feels right'];
function timelinePill(p){const a=p.ans&&p.ans[8];return a===0||a===1||a===2?`<div class="tlrow"><span class="pill mtl">${ic('clock')}<span>${TL_PILL[a]}</span></span></div>`:''}
/* World-wide (29 Oct mock): language and community lists follow the country of origin, more diets, Pakistan NICOP. */
const TONGUE_BY_ORIGIN={India:POP_TONGUE,Pakistan:['Urdu','Punjabi','Sindhi','Pashto','Saraiki','Balochi','English'],Bangladesh:['Bengali','Sylheti','Chittagonian','English'],
 Nepal:['Nepali','Maithili','Bhojpuri','Newari','Tamang','English'],'Sri Lanka':['Sinhala','Tamil','English'],Philippines:['Filipino','Cebuano','Ilocano','Hiligaynon','English'],
 China:['Mandarin','Cantonese','Hokkien','Hakka'],'Hong Kong S.A.R.':['Cantonese','English','Mandarin'],Nigeria:['Yoruba','Igbo','Hausa','English'],Ghana:['Akan','Ewe','English'],
 Kenya:['Swahili','English','Kikuyu','Luo'],Mexico:['Spanish'],Brazil:['Portuguese'],Vietnam:['Vietnamese'],'South Korea':['Korean'],Japan:['Japanese'],Iran:['Persian','Azerbaijani','Kurdish'],
 Afghanistan:['Dari','Pashto','Uzbek'],Lebanon:['Arabic','French','Armenian'],Egypt:['Arabic'],Morocco:['Arabic','French','Berber'],Ethiopia:['Amharic','Oromo','Tigrinya'],
 Somalia:['Somali','Arabic'],Ukraine:['Ukrainian','Russian'],Poland:['Polish'],Italy:['Italian'],Portugal:['Portuguese'],Turkey:['Turkish','Kurdish'],Fiji:['Fiji Hindi','Fijian','English'],
 'Fiji Islands':['Fiji Hindi','Fijian','English'],Mauritius:['Mauritian Creole','Bhojpuri','French','English'],Guyana:['English','Guyanese Creole'],'Trinidad And Tobago':['English']};
const COMM_BY_ORIGIN={Pakistan:['Punjabi','Pashtun','Sindhi','Muhajir','Baloch','Kashmiri','Saraiki'],Bangladesh:['Bengali','Sylheti','Chittagonian'],
 Nepal:['Brahmin (Bahun)','Chhetri','Newar','Gurung','Magar','Tamang','Rai','Limbu','Tharu','Sherpa','Madhesi','Thakali'],'Sri Lanka':['Sinhalese','Sri Lankan Tamil','Indian Tamil','Sri Lankan Moor','Burgher'],
 Philippines:['Tagalog','Cebuano','Ilocano','Kapampangan','Bicolano','Waray','Hiligaynon','Moro'],China:['Han','Hui','Manchu','Uyghur','Zhuang','Tibetan','Hakka'],
 Nigeria:['Yoruba','Igbo','Hausa','Fulani','Ijaw','Edo','Ibibio','Tiv'],Ghana:['Akan','Ewe','Ga-Adangbe','Mole-Dagbani'],Kenya:['Kikuyu','Luo','Luhya','Kalenjin','Kamba','Kenyan Asian'],
 Afghanistan:['Pashtun','Tajik','Hazara','Uzbek'],Iran:['Persian','Azeri','Kurd','Lur','Armenian'],Lebanon:['Maronite','Sunni','Shia','Druze','Greek Orthodox','Armenian'],
 Ethiopia:['Oromo','Amhara','Tigray','Somali','Gurage'],'Fiji Islands':['Indo-Fijian','iTaukei'],Guyana:['Indo-Guyanese','Afro-Guyanese'],'Trinidad And Tobago':['Indo-Trinidadian','Afro-Trinidadian'],
 Mauritius:['Indo-Mauritian','Creole','Sino-Mauritian'],'Hong Kong S.A.R.':['Cantonese','Hakka','Teochew']};
['Halal','Kosher','Pescatarian'].forEach(x=>{if(!DIETS.includes(x))DIETS.push(x)});
const _pickerDefW=pickerDef;
pickerDef=function(key,t){const d=_pickerDefW(key,t),o=t==='me'?S.me:S.draft;
  if(key==='t'&&o&&TONGUE_BY_ORIGIN[o.oc])d.secs=[['Common in '+o.oc,TONGUE_BY_ORIGIN[o.oc].map(x=>({v:x,l:x}))],['All languages',LANGS.map(x=>({v:x,l:x}))]];
  if(key==='c'&&o&&COMM_BY_ORIGIN[o.oc]){const have=new Set(d.opts.map(x=>x.v));const extra=COMM_BY_ORIGIN[o.oc].filter(x=>!have.has(x)).map(x=>({v:x,l:x}));
    d.secs=[['',d.opts.slice(0,1)],['From '+o.oc,extra],[o.r?o.r+' communities':'',d.opts.slice(1)]].filter(s=>s[1].length);delete d.opts}
  if(key==='os'&&o&&!o.oc)return {title:'State / region',opts:[],ph:'Choose your country of origin first',custom:true};
  return d};
const _rootsDocsW=rootsDocs;
rootsDocs=function(oc){const o=_rootsDocsW(oc);if(oc==='Pakistan')o.splice(1,1,{v:'NICOP or POC',l:'NICOP or POC card',s:'For people of Pakistani origin living abroad.'});return o};
function applyChange(t,key,v){
  const o=t==='me'?S.me:S.draft;if(!o)return;
  setPath(o,key,v);
  if(t==='draft'){
    if(key==='oc')o.os='';
    if(key==='country'){o.state='';o.city='';o.res='';o.reloc=''}
    if(key==='state')o.city='';
    if(key==='r')o.c='';
    delete S.errors[key];
  }
  const pr=o.prefs;
  if(pr){
    if(key==='prefs.oc')pr.os='Any';
    if(key==='prefs.religion'){pr.community='Any';pr.alsoComm=[]}
    if(key==='prefs.community'&&v==='Any')pr.alsoComm=[];
    if(key==='prefs.liveCountry'&&v!==o.country)pr.radius=0;
    if(key==='prefs.ageMin'&&pr.ageMin>pr.ageMax)pr.ageMax=pr.ageMin;
    if(key==='prefs.ageMax'&&pr.ageMax<pr.ageMin)pr.ageMin=pr.ageMax;
    if(key==='prefs.hMin'&&pr.hMin>pr.hMax)pr.hMax=pr.hMin;
    if(key==='prefs.hMax'&&pr.hMax<pr.hMin)pr.hMin=pr.hMax;
    if(t==='draft'){delete S.errors['prefs.ageMax'];delete S.errors['prefs.hMax']}
  }
  if(t==='me'){if(key.startsWith('prefs.'))queuePrefsSave();else if(key.startsWith('privacy.'))savePrivacy()}
  save();
}

/* ---------- Toast ---------- */
function toast(msg,icon){clearTimeout(toastT);const old=document.querySelector('.toast');if(old)old.remove();
  const el=document.createElement('div');el.className='toast';el.setAttribute('role','status');el.innerHTML=(icon?ic(icon):'')+`<span>${esc(msg)}</span>`;
  document.getElementById('app').appendChild(el);toastT=setTimeout(()=>el.remove(),3800)}
function fail(e,field){if(e&&(e.code==='rude_words'||e.code==='money_request'))API.rpc('log_rude',{field:(e.code==='money_request'?'money-':'')+(field||'app')}).catch(()=>{});toast((e&&e.message)||'Something went wrong. Please try again.','info')}

/* ---------- Components ---------- */
const LOCKCHIP=()=>`<span class="lockchip glass">${ic('lock')}Photos unlock when you both accept</span>`;
function initials(n){return String(n||'').replace(/[^\p{L} ]/gu,'').split(' ').filter(Boolean).slice(0,2).map(s=>s[0]).join('').toUpperCase()}
function hueOf(id){return 330+hashStr(id)%50}
function avatar(p,size,isMe){
  if(isMe){const me=S.screen==='signup'?S.draft:S.me;const src=me&&(me.photo||null);
    return `<span class="av av-${size}" style="--h:${hueOf((me&&me.name)||'me')}">${src?`<img src="${esc(src)}" alt="Your photo">`:`<span class="av-art">${SIL}<span class="av-ini">${esc(initials(me&&me.name)||'')}</span></span>`}</span>`}
  const src=p.photos&&p.photos[0];const b=!src&&p.photoCount>0;const big=size==='cover'||size==='xl';
  if(src)return `<span class="av av-${size}"><img src="${esc(src)}" alt="" loading="lazy"></span>`;
  return `<span class="av av-${size}${b?' blur':''}" style="--h:${hueOf(p.id)}"><span class="av-art">${SIL}${!locked(p)&&!b&&p.first?`<span class="av-ini">${esc(initials(p.name))}</span>`:''}</span>${b&&!big?`<span class="av-lock">${ic('lock')}</span>`:''}</span>${b&&big?LOCKCHIP():(!b&&big&&!p.photoCount?`<span class="lockchip glass">${ic('camera')}No photo yet</span>`:'')}`;
}
function ring(n){const r=23,c=2*Math.PI*r,col=n>=80?'var(--rose)':n>=65?'var(--gold)':'var(--muted)';
  return `<span class="ring" aria-label="${n}% compatible"><svg viewBox="0 0 56 56"><circle class="tr" cx="28" cy="28" r="${r}"/><circle cx="28" cy="28" r="${r}" style="stroke:${col}" stroke-dasharray="${(c*n/100).toFixed(1)} ${c.toFixed(1)}"/></svg><b>${n}%</b></span>`}
function vtick(p){return p.v.id&&p.v.selfie?`<span class="vtick" title="ID verified">${ic('badge')}<span class="sr">ID verified</span></span>`:''}
function rootsLine(p){const v=k=>p.v&&p.v[k]?`<span class="pv" title="Proven with a document">${ic('check')}<span class="sr">proven</span></span>`:'';return `<span class="roots"><span class="rg"><span class="k">Roots</span> ${esc(p.os)}, ${esc(p.oc)}${v('roots')}</span> <span class="rg"><span class="arr" aria-hidden="true">→</span> <span class="k">Lives</span> ${esc(p.cityName)}${v('lives')} · ${esc(distLabel(p))}</span></span>`}
function trustBadges(p){const out=[];
  if(p.v&&p.v.roots)out.push(`<span class="pill ver">${ic('check')}Roots proven</span>`);
  if(p.v&&p.v.lives)out.push(`<span class="pill ver">${ic('check')}Lives in ${esc(p.country)}: proven</span>`);
  if(p.gold)out.push(`<span class="pill gold">${ic('crown')}Gold member</span>`);
  return out.length?`<div class="badges">${out.join('')}</div>`:''}
function actionBar(p){
  const st=S.interests[p.id], sl=S.shortlist.includes(p.id);
  const star=`<button class="rbtn${sl?' on':''}" data-a="shortlist" data-id="${p.id}" aria-label="${sl?'Remove from saved':'Save for later'}" aria-pressed="${sl}">${ic('star')}</button>`;
  if(st==='mutual')return `<span class="status-line"><span class="pill good">${ic('heart')}Matched</span></span>${star}<button class="btn primary" data-a="openchat" data-id="${p.id}">${ic('chat')}Chat</button>`;
  if(st==='received')return `<button class="btn ghost" data-a="decline" data-id="${p.id}">Decline</button>${star}<button class="btn primary" data-a="accept" data-id="${p.id}">${ic('heart')}Accept</button>`;
  if(st==='sent')return `<span class="status-line"><span class="pill gold">${ic('heart')}Interest sent</span></span>${star}`;
  const passed=S.passed.includes(p.id);
  return `${passed?`<button class="btn ghost" data-a="unpass" data-id="${p.id}">Undo pass</button>`:`<button class="rbtn" data-a="pass" data-id="${p.id}" aria-label="Pass">${ic('x')}</button>`}${star}<button class="btn primary" data-a="interest" data-id="${p.id}">${ic('heart')}Send interest</button>`;
}
function card(p){
  const c=compat(p);const st=S.interests[p.id];const lk=locked(p)&&!(st==='received'&&p.gold);
  const top=st==='received'?`<span class="mchip state">${ic('heart')}Likes you</span>`:p.days<=10?`<span class="mchip new">New</span>`:'<span></span>';
  return `<article class="mcard nm-card${lk?' lockd':''}" id="card-${p.id}">
    <button class="mphoto" data-a="open" data-id="${p.id}" aria-label="${lk?`See this ${c.total}% match with Gold`:`Open ${esc(shown(p))}'s profile`}">
      ${avatar(p,'cover')}
      <span class="mtop">${top}<span class="nm-fit" style="--fit:${c.total}%" aria-label="${c.total}% fit"><span>${c.total}%<small>fit</small></span></span></span>
      <span class="mname"><span class="nm">${esc(shown(p))} <span class="age">${p.age}</span> ${checksSeal(p)}</span><small>${lk?`${ic('lock')} Name, photos and profile with Gold`:`${esc(p.job)} · ${ftIn(p.h)}`}</small></span>
    </button>
    <div class="mbody">${routeLine(p)}
      <ul class="nm-why">${whyChips(p).map(w=>`<li>${ic('heart')}<span>${esc(w.t)}</span></li>`).join('')}</ul>
      ${timelinePill(p)}${p.gold?`<div class="badges"><span class="pill gold">${ic('crown')}Gold member</span></div>`:''}
      <div class="mact">${lk?`<button class="btn gold" data-a="upgrade" data-r="profile" data-id="${p.id}">${ic('crown')}See ${p.g==='F'?'her':'his'} profile</button>`:actionBar(p)}</div></div>
  </article>`;
}
/* New design (29 Oct, his "design ok"): roots route on every card, checks seal, fit ring. */
function checksDone(p){const v=p.v||{};return [v.id,v.selfie,v.roots,v.lives,true].filter(Boolean).length}
function checksSeal(p){const n=checksDone(p);return `<span class="nm-seal${n===5?'':' part'}">${ic('check')}${n} of 5 checks</span>`}
function checksRow(p){const v=p.v||{};return `<div class="nm-chk">${[['ID',v.id],['Live selfie',v.selfie],['Roots',v.roots],['City',v.lives],['Photos',true]].map(([k,ok])=>`<span class="${ok?'ok':''}"><i>${ic(ok?'check':'clock')}</i>${k}</span>`).join('')}</div>`}
function routeLine(p){const me=S.me,same=p.oc===me.oc&&p.os===me.os,sameC=p.oc===me.oc;
  return `<div class="nm-route"><div class="nm-rt"><span class="nm-pl"><b>${esc(p.os||p.oc)}</b><small>${esc(p.os?p.oc:'')}</small></span>
    <svg class="nm-arc" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true"><path d="M5 32 Q60 -6 115 32"/><circle cx="5" cy="32" r="4" class="o"/><circle cx="115" cy="32" r="4" class="d"/></svg>
    <span class="nm-pl r"><b>${esc(p.cityName)}</b><small>${esc(p.country)}</small></span></div>
    <div class="nm-rnote"><span class="${same||sameC?'ok':''}">${same?'Same roots as you':sameC?`Roots in ${esc(p.oc)}, like you`:`Roots in ${esc(p.oc)}`}</span><span>${esc(distLabel(p))}</span></div></div>`}
function rowItem(p,end,act){return `<button class="rowi" data-a="${act||'open'}" data-id="${p.id}">${avatar(p,'sm')}<span class="tx"><b>${esc(shown(p))} ${vtick(p)}</b><span>${p.age} · ${esc(p.os)} → ${esc(p.cityName)}</span></span><span class="end">${end||''}</span></button>`}
function errOf(k){return S.errors[k]?`<span class="err" id="err-${k.replace(/\./g,'-')}">${esc(S.errors[k])}</span>`:''}
function fldCls(k){return 'fld'+(S.errors[k]?' has-err':'')}
function inF(k,label,type,cur,attrs,hint){return `<label class="${fldCls(k)}" data-f="${k}"><span>${label}</span><input id="f-${k}" type="${type}" data-bind="${k}" value="${esc(cur)}" ${attrs||''}>${hint?`<span class="hint">${hint}</span>`:''}${errOf(k)}</label>`}
function toggle(k,title,sub,cur,target){return `<label class="tgl"><span class="tx"><b>${title}</b>${sub?`<small>${sub}</small>`:''}</span><input type="checkbox" role="switch" data-bind="${k}"${target?` data-target="${target}"`:''}${cur?' checked':''}><i aria-hidden="true"></i></label>`}
function radioChips(k,opts,cur,rr,disabled){return `<div class="segopts${S.errors[k]?' has-err':''}" data-f="${k}" role="radiogroup">${opts.map(o=>`<label class="opt"><input type="radio" name="r-${k}" value="${esc(o.v)}" data-bind="${k}"${rr?' data-rr':''}${String(cur)===String(o.v)?' checked':''}${disabled?' disabled':''}><span>${esc(o.l)}</span></label>`).join('')}</div>`}
function fmtLeft(ms){if(ms<=0)return 'now';const m=Math.ceil(ms/60000),h=Math.floor(m/60);return h?`${h}h ${m%60}m`:`${m}m`}
function midnight(){const d=new Date();d.setHours(24,0,0,0);return d.getTime()}
function greet(){const h=new Date().getHours();return h<12?'Good morning':h<17?'Good afternoon':'Good evening'}
function hearts(n){const r=rngP(99);let s='';for(let i=0;i<n;i++){const sz=Math.round(14+r()*26);s+=`<span class="floaty" style="left:${Math.round(r()*96)}%;animation-duration:${(5+r()*5).toFixed(1)}s;animation-delay:${(r()*4).toFixed(1)}s" aria-hidden="true"><svg viewBox="0 0 24 24" width="${sz}" height="${sz}">${IC.heart}</svg></span>`}return s}
function burstAt(el){try{const a=app.getBoundingClientRect(),r=el.getBoundingClientRect();const b=document.createElement('div');b.className='burst';b.style.left=(r.left-a.left+r.width/2)+'px';b.style.top=(r.top-a.top+r.height/2)+'px';
  for(let i=0;i<9;i++){const ang=(i/9)*Math.PI*2-Math.PI/2,d=40+(i%3)*14;const h=document.createElement('i');h.style.setProperty('--x',Math.round(Math.cos(ang)*d)+'px');h.style.setProperty('--y',Math.round(Math.sin(ang)*d-20)+'px');h.innerHTML=`<svg viewBox="0 0 24 24">${IC.heart}</svg>`;b.appendChild(h)}
  app.appendChild(b);setTimeout(()=>b.remove(),1000)}catch(e){}}
function spinner(label){return `<span class="spin" role="status" aria-label="${esc(label||'Loading')}"></span>`}

/* ---------- Events ---------- */
const TZC={India:'Asia/Kolkata',Pakistan:'Asia/Karachi',Bangladesh:'Asia/Dhaka',Nepal:'Asia/Kathmandu','Sri Lanka':'Asia/Colombo',Philippines:'Asia/Manila','United Kingdom':'Europe/London','United Arab Emirates':'Asia/Dubai','United States':'America/New_York',Australia:'Australia/Sydney',Singapore:'Asia/Singapore','New Zealand':'Pacific/Auckland',Germany:'Europe/Berlin',Ireland:'Europe/Dublin',Canada:'America/Toronto'};
const TZCITY={Vancouver:'America/Vancouver',Surrey:'America/Vancouver',Calgary:'America/Edmonton',Edmonton:'America/Edmonton',Winnipeg:'America/Winnipeg','San Jose':'America/Los_Angeles',Seattle:'America/Los_Angeles',Houston:'America/Chicago',Chicago:'America/Chicago'};
function tzOfEvent(e){return TZCITY[e.city]||TZC[e.country]||undefined}
function fmtTime(d,tz){try{return d.toLocaleTimeString(RM_I18N.lang==='fr'?'fr-CA':'en-US',{timeZone:tz,hour:'numeric',minute:'2-digit'}).replace(' AM',' am').replace(' PM',' pm')}catch(x){return d.toLocaleTimeString()}}
function fmtDay(d,tz){const o=k=>{try{return d.toLocaleDateString(RM_I18N.locale,Object.assign({timeZone:tz},k))}catch(x){return d.toLocaleDateString(RM_I18N.locale,k)}};
  return {day:o({day:'numeric'}),mon:o({month:'short'}),wd:o({weekday:'short'}),long:o({weekday:'short',day:'numeric',month:'short'})}}
function fmtDue(ts){return new Date(ts).toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}
function durLabel(min){const h=min/60;return Number.isInteger(h)?`${h} ${h===1?'hour':'hours'}`:`${h.toFixed(1)} hours`}
const MEALS={veg:'Vegetarian',jain:'Jain',nonveg:'Non-vegetarian',halal:'Halal'};
function eventFromServer(x){
  const d=new Date(x.starts_at),tz=TZCITY[x.city]||TZC[x.country];
  const aud=x.audience_kind==='tongue'?{k:'t',v:x.audience_value,l:x.audience_label}:x.audience_kind==='religion'?{k:'r',v:x.audience_value,l:x.audience_label}:{k:'all',l:x.audience_label||'All communities'};
  return {id:x.id,kind:x.kind,title:x.title,sub:x.subtitle||'',city:x.city,country:x.country,cur:x.currency,area:x.area||x.city,tz,
    date:d,time:fmtTime(d,tz),dur:durLabel(x.duration_min),aud,ageMin:x.age_min,ageMax:x.age_max,age:`${x.age_min}–${x.age_max}`,
    seats:[x.seats_women,Math.max(0,x.seats_women-x.reserved_women),x.seats_men,Math.max(0,x.seats_men-x.reserved_men)],
    need:x.need_total,have:x.reserved_total,parents:x.parents_allowed,includes:x.includes||[],agenda:Array.isArray(x.timetable)?x.timetable:[],
    priceM:x.member_price_cents,priceP:x.parent_price_cents,hold:x.hold_cents||0,meals:x.meal_options||[],status:x.status,deadline:new Date(x.confirm_deadline),
    womenFrom:x.women_book_from&&new Date(x.women_book_from),menFrom:x.men_book_from&&new Date(x.men_book_from),
    my:x.my_status?{status:x.my_status,holdPaid:x.my_hold_cents||0,parents:x.my_parents||[],meal:x.my_meal,amount:x.my_amount_cents,due:x.my_due_by&&new Date(x.my_due_by),wait:!!x.my_waitlisted}:null,venue:x.venue,
    wait:[x.wait_women||0,Math.max(0,(x.wait_women||0)-(x.waiting_women||0)),x.wait_men||0,Math.max(0,(x.wait_men||0)-(x.waiting_men||0))],moved:x.postponed_from&&new Date(x.postponed_from)}
}
/* Seat hold (29 Oct, his answer "2"): a small payment when reserving, so every reservation is real. */
function holdOn(e){return e&&e.hold>0&&e.status!=='confirmed'}
function holdNote(e){return `A ${money(e.hold,e.cur)} seat hold, paid now with PayPal, keeps your seat. It is taken off your ticket when the event is confirmed and refunded in full if the event is not confirmed. If you cancel, the hold is not refunded.`}
function events(){return S.events}
function evById(id){return S.events.find(e=>e.id===id)}
function audOk(e,p){const a=e.aud||{k:'all'};return a.k==='all'||(a.k==='t'&&p.t===a.v)||(a.k==='r'&&p.r===a.v)}
function audLabel(e){const a=e.aud||{k:'all'};return a.k==='all'?'All communities':`For ${a.l}`}
function forMe(e){return audOk(e,S.me)}
function ageOk(e){return S.me.age>=e.ageMin&&S.me.age<=e.ageMax}
function evMine(e){const f=S.me&&S.me.g==='F',[wc,wl,mc,ml]=e.seats,w=e.wait||[0,0,0,0];return {seatsLeft:f?wl:ml,waitLeft:f?w[1]:w[3],waitCap:f?w[0]:w[2],who:f?'women':'men'}}
function evStat(e){return {n:e.have,confirmed:e.status==='confirmed',left:Math.max(0,e.need-e.have),deadline:e.deadline}}
function evArt(e,hero){const up=hero?'0':'-40';const g={family:['#FFC2A6','#FF8399','#E8436B'],speed:['#FFA9BA','#EE4D74','#B8325F'],festive:['#FFD69E','#FF9C7E','#E2586E'],brunch:['#FFD3B0','#FF9AA8','#E8436B'],online:['#D9C2FF','#B98AF0','#8E5BD8']}[e.kind]||['#FFC2A6','#FF8399','#E8436B'];const id='ea'+String(e.id).slice(0,8);
  let s=`<svg class="art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g[0]}"/><stop offset=".55" stop-color="${g[1]}"/><stop offset="1" stop-color="${g[2]}"/></linearGradient><radialGradient id="${id}l"><stop offset="0" stop-color="#FFF6D8"/><stop offset="1" stop-color="#FFF6D8" stop-opacity="0"/></radialGradient></defs><rect width="400" height="250" fill="url(#${id})"/>`;
  [[60,190,40],[330,70,55],[250,205,30],[140,40,24]].forEach(([x,y,r])=>{s+=`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".12"/>`});
  [[-10,24,410,34,92],[-10,62,410,52,128]].forEach(([x1,y1,x2,y2,cy])=>{s+=`<path d="M${x1} ${y1} Q200 ${cy} ${x2} ${y2}" stroke="#7A2040" stroke-opacity=".3" stroke-width="1.5" fill="none"/>`;
    for(let i=1;i<12;i++){const t=i/12,x=(1-t)*(1-t)*x1+2*(1-t)*t*200+t*t*x2,y=(1-t)*(1-t)*y1+2*(1-t)*t*cy+t*t*y2+6;s+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="12" fill="url(#${id}l)"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" fill="${i%3?'#FFF2C4':'#FFD1DC'}"/>`}});
  if(hero){}else if(e.kind==='family'||e.kind==='brunch')s+=`<g transform="translate(0 ${up})"><g fill="#fff" opacity=".93"><path d="M300 188h44v10a22 22 0 01-44 0z"/><path d="M240 196h34v8a17 17 0 01-34 0z" opacity=".85"/></g><path d="M344 192a8 8 0 010 16" stroke="#fff" stroke-width="4" fill="none" opacity=".93"/><g stroke="#fff" stroke-width="2.4" fill="none" opacity=".7" stroke-linecap="round"><path d="M314 178q-4-8 2-14M328 178q-4-8 2-14"/></g></g>`;
  else if(e.kind==='speed'||e.kind==='online')s+=`<g transform="translate(0 ${up})"><g fill="none" stroke="#fff" stroke-width="3" opacity=".92" stroke-linecap="round"><circle cx="320" cy="192" r="26"/><path d="M320 176v16l10 8"/></g><path d="M250 205c0-10 8-16 16-12 8-4 16 2 16 12 0 10-16 18-16 18s-16-8-16-18z" fill="#fff" opacity=".88"/></g>`;
  else [[262,214],[302,208],[342,214]].forEach(([x,y0])=>{const y=y0+(+up);s+=`<circle cx="${x}" cy="${y-12}" r="16" fill="url(#${id}l)"/><path d="M${x-16} ${y}q16 16 32 0z" fill="#FFE1A8"/><path d="M${x} ${y-4}c-5-6-1-14 0-18 1 4 5 12 0 18z" fill="#FFF6D8"/>`});
  return s+'</svg>'}
/* ---------- Boot and welcome ---------- */
function renderBoot(){return `<div class="boot"><div class="brand"><svg class="mark" viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>NeuMarry</div>${S.bootError?`<p class="hint">${esc(S.bootError)}</p><button class="btn primary" data-a="retryBoot">Try again</button>`:spinner('Opening NeuMarry')}</div>`}
function renderWelcome(){
  return `<div class="scroll"><div class="welcome pad">
    <div class="wtop"><div class="brand"><svg class="mark" viewBox="0 0 32 22" aria-hidden="true"><path class="c1" d="M11.60 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/><path class="c2" d="M20.40 18.59c-0.82 0 -8.2 -4.76 -8.2 -10.25 0 -2.71 2.13 -4.92 4.76 -4.92 1.48 0 2.71 0.74 3.44 1.89 0.74 -1.15 1.97 -1.89 3.44 -1.89 2.62 0 4.76 2.21 4.76 4.92 0 5.49 -7.38 10.25 -8.2 10.25z"/></svg>NeuMarry</div><button class="lang-sw notr" data-a="lang" aria-label="Language / Langue">${ic('globe')}${RM_I18N.lang==='fr'?'English':'Français'}</button></div>
    <div class="hero" aria-hidden="true">
      <div class="hero-pair"><span class="av a1"><span class="av-art">${portrait(11,'F',{tone:0})}</span></span><span class="av a2"><span class="av-art">${portrait(42,'M',{tone:2})}</span></span><span class="match">${ic('sparkle')}96% match</span></div>
      <div class="hero-tags"><span>Roots · Gujarat, India</span><span>Lives · Toronto, 8 km</span></div>
    </div>
    <h1>Your person from <em>back home</em> might live ten minutes away.</h1>
    <p class="lede">For everyone living away from the country they grew up in. Meet verified people who share your roots and your mindset, in your city, with your family by your side.</p>
    <div class="cta"><button class="btn primary block" data-a="start">Create my profile</button>
      <button class="btn ghost block" data-a="login">I already have an account</button></div>
    <p class="note">By continuing you agree to our <button class="link" data-a="legal" data-k="terms">Terms</button> and <button class="link" data-a="legal" data-k="privacy">Privacy Policy</button>. 18+ only.</p>
    <ul class="usp">
      <li><span class="pi">${ic('users')}</span><span><b>Family Mixers</b><span>Hosted evenings in your city, dinner included. Bring your parents, meet in person.</span></span></li>
      <li><span class="pi">${ic('pin')}</span><span><b>Roots, city and mindset</b><span>Matched on where you come from, where you live and how you think.</span></span></li>
      <li><span class="pi">${ic('shield')}</span><span><b>Only real people</b><span>Every member is checked with a government ID and a live selfie.</span></span></li>
      <li><span class="pi">${ic('lock')}</span><span><b>Private by default</b><span>Photos stay hidden until you both say yes. Your number is never shown.</span></span></li>
    </ul>
    <a class="wwu-link" href="${esc(CFG.site)}work-with-us.html" target="_blank" rel="noopener">${ic('users')}<span><b>Work with NeuMarry</b><small>Hosts, partner restaurants and matrimonial bureaus</small></span>${ic('chev')}</a>

  </div></div>`;
}

/* ---------- Account: sign up and log in ---------- */
const EMAILRX=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function pwChecks(pw,a){const low=(pw||'').toLowerCase(),em=((a.email||'').split('@')[0]||'').toLowerCase();
  return [['At least 10 characters',pw.length>=10],['Upper and lower case letters',/[a-z]/.test(pw)&&/[A-Z]/.test(pw)],['At least one number',/\d/.test(pw)],['At least one symbol, like ! ? # @',/[^A-Za-z0-9]/.test(pw)],['Does not contain your email name',!!pw&&!(em.length>=3&&low.includes(em))]]}
function pwRulesHTML(a){const c=pwChecks(a.pw||'',a),n=c.filter(x=>x[1]).length;const lvl=!a.pw?'':n<=2?'Weak':n<=4?'Almost there':'Strong';
  return `<div class="pwbar" aria-hidden="true"><i class="${n>=1?'on':''} ${n<=2?'w':n<=4?'m':'s'}"></i><i class="${n>=3?'on':''} ${n<=4?'m':'s'}"></i><i class="${n>=5?'on s':''}"></i></div>${lvl?`<small class="pwlvl">${lvl}</small>`:''}<ul class="pwrules">${c.map(([t,ok])=>`<li class="${ok?'ok':''}">${ic(ok?'check':'x')}<span>${t}</span></li>`).join('')}</ul>`}
function authErr(k){const e=(S.errors||{})[k];return e?`<span class="err">${esc(e)}</span>`:''}
function renderAuth(){
  const a=S.auth||{mode:'signup'},su=a.mode==='signup',m=a.method;
  let body='';
  if(a.mode==='consent'){
    body=`<h1 class="auth-h">Before you <em>start</em></h1><p class="lede">Signed in as ${esc(API.email())}. Please confirm these to build your profile.</p>
    <div class="consent${S.errors.consent?' has-err':''}" id="consent">
     <label class="ck"><input type="checkbox" data-auth="c18"${a.c18?' checked':''}><span>I am 18 or older, and I am joining NeuMarry to find a marriage partner.</span></label>
     <label class="ck"><input type="checkbox" data-auth="terms"${a.terms?' checked':''}><span>I have read and agree to the <button type="button" class="link" data-a="legal" data-k="terms">Terms of Service</button> and the <button type="button" class="link" data-a="legal" data-k="privacy">Privacy Policy</button>, including how NeuMarry verifies members and uses my details to suggest matches.</span></label>
     <label class="ck"><input type="checkbox" data-auth="mkt"${a.mkt?' checked':''}><span>Optional: send me event invitations and offers by email and WhatsApp. I can stop them at any time.</span></label>
     ${authErr('consent')}</div>
    <button class="btn primary block" data-a="consentGo">Continue</button>`;
  }else if(a.mode==='reset'){
    body=`<h1 class="auth-h">Choose a new <em>password</em></h1>
    <label class="fld${S.errors.pw?' has-err':''}"><span>New password</span><span class="pwwrap"><input id="au-pw" type="${a.show?'text':'password'}" data-auth="pw" value="${esc(a.pw||'')}" autocomplete="new-password" maxlength="64"><button type="button" class="iconbtn" data-a="pwShow" aria-label="${a.show?'Hide password':'Show password'}" aria-pressed="${!!a.show}">${ic('eye')}</button></span><div id="pw-rules">${pwRulesHTML(a)}</div>${authErr('pw')}</label>
    <label class="fld${S.errors.pw2?' has-err':''}"><span>Confirm password</span><input id="au-pw2" type="${a.show?'text':'password'}" data-auth="pw2" value="${esc(a.pw2||'')}" autocomplete="new-password" maxlength="64">${authErr('pw2')}</label>
    <button class="btn primary block" data-a="authNewPw"${busy?' disabled':''}>${busy==='auth'?spinner('Saving'):'Save password'}</button>`;
  }else if(a.mode==='sent'){
    body=`<h1 class="auth-h">Check your <em>email</em></h1><p class="lede">${esc(a.sentText||'')}</p><button class="btn primary block" data-a="authMode" data-k="login">Back to log in</button>`;
  }else if(!m){
    body=`<h1 class="auth-h">${su?'Create your <em>account</em>':'Welcome <em>back</em>'}</h1>
    <p class="lede">${su?'Choose how you want to sign in. Next you build your profile and upload an ID and a selfie, so everyone here is real.':'Log in the same way you signed up.'}</p>
    ${su?`<div class="consent${S.errors.consent?' has-err':''}" id="consent">
     <label class="ck"><input type="checkbox" data-auth="c18"${a.c18?' checked':''}><span>I am 18 or older, and I am joining NeuMarry to find a marriage partner.</span></label>
     <label class="ck"><input type="checkbox" data-auth="terms"${a.terms?' checked':''}><span>I have read and agree to the <button type="button" class="link" data-a="legal" data-k="terms">Terms of Service</button> and the <button type="button" class="link" data-a="legal" data-k="privacy">Privacy Policy</button>, including how NeuMarry verifies members and uses my details to suggest matches.</span></label>
     <label class="ck"><input type="checkbox" data-auth="mkt"${a.mkt?' checked':''}><span>Optional: send me event invitations and offers by email and WhatsApp. I can stop them at any time.</span></label>
     ${authErr('consent')}</div>`:''}
    <div class="authlist">
     <button class="authbtn" id="g-own" data-a="authGo" data-k="google"${busy?' disabled':''}><span class="ai g" aria-hidden="true">${GLOGO}</span><span>Continue with Google</span></button>
     ${CFG.web?`<div id="gsi-slot" class="gsi-slot notr" hidden></div>`:''}
     <button class="authbtn" data-a="authGo" data-k="email"${busy?' disabled':''}><span class="ai">${ic('mail')}</span><span>${su?'Email and password':'Email and password'}</span></button>
    </div>
    <p class="hint" style="text-align:center">Phone and WhatsApp login are coming soon.</p>
    <p class="note" style="text-align:center">${su?`Already have an account? <button class="link" data-a="authMode" data-k="login">Log in</button>`:`New to NeuMarry? <button class="link" data-a="authMode" data-k="signup">Create an account</button>`}</p>`;
  }else{
    body=`<h1 class="auth-h">${su?'Set up your <em>login</em>':'Log <em>in</em>'}</h1>
    <label class="fld${S.errors.email?' has-err':''}"><span>Email</span><input id="au-email" type="email" data-auth="email" value="${esc(a.email||'')}" autocomplete="email" maxlength="80" autocapitalize="none" spellcheck="false">${authErr('email')}</label>
    <label class="fld${S.errors.pw?' has-err':''}"><span>Password</span><span class="pwwrap"><input id="au-pw" type="${a.show?'text':'password'}" data-auth="pw" value="${esc(a.pw||'')}" autocomplete="${su?'new-password':'current-password'}" maxlength="64"><button type="button" class="iconbtn" data-a="pwShow" aria-label="${a.show?'Hide password':'Show password'}" aria-pressed="${!!a.show}">${ic('eye')}</button></span>${su?`<div id="pw-rules">${pwRulesHTML(a)}</div>`:''}${authErr('pw')}</label>
    ${su?`<label class="fld${S.errors.pw2?' has-err':''}"><span>Confirm password</span><input id="au-pw2" type="${a.show?'text':'password'}" data-auth="pw2" value="${esc(a.pw2||'')}" autocomplete="new-password" maxlength="64">${authErr('pw2')}</label>`:`<button class="link" data-a="forgotPw" style="justify-self:start">Forgot password?</button>`}
    <button class="btn primary block" data-a="authEmail"${busy?' disabled':''}>${busy==='auth'?spinner('Please wait'):su?'Create account':'Log in'}</button>
    <p class="note">Passwords are stored only as a secure hash. We will never ask for your password by email, phone or WhatsApp.</p>`;
  }
  const head=a.mode==='consent'?'New profile':a.mode==='reset'?'New password':a.mode==='sent'?'Email sent':su?'New account':'Log in';
  return `<div class="su-head pad"><button class="iconbtn" data-a="authBack" aria-label="Back">${ic('back')}</button><div class="t"><small>${head}</small></div></div>
  <div class="scroll" id="su-scroll"><div class="form pad auth">${body}</div></div>`;
}
const LEGAL={terms:['Terms of Service: the key points',[
  'You must be 18 or older and legally free to marry, and you join to find a marriage partner, not for dating or business.',
  'One account per person, in your real name. You verify a government ID and a live selfie, and prove your roots and the city you live in with documents.',
  'NeuMarry suggests matches and hosts events. We do not run criminal background checks and cannot promise who anyone is or how they will behave. Meetings, decisions, relationships and any marriage after an introduction are your own responsibility.',
  'Never send money, gifts or visa help to anyone you meet here, and report anyone who asks.',
  'Gold renews automatically until you cancel in your Google Play or App Store account. Event seats are free to reserve and paid only when the event is confirmed. The ticket includes your meal; nothing is paid at the restaurant.',
  'We can suspend accounts that break these rules, including fake profiles, harassment and asking for money.']],
 privacy:['Privacy Policy: the key points',[
  'We collect what you put in your profile, your ID, selfie and document checks, your activity in the app and basic device data, and use it to verify you, suggest matches, run events and keep members safe.',
  'Your phone number, email, ID and documents are never shown to other members. ID, selfie and document images are deleted within 30 days of the check. A location check is optional and only its result is kept.',
  'Your photos stay hidden until you both accept, unless you turn blurring off. Religion and community are optional to show.',
  'We never sell your data. Service providers (hosting, payments, video) process it only for us, under contract.',
  'You can correct or delete your data at any time: Me, then Delete my account.',
  'Questions or complaints go to our Grievance Officer, Swapnil Dinesh Bhagat, who replies within 30 days.']]};

/* ---------- Signup ---------- */
const SHORT=['About','Roots','Location','Values','Verify','Privacy'];
const SU_TRUST=['30 seconds. Then we show you how many verified people fit you.','People from your roots appear first in your matches. Roots are proven with a document.','Matches show the real distance to you. Your exact address is never shown. Mostly taps, almost no typing.','Each answer makes your match % smarter, and you see the reasons on every match.','Your safety badge: only verified members can send interests and chat, so everyone you meet is real.','Last step: choose who you want to meet. You can change it any time.'];
const JOBS=['Engineer','Doctor','Nurse','IT / Software','Teacher','Business owner','Accountant','Student','Designer','Sales','Lawyer','Pharmacist','Banking / Finance','Government job','Researcher','Manager','Marketing','Architect','Chef','Driver / Logistics'],EDUS=['High school','Diploma','Bachelor’s','Master’s','PhD','Medical degree','Law degree','Trade certificate'];
function pickOrOther(k,label,opts,ph){const d=S.draft,cur=d[k]||'',pk=k+'Pick';if(d[pk]===undefined)d[pk]=cur?(opts.includes(cur)?cur:'__o'):'';
  return `<div class="fld" data-f="${k}"><span>${label}</span>${radioChips(pk,opts.map(o=>({v:o,l:o})).concat([{v:'__o',l:'Other: type it'}]),d[pk],true)}${d[pk]==='__o'?`<input id="f-${k}" data-bind="${k}" maxlength="60" placeholder="${esc(ph)}" value="${esc(opts.includes(cur)?'':cur)}" style="margin-top:8px">`:''}${errOf(k)}</div>`}
const SU_TRUST_OLD=['Everyone on NeuMarry verifies, just like you. That is why every match you see is verified.','Roots are checked with a document, so “same roots” on a match is always real.','Every member proves the city they live in, so “near you” really means near you.','We match on these answers and show you the reasons on every match.','ID read by Google and checked by a person, plus a live selfie. Only fully verified members are shown.','Premium and private: your photo and full name stay hidden until you both say yes.'];
const STEPS=['About you','Your roots','Where you live now','Values & lifestyle','Verify you’re real','Privacy & preferences'];
function checkLine(c,label){if(!c)return '';const st=c.status;return `<p class="hint">${st==='approved'?`${ic('check')} ${label} approved`:st==='rejected'?`<b style="color:var(--bad)">${label} not approved${c.note?': '+esc(c.note):''}.</b> Upload a new one.`:`${label} received. Our team checks it within 24 hours.`}</p>`}
/* ---------- Verify: ID and selfie, roots, where you live now, location (owner's ok 25 Oct 2026) ---------- */
const WHY_LINE='Why we check all this: to keep you safe, and so that every profile you see is truly verified, just like yours. It is all for your own good.';
const VS_T=['','ID and live selfie','Prove your roots','Where you live now','Your address today','Quick location check'];
function rootsDocs(oc){const o=[{v:'id',l:`Same as my ID: a passport of ${oc}`,s:'Then there is nothing more to upload.'}];
  if(oc==='India')o.push({v:'OCI card',l:'OCI card',s:'For people of Indian origin who now hold another passport.'});
  else o.push({v:'National ID card',l:'National ID card',s:'Issued by your country of origin.'});
  o.push({v:'Birth certificate',l:'Birth certificate',s:'Shows the place of birth.'});
  o.push({v:'Parent’s document',l:'Born outside your country of origin?',s:'A parent’s passport or OCI card, together with your birth certificate that names that parent, in one PDF or photo.'});
  return o}
function statusDocs(){return [{v:'Permanent residence',l:'PR card or permanent residence permit',s:'Both sides.'},{v:'Citizenship',l:'Passport or citizenship certificate',s:'Of the country you live in.'},{v:'Permit or visa',l:'Work permit, study permit or visa',s:'Must still be valid.'}]}
function addrDocs(){return [{v:'Photo ID with address',l:'Driver’s licence or photo ID card',s:'With your current address.'},{v:'Bill or statement',l:'Bank statement, utility bill or lease',s:'Dated in the last 3 months, in your name.'}]}
function vOpts(key,list,cur){return `<div class="vopts" role="radiogroup">${list.map(o=>`<button type="button" class="vopt${cur===o.v?' on':''}" role="radio" aria-checked="${cur===o.v}" data-a="vPick" data-k="${key}" data-v="${esc(o.v)}"><span class="rd" aria-hidden="true"></span><span class="tx"><b>${esc(o.l)}</b>${o.s?`<small>${esc(o.s)}</small>`:''}</span></button>`).join('')}</div>`}
function vFile(kind,label,ready,name){return ready?`<p class="hint">${ic('check')} ${esc(name||'File')} ready to send</p><span class="btn ghost sm file">${ic('refresh')}Choose another<input type="file" accept="image/*,application/pdf" data-file="${kind}" aria-label="${esc(label)}"></span>`
  :`<span class="btn primary file">${ic('plus')}${esc(label)}<input type="file" accept="image/*,application/pdf" data-file="${kind}" aria-label="${esc(label)}"></span>`}
/* state of each part: ok, wait, rej, ready, todo (location: ok, ready, opt) */
function vState(n,d,me){const st=c=>c&&c.status;
  if(n===1){if(me&&me.v.id&&me.v.selfie)return 'ok';const ic_=me&&me.idCheck,sc=me&&me.selfieCheck;
    const idR=(me&&me.v.id)||d.idBlob||st(ic_)==='pending',sR=(me&&me.v.selfie)||d.selfieBlob||st(sc)==='pending';
    if((st(ic_)==='rejected'&&!me.v.id&&!d.idBlob)||(st(sc)==='rejected'&&!me.v.selfie&&!d.selfieBlob))return 'rej';
    if(idR&&sR)return (d.idBlob||d.selfieBlob)?'ready':'wait';return 'todo'}
  if(n===2){if(me&&me.v.roots)return 'ok';const c=me&&me.rootsCheck;if(d.rootsType&&(d.rootsType==='id'||d.rootsBlob))return 'ready';
    if(st(c)==='pending')return 'wait';if(st(c)==='rejected')return 'rej';return 'todo'}
  if(n===3){if(me&&me.v.lives&&!d.addrBlob)return 'ok';const round=me&&me.livesRound?Date.parse(me.livesRound):0;
    const cur=c=>c&&Date.parse(c.created_at)>=round-1000?c:null;const s=cur(me&&me.statusCheck),a=cur(me&&me.addrCheck);
    const sOk=d.statusBlob||(s&&s.status!=='rejected'),aOk=d.addrBlob||(a&&a.status!=='rejected')||(me&&me.v.lives);
    if((s&&s.status==='rejected'&&!d.statusBlob)||(a&&a.status==='rejected'&&!d.addrBlob))return 'rej';
    if(sOk&&aOk)return (d.statusBlob||d.addrBlob)?'ready':'wait';return 'todo'}
  if(n===4){if(me&&me.locOk)return 'ok';if(d.loc)return 'ready';return 'opt'}
}
const V_ST={ok:['ok','Done'],wait:['wait','Checking'],rej:['rej','Not approved'],ready:['ready','Ready to send'],todo:['todo','To do'],opt:['todo','Optional']};
function vStep(n,state,title,sub,act){const [cls,lab]=V_ST[state];return `<button type="button" class="vstep" data-a="${act||'vGo'}" data-n="${n===4?5:n}"><span class="n ${cls}">${cls==='ok'?ic('check'):n}</span><span class="tx"><b>${esc(title)}</b><small>${esc(sub)}</small></span><span class="vst ${cls}">${lab}</span></button>`}
function verifyAllReady(d,me){return [1,2,3].every(n=>['ok','wait','ready'].includes(vState(n,d,me)))}
function renderVerifyBody(d,edit){const me=edit?S.me:null,vs=d.vs||0;const place=[d.city,d.country].filter(Boolean).join(', '),roots=[d.os,d.oc].filter(Boolean).join(', ');
  if(vs===0){const code=dial(d.country)||'';
    return `<div class="callout">${ic('shield')}<span>On NeuMarry, roots and city are proven with documents, not just typed in. When a profile says where someone comes from and where they live, it is true.</span></div>
    <div class="callout gold">${ic('heart')}<span>${WHY_LINE}</span></div>
    <div class="vsteps">
     ${vStep(1,vState(1,d,me),'ID and live selfie','Passport or national ID, and a selfie.')}
     ${vStep(2,vState(2,d,me),'Your roots',`A document from where you grew up: ${roots||'your country of origin'}.`)}
     ${vStep(3,vState(3,d,me),'Where you live now',`Your status and your current address in ${d.city||'your city'}.`)}
     ${vStep(4,vState(4,d,me),'Quick location check','One tap. Country and city only, never your exact spot.')}
    </div>
    <p class="hint">${ic('lock')} Documents are deleted within 30 days of the check and never shown to members.</p>
    <div class="vcard"><h4>${ic('phone')}Mobile number <small class="hint" style="font-weight:500">optional</small></h4>
      <p class="hint">For event reminders from your host. Never shown to other members. Code checks by SMS are coming soon.</p>
      <div class="row2" style="grid-template-columns:96px 1fr"><label class="fld"><span>Code</span><input value="${esc(code||'+')}" disabled aria-label="Country code"></label>${inF('phone','Mobile number','tel',d.phone,'inputmode="numeric" maxlength="14" autocomplete="tel-national"')}</div>
    </div>`}
  if(vs===1){const idOk=me&&me.v.id,selfOk=me&&me.v.selfie,idC=me&&me.idCheck,sC=me&&me.selfieCheck;
    const needId=!idOk&&!(idC&&idC.status==='pending'),needSelf=!selfOk&&!(sC&&sC.status==='pending');
    return `<div class="vcard"><h4>${ic('id')}Government ID ${idOk?`<span class="ok">${ic('check')}Verified</span>`:''}</h4>
      <p class="hint">Passport, national ID card, or a residence card with a photo. Only our team sees it.</p>
      ${idOk?'':idC&&!d.idBlob?checkLine(idC,'ID'):''}
      ${needId||(idC&&idC.status==='rejected')?(d.idBlob?`<p class="hint">${ic('check')} ${esc(d.idName)} ready to send</p><span class="btn ghost sm file">${ic('refresh')}Choose another<input type="file" accept="image/*,application/pdf" data-file="id" aria-label="Upload government ID"></span>`:(V2()?`<button class="btn primary sm" data-a="camId">${ic('scan')}Scan with camera</button> `:'')+`<span class="btn ghost sm file">${ic('plus')}${V2()?'Upload a file':'Upload ID'}<input type="file" accept="image/*,application/pdf" data-file="id" aria-label="Upload government ID"></span>`):''}
    </div>
    <div class="vcard"><h4>${ic('camera')}Live selfie ${selfOk?`<span class="ok">${ic('check')}Verified</span>`:''}</h4>
      <p class="hint">Take a selfie now. We match it to your ID and photos so nobody can use someone else's pictures.</p>
      ${selfOk?'':sC&&!d.selfieBlob?checkLine(sC,'Selfie'):''}
      ${needSelf||(sC&&sC.status==='rejected')?(d.selfie?`<img src="${d.selfie}" alt="Your selfie" style="width:72px;height:72px;border-radius:18px;object-fit:cover">${V2()?`<button class="btn ghost sm" data-a="camSelfie">${ic('refresh')}Retake</button>`:`<span class="btn ghost sm file">${ic('refresh')}Retake<input type="file" accept="image/*" capture="user" data-file="selfie" aria-label="Retake selfie"></span>`}`:(V2()?`<button class="btn primary sm" data-a="camSelfie">${ic('camera')}Start live selfie</button>`:`<span class="btn ghost sm file">${ic('camera')}Take selfie<input type="file" accept="image/*" capture="user" data-file="selfie" aria-label="Take selfie"></span>`)):''}
    </div>`}
  if(vs===2){const c=me&&me.rootsCheck,ok=me&&me.v.roots;
    return `<div class="vfact">${ic('globe')}<span class="tx"><small>Your roots on your profile</small><b>${esc(roots)}</b></span></div>
    ${ok&&!d.rootsType?`<p class="hint">${ic('check')} Roots approved</p>`:c&&!d.rootsType?checkLine(c,'Roots document'):''}
    ${ok&&!d.rootsType?'':`<h3 class="section-t">Choose one document</h3>${vOpts('rootsType',rootsDocs(d.oc||''),d.rootsType)}
    ${d.rootsType&&d.rootsType!=='id'?vFile('roots','Upload document',!!d.rootsBlob,d.rootsName):''}
    <p class="hint">The country and the state on the document must match your profile. We never ask for caste or religion documents.</p>`}`}
  if(vs===3){const ok=me&&me.v.lives;
    return `<div class="vfact">${ic('pin')}<span class="tx"><small>Where you live on your profile</small><b>${esc(place)}</b>${d.res?`<small>${esc(d.res)}</small>`:''}</span></div>
    ${ok&&!d.statusType?`<p class="hint">${ic('check')} Status approved</p>`:me&&me.statusCheck&&!d.statusType&&vState(3,d,me)!=='todo'?checkLine(me.statusCheck,'Status document'):''}
    ${ok&&!d.statusType?'':`<h3 class="section-t">Part 1 · Your status in ${esc(d.country||'your country')}</h3>${vOpts('statusType',statusDocs(),d.statusType)}
    ${d.statusType?vFile('status','Upload document',!!d.statusBlob,d.statusName):''}`}`}
  if(vs===4){
    return `<div class="callout">${ic('info')}<span>A passport or PR card shows where you may live. This shows where you live now.</span></div>
    ${me&&me.addrCheck&&!d.addrType&&vState(3,d,me)!=='todo'?checkLine(me.addrCheck,'Address document'):''}
    <h3 class="section-t">Part 2 · One of these</h3>${vOpts('addrType',addrDocs(),d.addrType)}
    ${d.addrType?vFile('address','Upload document',!!d.addrBlob,d.addrName):''}
    <p class="hint">Your name must match, and the city must be ${esc(d.city||'your city')} or within 50 km. We keep only the city, the country and the date, never your street address.</p>`}
  if(vs===5){const done=me&&me.locOk;
    return `<div class="vill">${ic('pin')}</div>
    ${done?`<div class="callout">${ic('check')}<span>Location confirmed${me.locAt?' on '+new Date(me.locAt).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}):''}.</span></div>`:d.loc?`<div class="callout">${ic('check')}<span>Location ready. It is checked when you save.</span></div>`:''}
    <div class="panel"><h3>Why we ask</h3>
     <p>We check your phone’s approximate location once, now, to confirm you live where your profile says.</p>
     <div class="vtrow">${ic('check','ok-ic')}<span class="tx"><b>Only now, only once a year</b><small>Never in the background. Never tracked.</small></span></div>
     <div class="vtrow">${ic('check','ok-ic')}<span class="tx"><b>Only country and city</b><small>Your exact location is not stored or shown to anyone.</small></span></div>
     <div class="vtrow">${ic('check','ok-ic')}<span class="tx"><b>Travelling right now?</b><small>Skip it. Your documents are enough; try again when you are home.</small></span></div>
    </div>`}
  return ''}
function verifyHead(d){const vs=d.vs,n=vs<=2?vs:vs<=4?3:4;
  return `<div class="su-head pad"><button class="iconbtn" data-a="vBack" aria-label="Back to the checks">${ic('back')}</button>
    <div class="t"><small>Verify · ${n} of 4</small><h2>${VS_T[vs]}</h2><div class="progress p4" aria-hidden="true">${[1,2,3,4].map(i=>`<i class="${i<=n?'on':''}"></i>`).join('')}</div></div></div>`}
function verifyFoot(d){const vs=d.vs;
  if(vs===5)return `<div class="su-foot pad"><button class="btn ghost" data-a="vGo" data-n="0">${d.loc||(S.editMode&&S.me&&S.me.locOk)?'Done':'Skip'}</button>${busy==='loc'?`<button class="btn primary" disabled>${spinner('Checking')} Checking</button>`:`<button class="btn primary" data-a="vLocate">Check now</button>`}</div>`;
  return `<div class="su-foot pad"><button class="btn primary" data-a="vGo" data-n="${vs===4?5:vs+1}">Next</button></div>`}
/* Time zone of the phone → country, to catch a wrong "country you live in" (no permission needed). */
const TZ2C={'Asia/Kolkata':'India','Asia/Calcutta':'India','Asia/Karachi':'Pakistan','Asia/Dhaka':'Bangladesh','Asia/Kathmandu':'Nepal','Asia/Katmandu':'Nepal','Asia/Colombo':'Sri Lanka','Asia/Manila':'Philippines',
  'Europe/London':'United Kingdom','Asia/Dubai':'United Arab Emirates','Australia/Sydney':'Australia','Australia/Melbourne':'Australia','Australia/Brisbane':'Australia','Australia/Perth':'Australia','Australia/Adelaide':'Australia','Australia/Hobart':'Australia','Australia/Darwin':'Australia',
  'Asia/Singapore':'Singapore','Pacific/Auckland':'New Zealand','Europe/Berlin':'Germany','Europe/Dublin':'Ireland','Asia/Riyadh':'Saudi Arabia','Asia/Qatar':'Qatar','Asia/Kuwait':'Kuwait','Asia/Bahrain':'Bahrain','Asia/Muscat':'Oman',
  'America/Toronto':'Canada','America/Vancouver':'Canada','America/Edmonton':'Canada','America/Winnipeg':'Canada','America/Halifax':'Canada','America/Regina':'Canada','America/St_Johns':'Canada','America/Moncton':'Canada','America/Montreal':'Canada','America/Whitehorse':'Canada','America/Yellowknife':'Canada',
  'America/New_York':'United States','America/Chicago':'United States','America/Denver':'United States','America/Los_Angeles':'United States','America/Phoenix':'United States','America/Anchorage':'United States','America/Detroit':'United States','Pacific/Honolulu':'United States','America/Boise':'United States','America/Indiana/Indianapolis':'United States'};
function tzCountry(){try{return TZ2C[Intl.DateTimeFormat().resolvedOptions().timeZone]||null}catch(e){return null}}
function tzWarn(d){const t=tzCountry();if(!t||!d.country||t===d.country||d.tzAck===d.country)return '';
  return `<div class="callout gold">${ic('globe')}<span><b>You seem to be in ${esc(t)} right now.</b> Members who choose a country must prove they live there, and the check fails if they don’t.</span></div>
  <div class="vopts"><button type="button" class="vopt" data-a="tzSwitch" data-v="${esc(t)}"><span class="rd" aria-hidden="true"></span><span class="tx"><b>I live in ${esc(t)}</b><small>Change my country to ${esc(t)}</small></span></button>
  <button type="button" class="vopt" data-a="tzKeep"><span class="rd" aria-hidden="true"></span><span class="tx"><b>I live in ${esc(d.country)}, I’m only visiting ${esc(t)}</b><small>Keep ${esc(d.country)}. You prove it with documents in step 5.</small></span></button></div>
  <p class="hint">We use only your phone’s time zone. No permission is needed.</p>`}

/* Fun sign-up (his ok 31 Oct 12:01/12:12): taps instead of typing, one card at a time, benefit on every part. */
const POP_OC=[['India','🇮🇳'],['Nigeria','🇳🇬'],['Philippines','🇵🇭'],['Mexico','🇲🇽'],['Pakistan','🇵🇰'],['China','🇨🇳'],['Lebanon','🇱🇧'],['Brazil','🇧🇷'],['Kenya','🇰🇪'],['Poland','🇵🇱']];
const RELS=['Christian','Muslim','Hindu','Sikh','Buddhist','Jewish','No religion'];
const TRAITS=[['cook','🍳 Loves cooking','love cooking for family and friends'],['travel','✈️ Travel','love to travel'],['family','👨‍👩‍👧 Family first','put family first'],['read','📚 Reader','enjoy a good book'],['fit','🏃 Fitness','keep fit and active'],['music','🎵 Music','love music'],['faith','🙏 Faith matters','faith matters to me'],['creative','🎨 Creative','have a creative side'],['career','💼 Career-focused','work hard on my career'],['pets','🐶 Pet lover','love animals'],['outdoors','🌳 Outdoors','love nature and the outdoors'],['calm','😊 Calm and kind','am calm and kind by nature']];
function chipRow(k,opts,cur){return `<div class="grid-c">${opts.map(([v,l])=>`<button type="button" class="cchip${String(cur)===String(v)?' on':''}" data-a="chipSet" data-k="${k}" data-v="${esc(v)}">${esc(l)}</button>`).join('')}</div>`}
function autoAbout(d){const tr=(d.traits||[]).map(k=>(TRAITS.find(t=>t[0]===k)||[])[2]).filter(Boolean);const job=d.job&&d.job!=='Student'?d.job:'';
  let a=(job?`${job}`:'')+(d.city?`${job?' in ':'Living in '}${d.city}`:'')+(d.oc?`, grew up in ${d.os?d.os+', ':''}${d.oc}.`:'.');
  if(tr.length)a+=` I ${tr.slice(0,-1).join(', ')}${tr.length>1?' and ':''}${tr[tr.length-1]}.`;a+=' Looking for a kind partner for life.';return a.replace(/^\.\s*/,'').trim()}
function journeyScreen(kind){const d=S.draft;const parts=[['👋','You','Name and birthday','',1],['🌍','Your roots','So people from your roots show first','40 sec',2],['🏙️','Your life now','City, work, study, mostly taps','60 sec',3],['💞','What matters to you','9 quick cards that build your match %','90 sec',4],['🛡️','Get verified','Your safety badge, checked by a person','3 min',5]];
  const doneTo=kind==='reward'?4:1;
  return `<div class="su-head pad"><div></div><div class="grow"><p class="eyebrow">${kind==='reward'?'Great progress':'Your NeuMarry journey'}</p><h1>${kind==='reward'?'Your match profile is <em>ready.</em>':'5 short parts. <em>Real people</em> at the end.'}</h1></div></div>
  <div class="scroll" id="su-scroll"><div class="form pad"><p class="hint" style="margin-top:0">${kind==='reward'?'We now know what matters to you. One last part, then you meet only verified people.':'Mostly taps, almost no typing. Stop any time, we save every answer.'}</p>
  <div class="jparts">${parts.map(([ic2,t,sub,tm,n])=>`<div class="jpt${n<=doneTo?' done':''}"><span class="jic">${n<=doneTo?'✓':ic2}</span><span><b>${t}</b><small>${sub}</small></span><span class="jtm">${n<=doneTo?'done':tm}</span></div>`).join('')}</div>
  ${kind==='reward'?`<p class="su-trust">${ic('shield')}<span>After verification you see only verified people, and they see you.</span></p>`:''}
  <button class="btn primary block" data-a="suCont" style="margin-top:16px">${kind==='reward'?'Continue: get verified':'Continue: your roots'}</button>
  ${kind==='reward'?'<p class="hint" style="text-align:center">Do it later. Your answers are saved.</p>':''}</div></div>`}
function univLoad(d){const want=[d.country,d.oc].filter(Boolean).join('|');if(!want||(S.univ&&S.univ.key===want))return;S.univ={key:want,loading:true,list:[]};
  const slug=c=>c.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  Promise.all([d.country,d.oc].filter((c,i,a)=>c&&a.indexOf(c)===i).map(c=>fetch('https://neumarry.com/univ/'+slug(c)+'.json').then(r=>r.ok?r.json():[]).then(l=>l.map(u=>({n:u[0],c:u[1]||'',k:(u[1]?u[1]+', ':'')+c}))).catch(()=>[])))
   .then(ls=>{if(!S.univ||S.univ.key!==want)return;S.univ={key:want,list:[].concat(...ls)};if(S.screen==='signup'&&S.step===3)render()})}
function collegeBox(d){if(!d.eduPick||d.eduPick==='High school'||d.eduPick==='__o')return '';setTimeout(()=>univLoad(d),0);const L=(S.univ&&S.univ.list)||[];const q=(S.univQ||'').toLowerCase();
  const city=(d.city||'').toLowerCase();const sorted=L.filter(u=>!q||u.n.toLowerCase().includes(q)).sort((a,b)=>(b.c&&city&&b.c.toLowerCase().includes(city)?1:0)-(a.c&&city&&a.c.toLowerCase().includes(city)?1:0)).slice(0,40);
  return `<div class="fld" data-f="college"><span>Where did you study?</span><input id="f-univq" data-univq placeholder="Search a college" value="${esc(S.univQ||'')}" autocomplete="off">
  ${S.univ&&S.univ.loading?'<p class="hint">Loading colleges…</p>':L.length?`<div class="ulist">${sorted.map(u=>`<button type="button" class="urow${d.college===u.n?' on':''}" data-a="univSet" data-v="${esc(u.n)}"><span>${esc(u.n)}</span><small>${esc(u.k)}</small></button>`).join('')}</div>`:''}
  <span class="hint">${d.college?`Chosen: <b>${esc(d.college)}</b> · `:''}Not in the list? <button type="button" class="linkbtn" data-a="univType">Type it</button></span>${S.univType?`<input id="f-college" data-bind="college" maxlength="80" placeholder="College or university" value="${esc(d.college||'')}" style="margin-top:6px">`:''}</div>`}
const CELE={2:['Roots done!',d=>d.oc?`People from ${d.oc} will now show first in your matches.`:'People from your roots will now show first.','Your life now','about 60 sec',4,'about 5 min'],
  3:['Your life is in!',d=>d.city?`Matches will show the real distance to you in ${d.city}.`:'Matches will show the real distance to you.','What matters to you','about 90 sec',3,'about 4 min'],
  5:['Verification ready!',()=>'It goes to our team when you finish the last part. A person checks it, usually within a day.','Who you want to meet','about 30 sec',1,'about 30 sec']};
function celeLayer(){const c=CELE[S.cele];if(!c)return '';const d=S.draft;const pct=Math.round(S.cele/6*100);
  const cf=Array.from({length:36},(_,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%9)*0.06}s;background:${['#E8436B','#B8863A','#2D8A61','#FF8FA1','#E9C98D'][i%5]};--r:${(i*47)%360}deg"></i>`).join('');
  return `<div class="cele" role="dialog" aria-live="polite"><div class="cf">${cf}</div><div class="cele-c"><div class="cele-e">🎉</div><h2>${c[0]}</h2><p>${esc(c[1](d))}</p>
  <div class="cele-n"><b>Next: ${c[2]} · ${c[3]}</b><span>${c[4]} short part${c[4]>1?'s':''} left · ${c[5]} in total</span></div>
  <div class="cele-bar"><i style="width:${pct}%"></i></div><button class="btn primary block" data-a="celeGo">Keep going</button><p class="hint" style="text-align:center;margin:8px 0 0">Take a break any time, we save everything.</p></div></div>`}
function renderSignup(){if(S.suInter&&!S.editMode)return journeyScreen(S.suInter);if(!S.editMode)setTimeout(()=>noteStep(S.step),0);
  const d=S.draft,st=S.step,edit=S.editMode;let body='';const lockedId=edit&&S.me&&S.me.v.id;
  if(st===1){
    const maxDob=new Date();maxDob.setFullYear(maxDob.getFullYear()-18);
    const pend=edit&&S.me&&S.me.photoPending&&!d.photoBlob;const rej=edit&&S.me&&S.me.rejectedPhoto&&!d.photoBlob;
    const q3=`<div class="fld" data-f="g"><span>I am</span>${radioChips('g',[{v:'M',l:'A man'},{v:'F',l:'A woman'}],d.g,true,lockedId)}${errOf('g')}</div>
    <div class="fld" data-f="lookingFor"><span>Looking for</span>${radioChips('lookingFor',[{v:'F',l:'A woman'},{v:'M',l:'A man'}],d.lookingFor)}${errOf('lookingFor')}</div>
    ${inF('dob','Date of birth','date',d.dob,`max="${maxDob.toISOString().slice(0,10)}" min="1950-01-01"${lockedId?' disabled':''}`)}`;
    body=edit?`<div class="photo-pick">${avatar(null,'lg',true)}<div style="display:grid;gap:6px"><span class="btn ghost sm file">${ic('camera')}${d.photo?'Change photo':'Add a photo'}<input type="file" accept="image/*" data-file="photo" aria-label="Profile photo"></span><span class="hint">${pend?'Your photo is waiting for a quick check by our team.':rej?`<b style="color:var(--bad)">Your last photo was not approved${S.me.rejectedPhoto.note?': '+esc(S.me.rejectedPhoto.note):''}.</b> Add a clear photo of your face.`:'A clear, recent photo of your face. Hidden from others until you both accept.'}</span></div></div>${errOf('photo')}
    ${inF('name','Full name','text',d.name,`autocomplete="name" maxlength="60"${lockedId?' disabled':''}`,lockedId?'Checked against your ID. Write to us to change it.':'Others see only your first name and last initial until you match.')}
    ${pickF('createdBy','Profile created by','draft')}
    <div class="fld" data-f="g"><span>I am</span>${radioChips('g',[{v:'M',l:'A man'},{v:'F',l:'A woman'}],d.g,true,lockedId)}${errOf('g')}</div>
    <div class="fld" data-f="lookingFor"><span>Looking for</span>${radioChips('lookingFor',[{v:'F',l:'A woman'},{v:'M',l:'A man'}],d.lookingFor)}${errOf('lookingFor')}</div>
    <div class="row2">${inF('dob','Date of birth','date',d.dob,`max="${maxDob.toISOString().slice(0,10)}" min="1950-01-01"${lockedId?' disabled':''}`)}${pickF('h','Height','draft',{ph:'Select'})}</div>
    ${pickF('marital','Marital status','draft')}`
     :`<div class="q3"><p class="q3-h"><b>Let’s find your person</b><small>Just these to start. Photo and checks come later, when you are ready.</small></p>
    ${q3}</div>
    ${inF('name','Full name','text',d.name,`autocomplete="name" maxlength="60"`,'Others see only your first name and last initial until you both say yes.')}`;
  }else if(st===2){
    const hasStates=statesOf(d.oc).length>0;
    body=`<div class="callout">${ic('pin')}<span>Where were you born and brought up? We use this to find people from your roots.</span></div>
    ${edit?'':`<p class="lbl-s">Tap your country, or search all countries</p>${chipRow('oc',POP_OC.map(([c,f])=>[c,f+' '+c]),d.oc)}`}
    ${pickF('oc','Country of origin','draft',{ph:'Choose a country'})}
    ${pickF('os','State / region','draft',{ph:hasStates?'Choose a state or region':'Type your region',disabled:!d.oc})}
    ${!edit&&d.oc&&TONGUE_BY_ORIGIN[d.oc]?`<p class="lbl-s">Language at home</p>${chipRow('t',TONGUE_BY_ORIGIN[d.oc].slice(0,6).map(x=>[x,x]),d.t)}`:''}
    ${pickF('t','Mother tongue','draft',{ph:'Choose a language'})}
    ${edit?'':`<p class="lbl-s">Faith</p>${chipRow('r',RELS.map(x=>[x,x]),d.r)}`}
    ${pickF('r','Religion','draft',{ph:'Choose a religion'})}
    ${pickF('c','Community (optional)','draft',{ph:d.r?'Choose or type your community':'Choose a religion first',disabled:!d.r,showBlank:!!d.r,hint:'Only used when you or a match filter by it.'})}
    <div class="panel" style="padding:4px 16px">${toggle('privacy.showC','Show my community on my profile','Turn off to keep it private. Filters still work.',d.privacy.showC)}</div>`;
  }else if(st===3){
    if(!edit&&!d.country){const t=tzCountry();if(t)d.country=t}
    body=`${edit?'':`<div class="photo-pick">${avatar(null,'lg',true)}<div style="display:grid;gap:6px"><span class="btn ghost sm file">${ic('camera')}${d.photo?'Change photo':'Add a photo'}<input type="file" accept="image/*" data-file="photo" aria-label="Profile photo"></span><span class="hint">You can also add it later. Our team checks every photo.</span></div></div>
    ${pickF('createdBy','Profile created by','draft')}
    <div class="row2">${pickF('h','Height','draft',{ph:'Select'})}${pickF('marital','Marital status','draft')}</div>`}${pickF('country','Country you live in','draft',{ph:'Choose a country'})}
    ${tzWarn(d)}
    <div class="row2">${pickF('state','State / province','draft',{ph:'Choose',disabled:!d.country})}${pickF('city','City','draft',{ph:'Choose or type',disabled:!d.country})}</div>
    ${pickF('res','Residency status','draft',{ph:'Choose',disabled:!d.country})}
    ${pickF('reloc','Open to relocating for the right person?','draft',{ph:'Choose',disabled:!d.country})}
    ${edit?inF('job','Profession','text',d.job,'maxlength="60" placeholder="e.g. Software engineer"'):pickOrOther('job','What do you do?',JOBS,'Type your profession')}
    ${edit?inF('edu','Highest education','text',d.edu,'maxlength="80" placeholder="e.g. MSc, University of Toronto"'):pickOrOther('edu','Highest study',EDUS,'Type your study')}
    ${edit?'':collegeBox(d)}
    ${edit?'':`<div class="fld" data-f="traits"><span>Pick 3 that are so you</span><div class="grid-c">${TRAITS.map(([k,l])=>`<button type="button" class="cchip${(d.traits||[]).includes(k)?' on':''}" data-a="traitTap" data-k="${k}">${l}</button>`).join('')}</div><span class="hint">We write your “About me” from these. You can change it.</span></div>`}
    <label class="${fldCls('about')}" data-f="about"><span>About me</span><textarea id="f-about" data-bind="about" maxlength="600" placeholder="Where you grew up, what you love, what you are looking for.">${esc(d.about)}</textarea><span class="hint">At least 40 characters. Do not add phone numbers or social handles here.</span>${errOf('about')}</label>`;
  }else if(st===4){
    const qi=d.ans.findIndex(x=>x===null||x===undefined);
    body=`${!edit&&qi>=0?`<div class="qcard"><p class="qn">Card ${qi+1} of ${QS.length}</p><h3>${esc(QS[qi].q)}</h3><div class="qans">${QS[qi].o.map((o,j)=>`<button type="button" class="qopt" data-a="qAns" data-i="${qi}" data-j="${j}">${esc(o)}</button>`).join('')}</div>
      <div class="qdots">${QS.map((_,i)=>`<i class="${d.ans[i]!==null&&d.ans[i]!==undefined?'on':i===qi?'cur':''}"></i>`).join('')}</div>${qi>0?`<button type="button" class="linkbtn" data-a="qBack">Back to card ${qi}</button>`:''}</div>`:''}
    ${!edit&&qi>=0?'':`${edit?'':`<p class="su-trust">${ic('check')}<span>All ${QS.length} cards done. Change any answer below.</span></p>`}<p class="hint">There are no right answers. We use these to show how your mindsets match.</p>
    ${QS.map((q,i)=>`<fieldset class="q${S.errors['ans.'+i]?' has-err':''}" data-f="ans.${i}"><legend>${i+1}. ${esc(q.q)}</legend><div class="opts">${q.o.map((o,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}" data-bind="ans.${i}" data-num${d.ans[i]===j?' checked':''}><span>${esc(o)}</span></label>`).join('')}</div>${errOf('ans.'+i)}</fieldset>`).join('')}
    `}
    <h3 class="section-t">Lifestyle</h3>
    ${pickF('diet','Diet','draft',{ph:'Choose'})}
    <div class="row2">${pickF('sm','Smoking','draft')}${pickF('dr','Drinking','draft')}</div>`;
  }else if(st===5){
    body=renderVerifyBody(d,edit);
  }else if(st===6){
    if(!d.prefs)d.prefs=defaultPrefs(d);
    const pr=d.prefs;
    body=`<h3 class="section-t">Privacy</h3>
    <div class="panel" style="padding:4px 16px">${toggle('privacy.blur','Hide my photos','Only people you have both accepted can see them',d.privacy.blur)}</div>
    <h3 class="section-t">Who you are looking for</h3>
    <div class="row2">${pickF('prefs.ageMin','Age from','draft')}${pickF('prefs.ageMax','Age to','draft')}</div>${errOf('prefs.ageMax')}
    <div class="row2">${pickF('prefs.hMin','Height from','draft')}${pickF('prefs.hMax','Height to','draft')}</div>${errOf('prefs.hMax')}
    ${pickF('prefs.liveCountry','Where they live','draft')}
    ${pr.liveCountry===d.country?pickF('prefs.radius','Distance','draft'):''}
    ${pickF('prefs.oc','Their roots: country','draft')}
    ${pr.oc!=='Any'?pickF('prefs.os','Their roots: state / region','draft'):''}
    ${pickF('prefs.religion','Religion','draft')}
    ${pickF('prefs.community','Community','draft',{disabled:pr.religion==='Any'||!commOf(pr.religion).length,hint:pr.religion==='Any'?'Choose a religion to pick a community.':''})}
    ${pr.community!=='Any'?pickF('prefs.alsoComm','Also open to these communities','draft',{hint:'More communities means more matches and more people to meet at events.'}):''}
    ${pickF('prefs.timeline','Ready to marry','draft')}`;
  }
  if(st===5&&d.vs)return verifyHead(d)+`<div class="scroll" id="su-scroll"><div class="form pad">${body}</div></div>`+verifyFoot(d);
  const vReady=st===5&&verifyAllReady(d,edit?S.me:null),vFirst=st===5?([1,2,3].find(n=>!['ok','wait','ready'].includes(vState(n,d,edit?S.me:null)))||1):1;
  const vAny=st===5&&[1,2,3].some(n=>vState(n,d,edit?S.me:null)!=='todo');
  return `${S.cele&&!edit?celeLayer():''}<div class="su-head pad"><button class="iconbtn" data-a="suBack" aria-label="${st===1&&!edit?'Back to start':'Previous step'}">${ic('back')}</button>
    <div class="t"><small>${edit?'Edit profile':'Step '+st+' of 6 · saved'}</small><h2>${STEPS[st-1]}</h2>
    ${edit?`<div class="steps-nav" role="tablist">${STEPS.map((s,i)=>`<button data-a="suJump" data-n="${i+1}" class="${i+1===st?'on':''}" role="tab" aria-selected="${i+1===st}">${i+1}. ${SHORT[i]}</button>`).join('')}</div>`:`<div class="progress" aria-hidden="true">${STEPS.map((_,i)=>`<i class="${i<st?'on':''}"></i>`).join('')}</div>${S.draft&&S.draft.g!=='M'?`<p class="su-offer">${ic('crown')}<span>First 300 verified women in every country get <b>3 months of Gold free</b></span></p>`:''}`}</div></div>
  <div class="scroll" id="su-scroll"><div class="form pad">${edit?'':`<p class="su-trust">${ic('shield')}<span>${SU_TRUST[st-1]}</span></p>`}${body}</div></div>
  <div class="su-foot pad">${edit?`<button class="btn ghost" data-a="suCancel"${busy?' disabled':''}>Discard</button><button class="btn primary" data-a="suSave"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' Saving':'Save changes'}</button>`:
    st===5&&!vReady?`<button class="btn ghost" data-a="suNext">Do this later</button><button class="btn primary" data-a="vGo" data-n="${vFirst}">${vAny?'Next check':'Start'}</button>`:
    `<button class="btn primary" data-a="suNext"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' '+esc(S.saveMsg||'Saving'):st===6?'Finish and see matches':'Continue'}</button>`}</div>`;
}
function validateStep(st,d){
  const e={};
  if(st===1){if(!d.name.trim()||d.name.trim().length<2)e.name='Enter your name';else if(!/^[\p{L}][\p{L} .'-]*$/u.test(d.name.trim()))e.name='Use letters only';
    if(!d.lookingFor&&d.g)d.lookingFor=d.g==='M'?'F':'M';if(!d.g)e.g='Choose one';if(!d.lookingFor)e.lookingFor='Choose one';
    const a=ageFrom(d.dob);if(!d.dob)e.dob='Enter your date of birth';else if(a===null||a<18)e.dob='You must be 18 or older';else if(a>75)e.dob='Check the year';
    if(S.editMode&&!d.h)e.h='Choose your height';}
  if(st===2){if(!d.oc)e.oc='Choose your country of origin';if(!d.os)e.os='Choose your state or region';if(!d.t)e.t='Choose your mother tongue';if(!d.r)e.r='Choose your religion';}
  if(st===3){if(!S.editMode){for(const k of ['job','edu']){const pk=d[k+'Pick'];if(pk&&pk!=='__o')d[k]=pk;else if(pk==='__o'&&d[k]&&(k==='job'?JOBS:EDUS).includes(d[k]))d[k]=''}}if(!S.editMode&&d.college&&d.eduPick&&d.eduPick!=='__o')d.edu=(d.eduPick+', '+d.college).slice(0,80);if(!S.editMode&&!d.h)e.h='Choose your height';if(!d.country)e.country='Choose the country you live in';else{if(statesOf(d.country).length&&!d.state)e.state='Choose one';if(!d.city)e.city='Choose or type';if(!d.res)e.res='Choose your residency status';if(!d.reloc)e.reloc='Choose one'}
    if(!d.job.trim())e.job='Add your profession';if(!d.edu.trim())e.edu='Add your education';
    const ab=d.about.trim();if(ab.length<40)e.about=`Write at least 40 characters (${ab.length} so far)`;else if(/(\+?\d[\d\s-]{8,}\d)|@[a-z0-9_.]{3,}|https?:\/\//i.test(ab))e.about='Remove phone numbers, links and social handles. You can share them after you match.';}
  if(st===4){d.ans.forEach((a,i)=>{if(a===null||a===undefined)e['ans.'+i]='Pick one answer'});if(!d.diet)e.diet='Choose your diet';}
  if(st===5){const ph=(d.phone||'').replace(/\D/g,'');if(ph&&(ph.length<6||ph.length>14))e.phone='Enter a valid mobile number, or leave it empty';}
  if(st===6&&d.prefs){if(+d.prefs.ageMin>+d.prefs.ageMax)e['prefs.ageMax']='“Age to” must be the same or higher than “Age from”';
    if(+d.prefs.hMin>+d.prefs.hMax)e['prefs.hMax']='“Height to” must be the same or taller than “Height from”';}
  return e;
}

/* ---------- App tabs ---------- */
function topbar(title,sub,right){return `<div class="topbar pad"><div class="grow"><h1>${title}</h1>${sub?`<div class="sub">${sub}</div>`:''}</div>${right||''}</div>`}
function scopeText(){const me=S.me,pr=me.prefs;
  const live=pr.liveCountry==='Any'?'anywhere':pr.radius>0&&pr.liveCountry===me.country?`within ${pr.radius} km`:`in ${pr.liveCountry}`;
  const root=pr.oc==='Any'?'from any country':pr.os!=='Any'?`from ${pr.os}`:`from ${pr.oc}`;return {live,root}}
function ensurePicks(){const ids=new Set(PROFILES.map(p=>p.id));if(!S.picks||S.picks.date!==today()||!S.picks.ids.every(id=>ids.has(id))){const list=sortList(matchList().filter(p=>S.interests[p.id]!=='mutual'),'best').slice(0,5).map(p=>p.id);S.picks={date:today(),ids:list,revealed:[]};save()}
  return S.picks.ids.map(byId).filter(p=>p&&baseEligible(p))}
let justRevealed=null;
function verifyBanner(){const me=S.me;if(verified())return '';const all=[1,2,3].map(n=>vState(n,{},me));
  if(me.v.id&&me.v.selfie&&me.v.roots&&!me.v.lives&&me.livesAt)return recheckCall(me);
  const rej=all.includes('rej'),pend=all.every(x=>x==='ok'||x==='wait');
  return `<div class="callout gold">${ic('shield')}<span>${rej?'One of your documents was not approved. <button class="link" data-a="goVerify">Upload again</button>':pend?'Your documents are with our team. You can send interests and chat once they are approved, usually within 24 hours.':'Prove your ID, your roots and your city to send interests and chat. <button class="link" data-a="goVerify">Verify now</button>'}</span></div>`}
/* The city check lasts a year: remind 30 days before it ends, and after. */
function recheckCall(me){if(!me.livesAt)return '';const until=me.livesUntil?Date.parse(me.livesUntil):0;if(!until||until-Date.now()>30*864e5)return '';
  const st=vState(3,{},me);if(st==='wait')return `<div class="callout">${ic('pin')}<span>Your new address document is with our team, usually within 24 hours.</span></div>`;
  return `<div class="callout gold">${ic('pin')}<span><b>Still in ${esc(myPlace())}?</b> Once a year we ask every member to confirm their city, so “Lives in” stays true. It takes a minute. <button class="link" data-a="goVerify" data-n="4">Confirm now</button></span></div>`}
function livesState(me){if(me.v.lives)return ['ok',`Status and current address proven${me.livesAt?' · '+new Date(me.livesAt).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}):''}`];
  const st=vState(3,{},me);if(st==='wait')return ['wait','With our team, usually within 24 hours'];if(st==='rej')return ['no','Not approved. Upload a new one.'];
  if(me.livesAt)return ['no','Confirm your city again: upload a new address document.'];return ['no','Not uploaded yet']}
function renderNotLive(){
  const me=S.me,n=S.fitN||0,who=me.lookingFor==='F'?'women':'men';
  const ph=photoOk()?'ok':me.photoPending?'wait':(me.rejectedPhoto?'rej':'todo');
  const st=[vState(1,{},me),vState(2,{},me),vState(3,{},me),ph],done=st.filter(x=>x==='ok').length,allIn=st.every(x=>x==='ok'||x==='wait');
  return `<div class="topbar pad"><div class="grow"><div class="hello">${greet()}, <em>${esc(me.name.split(' ')[0])}</em></div><div class="sub">Your profile is not live yet</div></div></div>
  <div class="scroll" id="main"><div class="main-inner pad">
   <div class="nearby golive"><span class="gl-h">${ic('shield')}<b>Only fully verified members are live on NeuMarry</b></span>
    <div class="nb-n"><b>${n}</b><span>verified ${who} already fit what you are looking for</span></div>
    <div class="seats"><span>${done} of 4 checks done</span><span class="sb"><i style="width:${done*25}%"></i></span></div>
    <small>Nobody can see your profile, and you cannot see anyone, until all 4 checks are done. This keeps every profile on NeuMarry real.</small></div>
   <div class="vsteps">
    ${vStep(1,st[0],'ID and live selfie','Passport, OCI or national ID, and a selfie','goVerify')}
    ${vStep(2,st[1],'Your roots','A document that shows where you come from','goVerify')}
    ${vStep(3,st[2],'Where you live','Status document, and an address document under 3 months old','goVerify')}
    ${vStep(4,st[3],'Profile photo','A clear photo of you, checked by our team','goPhoto')}</div>
   ${allIn?`<div class="callout">${ic('clock')}<span><b>Everything is with our team.</b> We check within 24 hours. Your profile goes live the moment the last check is approved.</span></div>`:
     `<button class="btn primary block" data-a="${st.slice(0,3).every(x=>x==='ok'||x==='wait')?'goPhoto':'goVerify'}">${ic('shield')}Finish verification</button>`}
   <p class="note">${esc(WHY_LINE)}</p>
  </div></div>`;
}
/* Daily introductions (29 Oct, his ok, feature 5): up to 3 fully verified people a day, best fit first, a new set each day. */
function introsToday(list){const pool=list.filter(p=>!['sent','mutual','declined'].includes(S.interests[p.id]));if(pool.length<=3)return pool;
  const day=Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5),k=(day*3)%pool.length;return [0,1,2].map(i=>pool[(k+i)%pool.length])}
function introBlock(list){const it=introsToday(list);if(!it.length)return '';
  return `<div class="sec-h"><h2>Today’s introductions</h2><small>New ones in <span data-until="${midnight()}">${fmtLeft(midnight()-Date.now())}</span></small></div>
  <div class="nm-intro" onscroll="var d=this.nextElementSibling;if(d){var i=Math.round(this.scrollLeft/this.clientWidth);[].forEach.call(d.children,function(e,j){e.classList.toggle('on',j===i)})}">${it.map(p=>`<div class="nm-slide">${card(p)}</div>`).join('')}</div>
  ${it.length>1?`<div class="nm-dots" aria-hidden="true">${it.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>`:''}`}
function renderMatches(){
  if(!isLive())return renderNotLive();
  const me=S.me,pr=me.prefs,list=sortList(matchList(),S.sort);
  const t=scopeText(),n=activeFilterCount();
  const recv=PROFILES.filter(p=>baseEligible(p)&&S.interests[p.id]==='received');
  const picks=list.length>=6?ensurePicks():[];
  const hi=list.filter(p=>compat(p).total>=80).length,who=me.lookingFor==='F'?'women':'men';
  const passedN=S.passed.filter(id=>{const p=byId(id);return p&&baseEligible(p)&&p.fits&&passFilters(p)}).length;
  const tile=p=>{const rev=S.picks.revealed.includes(p.id);const c=compat(p).total;
    return rev?`<button class="tp${justRevealed===p.id?' flip':''}" data-a="open" data-id="${p.id}" aria-label="Open ${esc(shown(p))}'s profile">${avatar(p,'tile')}<span class="tpn">${esc(shown(p))}, ${p.age}<small>${c}% match · ${esc(p.cityName)}</small></span></button>`
      :`<button class="tp mystery" data-a="reveal" data-id="${p.id}" aria-label="Reveal today's pick"><span class="mq">${ic(!isGold()?'lock':'sparkle')}<b>${!isGold()?'Gold pick':'Tap to reveal'}</b><span>${c}% match</span></span></button>`};
  return `<div class="topbar pad"><div class="grow"><div class="hello">${greet()}, <em>${esc(me.name.split(' ')[0])}</em></div><div class="sub">${list.length} ${list.length===1?'person':'people'} ${esc(t.root)}, ${esc(t.live)}</div></div><button class="iconbtn soft" data-a="filters" aria-label="Filters and preferences">${ic('filter')}${n?`<span class="count-dot">${n}</span>`:''}</button></div>
  <div class="scroll" id="main"><div class="main-inner pad">
    ${verifyBanner()}
    ${me.privacy.vis==='hidden'?`<div class="callout">${ic('eye')}<span>Your profile is paused, so nobody new can find you. <button class="link" data-a="unpause">Show my profile again</button></span></div>`:''}
    ${!isGold()?`<div class="nearby"><div class="nb-n"><b>${list.length}</b><span>${who} fit what you are looking for, ${esc(t.live)}</span></div><div class="nb-s"><span>${ic('sparkle')}<b>${hi}</b> are 80%+ matches</span><span>${ic('heart')}<b>${recv.length}</b> already like you</span></div><button class="btn gold block" data-a="upgrade" data-r="nearby">${ic('crown')}See who they are</button><small>Free shows how many people fit you and your match % with each. Names, photos and everything else come with Gold.</small></div>`:''}
    ${recv.length?`<button class="likes" data-a="goLikes"><span class="stack">${recv.slice(0,3).map(p=>avatar(p,'sm')).join('')}</span><span class="tx"><b>${recv.length} ${recv.length===1?'person likes':'people like'} you</b><span>See who, and say yes to start chatting</span></span>${ic('heart')}</button>`:''}
    ${introBlock(list)}
    ${list.length>3&&!S.showAllM?`<button class="btn ghost block" data-a="showAllM">See all ${list.length} matches</button>`:''}
    ${!list.length||S.showAllM?`<div class="sec-h"><h2>All matches</h2></div>
    <div class="listhead"><div class="sorts" role="group" aria-label="Sort">${[['best','Best match'],['near','Nearest'],['new','Newest']].map(([k,l])=>`<button data-a="sort" data-k="${k}" class="${S.sort===k?'on':''}" aria-pressed="${S.sort===k}">${l}</button>`).join('')}</div></div>
    ${list.length?list.map(card).join(''):`<div class="empty"><span class="eic">${ic('search')}</span><h3>${PROFILES.some(p=>p.fits)?'No one fits every filter yet':'New members are joining'}</h3><p>${PROFILES.some(p=>p.fits)?'Try widening one preference.':'NeuMarry is just opening. Verified members appear here as they join. Widening a preference shows more people.'}</p><div class="btns">
      ${pr.radius>0?`<button class="btn sm ghost" data-a="widen" data-k="radius">Anywhere in ${esc(pr.liveCountry)}</button>`:''}
      ${pr.liveCountry!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="anywhere">Any country</button>`:''}
      ${pr.community!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="community">Any community</button>`:''}
      ${pr.os!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="os">Anyone from ${esc(pr.oc)}</button>`:''}
      <button class="btn sm ghost" data-a="filters">Open filters</button></div></div>`}
    `:''}
    ${passedN?`<button class="link" data-a="togglePassed" style="justify-self:start">${S.showPassed?'Hide':'Show'} ${passedN} passed ${passedN===1?'profile':'profiles'}</button>`:''}
  </div></div>`;
}
function evCard(e){
  const f=fmtDay(e.date,e.tz),rv=e.my,st=evStat(e),[wc,wl,mc,ml]=e.seats;const left=S.me.g==='F'?wl:ml,cap=S.me.g==='F'?wc:mc;
  return `<button class="evcard" data-a="openEvent" data-id="${e.id}" aria-label="${esc(e.title)}, ${esc(f.long)}">
   <span class="evart" style="display:block">${evArt(e)}<span class="evd"><span>${f.mon}</span><b>${f.day}</b><span>${f.wd}</span></span><span class="evk">${rv?`<span class="booked">${ic('check')}${rv.status==='paid'?'Booked':rv.wait?'Waiting list':'Reserved'}</span>`:''}<span>${ic(e.parents?'users':'user')}${e.parents?'Parents welcome':'Members only'}</span></span></span>
   <span class="evb">
    <span class="evt serif" style="font-size:21px;display:block">${esc(e.title)}</span>
    <span class="aud${forMe(e)?'':' off'}">${ic(forMe(e)?'globe':'lock')}${esc(audLabel(e))}</span>
    <span class="meta"><span>${ic('cal')}${esc(f.long)} · ${e.time}</span><span>${ic('pin')}${esc(e.area)}</span><span>${ic('users')}Ages ${e.age}</span></span>
    ${st.confirmed?`<span class="seats"><span class="cstat ok">${ic('check')}Confirmed · ${left<=6?`only ${left} seats left for ${S.me.g==='F'?'women':'men'}`:`${left} seats left for ${S.me.g==='F'?'women':'men'}`}</span><span class="sb"><i style="width:${Math.round((cap-left)/cap*100)}%"></i></span></span>`:
    `<span class="seats"><span class="cstat">${evMine(e).seatsLeft?`${st.n} of ${e.need} reserved · confirms when ${st.left} more reserve by ${esc(fmtDay(st.deadline,e.tz).long)}`:evMine(e).waitLeft?`Seats for ${evMine(e).who} are full · join the waiting list`:`Full for ${evMine(e).who}`}</span><span class="sb"><i style="width:${Math.min(100,Math.round(st.n/e.need*100))}%"></i></span></span>`}
    <span class="nm-seats"><span>Women ${wc-wl} of ${wc}<span class="b"><i style="width:${wc?Math.round((wc-wl)/wc*100):0}%"></i></span></span><span>Men ${mc-ml} of ${mc}<span class="b m"><i style="width:${mc?Math.round((mc-ml)/mc*100):0}%"></i></span></span></span>
    <span class="evfoot"><span class="price-l"><b>${money(e.priceM,e.cur)}</b> per member, dinner included${e.parents&&e.priceP?` · parents ${money(e.priceP,e.cur)}`:''}</span>${rv&&rv.status==='pay_due'?`<span class="pill gold">Confirmed</span>`:rv&&rv.status==='hold_due'?`<span class="pill gold">Pay ${money(e.hold,e.cur)} to hold</span>`:rv&&rv.wait?`<span class="pill">On the waiting list</span>`:rv?`<span class="pill good">${rv.holdPaid?'Reserved':'Reserved free'}</span>`:!evMine(e).seatsLeft&&evMine(e).waitLeft?`<span class="pill gold">Join waiting list</span>`:!evMine(e).seatsLeft?`<span class="pill">Full</span>`:holdOn(e)?`<span class="pill gold">Reserve · ${money(e.hold,e.cur)} hold</span>`:`<span class="pill gold">Reserve free</span>`}</span>
   </span></button>`;
}
/* Events world-wide (his ok 29 Oct 22:50): your city vote, online mixer for your country, cities opening soon. */
const WCITIES=[['Toronto','Canada'],['Vancouver','Canada'],['London','United Kingdom'],['Dubai','United Arab Emirates'],['Singapore','Singapore'],['Sydney','Australia'],['Melbourne','Australia'],['New York / NJ','United States'],['Bay Area','United States'],['Auckland','New Zealand']];
function seatBar(w,m){const pw=Math.min(100,w/30*100),pm=Math.min(100,m/30*100);
  return `<div class="cvbar"><span><i style="width:${pw}%"></i></span><small>${w} of 30 women</small></div><div class="cvbar men"><span><i style="width:${pm}%"></i></span><small>${m} of 30 men</small></div>`}
function worldEvents(){const b=S.board;if(!b||!b.city)return '';const mine=b.mine||[];const inC=mine.includes('city'),inO=mine.includes('online');
  const c=b.city,o=b.online||{women:0,men:0};const tot=c.women+c.men;const top=b.top||[];
  const cnt=(n)=>{const t=top.find(x=>x.city.toLowerCase()===n.toLowerCase().split(' /')[0].toLowerCase());return t?t.women+t.men:0};
  const live=n=>events().some(e=>e.city&&e.city.toLowerCase()===n.toLowerCase());
  const rdy=n=>top.some(x=>x.ready&&x.city.toLowerCase()===n.toLowerCase().split(' /')[0].toLowerCase());
  return `<div class="sec-h"><h2>Events around the world</h2></div>
  <div class="panel cv"><div class="cv-h">${ic('pin')}<span><b>${esc(c.city)}</b><small>${c.ready?'Ready: 30 women + 30 men asked for events here':tot+' interested · opens at 60 (30 women + 30 men)'}</small></span></div>${c.ready?`<p class="hint cvok">${ic('check')}We are planning the first Family Mixer in ${esc(c.city)}. Everyone who asked gets an email with the date.${c.currency&&c.currency!=='CAD'?` Tickets in ${esc(c.currency)}.`:''}</p>`:seatBar(c.women,c.men)}
   <button class="btn ${inC?'ghost':'primary'} sm" data-a="cityVote" data-k="city" data-on="${inC?0:1}">${inC?ic('check')+'You asked for events here':'Bring events to '+esc(c.city)}</button></div>
  <div class="panel cv"><div class="cv-h">${ic('users')}<span><b>Online Family Mixer · ${esc(o.country||c.country)}</b><small>${S.online&&S.online.starts_at?esc(new Date(S.online.starts_at).toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}))+' (your time) · Free · Google Meet':'Free video evening on Google Meet for verified members in your country. We email the date.'}</small></span></div>${S.online&&S.online.link?`<a class="btn primary sm" href="${esc(S.online.link)}" target="_blank" rel="noopener">${ic('users')}Join the video call now</a>`:S.online&&S.online.starts_at&&inO?`<p class="hint">The video link opens here 1 hour before the start, only for verified members on the list.</p>`:seatBar(o.women,o.men)}
   <button class="btn ${inO?'ghost':'primary'} sm" data-a="cityVote" data-k="online" data-on="${inO?0:1}">${inO?ic('check')+'You are on the list':'Join the online mixer list'}</button></div>
  ${(S.partnersNear||[]).length?`<div class="sec-h"><h2>Our partners near you</h2></div><div class="cvchips">${S.partnersNear.map(x=>`<span class="cvchip pt"><b>${esc(x.name)}</b><small>${x.kind==='bureau'?'Matrimonial bureau':x.kind==='restaurant'?'Partner restaurant':'Event host'} · ${esc(x.city)}</small></span>`).join('')}</div>`:''}
  <div class="cvchips">${WCITIES.map(([n,co])=>`<span class="cvchip${live(n)?' on':''}"><b>${esc(n)}</b><small>${live(n)?'Events open':rdy(n)?'Ready · date soon':cnt(n)?cnt(n)+' interested':'Opening soon'}</small></span>`).join('')}</div>`}
/* Top strip (his 30 Oct: "dusri countries wala dikh nahi raha"): the world at a glance, without scrolling. Full cards stay below. */
function worldStrip(){const b=S.board;if(!b||!b.city)return '';const c=b.city,top=b.top||[],mine=b.mine||[],inC=mine.includes('city');
  const cnt=n=>{const t=top.find(x=>x.city.toLowerCase()===n.toLowerCase().split(' /')[0].toLowerCase());return t?t:null};
  const live=n=>events().some(e=>e.city&&e.city.toLowerCase()===n.toLowerCase());
  return `<div class="wstrip"><div class="ws-h"><b>${ic('pin')}Events around the world</b><button class="ws-me${inC?' on':''}" data-a="cityVote" data-k="city" data-on="${inC?0:1}">${esc(c.city)} · ${c.ready?'Ready':(c.women+c.men)+' of 60'}${inC?' '+ic('check'):''}</button></div>
  <div class="ws-row">${WCITIES.map(([n])=>{const t=cnt(n);return `<span class="ws-c${live(n)?' on':t&&t.ready?' rd':''}"><b>${esc(n)}</b><small>${live(n)?'Events open':t&&t.ready?'Ready':t?(t.women+t.men)+' interested':'Opening soon'}</small></span>`}).join('')}</div></div>`}
function renderEvents(){
  const me0=S.me||{};const near=e=>e.city&&me0.city&&e.city.toLowerCase()===String(me0.city).toLowerCase()?0:e.country===me0.country?1:2;
  const evs=events().slice().sort((a,b)=>near(a)-near(b)||a.date-b.date);const mine=evs.filter(e=>e.my);
  return topbar('Events','Hosted evenings with dinner included')+
  `<div class="scroll" id="main"><div class="main-inner pad">
   ${mine.length?`<div class="sec-h"><h2>Your reservations</h2></div>${mine.map(e=>{const r=e.my,f=fmtDay(e.date,e.tz);return `<button class="tkrow" data-a="openEvent" data-id="${e.id}"><span class="tki" style="${r.status==='pay_due'?'':'background:var(--gold-soft);color:var(--gold)'}">${ic(r.status==='pay_due'?'ticket':'cal')}</span><span class="tx"><b>${esc(e.title)}</b><small>${r.status==='paid'?'Paid · your QR ticket opens on the event day':r.status==='pay_due'?`Confirmed · pay${r.due?' by '+esc(fmtDay(r.due,e.tz).long):''} to keep your seat`:r.status==='hold_due'?`Pay the ${money(e.hold,e.cur)} seat hold to keep your seat`:`${esc(f.long)} · waiting for ${evStat(e).left} more to confirm`}</small></span>${ic('back','flipx')}</button>`}).join('')}`:''}
   ${worldStrip()}
   ${evs.length?whyEvent():''}
   <div class="callout">${ic('users')}<span>${evs.some(holdOn)?`Reserve with a ${money(evs.find(holdOn).hold,evs.find(holdOn).cur)} seat hold. An event is confirmed when every seat and the waiting list are full; then you pay the rest in the app. Dinner is included, and nothing is paid at the restaurant. Not full in time? We move it to a new date and email you; if the new date does not suit you, your hold is refunded.`:'Reserve free. An event is confirmed when every seat and the waiting list are full; then you pay in the app. Dinner is included, and nothing is paid at the restaurant. Not full in time? We move it to a new date and email you. Nobody pays before then.'}</span></div>
   <div class="sec-h"><h2>Upcoming events</h2></div>
   ${evs.length>1?`<div class="sorts evf" role="group" aria-label="Show events">${[['for','For you'],['all','Every event']].map(([k,l])=>`<button data-a="evFilter" data-k="${k}" class="${(S.evFilter||'for')===k?'on':''}" aria-pressed="${(S.evFilter||'for')===k}">${l}</button>`).join('')}</div>`:''}
   ${(()=>{const fk=evs.length>1?(S.evFilter||'for'):'all';const shownEv=evs.filter(e=>fk==='all'?true:forMe(e));
     return shownEv.length?shownEv.map(evCard).join(''):`<div class="empty"><span class="eic">${ic('cal')}</span><h3>${evs.length?'No events for your community yet':'New events are coming'}</h3><p>${evs.length?'Hosts add community events as more members join.':'The first Family Mixers are being planned. You will see them here.'}</p>${evs.length?`<div class="btns"><button class="btn sm ghost" data-a="evFilter" data-k="all">Every event</button></div>`:''}</div>`})()}
   ${worldEvents()}
   <p class="note">Every event: separate tables in one shared room, fully verified guests (ID, roots and city), a NeuMarry host, QR check-in at the door.</p>
   <div class="panel wwu"><div class="wwu-h"><h3>Bring Family Mixers to your city</h3></div>
    <button class="rowi" data-a="hostAsk">${ic('users')}<span class="tx"><b>${S.hostSent?'Host application received':'Host events'}</b><span>${S.hostSent?'We reply within 3 working days':'CA$100 for every event · training included'}</span></span>${ic('chev','rchev')}</button>
    <button class="rowi" data-a="restaurantAsk">${ic('dish')}<span class="tx"><b>${S.restSent?'Restaurant request received':'Own a restaurant?'}</b><span>${S.restSent?'Our team will call you':'We bring 30 to 60 paying guests for dinner'}</span></span>${ic('chev','rchev')}</button></div>
  </div></div>`;
}
function renderConnections(){
  const segs=[['chats','Chats'],['received','Likes you'],['sent','Sent'],['short','Saved']];
  const pick=k=>PROFILES.filter(p=>baseEligible(p)&&(k==='short'?S.shortlist.includes(p.id):S.interests[p.id]===k));
  const chatIds=Object.keys(S.chats).filter(id=>{const p=byId(id);return p&&S.interests[id]==='mutual'&&!S.blocked.includes(id)&&!S.reported.includes(id)});
  const last=id=>{const m=S.chats[id];return m[m.length-1]};chatIds.sort((a,b)=>last(b).ts-last(a).ts);
  const cnt={chats:chatIds.reduce((a,id)=>a+(S.unread[id]||0),0),received:pick('received').length,sent:pick('sent').length,short:pick('short').length};
  let body='';
  if(S.seg==='chats'){
    body=`<div class="callout">${ic('shield')}<span>Your number stays hidden. Never send money to someone you have not met, and meet first in a public place.</span></div>
    ${chatIds.length?`<div class="rows">${chatIds.map(id=>{const p=byId(id),l=last(id),u=S.unread[id]||0;const lk=!canChat(id);return `<button class="rowi" data-a="openchat" data-id="${id}">${avatar(p,'sm')}<span class="tx"><b>${esc(shown(p))} ${vtick(p)}</b><span>${lk&&l.f==='them'?`${esc(p.first||'They')} sent you a message`:`${l.f==='me'?'You: ':''}<span class="notr">${esc(l.x)}</span>`}</span></span><span class="end">${lk?`<span class="pill gold">${ic('lock')}Gold</span>`:u?`<span class="unread" aria-label="${u} unread">${u}</span>`:timeStr(l.ts)}</span></button>`}).join('')}</div>`:
    `<div class="empty"><span class="eic">${ic('chat')}</span><h3>No chats yet</h3><p>Chat opens when you and someone both say yes.</p><button class="btn sm primary" data-a="tab" data-k="matches">See matches</button></div>`}`;
  }else{
    const list=pick(S.seg);
    const empty={received:['No likes yet','When someone sends you an interest, it shows up here.'],sent:['You have not sent any interests','Send an interest from Matches. If they accept, photos unlock and chat opens.'],short:['Nothing saved yet','Tap the star on any profile to save it for later.']}[S.seg];
    const end=p=>{const st=S.interests[p.id];if(S.seg==='sent')return `<span class="pill">Waiting</span>`;return st==='mutual'?`<span class="pill good">Matched</span>`:st==='sent'?`<span class="pill">Sent</span>`:`<span class="pill">${compat(p).total}%</span>`};
    body=S.seg==='received'&&list.length?list.map(card).join(''):list.length?`<div class="rows">${list.map(p=>rowItem(p,end(p))).join('')}</div>`:`<div class="empty"><span class="eic">${ic('heart')}</span><h3>${empty[0]}</h3><p>${empty[1]}</p><button class="btn sm primary" data-a="tab" data-k="matches">See matches</button></div>`;
  }
  return topbar('Chats','Your matches, likes and saved profiles')+
  `<div class="scroll" id="main"><div class="main-inner pad"><div class="seg" role="tablist">${segs.map(([k,l])=>`<button role="tab" data-a="seg" data-k="${k}" class="${S.seg===k?'on':''}" aria-selected="${S.seg===k}">${l}${cnt[k]?`<span class="n">${cnt[k]}</span>`:''}</button>`).join('')}</div>${body}</div></div>`;
}
function completeness(me){const checks=[me.photoPaths.length>0,!!me.about&&me.about.length>=80,me.v.id,me.v.selfie,!!me.edu,!!me.job,!!me.phone];return Math.round(checks.filter(Boolean).length/checks.length*100)}
function checkState(c,ok){if(ok)return ['ok','Approved'];if(!c)return ['no','Not uploaded yet'];if(c.status==='pending')return ['wait','With our team, usually within 24 hours'];if(c.status==='rejected')return ['no','Not approved'+(c.note?': '+c.note:'')+'. Upload a new one.'];return ['ok','Approved']}
function renderMe(){
  const me=S.me,L=price(),pct=completeness(me),parts=me.name.trim().split(/\s+/);
  const vr=(state,t,s,n)=>`<div class="vrow">${state==='ok'?ic('check','ok-ic'):ic('info','no-ic')}<span class="tx"><b>${esc(t)}</b><small>${esc(s)}</small></span>${state==='no'?`<button class="btn sm primary" data-a="goVerify" data-n="${n||1}">Upload</button>`:''}</div>`;
  const idS=checkState(me.idCheck,me.v.id),sS=checkState(me.selfieCheck,me.v.selfie),rS=checkState(me.rootsCheck,me.v.roots),lS=livesState(me);
  const dt=x=>x?new Date(x).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'}):'';
  const goldLine=me.plan==='free'?'':me.goldSource==='admin'?`Gold is on for free during the test, until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'})}.`:me.goldSource==='women_offer'?`Your free Gold (welcome offer for women) runs until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`:me.goldSource==='google'?`Gold through Google Play, paid until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`:`Gold is active until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`;
  return topbar('My profile',me.plan==='gold'?'Gold member':me.plan==='concierge'?'Concierge member':'Free member',`<button class="iconbtn soft" data-a="previewMe" aria-label="See my profile as others do">${ic('eye')}</button>`)+
  `<div class="scroll" id="main"><div class="main-inner pad">
   ${me.isAdmin?`<button class="likes" data-a="openAdmin"><span class="pi" style="width:40px;height:40px;border-radius:50%;background:var(--rose-soft);color:var(--rose);display:grid;place-items:center">${ic('shield')}</span><span class="tx"><b>Team: review queue</b><span>Approve photos, IDs and selfies, and handle reports</span></span>${ic('back','flipx')}</button>`:''}
   <div class="panel"><div class="me-card">${avatar(null,'md',true)}<div class="tx"><h3>${esc(parts[0])}${parts[1]?' '+esc(parts[1][0])+'.':''}</h3><p>${me.age} · ${ftIn(me.h)} · ${esc(me.job)}</p><p>${esc(me.os)}, ${esc(me.oc)} → ${esc(myPlace())}</p></div></div>
    ${me.photoPending?`<p class="hint">${ic('info')} Your photo is waiting for a quick check by our team.</p>`:''}
    <div class="complete"><div class="hint">Profile ${pct}% complete${pct<100?' · a complete profile builds more trust':''}</div><div class="bar"><i style="width:${pct}%"></i></div></div>
    <button class="btn ghost" data-a="edit">Edit profile</button></div>
   <button class="likes nm-bio" data-a="shareBio"><span class="pi">${ic('send')}</span><span class="tx"><b>Family biodata</b><span>Send a private 7-day link to your family. They can answer 👍 or 🤔. No phone, email or photos.</span></span>${ic('back','flipx')}</button>${(S.bioReacts||[]).length?`<div class="fam-r"><b>${ic('users')}Your family said</b>${S.bioReacts.slice(0,5).map(r=>`<span>${r.reaction==='good'?'👍 Looks good':'🤔 Let’s talk'}${r.who?` · ${esc(r.who)}`:''}</span>`).join('')}</div>`:''}${S.bioUntil?`<p class="hint">Your link works until ${esc(new Date(S.bioUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))}. <button class="link" data-a="stopBio">Stop link</button></p>`:''}
   ${recheckCall(me)}<div class="panel"><h3>Verification</h3><div>${vr(idS[0],'Government ID',idS[1],1)}${vr(sS[0],'Live selfie',sS[1],1)}${vr(rS[0],`Roots: ${me.os}, ${me.oc}`,rS[0]==='ok'&&me.rootsAt?`Proven with a document · ${dt(me.rootsAt)}`:rS[1],2)}${vr(lS[0],`Lives in: ${myPlace()}, ${me.country}`,lS[1],3)}${me.locOk?vr('ok','Location check',`Confirmed · ${dt(me.locAt)}`):''}<div class="vrow">${ic('info','no-ic')}<span class="tx"><b>Phone number</b><small>${me.phone?esc(me.phone)+' · code checks by SMS are coming soon':'Optional · add it in Edit profile'}</small></span></div></div></div>
   ${workCard()}
   <div class="panel"><h3>Privacy</h3><div>
    ${toggle('privacy.blur','Hide my photos','Only people you have both accepted can see them',me.privacy.blur,'me')}
    ${toggle('privacy.showC','Show my community','Filters still work if this is off',me.privacy.showC,'me')}
    ${toggle('privacy.incognito','Browse privately','Others do not see that you viewed them · Gold',me.privacy.incognito,'me')}
    ${toggle('paused','Pause my profile','Hide from everyone while you talk to someone',me.privacy.vis==='hidden','me')}
   </div></div>
   <div class="panel"><h3>Your plan</h3>
    ${me.plan==='free'?`<p class="sub">Free shows how many people fit you and your match % with each, and you can chat when a Gold member matches with you. Names, photos, interests, chat, daily picks and event guest lists are part of Gold.</p>${me.g==='F'&&!me.womenOffer&&(me.womenLeft==null||me.womenLeft>0)?`<div class="callout gold">${ic('gift')}<span>Welcome offer: the first 300 verified women get 3 months of Gold free. It switches on when your ID is approved.</span></div>`:''}<button class="btn gold" data-a="upgrade">${ic('crown')}See Gold, from ${planOpts()[2][3]}/month</button>`:
    `<p class="sub">${esc(goldLine)}</p>${me.goldSource==='admin'?`<button class="btn ghost" data-a="endBeta">Switch back to Free to try it</button>`:me.goldSource==='google'?MANAGE_SUB():`<p class="hint">Manage or cancel Gold in your Google Play account.</p>`}`}</div>
   ${isGold()&&me.v.id?`<div class="panel"><h3>Invite people you trust</h3><p class="sub">Friends who join with your code get 10% off their first Gold purchase and an “Invited by” badge. You get a “Trusted member” badge and 10% off your next renewal, up to 6 times a year.</p>
    <div class="vrow">${ic('gift')}<span class="tx"><b>Your invite code</b><small><span class="code" id="inv-code">${S.invite?esc(S.invite):'…'}</span></small></span>${S.invite?`<button class="iconbtn" data-a="copyCode" data-k="${esc(S.invite)}" aria-label="Copy invite code">${ic('copy')}</button>`:''}</div>
    ${S.invite?`<button class="btn ghost" data-a="shareInvite">${ic('send')}Share invite</button>`:''}</div>`:''}
   <div class="panel"><h3>Safety centre</h3><ul class="hint" style="margin:0;padding-left:18px;display:grid;gap:5px">
    <li>Report anyone who asks for money, gifts or visa help.</li><li>Keep chats in the app until you trust the person.</li><li>Do a video call before meeting, and meet in public.</li><li>Every report is reviewed by a person within 24 hours.</li></ul></div>
   <div class="panel"><h3>Help and legal</h3>
    <button class="rowi" data-a="lang">${ic('globe')}<span class="tx"><b>Language</b><span class="notr">${RM_I18N.lang==='fr'?'Français · switch to English':'English · passer au français'}</span></span></button>
    <button class="rowi" data-a="helpOpen">${ic('mail')}<span class="tx"><b>Help and contact</b><span>Questions, complaints and our Grievance Officer</span></span></button>
    <button class="rowi" data-a="legal" data-k="terms">${ic('info')}<span class="tx"><b>Terms of Service</b><span>What you agree to, and what we are responsible for</span></span></button>
    <button class="rowi" data-a="legal" data-k="privacy">${ic('lock')}<span class="tx"><b>Privacy Policy</b><span>What we collect, why, and your rights</span></span></button>
    <button class="rowi" data-a="deleteAsk">${ic('trash')}<span class="tx"><b>Delete my account</b><span>Permanently remove your profile and data</span></span></button></div>
   <button class="btn ghost block" data-a="logout">${ic('back')}Log out</button>
   <p class="note">NeuMarry ${esc(CFG.version)} · test version · ${esc(API.email())}</p>
  </div></div>`;
}

/* ---------- Overlay views ---------- */
function trustRows(p){const my=x=>x?new Date(x).toLocaleDateString(RM_I18N.locale,{month:'short',year:'numeric'}):'';
  const row=(ok,t,sub)=>`<div class="vtrow">${ok?ic('check','ok-ic'):ic('info','no-ic')}<span class="tx"><b>${esc(t)}</b><small>${esc(sub)}</small></span></div>`;
  return row(p.v.id&&p.v.selfie,'ID and live selfie',p.v.id&&p.v.selfie?'Approved by our team':'Not verified yet')
   +row(p.v.roots,`Roots: ${p.os}, ${p.oc}`,p.v.roots?`Proven with a document${p.rootsAt?' · '+my(p.rootsAt):''}`:'Not proven yet')
   +row(p.v.lives,`Lives in: ${p.cityName}, ${p.country}`,p.v.lives?`Status and current address proven${p.livesAt?' · '+my(p.livesAt):''}`:'Not proven yet')
   +(p.locOk?row(true,'Location check',`Confirmed${p.locAt?' · '+my(p.locAt):''}`):'')}
function renderProfileView(id,isMe){
  let p;
  if(isMe){const me=S.me,parts=me.name.trim().split(/\s+/);p=Object.assign({},me,{id:'me',first:parts[0],last:parts.slice(1).join(' '),cityName:me.city||me.state,v:Object.assign({work:false},me.v),photos:me.photo?[me.photo]:[],photoCount:me.photoPaths.length})}
  else p=byId(id);
  if(!p)return '';
  const c=isMe?null:compat(p);const showC=isMe?p.privacy.showC:true;
  const kv=[['Age',p.age],['Height',ftIn(p.h)],['Lives in',`${p.cityName}, ${p.country}`],['Roots',`${p.os}, ${p.oc}`],['Mother tongue',p.t],['Religion',p.r+(showC&&p.c?` · ${p.c}`:'')],['Residency',p.res],['Marital status',p.marital],['Profession',p.job],['Education',p.edu],['Diet',p.diet],['Smoke · Drink',`${p.sm} · ${p.dr}`],['Profile created by',p.createdBy]];
  const nm=isMe?`${p.first}${p.last?' '+p.last[0]+'.':''}`:shown(p);
  const valsHtml=isMe?'':QS.map((q,i)=>{const d=Math.abs(S.me.ans[i]-p.ans[i]);const cls=d===0?'s':d===1?'c':'f';return `<div class="val"><span class="mk ${cls}" aria-label="${d===0?'Same':d===1?'Close':'Different'}">${d===0?'✓':d===1?'≈':'–'}</span><div><div class="q2">${esc(q.k)}</div><div class="a"><i>You</i><span>${esc(q.o[S.me.ans[i]])}</span><i>${p.g==='F'?'Her':'Him'}</i><span>${esc(q.o[p.ans[i]])}</span></div></div></div>`}).join('');
  const more=!isMe&&p.photos&&p.photos.length>1?`<div class="panel"><h3>Photos</h3><div class="pgrid">${p.photos.slice(1).map(u=>`<span class="ptile"><span class="av av-tile"><img src="${esc(u)}" alt="" loading="lazy"></span></span>`).join('')}</div></div>`:'';
  return `<div class="view" role="dialog" aria-label="${esc(nm)} profile">
   <div class="scroll" id="view-scroll">
    <div class="pv-top">${isMe?avatar(null,'xl',true):avatar(p,'xl')}
      <div class="vhead over pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"></div>${isMe?'':`<button class="iconbtn" data-a="more" data-id="${p.id}" aria-label="More options">${ic('more')}</button>`}</div>
      <div class="pv-ov"><div class="tx"><h2>${esc(nm)} <span class="age">${p.age}</span></h2><p>${checksSeal(p)} ${esc(p.job)}</p></div>${c?`<span class="nm-fit" style="--fit:${c.total}%" aria-label="${c.total}% fit"><span>${c.total}%<small>fit</small></span></span>`:''}</div></div>
    <div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
     ${isMe?`<div class="callout">${ic('eye')}<span>This is how other members see your profile once they can open it.</span></div>`:`<div class="panel">${routeLine(p)}</div>`}
     ${!isMe&&S.interests[p.id]==='received'?`<div class="callout gold">${ic('heart')}<span>${esc(p.first)} sent you an interest. Accept to unlock photos and chat.</span></div>`:''}
     ${!isMe&&p.paused?`<div class="callout">${ic('eye')}<span>${esc(p.first)} has paused ${p.g==='F'?'her':'his'} profile for now.</span></div>`:''}
     ${!isMe?`<ul class="nm-why">${whyChips(p).map(w=>`<li>${ic('heart')}<span>${esc(w.t)}</span></li>`).join('')}</ul>${timelinePill(p)}`:''}
     <div class="panel"><h3>About</h3><p class="notr">${esc(p.about)}</p></div>
     ${more}
     <div class="panel"><dl class="kv">${kv.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>
     ${c?`<div class="panel"><h3>Why ${c.total}%</h3><div class="meter">${[['Values',c.values],['Lifestyle',c.life],['Preferences',c.pref],['Distance',c.loc],['Roots',c.roots]].map(([k,v])=>`<div class="m"><span>${k}</span><span class="t"><i style="width:${Math.round(v*100)}%"></i></span><b>${Math.round(v*100)}</b></div>`).join('')}</div></div>
     <div class="panel"><h3>Mindset, side by side</h3><div>${valsHtml}</div></div>`:''}
     <div class="panel"><h3>Checked by NeuMarry</h3>${checksRow(p)}<div>${trustRows(p)}</div><p class="hint">Documents are never shown to members.</p></div>
    </div>
   </div>
   ${isMe?'':`<div class="pv-act pad">${actionBar(p)}</div>`}
  </div>`;
}
/* Conversation starters (29 Oct, feature 3): from the answers you share. */
function starters(p){const me=S.me,out=[];
  if(p.oc===me.oc)out.push(`How does your family celebrate at home in ${p.cityName}?`);
  if(me.ans[0]===p.ans[0]&&p.ans[0]===0)out.push(`What do you love most about ${p.cityName}?`);
  if(me.ans[5]===p.ans[5])out.push(['What does a family weekend look like for you?','Which place here do you like to go out with friends?','Where is the next trip you dream of?'][p.ans[5]]||'');
  if(me.ans[1]===p.ans[1])out.push('What do you enjoy most about your work?');
  out.push('What made you move to '+p.cityName+'?');
  const list=[...new Set(out.filter(Boolean))].slice(0,3);
  return `<div class="nm-start pad"><small>Ideas from your answers</small><div>${list.map(t=>`<button data-a="starter" data-t="${esc(t)}">${esc(t)}</button>`).join('')}</div></div>`}
function renderChatView(id){
  const p=byId(id);if(!p)return '';
  const msgs=S.chats[id]||[];
  return `<div class="view" role="dialog" aria-label="Chat with ${esc(shown(p))}">
   <div class="vhead pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button>
    <button class="grow" data-a="open" data-id="${id}" style="border:0;background:none;padding:0;text-align:left">${avatar(p,'sm')}<span><b>${esc(shown(p))}</b><small>${esc(p.os)} → ${esc(p.cityName)}</small></span></button>
    <button class="iconbtn" data-a="more" data-id="${id}" data-chat="1" aria-label="More options">${ic('more')}</button></div>
   <div class="scroll" id="chat-scroll"><div class="msgs pad">
    ${chatWhy(id)?`<div class="msg sys gold">${ic('crown')} ${esc(chatWhy(id))}</div>`:''}
    ${msgs.map(m=>!canChat(id)&&m.f==='them'?`<div class="msg them locked" aria-label="Message from ${esc(p.first||'them')}, locked"><span class="blurtxt" aria-hidden="true">${esc(m.x)}</span><span class="lockline">${ic('lock')}${esc(p.first||'They')} sent you a message</span></div>`:
      `<div class="msg ${m.f}${m.pending?' pending':''}">${esc(m.x)}${m.f!=='sys'?`<time>${m.pending?'Sending…':timeStr(m.ts)}</time>`:''}</div>${m.flag&&m.f==='them'?`<div class="msg sys">${ic('shield')} This message mentions money or visas. Never send money or pay for visa help, and report anyone who asks.</div>`:''}`).join('')}
   </div></div>
   ${canChat(id)&&msgs.filter(m=>m.f!=='sys').length<6?starters(p):''}
   ${canChat(id)?`<div class="composer pad"><label class="sr" for="chat-in">Message</label><input id="chat-in" type="text" maxlength="1000" placeholder="Message ${esc(p.first||'')}" autocomplete="off" enterkeyhint="send"><button class="btn primary" data-a="send" data-id="${id}" aria-label="Send">${ic('send')}</button></div>`:
   `<div class="lockbar pad"><span class="tx"><b>Read and reply to ${esc(p.first||'your match')}</b><small>Chat opens when either of you has Gold</small></span><button class="btn gold" data-a="upgrade" data-r="chat" data-id="${id}">${ic('crown')}Unlock</button></div>`}
  </div>`;
}
function renderEventView(id){
  const e=evById(id);if(!e)return '';
  const f=fmtDay(e.date,e.tz),rv=e.my,st=evStat(e),[wc,wl,mc,ml]=e.seats;
  const canBook=forMe(e)&&ageOk(e);
  return `<div class="view" role="dialog" aria-label="${esc(e.title)}">
   <div class="scroll" id="view-scroll">
    <div class="evhero">${evArt(e,true)}<div class="vhead over pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"></div></div>
     <div class="ovt"><p>${esc(f.long)} · ${e.time} · ${e.dur}</p><h2>${esc(e.title)}</h2><p>${esc(audLabel(e))} · ${esc(e.sub)} · ages ${e.age}</p></div></div>
    <div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
     ${rv&&rv.status==='paid'?`<div class="callout good">${ic('check')}<span><b>Your seat is paid${rv.parents.length?` for you and ${rv.parents.length} ${rv.parents.length===1?'parent':'parents'}`:''}.</b> Dinner is included. Your QR ticket below opens on the event day.</span></div>`:
       rv&&rv.status==='pay_due'?`<div class="callout gold">${ic('ticket')}<span><b>The event is confirmed and your seat is held.</b>${rv.due?` Pay by ${esc(fmtDay(rv.due,e.tz).long)} · ${esc(fmtTime(rv.due,e.tz))}, or the seat goes to the next person.`:''}</span></div>${payPanel(e)}`:
       rv&&rv.status==='hold_due'?`<div class="callout gold">${ic('ticket')}<span><b>One more step: pay the ${money(e.hold,e.cur)} seat hold.</b> Your seat counts once it is paid. It is taken off your ticket, and refunded in full if the event is not confirmed.</span></div>${payPanel(e)}`:
       rv&&rv.wait&&rv.status!=='hold_due'?`<div class="callout">${ic('clock')}<span><b>You’re on the waiting list.</b> All seats for ${evMine(e).who} are taken. If a seat frees up, it is yours and we email you at once. Nothing to pay until then.</span></div>`:
       rv?`<div class="callout">${ic('check')}<span><b>You’re reserved${rv.parents.length?` with ${rv.parents.length} ${rv.parents.length===1?'parent':'parents'}`:''}.</b> Nothing to pay until ${st.left} more people reserve. If the event isn’t full by ${esc(fmtDay(st.deadline,e.tz).long)}, we move it to a new date and email you. Nobody pays before then.</span></div>`:''}
     ${e.moved?`<div class="callout gold">${ic('cal')}<span><b>New date: ${esc(fmtDay(e.date,e.tz).long)} · ${e.time}.</b> Moved from ${esc(fmtDay(e.moved,e.tz).long)} because not every seat was filled yet. Your reservation stays.</span></div>`:''}
     ${rv&&rv.status==='paid'?ticketPanel(e):''}
     ${(S.staff||[]).includes(e.id)?`<div class="panel wwu"><div class="wwu-h"><h3>Host tools</h3></div><p class="sub">Scan each guest’s QR ticket at the door. You see their photo, name and checks, then check them in with one tap.</p><button class="btn primary block" data-a="hostOpen" data-id="${e.id}">${ic('scan')}Scan tickets and guest list</button></div>`:''}
     <div class="panel"><h3>${st.confirmed?'Confirmed':'How booking works'}</h3>
      <div class="seats"><span>${st.n} of ${e.need} people reserved${st.confirmed?'':` · needs ${st.left} more by ${esc(fmtDay(st.deadline,e.tz).long)}`}</span><span class="sb"><i style="width:${Math.min(100,Math.round(st.n/e.need*100))}%"></i></span></div>
      <ol class="hint" style="margin:0;padding-left:18px;display:grid;gap:4px"><li>${holdOn(e)?`Reserve a seat with a ${money(e.hold,e.cur)} hold and choose your dish.`:'Reserve a seat for free and choose your dish.'}</li><li>When all ${e.seats[0]+e.seats[2]} seats are taken and ${e.wait[0]+e.wait[2]} more people are on the waiting list, the event is confirmed.</li><li>${holdOn(e)?'You pay the rest in the app. Dinner is included; nothing is paid at the restaurant.':'You pay in the app. Dinner is included; nothing is paid at the restaurant.'}</li><li>${holdOn(e)?`Not full ${DECIDE_DAYS} days before? We move it to a new date and email everyone. If the new date does not suit you, your hold is refunded.`:`Not full ${DECIDE_DAYS} days before? We move it to a new date and email everyone. Nobody pays before the event is confirmed.`}</li></ol></div>
     ${rv&&rv.status==='paid'?'':whyEvent('Why come')}
     ${e.includes.length?`<div class="panel"><h3>What’s included</h3><ul class="incl">${e.includes.map(x=>`<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul></div>`:''}
     ${e.agenda.length?`<div class="panel"><h3>How the evening goes</h3><ul class="tl">${e.agenda.map(([tm,x])=>`<li><time>${esc(tm)}</time><i></i><span>${esc(x)}</span></li>`).join('')}</ul></div>`:''}
     <div class="panel"><h3>Who you’ll meet</h3><p class="sub">Fully verified members ${esc(audLabel(e)==='All communities'?'from every community':audLabel(e).toLowerCase())}, ages ${e.age}. Your host seats you first with your best matches at the event.</p>
      <div class="seats"><span>Women: ${wl} of ${wc} seats left</span><span class="sb"><i style="width:${Math.round((wc-wl)/wc*100)}%"></i></span></div>
      <div class="seats"><span>Men: ${ml} of ${mc} seats left</span><span class="sb"><i style="width:${Math.round((mc-ml)/mc*100)}%"></i></span></div>
      ${e.wait[0]+e.wait[2]?`<p class="hint">Waiting list: ${e.wait[1]} of ${e.wait[0]} places left for women, ${e.wait[3]} of ${e.wait[2]} for men.</p>`:''}</div>
     <div class="panel"><h3>Tickets</h3>
      <div class="sumrow"><span>Member, dinner included</span><b>${money(e.priceM,e.cur)}</b></div>
      ${e.parents&&e.priceP?`<div class="sumrow"><span>Parent, dinner included (up to 2)</span><b>${money(e.priceP,e.cur)} each</b></div>`:`<p class="hint">Members only.</p>`}
      <p class="hint">Early price while the event is filling. The price goes up once it is confirmed, and again in the last 3 days. Men and women pay the same.</p></div>
     <div class="panel"><h3>Good to know</h3><ul class="incl">
      <li>${ic('shield')}<span>Every guest is fully verified (ID, roots and city) and checked in at the door with a QR ticket.</span></li>
      <li>${ic('users')}<span>Conversations happen at separate tables in one shared room, never in a private room.</span></li>
      <li>${ic('pin')}<span>A partner restaurant in ${esc(e.area)}. The exact address is on your ticket after payment.</span></li>
      <li>${ic('refresh')}<span>Cancel your reservation any time before you pay.</span></li>
      <li>${ic('lock')}<span>Your picks stay private. Only mutual picks become matches.</span></li></ul></div>
    </div>
   </div>
   <div class="bookbar pad"><span class="tx"><b>${money(e.priceM,e.cur)}</b><small>${e.parents&&e.priceP?`+ ${money(e.priceP,e.cur)} per parent`:'per person'}</small></span>${
     rv&&rv.status==='paid'?`<button class="btn ghost" disabled>${ic('check')}Seat paid</button>`:
     (rv&&(rv.status==='pay_due'||rv.status==='hold_due'))&&PAYQ&&PAYQ.eid===e.id&&PAYQ.q&&!PAYQ.q.error?`<button class="btn primary" data-a="payEvent" data-id="${e.id}"${PAYBUSY?' disabled':''}>${ic('lock')}Pay ${money(PAYQ.q.total_cents,PAYQ.q.currency)}</button>`:
     rv?`<button class="btn ghost" data-a="cancelRes" data-id="${e.id}"${busy?' disabled':''}>Cancel reservation</button>`:
     !forMe(e)?`<button class="btn ghost" disabled>For ${esc((e.aud||{}).l||'members')} only</button>`:
     !ageOk(e)?`<button class="btn ghost" disabled>For ages ${e.age}</button>`:
     !evMine(e).seatsLeft&&!evMine(e).waitLeft?`<button class="btn ghost" disabled>Full</button>`:
     `<button class="btn primary" data-a="book" data-id="${e.id}"${canBook?'':' disabled'}>${!evMine(e).seatsLeft?'Join the waiting list':holdOn(e)?`Reserve · ${money(e.hold,e.cur)} hold`:'Reserve free seat'}</button>`}</div>
  </div>`;
}
/* Why come to an event (28 Oct, CMO text): honest reasons, no promised numbers. */
const WHY_EVENT=[['See the real person.','In one evening you see how someone talks, listens and treats others, which no photo or chat shows.'],
  ['Families meet the same evening.','Parents talk in their own lounge, so many rishta questions are answered at the table, not over weeks of calls.'],
  ['Only verified people.','Every guest has proven their ID, roots and city, and your host seats you first with your best matches.']];
function whyEvent(title){return `<div class="panel whyev"><h3>${title||'Why meet at a Family Mixer'}</h3><ul class="incl">${WHY_EVENT.map(([b,t])=>`<li>${ic('check')}<span><b>${b}</b> ${t}</span></li>`).join('')}</ul><p class="sub"><em>For many families, one evening together settles what months of chatting cannot.</em></p></div>`}
/* ---------- Event payment (PayPal) ---------- */
let PAYQ=null,PAYBUSY=false,PAYCHK=null;
function payPanel(e){const q=PAYQ&&PAYQ.eid===e.id?PAYQ.q:null;
  if(!q)return `<div class="panel"><h3>Pay for your seat</h3>${spinner('Loading')}</div>`;
  if(q.error)return q.error==='too_late'?`<div class="callout bad">${ic('info')}<span>The time to pay has passed, so this seat was released.</span></div>`:'';
  const par=q.parents||0,pct=q.ticket_cents?Math.round(q.tax_cents/q.ticket_cents*100):0;
  if(q.hold)return `<div class="panel pay"><h3>Hold your seat</h3>
   <div class="sumrow"><span>Seat hold, taken off your ticket</span><span>${money(q.ticket_cents,q.currency)}</span></div>
   <div class="sumrow total"><b>Pay now</b><b>${money(q.total_cents,q.currency)}</b></div>
   <button class="btn primary block" data-a="payEvent" data-id="${e.id}"${PAYBUSY?' disabled':''}>${ic('lock')}${PAYBUSY?'Opening PayPal…':`Pay ${money(q.total_cents,q.currency)} with PayPal`}</button>
   ${q.order?`<button class="link" data-a="payCheck" data-id="${e.id}" style="justify-self:center">I already paid · check again</button>`:''}
   <p class="hint">You pay on PayPal’s secure page, with a PayPal account or a card. NeuMarry never sees your card. Refunded in full if the event is not confirmed; not refunded if you cancel.</p></div>`;
  return `<div class="panel pay"><h3>Pay for your seat</h3>
   <div class="sumrow"><span>${par?`You and ${par} ${par===1?'parent':'parents'}, dinner included`:'You, dinner included'}</span><span>${money(q.ticket_cents,q.currency)}</span></div>
   ${q.tax_cents?`<div class="sumrow"><span>HST ${pct}%</span><span>${money(q.tax_cents,q.currency)}</span></div>`:''}
   ${q.hold_paid_cents?`<div class="sumrow"><span>Seat hold already paid</span><span>−${money(q.hold_paid_cents,q.currency)}</span></div>`:''}
   <div class="sumrow total"><b>Total</b><b>${money(q.total_cents,q.currency)}</b></div>
   <button class="btn primary block" data-a="payEvent" data-id="${e.id}"${PAYBUSY?' disabled':''}>${ic('lock')}${PAYBUSY?'Opening PayPal…':`Pay ${money(q.total_cents,q.currency)} with PayPal`}</button>
   ${q.order?`<button class="link" data-a="payCheck" data-id="${e.id}" style="justify-self:center">I already paid · check again</button>`:''}
   <p class="hint">You pay on PayPal’s secure page, with a PayPal account or a card. NeuMarry never sees your card. Full refund up to 48 hours before the event.</p></div>`}
async function loadPayQuote(eid){let q;try{q=await API.rpc('my_pay_quote',{eid})}catch(e){q={error:'net'}}PAYQ={eid,q:q||{error:'net'}};
  if(q&&q.order&&PAYCHK!==eid){PAYCHK=eid;payCheck(eid,true)}
  if(view&&view.type==='event'&&view.id===eid)render()}
function payPending(v){try{if(v===undefined)return localStorage.getItem('rm.payPending');if(v)localStorage.setItem('rm.payPending',v);else localStorage.removeItem('rm.payPending')}catch(e){return null}}
async function payCheck(eid,quiet){let r;try{r=await API.fn('event-pay',{action:'check',eid})}catch(e){if(!quiet)toast((e&&e.message)||'Could not reach PayPal. Try again.','info');return}
  if(r&&r.status==='held'){payPending(null);PAYQ=null;await loadEvents().catch(()=>{});toast('Hold received. Your seat is reserved.','check');render();return true}
  if(r&&r.status==='paid'){payPending(null);PAYQ=null;await loadEvents().catch(()=>{});toast('Payment received. Your seat is paid.','check');render();return true}
  if(!quiet)toast(r&&r.status==='waiting'?'PayPal has not finished the payment yet. Finish it on the PayPal page, then come back.':'No payment found yet.','info');
  return false}
/* Back from PayPal: the web app opens with ?pp=<event>; the phone app checks when it comes back to the front. */
async function payReturn(){let q=null;try{q=new URLSearchParams(location.search)}catch(e){}const eid=q&&q.get('pp');
  if(!eid)return;history.replaceState(null,'',location.pathname);
  if(!S.me)return;S.tab='events';view={type:'event',id:eid};render();
  if(q.get('cancel')){toast('Payment cancelled. Your seat is still held until the time to pay ends.','info');return}
  await payCheck(eid,false)}
/* ---------- Event QR ticket (guest) and check-in (host) ---------- */
let TICKET=null,TK_T=null,TK_S=null;
function qrSvg(text){try{const q=qrcode(0,'M');q.addData(text);q.make();return q.createSvgTag({cellSize:6,margin:2,scalable:true})}catch(e){return ''}}
function ticketPanel(e){
  const t=TICKET&&TICKET.eid===e.id?TICKET.d:null;
  if(!t)return `<div class="panel ticket"><h3>Your QR ticket</h3>${spinner('Loading your ticket')}</div>`;
  if(t.error==='ended')return '';
  if(t.error==='too_early'){const o=new Date(t.opens_at);return `<div class="panel ticket"><span class="tk-ic">${ic('qr')}</span><h3>Your QR ticket</h3><p class="sub">It appears here on the day of the event, from ${esc(fmtDay(o,e.tz).long)} · ${esc(fmtTime(o,e.tz))}. At the door the host scans it and checks you in.</p></div>`}
  if(t.error)return `<div class="panel ticket"><span class="tk-ic">${ic('qr')}</span><h3>Your QR ticket</h3><p class="sub">${t.error==='verify_first'?'Your verification needs attention before you can check in. <button class="link" data-a="goVerify">Open verification</button>':'Your ticket could not load. Check your internet; it tries again by itself.'}</p></div>`;
  if(t.checked_in_at)return `<div class="panel ticket in"><span class="tk-ic ok">${ic('check')}</span><h3>You are checked in</h3><p class="sub">Welcome to ${esc(e.title)}. Enjoy the evening!</p></div>`;
  return `<div class="panel ticket"><h3>Your QR ticket</h3>
   <div class="qrbox" role="img" aria-label="QR ticket">${qrSvg(t.qr)}</div>
   <div class="tk-code"><span>Door code</span><b class="notr">${esc(t.code.slice(0,3))} ${esc(t.code.slice(3))}</b></div>
   <p class="tk-live">${ic('refresh')}<span>New code in <b id="tk-left">${t.seconds_left}</b> s</span></p>
   <p class="hint">Show this at the door. The code changes every 30 seconds, so a screenshot will not work.${t.parents?` Your ${t.parents===1?'parent comes':'parents come'} in with you on this ticket.`:''}</p></div>`;
}
async function loadTicket(eid){let d;try{d=await API.rpc('my_ticket',{eid})}catch(e){d={error:'net'}}
  TICKET={eid,d:d||{error:'net'},at:Date.now()};if(view&&view.type==='event'&&view.id===eid)render()}
function afterRenderEvents(){
  const e=view&&view.type==='event'?evById(view.id):null,paid=!!(e&&e.my&&e.my.status==='paid');
  clearInterval(TK_S);TK_S=null;
  if(!paid){clearTimeout(TK_T);TK_T=null;TICKET=null}
  else if(!TICKET||TICKET.eid!==e.id){clearTimeout(TK_T);TK_T=null;TICKET={eid:e.id,d:null,at:0};loadTicket(e.id)}
  else if(TICKET.d&&!TK_T){const wait=TICKET.d.code?Math.max(1,TICKET.d.seconds_left)*1000+300:60000;TK_T=setTimeout(()=>{TK_T=null;if(TICKET&&TICKET.eid===e.id)loadTicket(e.id)},wait)}
  if(paid&&TICKET&&TICKET.d&&TICKET.d.code){const end=TICKET.at+TICKET.d.seconds_left*1000;
    TK_S=setInterval(()=>{const el=document.getElementById('tk-left');if(!el){clearInterval(TK_S);return}el.textContent=Math.max(0,Math.ceil((end-Date.now())/1000))},500)}
  if(e&&e.my&&(e.my.status==='pay_due'||e.my.status==='hold_due')&&(!PAYQ||PAYQ.eid!==e.id)){PAYQ={eid:e.id,q:null};loadPayQuote(e.id)}
  if(view&&view.type==='host')hostAttach();else hostStop();
}
let HOST={eid:null,stream:null,loop:null,busy:false,res:null,guests:null,err:''};
const HOST_ERR={expired:'This code has expired. Ask the guest to open the live ticket in the NeuMarry app; screenshots do not work.',other_event:'This ticket is for a different event.',
  not_found:'This is not a NeuMarry ticket.',not_paid:'This seat is not paid.',scan_qr:'Two tickets share this code right now. Scan the QR instead.',net:'No internet. Try again.'};
function guestPic(path,name){const u=path&&urlOf(path);return u?`<img class="gpic" src="${esc(u)}" alt="">`:`<span class="gpic ini" aria-hidden="true">${esc((name||'?').trim().charAt(0))}</span>`}
function hostResult(r){
  if(!r.ok)return `<div class="panel hres bad"><span class="tk-ic bad">${ic('x')}</span><h3>Do not let in yet</h3><p class="sub">${esc(HOST_ERR[r.error]||'This ticket could not be checked.')}</p><button class="btn primary block" data-a="hostNext">${ic('scan')}Scan again</button></div>`;
  const par=Array.isArray(r.parents)?r.parents:[],okV=!!r.fully_verified;
  return `<div class="panel hres${r.done?' in':''}">
   <div class="hres-top">${guestPic(r.photo,r.name)}<div><h3>${esc(r.name)}</h3><p class="sub">${r.age} · ${esc(r.city)}, ${esc(r.country)}</p><p class="sub">Roots: ${esc(r.roots||'')}</p></div></div>
   <p class="hint">Look at the face: it must match this photo.</p>
   <ul class="incl">
    <li>${ic(okV?'check':'x')}<span>${okV?'Fully verified: ID and selfie, roots and city':'Verification is not complete. Do not check in; call the NeuMarry team.'}</span></li>
    <li>${ic('check')}<span>Seat paid</span></li>
    ${r.meal?`<li>${ic('check')}<span>Dinner: ${esc(MEALS[r.meal]||r.meal)}</span></li>`:''}
    ${par.map(x=>`<li>${ic('users')}<span>With ${esc(x.relation||'parent')}: ${esc(x.name||'')}${x.meal?' · '+esc(MEALS[x.meal]||x.meal):''}</span></li>`).join('')}</ul>
   ${r.done?`<div class="callout good">${ic('check')}<span><b>Checked in.</b> Welcome them in.</span></div>`:
     r.checked_in_at?`<div class="callout bad">${ic('info')}<span><b>Already checked in at ${esc(timeStr(Date.parse(r.checked_in_at)))}.</b> The same ticket cannot come in twice.</span></div>`:''}
   <div class="btns2">${r.done||r.checked_in_at?'':`<button class="btn primary" data-a="hostCheckIn"${okV&&!HOST.busy?'':' disabled'}>${ic('check')}Check in${par.length?` · ${1+par.length}`:''}</button>`}
    <button class="btn ghost" data-a="hostNext">${ic('scan')}Scan next</button></div></div>`;
}
function renderHostView(eid){
  const e=evById(eid),g=HOST.guests||[],inN=g.filter(x=>x.checked_in_at).length,ppl=g.reduce((a,x)=>a+1+(x.parents||0),0),pplIn=g.filter(x=>x.checked_in_at).reduce((a,x)=>a+1+(x.parents||0),0);
  return `<div class="view" role="dialog" aria-label="Check-in">
   <div class="vhead pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"><b>Check-in</b><small>${esc(e?e.title:'')}</small></div><button class="iconbtn soft" data-a="hostRefresh" aria-label="Refresh guest list">${ic('refresh')}</button></div>
   <div class="scroll" id="view-scroll"><div class="pad" style="display:grid;gap:14px;padding-block:8px 26px">
    <div class="hstats"><div><b>${inN}<small>/${g.length}</small></b><span>members in</span></div><div><b>${pplIn}<small>/${ppl}</small></b><span>people with parents</span></div></div>
    ${HOST.res?hostResult(HOST.res):`<div class="scanbox">${HOST.stream?`<video id="host-video" playsinline muted autoplay></video><span class="scanframe" aria-hidden="true"></span><span class="scanhint">${HOST.busy?'Checking…':'Point at the QR ticket'}</span>`:
      `<div class="scanoff">${ic('qr')}<p>Scan each guest’s QR ticket at the door.</p><button class="btn primary" data-a="hostCam">${ic('camera')}Start camera</button></div>`}</div>
     ${HOST.err?`<div class="callout bad">${ic('info')}<span>${esc(HOST.err)}</span></div>`:''}
     <div class="panel"><h3>No camera? Type the door code</h3><div class="codein"><input id="host-code" inputmode="numeric" maxlength="6" placeholder="6-digit code" autocomplete="off" aria-label="Door code"><button class="btn primary" data-a="hostCode">Check</button></div><p class="hint">The door code is under the guest’s QR. It changes every 30 seconds.</p></div>`}
    <div class="sec-h"><h2>Guests</h2><small>${inN} of ${g.length} checked in</small></div>
    ${HOST.guests===null?spinner('Loading guests'):g.length?`<div class="panel glist">${g.map(x=>`<div class="rowi">${guestPic(x.photo,x.full_name)}<span class="tx"><b>${esc(x.full_name)}</b><span>${x.gender==='F'?'Woman':'Man'}${x.parents?` · +${x.parents} ${x.parents===1?'parent':'parents'}`:''}${x.meal?' · '+esc(MEALS[x.meal]||x.meal):''}</span></span>${x.checked_in_at?`<span class="pill good">${ic('check')}${esc(timeStr(Date.parse(x.checked_in_at)))}</span>`:`<span class="pill">Not yet</span>`}</div>`).join('')}</div>`:`<p class="hint">Paid guests appear here.</p>`}
   </div></div></div>`;
}
async function hostLoadGuests(){try{HOST.guests=(await API.rpc('host_guests',{eid:HOST.eid}))||[];await signPaths(HOST.guests.map(x=>x.photo).filter(Boolean))}catch(e){HOST.guests=HOST.guests||[]}
  if(view&&view.type==='host')render()}
function hostAttach(){const v=document.getElementById('host-video');if(v&&HOST.stream&&v.srcObject!==HOST.stream){v.srcObject=HOST.stream;v.play().catch(()=>{})}}
function hostStop(){if(HOST.loop){clearInterval(HOST.loop);HOST.loop=null}if(HOST.stream){HOST.stream.getTracks().forEach(t=>t.stop());HOST.stream=null}}
function loadJsQR(){return window.jsQR?Promise.resolve():new Promise((ok,no)=>{const s=document.createElement('script');s.src='js/vendor/jsQR.js';s.onload=ok;s.onerror=no;document.head.appendChild(s)})}
async function hostCamStart(){
  try{HOST.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false});HOST.err=''}
  catch(e){HOST.err='The camera is blocked. Allow the camera for NeuMarry in your phone settings, or type the door code below.';render();return}
  let det=null;try{if('BarcodeDetector' in window)det=new BarcodeDetector({formats:['qr_code']})}catch(e){det=null}
  if(!det)await loadJsQR().catch(()=>{});
  const cv=document.createElement('canvas'),cx=cv.getContext('2d',{willReadFrequently:true});
  render();
  HOST.loop=setInterval(async()=>{const v=document.getElementById('host-video');if(!v||HOST.res||HOST.busy||v.readyState<2)return;
    let txt=null;
    try{if(det){const c=await det.detect(v);txt=c[0]&&c[0].rawValue}
      else if(window.jsQR){const w=v.videoWidth,h=v.videoHeight;if(!w)return;const s=Math.min(1,640/w);cv.width=w*s;cv.height=h*s;cx.drawImage(v,0,0,cv.width,cv.height);const r=jsQR(cx.getImageData(0,0,cv.width,cv.height).data,cv.width,cv.height,{inversionAttempts:'dontInvert'});txt=r&&r.data}}catch(e){}
    if(txt&&/^NEUMARRY:/i.test(txt))hostLookup(txt)},280);
}
async function hostLookup(code){if(HOST.busy)return;HOST.busy=true;render();
  try{HOST.res=await API.rpc('checkin_lookup',{eid:HOST.eid,scanned:code});if(HOST.res&&HOST.res.photo)await signPaths([HOST.res.photo])}catch(e){HOST.res={ok:false,error:'net'}}
  HOST.busy=false;if(navigator.vibrate)try{navigator.vibrate(HOST.res&&HOST.res.ok?60:[60,80,60])}catch(e){}
  render()}
function renderCelebrate(){
  const p=byId(celebrate.id);if(!p)return '';
  return `<div class="celebrate" role="dialog" aria-label="It’s a match">${hearts(14)}
   <div class="pair">${avatar(null,'cel',true)}${avatar(p,'cel')}<span class="hb">${ic('heart')}</span></div>
   <h2>It’s a match!</h2>
   <p>You and ${esc(p.first||'your match')} both said yes. Photos are unlocked${canChat(p.id)?' and chat is open':''}.</p>
   <div class="btns"><button class="btn white" data-a="celChat" data-id="${p.id}">${ic('chat')}Say hello${p.first?' to '+esc(p.first):''}</button><button class="btn clear" data-a="celClose">Keep looking</button></div></div>`;
}

/* ---------- Team review ---------- */
const ADM_KIND={photo:'Profile photo',id:'Government ID',selfie:'Live selfie',roots:'Roots document',status:'Status in the country',address:'Current address'};
const ADM_HINT={id:'Name and date of birth must match the profile. Photo must match the selfie.',selfie:'Must be a live photo of the same person as the ID and profile photos.',photo:'A clear photo of the member’s own face. No group photos, children, nudity or text.',
  roots:'The country and state of birth or origin on the document must match the roots on the profile. For “Same as my ID”, the ID shown must be a passport of that country.',
  status:'Must show the member may live in the country on the profile (PR, citizenship, or a valid permit or visa), in the same name as the ID.',
  address:'Same name as the ID, an address in the city on the profile (or within 50 km), dated in the last 3 months or a valid photo ID with the address.'};
/* New sign-ups (28 Oct, his ok): who joined in the last 30 days and where they stopped, so the team can help. */
const STEP_CLS={'Fully verified and live':'good','Waiting for our team':'gold'};
function tzPlace(tz){if(!tz)return '';const city=tz.split('/').pop().replace(/_/g,' ');return `${city} time zone`}
function signupsBlock(list){const today=list.filter(x=>Date.now()-Date.parse(x.created_at)<864e5).length;
  const when=t=>t?new Date(t).toLocaleString(RM_I18N.locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}):'-';
  return `<div class="sec-h"><h2>New sign-ups (${list.length})</h2><small>${today} today · last 30 days</small></div>
  ${list.length?`<div class="panel glist su-list">${list.map(x=>{const nm=x.full_name||x.google_name;
    return `<div class="rowi"><span class="tx"><b>${esc(nm||'No name yet')}</b><span class="notr">${esc(x.email||'')}</span>
     <span>Joined ${esc(when(x.created_at))} · ${esc(x.provider==='google'?'Google':x.provider==='email'?'Email and password':x.provider)}${x.city?` · ${esc(x.city)}, ${esc(x.country||'')}`:''}</span>
     <span>Last active ${esc(when(x.last_active))} · ${x.logins||1} ${x.logins===1||!x.logins?'login':'logins'}${x.form_minutes!=null?` · ${x.form_minutes} min in the form`:''}</span>
     ${x.phone_tz?`<span>Phone: ${esc(tzPlace(x.phone_tz))}${x.phone_lang?` · language ${esc(x.phone_lang)}`:''}</span>`:''}
     ${x.reminded_at?`<span>${ic('mail')} Reminder email sent ${esc(when(x.reminded_at))}</span>`:''}
     <span class="pill ${STEP_CLS[x.step]||''}">${esc(x.step)}</span></span>
     ${x.email&&x.step!=='Fully verified and live'?`<a class="btn ghost sm" href="mailto:${esc(x.email)}?subject=${encodeURIComponent('Your NeuMarry profile')}">${ic('mail')}Email</a>`:''}</div>`}).join('')}</div>`:`<p class="hint">No new sign-ups in the last 30 days.</p>`}`}
const admAuto=g=>{if(!g)return `<p class="hint">${ic('shield')} Google check: waiting (or not available for PDF).</p>`;const t=(ok,part,lbl)=>`<span class="gchk ${ok?'ok':part?'mid':'no'}">${ok?'✓':part?'~':'✗'} ${lbl}</span>`;return `<p class="hint gline"><b>Google Cloud Vision:</b> ${t(g.name==='match',g.name==='partial','Name')}${t(g.dob==='match',g.dob==='year','Birth date')}${t(g.faces===1,g.faces>1,g.faces===1?'1 face':g.faces+' faces')}</p>`};
function renderAdmin(){
  const a=S.admin||{};const q=a.queue||[];const reps=a.reports||[];const c=a.counts;
  const item=x=>{const img=a.urls&&a.urls[x.bucket+':'+x.path];const prof=a.urls&&x.profile_photo&&a.urls['photos:'+x.profile_photo];
    const isPdf=/\.pdf$/i.test(x.path||'');
    return `<div class="panel adm" id="adm-${x.row_id}"><div class="adm-h"><b>${esc(ADM_KIND[x.kind]||x.kind)}</b><small>${esc(x.full_name)} · ${x.gender==='F'?'Woman':'Man'}, ${x.age} · ${esc(x.city)}, ${esc(x.country)}</small>${['roots','status','address'].includes(x.kind)?`<small>${x.kind==='roots'?`Roots on profile: ${esc(x.origin_state||'')}, ${esc(x.origin_country||'')}`:`Residency on profile: ${esc(x.residency||'')}`}${x.id_type?` · Document: ${esc(x.id_type)}`:''}</small>`:''}</div>
      <div class="adm-imgs">${img?(isPdf?`<a class="btn ghost sm" href="${esc(img)}" target="_blank" rel="noopener">Open PDF</a>`:`<img src="${esc(img)}" alt="${esc(x.kind)} of ${esc(x.full_name)}">`):`<span class="hint">Loading image…</span>`}${x.kind!=='photo'&&prof?`<img src="${esc(prof)}" alt="Profile photo of ${esc(x.full_name)}">`:''}</div>
      <p class="hint">${ADM_HINT[x.kind]||''}</p>${x.kind==='id'?admAuto(a.auto&&a.auto[x.row_id]):''}${x.kind==='photo'&&x.ai_check?`<p class="hint">${x.ai_check==='doubtful'?`${ic('shield')} <b>Automatic check: may be revealing or violent.</b> Look carefully.`:'Automatic check: nothing inappropriate found.'}</p>`:''}
      <div class="adm-act"><select data-adm-reason="${x.row_id}" aria-label="Reason if rejected"><option value="">Reason if rejected…</option>${(x.kind==='photo'?['Face not clear','Not a real photo of you','Group photo','Inappropriate photo']:['roots','status','address'].includes(x.kind)?['Image not readable','Does not match the profile','Not an accepted document','Older than 3 months','Name does not match the ID']:['Image not readable','Does not match the profile','Not a valid ID','Not a live selfie']).map(r=>`<option>${r}</option>`).join('')}</select>
      <button class="btn ghost sm" data-a="admReject" data-id="${x.row_id}" data-k="${x.kind}">Reject</button><button class="btn primary sm" data-a="admApprove" data-id="${x.row_id}" data-k="${x.kind}">Approve</button></div></div>`};
  return `<div class="view" role="dialog" aria-label="Team review">
   <div class="vhead pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"><span><b>Team review</b><small>${c?`${c.members} member${c.members===1?'':'s'} · ${c.verified} verified · ${c.women} women, ${c.men} men · ${c.waitlist} on waitlist`:'Loading…'}</small></span></div><button class="iconbtn" data-a="openAdmin" aria-label="Refresh">${ic('refresh')}</button></div>
   <div class="scroll" id="view-scroll"><div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
    ${a.loading?`<div style="display:grid;place-items:center;padding:30px">${spinner('Loading')}</div>`:''}
    ${eventsBlock(a.events||[])}${citiesBlock(a)}
    ${signupsBlock(a.signups||[])}
    <div class="panel pay-test"><div class="adm-h"><b>${ic('ticket')} Payment test (team only)</b><small>Only the team sees this event. You pay CA$1.00 + 13% HST = CA$1.13 with the real PayPal, then refund it in the PayPal dashboard.</small></div><div class="adm-act"><button class="btn primary sm" data-a="admPayTest">Open the test seat</button></div></div>
    <div class="sec-h"><h2>To review (${q.length})</h2></div>
    ${q.length?q.map(item).join(''):a.loading?'':`<p class="hint">Nothing waiting. Well done.</p>`}
    <div class="sec-h"><h2>Reports (${reps.length})</h2></div>
    ${reps.length?reps.map(r=>`<div class="panel"><b>${esc(r.reported_name)}</b><p class="hint">${esc(r.reason)}${r.note?' · '+esc(r.note):''} · reported by ${esc(r.reporter_name)} · ${new Date(r.created_at).toLocaleString(RM_I18N.locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}</p><div class="adm-act"><button class="btn ghost sm" data-a="admDismiss" data-id="${r.id}">Dismiss</button><button class="btn danger sm" data-a="admBan" data-id="${r.id}">Ban member</button></div></div>`).join(''):`<p class="hint">No open reports.</p>`}
    <div class="sec-h"><h2>Rude words or money requests (${(a.rude||[]).length})</h2></div>
    ${(a.rude||[]).length?`<p class="hint">These members tried to send or save abusive words, or to ask for money or share payment details, in the last 30 days. It was stopped and nobody saw it.</p>`+(a.rude||[]).map(x=>`<div class="panel"><div class="adm-h"><b class="notr">${esc(x.full_name||'')}</b><small>${esc(x.city||'')} · ${x.tries} ${x.tries===1?'try':'tries'}${x.money_tries?` (${x.money_tries} for money)`:''} · last ${new Date(x.last_at).toLocaleString(RM_I18N.locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}</small></div><div class="adm-act">${x.banned?`<span class="pill">Banned</span>`:`<button class="btn danger sm" data-a="admBanRude" data-id="${esc(x.user_id)}">Ban member</button>`}</div></div>`).join(''):a.loading?'':`<p class="hint">Nobody tried rude words or money requests in the last 30 days.</p>`}
    <div class="sec-h"><h2>Applications (${(a.apps||[]).filter(x=>x.status==='new').length} new)</h2></div>
    ${(a.apps||[]).length?(a.apps||[]).map(x=>{const tel=(x.contact||'').match(/\+?[0-9][0-9 ()-]{6,}/),mail=(x.contact||'').match(/[^\s·]+@[^\s·]+/);
      return `<div class="panel app-row${x.status==='new'?'':' done'}"><div class="adm-h"><b>${esc({host:'Event host',restaurant:'Partner restaurant',bureau:'Matrimonial bureau'}[x.role]||x.role)}${x.org?' · '+esc(x.org):''}</b><small>${esc(x.name||'')} · ${esc(x.city||'')} · ${new Date(x.created_at).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'})}</small></div>
      <p class="hint notr">${esc(x.contact||'')}${x.details?'<br>'+esc(x.details):''}</p>
      <div class="adm-act">${tel?`<a class="btn ghost sm" href="tel:${esc(tel[0].replace(/[^0-9+]/g,''))}">${ic('phone')}Call</a>`:''}${mail?`<a class="btn ghost sm" href="mailto:${esc(mail[0])}">${ic('mail')}Email</a>`:''}${x.status==='new'?`<button class="btn primary sm" data-a="admContacted" data-id="${x.id}" data-k="${x.kind}">Mark contacted</button>`:`<span class="pill">Contacted</span>`}</div></div>`}).join(''):a.loading?'':`<p class="hint">No applications yet.</p>`}
   </div></div></div>`;
}

/* ---------- Sheets ---------- */
function sheetShell(title,body,foot){return `<div class="sheet-wrap"><button class="backdrop" data-a="closeSheet" aria-label="Close"></button><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="grip" aria-hidden="true"></div><div class="sheet-h pad"><h2>${esc(title)}</h2><button class="iconbtn" data-a="closeSheet" aria-label="Close">${ic('x')}</button></div><div class="sheet-b pad" id="sheet-b">${body}</div>${foot?`<div class="sheet-f pad">${foot}</div>`:''}</div></div>`}
function chipGroup(name,opts,cur){return `<div class="chips" role="radiogroup">${opts.map(o=>{const v=typeof o==='string'?o:o.v,l=typeof o==='string'?o:o.l;return `<label class="opt"><input type="radio" name="${name}" value="${esc(v)}" data-sheet="${name}"${cur===v?' checked':''}><span>${esc(l)}</span></label>`}).join('')}</div>`}
const MANAGE_SUB=()=>`<a class="btn ghost" href="https://play.google.com/store/account/subscriptions?sku=${GOLD_PRODUCT}&amp;package=${esc(CFG.appId)}" target="_blank" rel="noopener">${ic('crown')}Manage in Google Play</a>`;
/* Google's multicolour "G", as Google's sign-in branding rules ask for. */
const GLOGO='<svg viewBox="0 0 48 48" width="20" height="20"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
/* Work with NeuMarry: highlighted so members see that we hire hosts and look for restaurants and bureaus. */
function workCard(){return `<div class="panel wwu"><div class="wwu-h"><h3>Work with NeuMarry</h3><span class="pill gold">We’re hiring</span></div>
    <p class="hint">Earn with us in your city. Apply in two minutes.</p>
    <button class="rowi" data-a="hostAsk">${ic('users')}<span class="tx"><b>${S.hostSent?'Host application received':'Become an event host'}</b><span>${S.hostSent?'We reply within 3 working days':'CA$100 for every Family Mixer you host'}</span></span>${ic('chev','rchev')}</button>
    <button class="rowi" data-a="restaurantAsk">${ic('dish')}<span class="tx"><b>${S.restSent?'Restaurant request received':'Partner restaurants'}</b><span>${S.restSent?'Our team will call you':'We bring 30 to 60 paying guests for dinner'}</span></span>${ic('chev','rchev')}</button>
    <button class="rowi" data-a="partnerAsk">${ic('gift')}<span class="tx"><b>${S.partnerSent?'Partner request received':'Matrimonial bureaus'}</b><span>${S.partnerSent?'Our team will call you':'10% of a member’s first purchase, plus ₹1,500 when they get engaged'}</span></span>${ic('chev','rchev')}</button></div>`}
function busyBtn(cls,act,label,attrs){return `<button class="btn ${cls}" data-a="${act}"${attrs||''}${busy?' disabled':''}>${busy===act?spinner(label):label}</button>`}
function renderSheet(){
  const me=S.me,t=sheet.type;
  if(t==='legal'){const L=LEGAL[sheet.k]||LEGAL.terms;return sheetShell(L[0],`<ul class="incl">${L[1].map(x=>`<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul><p class="note">Summary only. <a class="link" href="${esc(CFG.site+(window.RM_I18N&&RM_I18N.lang==='fr'?'fr/':'')+(sheet.k==='privacy'?'privacy.html':'terms.html'))}" target="_blank" rel="noopener">Read the full ${sheet.k==='privacy'?'Privacy Policy':'Terms of Service'}</a>. Version of October 2026.</p>`,`<button class="btn primary block" data-a="closeSheet">Got it</button>`)}
  if(t==='help')return sheetShell('Help and contact',`<p>Write to us any time. We reply within 2 working days.</p>
     <div class="vrow">${ic('mail')}<span class="tx"><b>Email</b><small><a class="link" href="mailto:${esc(CFG.support)}">${esc(CFG.support)}</a></small></span></div>
     <div class="vrow">${ic('shield')}<span class="tx"><b>Grievance Officer</b><small>Swapnil Dinesh Bhagat · ${esc(CFG.support)} · replies within 30 days</small></span></div>
     <div class="vrow">${ic('globe')}<span class="tx"><b>Website</b><small><a class="link" href="${esc(CFG.site)}" target="_blank" rel="noopener">${esc(CFG.site.replace(/^https?:\/\//,''))}</a></small></span></div>
     <p class="hint">To report a member, open their profile, tap the three dots, then Report.</p>`,`<button class="btn primary block" data-a="closeSheet">Done</button>`);
  if(t==='deleteAcct')return sheetShell('Delete your account?',`<p>This permanently deletes your profile, photos, matches, chats and verification uploads. It cannot be undone.</p><p class="hint">If you bought Gold, cancel it in your Google Play account so it does not renew. We keep only what the law requires, such as payment records.</p>`,`<button class="btn ghost" data-a="closeSheet">Keep my account</button>${busyBtn('danger','deleteDo','Delete permanently')}`);
  if(t==='logout')return sheetShell('Log out?',`<p>You can log back in any time with the same ${API.session()&&API.session().user&&/gmail\.com$/.test(API.email())?'Google account or ':''}email.</p>`,`<button class="btn ghost" data-a="closeSheet">Stay</button><button class="btn primary" data-a="logoutDo">Log out</button>`);
  if(t==='host')return sheetShell('Become a NeuMarry host',`<div class="callout gold">${ic('users')}<span>Hosts welcome families, keep time and seat members with their best matches at partner restaurants. You earn <b>CA$100 for every event</b> you host, paid weekly. We give you training, the guest list and everything else.</span></div>
     <label class="fld${S.errors.hcity?' has-err':''}"><span>City</span><input type="text" maxlength="40" data-sheet="city" value="${esc(sheet.city||'')}">${errOf('hcity')}</label>
     <label class="fld${S.errors.hlang?' has-err':''}"><span>Languages you speak</span><input type="text" maxlength="80" data-sheet="lang" value="${esc(sheet.lang||'')}" placeholder="e.g. English, Gujarati, Hindi">${errOf('hlang')}</label>
     <label class="fld"><span>Communities you can bring together</span><input type="text" maxlength="100" data-sheet="comm" value="${esc(sheet.comm||'')}" placeholder="e.g. Gujarati Samaj, temple youth group"></label>
     <div class="fld"><span>Experience</span>${chipGroup('exp',['Community events','Hospitality or events work','Matchmaking or a bureau','New to this'],sheet.exp||'Community events')}</div>
     <label class="fld"><span>Restaurants that could host (optional)</span><input type="text" maxlength="120" data-sheet="rest" value="${esc(sheet.rest||'')}" placeholder="Names of places you know well"></label>
     <label class="ck${S.errors.hok?' has-err':''}"><input type="checkbox" data-sheet="ok"${sheet.ok?' checked':''}><span>I agree to a background check, the host code of conduct, and to keep every guest’s details private.</span></label>${errOf('hok')}`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','hostSend','Send application')}`);
  if(t==='restaurant')return sheetShell('Partner restaurants',`<div class="callout gold">${ic('dish')}<span>Host a NeuMarry Family Mixer on a quiet evening. We bring <b>30 to 60 confirmed guests who have already paid</b>, and the meal is sold by you, at your price. We seat everyone, run the evening and leave your room as we found it.</span></div>
     <label class="fld${S.errors.rorg?' has-err':''}"><span>Restaurant name</span><input type="text" maxlength="60" data-sheet="org" value="${esc(sheet.org||'')}">${errOf('rorg')}</label>
     <label class="fld${S.errors.rcity?' has-err':''}"><span>City</span><input type="text" maxlength="60" data-sheet="city" value="${esc(sheet.city||'')}" placeholder="e.g. Brampton">${errOf('rcity')}</label>
     <label class="fld${S.errors.rname?' has-err':''}"><span>Your name</span><input type="text" maxlength="60" data-sheet="name" value="${esc(sheet.name||'')}">${errOf('rname')}</label>
     <label class="fld${S.errors.rcontact?' has-err':''}"><span>Phone or email</span><input type="text" maxlength="80" data-sheet="contact" value="${esc(sheet.contact||'')}">${errOf('rcontact')}</label>
     <div class="fld"><span>Seats for one private evening</span>${chipGroup('seats',['Up to 30','30 to 50','More than 50'],sheet.seats||'30 to 50')}</div>
     <div class="fld"><span>Food</span>${chipGroup('food',['Vegetarian only','Vegetarian and non-vegetarian','Jain options too'],sheet.food||'Vegetarian and non-vegetarian')}</div>
     <p class="hint">We use these details only to contact you about NeuMarry events.</p>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','restaurantSend','Send')}`);
  if(t==='partner')return sheetShell('Partner with NeuMarry',`<div class="callout gold">${ic('gift')}<span>For matrimonial bureaus. You earn <b>10% of a member’s first purchase</b>, plus <b>₹1,500 when that member gets engaged</b>, once per member. Members always sign up themselves: we never accept lists of other people’s details.</span></div>
     <label class="fld${S.errors.pname?' has-err':''}"><span>Bureau name</span><input type="text" maxlength="60" data-sheet="name" value="${esc(sheet.name||'')}">${errOf('pname')}</label>
     <label class="fld${S.errors.pcity?' has-err':''}"><span>City and country</span><input type="text" maxlength="60" data-sheet="city" value="${esc(sheet.city||'')}" placeholder="e.g. Ahmedabad, India">${errOf('pcity')}</label>
     <label class="fld${S.errors.pcontact?' has-err':''}"><span>Phone or email</span><input type="text" maxlength="80" data-sheet="contact" value="${esc(sheet.contact||'')}">${errOf('pcontact')}</label>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','partnerSend','Send')}`);
  if(t==='engaged'){const p=byId(sheet.id);
    return sheetShell('Congratulations!',`<p>We’re so happy for you and ${esc(p.first||'your match')}. Tell us, and we’ll pause your profile so you can focus on each other.</p>
     <label class="ck"><input type="checkbox" data-sheet="pause"${sheet.pause!==false?' checked':''}><span>Pause my profile</span></label>
     <label class="fld"><span>Your story (optional)</span><textarea maxlength="800" data-sheet="text" placeholder="How you met, the first family call, what made you sure...">${esc(sheet.text||'')}</textarea></label>
     <label class="ck"><input type="checkbox" data-sheet="pub"${sheet.pub?' checked':''}><span>NeuMarry may share our story with our first names. We ask again before using any photo.</span></label>`,
     `<button class="btn ghost" data-a="closeSheet">Not yet</button>${busyBtn('primary','storySend','Share news',` data-id="${p.id}"`)}`)}
  if(t==='filters'){
    const pr=me.prefs,n=matchList().length;
    return sheetShell('Filters',`
     ${pickF('prefs.liveCountry','Where they live','me')}
     ${pr.liveCountry===me.country?pickF('prefs.radius',`Distance from ${esc(myPlace())}`,'me'):''}
     <div class="row2">${pickF('prefs.oc','Their roots: country','me')}${pickF('prefs.os','State / region','me',{disabled:pr.oc==='Any',ph:'Any'})}</div>
     <div class="row2">${pickF('prefs.ageMin','Age from','me')}${pickF('prefs.ageMax','Age to','me')}</div>
     <div class="row2">${pickF('prefs.hMin','Height from','me')}${pickF('prefs.hMax','Height to','me')}</div>
     ${pickF('prefs.religion','Religion','me')}
     ${pickF('prefs.community','Community','me',{disabled:pr.religion==='Any'||!commOf(pr.religion).length,hint:pr.religion==='Any'?'Choose a religion first. Communities change with religion.':''})}
     ${pr.community!=='Any'?pickF('prefs.alsoComm','Also open to these communities','me',{hint:'Widens your matches and who you meet at events.'}):''}
     ${pickF('prefs.tongue','Mother tongue','me')}
     ${pickF('prefs.diet','Diet','me')}
     ${pickF('prefs.timeline','Ready to marry','me',{hint:'From their answer to “How soon do you want to marry?”'})}
     <h3 class="section-t">Trust</h3>
     <div class="panel" style="padding:4px 16px">
      ${toggle('prefs.settled','Citizens and permanent residents only','Hide people on temporary visas or permits',pr.settled,'me')}
     </div>`,
     `<button class="btn ghost" data-a="resetFilters">Reset</button><button class="btn primary" data-a="closeSheet">${S.prefsSaving?spinner('Updating'):`Show ${n} ${n===1?'match':'matches'}`}</button>`);
  }
  if(t==='more'){const p=byId(sheet.id);
    return sheetShell(shown(p),`<div class="rows">
     ${sheet.chat?`<button class="rowi" data-a="safeMeet" data-id="${p.id}">${ic('shield')}<span class="tx"><b>Share my meeting plan</b><span>Send where and when you meet to someone you trust</span></span></button>`:''}
     ${sheet.chat?`<button class="rowi" data-a="engaged" data-id="${p.id}">${ic('heart')}<span class="tx"><b>${S.storyFor[p.id]?'Thank you for sharing':'We’re getting married!'}</b><span>Pause your profile and share your story</span></span></button>`:''}
     <button class="rowi" data-a="report" data-id="${p.id}">${ic('flag')}<span class="tx"><b>Report</b><span>Fake profile, money requests, rude messages</span></span></button>
     <button class="rowi" data-a="block" data-id="${p.id}">${ic('x')}<span class="tx"><b>Block</b><span>They will not see you or contact you again</span></span></button></div>`);}
  if(t==='report'){const p=byId(sheet.id);const reasons=['Fake profile or photos','Asked for money or gifts','Asked for visa or immigration help','Rude or inappropriate messages','Already married or in a relationship','Under 18 or a child safety concern','Something else'];
    return sheetShell('Report '+(p.first||'this member'),`<p class="hint">Reports are private. ${esc(p.first||'They')} will not know who reported them.</p>
     <fieldset class="q${S.errors.reason?' has-err':''}"><legend>What happened?</legend><div class="opts">${reasons.map((r,i)=>`<label class="opt"><input type="radio" name="reason" value="${i}" data-sheet="reason"${sheet.reason===i?' checked':''}><span>${r}</span></label>`).join('')}</div>${errOf('reason')}</fieldset>
     <label class="fld"><span>Details (optional)</span><textarea id="rep-note" maxlength="500" data-sheet="note">${esc(sheet.note||'')}</textarea></label>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('danger','submitReport','Send report',` data-id="${p.id}"`)}`);}
  if(t==='upgrade'){const L=price();const p=sheet.id?byId(sheet.id):null;const pick=sheet.pick||'m3';
    const pr2=p?(p.g==='F'?'her':'his'):'';
    const head={interests:['Send interests with Gold','Free shows who fits you and how well. Gold lets you reach out to them.'],picks:['See today’s 5 picks','Hand-chosen for you every day. Gold reveals all of them.'],
      chat:[p&&p.first?`Start talking to ${p.first}`:'Start talking','Chat opens when either of you has Gold.'],private:['Browse privately','With Gold, people do not see that you viewed them.'],
      profile:[p?`See ${pr2} full profile`:'See full profiles','Name, photos, mindset side by side and every reason you match.'],likes:['See who likes you','Accept and chat with the people who already chose you.'],
      nearby:['See who they are','Every name, photo and profile, plus interests, chat and daily picks.']}[sheet.reason]||['NeuMarry Gold','Everything you need to find your person faster.'];
    const prev=p&&(sheet.reason==='profile'||sheet.reason==='likes')?`<div class="pwprev">${avatar(p,'md')}<span class="tx"><b>${p.age} · ${esc(p.cityName)}</b><span>${esc(p.os)}, ${esc(p.oc)}</span></span><span class="mpct"><b>${compat(p).total}%</b><small>match</small></span></div>`:'';
    if(Bill()&&!store&&!storeLoading)loadStore().then(x=>{if(x&&sheet&&sheet.type==='upgrade')render()});
    const opts=planOpts(),canBuy=!!(Bill()&&store&&store[pick]);
    if(me.plan!=='free')return sheetShell('Your plan',`<div class="callout">${ic('crown')}<span>You have Gold. Everything is unlocked.</span></div>`,me.goldSource==='google'?MANAGE_SUB():'');
    const nLike=PROFILES.filter(x=>baseEligible(x)&&S.interests[x.id]==='received').length;
    return sheetShell('NeuMarry Gold',`<div class="nm-ghero"><span class="cr">${ic('crown')}</span><h3>${nLike?`${nLike} ${nLike===1?'person already likes':'people already like'} you`:esc(head[0])}</h3><p>${nLike?'Gold lets you see who they are and reply. Every one of them is fully verified.':esc(head[1])}</p></div>${prev}
     <div class="plans" role="radiogroup" aria-label="Gold plans">${opts.map(([k,l,tot,pm,tag])=>`<button class="plan pick${pick===k?' on':''}" data-a="pickPlan" data-k="${k}" role="radio" aria-checked="${pick===k}"><span class="ph"><b>${l}</b>${tag?`<span class="pill ${k==='m3'?'gold':'good'}">${tag}</span>`:''}</span><span class="price">${pm}<small> /month</small></span>${k==='m1'?'':`<small class="hint">${tot} billed every ${l}</small>`}</button>`).join('')}</div>
     <ul class="incl">${['Full profiles, names and photos','Send interests and chat','Daily introductions, and see who likes you','Browse privately'].map(x=>`<li>${ic('check')}<span>${x}</span></li>`).join('')}</ul>
     ${BETA?`<div class="callout gold">${ic('gift')}<span><b>Test version:</b> ${canBuy?'testers can switch on Gold for free to try everything, or buy it with Google Play.':'buying opens when NeuMarry launches. Until then, testers can switch on Gold for free to try everything.'}</span></div>`:''}
     <p class="note">Cancel anytime in your Google Play account. Safety features, verification and reporting are always free.</p>`,
     canBuy?`${BETA?busyBtn('ghost','betaGold','Try Gold free'):`<button class="btn ghost" data-a="closeSheet">Not now</button>`}${busyBtn('gold','buyGold',ic('crown')+'Get Gold')}`:
     `<button class="btn ghost" data-a="closeSheet">Not now</button>${BETA?busyBtn('gold','betaGold',ic('crown')+'Try Gold free'):`<button class="btn gold" data-a="buySoon">${ic('crown')}Get Gold</button>`}`);}
  if(t==='verifyGate'){const pendIS=(me.idCheck&&me.idCheck.status==='pending')||(me.selfieCheck&&me.selfieCheck.status==='pending');
    const all=[1,2,3].map(n=>vState(n,{},me)),wait=all.every(x=>x==='ok'||x==='wait'),first=[1,2,3].find(n=>!['ok','wait'].includes(all[n-1]))||1;
    return sheetShell(sheet.ev?'Finish verification to book events':'Finish verification to send interests',`<div class="callout">${ic('shield')}<span>${sheet.ev?'Every guest at a NeuMarry event has proven their ID, their roots and their city. They expect the same from you.':'Everyone you write to has proven their roots and their city. They expect the same from you.'}</span></div>
     <div class="vsteps">${vStep(1,all[0],'ID and live selfie','Passport or national ID, and a selfie.','goVerify')}${vStep(2,all[1],'Your roots','A document from where you grew up.','goVerify')}${vStep(3,all[2],'Where you live now','Your status and your current address.','goVerify')}</div>
     ${wait?'<p class="hint">Your documents are with our team, usually within 24 hours.</p>':`<p class="hint">${WHY_LINE}</p>`}`,`<button class="btn ghost" data-a="closeSheet">Not now</button>${wait?'':`<button class="btn primary" data-a="goVerify" data-n="${first}">Continue</button>`}`)}
  if(t==='book'){const e=evById(sheet.id);const n=sheet.parents;const total=e.priceM+(e.parents?n*(e.priceP||0):0);
    const mealOpts=(e.meals||[]).map(k=>({v:k,l:MEALS[k]||k}));
    return sheetShell('Reserve your seat',`
     <div class="panel" style="gap:10px"><div class="tline"><span class="tx"><b>You</b><small>Member · ${esc(me.name)}</small></span><b>${money(e.priceM,e.cur)}</b></div>
      <div class="fld${S.errors.meal?' has-err':''}"><span>Your dish</span>${chipGroup('meal',mealOpts,sheet.meal)}${errOf('meal')}</div></div>
     ${e.parents?`<div class="panel" style="padding:6px 16px;gap:0"><div class="tline"><span class="tx"><b>Parents</b><small>${money(e.priceP||0,e.cur)} each, dinner included · up to 2</small></span><span class="stepper"><button data-a="bookMinus" aria-label="One fewer parent"${n<=0?' disabled':''}>−</button><b aria-live="polite">${n}</b><button data-a="bookPlus" aria-label="One more parent"${n>=2?' disabled':''}>+</button></span></div></div>`:''}
     ${[0,1].slice(0,n).map(i=>`<div class="panel" style="gap:10px"><b>Parent ${i+1}</b>
      <label class="fld${S.errors['p'+i+'name']?' has-err':''}"><span>Name for the guest list</span><input id="bk-p${i}" type="text" maxlength="40" data-sheet="p${i}name" value="${esc(sheet.p[i].name)}" autocomplete="off">${errOf('p'+i+'name')}</label>
      ${chipGroup('p'+i+'rel',['Mother','Father','Guardian'],sheet.p[i].rel)}
      <div class="fld${S.errors['p'+i+'meal']?' has-err':''}"><span>Dish</span>${chipGroup('p'+i+'meal',mealOpts,sheet.p[i].meal)}${errOf('p'+i+'meal')}</div></div>`).join('')}
     <div class="panel" style="gap:8px">
      <div class="sumrow"><span>Member × 1</span><span>${money(e.priceM,e.cur)}</span></div>
      ${n?`<div class="sumrow"><span>Parents × ${n}</span><span>${money(n*(e.priceP||0),e.cur)}</span></div>`:''}
      <div class="sumrow total"><span>Total if confirmed</span><span>${money(total,e.cur)}</span></div></div>
     <p class="note">${holdOn(e)?holdNote(e)+' Prices before tax.':'Nothing is charged now. When the event is confirmed you pay in the app; dinner is included and nothing is paid at the restaurant. Prices before tax.'}</p>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','reserve',holdOn(e)?`Reserve and pay ${money(e.hold,e.cur)}`:'Reserve free')}`);}
  if(t==='cancelRes'){const e=evById(sheet.id);return sheetShell('Cancel your reservation?',`<p>Your seat at the ${esc(e.title)} goes back to other members. ${e.my&&e.my.holdPaid?`The ${money(e.my.holdPaid,e.cur)} seat hold is not refunded.`:'Nothing was charged.'}</p>`,`<button class="btn ghost" data-a="closeSheet">Keep my seat</button>${busyBtn('danger','cancelDo','Cancel reservation',` data-id="${e.id}"`)}`);}
  return '';
}

/* ---------- Render ---------- */
const app=document.getElementById('app');app.addEventListener('scroll',()=>{if(app.scrollTop||app.scrollLeft){app.scrollTop=0;app.scrollLeft=0}});
let prevSheet='',prevView='',prevPick='';
function navCounts(){const recv=PROFILES.filter(p=>baseEligible(p)&&S.interests[p.id]==='received').length;
  const unread=Object.keys(S.unread).reduce((a,k)=>a+(S.interests[k]==='mutual'&&!S.blocked.includes(k)&&!S.reported.includes(k)?S.unread[k]||0:0),0);
  return {conn:recv+unread,ev:events().filter(e=>e.my&&e.my.status==='pay_due').length}}
function render(){
  const keep={};['main','su-scroll','view-scroll','sheet-b','pick-list'].forEach(id=>{const el=document.getElementById(id);if(el)keep[id]=el.scrollTop});
  const pk0=document.querySelector('.picks');const picksLeft=pk0?pk0.scrollLeft:0;
  const ae=document.activeElement, aeId=ae&&ae.id, chatVal=(document.getElementById('chat-in')||{}).value;
  const cs0=document.getElementById('chat-scroll');const chatAtEnd=!cs0||cs0.scrollHeight-cs0.scrollTop-cs0.clientHeight<40;
  let html='';
  if(S.screen==='boot')html=renderBoot();
  else if(S.screen==='welcome'){html=renderWelcome();if(sheet)html+=renderSheet()}
  else if(S.screen==='auth'){html=renderAuth();if(sheet)html+=renderSheet()}
  else if(S.screen==='signup'){html=renderSignup();if(sheet)html+=renderSheet();if(picker)html+=renderPicker()}
  else{
    const c=navCounts();
    const tabs={matches:renderMatches,events:renderEvents,connections:renderConnections,me:renderMe};
    html=(tabs[S.tab]||renderMatches)()+
    `<div class="navwrap"><nav class="nav n4" aria-label="Main">${[['matches','Matches','rings'],['events','Events','cal',c.ev],['connections','Chats','chat',c.conn],['me','Me','user']].map(([k,l,i,n])=>
      `<button data-a="tab" data-k="${k}" class="${S.tab===k?'on':''}" aria-current="${S.tab===k?'page':'false'}">${ic(i)}<span>${l}</span>${n?`<span class="count-dot" aria-label="${n} new">${n}</span>`:''}</button>`).join('')}</nav></div>`;
    if(view)html+=view.type==='chat'?renderChatView(view.id):view.type==='event'?renderEventView(view.id):view.type==='admin'?renderAdmin():view.type==='host'?renderHostView(view.id):renderProfileView(view.id,view.type==='me');
    if(sheet)html+=renderSheet();
    if(picker)html+=renderPicker();
    if(celebrate)html+=renderCelebrate();
  }
  const t=document.querySelector('.toast');
  app.innerHTML=html;
  if(CFG.web&&S.screen==='auth')gsiAfterRender();else if(CFG.web&&S.screen==='welcome')gsiInit(); /* load Google's button early */
  if(t){t.classList.add('still');app.appendChild(t)}
  const sk=sheet?sheet.type+(sheet.id||''):'',vk=view?view.type+(view.id||''):'',pk=picker?picker.k:'';
  if(sk&&sk===prevSheet){const w=app.querySelector('.sheet-wrap:not(.picker-wrap)');if(w)w.classList.add('still')}
  if(vk&&vk===prevView){const w=app.querySelector('.view');if(w)w.classList.add('still')}
  if(pk&&pk===prevPick){const w=app.querySelector('.picker-wrap');if(w)w.classList.add('still')}
  const newChat=vk!==prevView;
  prevSheet=sk;prevView=vk;prevPick=pk;justRevealed=null;
  afterRenderEvents(vk);
  Object.keys(keep).forEach(id=>{const el=document.getElementById(id);if(el)el.scrollTop=keep[id]});
  const pk1=document.querySelector('.picks');if(pk1)pk1.scrollLeft=picksLeft;
  const tabOn=app.querySelector('.steps-nav button.on');if(tabOn){const nv=tabOn.parentNode;nv.scrollLeft=tabOn.offsetLeft-nv.offsetLeft-nv.clientWidth/2+tabOn.offsetWidth/2}
  const ci=document.getElementById('chat-in');if(ci&&chatVal)ci.value=chatVal;
  const cs=document.getElementById('chat-scroll');if(cs&&(newChat||chatAtEnd))cs.scrollTop=cs.scrollHeight;
  if(aeId){const el=document.getElementById(aeId);if(el&&el!==document.activeElement&&/^(INPUT|TEXTAREA|BUTTON|SELECT)$/.test(el.tagName))try{el.focus({preventScroll:true})}catch(e){}}
}

/* Events for the team (29 Oct, his rule): seats + waiting list, and "Move date" when an event is not full in time. */
const DECIDE_DAYS=7;
function evTz(e){return TZCITY[e.city]||TZC[e.country]||'UTC'}
function dateInputVal(d,tz){return new Date(d).toLocaleDateString('en-CA',{timeZone:tz||'UTC'})}
function citiesBlock(a){const cs=a.cities||[],om=a.online||[];if(!cs.length&&!om.length&&!(a.events||[]).length)return '';
  return `<div class="sec-h"><h2>Cities asking for events (${cs.length})</h2></div><p class="hint" style="margin:-6px 0 0">A city is ready at 30 women + 30 men. Then the team gets an email and every voter gets one too.</p>
  ${cs.map(c=>`<div class="panel adm"><div class="adm-h"><b>${esc(c.city)} · ${esc(c.country)}</b><small>${c.women} women · ${c.men} men · tickets in ${esc(c.currency)}${c.currency==='USD'&&c.country!=='United States'?' (PayPal does not take the local money)':''}</small></div>
   <span class="pill ${c.ready?'good':''}">${c.ready?`Ready since ${esc(new Date(c.reached_at).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'}))} · emails ${c.mails_sent} of ${c.mails_total}`:`${c.women+c.men} of 60`}</span>
   ${c.ready?c.event_id?`<p class="hint">Draft Family Mixer made (${esc(c.event_status||'draft')}). Add the restaurant and host, check tax with the accountant, then open it.</p>`:`<div class="adm-act"><button class="btn primary sm" data-a="admOpenCity" data-c="${esc(c.city)}" data-co="${esc(c.country)}"${busy==='oc'+c.city?' disabled':''}>${ic('cal')}Make a draft Family Mixer here</button></div>`:''}</div>`).join('')}
  <div class="sec-h"><h2>Online Family Mixer</h2></div>
  ${om.map(m=>`<div class="panel adm"><div class="adm-h"><b>${esc(m.country)}</b><small>${esc(new Date(m.starts_at).toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'}))} (your time) · ${m.on_list} on the list</small></div></div>`).join('')}
  <div class="panel adm"><div class="fld"><span>Country</span><input id="om-co" placeholder="Brazil" style="width:100%;box-sizing:border-box"></div>
   <div class="fld"><span>Date and time (your phone's time)</span><input id="om-st" type="datetime-local" style="width:100%;box-sizing:border-box;min-width:0"></div>
   <div class="fld"><span>Google Meet link</span><input id="om-url" placeholder="https://meet.google.com/abc-defg-hij" style="width:100%;box-sizing:border-box"></div>
   <p class="hint">Everyone on that country's list gets an email with the date. The link shows only in the app, only to verified members on the list, from 1 hour before.</p>
   <div class="adm-act"><button class="btn primary sm" data-a="admSetOnline"${busy==='om'?' disabled':''}>${ic('check')}Save and email the list</button></div></div>`}
function eventsBlock(list){if(!list.length)return '';
  return `<div class="sec-h"><h2>Events (${list.length})</h2></div><p class="hint" style="margin:-6px 0 0">An event is confirmed only when every seat and the waiting list are full.</p>
  ${list.map(e=>{const d=new Date(e.starts_at),need=e.seats_women+e.seats_men+e.wait_women+e.wait_men,have=e.seated_w+e.seated_m+Math.min(e.waiting_w,e.wait_women)+Math.min(e.waiting_m,e.wait_men);
    return `<div class="panel adm ev-adm"><div class="adm-h"><b>${esc(e.title)} · ${esc(e.city)}</b><small>${esc(d.toLocaleString(RM_I18N.locale,{weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',timeZone:evTz(e)}))} ${esc(e.city)} time${e.postponed_from?` · moved from ${esc(new Date(e.postponed_from).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',timeZone:evTz(e)}))}`:''}</small></div>
     <div class="seats"><span>Women: ${e.seated_w} of ${e.seats_women} seats · waiting list ${e.waiting_w} of ${e.wait_women}</span><span class="sb"><i style="width:${Math.round(Math.min(1,(e.seated_w+e.waiting_w)/(e.seats_women+e.wait_women||1))*100)}%"></i></span></div>
     <div class="seats"><span>Men: ${e.seated_m} of ${e.seats_men} seats · waiting list ${e.waiting_m} of ${e.wait_men}</span><span class="sb"><i style="width:${Math.round(Math.min(1,(e.seated_m+e.waiting_m)/(e.seats_men+e.wait_men||1))*100)}%"></i></span></div>
     <span class="pill ${e.status==='confirmed'?'good':e.needs_new_date?'bad':''}">${e.status==='confirmed'?'Confirmed':e.needs_new_date?`Not full in time: ${have} of ${need}. Needs a new date`:`Filling: ${have} of ${need}`}</span>
     ${e.status==='open'?`<div class="fld"><span>New date in ${esc(e.city)} (talk to the restaurant first)</span><input type="date" style="width:100%;box-sizing:border-box;min-width:0" id="mv-${e.id}" data-tz="${esc(evTz(e))}" value="${dateInputVal(e.suggested,evTz(e))}" min="${dateInputVal(Date.now()+(DECIDE_DAYS+2)*864e5,evTz(e))}"></div>
     <p class="hint">Same time of day. All ${e.enrolled} enrolled ${e.enrolled===1?'person gets':'people get'} an email with the new date. Nobody has paid yet.</p>
     <div class="adm-act"><button class="btn ${e.needs_new_date?'primary':'ghost'} sm" data-a="admMoveEvent" data-id="${e.id}" data-t="${esc(e.starts_at)}"${busy==='mv'+e.id?' disabled':''}>${ic('cal')}Move date and email everyone</button></div>`:''}</div>`}).join('')}`}
let CITYADM=[[],[]];
/* ---------- Saving to the server ---------- */
function digitsOnly(s){return String(s||'').replace(/\D/g,'')}
function fullPhone(d){const dg=digitsOnly(d.phone);if(!dg)return null;const code=digitsOnly(dial(d.country));return '+'+(code&&!dg.startsWith(code)?code:'')+dg}
function profileRow(d){const co=coordsOf(d)||[null,null];const cons=readConsent();
  return {full_name:d.name.trim().replace(/\s+/g,' '),gender:d.g,looking_for:d.lookingFor,dob:d.dob,height_cm:+d.h,marital:d.marital,created_by:d.createdBy,
    origin_country:d.oc,origin_state:d.os,mother_tongue:d.t,religion:d.r,community:d.c||null,show_community:!!d.privacy.showC,
    country:d.country,state:d.state||null,city:d.city,city_lat:co[0],city_lng:co[1],residency:d.res,relocate:d.reloc,job:d.job.trim(),education:d.edu.trim(),about:d.about.trim(),
    diet:d.diet,smoke:d.sm,drink:d.dr,answers:d.ans.map(Number),blur_photos:!!d.privacy.blur,phone:fullPhone(d),
    marketing_ok:!!cons.mkt,terms_version:'2026-10',terms_at:cons.at||new Date().toISOString()}}
function prefsRow(pr,uid){return {user_id:uid,age_min:+pr.ageMin,age_max:+pr.ageMax,h_min:+pr.hMin,h_max:+pr.hMax,live_country:pr.liveCountry,radius_km:+pr.radius||0,
  origin_country:pr.oc,origin_state:pr.os,religion:pr.religion,community:pr.community,also_communities:pr.alsoComm||[],tongue:pr.tongue,diet:pr.diet,timeline:pr.timeline||'Any',settled_only:!!pr.settled,verified_only:!!pr.verifiedOnly}}
function saveConsent(a){try{localStorage.setItem('rm.consent',JSON.stringify({mkt:!!a.mkt,at:new Date().toISOString()}))}catch(e){}}
function readConsent(){try{return JSON.parse(localStorage.getItem('rm.consent')||'{}')||{}}catch(e){return {}}}
async function sha256(blob){try{const buf=await blob.arrayBuffer();const h=await crypto.subtle.digest('SHA-256',buf);return Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')}catch(e){return null}}
async function uploadPhoto(blob){const uid=API.userId();const path=`${uid}/${uuid()}.jpg`;const sum=await sha256(blob);
  if(sum){const dup=(S.me&&S.me.photos||[]).find(x=>x.sha===sum);if(dup)return}
  await API.upload('photos',path,blob);
  let row=null;
  try{const rows=await API.insert('photos',{user_id:uid,path,position:0,sha256:sum});row=rows&&rows[0]}
  catch(e){try{await API.removeFile('photos',path)}catch(x){}if(e.status===409||/23505|duplicate/.test(e.code||''))throw new API.ApiError('dup_photo','This photo is already used on another NeuMarry account. Choose a different photo.');throw e}
  // Automatic check (Google SafeSearch). If it cannot answer, the team still reviews every photo.
  if(row&&row.id){let r=null;try{r=await Promise.race([API.fn('photo-check',{photoId:row.id}),new Promise(ok=>setTimeout(()=>ok(null),12000))])}catch(e){r=null}
    if(r&&r.status==='rejected')throw new API.ApiError('photo_rejected','This photo was not accepted because it looks inappropriate. Choose a clear, decent photo of your own face.')}
  // The new photo replaces the old ones.
  const old=(S.me&&S.me.photos||[]).filter(x=>x.path!==path);
  for(const o of old){try{await API.remove('photos',{id:'eq.'+o.id});await API.removeFile('photos',o.path)}catch(x){}}
}
async function uploadCheck(kind,blob,name,type){const uid=API.userId();let path=null;
  if(blob){const ext=kind!=='selfie'&&/pdf$/i.test(blob.type||name||'')?'pdf':'jpg';path=`${uid}/${kind}-${uuid()}.${ext}`;await API.upload('verification',path,blob)}
  const rows=await API.insert('verifications',{user_id:uid,kind,path,id_type:(type||(kind==='id'?name:'')||'').slice(0,60)||null});
  /* Google Cloud Vision reads the ID (name, birth date, face) for the team; never blocks the member. */
  const vid=Array.isArray(rows)&&rows[0]&&rows[0].id;
  if(kind==='id'&&vid&&blob&&!/pdf/i.test(blob.type||'')&&blob.size<8e6){try{const fr=new FileReader();fr.onload=()=>{const b=String(fr.result||'').split(',')[1]||'';if(b)API.fn('id-check',{verificationId:vid,image:b}).catch(()=>{})};fr.readAsDataURL(blob)}catch(e){}}
}
async function uploadAll(d){const errs=[];
  if(d.photoBlob){S.saveMsg='Uploading your photo';render();try{await uploadPhoto(d.photoBlob);d.photoBlob=null}catch(e){errs.push(e.message)}}
  if(d.idBlob){S.saveMsg='Sending your ID';render();try{await uploadCheck('id',d.idBlob,d.idName);d.idBlob=null}catch(e){errs.push('Your ID did not upload. '+e.message)}}
  if(d.selfieBlob){S.saveMsg='Sending your selfie';render();try{await uploadCheck('selfie',d.selfieBlob,'selfie');d.selfieBlob=null}catch(e){errs.push('Your selfie did not upload. '+e.message)}}
  if(d.rootsType&&(d.rootsType==='id'||d.rootsBlob)){S.saveMsg='Sending your roots document';render();try{await uploadCheck('roots',d.rootsType==='id'?null:d.rootsBlob,d.rootsName,d.rootsType==='id'?'Same as my ID':d.rootsType);d.rootsBlob=null;d.rootsType=''}catch(e){errs.push('Your roots document did not upload. '+e.message)}}
  if(d.statusType&&d.statusBlob){S.saveMsg='Sending your status document';render();try{await uploadCheck('status',d.statusBlob,d.statusName,d.statusType);d.statusBlob=null;d.statusType=''}catch(e){errs.push('Your status document did not upload. '+e.message)}}
  if(d.addrType&&d.addrBlob){S.saveMsg='Sending your address document';render();try{await uploadCheck('address',d.addrBlob,d.addrName,d.addrType);d.addrBlob=null;d.addrType=''}catch(e){errs.push('Your address document did not upload. '+e.message)}}
  if(d.loc){try{await API.rpc('check_location',{lat:d.loc.lat,lng:d.loc.lng})}catch(e){}d.loc=null}
  return errs}
let prefsT=null;
function queuePrefsSave(){clearTimeout(prefsT);S.prefsSaving=true;prefsT=setTimeout(async()=>{try{await API.insert('preferences',prefsRow(S.me.prefs,S.me.id),{upsert:true,returning:false});await loadCards()}catch(e){fail(e)}S.prefsSaving=false;render()},500)}
async function savePrivacy(){const me=S.me;try{await API.update('profiles',{id:'eq.'+me.id},{blur_photos:!!me.privacy.blur,show_community:!!me.privacy.showC,incognito:!!me.privacy.incognito,hidden:me.privacy.vis==='hidden'})}catch(e){fail(e);await loadMe();render()}}

/* ---------- Flow helpers ---------- */
function needVerified(ev){const ok=verified();if(!ok){sheet={type:'verifyGate',ev:!!ev};render();return true}return false}
function startSignup(){if(!readConsent().at){S.auth={mode:'consent'};S.errors={};S.screen='auth';render();return}const saved=loadDraft();S.draft=saved?Object.assign(blankDraft(),saved.d,{photo:null,photoBlob:null,idBlob:null,selfieBlob:null,selfie:null,idName:'',rootsBlob:null,rootsName:'',statusBlob:null,statusName:'',addrBlob:null,addrName:'',loc:null,vs:0}):blankDraft();
  S.step=saved?Math.min(saved.step||1,6):1;S.editMode=false;S.errors={};S.screen='signup';render()}
function openEdit(step){const me=S.me;const d=clone(Object.assign({},me,{photo:me.photo}));d.phone=me.phone?digitsOnly(me.phone).replace(new RegExp('^'+digitsOnly(dial(me.country))),''):'';
  d.photoBlob=null;d.idBlob=null;d.selfieBlob=null;d.selfie=null;d.idName='';
  Object.assign(d,{rootsType:'',rootsBlob:null,rootsName:'',statusType:'',statusBlob:null,statusName:'',addrType:'',addrBlob:null,addrName:'',loc:null,vs:0,tzAck:me.country});
  S.draft=d;S.editMode=true;S.step=step||1;S.errors={};view=null;sheet=null;picker=null;S.screen='signup';render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0}
/* Sign-up progress (28 Oct): the server keeps only the step reached, its time and the phone's time zone, so the team can help people who get stuck. */
let notedStep=0;
function noteStep(n){if(S.editMode||!API.session()||n===notedStep)return;notedStep=n;
  let tz=null;try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}
  API.rpc('note_signup_step',{n,tz,lang:(navigator.language||'').slice(0,20)}).catch(()=>{notedStep=0})}
function goStep(n){S.step=n;S.errors={};save();render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0}
function showErrors(){render();const first=document.querySelector('.has-err');if(first){const sc=first.closest('.scroll,.sheet-b');if(sc){const r=first.getBoundingClientRect(),cr=sc.getBoundingClientRect();sc.scrollTop+=r.top-cr.top-cr.height/3}const f=first.querySelector('input,textarea,.pick');if(f)try{f.focus({preventScroll:true})}catch(e){}}}
const fine=()=>window.matchMedia('(pointer:fine)').matches;
async function refreshCards(ids){if(!ids.length)return;const got=await API.rpc('member_cards',{only_ids:ids,lim:400,off:0});(got||[]).map(cardFromServer).forEach(c=>{const i=PROFILES.findIndex(p=>p.id===c.id);if(i>=0){c.fits=PROFILES[i].fits;PROFILES[i]=c}else PROFILES.push(c)});
  await signPaths(PROFILES.filter(p=>ids.includes(p.id)).flatMap(p=>p.photoPaths.slice(0,3)));attachPhotos()}
/* Google Play purchases: the server checks each one with Google before Gold switches on. */
function billingError(c){return c==='billing_3'?'Google Play billing is not available on this phone. Update the Google Play Store app and try again.':c==='billing_2'||c==='billing_12'?'No connection to Google Play. Check your internet connection and try again.':'Google Play could not complete the purchase. Please try again.'}
function verifyPurchase(p){return API.fn('play-verify',{purchaseToken:p.purchaseToken,productId:GOLD_PRODUCT})}
let restoring=false;
async function restorePurchases(loud){const B=Bill();if(!B||!S.me||restoring)return;restoring=true;
  try{const r=await B.restore();const list=((r&&r.purchases)||[]).filter(p=>(p.products||[]).includes(GOLD_PRODUCT)&&p.state===1);
    if(!list.length){if(loud)toast('No Gold purchase found on this Google account.','info');return}
    const todo=loud?list:list.filter(p=>!p.acknowledged||S.me.plan==='free');let got=false,err=null;
    for(const p of todo){try{const v=await verifyPurchase(p);if(v&&v.entitled)got=true}catch(e){err=e;console.warn('[billing] verify',e&&e.code)}}
    if(!todo.length)return;
    const was=S.me.plan;await loadMe();
    if(S.me.plan!==was){await loadCards();render();if(S.me.plan!=='free')toast('Your Gold is active.','crown')}
    else if(loud){if(err&&!got)fail(err);else toast('Your Gold is active.','crown')}
  }catch(e){console.warn('[billing] restore',e&&(e.code||e.message));if(loud)toast(billingError(String((e&&e.code)||'')),'info')}
  finally{restoring=false}}
async function afterLogin(){
  loadLocal();S.bootError='';
  /* Instant open: show the last data kept on this phone at once, then refresh it. */
  const warm=S.screen!=='app'&&cacheLoad();
  if(warm){S.screen='app';if(!['matches','events','connections','me'].includes(S.tab))S.tab='matches';S.loaded=true;render();console.info('[boot] warm start')}
  try{
    /* Faster start (29 Oct): blocks and events do not need my profile, so load them while it loads. */
    const pre=Promise.all([loadBlocks().catch(()=>{}),loadEvents().catch(()=>{})]);
    const me=await loadMe();
    if(!me){cacheClear();startSignup();return}
    if(me.banned){cacheClear();await API.signOut();S=fresh();S.screen='welcome';render();toast('This account has been suspended. Write to us if you think this is a mistake.','shield');return}
    S.screen='app';if(!['matches','events','connections','me'].includes(S.tab))S.tab='matches';render();
    await Promise.all([loadCards(),loadMessages(),pre]);ensureMatchChats();S.loaded=true;render();cacheSave();loadInvite();restorePurchases(false);
    API.rpc('touch_seen').catch(()=>{});
  }catch(e){
    if(e.code==='signed_out'){cacheClear();S=fresh();S.screen='welcome';render();return}
    if(warm&&S.screen==='app'){toast(e.code==='network'?'No internet connection. Showing what was saved on this phone.':'NeuMarry could not refresh. Pull down or try again soon.','info');return}
    S.screen='boot';S.bootError=e.code==='network'?'No internet connection. Check your connection and try again.':'NeuMarry could not load. Please try again.';render();
  }
}
async function signedOut(msg){cacheClear();view=null;sheet=null;picker=null;celebrate=null;PROFILES=[];lastMsg=0;Object.keys(URLS).forEach(k=>delete URLS[k]);S=fresh();S.screen='welcome';render();if(msg)toast(msg,'info')}
API.onSignedOut=()=>signedOut('Please log in again.');

/* ---------- Actions ---------- */
const A={
  retryBoot(){boot()},
  lang(){RM_I18N.set(RM_I18N.lang==='fr'?'en':'fr');render()},
  start(){S.auth={mode:'signup'};S.errors={};S.screen='auth';sheet=null;render()},
  login(){S.auth={mode:'login'};S.errors={};S.screen='auth';sheet=null;render()},
  authMode(el){S.auth={mode:el.dataset.k};S.errors={};render()},
  authBack(){if(S.auth&&S.auth.method){S.auth.method=null;S.errors={};render();return}if(S.auth&&S.auth.mode==='reset'){S.auth=null;afterLogin();return}if(S.auth&&S.auth.mode==='consent'){sheet={type:'logout'};render();return}S.auth=null;S.errors={};S.screen='welcome';render()},
  authGo(el){const a=S.auth;if(a.mode==='signup'&&!(a.c18&&a.terms)){S.errors={consent:'Tick both boxes to continue. The marketing box is optional.'};render();const c=document.getElementById('consent');if(c)c.scrollIntoView({block:'center'});return}
    S.errors={};const k=el.dataset.k;if(a.mode==='signup')saveConsent(a);
    if(k==='google'){googleSignIn();return}
    a.method=k;render();const f=document.getElementById('au-email');if(f&&fine())f.focus({preventScroll:true})},
  consentGo(){const a=S.auth;if(!(a.c18&&a.terms)){S.errors={consent:'Tick both boxes to continue. The marketing box is optional.'};render();return}saveConsent(a);S.auth=null;S.errors={};startSignup()},
  pwShow(){S.auth.show=!S.auth.show;render()},
  async forgotPw(){const a=S.auth;const em=(a.email||'').trim().toLowerCase();if(!EMAILRX.test(em)){S.errors={email:'Enter your email first'};render();return}S.errors={};
    busy='auth';render();try{await API.recover(em);S.auth={mode:'sent',sentText:`If ${em} has a NeuMarry account, we have sent a link to choose a new password. Open it on this phone.`}}catch(e){fail(e)}busy='';render()},
  async authEmail(){const a=S.auth,su=a.mode==='signup',e={};const em=(a.email||'').trim().toLowerCase();
    if(!EMAILRX.test(em))e.email='Enter a valid email, like name@example.com';
    if(su){if(pwChecks(a.pw||'',a).some(x=>!x[1]))e.pw='Your password needs to meet every rule above';else if((a.pw2||'')!==(a.pw||''))e.pw2='The passwords do not match'}
    else if(!(a.pw||''))e.pw='Enter your password';
    S.errors=e;if(Object.keys(e).length){render();return}
    busy='auth';render();
    try{
      if(su){const r=await API.signUp(em,a.pw);if(!r.session){busy='';S.auth={mode:'sent',sentText:`We sent a link to ${em}. Open it on this phone to confirm your email, then log in.`};render();return}}
      else await API.signIn(em,a.pw);
      busy='';S.auth=null;await afterLogin();if(su)toast('Account created. Now your profile.','check');
    }catch(err){busy='';if(err.code==='invalid_credentials')S.errors={pw:err.message};else if(err.code==='user_already_exists')S.errors={email:err.message};else fail(err);render()}},
  async authNewPw(){const a=S.auth,e={};if(pwChecks(a.pw||'',{email:API.email()}).some(x=>!x[1]))e.pw='Your password needs to meet every rule above';else if((a.pw2||'')!==(a.pw||''))e.pw2='The passwords do not match';
    S.errors=e;if(Object.keys(e).length){render();return}busy='auth';render();
    try{await API.updatePassword(a.pw);busy='';S.auth=null;toast('Password changed.','check');await afterLogin()}catch(err){busy='';fail(err);render()}},
  legal(el){sheet={type:'legal',k:el.dataset.k};render()},
  helpOpen(){sheet={type:'help'};render()},
  celeGo(){const st=S.cele;S.cele=null;goStep(st+1)},
  suCont(){const n=S.suInter==='reward'?5:2;S.suInter=null;goStep(n)},
  chipSet(el){applyChange('draft',el.dataset.k,el.dataset.v);render()},
  traitTap(el){const d=S.draft,k=el.dataset.k;let t=(d.traits||[]).slice();const i=t.indexOf(k);if(i>=0)t.splice(i,1);else{if(t.length>=3)t.shift();t.push(k)}d.traits=t;if(!d.aboutEdited)d.about=autoAbout(d);delete S.errors.about;render()},
  qAns(el){const d=S.draft;d.ans[+el.dataset.i]=+el.dataset.j;delete S.errors['ans.'+el.dataset.i];save();render()},
  qBack(){const d=S.draft;const qi=d.ans.findIndex(x=>x===null||x===undefined);if(qi>0){d.ans[qi-1]=null;render()}},
  univSet(el){S.draft.college=el.dataset.v;S.univType=false;render()},
  univType(){S.univType=true;render();const f=document.getElementById('f-college');if(f)f.focus()},
  suBack(){if(S.suInter){S.suInter=null;render();return}if(S.editMode){if(S.step>1)goStep(S.step-1);else A.suCancel();return}if(S.step>1)goStep(S.step-1);else{sheet={type:'logout'};render()}},
  suJump(el){goStep(+el.dataset.n)},
  async suNext(){const e=validateStep(S.step,S.draft);S.errors=e;if(Object.keys(e).length){showErrors();return}
    if(!S.editMode&&(S.step===2||S.step===3||S.step===5)){S.cele=S.step;render();return}
    if(!S.editMode&&(S.step===1||S.step===4)&&!S.draft['seen'+S.step]){S.draft['seen'+S.step]=1;S.suInter=S.step===1?'journey':'reward';save();render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0;return}
    if(S.step<6){goStep(S.step+1);return}
    if(busy)return;busy='save';S.saveMsg='Saving your profile';render();
    const d=S.draft,uid=API.userId();
    try{
      await API.insert('profiles',Object.assign({id:uid},profileRow(d)),{upsert:true,returning:false});
      await API.insert('preferences',prefsRow(d.prefs||defaultPrefs(d),uid),{upsert:true,returning:false});
    }catch(err){busy='';render();fail(err,'signup');return}
    const errs=await uploadAll(d);
    try{await loadMe()}catch(err){}
    busy='';S.saveMsg='';clearDraft();S.draft=null;S.screen='app';S.tab='matches';S.errors={};render();
    try{await loadAll()}catch(err){}
    render();
    if(errs.length){toast(errs[0],'info')}else toast(S.me&&S.me.idCheck&&S.me.selfieCheck&&S.me.rootsCheck&&S.me.statusCheck&&S.me.addrCheck?'Your profile is saved. Our team checks your photo and documents within 24 hours.':'Your profile is saved. Finish your checks from Me to start sending interests.','heart')},
  async suSave(){if(busy)return;for(let s=1;s<=6;s++){const e=validateStep(s,S.draft);if(Object.keys(e).length){S.errors=e;S.step=s;showErrors();toast('Fix the highlighted fields first.','info');return}}
    busy='save';render();const d=S.draft;
    try{const row=profileRow(d);delete row.terms_version;delete row.terms_at;delete row.marketing_ok;
      await API.update('profiles',{id:'eq.'+S.me.id},row);
      await API.insert('preferences',prefsRow(d.prefs,S.me.id),{upsert:true,returning:false});
    }catch(err){busy='';render();fail(err,'profile');return}
    const errs=await uploadAll(d);
    try{await loadMe();await loadCards()}catch(err){}
    busy='';S.draft=null;S.editMode=false;S.screen='app';S.tab='me';S.errors={};render();toast(errs.length?errs[0]:'Profile saved.',errs.length?'info':'check')},
  suCancel(){S.draft=null;S.editMode=false;S.errors={};S.screen='app';render()},
  pick(el){picker={k:el.dataset.k,t:el.dataset.t,q:''};render();const q=document.getElementById('pick-q');if(q&&fine())q.focus({preventScroll:true});
    const on=document.querySelector('#pick-list .prow.on');if(on){const l=document.getElementById('pick-list');l.scrollTop=Math.max(0,on.offsetTop-l.clientHeight/2)}},
  pickClose(){picker=null;render()},
  pickSet(el){if(!picker)return;const def=pickerDef(picker.k,picker.t);let v=el.dataset.v;
    if(def.multi){const o=picker.t==='me'?S.me:S.draft;const a=(getPath(o,picker.k)||[]).slice();const i=a.indexOf(v);if(i>=0)a.splice(i,1);else a.push(v);applyChange(picker.t,picker.k,a);const l=document.getElementById('pick-list');const st=l?l.scrollTop:0;render();const l2=document.getElementById('pick-list');if(l2)l2.scrollTop=st;return}if(def.num)v=+v;applyChange(picker.t,picker.k,v);const k=picker.k;picker=null;render();
    const b=document.getElementById('pk-'+k.replace(/\./g,'-'));if(b&&fine())b.focus({preventScroll:true})},
  async admOpenCity(el){const c=el.dataset.c,co=el.dataset.co;busy='oc'+c;render();try{await API.rpc('admin_open_city',{c,co});toast('Draft Family Mixer made in '+c,'check');loadAdmin()}catch(e){toast('Could not make it. Try again.')}busy='';render()},
  async admSetOnline(){const co=(document.getElementById('om-co')||{}).value||'',st=(document.getElementById('om-st')||{}).value||'',url=((document.getElementById('om-url')||{}).value||'').trim();
    if(!co.trim()||!st||!/^https:\/\/meet\.google\.com\/[a-z0-9-]+$/i.test(url)){toast('Country, date and a Google Meet link are needed');return}
    busy='om';render();try{await API.rpc('admin_set_online',{co:co.trim(),st:new Date(st).toISOString(),url});toast('Saved. The list gets an email','check');loadAdmin()}catch(e){toast(String(e&&e.message||'').includes('too_soon')?'Pick a date at least 1 day ahead':'Could not save. Try again.')}busy='';render()},
  async cityVote(el){const k=el.dataset.k,on=el.dataset.on==='1';try{await API.rpc('vote_city',{k,on_:on});S.board=await API.rpc('city_board');render();toast(on?(k==='online'?'You are on the online mixer list':'Thank you. We count you in for your city'):'Removed','check')}catch(e){toast('Could not save. Try again.')}},
  tab(el){S.tab=el.dataset.k;view=null;sheet=null;picker=null;save();render();const m=document.getElementById('main');if(m)m.scrollTop=0;if(S.tab==='me')loadInvite();if(S.tab==='events')loadEvents().then(render).catch(()=>{})},
  seg(el){S.seg=el.dataset.k;save();render()},
  goLikes(){S.tab='connections';S.seg='received';save();render();const m=document.getElementById('main');if(m)m.scrollTop=0},
  sort(el){S.sort=el.dataset.k;save();render()},
  reveal(el){const id=el.dataset.id;if(!isGold()){sheet={type:'upgrade',reason:'picks',pick:'m3'};render();return}if(!S.picks.revealed.includes(id))S.picks.revealed.push(id);justRevealed=id;save();render()},
  filters(){sheet={type:'filters'};render()},
  resetFilters(){S.me.prefs=defaultPrefs(S.me);queuePrefsSave();render();toast('Filters reset to your defaults.','refresh')},
  widen(el){const k=el.dataset.k,pr=S.me.prefs;if(k==='radius')pr.radius=0;if(k==='anywhere'){pr.liveCountry='Any';pr.radius=0}if(k==='community'){pr.community='Any';pr.alsoComm=[]}if(k==='os')pr.os='Any';queuePrefsSave();render()},
  togglePassed(){S.showPassed=!S.showPassed;save();render()},
  unpause(){S.me.privacy.vis='verified';savePrivacy();render();toast('Your profile is visible again.','eye')},
  open(el){const id=el.dataset.id;const p=byId(id);if(!p)return;if(locked(p)&&!(S.interests[id]==='received'&&p.gold)){sheet={type:'upgrade',reason:'profile',id,pick:'m3'};render();return}view={type:'profile',id,prev:view&&(view.type==='chat'||view.type==='event')?view:null};render();const v=document.getElementById('view-scroll');if(v)v.scrollTop=0},
  previewMe(){view={type:'me'};render()},
  closeView(){view=view&&view.prev?view.prev:null;render()},
  pass(el){const id=el.dataset.id;if(!S.passed.includes(id))S.passed.push(id);const p=byId(id);save();if(view&&view.type==='profile')view=null;render();toast(`Passed on ${p.first||'this profile'}. You can undo from the bottom of Matches.`,'x')},
  unpass(el){S.passed=S.passed.filter(x=>x!==el.dataset.id);save();render()},
  shortlist(el){const id=el.dataset.id,p=byId(id);if(S.shortlist.includes(id)){S.shortlist=S.shortlist.filter(x=>x!==id);toast(`Removed ${p.first||'profile'} from saved.`,'star')}else{S.shortlist.push(id);toast(`${p.first||'Profile'} saved for later.`,'star')}save();render()},
  async interest(el){const id=el.dataset.id;if(S.interests[id]==='received'){A.accept(el);return}
    if(needVerified())return;if(!isGold()){sheet={type:'upgrade',reason:'interests',pick:'m3'};render();return}
    const r=el.getBoundingClientRect();const p=byId(id);S.interests[id]='sent';S.passed=S.passed.filter(x=>x!==id);save();render();burstAt({getBoundingClientRect:()=>r});
    try{await API.insert('interests',{from_user:S.me.id,to_user:id},{returning:false});toast(`Interest sent to ${p.first}. You’ll hear back here.`,'heart')}
    catch(e){delete S.interests[id];render();fail(e)}},
  async accept(el){if(needVerified())return;const id=el.dataset.id;const p=byId(id);if(!isGold()&&!(p&&p.gold)){sheet={type:'upgrade',reason:'likes',id,pick:'m3'};render();return}
    try{await API.update('interests',{from_user:'eq.'+id,to_user:'eq.'+S.me.id},{status:'accepted'});S.interests[id]='mutual';await refreshCards([id]);ensureMatchChats();celebrate={id};render();rateHint()}
    catch(e){fail(e)}},
  async decline(el){const id=el.dataset.id;const p=byId(id);try{await API.update('interests',{from_user:'eq.'+id,to_user:'eq.'+S.me.id},{status:'declined'});S.interests[id]='declined';if(view&&view.id===id)view=null;render();toast(`Declined. ${p&&p.first?p.first:'They'} will not be told.`,'x')}catch(e){fail(e)}},
  openchat(el){const id=el.dataset.id;if(S.interests[id]!=='mutual')return;ensureMatchChats();S.unread[id]=0;view={type:'chat',id};render();API.rpc('mark_read',{other:id}).catch(()=>{});const ci=document.getElementById('chat-in');if(ci&&fine())ci.focus({preventScroll:true})},
  async send(el){const id=el.dataset.id;if(!canChat(id)){sheet={type:'upgrade',reason:'chat',id,pick:'m3'};render();return}
    if(needVerified())return;const ci=document.getElementById('chat-in'),x=(ci&&ci.value||'').trim();if(!x)return;
    const tmp={f:'me',x,ts:Date.now(),pending:true};S.chats[id]=(S.chats[id]||[]).concat(tmp);ci.value='';render();
    try{const rows=await API.insert('messages',{sender:S.me.id,recipient:id,body:x});const m=rows&&rows[0];tmp.pending=false;if(m){tmp.id=m.id;tmp.ts=Date.parse(m.created_at);tmp.flag=m.flagged;lastMsg=Math.max(lastMsg,m.id)}render()}
    catch(e){S.chats[id]=S.chats[id].filter(m=>m!==tmp);render();const c2=document.getElementById('chat-in');if(c2&&!c2.value)c2.value=x;fail(e,'chat')}},
  celChat(el){const id=el.dataset.id;celebrate=null;S.tab='connections';S.seg='chats';save();A.openchat({dataset:{id}})},
  celClose(){celebrate=null;render()},
  openEvent(el){view={type:'event',id:el.dataset.id};render();const v=document.getElementById('view-scroll');if(v)v.scrollTop=0},
  book(el){if(needVerified(true))return;const id=el.dataset.id,e=evById(id);const dm={Vegetarian:'veg',Vegan:'veg',Eggetarian:'veg','Jain vegetarian':'jain','Non-vegetarian':'nonveg'}[S.me.diet]||'';
    sheet={type:'book',id,parents:0,meal:e.meals.includes(dm)?dm:'',p:[{name:'',rel:'Mother',meal:''},{name:'',rel:'Father',meal:''}]};S.errors={};render()},
  bookPlus(){if(sheet.parents<2)sheet.parents++;render()},
  bookMinus(){if(sheet.parents>0){sheet.parents--;delete S.errors['p'+sheet.parents+'name'];delete S.errors['p'+sheet.parents+'meal']}render()},
  async reserve(){const e=evById(sheet.id),n=sheet.parents;const err={};if(!sheet.meal)err.meal='Choose your dish';
    for(let i=0;i<n;i++){if((sheet.p[i].name||'').trim().length<2)err['p'+i+'name']='Add a name for the guest list';if(!sheet.p[i].meal)err['p'+i+'meal']='Choose a dish'}
    if(Object.keys(err).length){S.errors=err;render();const f=document.querySelector('.sheet .has-err');if(f)f.scrollIntoView({block:'center'});return}
    busy='reserve';render();
    try{const r=await API.rpc('reserve_event',{eid:e.id,meal:sheet.meal,parents:sheet.p.slice(0,n).map(x=>({name:x.name.trim(),relation:x.rel,meal:x.meal}))});
      busy='';S.errors={};sheet=null;await loadEvents();
      if(r&&r.status==='hold_due'){PAYQ=null;view={type:'event',id:e.id};render();toast(r.waitlisted?`One more step: pay the ${money(e.hold,e.cur)} hold to keep your place on the waiting list.`:`One more step: pay the ${money(e.hold,e.cur)} seat hold to keep your seat.`,'ticket');return}
      render();
      toast(r&&r.waitlisted?`You’re on the waiting list. If a seat frees up, we email you.`:r&&r.confirmed?`The ${e.title} is confirmed! Your seat is held; we will message you when payment opens.`:`Seat reserved free. We’ll ask for payment once the event is confirmed.`,'check')}
    catch(x){busy='';render();fail(x)}},
  cancelRes(el){sheet={type:'cancelRes',id:el.dataset.id};render()},
  async cancelDo(el){busy='cancelDo';render();try{const hp=(evById(el.dataset.id)||{}).my;await API.rpc('cancel_reservation',{eid:el.dataset.id});busy='';sheet=null;await loadEvents();render();toast(hp&&hp.holdPaid?'Reservation cancelled. Your seat went back to other members.':'Reservation cancelled. Nothing was charged.','check')}catch(e){busy='';render();fail(e)}},
  engaged(el){if(S.storyFor[el.dataset.id]){sheet=null;render();return}sheet={type:'engaged',id:el.dataset.id,pause:true,pub:false,text:''};render()},
  async storySend(el){const id=el.dataset.id;busy='storySend';render();
    try{await API.insert('stories',{user_id:S.me.id,partner:id,body:(sheet.text||'').trim()||null,may_publish:!!sheet.pub},{returning:false});
      if(sheet.pause!==false){S.me.privacy.vis='hidden';await savePrivacy()}S.storyFor[id]=true;save();busy='';sheet=null;render();toast('Congratulations to you both!','heart')}
    catch(e){busy='';render();fail(e,'story')}},
  hostAsk(){sheet={type:'host',city:myPlace(),lang:'',comm:'',exp:'Community events',rest:'',ok:false};S.errors={};render()},
  async hostSend(){const e={};if((sheet.city||'').trim().length<2)e.hcity='Add your city';if((sheet.lang||'').trim().length<2)e.hlang='Add at least one language';if(!sheet.ok)e.hok='Please agree to continue';S.errors=e;if(Object.keys(e).length){render();return}
    busy='hostSend';render();
    try{await API.insert('host_applications',{user_id:S.me.id,name:S.me.name,city:sheet.city.trim(),languages:sheet.lang.trim(),communities:(sheet.comm||'').trim()||null,experience:sheet.exp||null,restaurants:(sheet.rest||'').trim()||null,consent:true},{returning:false});
      busy='';S.hostSent=true;sheet=null;S.errors={};render();toast('Application sent. We reply within 3 working days.','check')}
    catch(x){busy='';render();fail(x)}},
  restaurantAsk(){sheet={type:'restaurant',org:'',city:S.me?myPlace():'',name:S.me?S.me.name:'',contact:'',seats:'30 to 50',food:'Vegetarian and non-vegetarian'};S.errors={};render()},
  async restaurantSend(){const e={};if((sheet.org||'').trim().length<2)e.rorg='Add the restaurant name';if((sheet.city||'').trim().length<2)e.rcity='Add a city';if((sheet.name||'').trim().length<2)e.rname='Add your name';if((sheet.contact||'').trim().length<5)e.rcontact='Add a phone number or email';S.errors=e;if(Object.keys(e).length){render();return}
    busy='restaurantSend';render();
    try{await API.insert('work_with_us',{role:'restaurant',name:sheet.name.trim(),org:sheet.org.trim(),city:sheet.city.trim(),contact:sheet.contact.trim(),note:`Seats: ${sheet.seats} · Food: ${sheet.food} · From the app`,consent_at:new Date().toISOString()},{returning:false});
      busy='';S.restSent=true;sheet=null;S.errors={};render();toast('Thank you. Our team will call you within 3 working days.','check')}
    catch(x){busy='';render();fail(x)}},
  async admContacted(el){try{await API.rpc('admin_mark_application',{k:el.dataset.k,aid:el.dataset.id});const x=(S.admin.apps||[]).find(a=>a.id===el.dataset.id);if(x)x.status='contacted';render()}catch(e){fail(e)}},
  partnerAsk(){sheet={type:'partner',name:'',city:'',contact:''};S.errors={};render()},
  async partnerSend(){const e={};if((sheet.name||'').trim().length<2)e.pname='Add the bureau name';if((sheet.city||'').trim().length<2)e.pcity='Add a city';if((sheet.contact||'').trim().length<5)e.pcontact='Add a phone number or email';S.errors=e;if(Object.keys(e).length){render();return}
    busy='partnerSend';render();
    try{await API.insert('work_with_us',{role:'bureau',name:S.me.name,org:sheet.name.trim(),city:sheet.city.trim(),contact:sheet.contact.trim(),note:'From the app',consent_at:new Date().toISOString()},{returning:false});
      busy='';S.partnerSent=true;sheet=null;S.errors={};render();toast('Thank you. Our team will call you within 3 working days.','check')}
    catch(x){busy='';render();fail(x)}},
  shareInvite(){const code=S.invite;if(!code)return;const text=`I’m on NeuMarry, matrimony for people living away from home. Join with my code ${code} for 10% off your first Gold. ${CFG.site}`;
    if(navigator.share){navigator.share({text}).catch(()=>{})}else A.copyCode({dataset:{k:text}})},
  copyCode(el){const c=el.dataset.k;const done=()=>toast('Copied.','copy');try{navigator.clipboard.writeText(c).then(done,()=>toast(`Code: ${c} (long-press to copy)`,'copy'))}catch(e){toast(`Code: ${c} (long-press to copy)`,'copy')}},
  deleteAsk(){sheet={type:'deleteAcct'};render()},
  async deleteDo(){busy='deleteDo';render();
    try{const me=S.me;for(const p of (me.photos||[]).concat(me.rejectedPhoto?[me.rejectedPhoto]:[])){try{await API.removeFile('photos',p.path)}catch(e){}}
      for(const v of (me.checks||[])){if(v.path)try{await API.removeFile('verification',v.path)}catch(e){}}
      await API.rpc('delete_my_account');const uid=API.userId();API.forget();try{localStorage.removeItem(LKEY+'.'+uid);localStorage.removeItem('rm.draft.'+uid)}catch(e){}
      busy='';signedOut();toast('Your account and data have been deleted.','check')}
    catch(e){busy='';render();fail(e)}},
  logout(){sheet={type:'logout'};render()},
  async logoutDo(){sheet=null;await API.signOut();signedOut()},
  more(el){sheet={type:'more',id:el.dataset.id,chat:!!el.dataset.chat};render()},
  report(el){sheet={type:'report',id:el.dataset.id,reason:null,note:''};S.errors={};render()},
  async submitReport(el){if(sheet.reason===null||sheet.reason===undefined){S.errors={reason:'Choose a reason'};render();return}const id=el.dataset.id;
    const reasons=['Fake profile or photos','Asked for money or gifts','Asked for visa or immigration help','Rude or inappropriate messages','Already married or in a relationship','Under 18 or a child safety concern','Something else'];
    busy='submitReport';render();
    try{await API.insert('reports',{reporter:S.me.id,reported:id,reason:reasons[sheet.reason],note:(sheet.note||'').trim()||null},{returning:false});
      try{await API.insert('blocks',{blocker:S.me.id,blocked:id},{returning:false})}catch(e){}
      S.reported.push(id);S.blocked.push(id);save();busy='';S.errors={};sheet=null;view=null;render();toast('Report sent. Our safety team reviews every report within 24 hours. You will not see this person again.','shield')}
    catch(e){busy='';render();fail(e)}},
  async block(el){const id=el.dataset.id;const p=byId(id);try{await API.insert('blocks',{blocker:S.me.id,blocked:id},{returning:false});S.blocked.push(id);sheet=null;view=null;render();toast(`${p&&p.first?p.first:'They'} ${p&&p.first?'is':'are'} blocked.`,'x')}catch(e){fail(e)}},
  closeSheet(){sheet=null;S.errors={};render()},
  hostOpen(el){HOST={eid:el.dataset.id,stream:null,loop:null,busy:false,res:null,guests:null,err:''};view={type:'host',id:el.dataset.id,prev:view};render();hostLoadGuests()},
  hostCam(){hostCamStart()},
  hostCode(){const c=((document.getElementById('host-code')||{}).value||'').replace(/\D/g,'');if(c.length!==6){toast('Type the 6-digit door code.','info');return}hostLookup(c)},
  hostNext(){HOST.res=null;render()},
  hostRefresh(){hostLoadGuests()},
  async hostCheckIn(){const r=HOST.res;if(!r||!r.rid||HOST.busy)return;HOST.busy=true;render();
    try{const x=await API.rpc('checkin_do',{rid:r.rid});r.checked_in_at=x&&x.checked_in_at;r.done=true;toast(`${r.name.split(' ')[0]} is checked in.`,'check')}catch(e){toast((e&&e.message)||'Could not check in. Try again.','info')}
    HOST.busy=false;await hostLoadGuests();render()},
  async payEvent(el){const eid=el.dataset.id;if(PAYBUSY)return;PAYBUSY=true;render();
    try{const r=await API.fn('event-pay',{action:'start',eid,web:!!CFG.web});
      if(r&&r.status==='paid'){PAYBUSY=false;await payCheck(eid,true);return}
      if(r&&r.url){payPending(eid);if(CFG.web){location.href=r.url;return}window.open(r.url,'_blank')}
    }catch(e){toast((e&&e.message)||'PayPal is not answering. Try again in a minute.','info')}
    PAYBUSY=false;render()},
  payCheck(el){payCheck(el.dataset.id,false)},
  goPhoto(){sheet=null;if(S.screen==='signup')return;openEdit(1)},
  goVerify(el){sheet=null;if(S.screen==='signup')return;openEdit(5);const n=el&&el.dataset&&+el.dataset.n;if(n&&S.draft){S.draft.vs=n;render()}},
  vGo(el){const d=S.draft;if(!d)return;d.vs=+el.dataset.n||0;save();render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0},
  vBack(){const d=S.draft;if(!d)return;d.vs=d.vs===1?0:d.vs-1;render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0},
  vPick(el){const d=S.draft;if(!d)return;const k=el.dataset.k;if(d[k]!==el.dataset.v){d[k]=el.dataset.v;if(k==='rootsType'){d.rootsBlob=null;d.rootsName=''}}save();render()},
  tzSwitch(el){const d=S.draft;if(!d)return;d.country=el.dataset.v;d.state='';d.city='';d.res='';d.reloc='';d.tzAck='';save();render()},
  tzKeep(){const d=S.draft;if(!d)return;d.tzAck=d.country;save();render()},
  vLocate(){const d=S.draft;if(!d||busy)return;
    if(!navigator.geolocation){toast('Location is not available here. Skip this step; your documents are enough.','info');return}
    busy='loc';render();
    navigator.geolocation.getCurrentPosition(async pos=>{const lat=pos.coords.latitude,lng=pos.coords.longitude;
      if(!S.editMode){busy='';d.loc={lat,lng};d.vs=0;render();toast('Location ready. It is checked when you save.','check');return}
      try{const r=await API.rpc('check_location',{lat,lng});busy='';
        if(r&&r.ok===true){await loadMe();d.vs=0;render();toast('Location confirmed.','check')}
        else if(r&&r.ok===false){render();toast(`You seem to be about ${r.km} km from ${S.me.city}. Your documents are enough; try again when you are home.`,'info')}
        else{render();toast('We could not check this city. Your documents are enough.','info')}}
      catch(e){busy='';render();fail(e)}},
    err=>{busy='';render();toast(err&&err.code===1?'Location is off for NeuMarry. You can skip this step; your documents are enough.':'Your location could not be found. Try again outside, or skip this step.','info')},
    {enableHighAccuracy:false,timeout:20000,maximumAge:600000})},
  edit(){openEdit(1)},
  evFilter(el){S.evFilter=el.dataset.k;save();render()},
  upgrade(el){sheet={type:'upgrade',reason:el&&el.dataset?el.dataset.r||'':'',id:el&&el.dataset?el.dataset.id||'':'',pick:'m3'};render()},
  pickPlan(el){sheet.pick=el.dataset.k;render()},
  async betaGold(){busy='betaGold';render();try{const r=await API.rpc('beta_gold');if(!r){busy='';render();toast('The free test period has ended. Gold purchases open in the app soon.','info');return}
    await loadMe();await loadCards();busy='';const back=sheet&&sheet.reason;sheet=null;render();toast(`Gold is on for free during the test.${back==='chat'?' Your chat is open.':''}`,'crown')}catch(e){busy='';render();fail(e)}},
  async endBeta(){try{await API.rpc('end_beta_gold');await loadMe();await loadCards();render();toast('You are on Free now. You can switch Gold on again any time during the test.','info')}catch(e){fail(e)}},
  buySoon(){toast(isNative?'Gold purchases open in the app very soon.':'Gold can be bought in the NeuMarry app for Android. It opens on Google Play very soon.','crown')},
  async buyGold(){const B=Bill();const k=(sheet&&sheet.pick)||'m3';const o=store&&store[k];if(!B||!o||!S.me){A.buySoon();return}
    busy='buyGold';render();let p=null;
    try{const r=await B.purchase({productId:GOLD_PRODUCT,offerToken:o.offerToken,accountId:S.me.id});p=((r&&r.purchases)||[]).find(x=>(x.products||[]).includes(GOLD_PRODUCT))}
    catch(e){busy='';render();const c=String((e&&e.code)||'');if(c==='cancelled')return;if(c==='already_owned'){restorePurchases(true);return}toast(billingError(c),'info');return}
    if(!p){busy='';render();return}
    if(p.state===2){busy='';sheet=null;render();toast('Your payment is pending. Gold switches on as soon as Google Play confirms it.','info');return}
    const back=sheet&&sheet.reason;
    try{const v=await verifyPurchase(p);await loadMe();await loadCards();busy='';sheet=null;render();
      if(v&&v.entitled)toast(back==='chat'?'Welcome to Gold. Your chat is open.':'Welcome to Gold.','crown');else toast('Google Play has not confirmed this payment yet. Gold switches on as soon as it does.','info')}
    catch(e){busy='';sheet=null;render();if(e&&e.code==='purchase_other_account')fail(e);else toast('Payment received. Gold will switch on the next time you open NeuMarry. If it does not, contact us.','info')}},
  async admPayTest(el){if(el)el.disabled=true;try{const eid=await API.rpc('admin_pay_test');await loadEvents();PAYQ=null;view={type:'event',id:typeof eid==='string'?eid:(eid&&(eid.admin_pay_test||Object.values(eid)[0]))};render();const v=document.getElementById('view-scroll');if(v)v.scrollTop=0}catch(e){if(el)el.disabled=false;toast('Could not open the test seat. Try again.','info')}},
  starter(el){const i=document.getElementById('chat-in');if(i){i.value=el.dataset.t;i.focus()}},
  safeMeet(el){const p=byId(el.dataset.id);sheet=null;render();const t=`I am meeting ${p.first||'someone'} from NeuMarry (verified: ID, selfie, roots and city checked). Place: ____ . Time: ____ . I will message you when I am back home.`;
    window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener')},
  async shareBio(el){if(el)el.disabled=true;let r;try{r=await API.rpc('make_bio_link')}catch(e){if(el)el.disabled=false;toast('Could not make the link. Try again.','info');return}
    const tk=r&&(r.token||(r.make_bio_link&&r.make_bio_link.token));S.bioUntil=r&&(r.expires_at||(r.make_bio_link&&r.make_bio_link.expires_at));render();
    const url='https://neumarry.com/bio.html?t='+encodeURIComponent(tk),t=`My verified NeuMarry profile for the family (the link works for 7 days): ${url}`;
    if(navigator.share){navigator.share({title:'My NeuMarry biodata',text:t}).catch(()=>{})}else window.open('https://wa.me/?text='+encodeURIComponent(t),'_blank','noopener')},
  async stopBio(){try{await API.rpc('stop_bio_links')}catch(e){}S.bioUntil=null;render();toast('Your biodata link is stopped.','check')},
  showAllM(){S.showAllM=true;render()},
  /* Team: move an event to a new date (same time of day) and queue the emails. */
  async admMoveEvent(el){const id=el.dataset.id,inp=document.getElementById('mv-'+id);if(!inp||!inp.value){toast('Choose the new date first.','info');return}
  const old=new Date(el.dataset.t),from=dateInputVal(old,inp.dataset.tz),days=Math.round((Date.parse(inp.value)-Date.parse(from))/864e5);const nw=new Date(old.getTime()+days*864e5);
  busy='mv'+id;render();try{const r=await API.rpc('admin_move_event',{eid:id,new_start:nw.toISOString()});busy='';toast(`Date moved. ${r.emails} ${r.emails===1?'email goes':'emails go'} out within 3 hours.`,'check');loadAdmin();loadEvents().then(render)}
  catch(e){busy='';render();fail(e)}},
  openAdmin(){view={type:'admin'};S.admin={loading:true,queue:[],reports:[],urls:{}};render();loadAdmin()},
  async admApprove(el){await adminReview(el,true)},
  async admReject(el){const sel=document.querySelector(`[data-adm-reason="${el.dataset.id}"]`);const reason=sel&&sel.value;if(!reason){toast('Choose a reason first, so the member knows what to fix.','info');if(sel)sel.focus();return}await adminReview(el,false,reason)},
  async admBan(el){try{await API.rpc('admin_handle_report',{rid:el.dataset.id,ban:true});S.admin.reports=S.admin.reports.filter(r=>r.id!==el.dataset.id);render();toast('Member banned.','shield')}catch(e){fail(e)}},
  async admBanRude(el){const id=el.dataset.id;try{await API.rpc('admin_ban_member',{uid:id});(S.admin.rude||[]).forEach(x=>{if(x.user_id===id)x.banned=true});render();toast('Member banned.','shield')}catch(e){fail(e)}},
  async admDismiss(el){try{await API.rpc('admin_handle_report',{rid:el.dataset.id,ban:false});S.admin.reports=S.admin.reports.filter(r=>r.id!==el.dataset.id);render();toast('Report dismissed.','check')}catch(e){fail(e)}}
};
async function adminReview(el,ok,reason){const id=el.dataset.id,k=el.dataset.k;
  try{await API.rpc('admin_review',{row_kind:k==='photo'?'photo':'verification',rid:id,approve:ok,reason:reason||null});S.admin.queue=S.admin.queue.filter(x=>x.row_id!==id);if(S.admin.counts)S.admin.counts.pending--;render();toast(ok?'Approved.':'Rejected. The member sees the reason.',ok?'check':'x')}catch(e){fail(e)}}
async function loadAdmin(){
  try{const [q,r,c,ap,ru,su,ev]=await Promise.all([API.rpc('admin_queue'),API.rpc('admin_reports'),API.rpc('admin_counts'),API.rpc('admin_applications').catch(()=>[]),API.rpc('admin_rude').catch(()=>[]),API.rpc('admin_signups',{days:30}).catch(()=>[]),API.rpc('admin_events').catch(()=>[]),API.rpc('admin_cities').catch(()=>[]),API.rpc('admin_online').catch(()=>[])]).then(r=>{CITYADM=[r[7]||[],r[8]||[]];return r});
    const queue=(q||[]).map(x=>Object.assign(x,{bucket:x.kind==='photo'?'photos':'verification'}));
    S.admin={loading:false,queue,reports:r||[],counts:c,apps:ap||[],rude:ru||[],signups:su||[],events:ev||[],cities:CITYADM[0],online:CITYADM[1],urls:{}};render();
    const idq=queue.filter(x=>x.kind==='id').map(x=>x.row_id);if(idq.length)API.select('verifications',{select:'id,auto_check',id:'in.('+idq.join(',')+')'}).then(rs=>{S.admin.auto={};(rs||[]).forEach(v=>{if(v.auto_check)S.admin.auto[v.id]=v.auto_check});render()}).catch(()=>{});
    const ph=[...new Set(queue.filter(x=>x.bucket==='photos').map(x=>x.path).concat(queue.map(x=>x.profile_photo).filter(Boolean)))];
    const vf=queue.filter(x=>x.bucket==='verification').map(x=>x.path);
    const [a,b]=await Promise.all([API.signMany('photos',ph,1800),API.signMany('verification',vf,600)]);
    Object.keys(a).forEach(k=>S.admin.urls['photos:'+k]=a[k]);Object.keys(b).forEach(k=>S.admin.urls['verification:'+k]=b[k]);render()}
  catch(e){S.admin={loading:false,queue:[],reports:[],urls:{}};render();fail(e)}}
async function loadInvite(){if(!S.me||!isGold()||!S.me.v.id||S.invite)return;try{S.invite=await API.rpc('my_invite_code');render()}catch(e){}}
function rateHint(){/* Store review prompt comes with the native review plugin after launch. */}
/* ---------- Sign in with Google ----------
   Android: the phone's own Google account sheet (GoogleAuth plugin), no browser.
   Web: Google's button on neumarry.com. Both give an ID token that Supabase checks.
   The old browser hand-off stays only as a fallback. */
function hex(b){return Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('')}
async function makeNonce(){const b=new Uint8Array(24);crypto.getRandomValues(b);const raw=hex(b);return {raw,hashed:hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(raw)))}}
const gsi={state:'',raw:''};
function gsiApi(){return window.google&&window.google.accounts&&window.google.accounts.id}
function gsiInit(){
  if(!CFG.web)return Promise.resolve();
  if(gsi.state==='loading'||gsi.state==='ready'||gsi.state==='failed')return gsi.p||Promise.resolve();
  gsi.state='loading';gsi.err='';gsi.p=gsiLoad();return gsi.p}
async function gsiLoad(){
  try{
    if(!gsiApi())await new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://accounts.google.com/gsi/client';s.async=true;s.onload=ok;s.onerror=()=>no(new Error('script'));document.head.appendChild(s)});
    if(!gsiApi())throw new Error('no api');
    const n=await makeNonce();gsi.raw=n.raw;
    gsiApi().initialize({client_id:CFG.googleClientId,callback:onGsi,nonce:n.hashed,ux_mode:'popup',auto_select:false,context:'signin'});
    gsi.state='ready';syncGsi();
  }catch(e){gsi.state='failed';gsi.err=(e&&e.message)||'error';console.warn('[gsi]',gsi.err)}}
function gsiAfterRender(){if(gsi.state==='ready')syncGsi();else gsiInit()}
function syncGsi(){
  const slot=document.getElementById('gsi-slot'),own=document.getElementById('g-own');if(!slot||!own)return;
  const a=S.auth||{};const ok=gsi.state==='ready'&&!busy&&(a.mode!=='signup'||(a.c18&&a.terms));
  if(ok&&!slot.dataset.done){const w=Math.round(own.getBoundingClientRect().width)||320;
    gsiApi().renderButton(slot,{type:'standard',theme:'outline',size:'large',shape:'pill',text:a.mode==='signup'?'continue_with':'signin_with',logo_alignment:'left',width:Math.max(200,Math.min(400,w)),locale:RM_I18N.lang==='fr'?'fr_CA':'en'});slot.dataset.done='1'}
  slot.hidden=!ok;own.hidden=ok}
async function onGsi(resp){
  const a=S.auth||{};if(a.mode==='signup'){if(!(a.c18&&a.terms)){S.errors={consent:'Tick both boxes to continue. The marketing box is optional.'};render();return}saveConsent(a)}
  busy='auth';render();
  try{await API.signInWithIdToken(resp&&resp.credential,gsi.raw);busy='';gsi.state='';await afterLogin()}
  catch(e){busy='';gsi.state='';render();fail(e)}}
async function googleSignIn(){
  const G=isNative&&Plug().GoogleAuth;
  if(G){busy='auth';render();
    try{const n=await makeNonce();const r=await G.signIn({serverClientId:CFG.googleClientId,nonce:n.hashed});
      await API.signInWithIdToken(r.idToken,n.raw);busy='';await afterLogin()}
    catch(e){busy='';render();const c=String((e&&e.code)||'');if(c==='cancelled')return;
      console.warn('[google]',c,e&&e.message);
      toast(c==='no_account'?'Add a Google account to this phone first, or use email.':e instanceof API.ApiError?e.message:'Google sign-in could not start. Please try again, or use email.','info')}
    return}
  /* Web: Google's own button does the sign-in. If it is still loading, wait for it and show it. */
  if(CFG.web){
    if(gsi.state!=='ready')await gsiInit();
    if(gsi.state==='ready'){syncGsi();toast('Tap the Google button to continue.','info');return}
    toast(`Google sign-in could not load (${gsi.err||'error'}). Check your connection, or use email.`,'info');gsi.state='';return}
  const url=API.googleUrl();
  if(isNative&&Plug().Browser){try{await Plug().Browser.open({url,presentationStyle:'popover'})}catch(e){fail(e)}return}
  location.href=url;
}
let lastAuthUrl='';
async function handleAuthUrl(url){
  if(url===lastAuthUrl)return false;lastAuthUrl=url;
  try{const s=await API.takeRedirect(url);if(!s)return false;
    if(isNative&&Plug().Browser)try{await Plug().Browser.close()}catch(e){}
    if(s.type==='recovery'){S.auth={mode:'reset'};S.screen='auth';render();return true}
    await afterLogin();return true}
  catch(e){toast(e.message||'Sign-in did not finish. Please try again.','info');return false}}

/* ---------- Input events ---------- */
app.addEventListener('click',e=>{const el=e.target.closest('[data-a]');if(!el||!app.contains(el)||el.disabled)return;const fn=A[el.dataset.a];if(fn){e.preventDefault();fn(el)}});
function onBind(e){
  const el=e.target;
  if(el.id==='pick-q'){if(picker){picker.q=el.value;const l=document.getElementById('pick-list');if(l){l.innerHTML=pickRows();l.scrollTop=0}}return}
  if(el.dataset.auth&&S.auth){const k=el.dataset.auth;S.auth[k]=el.type==='checkbox'?el.checked:el.value;
    if(S.errors[k]||(k!=='mkt'&&S.errors.consent&&el.type==='checkbox')){delete S.errors[k];if(el.type==='checkbox'&&S.auth.c18&&S.auth.terms)delete S.errors.consent;const w=el.closest('.fld,.consent');if(w&&!S.errors.consent){w.classList.remove('has-err');const er=w.querySelector('.err');if(er)er.remove()}}
    if(el.type==='checkbox')syncGsi();
    if(k==='pw'||k==='email'){const r=document.getElementById('pw-rules');if(r)r.innerHTML=pwRulesHTML(S.auth.mode==='reset'?Object.assign({email:API.email()},S.auth):S.auth)}
    return}
  if(el.dataset.sheet&&sheet){const ek=({host:{city:'hcity',lang:'hlang',ok:'hok'},partner:{name:'pname',city:'pcity',contact:'pcontact'}}[sheet.type]||{})[el.dataset.sheet];
    if(ek&&S.errors[ek]){const val=el.type==='checkbox'?el.checked:el.value.trim().length>=2;if(val){delete S.errors[ek];const w=el.closest('.fld,.ck');if(w){w.classList.remove('has-err');const er=w.querySelector('.err')||(w.nextElementSibling&&w.nextElementSibling.classList.contains('err')?w.nextElementSibling:null);if(er)er.remove()}}}}
  if(el.dataset.sheet&&sheet&&el.type==='checkbox'){sheet[el.dataset.sheet]=el.checked;return}
  if(el.dataset.sheet&&sheet){const k=el.dataset.sheet;const m=k.match(/^p(\d)(name|rel|meal)$/);
    if(m){sheet.p[+m[1]][m[2]]=el.value;if(S.errors[k]&&(m[2]!=='name'||el.value.trim().length>=2)){delete S.errors[k];const w=el.closest('.fld');if(w){w.classList.remove('has-err');const er=w.querySelector('.err');if(er)er.remove()}}return}
    sheet[k]=k==='reason'?+el.value:el.value;if((k==='reason'||k==='meal')&&S.errors[k]){delete S.errors[k];render()}return}
  const k=el.dataset.bind;if(!k)return;
  const tgt=el.dataset.target;
  if(tgt==='me'&&e.type==='input')return;
  let v=el.type==='checkbox'?el.checked:el.value;
  if(el.hasAttribute('data-num'))v=+v;
  if(tgt==='me'){
    const me=S.me;
    if(k==='paused'){me.privacy.vis=v?'hidden':'verified';savePrivacy();render();toast(v?'Your profile is paused. Nobody new can find you.':'Your profile is visible again.','eye');return}
    if(k==='privacy.incognito'&&v&&!isGold()){el.checked=false;sheet={type:'upgrade',reason:'private',pick:'m3'};render();return}
    applyChange('me',k,v);render();return;
  }
  if(S.screen!=='signup'||!S.draft)return;
  const d=S.draft;
  setPath(d,k,v);
  if(k==='g'&&v&&!d.lookingFor)d.lookingFor=v==='M'?'F':'M';
  if(S.errors[k]){delete S.errors[k];const wrap=el.closest('[data-f]');if(wrap){wrap.classList.remove('has-err');const er=wrap.parentNode.querySelector('#err-'+k.replace(/\./g,'-'))||wrap.querySelector('.err');if(er)er.remove()}}
  if(k==='g'&&S.errors.lookingFor&&d.lookingFor)delete S.errors.lookingFor;
  if(el.hasAttribute('data-rr')&&e.type==='change')render();
  save();
}
app.addEventListener('input',e=>{const el=e.target;
  if(el.dataset&&el.dataset.univq!==undefined){S.univQ=el.value;clearTimeout(S._uq);S._uq=setTimeout(()=>{const pos=el.selectionStart;render();const f=document.getElementById('f-univq');if(f){f.focus();try{f.setSelectionRange(pos,pos)}catch(x){}}},180);return}
  if(el.dataset&&el.dataset.bind==='about'&&S.draft)S.draft.aboutEdited=1;
  onBind(e)});
app.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.file){const f=el.files&&el.files[0];if(!f||!S.draft)return;const d=S.draft,kind=el.dataset.file;el.value='';
    if(f.size>15*1024*1024){toast('That file is over 15 MB. Try a smaller one.','info');return}
    if(kind==='id'&&/pdf$/i.test(f.type||f.name)){d.idBlob=f;d.idName=f.name||'ID.pdf';render();toast('ID ready. It is sent when you save.','check');return}
    const DOC={roots:['rootsBlob','rootsName'],status:['statusBlob','statusName'],address:['addrBlob','addrName']}[kind];
    if(DOC&&/pdf$/i.test(f.type||f.name)){d[DOC[0]]=f;d[DOC[1]]=f.name||'Document.pdf';render();toast('Document ready. It is sent when you save.','check');return}
    if(!/^image\//.test(f.type)){toast('Please choose a photo (JPG or PNG).','info');return}
    const r=new FileReader();r.onload=()=>{shrink(r.result,kind==='id'||DOC?1800:kind==='photo'?1280:900,(url,blob)=>{if(!S.draft)return;
      if(kind==='photo'){d.photo=url;d.photoBlob=blob;delete S.errors.photo}else if(kind==='selfie'){d.selfie=url;d.selfieBlob=blob}else if(DOC){d[DOC[0]]=blob;d[DOC[1]]=f.name||'Photo'}else{d.idBlob=blob;d.idName=f.name||'ID photo'}
      render();if(kind==='selfie')toast('Selfie ready. It is sent when you save.','check');if(kind==='id')toast('ID ready. It is sent when you save.','check');if(DOC)toast('Document ready. It is sent when you save.','check')})};
    r.onerror=()=>toast('Could not read that file. Try another.','info');r.readAsDataURL(f);return}
  if(el.id==='pick-q'||el.dataset.admReason!==undefined)return;
  onBind(e);
});
function shrink(src,max,cb){const img=new Image();img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);const g=c.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,c.width,c.height);g.drawImage(img,0,0,c.width,c.height);
  try{const url=c.toDataURL('image/jpeg',.86);c.toBlob(b=>cb(url,b||dataToBlob(url)),'image/jpeg',.86)}catch(e){toast('Could not open that image. Try another.','info')}};img.onerror=()=>{toast('Could not open that image. Try another.','info')};img.src=src}
function dataToBlob(url){const [h,b]=url.split(',');const bin=atob(b);const a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return new Blob([a],{type:(h.match(/data:([^;]+)/)||[])[1]||'image/jpeg'})}
app.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.id==='chat-in'){e.preventDefault();const b=app.querySelector('[data-a="send"]');if(b)A.send(b)}
  if(e.key==='Enter'&&/^au-(email|pw2?)$/.test(e.target.id)){e.preventDefault();if(S.auth&&S.auth.mode==='reset')A.authNewPw();else A.authEmail()}
  if(e.key==='Enter'&&e.target.id==='pick-q'){e.preventDefault();const b=document.querySelector('#pick-list .prow');if(b)A.pickSet(b)}
  if(e.key==='Escape'){if(celebrate)A.celClose();else if(picker)A.pickClose();else if(sheet)A.closeSheet();else if(view)A.closeView()}
});
function goBack(){if(celebrate){A.celClose();return true}if(picker){A.pickClose();return true}if(sheet){A.closeSheet();return true}if(view){A.closeView();return true}
  if(S.screen==='signup'){A.suBack();return true}if(S.screen==='auth'){A.authBack();return true}if(S.screen==='app'&&S.tab!=='matches'){S.tab='matches';save();render();return true}return false}

/* ---------- Keeping things fresh ---------- */
let tick=0,lastFull=Date.now();
async function poll(){
  if(document.hidden||S.screen!=='app'||!S.me||!S.loaded)return;
  tick++;const chatOpen=view&&view.type==='chat';
  if(!(chatOpen&&tick%2===0)&&tick%10!==0)return;
  try{
    let changed=await loadMessages();
    if(chatOpen&&S.unread[view.id]){S.unread[view.id]=0;API.rpc('mark_read',{other:view.id}).catch(()=>{})}
    if(tick%10===0){
      const ints=await API.select('interests',{select:'*'});const me=S.me.id,map={};
      (ints||[]).forEach(i=>{const o=i.from_user===me?i.to_user:i.from_user;const st=i.status==='accepted'?'mutual':i.from_user===me?'sent':i.status==='declined'?'declined':'received';if(!map[o]||st==='mutual')map[o]=st});
      const diff=Object.keys(map).filter(id=>map[id]!==S.interests[id]);
      const newly=diff.filter(id=>map[id]==='mutual'&&S.interests[id]==='sent');
      if(diff.length){S.interests=Object.assign({},S.interests,map);await refreshCards(diff);ensureMatchChats();changed=true;
        if(newly.length&&!celebrate&&!sheet&&!picker)celebrate={id:newly[0]};
        const got=diff.filter(id=>map[id]==='received');if(got.length)toast(`${got.length===1?'Someone new likes':got.length+' new people like'} you.`,'heart')}
      if(Date.now()-lastFull>180e3){lastFull=Date.now();await Promise.all([loadCards(),loadEvents()]);ensureMatchChats();changed=true;API.rpc('touch_seen').catch(()=>{})}
    }
    if(changed&&!picker&&!(document.activeElement&&/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)&&document.activeElement.id!=='chat-in'))render();
  }catch(e){}
}
setInterval(()=>{const now=Date.now();document.querySelectorAll('[data-until]').forEach(el=>{el.textContent=fmtLeft(+el.dataset.until-now)});poll()},2000);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&S.screen==='app'&&S.loaded)cacheSave();if(!document.hidden&&S.screen==='app'){tick=9;poll();const p=payPending();if(p)payCheck(p,true)}});

/* ---------- Boot ---------- */
async function boot(){
  S.screen='boot';S.bootError='';render();console.info('[boot] start',isNative?'native':'web');
  if(location.hash&&/access_token|error_description/.test(location.hash)){const h=location.href;history.replaceState(null,'',location.pathname+location.search);if(await handleAuthUrl(h))return}
  /* A cold start from the sign-in return link: handle it in the background, never hold up the first screen. */
  if(isNative&&Plug().App){try{Promise.resolve(Plug().App.getLaunchUrl()).then(l=>{if(l&&l.url&&l.url.startsWith(CFG.redirect))handleAuthUrl(l.url)}).catch(()=>{})}catch(e){}}
  console.info('[boot] session',!!API.session());
  if(!API.session()){S.screen='welcome';render();console.info('[boot] welcome shown');return}
  await afterLogin();
  payReturn().catch(()=>{});
  console.info('[boot] signed in, screen',S.screen);
}
window.addEventListener('error',e=>console.error('[js error]',e.message,e.filename,e.lineno));
window.addEventListener('unhandledrejection',e=>console.error('[js rejection]',e.reason&&(e.reason.stack||e.reason.message||e.reason)));
if(isNative&&Plug().App){
  Plug().App.addListener('appUrlOpen',ev=>{if(ev&&ev.url&&ev.url.startsWith(CFG.redirect))handleAuthUrl(ev.url)});
  Plug().App.addListener('backButton',()=>{if(!goBack())Plug().App.exitApp()});
  Plug().App.addListener('resume',()=>{if(liveUpd.apply())return;if(S.screen==='app'){tick=9;poll();const p=payPending();if(p)payCheck(p,true)}});
}
/* A payment that was pending (for example cash at a store) and completes later. */
if(Bill()){try{Bill().addListener('purchasesUpdated',()=>{if(S.screen==='app')restorePurchases(false)})}catch(e){}}
/* ---------- Typing on phones ----------
   When the keyboard opens, the app shrinks to the space above it and the field being
   typed in is scrolled to the middle, so nobody has to close the keyboard to see their text. */
(function(){
  const vv=window.visualViewport;let tallest=window.innerHeight,raf=0;
  const typing=el=>el&&(el.tagName==='TEXTAREA'||(el.tagName==='INPUT'&&!/^(checkbox|radio|button|submit|file|range|date)$/.test(el.type)));
  const reveal=el=>{try{el.scrollIntoView({block:'center',behavior:'smooth'})}catch(e){}};
  function fit(){raf=0;tallest=Math.max(tallest,window.innerHeight);
    const visible=vv?Math.round(vv.height):window.innerHeight;
    const open=tallest-visible>140;
    document.documentElement.classList.toggle('kb',open);
    document.documentElement.style.setProperty('--app-h',open&&vv&&window.innerHeight-visible>80?visible+'px':'100%');
    if(open&&typing(document.activeElement))setTimeout(()=>reveal(document.activeElement),60)}
  const later=()=>{if(!raf)raf=requestAnimationFrame(fit)};
  if(vv)vv.addEventListener('resize',later);
  window.addEventListener('resize',later);
  window.addEventListener('orientationchange',()=>{tallest=0;setTimeout(later,300)});
  document.addEventListener('focusin',e=>{if(typing(e.target))setTimeout(()=>reveal(e.target),320)});
})();
/* Live updates (his ask 30 Oct 2026): new app versions come from neumarry.com/app-update without a Play download.
   Downloaded quietly a few seconds after opening; used the next time the app comes back from the background or opens. */
const liveUpd={id:null,v:null,hid:0,
  U(){return isNative&&Plug().CapacitorUpdater},
  apply(){const U=this.U();if(!U||!this.id||S.screen!=='app'||Date.now()-this.hid<20000)return false;try{cacheSave()}catch(e){}U.set({id:this.id}).catch(()=>{});return true},
  async check(){const U=this.U();if(!U)return;try{
    const cur=await fetch('bundle.json',{cache:'no-store'}).then(r=>r.json()).catch(()=>({}));
    const L=await fetch('https://neumarry.com/app-update/latest.json?t='+Date.now(),{cache:'no-store'}).then(r=>r.json());
    if(!L||!L.version||!L.url||L.version===cur.v||L.version===this.v)return;
    const b=await U.download({url:L.url,version:L.version});await U.next({id:b.id});this.id=b.id;this.v=L.version}catch(e){}}};
if(liveUpd.U()){try{liveUpd.U().notifyAppReady()}catch(e){}setTimeout(()=>liveUpd.check(),5000);setInterval(()=>liveUpd.check(),6*3600e3);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)liveUpd.hid=Date.now()});
  if(Plug().App)Plug().App.addListener('pause',()=>{liveUpd.hid=Date.now()})}

/* ---------- NeuMarry v2 design (his ok 1 Nov 2026 00:29 on mock v2; founder preview first) ----------
   Shown only to the founder accounts until he says ok for everyone. Once a founder signs in on a
   device, that device keeps the new welcome screen too (nm.v2 in localStorage). */
const V2_FOUNDERS=['swapnilbhagatt@gmail.com','aimaster13679@gmail.com'];
/* 1 Nov 04:34: on for everyone (his permission). Local automated tests can still turn it off with nm.v2test=0. */
function V2(){try{if(/127\.0\.0\.1/.test(CFG.url||'')&&localStorage.getItem('nm.v2test')==='0')return false;return true}catch(e){return true}}
Object.assign(IC,{
  brief:'<rect x="3.5" y="7.5" width="17" height="12" rx="2.5"/><path d="M9 7.5V5.5h6v2M3.5 12.5h17"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5z"/><path d="M4 20.5A2.5 2.5 0 016.5 18H20v3H6.5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  moon:'<path d="M19.5 14.5A8 8 0 019.5 4.5a8 8 0 1010 10z"/>',
  plane:'<path d="M2.5 13.5l19-8-5 15-4-6z"/><path d="M12.5 14.5l9-9"/>',
  kid:'<circle cx="12" cy="6.5" r="2.5"/><path d="M8 21v-5l-2-3 4-2.5h4l4 2.5-2 3v5"/>',
  city:'<path d="M3 21h18M5 21V8l6-3v16M11 21V10h8v11M14 13h2M14 16h2"/>',
  face:'<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"/>',
  coin:'<circle cx="12" cy="12" r="8.5"/><path d="M14.5 9.5c-.5-1-1.4-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.9 2.5 2-1 2-2.5 2c-1.1 0-2-.5-2.5-1.5M12 6.5v11"/>',
  talk:'<path d="M4 5h11v8H8l-4 3z"/><path d="M15 9h5v8l-3-2h-6v-2"/>'
});

/* order of screens: [step, sub-page] ; verification moved to the very end (his ok) */
const V2SEQ=[[1,''],[2,''],[3,'a'],[3,'b'],[4,'a'],[4,'b'],[6,''],[5,'']];
const V2PART={'1':[1,'You'],'2':[2,'Your roots'],'3a':[2,'Your life now'],'3b':[3,'Photo and you'],'4a':[4,'Your future home'],'4b':[4,'Your nature'],'6':[4,'Who you want to meet'],'5':[5,'Get verified']};
const V2CELE={2:['Your roots and life are in','People from your roots show first, with the real distance to you.','Photo and you','about 1 min'],
  3:['Your profile looks great','Others will see a clear photo and a few true lines about you.','What matters to you','about 2 min'],
  6:['Your match profile is ready','We now know what matters to you. One last part: your Trust Passport.','Get verified','about 3 min']};
const LIFE_K=['h','country','state','city','res','reloc','job','edu','marital','createdBy'];
function v2key(){const d=S.draft||{};return S.step===3||S.step===4?S.step+(d.v2b||'a'):String(S.step)}
function v2pos(){const d=S.draft||{};return V2SEQ.findIndex(([s,b])=>s===S.step&&(!b||b===(d.v2b||'a')))}
function v2go(i){const [s,b]=V2SEQ[i];if(S.draft)S.draft.v2b=b||'a';goStep(s)}
function v2err(k){return S.errors[k]?' has-err':''}
function v2chips(k,opts,cur,cls){return `<div class="v2chips${v2err(k)}" data-f="${k}">${opts.map(o=>`<button type="button" class="v2chip${String(cur)===String(o.v)?' on':''}${cls?' '+cls:''}" data-a="chipSet" data-k="${k}" data-v="${esc(o.v)}">${o.pre?o.pre+' ':''}${esc(o.l)}</button>`).join('')}</div>${errOf(k)}`}
function v2opts(k){return (pickerDef(k,'draft').opts||[])}
function v2segs(){const p=(V2PART[v2key()]||[1])[0];return `<div class="v2segs">${[1,2,3,4,5].map(n=>`<i class="${n<p?'d':n===p?'h':''}"></i>`).join('')}</div>`}
function v2head(sub){const [p,l]=V2PART[v2key()]||[1,''];return `<div class="v2head pad"><button class="iconbtn" data-a="suBack" aria-label="Back">${ic('back')}</button>
  <div class="grow"><div class="v2pt"><span>Part ${p} of 5 · ${esc(l)}</span><b>${ic('check')} Saved</b></div>${v2segs()}</div>
  <button class="iconbtn" data-a="v2leave" aria-label="Save and leave">${ic('x')}</button></div>`}
function v2foot(label,extra){return `<div class="v2foot pad">${extra||''}<button class="btn primary block" data-a="suNext"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' '+esc(S.saveMsg||'Saving'):label} ${busy?'':ic('chev')}</button></div>`}
function v2gain(icn,t){return `<div class="v2gain">${ic(icn)}<span>${t}</span></div>`}

/* ---------- screen 1: welcome ---------- */
function renderWelcomeV2(){
  const arcs=[[78,200,214,104],[96,128,226,118],[238,214,210,104],[150,236,226,118],[60,150,214,104]];
  return `<div class="scroll v2 v2w"><div class="v2w-sky" aria-hidden="true">
   <svg viewBox="0 0 312 300"><defs><radialGradient id="v2gl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FF8FA1" stop-opacity=".35"/><stop offset="1" stop-color="#FF8FA1" stop-opacity="0"/></radialGradient></defs>
   <circle cx="156" cy="170" r="130" fill="url(#v2gl)"/><circle cx="156" cy="170" r="104" fill="none" stroke="#fff" stroke-opacity=".14"/>
   <ellipse cx="156" cy="170" rx="104" ry="38" fill="none" stroke="#fff" stroke-opacity=".1"/><ellipse cx="156" cy="170" rx="44" ry="104" fill="none" stroke="#fff" stroke-opacity=".1"/>
   ${arcs.map(([a,b,c,e])=>`<path class="v2arc" d="M${a} ${b}Q${(a+c)/2} ${Math.min(b,e)-70} ${c} ${e}" fill="none" stroke="#FFB4C2" stroke-width="1.6"/><circle cx="${a}" cy="${b}" r="3.5" fill="#FFD7A8"/>`).join('')}
   <circle cx="214" cy="104" r="6" fill="#FF8FA1"/></svg>
   ${[['🇳🇬',18,58],['🇵🇭',74,70],['🇲🇽',4,45],['🇮🇳',40,77],['🇱🇧',27,37],['🇰🇷',80,48]].map(([f,x,y])=>`<span class="v2flag" style="left:${x}%;top:${y}%">${f}</span>`).join('')}
   <span class="v2cityp">${ic('pin')} Your city</span></div>
  <div class="v2w-body pad">
   <p class="v2brand">NEUMARRY</p>
   <h1>Your roots.<br>Your city.<br><em>Your person.</em></h1>
   <p class="v2w-lede">For people who grew up in one country and live in another. Every member is checked with an ID and a live selfie.</p>
   ${v2near()}
   <div class="v2prom">${[['shield','Verified','every member'],['lock','Private','no number shared'],['clock','About 6 min','almost all taps']].map(([i,a,b])=>`<div>${ic(i)}<b>${a}</b><span>${b}</span></div>`).join('')}</div>
   <button class="btn block v2light" data-a="start">Create my profile</button>
   <button class="btn block v2ghost" data-a="login">I already have an account</button>
   <p class="v2w-note">By continuing you agree to our <button class="link" data-a="legal" data-k="terms">Terms</button> and <button class="link" data-a="legal" data-k="privacy">Privacy Policy</button>. 18+ only.</p>
  </div></div>`}

/* live, honest count on the welcome screen (near_count: fully verified members; roots shown from 5 up) */
const V2N={};
function v2near(){const c=tzCountry();if(!c)return '';const n=V2N[c];
  if(n===undefined){V2N[c]=null;API.rpc('near_count',{country_in:c}).then(r=>{V2N[c]=r;if(S.screen==='welcome')render()}).catch(()=>{V2N[c]=0})}
  if(!n)return '';
  return `<div class="v2near"><small>${ic('pin')} ${esc(c)} · live now</small>${n.live>=20?`<b>${n.live.toLocaleString()}</b><span>verified members live here</span>`:`<b>Be one of the first</b><span>We are new in ${esc(c)}. Join now, and you are ready the day people of your roots join near you.</span>`}
   ${n.roots&&n.roots.length?`<div class="v2near-r">${n.roots.slice(0,5).map(x=>`<i>${flag(x.c)||''} ${esc(x.c)} ${x.n}</i>`).join('')}</div>`:''}</div>`}

/* ---------- birthday wheel ---------- */
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function v2wheelCols(){const y0=new Date().getFullYear()-18,years=[];for(let y=y0;y>=1951;y--)years.push(y);
  const days=Array.from({length:31},(_,i)=>i+1);return {days,years}}
function v2dobParts(d){const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(d.dob||'');if(m)return {y:+m[1],m:+m[2]-1,d:+m[3]};const y=new Date().getFullYear()-28;return {y,m:0,d:1,unset:true}}
function v2wheel(d){const {days,years}=v2wheelCols(),p=v2dobParts(d);
  const col=(k,list,lab,cur)=>`<div class="v2wcol" data-wheel="${k}">${list.map(v=>`<div class="v2wit${v===cur&&!p.unset?' on':''}" data-v="${v}">${lab(v)}</div>`).join('')}</div>`;
  return `<div class="v2wheel${v2err('dob')}" data-f="dob"><i class="v2wsel" aria-hidden="true"></i>${col('d',days,v=>v,p.d)}${col('m',MON.map((_,i)=>i),v=>MON[v],p.m)}${col('y',years,v=>v,p.y)}</div>
  <p class="v2note">${ic('lock')} ${d.dob&&!p.unset?`<b>${ageFrom(d.dob)} years</b> · only your age is shown, never the date.`:'Spin to your birthday. Only your age is shown.'}</p>${errOf('dob')}`}
let v2wheelLock=false;
function v2wheelAfter(){const w=document.querySelector('.v2wheel');if(!w)return;const d=S.draft;const p=v2dobParts(d);const H=40;
  v2wheelLock=true;w.querySelectorAll('.v2wcol').forEach(c=>{const k=c.dataset.wheel;const want=k==='d'?p.d:k==='m'?p.m:p.y;const items=[...c.children];const i=items.findIndex(x=>+x.dataset.v===want);c.scrollTop=Math.max(0,i)*H});
  setTimeout(()=>{v2wheelLock=false},80);
  w.querySelectorAll('.v2wcol').forEach(c=>{let t;c.addEventListener('scroll',()=>{if(v2wheelLock)return;clearTimeout(t);t=setTimeout(()=>{
    const cur={};w.querySelectorAll('.v2wcol').forEach(cc=>{const i=Math.round(cc.scrollTop/H);const it=cc.children[Math.min(i,cc.children.length-1)];cur[cc.dataset.wheel]=+it.dataset.v;[...cc.children].forEach(x=>x.classList.toggle('on',x===it))});
    const max=new Date(cur.y,cur.m+1,0).getDate();const dd=Math.min(cur.d,max);
    d.dob=`${cur.y}-${String(cur.m+1).padStart(2,'0')}-${String(dd).padStart(2,'0')}`;delete S.errors.dob;save();w.classList.remove('has-err');const er=document.getElementById('err-dob');if(er)er.remove();
    const n=document.querySelector('.v2wheel+.v2note');if(n)n.innerHTML=`${ic('lock')} <b>${ageFrom(d.dob)} years</b> · only your age is shown, never the date.`},140)},{passive:true})})}

/* ---------- the house that shows the answers (screen 6) ---------- */
function v2house(a){const kids=a[3]===0||a[3]===1,both=a[1]===0,move=a[0]===2,par=a[2]===0||a[2]===1;
  const n=[a[0],a[1],a[2],a[3]].filter(x=>x!==null&&x!==undefined).length;
  return `<svg viewBox="0 0 300 168" class="v2house" aria-hidden="true"><circle cx="250" cy="34" r="16" fill="#FFD7A8"/><path d="M0 150C80 136 220 136 300 150V168H0z" fill="#CDE7D6"/>
  <path d="M80 82L150 30 220 82" fill="#C42E57"/><rect x="92" y="80" width="116" height="74" rx="4" fill="#fff"/><rect x="138" y="112" width="24" height="42" rx="12" fill="#3A1A2B"/>
  <rect x="104" y="92" width="26" height="22" rx="4" fill="#FFE6EC"/><rect x="170" y="92" width="26" height="22" rx="4" fill="#FFE6EC"/>
  ${kids?'<g fill="#E8436B"><circle cx="112" cy="100" r="3.5"/><rect x="108.5" y="104" width="7" height="8" rx="3"/><circle cx="122" cy="101" r="3"/><rect x="119" y="104.5" width="6" height="7.5" rx="3"/></g>':''}
  ${both?'<g fill="#B8863A"><rect x="174" y="102" width="9" height="7" rx="1.5"/><rect x="185" y="102" width="9" height="7" rx="1.5"/></g>':''}
  ${par?'<g fill="#86697A"><circle cx="232" cy="122" r="4"/><rect x="228" y="127" width="8" height="14" rx="3"/><circle cx="246" cy="123" r="4"/><rect x="242" y="128" width="8" height="13" rx="3"/></g>':''}
  ${move?'<g transform="translate(40 34) rotate(-12)"><path d="M0 8l26-11-7 21-5-8z" fill="#3A1A2B"/></g>':''}
  <g transform="translate(40 112)"><path d="M0 40V10" stroke="#24845A" stroke-width="3"/><circle cx="0" cy="8" r="12" fill="#7CCB9E"/></g>
  <text x="150" y="20" text-anchor="middle" font-family="Nunito Sans,sans-serif" font-weight="900" font-size="10" fill="#C42E57" letter-spacing="1.5">${n} OF 4 ADDED</text></svg>`}
const HOME_Q=[[3,'kid'],[1,'brief'],[2,'users'],[0,'plane']];
/* screen 7: one illustrated card per question */
const NAT_ART={5:['#FFE7D6','#F6B7A0','sun'],6:['#E6F4EC','#9FD3B5','coin'],7:['#EDE6FF','#C2B2F4','talk'],4:['#FCF1DE','#E9C98D','star'],8:['#FFE6EC','#FF9DB1','heart']};
const NAT_Q=[5,6,7,4,8];

/* ---------- sign-up v2 ---------- */
function renderSignupV2(){if(!S.editMode)setTimeout(()=>noteStep(S.step),0);
  const d=S.draft,st=S.step,sub=d.v2b||'a';let body='',cta='Continue',foot='';
  if(st===5){let h=renderSignupV2.orig();
    const pass=v2passport(d);h=h.replace('<div class="form pad">','<div class="form pad">'+pass).replace(/Step 5 of 6 · saved/,'Part 5 of 5 · last part');
    return `<div class="v2 v2col">${h}</div>${S.cele2?v2cele():''}`}
  if(st===1){const gn=v2gname();if(!d.name&&gn)d.name=gn;
    const tile=(g,l,s,seed)=>`<button type="button" class="v2gt${d.g===g?' on':''}" data-a="v2g" data-v="${g}"><span class="v2gt-a">${portrait(seed,g,{tone:g==='F'?0:2})}</span><b>${l}</b><small>${s}</small></button>`;
    body=`<h1 class="v2h">${d.name?`Hi ${esc(d.name.split(' ')[0])}.`:'Hi there.'} <em>Who are you</em> looking for?</h1>
    ${S.v2name||!d.name?inF('name','Your full name','text',d.name,'autocomplete="name" maxlength="60"','Others see only your first name and last initial until you both say yes.')
      :`<div class="v2card v2row">${avatar(null,'sm',true)}<div class="grow"><b>${esc(d.name)}</b><small>${gn?'From your Google account':'Your name'}</small></div><button type="button" class="v2pill" data-a="v2name">Change</button></div>`}
    <div class="v2gts${v2err('g')}" data-f="g">${tile('F','I’m a woman','looking for a man',11)}${tile('M','I’m a man','looking for a woman',42)}</div>${errOf('g')}
    <p class="v2lb">Your birthday · spin</p>${v2wheel(d)}`;
    cta='Next: your roots';}
  else if(st===2){const pop=POP_OC.map(([c])=>c);
    body=`<h1 class="v2h">Where did you <em>grow up?</em></h1>${v2gain('globe','People from your roots appear first in your matches.')}
    <div class="v2flags${v2err('oc')}" data-f="oc">${POP_OC.map(([c,f])=>`<button type="button" class="v2fl${d.oc===c?' on':''}" data-a="chipSet" data-k="oc" data-v="${esc(c)}"><span>${f}</span><b>${esc(c)}</b></button>`).join('')}</div>
    ${pickF('oc',d.oc&&!pop.includes(d.oc)?'Country of origin':'Other country','draft',{ph:'Search all 195 countries'})}
    ${d.oc?pickF('os','State / region','draft',{ph:statesOf(d.oc).length?'Choose a state or region':'Type your region'}):''}
    ${d.oc&&TONGUE_BY_ORIGIN[d.oc]?`<p class="v2lb">Language at home · ${esc(d.oc)}</p>${v2chips('t',TONGUE_BY_ORIGIN[d.oc].slice(0,6).map(x=>({v:x,l:x})),d.t)}`:''}
    ${pickF('t',d.oc&&TONGUE_BY_ORIGIN[d.oc]?'Another language':'Mother tongue','draft',{ph:'Choose a language'})}
    <p class="v2lb">Faith</p>${v2chips('r',RELS.map(x=>({v:x,l:x})),d.r)}
    ${d.r?pickF('c','Community (optional)','draft',{ph:'Choose or type your community',showBlank:true,hint:'Only used when you or a match filter by it.'}):''}
    ${d.r?`<div class="panel" style="padding:4px 16px">${toggle('privacy.showC','Show my community on my profile','Turn off to keep it private. Filters still work.',d.privacy.showC)}</div>`:''}
    ${d.oc?`<div class="v2roots"><span class="v2rf">${flag(d.oc)||'🌍'}</span><div class="grow"><small>YOUR ROOTS CARD</small><b>${esc([d.os,d.t,d.r].filter(Boolean).join(' · ')||d.oc)}</b></div>${ic('sparkle')}</div>`:''}`;}
  else if(st===3&&sub==='a'){if(!d.country){const t=tzCountry();if(t)d.country=t}
    body=`<h1 class="v2h">Your life <em>now</em></h1>${v2gain('pin','Matches show the real distance to you. Your exact address is never shown.')}
    <div class="v2card v2city${v2err('country')}" data-f="country"><div class="v2map" aria-hidden="true"><svg viewBox="0 0 300 70" preserveAspectRatio="none"><path d="M0 50C60 40 90 60 150 48S250 30 300 42V70H0z" fill="#C9DCEA"/><path d="M20 0L60 70M120 0L100 70M200 0L240 70M0 26H300" stroke="#fff" stroke-width="3" opacity=".8"/></svg>${ic('pin')}</div>
     <div class="v2row" style="padding:10px 12px"><div class="grow"><b>${d.country?esc((d.city?d.city+', ':'')+d.country):'Where do you live?'}</b><small>${d.country&&tzCountry()===d.country?'Found from your phone':'Choose below'}</small></div></div></div>
    ${pickF('country','Country you live in','draft',{ph:'Choose a country'})}${tzWarn(d)}
    <div class="row2">${pickF('state','State / province','draft',{ph:'Choose',disabled:!d.country})}${pickF('city','City','draft',{ph:'Choose or type',disabled:!d.country})}</div>
    ${d.country?`<p class="v2lb">Residency in ${esc(d.country)}</p>${v2chips('res',v2opts('res'),d.res)}<p class="v2lb">Open to moving for the right person?</p>${v2chips('reloc',relocOpts(d.country),d.reloc)}`:''}
    <p class="v2lb">What do you do?</p>${pickOrOther('job','',JOBS,'Type your profession')}
    <p class="v2lb">Highest study</p>${pickOrOther('edu','',EDUS,'Type your study')}${collegeBox(d)}
    <p class="v2lb">Height</p>${pickF('h','Your height','draft',{ph:'Select'})}
    <p class="v2lb">Marital status</p>${v2chips('marital',v2opts('marital'),d.marital)}
    <p class="v2lb">Profile created by</p>${v2chips('createdBy',v2opts('createdBy'),d.createdBy)}`;}
  else if(st===3){
    body=`<h1 class="v2h">Your photo <em>studio</em></h1>
    <div class="v2studio${v2err('photo')}" data-f="photo"><label class="v2main">${d.photo?`<img src="${esc(d.photo)}" alt="Your photo">`:`<span class="v2empty">${ic('camera')}<b>Add your best photo</b><small>From your gallery or camera</small></span>`}
      <input type="file" accept="image/*" data-file="photo" aria-label="Profile photo">${d.photo?`<span class="v2pill v2on">${ic('star')} First photo</span>`:''}</label>
     <div class="v2tips"><b>Photos that work</b>${[['face','Face clear, looking at the camera'],['sun','Daylight, no dark filters'],['user','Only you in the first photo']].map(([i,t])=>`<span>${ic(i)}${t}</span>`).join('')}<small>Add more photos, like one with family, from Me after sign-up.</small></div></div>${errOf('photo')}
    <div class="panel" style="padding:4px 16px">${toggle('privacy.blur','Blur my photos until I accept','Only people you have both accepted see them clearly.',d.privacy.blur)}</div>
    <p class="v2lb">Pick 3 that are so you</p><div class="v2chips">${TRAITS.map(([k,l])=>`<button type="button" class="v2chip${(d.traits||[]).includes(k)?' on':''}" data-a="traitTap" data-k="${k}">${l}</button>`).join('')}</div>
    <label class="${fldCls('about')} v2about" data-f="about"><span>About me · we write it from your 3 picks</span><textarea id="f-about" data-bind="about" maxlength="600" placeholder="Pick 3 above and we write this for you. You can change it.">${esc(d.about)}</textarea>${errOf('about')}</label>`;
    cta='Looks good';}
  else if(st===4&&sub==='a'){const a=d.ans;
    body=`<h1 class="v2h">Build your <em>future home</em></h1><div class="v2card v2hc">${v2house(a)}</div>
    ${HOME_Q.map(([qi,icn])=>{const q=QS[qi];return `<div class="v2q${v2err('ans.'+qi)}" data-f="ans.${qi}"><p class="v2qt">${ic(icn)}${esc(q.q)}</p><div class="v2qo">${q.o.map((o,j)=>`<button type="button" class="v2chip${a[qi]===j?' on':''}" data-a="v2ans" data-i="${qi}" data-j="${j}">${esc(o)}</button>`).join('')}</div>${errOf('ans.'+qi)}</div>`}).join('')}`;
    cta='My home is ready';}
  else if(st===4){const a=d.ans;const qi=NAT_Q.find(i=>a[i]===null||a[i]===undefined);const k=NAT_Q.indexOf(qi);
    if(qi!==undefined){const [c1,c2,icn]=NAT_ART[qi];
      body=`<div class="v2rowsp"><h1 class="v2h" style="margin:0">This or <em>that?</em></h1><span class="v2pill">${k+1} of ${NAT_Q.length}</span></div>
      <p class="v2lede">Tap the one that is more you. This is how we match nature, not only profiles.</p>
      <div class="v2nat"><div class="v2nat-art" style="background:linear-gradient(135deg,${c1},${c2})">${ic(icn)}</div><h2>${esc(QS[qi].q)}</h2>
       <div class="v2nat-o">${QS[qi].o.map((o,j)=>`<button type="button" class="v2nat-b" data-a="v2ans" data-i="${qi}" data-j="${j}">${esc(o)}</button>`).join('')}</div></div>
      <div class="v2dots">${NAT_Q.map((i,n)=>`<i class="${a[i]!==null&&a[i]!==undefined?'d':n===k?'h':''}"></i>`).join('')}</div>
      ${k>0?`<button type="button" class="linkbtn v2back" data-a="v2natBack">Back to card ${k}</button>`:''}`;
      return `<div class="v2 v2col">${v2head()}<div class="scroll" id="su-scroll"><div class="form pad">${body}</div></div></div>${S.cele2?v2cele():''}`}
    body=`<h1 class="v2h">Your <em>nature</em>, done.</h1>${v2gain('sparkle','Matches will show where your everyday habits fit.')}
    <div class="v2card">${NAT_Q.map(i=>`<button type="button" class="v2natr" data-a="v2natRedo" data-i="${i}"><small>${esc(QS[i].k)}</small><b>${esc(QS[i].o[a[i]])}</b>${ic('chev')}</button>`).join('')}</div>
    <p class="v2lb">Diet</p>${v2chips('diet',v2opts('diet'),d.diet)}
    <p class="v2lb">Smoking</p>${v2chips('sm',v2opts('sm'),d.sm)}
    <p class="v2lb">Drinking</p>${v2chips('dr',v2opts('dr'),d.dr)}`;}
  else if(st===6){if(!d.prefs)d.prefs=defaultPrefs(d);const pr=d.prefs;
    body=`<h1 class="v2h">Who would you <em>like to meet?</em></h1>${v2gain('heart','We set this from your answers. Change anything, any time.')}
    <div class="row2">${pickF('prefs.ageMin','Age from','draft')}${pickF('prefs.ageMax','Age to','draft')}</div>${errOf('prefs.ageMax')}
    <div class="row2">${pickF('prefs.hMin','Height from','draft')}${pickF('prefs.hMax','Height to','draft')}</div>${errOf('prefs.hMax')}
    ${pickF('prefs.liveCountry','Where they live','draft')}${pr.liveCountry===d.country?pickF('prefs.radius','Distance','draft'):''}
    ${pickF('prefs.oc','Their roots: country','draft')}${pr.oc!=='Any'?pickF('prefs.os','Their roots: state / region','draft'):''}
    ${pickF('prefs.religion','Religion','draft')}
    ${pickF('prefs.community','Community','draft',{disabled:pr.religion==='Any'||!commOf(pr.religion).length,hint:pr.religion==='Any'?'Choose a religion to pick a community.':''})}
    ${pr.community!=='Any'?pickF('prefs.alsoComm','Also open to these communities','draft',{hint:'More communities means more matches.'}):''}
    ${pickF('prefs.timeline','Ready to marry','draft')}`;cta='Next: your Trust Passport';}
  return `<div class="v2 v2col">${v2head()}<div class="scroll" id="su-scroll"><div class="form pad">${body}</div></div>${v2foot(cta,foot)}</div>${S.cele2?v2cele():''}`}
function v2gname(){try{const u=API.session().user||{},m=u.user_metadata||{};return String(m.full_name||m.name||'').trim().slice(0,60)}catch(e){return ''}}

/* ---------- screen 10: Trust Passport ---------- */
function v2passport(d){const me=null;const s1=vState(1,d,me),s2=vState(2,d,me),s3=vState(3,d,me),s4=vState(4,d,me);
  const st=s=>s==='ok'||s==='ready'||s==='wait'?'done':'todo';
  const items=[['face','Live selfie + ID','About 1 min',st(s1)],['globe','Roots','About 40 sec',st(s2)],['city','City','About 1 min',st(s3)],['pin','Location','Optional, 10 sec',s4==='ready'||s4==='ok'?'done':'todo']];
  const nx=items.findIndex(x=>x[3]!=='done');
  return `<div class="v2pass"><div class="v2pass-top">${avatar(null,'md',true)}<div class="grow"><small>NEUMARRY · TRUST PASSPORT</small><b>${esc(d.name||'')}</b><span>${d.oc?flag(d.oc)+' Roots '+esc(d.oc):''}${d.country?' · '+flag(d.country)+' Lives '+esc(d.city||d.country):''}</span></div></div>
   <div class="v2stamps">${items.map(([i,t,s,state],n)=>`<div class="v2st ${state}${n===nx?' nx':''}" style="--r:${[-3,2,-1,2][n]}deg">${state==='done'?`<i class="v2ok">${ic('check')}</i>`:''}${ic(i)}<b>${t}</b><small>${state==='done'?'Ready':n===nx?'Next · '+s:s}</small></div>`).join('')}</div></div>
   <p class="v2note">${ic('lock')} Only our safety team sees documents. Deleted 7 days after the check.</p>`}

/* ---------- celebration between parts ---------- */
function v2cele(){const c=V2CELE[S.cele2.at];if(!c)return '';const p=V2PART[(()=>{const [s,b]=V2SEQ[S.cele2.next];return s===3||s===4?s+(b||'a'):String(s)})()]||[5];
  const cf=Array.from({length:30},(_,i)=>`<i style="left:${(i*37)%100}%;animation-delay:${(i%9)*0.06}s;background:${['#E8436B','#B8863A','#2D8A61','#FF8FA1','#E9C98D'][i%5]};--r:${(i*47)%360}deg"></i>`).join('');
  return `<div class="cele v2" role="dialog" aria-live="polite"><div class="cf">${cf}</div><div class="cele-c"><div class="v2seal">${ic('check')}</div><h2>${c[0]}</h2><p>${esc(c[1])}</p>
  <div class="cele-n"><b>Next: ${c[2]} · ${c[3]}</b><span>Part ${p[0]} of 5</span></div>
  ${v2segs().replace('v2segs','v2segs v2segs-c')}<button class="btn primary block" data-a="v2celeGo">Keep going</button><p class="hint" style="text-align:center;margin:8px 0 0">Take a break any time, we save everything.</p></div></div>`}

/* ---------- screen 18: everything is saved ---------- */
function v2leaveSheet(){const i=Math.max(0,v2pos());const left=Math.max(1,Math.round((V2SEQ.length-i)*0.8));
  return sheetShell('Everything is saved',`<div class="v2"><p class="v2lede" style="margin-top:0">You are about ${left} minute${left>1?'s':''} from your matches. Come back any time and pick up right here.</p>
   <div class="v2card" style="margin-top:12px">${v2segs()}<p class="v2note" style="margin-top:10px">${ic('mail')} If you stop now, we email you a reminder after 1 day and once more after 3 days. Nothing more.</p></div></div>`,
   `<button class="btn primary block" data-a="closeSheet">Finish now</button><button class="btn ghost block" data-a="v2out">Log out for now</button>`)}

/* ---------- screen 13: after the last part ---------- */
function v2reveal(){const me=S.me;if(!me)return '';const sent=me.idCheck&&me.selfieCheck;
  const cf=Array.from({length:22},(_,k)=>`<i style="left:${(k*47)%96+2}%;top:${(k*71)%22+4}%;background:${['#E8436B','#FFD7A8','#B8863A','#8FE0B5','#C2B2F4'][k%5]};transform:rotate(${k*37}deg)"></i>`).join('');
  return `<div class="v2rev v2" role="dialog" aria-modal="true"><div class="v2rev-cf" aria-hidden="true">${cf}</div>
   <div class="v2rev-c pad"><div class="v2rev-seal">${ic('shield')}</div>
   <h1 class="v2h" style="text-align:center">${sent?'You’re <em>nearly live.</em>':'Your profile is <em>saved.</em>'}</h1>
   <p class="v2lede" style="text-align:center">${sent?'A person on our team checks your Trust Passport, usually within a day. Then you see only verified people, and they see you.':'Finish your Trust Passport from Me. Then you see only verified people, and they see you.'}</p>
   <div class="v2rev-p">${[[11,'F',0],[42,'M',2],[7,'F',1],[23,'M',3]].map(([s,g,t],i)=>`<span style="--r:${[-6,-2,3,7][i]}deg">${portrait(s,g,{tone:t})}</span>`).join('')}</div>
   <button class="btn primary block" data-a="v2revGo">${sent?'See my profile':'Finish my Trust Passport'}</button></div></div>`}

/* ---------- actions and hooks ---------- */
(function(){
  const _suNext=A.suNext,_suBack=A.suBack;
  A.suNext=async function(){if(!V2()||S.editMode)return _suNext.call(A);
    const d=S.draft,i=v2pos(),[st,sub]=V2SEQ[i]||[S.step,''];
    if(st===5){if(busy)return;const e=validateStep(5,d);S.errors=e;if(Object.keys(e).length){showErrors();return}
      S.step=6;S.v2fin=1;await _suNext.call(A);if(S.screen==='signup'){S.step=5;S.v2fin=0;render()}else{S.v2rev=1;render()}return}
    let e=validateStep(st,d);
    if(st===3&&sub==='a')e=Object.fromEntries(Object.entries(e).filter(([k])=>LIFE_K.includes(k)));
    if(st===3&&sub==='b')e=Object.fromEntries(Object.entries(e).filter(([k])=>!LIFE_K.includes(k)));
    if(st===4&&sub==='a')e=Object.fromEntries(Object.entries(e).filter(([k])=>['ans.0','ans.1','ans.2','ans.3'].includes(k)));
    if(st===3&&sub==='b'&&!d.photo)e.photo='Add one clear photo of you';
    S.errors=e;if(Object.keys(e).length){showErrors();return}
    if(V2CELE[i]){S.cele2={at:i,next:i+1};render();return}
    v2go(i+1)};
  A.suBack=function(){if(!V2()||S.editMode)return _suBack.call(A);if(S.cele2){S.cele2=null;render();return}
    if(S.step===5&&S.draft&&S.draft.vs)return _suBack.call(A);
    const i=v2pos();if(i>0)v2go(i-1);else{sheet={type:'v2leave'};render()}};
  Object.assign(A,{
    v2g(el){const d=S.draft;d.g=el.dataset.v;d.lookingFor=d.g==='M'?'F':'M';delete S.errors.g;delete S.errors.lookingFor;save();render()},
    v2name(){S.v2name=1;render();const f=document.getElementById('f-name');if(f)f.focus()},
    v2ans(el){const d=S.draft;d.ans[+el.dataset.i]=+el.dataset.j;delete S.errors['ans.'+el.dataset.i];save();render()},
    v2natBack(){const d=S.draft;const qi=NAT_Q.find(i=>d.ans[i]===null||d.ans[i]===undefined);const k=NAT_Q.indexOf(qi);if(k>0){d.ans[NAT_Q[k-1]]=null;render()}},
    v2natRedo(el){S.draft.ans[+el.dataset.i]=null;render()},
    v2celeGo(){const n=S.cele2.next;S.cele2=null;v2go(n)},
    v2leave(){sheet={type:'v2leave'};render()},
    v2out(){sheet={type:'logout'};render()},
    v2revGo(){S.v2rev=0;S.tab='me';render()}
  });
  const _rs=renderSheet;renderSheet=function(){return sheet&&sheet.type==='v2leave'?v2leaveSheet():_rs()};
  const _rw=renderWelcome;renderWelcome=function(){return V2()?renderWelcomeV2():_rw()};
  const _su=renderSignup;renderSignupV2.orig=_su;renderSignup=function(){return V2()&&!S.editMode&&!S.suInter?renderSignupV2():_su()};
  const _r=render;render=function(){_r();if(V2()){if(S.screen==='signup'&&S.step===1)v2wheelAfter();if(S.screen==='app'&&S.v2rev&&!app.querySelector('.v2rev'))app.insertAdjacentHTML('beforeend',v2reveal())}};
})();

/* ---------- Family Mixers v2 (his ok 1 Nov 01:01; founder preview) ---------- */
const TALK=['Which festival food from home do you miss most, and who made it best?','What is one thing your city here taught you that home never did?',
 'Which song takes you straight back to where you grew up?','What would your grandmother say is the secret of a good marriage?',
 'Where in the world would you take your family for one perfect week?','What tradition from home do you want your own family to keep?'];
const V2E={crowd:{},quiet:{},tt:0};
function evNow(e){const t=Date.now(),s=e.date.getTime();const m=parseInt(e.dur)||3;return {live:t>=s-15*60e3&&t<=s+m*3600e3+30*60e3,after:t>=s}}
function v2evHero(){const me0=S.me||{};const evs=events().filter(e=>e.status!=='cancelled');if(!evs.length)return '';
  const near=e=>e.city&&me0.city&&e.city.toLowerCase()===String(me0.city).toLowerCase()?0:e.country===me0.country?1:2;
  const e=evs.slice().sort((a,b)=>near(a)-near(b)||a.date-b.date)[0];const f=fmtDay(e.date,e.tz),[wc,wl,mc,ml]=e.seats;
  const bar=(l,n,cap,c)=>`<div class="v2bar"><div><span>${l}</span><b>${n} of ${cap}</b></div><i><u style="width:${cap?Math.round(n/cap*100):0}%;background:${c}"></u></i></div>`;
  return `<button class="v2evh v2" data-a="openEvent" data-id="${e.id}"><span class="v2evh-art">${evArt(e,true)}</span>
   <span class="v2evh-b"><small>${near(e)===0?'Your city · ':''}${esc(e.city||e.country)}</small><b>${esc(e.title)} · ${esc(f.short||f.long)}</b><em>${e.time} · ${esc(e.dur)} · ages ${e.age}</em>
   ${bar('Women',wc-wl,wc,'var(--rose)')}${bar('Men',mc-ml,mc,'#2E5E8C')}
   <span class="v2evh-f"><span class="v2pill">${ic('users')} ${e.parents?'Parents welcome':'Members only'}</span><span class="v2go">See the evening ${ic('chev')}</span></span></span></button>`}
function v2evExtras(e){const c=V2E.crowd[e.id],rv=e.my,n=evNow(e);
  if(c===undefined){V2E.crowd[e.id]=null;API.rpc('event_crowd',{eid:e.id}).then(r=>{V2E.crowd[e.id]=r;render()}).catch(()=>{V2E.crowd[e.id]=0})}
  const crowd=c&&c.booked?`<div class="panel v2"><p class="v2lb" style="margin:0 0 8px">Who is coming · ${c.booked} booked</p>${c.roots.length?`<div class="v2chips">${c.roots.map(x=>`<span class="v2pill">${flag(x.c)||''} ${esc(x.c)} ${x.n}</span>`).join('')}${c.others?`<span class="v2pill" style="background:var(--sunk);color:var(--ink)">+${c.others} more</span>`:''}</div>`:`<p class="v2lede" style="margin:0">Roots show here once 2 or more guests share a country.</p>`}
   <p class="v2note" style="margin-top:8px">${ic('shield')} All verified · ages ${e.age}${c.parents?` · ${c.parents} parent${c.parents>1?'s':''} coming too`:''}. No names before the evening.</p></div>`:'';
  const paid=rv&&rv.status==='paid';
  const live=paid&&n.live?`<button class="v2act" data-a="v2talk"><span class="ibox">${ic('chat')}</span><span><b>Table talk cards</b><small>Easy questions for your table, from many roots</small></span>${ic('chev')}</button>`:'';
  const quiet=paid&&n.after?`<button class="v2act" data-a="v2quiet" data-id="${e.id}"><span class="ibox">${ic('heart')}</span><span><b>Quiet yes</b><small>Say privately whom you would like to see again. Only mutual yeses are shown, next morning.</small></span>${ic('chev')}</button>`:'';
  return live+quiet+crowd}
function v2talkSheet(){const k=V2E.tt%TALK.length;return sheetShell('Table talk',`<div class="v2"><div class="v2tt"><small>EVERYONE ANSWERS · 1 MIN EACH</small><p>${esc(TALK[k])}</p><span>Card ${k+1} of ${TALK.length}</span></div>
  <p class="v2note" style="margin-top:10px">${ic('info')} No scores, no wrong answers. Pass the phone around if you like.</p></div>`,`<button class="btn primary block" data-a="v2talkNext">Next card</button>`)}
function v2quietSheet(){const q=V2E.quiet[sheet.id]||{};
  if(q.err)return sheetShell('Quiet yes',`<div class="v2"><p class="v2lede" style="margin:0">${q.err==='not_checked_in'?'Quiet yes opens for guests who were checked in at the door.':'Quiet yes opens when the evening starts.'}</p></div>`);
  if(!q.list)return sheetShell('Quiet yes',`<div class="v2" style="padding:20px 0;text-align:center">${spinner('Loading')}</div>`);
  const reveal=q.list[0]&&q.list[0].reveal?new Date(q.list[0].reveal):null,open=!reveal||Date.now()<reveal.getTime();
  const mut=q.mutual||[];
  return sheetShell('Quiet yes',`<div class="v2"><h2 class="v2h" style="font-size:22px;margin:0">Who would you like to <em>see again?</em></h2>
   <p class="v2lede" style="margin:6px 0 12px">Only you see your answers. If you both say yes, we show you both ${reveal?'from '+esc(fmtTime(reveal))+' '+esc(fmtDay(reveal).long):'next morning'}. Nobody learns about a "no".</p>
   ${!open?(mut.length?`<div class="v2card" style="display:grid;gap:8px"><b>You both said yes</b>${mut.map(m=>`<button class="v2act" data-a="open" data-id="${m.id}"><span class="ibox">${ic('heart')}</span><span><b>${esc(m.first)}</b><small>Open the profile and send an interest</small></span>${ic('chev')}</button>`).join('')}</div>`:`<div class="v2card"><b>No mutual yes this time.</b><p class="v2lede" style="margin:4px 0 0">That is normal after one evening. Your matches and the next Mixer are waiting.</p></div>`):
    (q.list.length?q.list.map(p=>`<button class="v2qp${p.yes?' on':''}" data-a="v2quietTap" data-id="${p.id}">${p.photo&&urlOf(p.photo)?`<img src="${esc(urlOf(p.photo))}" alt="">`:`<span class="v2qi">${esc(initials(p.first))}</span>`}<span><b>${esc(p.first)}, ${p.age}</b><small>${flag(p.origin)||''} ${esc(p.origin||'')}</small></span><i>${ic('heart')}</i></button>`).join(''):`<p class="v2lede">Nobody else is checked in yet.</p>`)}
   <p class="v2note" style="margin-top:12px">${ic('lock')} Private by design. Your family sees nothing here.</p></div>`)}
async function v2quietLoad(eid){V2E.quiet[eid]={};render();
  try{const list=await API.rpc('quiet_people',{eid});await signPaths(list.map(x=>x.photo).filter(Boolean));let mutual=[];
    if(list[0]&&Date.now()>=Date.parse(list[0].reveal))mutual=await API.rpc('quiet_mutual',{eid});V2E.quiet[eid]={list,mutual}}
  catch(err){V2E.quiet[eid]={err:String((err&&(err.message||err.code))||'').includes('not_started')?'not_started':'not_checked_in'}}render()}
(function(){
  const _re=renderEvents;renderEvents=function(){const h=_re();if(!V2())return h;return h.replace('<div class="main-inner pad">','<div class="main-inner pad">'+v2evHero())};
  const _rv=renderEventView;renderEventView=function(id){const h=_rv(id);if(!V2()||!h)return h;const e=evById(id);const k='<div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">';
    return h.replace(k,k+v2evExtras(e))};
  const _rs2=renderSheet;renderSheet=function(){if(sheet&&sheet.type==='v2talk')return v2talkSheet();if(sheet&&sheet.type==='v2quiet')return v2quietSheet();return _rs2()};
  Object.assign(A,{
    v2talk(){sheet={type:'v2talk'};render()},
    v2talkNext(){V2E.tt++;render()},
    v2quiet(el){const id=el.dataset.id;sheet={type:'v2quiet',id};v2quietLoad(id)},
    async v2quietTap(el){const eid=sheet.id,q=V2E.quiet[eid];const p=q&&q.list&&q.list.find(x=>x.id===el.dataset.id);if(!p)return;
      p.yes=!p.yes;render();try{await API.rpc('quiet_set',{eid,to_user:p.id,yes:p.yes})}catch(err){p.yes=!p.yes;render();toast('Quiet yes is closed for this evening.','info')}}
  });
})();

/* ---------- Restaurant link (team only) and Host your city (his ok 1 Nov 01:01, screens 25 and 26) ---------- */
(function(){
  const _rv=renderEventView;renderEventView=function(id){const h=_rv(id);if(!h||!(S.me&&S.me.isAdmin))return h;
    const k='<div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">';
    return h.replace(k,k+`<button class="v2act v2" data-a="v2partner" data-id="${id}"><span class="ibox">${ic('home')}</span><span><b>Restaurant link (team only)</b><small>Private page with guest numbers and dinner count, no names</small></span>${ic('chev')}</button>`)};
  const _re=renderEvents;renderEvents=function(){const h=_re();return V2()?h.replace('data-a="hostAsk"','data-a="v2hostInfo"'):h};
  const _rs=renderSheet;renderSheet=function(){
    if(sheet&&sheet.type==='v2partner')return sheetShell('Restaurant link',`<div class="v2">${sheet.url?`<p class="v2lede" style="margin:0 0 10px">Send this to the restaurant. It shows only numbers: guests, parents, dinner choices and timings. It stops 2 days after the evening.</p>
      <div class="v2card" style="word-break:break-all;font-weight:800">${esc(sheet.url)}</div>`:sheet.err?`<p class="v2lede">${esc(sheet.err)}</p>`:`<div style="text-align:center;padding:16px">${spinner('Making the link')}</div>`}</div>`,
      sheet.url?`<button class="btn primary block" data-a="copyCode" data-k="${esc(sheet.url)}">${ic('copy')} Copy link</button>`:'');
    if(sheet&&sheet.type==='v2host')return sheetShell('Host Family Mixers',`<div class="v2"><h2 class="v2h" style="font-size:22px;margin:0">Host Family Mixers <em>in your city</em></h2>
      <p class="v2lede" style="margin:6px 0 12px">Warm, organised people who know their community. You welcome about 60 guests and their families, and keep the evening easy.</p>
      <div class="v2card" style="display:grid;gap:10px">${[['clock','One evening a month','About 5 hours with setup'],['shield','You are verified first','ID, roots and city, like every member'],['users','We give you everything','Guest list, table cards and the check-in app'],['sparkle','CA$100 for every event','Training included']].map(([i,a,b])=>`<div class="v2row" style="align-items:flex-start"><span class="ibox" style="width:34px;height:34px;border-radius:11px;display:grid;place-items:center;background:var(--rose-soft);color:var(--rose-deep);flex:none">${ic(i)}</span><div><b style="font-size:14px">${a}</b><small>${b}</small></div></div>`).join('')}</div></div>`,
      `<button class="btn primary block" data-a="hostAsk">${S.hostSent?'See my application':'Apply in 2 minutes'}</button>`);
    return _rs()};
  Object.assign(A,{
    async v2partner(el){const id=el.dataset.id;sheet={type:'v2partner',id};render();
      try{const t=await API.rpc('admin_partner_link',{eid:id});if(sheet&&sheet.type==='v2partner'){sheet.url=CFG.site+'partner.html?k='+t;render()}}
      catch(err){if(sheet&&sheet.type==='v2partner'){sheet.err='Could not make the link. Try again.';render()}}},
    v2hostInfo(){sheet={type:'v2host'};render()}
  });
})();

/* ---------- Match card: 3 rings Roots / Life plan / Nature with a "why" line (mock screen 14) ---------- */
function v2rings(p){const me=S.me;if(!me||!me.ans)return null;const c=compat(p);
  const ag=is=>is.reduce((s,i)=>{const d=Math.abs((me.ans[i]??1)-(p.ans[i]??1));return s+(d===0?1:d===1?.5:0)},0)/is.length;
  const pc=x=>Math.max(1,Math.min(99,Math.round(x*100)));
  return {roots:pc(c.roots*.7+c.loc*.3),life:pc(ag([0,1,2,3,8])*.8+c.pref*.2),nature:pc(ag([4,5,6,7])*.7+c.life*.3)}}
function v2ringRow(p){const r=v2rings(p);if(!r)return '';
  const one=(n,col,l,s)=>`<div class="v2ring"><span style="--p:${n}%;--c:${col}"><b>${n}%</b></span><em>${l}</em><small>${esc(s)}</small></div>`;
  const me=S.me,a=i=>QS[i].o[p.ans[i]]||'';
  const rootsSub=p.oc===me.oc?(p.t===me.t&&p.t?p.t:'Same roots'):(p.oc||'');
  return `<div class="v2rings v2">${one(r.roots,'var(--rose)','Roots',rootsSub)}${one(r.life,'var(--gold)','Life plan',(QS[8].o[p.ans[8]]||'').replace(/^Within/,'Marry within'))}${one(r.nature,'var(--good)','Nature',me.ans[5]===p.ans[5]?'Same weekends':(QS[5].o[p.ans[5]]||''))}</div>`}
(function(){
  const _card=card;card=function(p){const h=_card(p);if(!V2())return h;
    return h.replace('<ul class="nm-why">',v2ringRow(p)+'<ul class="nm-why">')};
})();

/* ---------- Reply to a part of a profile (mock screen 15) ---------- */
function v2replyOpts(p){const me=S.me,out=[];
  if(p.oc===me.oc&&p.os&&p.os===me.os)out.push(`We are both from ${p.os}!`);else if(p.oc===me.oc)out.push(`Another ${p.oc} family abroad, nice to see you here`);
  if(p.t&&p.t===me.t)out.push(`We could talk in ${p.t}`);
  const RP={0:['We both want to stay in our city','We are both open to moving within the country','We are both open to another country'],1:['Full careers for both of us, same here','Deciding careers together sounds right to me','Same view on home and career'],
   2:['Living with parents, same for me','A home near our parents, same here','Independent but close to family, same here'],3:['Kids early, same for me','Same pace on kids','I am also not sure yet about kids'],5:['Family weekends are my favourite too','Weekends with friends, same here','Travel weekends, same here']};
  for(const i of [0,3,1,2,5]){if(out.length>=3)break;const a=p.ans[i];if(me.ans[i]===a&&RP[i]&&RP[i][a])out.push(RP[i][a])}
  out.push('I would love to know more about you');return out.slice(0,4)}
function v2noteFrom(id){const i=(RAW.ints||[]).find(x=>x.from_user===id&&x.to_user===(S.me&&S.me.id)&&x.note);return i?i.note:''}
(function(){
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const h=_pv(id,isMe);if(!V2()||isMe)return h;const p=byId(id);if(!p)return h;
    const k=`<div class="panel"><h3>About</h3><p class="notr">${esc(p.about)}</p></div>`;if(!h.includes(k))return h;
    const got=v2noteFrom(id);const st=S.interests[id];const cur=(S.v2note||{})[id]||'';
    const box=got?`<div class="panel v2 v2got"><p class="v2lb" style="margin:0 0 6px">${esc(p.first||'They')} replied to your profile</p><p class="v2q">“${esc(got)}”</p></div>`
      :(!st||st==='none')&&!locked(p)?`<div class="panel v2"><p class="v2lb" style="margin:0 0 8px">Reply to this · one tap</p><div class="v2chips">${v2replyOpts(p).map(o=>`<button type="button" class="v2chip${cur===o?' on':''}" data-a="v2note" data-id="${id}" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div>
        <p class="v2note" style="margin-top:8px">${ic('heart')} ${cur?'Sent together with your interest.':'Pick one, then send your interest. A reply is easier to answer than “hi”.'}</p></div>`:'';
    return h.replace(k,k+box)};
  const _int=A.interest;A.interest=async function(el){const id=el.dataset.id,note=V2()&&(S.v2note||{})[id];
    if(!note||S.interests[id]==='received'||needVerified()||!isGold())return _int.call(A,el);
    const p=byId(id);S.interests[id]='sent';S.passed=S.passed.filter(x=>x!==id);save();render();
    try{await API.insert('interests',{from_user:S.me.id,to_user:id,note:note.slice(0,140),note_on:'About'},{returning:false});toast(`Interest and your reply sent to ${p.first}.`,'heart')}
    catch(e){delete S.interests[id];render();fail(e)}};
  A.v2note=function(el){S.v2note=S.v2note||{};const id=el.dataset.id;S.v2note[id]=S.v2note[id]===el.dataset.v?'':el.dataset.v;render()};
})();

/* ---------- Family circle (mock screen 17): share people from your matches with family ---------- */
const FAM={list:null,busy:false};
function famLoad(){if(FAM.list||FAM.busy)return;FAM.busy=true;API.rpc('my_family_shares').then(r=>{FAM.list=r||[];FAM.busy=false;render()}).catch(()=>{FAM.list=[];FAM.busy=false})}
function famHas(id){return (FAM.list||[]).some(x=>x.id===id)}
function famBlock(){famLoad();const L=FAM.list||[];if(!L.length)return `<div class="panel v2"><p class="v2lb" style="margin:0 0 6px">Family circle</p><p class="v2lede" style="margin:0">Tap <b>Share with family</b> on anyone in your matches. Your family sees them on your private link and tells you 👍 or 🤔. They never talk to your matches.</p></div>`;
  return `<div class="panel v2"><div class="v2rowsp"><p class="v2lb" style="margin:0">Family circle · ${L.length} shared</p>${S.bioUntil?'':`<button class="v2pill" data-a="shareBio">Send link</button>`}</div>
   <div style="display:grid;gap:8px;margin-top:10px">${L.map(x=>{const p=byId(x.id);const nm=p?shown(p):'Member';const rs=x.reactions||[];
    return `<button class="v2famr" data-a="open" data-id="${x.id}">${p?avatar(p,'sm'):''}<span><b>${esc(nm)}${p?', '+p.age:''}</b><small>${rs.length?rs.slice(0,2).map(r=>`${r.reaction==='good'?'👍 Looks good':'🤔 Let’s talk'}${r.who?' · '+esc(r.who):''}`).join(' &nbsp; '):'No answer yet'}</small></span>${ic('chev')}</button>`}).join('')}</div>
   <p class="v2note" style="margin-top:8px">${ic('lock')} Family sees first name, age, work, roots and city only. No photos or contacts. You decide.</p></div>`}
(function(){
  const _me=renderMe;renderMe=function(){const h=_me();if(!V2())return h;const k='<button class="likes nm-bio" data-a="shareBio">';return h.includes(k)?h.replace(k,famBlock()+k):h};
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const h=_pv(id,isMe);if(!V2()||isMe)return h;const p=byId(id);if(!p||locked(p)||!(p.v&&p.v.id&&p.v.selfie&&p.v.roots&&p.v.lives))return h;famLoad();
    const on=famHas(id);const btn=`<button class="v2act v2" data-a="v2fam" data-id="${id}" style="${on?'background:var(--good-soft,#E9F5EE);border-color:var(--good)':''}"><span class="ibox">${ic('users')}</span><span><b>${on?'Shared with your family':'Share with family'}</b><small>${on?'Tap to remove. Your family sees first name, age, work, roots and city.':'Your family sees safe facts on your private link and answers 👍 or 🤔'}</small></span>${ic(on?'check':'chev')}</button>`;
    const k='<div class="panel"><h3>About</h3>';return h.includes(k)?h.replace(k,btn+k):h};
  A.v2fam=async function(el){const id=el.dataset.id,on=!famHas(id);
    try{await API.rpc('family_share',{target:id,on_:on});FAM.list=null;famLoad();toast(on?'Shared with your family. Send them your biodata link from Me.':'Removed from your family circle.',on?'users':'check')}
    catch(e){toast(String((e&&(e.message||e.code))||'').includes('max_10')?'You can share up to 10 people. Remove one first.':'Could not share. Try again.','info')}};
})();

/* ---------- Live selfie ring + guided ID capture (mock screens 11 and 12) ----------
   Selfie: front camera, three short prompts (look straight, a little right, a little left) while the ring fills;
   the straight-ahead frame is kept. ID: back camera with a frame guide; after the tap we check light and
   sharpness on the phone and ask for a retake if needed. Falls back to the normal file picker when the
   camera is not allowed. Our team still checks every selfie and ID by hand. */
const CAM={on:false,mode:'',stream:null,step:0,checks:[],err:'',shot:null,timer:null};
const SELFIE_STEPS=['Look straight at the camera','Now turn a little to your right','Now a little to your left','Hold still…'];
function camLayer(){if(!CAM.on)return '';const sf=CAM.mode==='selfie';const pct=sf?Math.min(100,Math.round(CAM.step/3*100)):0;
  return `<div class="v2cam v2" role="dialog" aria-label="${sf?'Live selfie':'Scan your ID'}">
   <div class="v2cam-top"><span class="v2pill" style="background:rgba(255,255,255,.12);color:#fff">${ic(sf?'camera':'id')} ${sf?'Stamp 1 · Live selfie':'Stamp 1 · ID'}</span><button class="iconbtn" data-a="camClose" aria-label="Close" style="color:#fff">${ic('x')}</button></div>
   ${CAM.err?`<div class="v2cam-err"><p>${esc(CAM.err)}</p><span class="btn primary file">${ic(sf?'camera':'plus')}${sf?'Take a selfie instead':'Choose a photo instead'}<input type="file" accept="image/*" ${sf?'capture="user" data-file="selfie"':'data-file="id"'} aria-label="Choose photo"></span></div>`:
   sf?`<div class="v2ring-wrap"><svg viewBox="0 0 240 240" class="v2ring-svg"><circle cx="120" cy="120" r="112" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="8"/><circle cx="120" cy="120" r="112" fill="none" stroke="#8FE0B5" stroke-width="8" stroke-linecap="round" stroke-dasharray="704" stroke-dashoffset="${704-704*pct/100}" transform="rotate(-90 120 120)"/></svg><video id="cam-v" playsinline muted autoplay class="v2cam-v sf"></video></div>
     <h2 class="v2h" style="color:#fff;text-align:center;margin-top:22px">${esc(SELFIE_STEPS[Math.min(CAM.step,3)])}</h2><p class="v2cam-s">${pct}% · keep your face inside the circle</p>`
   :`<div class="v2id-wrap"><video id="cam-v" playsinline muted autoplay class="v2cam-v"></video><i class="c1"></i><i class="c2"></i><i class="c3"></i><i class="c4"></i></div>
     <h2 class="v2h" style="color:#fff;text-align:center;margin-top:18px">Hold your ID <em style="color:#FFB4C2">inside the frame</em></h2>
     ${CAM.checks.length?`<div class="v2cam-ck">${CAM.checks.map(([ok,t])=>`<span class="${ok?'ok':'no'}">${ic(ok?'check':'x')}${esc(t)}</span>`).join('')}</div>`:'<p class="v2cam-s">Flat, all 4 corners visible, no glare</p>'}
     <button class="v2shut" data-a="camShot" aria-label="Take photo"><i></i></button>`}
   <p class="v2cam-f">${ic('lock')} ${sf?'Used only to match your ID. Never shown on your profile.':'Only our safety team sees it. Deleted 7 days after the check.'}</p></div>`}
async function camOpen(mode){CAM.on=true;CAM.mode=mode;CAM.step=0;CAM.checks=[];CAM.err='';render();
  try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error('none');
    CAM.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:mode==='selfie'?'user':'environment',width:{ideal:1280}},audio:false});
    const v=document.getElementById('cam-v');if(v){v.srcObject=CAM.stream;await v.play().catch(()=>{})}
    if(mode==='selfie')camSelfieRun()}
  catch(e){CAM.err=mode==='selfie'?'The camera is not allowed, so we cannot do the live check here.':'The camera is not allowed here.';render()}}
function camStop(){clearTimeout(CAM.timer);if(CAM.stream){CAM.stream.getTracks().forEach(t=>t.stop());CAM.stream=null}CAM.on=false}
function camFrame(maxW){const v=document.getElementById('cam-v');if(!v||!v.videoWidth)return null;const s=Math.min(1,maxW/v.videoWidth);
  const c=document.createElement('canvas');c.width=Math.round(v.videoWidth*s);c.height=Math.round(v.videoHeight*s);const x=c.getContext('2d');
  if(CAM.mode==='selfie'){x.translate(c.width,0);x.scale(-1,1)}x.drawImage(v,0,0,c.width,c.height);return c}
function camQuality(c){const x=c.getContext('2d'),w=Math.min(320,c.width),h=Math.round(c.height*w/c.width);const t=document.createElement('canvas');t.width=w;t.height=h;t.getContext('2d').drawImage(c,0,0,w,h);
  const d=t.getContext('2d').getImageData(0,0,w,h).data;let sum=0,lap=0,n=0;const g=i=>.299*d[i]+.587*d[i+1]+.114*d[i+2];
  for(let y=1;y<h-1;y+=2)for(let xx=1;xx<w-1;xx+=2){const i=(y*w+xx)*4;const v=g(i);sum+=v;const l=4*v-g(i-4)-g(i+4)-g(i-w*4)-g(i+w*4);lap+=l*l;n++}
  return {light:sum/n,sharp:lap/n}}
function camGive(c,kind){c.toBlob(b=>{if(!b)return;const f=new File([b],kind==='selfie'?'selfie.jpg':'id.jpg',{type:'image/jpeg'});
  const inp=document.createElement('input');inp.type='file';inp.dataset.file=kind;inp.style.display='none';app.appendChild(inp);
  try{const dt=new DataTransfer();dt.items.add(f);inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){toast('Could not use the camera photo. Choose a photo instead.','info')}
  setTimeout(()=>inp.remove(),2000)},'image/jpeg',.9)}
function camSelfieRun(){let keep=null;const tick=()=>{if(!CAM.on)return;
  if(CAM.step===0){const c=camFrame(900);if(c)keep=c}
  CAM.step++;render();const v=document.getElementById('cam-v');if(v&&CAM.stream&&!v.srcObject){v.srcObject=CAM.stream;v.play().catch(()=>{})}
  if(CAM.step>=3){CAM.timer=setTimeout(()=>{if(!CAM.on)return;const c=keep||camFrame(900);camStop();render();if(c)camGive(c,'selfie')},700);return}
  CAM.timer=setTimeout(tick,1600)};CAM.timer=setTimeout(tick,1800)}
(function(){
  const _r=render;render=function(){_r();if(CAM.on){app.insertAdjacentHTML('beforeend',camLayer());const v=document.getElementById('cam-v');if(v&&CAM.stream){v.srcObject=CAM.stream;v.play().catch(()=>{})}}};
  Object.assign(A,{
    camSelfie(){camOpen('selfie')},camId(){camOpen('id')},
    camClose(){camStop();render()},
    camShot(){const c=camFrame(1800);if(!c)return;const q=camQuality(c);
      const ok=[[q.light>60&&q.light<235,q.light<=60?'Too dark: find more light':q.light>=235?'Too bright: avoid glare':'Good light'],[q.sharp>120,q.sharp>120?'Sharp':'A bit blurry: hold steady']];
      CAM.checks=ok;if(ok.every(x=>x[0])){camStop();render();camGive(c,'id')}else render()}
  });
  const _gb=goBack;goBack=function(){if(CAM.on){camStop();render();return true}return _gb()};
})();

/* ---------- Voice intro (mock screen 9): record up to 30 s, our team listens, then matches can play it ---------- */
const VPROMPTS=['A Sunday with me looks like…','My family is…','I am proud of…','Back home, I miss…'];
const VREC={rec:null,chunks:[],t0:0,timer:null,sec:0,blob:null,url:'',prompt:VPROMPTS[0],state:'idle',err:''};
const VOICE={me:undefined,of:{},urls:{}};
function vrecBox(where){const r=VREC;const has=!!r.blob;const mine=VOICE.me;
  return `<div class="v2card v2voice" data-w="${where}"><div class="v2rowsp"><b>${ic('mic')} Say hello in your voice</b><small class="v2pill" style="background:var(--sunk);color:var(--ink)">optional · 30 sec</small></div>
   <div class="v2chips" style="margin-top:8px">${VPROMPTS.map(p=>`<button type="button" class="v2chip${r.prompt===p?' on':''}" data-a="vPrompt" data-v="${esc(p)}">${esc(p)}</button>`).join('')}</div>
   ${r.err?`<p class="v2note" style="margin-top:8px">${ic('info')} ${esc(r.err)}</p>`:''}
   <div class="v2vrow">${r.state==='rec'?`<button class="v2mic on" data-a="vStop" aria-label="Stop"><i></i></button><span><b>Recording · 0:${String(r.sec).padStart(2,'0')}</b><small>Tap to stop. Stops by itself at 0:30.</small></span>`
     :has?`<audio controls src="${esc(r.url)}" preload="metadata"></audio>`
     :`<button class="v2mic" data-a="vStart" aria-label="Record">${ic('mic')}</button><span><b>Tap and talk</b><small>Speak about “${esc(r.prompt.replace('…',''))}”. No phone numbers or contacts.</small></span>`}</div>
   ${has&&r.state!=='rec'?`<div class="v2rowsp" style="margin-top:8px"><button class="btn ghost sm" data-a="vRedo">${ic('refresh')}Record again</button>${where==='me'?`<button class="btn primary sm" data-a="vSend">Send for a quick check</button>`:`<small class="v2note">${ic('check')} Sent when you finish</small>`}</div>`:''}
   ${where==='me'&&mine&&!has?`<p class="v2note" style="margin-top:8px">${mine.status==='approved'?`${ic('check')} Your voice intro is live on your profile.`:mine.status==='pending'?`${ic('clock')} Our team listens to it, usually within a day.`:`${ic('info')} Not approved${mine.note?': '+esc(mine.note):''}. Record a new one.`}</p>`:''}
   <p class="v2note" style="margin-top:6px">${ic('lock')} Only verified members you can see will hear it. Our team listens first.</p></div>`}
async function vStartRec(){const r=VREC;r.err='';
  try{const st=await navigator.mediaDevices.getUserMedia({audio:true});const mt=['audio/webm;codecs=opus','audio/mp4','audio/webm'].find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))||'';
    r.rec=new MediaRecorder(st,mt?{mimeType:mt}:undefined);r.chunks=[];r.rec.ondataavailable=e=>{if(e.data&&e.data.size)r.chunks.push(e.data)};
    r.rec.onstop=()=>{st.getTracks().forEach(t=>t.stop());clearInterval(r.timer);r.blob=new Blob(r.chunks,{type:r.rec.mimeType||'audio/webm'});r.url=URL.createObjectURL(r.blob);r.state='idle';if(r.sec<2){r.blob=null;r.err='That was very short. Try again and talk a little longer.'}if(S.draft)S.draft.voiceBlob=r.blob;render()};
    r.rec.start();r.state='rec';r.sec=0;r.t0=Date.now();r.timer=setInterval(()=>{r.sec=Math.floor((Date.now()-r.t0)/1000);if(r.sec>=30){r.rec.stop()}else render()},500);render()}
  catch(e){r.err='The microphone is not allowed here. You can add a voice intro later from Me.';render()}}
async function vUpload(blob,prompt,secs){const uid=API.userId();const ext=/mp4/.test(blob.type)?'m4a':'webm';const path=`${uid}/intro-${Date.now()}.${ext}`;
  await API.upload('voice',path,blob);await API.rpc('voice_save',{p:path,prm:prompt,secs:Math.max(1,Math.min(40,secs||1))});VOICE.me=undefined}
function vMeLoad(){if(VOICE.me!==undefined)return;VOICE.me=null;API.rpc('voice_of',{uid:API.userId()}).then(r=>{VOICE.me=r||null;render()}).catch(()=>{})}
function vOfLoad(id){if(VOICE.of[id]!==undefined)return;VOICE.of[id]=null;API.rpc('voice_of',{uid:id}).then(async r=>{VOICE.of[id]=r||0;if(r&&r.path){try{const u=await API.signMany('voice',[r.path],3600);VOICE.urls[id]=u[r.path]}catch(e){}}render()}).catch(()=>{VOICE.of[id]=0})}
(function(){
  /* sign-up: on the photo studio step, under "Pick 3" */
  const _su=renderSignupV2;renderSignupV2=function(){const h=_su();if(S.step===3&&(S.draft.v2b||'a')==='b'){const k='<p class="v2lb">Pick 3 that are so you</p>';return h.replace(k,vrecBox('su')+k)}return h};
  renderSignupV2.orig=_su.orig;
  /* after the profile is saved, send the voice intro */
  const _nx=A.suNext;A.suNext=async function(){const vb=S.draft&&S.draft.voiceBlob,pr=VREC.prompt,sec=VREC.sec;await _nx.call(A);
    if(vb&&S.screen==='app'){try{await vUpload(vb,pr,sec);VREC.blob=null;toast('Your voice intro is with our team for a quick listen.','check')}catch(e){}}};
  const _me=renderMe;renderMe=function(){const h=_me();if(!V2())return h;vMeLoad();const k='<button class="likes nm-bio" data-a="shareBio">';return h.includes(k)?h.replace(k,vrecBox('me')+k):h};
  const _pv=renderProfileView;renderProfileView=function(id,isMe){const h=_pv(id,isMe);if(!V2()||isMe)return h;vOfLoad(id);const v=VOICE.of[id],u=VOICE.urls[id];if(!v||!u)return h;
    const box=`<div class="panel v2"><p class="v2lb" style="margin:0 0 8px">${ic('mic')} Hear ${esc((byId(id)||{}).first||'them')}${v.prompt?' · '+esc(v.prompt):''}</p><audio controls preload="none" src="${esc(u)}" style="width:100%"></audio></div>`;
    const k='<div class="panel"><h3>About</h3>';return h.includes(k)?h.replace(k,box+k):h};
  Object.assign(A,{
    vPrompt(el){VREC.prompt=el.dataset.v;render()},vStart(){vStartRec()},vStop(){if(VREC.rec&&VREC.rec.state==='recording')VREC.rec.stop()},
    vRedo(){VREC.blob=null;VREC.url='';if(S.draft)S.draft.voiceBlob=null;render()},
    async vSend(el){if(!VREC.blob)return;el.disabled=true;try{await vUpload(VREC.blob,VREC.prompt,VREC.sec);VREC.blob=null;toast('Sent. Our team listens to it, usually within a day.','check');vMeLoad()}catch(e){el.disabled=false;toast('Could not send. Try again.','info')}render()}
  });
  /* team: voice intros to check, at the top of the review queue */
  const _ra=renderAdmin;renderAdmin=function(){const h=_ra();const a=S.admin||{};if(a.voices===undefined){a.voices=null;S.admin=a;
      API.rpc('admin_voice_queue').then(async L=>{a.voices=L||[];const u=L&&L.length?await API.signMany('voice',L.map(x=>x.path),3600).catch(()=>({})):{};a.vurls=u;render()}).catch(()=>{a.voices=[]})}
    const L=a.voices||[];if(!L.length)return h;
    const box=`<div class="panel v2"><h3>Voice intros to check (${L.length})</h3><p class="hint">Approve only if there is no phone number, contact, money talk or anything rude.</p>${L.map(x=>`<div class="v2card" style="margin-top:8px"><b>${esc(x.full_name)}</b> <small class="hint">${esc(x.prompt||'')} · ${x.seconds||'?'} s</small><audio controls preload="none" src="${esc((a.vurls||{})[x.path]||'')}" style="width:100%;margin-top:6px"></audio><div class="v2rowsp" style="margin-top:6px"><button class="btn ghost sm" data-a="vAdm" data-id="${x.user_id}" data-ok="0">Not ok</button><button class="btn primary sm" data-a="vAdm" data-id="${x.user_id}" data-ok="1">Approve</button></div></div>`).join('')}</div>`;
    const k='id="view-scroll"><div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">';return h.includes(k)?h.replace(k,k+box):h};
  A.vAdm=async function(el){const ok=el.dataset.ok==='1';try{await API.rpc('admin_voice',{uid:el.dataset.id,ok,why:ok?null:'Please record again without contact details.'});S.admin.voices=S.admin.voices.filter(x=>x.user_id!==el.dataset.id);render();toast(ok?'Voice intro approved.':'Sent back.','check')}catch(e){toast('Could not save. Try again.','info')}};
})();

/* ---------- Safe talk (mock screen 16): privacy line, scam shield, and plan a call in both time zones ---------- */
function tzOfP(p){return TZCITY[p.cityName||p.city]||TZC[p.country]||undefined}
function hourIn(d,tz){try{return +new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'numeric',hourCycle:'h23'}).format(d)}catch(e){return d.getHours()}}
function callSlots(theirs){const out=[],now=new Date();const ok=h=>h>=9&&h<=21;
  for(let d=1;d<=10&&out.length<6;d++){for(const h of [19,20,18,11,16,9,21,8,22,7,13]){const s=new Date(now);s.setDate(now.getDate()+d);s.setHours(h,0,0,0);
    if(ok(s.getHours())&&(!theirs||ok(hourIn(s,theirs)))){out.push(s);break}}}
  if(!out.length){for(let d=1;d<=6;d++){const s=new Date(now);s.setDate(now.getDate()+d);s.setHours(19,0,0,0);out.push(s)}}return out}
function fmtSlot(d,tz){try{return d.toLocaleString('en-US',{timeZone:tz,weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}catch(e){return d.toLocaleString('en-US',{weekday:'short',hour:'numeric',minute:'2-digit'})}}
(function(){
  const _cv=renderChatView;renderChatView=function(id){const h=_cv(id);if(!V2()||!canChat(id))return h;const p=byId(id);
    const top=`<div class="v2safe v2"><span>${ic('lock')} Your numbers stay private</span><span>${ic('shield')} Scam shield on</span><button class="v2pill" data-a="callPlan" data-id="${id}">${ic('video')} Plan a call</button></div>`;
    const k='<div class="scroll" id="chat-scroll">';return h.replace(k,top+k)};
  const _rs=renderSheet;renderSheet=function(){if(!sheet||sheet.type!=='callPlan')return _rs();const p=byId(sheet.id);if(!p)return _rs();
    const mine=Intl.DateTimeFormat().resolvedOptions().timeZone,theirs=tzOfP(p);const sl=callSlots(theirs);
    return sheetShell('Plan a video call',`<div class="v2"><p class="v2lede" style="margin:0 0 10px">Times that are between 9 am and 9 pm for both of you. Pick one. We send ${esc(p.first||'them')} a message with the time in both your time zones. Share a video link only when you both are ready, and never move to a chat outside NeuMarry before you have met on video.</p>
     <div style="display:grid;gap:8px">${sl.map((s,i)=>`<button class="v2qp${sheet.pick===i?' on':''}" data-a="callPick" data-i="${i}"><span><b>${esc(fmtSlot(s,mine))}</b><small>${theirs&&theirs!==mine?`${esc(p.first||'Them')}: ${esc(fmtSlot(s,theirs))}`:'Same time zone'}</small></span><i>${ic('check')}</i></button>`).join('')}</div></div>`,
     `<button class="btn primary block" data-a="callSend"${sheet.pick===undefined?' disabled':''}>Send this time</button>`)};
  Object.assign(A,{
    callPlan(el){sheet={type:'callPlan',id:el.dataset.id};render()},
    callPick(el){sheet.pick=+el.dataset.i;render()},
    async callSend(){const p=byId(sheet.id);if(!p||sheet.pick===undefined)return;const mine=Intl.DateTimeFormat().resolvedOptions().timeZone,theirs=tzOfP(p);const s=callSlots(theirs)[sheet.pick];
      const x=`Would you like a video call on ${fmtSlot(s,mine)} my time${theirs&&theirs!==mine?` (${fmtSlot(s,theirs)} your time)`:''}?`;
      const id=sheet.id;sheet=null;render();const ci=document.getElementById('chat-in');if(ci){ci.value=x;A.send({dataset:{id}})}}
  });
})();

/* ---------- Booking and ticket, new look (mock screens 22 + 23) ---------- */
(function(){
  const _rs=renderSheet;renderSheet=function(){const h=_rs();if(!V2()||!sheet||sheet.type!=='book')return h;return h.replace('<div class="sheet"','<div class="sheet v2book"')};
  const _tp=ticketPanel;ticketPanel=function(e){const h=_tp(e);if(!V2())return h;const t=TICKET&&TICKET.eid===e.id?TICKET.d:null;
    if(!t||t.error||t.checked_in_at)return h.replace('class="panel ticket','class="panel ticket v2tk');
    const rv=e.my||{};const meal=MEALS[rv.meal]||rv.meal||'';const par=(rv.parents||[]);
    return `<div class="v2tkt v2"><span class="v2pill" style="background:rgba(255,255,255,.12);color:#fff">${ic('sparkle')} ${esc(fmtDay(e.date,e.tz).long)} · ${esc(e.time)}</span>
     <h3>See you there, <em>${esc((S.me&&S.me.name||'').split(' ')[0])}</em></h3>
     <div class="v2tkt-q">${h.match(/<div class="qrbox"[\s\S]*?<\/p>/)?h.match(/<div class="qrbox"[\s\S]*?<\/p>/)[0]:''}</div>
     <div class="v2tkt-g">${[['Guests',par.length?`You + ${par.length}`:'You'],['Dinner',meal||'Included'],['Doors open',e.time]].map(([a,b])=>`<div><small>${a}</small><b>${esc(b)}</b></div>`).join('')}</div>
     <p class="v2note" style="color:rgba(255,255,255,.75)">${ic('lock')} A screenshot will not work. Show this screen at the door.</p></div>`};
})();

/* host check-in, new look (mock screen 24) */
(function(){const _h=renderHostView;renderHostView=function(eid){const h=_h(eid);return V2()?h.replace('<div class="view" role="dialog" aria-label="Check-in">','<div class="view v2host" role="dialog" aria-label="Check-in">'):h}})();

/* ---------- App look like the website (his ok 1 Nov 16:35 on mock handoff/mocks/app-look) ----------
   Founder accounts first: welcome map (website world map, flying heart, "tap your flag" chips), plum top band on
   Matches, plum "nearly live" reveal and plum event ticket. Reading screens (profiles, chat) stay cream.
   A device remembers it once a founder has signed in there (nm.look2), like the earlier v2 preview. */
function LOOK2(){try{if(new URLSearchParams(location.search).get('look2')==='1')localStorage.setItem('nm.look2','1');const u=(API.session()||{}).user;if(u&&V2_FOUNDERS.includes(String(u.email||'').toLowerCase()))localStorage.setItem('nm.look2','1');return localStorage.getItem('nm.look2')==='1'}catch(e){return false}}
const JM_SVG="<svg class=\"jm-svg\" viewBox=\"0 0 700 260\" aria-hidden=\"true\"><path class=\"jm-land\" d=\"M221.0 9.2h0M226.2 9.2h0M231.4 9.2h0M236.6 9.2h0M241.8 9.2h0M247.0 9.2h0M252.2 9.2h0M257.4 9.2h0M262.6 9.2h0M267.8 9.2h0M273.0 9.2h0M278.2 9.2h0M283.4 9.2h0M288.6 9.2h0M293.8 9.2h0M299.0 9.2h0M527.8 9.2h0M533.0 9.2h0M538.2 9.2h0M543.4 9.2h0M548.6 9.2h0M553.8 9.2h0M176.8 14.4h0M228.8 14.4h0M234.0 14.4h0M239.2 14.4h0M244.4 14.4h0M249.6 14.4h0M254.8 14.4h0M260.0 14.4h0M265.2 14.4h0M270.4 14.4h0M275.6 14.4h0M280.8 14.4h0M286.0 14.4h0M291.2 14.4h0M296.4 14.4h0M483.6 14.4h0M488.8 14.4h0M494.0 14.4h0M499.2 14.4h0M504.4 14.4h0M509.6 14.4h0M514.8 14.4h0M520.0 14.4h0M525.2 14.4h0M530.4 14.4h0M535.6 14.4h0M540.8 14.4h0M546.0 14.4h0M551.2 14.4h0M556.4 14.4h0M561.6 14.4h0M566.8 14.4h0M572.0 14.4h0M577.2 14.4h0M96.2 19.6h0M101.4 19.6h0M106.6 19.6h0M111.8 19.6h0M117.0 19.6h0M122.2 19.6h0M127.4 19.6h0M132.6 19.6h0M137.8 19.6h0M143.0 19.6h0M148.2 19.6h0M153.4 19.6h0M158.6 19.6h0M163.8 19.6h0M169.0 19.6h0M174.2 19.6h0M179.4 19.6h0M184.6 19.6h0M189.8 19.6h0M195.0 19.6h0M231.4 19.6h0M236.6 19.6h0M241.8 19.6h0M247.0 19.6h0M252.2 19.6h0M257.4 19.6h0M262.6 19.6h0M267.8 19.6h0M273.0 19.6h0M278.2 19.6h0M283.4 19.6h0M288.6 19.6h0M293.8 19.6h0M387.4 19.6h0M392.6 19.6h0M397.8 19.6h0M403.0 19.6h0M470.6 19.6h0M475.8 19.6h0M481.0 19.6h0M486.2 19.6h0M491.4 19.6h0M496.6 19.6h0M501.8 19.6h0M507.0 19.6h0M512.2 19.6h0M517.4 19.6h0M522.6 19.6h0M527.8 19.6h0M533.0 19.6h0M538.2 19.6h0M543.4 19.6h0M548.6 19.6h0M553.8 19.6h0M559.0 19.6h0M564.2 19.6h0M569.4 19.6h0M574.6 19.6h0M579.8 19.6h0M585.0 19.6h0M590.2 19.6h0M595.4 19.6h0M600.6 19.6h0M605.8 19.6h0M611.0 19.6h0M616.2 19.6h0M621.4 19.6h0M626.6 19.6h0M631.8 19.6h0M637.0 19.6h0M642.2 19.6h0M647.4 19.6h0M652.6 19.6h0M657.8 19.6h0M663.0 19.6h0M668.2 19.6h0M10.4 24.8h0M15.6 24.8h0M20.8 24.8h0M26.0 24.8h0M31.2 24.8h0M36.4 24.8h0M41.6 24.8h0M46.8 24.8h0M52.0 24.8h0M57.2 24.8h0M62.4 24.8h0M67.6 24.8h0M72.8 24.8h0M78.0 24.8h0M83.2 24.8h0M88.4 24.8h0M93.6 24.8h0M98.8 24.8h0M104.0 24.8h0M109.2 24.8h0M114.4 24.8h0M119.6 24.8h0M124.8 24.8h0M130.0 24.8h0M135.2 24.8h0M140.4 24.8h0M145.6 24.8h0M150.8 24.8h0M156.0 24.8h0M161.2 24.8h0M166.4 24.8h0M171.6 24.8h0M176.8 24.8h0M182.0 24.8h0M187.2 24.8h0M192.4 24.8h0M197.6 24.8h0M202.8 24.8h0M208.0 24.8h0M234.0 24.8h0M239.2 24.8h0M244.4 24.8h0M249.6 24.8h0M254.8 24.8h0M260.0 24.8h0M265.2 24.8h0M270.4 24.8h0M275.6 24.8h0M374.4 24.8h0M379.6 24.8h0M384.8 24.8h0M390.0 24.8h0M395.2 24.8h0M400.4 24.8h0M405.6 24.8h0M410.8 24.8h0M416.0 24.8h0M421.2 24.8h0M426.4 24.8h0M431.6 24.8h0M436.8 24.8h0M442.0 24.8h0M447.2 24.8h0M452.4 24.8h0M457.6 24.8h0M462.8 24.8h0M468.0 24.8h0M473.2 24.8h0M478.4 24.8h0M483.6 24.8h0M488.8 24.8h0M494.0 24.8h0M499.2 24.8h0M504.4 24.8h0M509.6 24.8h0M514.8 24.8h0M520.0 24.8h0M525.2 24.8h0M530.4 24.8h0M535.6 24.8h0M540.8 24.8h0M546.0 24.8h0M551.2 24.8h0M556.4 24.8h0M561.6 24.8h0M566.8 24.8h0M572.0 24.8h0M577.2 24.8h0M582.4 24.8h0M587.6 24.8h0M592.8 24.8h0M598.0 24.8h0M603.2 24.8h0M608.4 24.8h0M613.6 24.8h0M618.8 24.8h0M624.0 24.8h0M629.2 24.8h0M634.4 24.8h0M639.6 24.8h0M644.8 24.8h0M650.0 24.8h0M655.2 24.8h0M660.4 24.8h0M665.6 24.8h0M670.8 24.8h0M676.0 24.8h0M681.2 24.8h0M686.4 24.8h0M691.6 24.8h0M696.8 24.8h0M7.8 30.0h0M13.0 30.0h0M18.2 30.0h0M23.4 30.0h0M28.6 30.0h0M33.8 30.0h0M39.0 30.0h0M44.2 30.0h0M49.4 30.0h0M54.6 30.0h0M59.8 30.0h0M65.0 30.0h0M70.2 30.0h0M75.4 30.0h0M80.6 30.0h0M85.8 30.0h0M91.0 30.0h0M96.2 30.0h0M101.4 30.0h0M106.6 30.0h0M111.8 30.0h0M117.0 30.0h0M122.2 30.0h0M127.4 30.0h0M132.6 30.0h0M137.8 30.0h0M143.0 30.0h0M148.2 30.0h0M153.4 30.0h0M158.6 30.0h0M163.8 30.0h0M169.0 30.0h0M174.2 30.0h0M179.4 30.0h0M184.6 30.0h0M189.8 30.0h0M195.0 30.0h0M200.2 30.0h0M205.4 30.0h0M210.6 30.0h0M215.8 30.0h0M236.6 30.0h0M241.8 30.0h0M247.0 30.0h0M252.2 30.0h0M257.4 30.0h0M293.8 30.0h0M299.0 30.0h0M304.2 30.0h0M309.4 30.0h0M361.4 30.0h0M366.6 30.0h0M371.8 30.0h0M377.0 30.0h0M382.2 30.0h0M387.4 30.0h0M392.6 30.0h0M397.8 30.0h0M403.0 30.0h0M408.2 30.0h0M413.4 30.0h0M418.6 30.0h0M423.8 30.0h0M429.0 30.0h0M434.2 30.0h0M439.4 30.0h0M444.6 30.0h0M449.8 30.0h0M455.0 30.0h0M460.2 30.0h0M465.4 30.0h0M470.6 30.0h0M475.8 30.0h0M481.0 30.0h0M486.2 30.0h0M491.4 30.0h0M496.6 30.0h0M501.8 30.0h0M507.0 30.0h0M512.2 30.0h0M517.4 30.0h0M522.6 30.0h0M527.8 30.0h0M533.0 30.0h0M538.2 30.0h0M543.4 30.0h0M548.6 30.0h0M553.8 30.0h0M559.0 30.0h0M564.2 30.0h0M569.4 30.0h0M574.6 30.0h0M579.8 30.0h0M585.0 30.0h0M590.2 30.0h0M595.4 30.0h0M600.6 30.0h0M605.8 30.0h0M611.0 30.0h0M616.2 30.0h0M621.4 30.0h0M626.6 30.0h0M631.8 30.0h0M637.0 30.0h0M642.2 30.0h0M647.4 30.0h0M652.6 30.0h0M657.8 30.0h0M663.0 30.0h0M668.2 30.0h0M673.4 30.0h0M678.6 30.0h0M683.8 30.0h0M689.0 30.0h0M694.2 30.0h0M699.4 30.0h0M10.4 35.2h0M15.6 35.2h0M20.8 35.2h0M26.0 35.2h0M31.2 35.2h0M36.4 35.2h0M41.6 35.2h0M46.8 35.2h0M52.0 35.2h0M57.2 35.2h0M62.4 35.2h0M67.6 35.2h0M72.8 35.2h0M78.0 35.2h0M83.2 35.2h0M88.4 35.2h0M93.6 35.2h0M98.8 35.2h0M104.0 35.2h0M109.2 35.2h0M114.4 35.2h0M119.6 35.2h0M124.8 35.2h0M130.0 35.2h0M135.2 35.2h0M140.4 35.2h0M145.6 35.2h0M150.8 35.2h0M156.0 35.2h0M161.2 35.2h0M166.4 35.2h0M171.6 35.2h0M176.8 35.2h0M182.0 35.2h0M187.2 35.2h0M192.4 35.2h0M197.6 35.2h0M202.8 35.2h0M208.0 35.2h0M213.2 35.2h0M234.0 35.2h0M239.2 35.2h0M244.4 35.2h0M249.6 35.2h0M254.8 35.2h0M353.6 35.2h0M358.8 35.2h0M364.0 35.2h0M369.2 35.2h0M374.4 35.2h0M379.6 35.2h0M384.8 35.2h0M390.0 35.2h0M395.2 35.2h0M400.4 35.2h0M405.6 35.2h0M410.8 35.2h0M416.0 35.2h0M421.2 35.2h0M426.4 35.2h0M431.6 35.2h0M436.8 35.2h0M442.0 35.2h0M447.2 35.2h0M452.4 35.2h0M457.6 35.2h0M462.8 35.2h0M468.0 35.2h0M473.2 35.2h0M478.4 35.2h0M483.6 35.2h0M488.8 35.2h0M494.0 35.2h0M499.2 35.2h0M504.4 35.2h0M509.6 35.2h0M514.8 35.2h0M520.0 35.2h0M525.2 35.2h0M530.4 35.2h0M535.6 35.2h0M540.8 35.2h0M546.0 35.2h0M551.2 35.2h0M556.4 35.2h0M561.6 35.2h0M566.8 35.2h0M572.0 35.2h0M577.2 35.2h0M582.4 35.2h0M587.6 35.2h0M592.8 35.2h0M598.0 35.2h0M603.2 35.2h0M608.4 35.2h0M613.6 35.2h0M618.8 35.2h0M624.0 35.2h0M629.2 35.2h0M634.4 35.2h0M639.6 35.2h0M644.8 35.2h0M650.0 35.2h0M655.2 35.2h0M660.4 35.2h0M665.6 35.2h0M670.8 35.2h0M676.0 35.2h0M681.2 35.2h0M13.0 40.4h0M18.2 40.4h0M23.4 40.4h0M28.6 40.4h0M33.8 40.4h0M39.0 40.4h0M44.2 40.4h0M49.4 40.4h0M54.6 40.4h0M65.0 40.4h0M70.2 40.4h0M75.4 40.4h0M80.6 40.4h0M85.8 40.4h0M91.0 40.4h0M96.2 40.4h0M101.4 40.4h0M106.6 40.4h0M111.8 40.4h0M117.0 40.4h0M122.2 40.4h0M127.4 40.4h0M132.6 40.4h0M137.8 40.4h0M143.0 40.4h0M148.2 40.4h0M153.4 40.4h0M158.6 40.4h0M163.8 40.4h0M169.0 40.4h0M174.2 40.4h0M179.4 40.4h0M184.6 40.4h0M189.8 40.4h0M195.0 40.4h0M200.2 40.4h0M205.4 40.4h0M210.6 40.4h0M215.8 40.4h0M351.0 40.4h0M356.2 40.4h0M361.4 40.4h0M366.6 40.4h0M371.8 40.4h0M377.0 40.4h0M382.2 40.4h0M387.4 40.4h0M392.6 40.4h0M397.8 40.4h0M403.0 40.4h0M408.2 40.4h0M413.4 40.4h0M418.6 40.4h0M423.8 40.4h0M429.0 40.4h0M434.2 40.4h0M439.4 40.4h0M444.6 40.4h0M449.8 40.4h0M455.0 40.4h0M460.2 40.4h0M465.4 40.4h0M470.6 40.4h0M475.8 40.4h0M481.0 40.4h0M486.2 40.4h0M491.4 40.4h0M496.6 40.4h0M501.8 40.4h0M507.0 40.4h0M512.2 40.4h0M517.4 40.4h0M522.6 40.4h0M527.8 40.4h0M533.0 40.4h0M538.2 40.4h0M543.4 40.4h0M548.6 40.4h0M553.8 40.4h0M559.0 40.4h0M564.2 40.4h0M569.4 40.4h0M574.6 40.4h0M579.8 40.4h0M585.0 40.4h0M590.2 40.4h0M595.4 40.4h0M600.6 40.4h0M605.8 40.4h0M611.0 40.4h0M616.2 40.4h0M621.4 40.4h0M626.6 40.4h0M631.8 40.4h0M637.0 40.4h0M642.2 40.4h0M647.4 40.4h0M652.6 40.4h0M657.8 40.4h0M663.0 40.4h0M20.8 45.6h0M26.0 45.6h0M31.2 45.6h0M72.8 45.6h0M78.0 45.6h0M83.2 45.6h0M88.4 45.6h0M93.6 45.6h0M98.8 45.6h0M104.0 45.6h0M109.2 45.6h0M114.4 45.6h0M119.6 45.6h0M124.8 45.6h0M130.0 45.6h0M135.2 45.6h0M140.4 45.6h0M145.6 45.6h0M150.8 45.6h0M156.0 45.6h0M161.2 45.6h0M166.4 45.6h0M171.6 45.6h0M176.8 45.6h0M182.0 45.6h0M187.2 45.6h0M192.4 45.6h0M197.6 45.6h0M202.8 45.6h0M208.0 45.6h0M213.2 45.6h0M218.4 45.6h0M332.8 45.6h0M358.8 45.6h0M364.0 45.6h0M369.2 45.6h0M374.4 45.6h0M379.6 45.6h0M384.8 45.6h0M390.0 45.6h0M395.2 45.6h0M400.4 45.6h0M405.6 45.6h0M410.8 45.6h0M416.0 45.6h0M421.2 45.6h0M426.4 45.6h0M431.6 45.6h0M436.8 45.6h0M442.0 45.6h0M447.2 45.6h0M452.4 45.6h0M457.6 45.6h0M462.8 45.6h0M468.0 45.6h0M473.2 45.6h0M478.4 45.6h0M483.6 45.6h0M488.8 45.6h0M494.0 45.6h0M499.2 45.6h0M504.4 45.6h0M509.6 45.6h0M514.8 45.6h0M520.0 45.6h0M525.2 45.6h0M530.4 45.6h0M535.6 45.6h0M540.8 45.6h0M546.0 45.6h0M551.2 45.6h0M556.4 45.6h0M561.6 45.6h0M566.8 45.6h0M572.0 45.6h0M577.2 45.6h0M582.4 45.6h0M587.6 45.6h0M592.8 45.6h0M598.0 45.6h0M603.2 45.6h0M608.4 45.6h0M613.6 45.6h0M618.8 45.6h0M634.4 45.6h0M639.6 45.6h0M644.8 45.6h0M650.0 45.6h0M655.2 45.6h0M660.4 45.6h0M85.8 50.8h0M91.0 50.8h0M96.2 50.8h0M101.4 50.8h0M106.6 50.8h0M111.8 50.8h0M117.0 50.8h0M122.2 50.8h0M127.4 50.8h0M132.6 50.8h0M137.8 50.8h0M143.0 50.8h0M148.2 50.8h0M153.4 50.8h0M158.6 50.8h0M163.8 50.8h0M169.0 50.8h0M174.2 50.8h0M179.4 50.8h0M184.6 50.8h0M189.8 50.8h0M195.0 50.8h0M200.2 50.8h0M205.4 50.8h0M210.6 50.8h0M215.8 50.8h0M221.0 50.8h0M325.0 50.8h0M335.4 50.8h0M361.4 50.8h0M366.6 50.8h0M371.8 50.8h0M377.0 50.8h0M382.2 50.8h0M387.4 50.8h0M392.6 50.8h0M397.8 50.8h0M403.0 50.8h0M408.2 50.8h0M413.4 50.8h0M418.6 50.8h0M423.8 50.8h0M429.0 50.8h0M434.2 50.8h0M439.4 50.8h0M444.6 50.8h0M449.8 50.8h0M455.0 50.8h0M460.2 50.8h0M465.4 50.8h0M470.6 50.8h0M475.8 50.8h0M481.0 50.8h0M486.2 50.8h0M491.4 50.8h0M496.6 50.8h0M501.8 50.8h0M507.0 50.8h0M512.2 50.8h0M517.4 50.8h0M522.6 50.8h0M527.8 50.8h0M533.0 50.8h0M538.2 50.8h0M543.4 50.8h0M548.6 50.8h0M553.8 50.8h0M559.0 50.8h0M564.2 50.8h0M569.4 50.8h0M574.6 50.8h0M579.8 50.8h0M585.0 50.8h0M590.2 50.8h0M595.4 50.8h0M600.6 50.8h0M605.8 50.8h0M611.0 50.8h0M647.4 50.8h0M652.6 50.8h0M657.8 50.8h0M88.4 56.0h0M93.6 56.0h0M98.8 56.0h0M104.0 56.0h0M109.2 56.0h0M114.4 56.0h0M119.6 56.0h0M124.8 56.0h0M130.0 56.0h0M135.2 56.0h0M140.4 56.0h0M145.6 56.0h0M150.8 56.0h0M156.0 56.0h0M161.2 56.0h0M166.4 56.0h0M171.6 56.0h0M176.8 56.0h0M182.0 56.0h0M187.2 56.0h0M192.4 56.0h0M197.6 56.0h0M202.8 56.0h0M208.0 56.0h0M213.2 56.0h0M218.4 56.0h0M223.6 56.0h0M228.8 56.0h0M322.4 56.0h0M327.6 56.0h0M332.8 56.0h0M338.0 56.0h0M348.4 56.0h0M353.6 56.0h0M358.8 56.0h0M364.0 56.0h0M369.2 56.0h0M374.4 56.0h0M379.6 56.0h0M384.8 56.0h0M390.0 56.0h0M395.2 56.0h0M400.4 56.0h0M405.6 56.0h0M410.8 56.0h0M416.0 56.0h0M421.2 56.0h0M426.4 56.0h0M431.6 56.0h0M436.8 56.0h0M442.0 56.0h0M447.2 56.0h0M452.4 56.0h0M457.6 56.0h0M462.8 56.0h0M468.0 56.0h0M473.2 56.0h0M478.4 56.0h0M483.6 56.0h0M488.8 56.0h0M494.0 56.0h0M499.2 56.0h0M504.4 56.0h0M509.6 56.0h0M514.8 56.0h0M520.0 56.0h0M525.2 56.0h0M530.4 56.0h0M535.6 56.0h0M540.8 56.0h0M546.0 56.0h0M551.2 56.0h0M556.4 56.0h0M561.6 56.0h0M566.8 56.0h0M572.0 56.0h0M577.2 56.0h0M582.4 56.0h0M587.6 56.0h0M592.8 56.0h0M598.0 56.0h0M603.2 56.0h0M608.4 56.0h0M613.6 56.0h0M91.0 61.2h0M96.2 61.2h0M101.4 61.2h0M106.6 61.2h0M111.8 61.2h0M117.0 61.2h0M122.2 61.2h0M127.4 61.2h0M132.6 61.2h0M137.8 61.2h0M143.0 61.2h0M148.2 61.2h0M153.4 61.2h0M158.6 61.2h0M163.8 61.2h0M169.0 61.2h0M174.2 61.2h0M179.4 61.2h0M184.6 61.2h0M189.8 61.2h0M195.0 61.2h0M200.2 61.2h0M205.4 61.2h0M210.6 61.2h0M215.8 61.2h0M221.0 61.2h0M340.6 61.2h0M345.8 61.2h0M351.0 61.2h0M356.2 61.2h0M361.4 61.2h0M366.6 61.2h0M371.8 61.2h0M377.0 61.2h0M382.2 61.2h0M387.4 61.2h0M392.6 61.2h0M397.8 61.2h0M403.0 61.2h0M408.2 61.2h0M413.4 61.2h0M418.6 61.2h0M423.8 61.2h0M429.0 61.2h0M434.2 61.2h0M439.4 61.2h0M444.6 61.2h0M449.8 61.2h0M455.0 61.2h0M460.2 61.2h0M465.4 61.2h0M470.6 61.2h0M475.8 61.2h0M481.0 61.2h0M486.2 61.2h0M491.4 61.2h0M496.6 61.2h0M501.8 61.2h0M507.0 61.2h0M512.2 61.2h0M517.4 61.2h0M522.6 61.2h0M527.8 61.2h0M533.0 61.2h0M538.2 61.2h0M543.4 61.2h0M548.6 61.2h0M553.8 61.2h0M559.0 61.2h0M564.2 61.2h0M569.4 61.2h0M574.6 61.2h0M579.8 61.2h0M585.0 61.2h0M590.2 61.2h0M595.4 61.2h0M600.6 61.2h0M605.8 61.2h0M611.0 61.2h0M616.2 61.2h0M93.6 66.4h0M98.8 66.4h0M104.0 66.4h0M109.2 66.4h0M114.4 66.4h0M119.6 66.4h0M124.8 66.4h0M130.0 66.4h0M135.2 66.4h0M140.4 66.4h0M145.6 66.4h0M150.8 66.4h0M156.0 66.4h0M161.2 66.4h0M166.4 66.4h0M171.6 66.4h0M176.8 66.4h0M182.0 66.4h0M187.2 66.4h0M192.4 66.4h0M197.6 66.4h0M202.8 66.4h0M208.0 66.4h0M213.2 66.4h0M332.8 66.4h0M338.0 66.4h0M343.2 66.4h0M348.4 66.4h0M353.6 66.4h0M358.8 66.4h0M364.0 66.4h0M369.2 66.4h0M374.4 66.4h0M379.6 66.4h0M384.8 66.4h0M390.0 66.4h0M395.2 66.4h0M400.4 66.4h0M405.6 66.4h0M410.8 66.4h0M416.0 66.4h0M421.2 66.4h0M426.4 66.4h0M431.6 66.4h0M436.8 66.4h0M442.0 66.4h0M447.2 66.4h0M452.4 66.4h0M457.6 66.4h0M462.8 66.4h0M468.0 66.4h0M473.2 66.4h0M478.4 66.4h0M483.6 66.4h0M488.8 66.4h0M494.0 66.4h0M499.2 66.4h0M504.4 66.4h0M509.6 66.4h0M514.8 66.4h0M520.0 66.4h0M525.2 66.4h0M530.4 66.4h0M535.6 66.4h0M540.8 66.4h0M546.0 66.4h0M551.2 66.4h0M556.4 66.4h0M561.6 66.4h0M566.8 66.4h0M572.0 66.4h0M577.2 66.4h0M582.4 66.4h0M587.6 66.4h0M592.8 66.4h0M598.0 66.4h0M603.2 66.4h0M608.4 66.4h0M613.6 66.4h0M96.2 71.6h0M101.4 71.6h0M106.6 71.6h0M111.8 71.6h0M117.0 71.6h0M122.2 71.6h0M127.4 71.6h0M132.6 71.6h0M137.8 71.6h0M143.0 71.6h0M148.2 71.6h0M153.4 71.6h0M158.6 71.6h0M163.8 71.6h0M169.0 71.6h0M174.2 71.6h0M179.4 71.6h0M184.6 71.6h0M189.8 71.6h0M195.0 71.6h0M200.2 71.6h0M205.4 71.6h0M340.6 71.6h0M345.8 71.6h0M351.0 71.6h0M356.2 71.6h0M361.4 71.6h0M366.6 71.6h0M371.8 71.6h0M377.0 71.6h0M382.2 71.6h0M387.4 71.6h0M392.6 71.6h0M397.8 71.6h0M403.0 71.6h0M408.2 71.6h0M413.4 71.6h0M418.6 71.6h0M423.8 71.6h0M429.0 71.6h0M434.2 71.6h0M439.4 71.6h0M444.6 71.6h0M449.8 71.6h0M455.0 71.6h0M460.2 71.6h0M465.4 71.6h0M470.6 71.6h0M475.8 71.6h0M481.0 71.6h0M486.2 71.6h0M491.4 71.6h0M496.6 71.6h0M501.8 71.6h0M507.0 71.6h0M512.2 71.6h0M517.4 71.6h0M522.6 71.6h0M527.8 71.6h0M533.0 71.6h0M538.2 71.6h0M543.4 71.6h0M548.6 71.6h0M553.8 71.6h0M559.0 71.6h0M564.2 71.6h0M569.4 71.6h0M574.6 71.6h0M579.8 71.6h0M585.0 71.6h0M590.2 71.6h0M595.4 71.6h0M600.6 71.6h0M605.8 71.6h0M611.0 71.6h0M626.6 71.6h0M93.6 76.8h0M98.8 76.8h0M104.0 76.8h0M109.2 76.8h0M114.4 76.8h0M119.6 76.8h0M124.8 76.8h0M130.0 76.8h0M135.2 76.8h0M140.4 76.8h0M145.6 76.8h0M150.8 76.8h0M156.0 76.8h0M161.2 76.8h0M166.4 76.8h0M171.6 76.8h0M176.8 76.8h0M182.0 76.8h0M187.2 76.8h0M192.4 76.8h0M197.6 76.8h0M322.4 76.8h0M327.6 76.8h0M332.8 76.8h0M338.0 76.8h0M343.2 76.8h0M369.2 76.8h0M374.4 76.8h0M379.6 76.8h0M384.8 76.8h0M390.0 76.8h0M395.2 76.8h0M400.4 76.8h0M405.6 76.8h0M410.8 76.8h0M416.0 76.8h0M421.2 76.8h0M426.4 76.8h0M431.6 76.8h0M436.8 76.8h0M442.0 76.8h0M447.2 76.8h0M452.4 76.8h0M457.6 76.8h0M462.8 76.8h0M468.0 76.8h0M473.2 76.8h0M478.4 76.8h0M483.6 76.8h0M488.8 76.8h0M494.0 76.8h0M499.2 76.8h0M504.4 76.8h0M509.6 76.8h0M514.8 76.8h0M520.0 76.8h0M525.2 76.8h0M530.4 76.8h0M535.6 76.8h0M540.8 76.8h0M546.0 76.8h0M551.2 76.8h0M556.4 76.8h0M561.6 76.8h0M566.8 76.8h0M572.0 76.8h0M577.2 76.8h0M582.4 76.8h0M587.6 76.8h0M592.8 76.8h0M96.2 82.0h0M101.4 82.0h0M106.6 82.0h0M111.8 82.0h0M117.0 82.0h0M122.2 82.0h0M127.4 82.0h0M132.6 82.0h0M137.8 82.0h0M143.0 82.0h0M148.2 82.0h0M153.4 82.0h0M158.6 82.0h0M163.8 82.0h0M169.0 82.0h0M174.2 82.0h0M179.4 82.0h0M184.6 82.0h0M189.8 82.0h0M325.0 82.0h0M330.2 82.0h0M335.4 82.0h0M371.8 82.0h0M382.2 82.0h0M387.4 82.0h0M392.6 82.0h0M397.8 82.0h0M403.0 82.0h0M408.2 82.0h0M413.4 82.0h0M418.6 82.0h0M423.8 82.0h0M429.0 82.0h0M434.2 82.0h0M439.4 82.0h0M444.6 82.0h0M449.8 82.0h0M455.0 82.0h0M460.2 82.0h0M465.4 82.0h0M470.6 82.0h0M475.8 82.0h0M481.0 82.0h0M486.2 82.0h0M491.4 82.0h0M496.6 82.0h0M501.8 82.0h0M507.0 82.0h0M512.2 82.0h0M517.4 82.0h0M522.6 82.0h0M527.8 82.0h0M533.0 82.0h0M538.2 82.0h0M543.4 82.0h0M548.6 82.0h0M553.8 82.0h0M559.0 82.0h0M564.2 82.0h0M569.4 82.0h0M574.6 82.0h0M585.0 82.0h0M590.2 82.0h0M616.2 82.0h0M621.4 82.0h0M104.0 87.2h0M109.2 87.2h0M114.4 87.2h0M119.6 87.2h0M124.8 87.2h0M130.0 87.2h0M135.2 87.2h0M140.4 87.2h0M145.6 87.2h0M150.8 87.2h0M156.0 87.2h0M161.2 87.2h0M166.4 87.2h0M171.6 87.2h0M176.8 87.2h0M182.0 87.2h0M187.2 87.2h0M322.4 87.2h0M327.6 87.2h0M348.4 87.2h0M353.6 87.2h0M358.8 87.2h0M405.6 87.2h0M410.8 87.2h0M416.0 87.2h0M421.2 87.2h0M426.4 87.2h0M431.6 87.2h0M436.8 87.2h0M442.0 87.2h0M447.2 87.2h0M452.4 87.2h0M457.6 87.2h0M462.8 87.2h0M468.0 87.2h0M473.2 87.2h0M478.4 87.2h0M483.6 87.2h0M488.8 87.2h0M494.0 87.2h0M499.2 87.2h0M504.4 87.2h0M509.6 87.2h0M514.8 87.2h0M520.0 87.2h0M525.2 87.2h0M530.4 87.2h0M535.6 87.2h0M540.8 87.2h0M546.0 87.2h0M551.2 87.2h0M556.4 87.2h0M561.6 87.2h0M566.8 87.2h0M572.0 87.2h0M577.2 87.2h0M592.8 87.2h0M613.6 87.2h0M618.8 87.2h0M106.6 92.4h0M111.8 92.4h0M117.0 92.4h0M122.2 92.4h0M127.4 92.4h0M132.6 92.4h0M137.8 92.4h0M143.0 92.4h0M148.2 92.4h0M153.4 92.4h0M158.6 92.4h0M163.8 92.4h0M169.0 92.4h0M174.2 92.4h0M179.4 92.4h0M184.6 92.4h0M330.2 92.4h0M335.4 92.4h0M340.6 92.4h0M345.8 92.4h0M351.0 92.4h0M356.2 92.4h0M413.4 92.4h0M418.6 92.4h0M423.8 92.4h0M429.0 92.4h0M434.2 92.4h0M439.4 92.4h0M444.6 92.4h0M449.8 92.4h0M455.0 92.4h0M460.2 92.4h0M465.4 92.4h0M470.6 92.4h0M475.8 92.4h0M481.0 92.4h0M486.2 92.4h0M491.4 92.4h0M496.6 92.4h0M501.8 92.4h0M507.0 92.4h0M512.2 92.4h0M517.4 92.4h0M522.6 92.4h0M527.8 92.4h0M533.0 92.4h0M538.2 92.4h0M543.4 92.4h0M548.6 92.4h0M553.8 92.4h0M559.0 92.4h0M564.2 92.4h0M569.4 92.4h0M574.6 92.4h0M579.8 92.4h0M605.8 92.4h0M109.2 97.6h0M114.4 97.6h0M119.6 97.6h0M124.8 97.6h0M130.0 97.6h0M135.2 97.6h0M140.4 97.6h0M145.6 97.6h0M150.8 97.6h0M156.0 97.6h0M161.2 97.6h0M166.4 97.6h0M171.6 97.6h0M176.8 97.6h0M322.4 97.6h0M327.6 97.6h0M332.8 97.6h0M338.0 97.6h0M343.2 97.6h0M348.4 97.6h0M353.6 97.6h0M358.8 97.6h0M364.0 97.6h0M369.2 97.6h0M374.4 97.6h0M384.8 97.6h0M390.0 97.6h0M395.2 97.6h0M410.8 97.6h0M416.0 97.6h0M421.2 97.6h0M426.4 97.6h0M431.6 97.6h0M436.8 97.6h0M442.0 97.6h0M447.2 97.6h0M452.4 97.6h0M457.6 97.6h0M462.8 97.6h0M468.0 97.6h0M473.2 97.6h0M478.4 97.6h0M483.6 97.6h0M488.8 97.6h0M494.0 97.6h0M499.2 97.6h0M504.4 97.6h0M509.6 97.6h0M514.8 97.6h0M520.0 97.6h0M525.2 97.6h0M530.4 97.6h0M535.6 97.6h0M540.8 97.6h0M546.0 97.6h0M551.2 97.6h0M556.4 97.6h0M561.6 97.6h0M566.8 97.6h0M572.0 97.6h0M577.2 97.6h0M582.4 97.6h0M117.0 102.8h0M122.2 102.8h0M127.4 102.8h0M132.6 102.8h0M137.8 102.8h0M143.0 102.8h0M148.2 102.8h0M153.4 102.8h0M174.2 102.8h0M319.8 102.8h0M325.0 102.8h0M330.2 102.8h0M335.4 102.8h0M340.6 102.8h0M345.8 102.8h0M351.0 102.8h0M356.2 102.8h0M361.4 102.8h0M366.6 102.8h0M371.8 102.8h0M377.0 102.8h0M382.2 102.8h0M387.4 102.8h0M392.6 102.8h0M397.8 102.8h0M403.0 102.8h0M413.4 102.8h0M418.6 102.8h0M423.8 102.8h0M429.0 102.8h0M434.2 102.8h0M439.4 102.8h0M444.6 102.8h0M449.8 102.8h0M455.0 102.8h0M460.2 102.8h0M465.4 102.8h0M470.6 102.8h0M475.8 102.8h0M481.0 102.8h0M486.2 102.8h0M491.4 102.8h0M496.6 102.8h0M501.8 102.8h0M507.0 102.8h0M512.2 102.8h0M517.4 102.8h0M522.6 102.8h0M527.8 102.8h0M533.0 102.8h0M538.2 102.8h0M543.4 102.8h0M548.6 102.8h0M553.8 102.8h0M559.0 102.8h0M564.2 102.8h0M569.4 102.8h0M574.6 102.8h0M579.8 102.8h0M119.6 108.0h0M124.8 108.0h0M130.0 108.0h0M135.2 108.0h0M140.4 108.0h0M145.6 108.0h0M317.2 108.0h0M322.4 108.0h0M327.6 108.0h0M332.8 108.0h0M338.0 108.0h0M343.2 108.0h0M348.4 108.0h0M353.6 108.0h0M358.8 108.0h0M364.0 108.0h0M369.2 108.0h0M374.4 108.0h0M379.6 108.0h0M384.8 108.0h0M390.0 108.0h0M395.2 108.0h0M400.4 108.0h0M405.6 108.0h0M416.0 108.0h0M421.2 108.0h0M426.4 108.0h0M431.6 108.0h0M436.8 108.0h0M442.0 108.0h0M447.2 108.0h0M452.4 108.0h0M457.6 108.0h0M462.8 108.0h0M468.0 108.0h0M473.2 108.0h0M478.4 108.0h0M483.6 108.0h0M488.8 108.0h0M494.0 108.0h0M499.2 108.0h0M504.4 108.0h0M509.6 108.0h0M514.8 108.0h0M520.0 108.0h0M525.2 108.0h0M530.4 108.0h0M535.6 108.0h0M540.8 108.0h0M546.0 108.0h0M551.2 108.0h0M556.4 108.0h0M561.6 108.0h0M566.8 108.0h0M572.0 108.0h0M577.2 108.0h0M122.2 113.2h0M127.4 113.2h0M132.6 113.2h0M137.8 113.2h0M143.0 113.2h0M314.6 113.2h0M319.8 113.2h0M325.0 113.2h0M330.2 113.2h0M335.4 113.2h0M340.6 113.2h0M345.8 113.2h0M351.0 113.2h0M356.2 113.2h0M361.4 113.2h0M366.6 113.2h0M371.8 113.2h0M377.0 113.2h0M382.2 113.2h0M387.4 113.2h0M392.6 113.2h0M397.8 113.2h0M403.0 113.2h0M408.2 113.2h0M418.6 113.2h0M423.8 113.2h0M429.0 113.2h0M434.2 113.2h0M439.4 113.2h0M444.6 113.2h0M449.8 113.2h0M481.0 113.2h0M486.2 113.2h0M491.4 113.2h0M496.6 113.2h0M501.8 113.2h0M507.0 113.2h0M512.2 113.2h0M517.4 113.2h0M522.6 113.2h0M527.8 113.2h0M533.0 113.2h0M538.2 113.2h0M543.4 113.2h0M548.6 113.2h0M553.8 113.2h0M559.0 113.2h0M564.2 113.2h0M569.4 113.2h0M130.0 118.4h0M135.2 118.4h0M140.4 118.4h0M145.6 118.4h0M150.8 118.4h0M156.0 118.4h0M161.2 118.4h0M306.8 118.4h0M312.0 118.4h0M317.2 118.4h0M322.4 118.4h0M327.6 118.4h0M332.8 118.4h0M338.0 118.4h0M343.2 118.4h0M348.4 118.4h0M353.6 118.4h0M358.8 118.4h0M364.0 118.4h0M369.2 118.4h0M374.4 118.4h0M379.6 118.4h0M384.8 118.4h0M390.0 118.4h0M395.2 118.4h0M400.4 118.4h0M405.6 118.4h0M410.8 118.4h0M421.2 118.4h0M426.4 118.4h0M431.6 118.4h0M436.8 118.4h0M442.0 118.4h0M447.2 118.4h0M452.4 118.4h0M488.8 118.4h0M494.0 118.4h0M499.2 118.4h0M504.4 118.4h0M509.6 118.4h0M525.2 118.4h0M530.4 118.4h0M535.6 118.4h0M540.8 118.4h0M546.0 118.4h0M551.2 118.4h0M556.4 118.4h0M561.6 118.4h0M137.8 123.6h0M143.0 123.6h0M148.2 123.6h0M153.4 123.6h0M158.6 123.6h0M163.8 123.6h0M169.0 123.6h0M309.4 123.6h0M314.6 123.6h0M319.8 123.6h0M325.0 123.6h0M330.2 123.6h0M335.4 123.6h0M340.6 123.6h0M345.8 123.6h0M351.0 123.6h0M356.2 123.6h0M361.4 123.6h0M366.6 123.6h0M371.8 123.6h0M377.0 123.6h0M382.2 123.6h0M387.4 123.6h0M392.6 123.6h0M397.8 123.6h0M403.0 123.6h0M408.2 123.6h0M413.4 123.6h0M423.8 123.6h0M429.0 123.6h0M434.2 123.6h0M439.4 123.6h0M444.6 123.6h0M486.2 123.6h0M491.4 123.6h0M496.6 123.6h0M501.8 123.6h0M533.0 123.6h0M538.2 123.6h0M543.4 123.6h0M548.6 123.6h0M553.8 123.6h0M585.0 123.6h0M150.8 128.8h0M156.0 128.8h0M161.2 128.8h0M166.4 128.8h0M171.6 128.8h0M306.8 128.8h0M312.0 128.8h0M317.2 128.8h0M322.4 128.8h0M327.6 128.8h0M332.8 128.8h0M338.0 128.8h0M343.2 128.8h0M348.4 128.8h0M353.6 128.8h0M358.8 128.8h0M364.0 128.8h0M369.2 128.8h0M374.4 128.8h0M379.6 128.8h0M384.8 128.8h0M390.0 128.8h0M395.2 128.8h0M400.4 128.8h0M405.6 128.8h0M410.8 128.8h0M416.0 128.8h0M426.4 128.8h0M431.6 128.8h0M436.8 128.8h0M488.8 128.8h0M494.0 128.8h0M499.2 128.8h0M540.8 128.8h0M546.0 128.8h0M551.2 128.8h0M582.4 128.8h0M169.0 134.0h0M174.2 134.0h0M309.4 134.0h0M314.6 134.0h0M319.8 134.0h0M325.0 134.0h0M330.2 134.0h0M335.4 134.0h0M340.6 134.0h0M345.8 134.0h0M351.0 134.0h0M356.2 134.0h0M361.4 134.0h0M366.6 134.0h0M371.8 134.0h0M377.0 134.0h0M382.2 134.0h0M387.4 134.0h0M392.6 134.0h0M397.8 134.0h0M403.0 134.0h0M408.2 134.0h0M413.4 134.0h0M418.6 134.0h0M423.8 134.0h0M429.0 134.0h0M491.4 134.0h0M496.6 134.0h0M538.2 134.0h0M543.4 134.0h0M548.6 134.0h0M553.8 134.0h0M579.8 134.0h0M585.0 134.0h0M171.6 139.2h0M176.8 139.2h0M182.0 139.2h0M192.4 139.2h0M197.6 139.2h0M202.8 139.2h0M208.0 139.2h0M317.2 139.2h0M322.4 139.2h0M327.6 139.2h0M332.8 139.2h0M338.0 139.2h0M343.2 139.2h0M348.4 139.2h0M353.6 139.2h0M358.8 139.2h0M364.0 139.2h0M369.2 139.2h0M374.4 139.2h0M379.6 139.2h0M384.8 139.2h0M390.0 139.2h0M395.2 139.2h0M400.4 139.2h0M405.6 139.2h0M410.8 139.2h0M416.0 139.2h0M421.2 139.2h0M426.4 139.2h0M431.6 139.2h0M436.8 139.2h0M494.0 139.2h0M540.8 139.2h0M551.2 139.2h0M582.4 139.2h0M587.6 139.2h0M189.8 144.4h0M195.0 144.4h0M200.2 144.4h0M205.4 144.4h0M210.6 144.4h0M215.8 144.4h0M221.0 144.4h0M319.8 144.4h0M325.0 144.4h0M330.2 144.4h0M335.4 144.4h0M340.6 144.4h0M345.8 144.4h0M351.0 144.4h0M356.2 144.4h0M361.4 144.4h0M366.6 144.4h0M371.8 144.4h0M377.0 144.4h0M382.2 144.4h0M387.4 144.4h0M392.6 144.4h0M397.8 144.4h0M403.0 144.4h0M408.2 144.4h0M413.4 144.4h0M418.6 144.4h0M423.8 144.4h0M429.0 144.4h0M434.2 144.4h0M501.8 144.4h0M538.2 144.4h0M585.0 144.4h0M590.2 144.4h0M187.2 149.6h0M192.4 149.6h0M197.6 149.6h0M202.8 149.6h0M208.0 149.6h0M213.2 149.6h0M218.4 149.6h0M223.6 149.6h0M228.8 149.6h0M234.0 149.6h0M322.4 149.6h0M327.6 149.6h0M332.8 149.6h0M338.0 149.6h0M343.2 149.6h0M348.4 149.6h0M353.6 149.6h0M358.8 149.6h0M364.0 149.6h0M369.2 149.6h0M374.4 149.6h0M379.6 149.6h0M384.8 149.6h0M390.0 149.6h0M395.2 149.6h0M400.4 149.6h0M405.6 149.6h0M410.8 149.6h0M416.0 149.6h0M421.2 149.6h0M426.4 149.6h0M431.6 149.6h0M540.8 149.6h0M572.0 149.6h0M577.2 149.6h0M184.6 154.8h0M189.8 154.8h0M195.0 154.8h0M200.2 154.8h0M205.4 154.8h0M210.6 154.8h0M215.8 154.8h0M221.0 154.8h0M226.2 154.8h0M231.4 154.8h0M236.6 154.8h0M361.4 154.8h0M366.6 154.8h0M371.8 154.8h0M377.0 154.8h0M382.2 154.8h0M387.4 154.8h0M392.6 154.8h0M397.8 154.8h0M403.0 154.8h0M408.2 154.8h0M413.4 154.8h0M418.6 154.8h0M423.8 154.8h0M429.0 154.8h0M538.2 154.8h0M564.2 154.8h0M569.4 154.8h0M574.6 154.8h0M182.0 160.0h0M187.2 160.0h0M192.4 160.0h0M197.6 160.0h0M202.8 160.0h0M208.0 160.0h0M213.2 160.0h0M218.4 160.0h0M223.6 160.0h0M228.8 160.0h0M234.0 160.0h0M239.2 160.0h0M364.0 160.0h0M369.2 160.0h0M374.4 160.0h0M379.6 160.0h0M384.8 160.0h0M390.0 160.0h0M395.2 160.0h0M400.4 160.0h0M405.6 160.0h0M410.8 160.0h0M416.0 160.0h0M421.2 160.0h0M540.8 160.0h0M561.6 160.0h0M566.8 160.0h0M572.0 160.0h0M179.4 165.2h0M184.6 165.2h0M189.8 165.2h0M195.0 165.2h0M200.2 165.2h0M205.4 165.2h0M210.6 165.2h0M215.8 165.2h0M221.0 165.2h0M226.2 165.2h0M231.4 165.2h0M236.6 165.2h0M241.8 165.2h0M247.0 165.2h0M252.2 165.2h0M366.6 165.2h0M371.8 165.2h0M377.0 165.2h0M382.2 165.2h0M387.4 165.2h0M392.6 165.2h0M397.8 165.2h0M403.0 165.2h0M408.2 165.2h0M413.4 165.2h0M418.6 165.2h0M543.4 165.2h0M564.2 165.2h0M569.4 165.2h0M611.0 165.2h0M616.2 165.2h0M182.0 170.4h0M187.2 170.4h0M192.4 170.4h0M197.6 170.4h0M202.8 170.4h0M208.0 170.4h0M213.2 170.4h0M218.4 170.4h0M223.6 170.4h0M228.8 170.4h0M234.0 170.4h0M239.2 170.4h0M244.4 170.4h0M249.6 170.4h0M254.8 170.4h0M260.0 170.4h0M265.2 170.4h0M364.0 170.4h0M369.2 170.4h0M374.4 170.4h0M379.6 170.4h0M384.8 170.4h0M390.0 170.4h0M395.2 170.4h0M400.4 170.4h0M405.6 170.4h0M410.8 170.4h0M416.0 170.4h0M618.8 170.4h0M624.0 170.4h0M184.6 175.6h0M189.8 175.6h0M195.0 175.6h0M200.2 175.6h0M205.4 175.6h0M210.6 175.6h0M215.8 175.6h0M221.0 175.6h0M226.2 175.6h0M231.4 175.6h0M236.6 175.6h0M241.8 175.6h0M247.0 175.6h0M252.2 175.6h0M257.4 175.6h0M262.6 175.6h0M267.8 175.6h0M366.6 175.6h0M371.8 175.6h0M377.0 175.6h0M382.2 175.6h0M387.4 175.6h0M392.6 175.6h0M397.8 175.6h0M403.0 175.6h0M408.2 175.6h0M413.4 175.6h0M418.6 175.6h0M553.8 175.6h0M559.0 175.6h0M564.2 175.6h0M621.4 175.6h0M626.6 175.6h0M631.8 175.6h0M187.2 180.8h0M192.4 180.8h0M197.6 180.8h0M202.8 180.8h0M208.0 180.8h0M213.2 180.8h0M218.4 180.8h0M223.6 180.8h0M228.8 180.8h0M234.0 180.8h0M239.2 180.8h0M244.4 180.8h0M249.6 180.8h0M254.8 180.8h0M260.0 180.8h0M265.2 180.8h0M369.2 180.8h0M374.4 180.8h0M379.6 180.8h0M384.8 180.8h0M390.0 180.8h0M395.2 180.8h0M400.4 180.8h0M405.6 180.8h0M410.8 180.8h0M416.0 180.8h0M189.8 186.0h0M195.0 186.0h0M200.2 186.0h0M205.4 186.0h0M210.6 186.0h0M215.8 186.0h0M221.0 186.0h0M226.2 186.0h0M231.4 186.0h0M236.6 186.0h0M241.8 186.0h0M247.0 186.0h0M252.2 186.0h0M257.4 186.0h0M262.6 186.0h0M366.6 186.0h0M371.8 186.0h0M377.0 186.0h0M382.2 186.0h0M387.4 186.0h0M392.6 186.0h0M397.8 186.0h0M403.0 186.0h0M408.2 186.0h0M413.4 186.0h0M418.6 186.0h0M600.6 186.0h0M605.8 186.0h0M611.0 186.0h0M197.6 191.2h0M202.8 191.2h0M208.0 191.2h0M213.2 191.2h0M218.4 191.2h0M223.6 191.2h0M228.8 191.2h0M234.0 191.2h0M239.2 191.2h0M244.4 191.2h0M249.6 191.2h0M254.8 191.2h0M260.0 191.2h0M369.2 191.2h0M374.4 191.2h0M379.6 191.2h0M384.8 191.2h0M390.0 191.2h0M395.2 191.2h0M400.4 191.2h0M405.6 191.2h0M410.8 191.2h0M416.0 191.2h0M431.6 191.2h0M436.8 191.2h0M592.8 191.2h0M598.0 191.2h0M603.2 191.2h0M608.4 191.2h0M613.6 191.2h0M618.8 191.2h0M624.0 191.2h0M200.2 196.4h0M205.4 196.4h0M210.6 196.4h0M215.8 196.4h0M221.0 196.4h0M226.2 196.4h0M231.4 196.4h0M236.6 196.4h0M241.8 196.4h0M247.0 196.4h0M252.2 196.4h0M257.4 196.4h0M366.6 196.4h0M371.8 196.4h0M377.0 196.4h0M382.2 196.4h0M387.4 196.4h0M392.6 196.4h0M397.8 196.4h0M403.0 196.4h0M408.2 196.4h0M413.4 196.4h0M429.0 196.4h0M434.2 196.4h0M585.0 196.4h0M590.2 196.4h0M595.4 196.4h0M600.6 196.4h0M605.8 196.4h0M611.0 196.4h0M616.2 196.4h0M621.4 196.4h0M626.6 196.4h0M202.8 201.6h0M208.0 201.6h0M213.2 201.6h0M218.4 201.6h0M223.6 201.6h0M228.8 201.6h0M234.0 201.6h0M239.2 201.6h0M244.4 201.6h0M249.6 201.6h0M254.8 201.6h0M369.2 201.6h0M374.4 201.6h0M379.6 201.6h0M384.8 201.6h0M390.0 201.6h0M395.2 201.6h0M400.4 201.6h0M405.6 201.6h0M410.8 201.6h0M431.6 201.6h0M577.2 201.6h0M582.4 201.6h0M587.6 201.6h0M592.8 201.6h0M598.0 201.6h0M603.2 201.6h0M608.4 201.6h0M613.6 201.6h0M618.8 201.6h0M624.0 201.6h0M629.2 201.6h0M634.4 201.6h0M200.2 206.8h0M205.4 206.8h0M210.6 206.8h0M215.8 206.8h0M221.0 206.8h0M226.2 206.8h0M231.4 206.8h0M236.6 206.8h0M241.8 206.8h0M247.0 206.8h0M252.2 206.8h0M371.8 206.8h0M377.0 206.8h0M382.2 206.8h0M387.4 206.8h0M392.6 206.8h0M397.8 206.8h0M403.0 206.8h0M408.2 206.8h0M429.0 206.8h0M434.2 206.8h0M569.4 206.8h0M574.6 206.8h0M579.8 206.8h0M585.0 206.8h0M590.2 206.8h0M595.4 206.8h0M600.6 206.8h0M605.8 206.8h0M611.0 206.8h0M616.2 206.8h0M621.4 206.8h0M626.6 206.8h0M631.8 206.8h0M637.0 206.8h0M642.2 206.8h0M202.8 212.0h0M208.0 212.0h0M213.2 212.0h0M218.4 212.0h0M223.6 212.0h0M228.8 212.0h0M234.0 212.0h0M239.2 212.0h0M374.4 212.0h0M379.6 212.0h0M384.8 212.0h0M390.0 212.0h0M395.2 212.0h0M400.4 212.0h0M405.6 212.0h0M572.0 212.0h0M577.2 212.0h0M582.4 212.0h0M587.6 212.0h0M592.8 212.0h0M598.0 212.0h0M603.2 212.0h0M608.4 212.0h0M613.6 212.0h0M618.8 212.0h0M624.0 212.0h0M629.2 212.0h0M634.4 212.0h0M639.6 212.0h0M644.8 212.0h0M200.2 217.2h0M205.4 217.2h0M210.6 217.2h0M215.8 217.2h0M221.0 217.2h0M226.2 217.2h0M231.4 217.2h0M236.6 217.2h0M371.8 217.2h0M377.0 217.2h0M382.2 217.2h0M387.4 217.2h0M392.6 217.2h0M397.8 217.2h0M403.0 217.2h0M569.4 217.2h0M574.6 217.2h0M579.8 217.2h0M585.0 217.2h0M590.2 217.2h0M595.4 217.2h0M600.6 217.2h0M605.8 217.2h0M611.0 217.2h0M616.2 217.2h0M621.4 217.2h0M626.6 217.2h0M631.8 217.2h0M637.0 217.2h0M642.2 217.2h0M197.6 222.4h0M202.8 222.4h0M208.0 222.4h0M213.2 222.4h0M218.4 222.4h0M223.6 222.4h0M228.8 222.4h0M234.0 222.4h0M374.4 222.4h0M379.6 222.4h0M384.8 222.4h0M390.0 222.4h0M395.2 222.4h0M572.0 222.4h0M577.2 222.4h0M582.4 222.4h0M587.6 222.4h0M592.8 222.4h0M598.0 222.4h0M603.2 222.4h0M608.4 222.4h0M613.6 222.4h0M618.8 222.4h0M624.0 222.4h0M629.2 222.4h0M634.4 222.4h0M639.6 222.4h0M644.8 222.4h0M200.2 227.6h0M205.4 227.6h0M210.6 227.6h0M215.8 227.6h0M221.0 227.6h0M226.2 227.6h0M231.4 227.6h0M382.2 227.6h0M387.4 227.6h0M569.4 227.6h0M574.6 227.6h0M579.8 227.6h0M585.0 227.6h0M616.2 227.6h0M621.4 227.6h0M626.6 227.6h0M631.8 227.6h0M637.0 227.6h0M642.2 227.6h0M197.6 232.8h0M202.8 232.8h0M208.0 232.8h0M213.2 232.8h0M218.4 232.8h0M223.6 232.8h0M624.0 232.8h0M629.2 232.8h0M634.4 232.8h0M639.6 232.8h0M686.4 232.8h0M195.0 238.0h0M200.2 238.0h0M205.4 238.0h0M210.6 238.0h0M215.8 238.0h0M221.0 238.0h0M683.8 238.0h0M689.0 238.0h0M694.2 238.0h0M197.6 243.2h0M202.8 243.2h0M208.0 243.2h0M213.2 243.2h0M686.4 243.2h0M195.0 248.4h0M200.2 248.4h0M205.4 248.4h0M210.6 248.4h0M678.6 248.4h0M683.8 248.4h0M197.6 253.6h0M202.8 253.6h0M195.0 258.8h0M200.2 258.8h0\"/><path class=\"jm-arc\" data-i=\"0\" d=\"M496.0 116.0Q338.6 -16.4 181.2 72.6\"/><path class=\"jm-arc\" data-i=\"1\" d=\"M356.0 141.0Q252.6 41.4 149.2 100.4\"/><path class=\"jm-arc\" data-i=\"2\" d=\"M584.0 134.0Q517.3 71.6 450.6 109.6\"/><path class=\"jm-arc\" data-i=\"3\" d=\"M136.0 114.0Q150.4 58.2 164.8 76.2\"/><path class=\"jm-arc\" data-i=\"4\" d=\"M411.6 92.2Q302.2 7.4 192.8 69.0\"/><path class=\"jm-arc\" data-i=\"5\" d=\"M595.6 87.0Q619.0 45.5 642.4 227.8\"/><path class=\"jm-arc\" data-i=\"6\" d=\"M378.0 56.0Q352.7 35.4 327.4 53.4\"/><path class=\"jm-arc\" data-i=\"7\" d=\"M415.8 159.0Q377.8 21.4 339.8 57.0\"/><path class=\"jm-arc\" data-i=\"8\" d=\"M246.0 184.0Q283.9 47.2 321.8 82.6\"/><path class=\"jm-arc\" data-i=\"9\" d=\"M478.0 100.0Q422.4 21.4 366.8 55.0\"/><path class=\"jm-arc\" data-i=\"10\" d=\"M548.0 92.0Q320.9 -66.1 93.8 61.4\"/><path class=\"jm-arc\" data-i=\"11\" d=\"M552.0 130.0Q591.0 93.2 630.0 235.6\"/><path class=\"jm-arc\" data-i=\"12\" d=\"M338.0 144.2Q265.0 33.8 192.0 78.6\"/><path class=\"jm-arc\" data-i=\"13\" d=\"M192.0 150.8Q262.3 35.0 332.6 79.2\"/><path class=\"jm-arc\" data-i=\"14\" d=\"M400.0 108.0Q379.2 51.0 358.4 69.0\"/><path class=\"jm-arc\" data-i=\"15\" d=\"M186.0 124.0Q183.2 54.6 180.4 72.6\"/><circle class=\"jm-to\" data-i=\"0\" cx=\"181.2\" cy=\"72.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"1\" cx=\"149.2\" cy=\"100.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"2\" cx=\"450.6\" cy=\"109.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"3\" cx=\"164.8\" cy=\"76.2\" r=\"3\"/><circle class=\"jm-to\" data-i=\"4\" cx=\"192.8\" cy=\"69.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"5\" cx=\"642.4\" cy=\"227.8\" r=\"3\"/><circle class=\"jm-to\" data-i=\"6\" cx=\"327.4\" cy=\"53.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"7\" cx=\"339.8\" cy=\"57.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"8\" cx=\"321.8\" cy=\"82.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"9\" cx=\"366.8\" cy=\"55.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"10\" cx=\"93.8\" cy=\"61.4\" r=\"3\"/><circle class=\"jm-to\" data-i=\"11\" cx=\"630.0\" cy=\"235.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"12\" cx=\"192.0\" cy=\"78.6\" r=\"3\"/><circle class=\"jm-to\" data-i=\"13\" cx=\"332.6\" cy=\"79.2\" r=\"3\"/><circle class=\"jm-to\" data-i=\"14\" cx=\"358.4\" cy=\"69.0\" r=\"3\"/><circle class=\"jm-to\" data-i=\"15\" cx=\"180.4\" cy=\"72.6\" r=\"3\"/></svg>";
const JM_FLAGS="<button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"0\" style=\"left:71.43%;top:46.92%\">🇮🇳</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"1\" style=\"left:52.14%;top:55.38%\">🇳🇬</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"2\" style=\"left:83.43%;top:51.54%\">🇵🇭</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"3\" style=\"left:18.57%;top:43.85%\">🇲🇽</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"4\" style=\"left:59.66%;top:32.77%\">🇱🇧</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"5\" style=\"left:85.09%;top:33.46%\">🇰🇷</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"6\" style=\"left:54.00%;top:20.38%\">🇵🇱</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"7\" style=\"left:59.40%;top:61.15%\">🇰🇪</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"8\" style=\"left:35.14%;top:70.77%\">🇧🇷</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"9\" style=\"left:66.57%;top:35.38%\">🇵🇰</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"10\" style=\"left:78.29%;top:35.38%\">🇨🇳</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"11\" style=\"left:78.86%;top:50.00%\">🇻🇳</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"12\" style=\"left:46.86%;top:55.46%\">🇬🇭</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"13\" style=\"left:27.43%;top:58.00%\">🇨🇴</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"14\" style=\"left:56.29%;top:44.23%\">🇪🇬</button><button type=\"button\" class=\"jm-flag\" data-a=\"jmFlag\" data-i=\"15\" style=\"left:27.43%;top:46.15%\">🇯🇲</button>";
const JM_D=[["🇮🇳", "India", "Toronto"], ["🇳🇬", "Nigeria", "Houston"], ["🇵🇭", "Philippines", "Dubai"], ["🇲🇽", "Mexico", "Chicago"], ["🇱🇧", "Lebanon", "Montréal"], ["🇰🇷", "Korea", "Sydney"], ["🇵🇱", "Poland", "Dublin"], ["🇰🇪", "Kenya", "London"], ["🇧🇷", "Brazil", "Lisbon"], ["🇵🇰", "Pakistan", "Berlin"], ["🇨🇳", "China", "Vancouver"], ["🇻🇳", "Vietnam", "Melbourne"], ["🇬🇭", "Ghana", "New York"], ["🇨🇴", "Colombia", "Madrid"], ["🇪🇬", "Egypt", "Milan"], ["🇯🇲", "Jamaica", "Brampton"]];
const JM_CHIPS=[[0, "🇮🇳", "India", "India"], [1, "🇳🇬", "Nigeria", "Nigeria"], [3, "🇲🇽", "Mexico", "Mexico"], [2, "🇵🇭", "Philippines", "Philippines"], [5, "🇰🇷", "Korea", "South Korea"], [4, "🇱🇧", "Lebanon", "Lebanon"], [8, "🇧🇷", "Brazil", "Brazil"], [7, "🇰🇪", "Kenya", "Kenya"], [6, "🇵🇱", "Poland", "Poland"], [9, "🇵🇰", "Pakistan", "Pakistan"], [10, "🇨🇳", "China", "China"], [13, "🇨🇴", "Colombia", "Colombia"], [12, "🇬🇭", "Ghana", "Ghana"], [14, "🇪🇬", "Egypt", "Egypt"], [11, "🇻🇳", "Vietnam", "Vietnam"], [15, "🇯🇲", "Jamaica", "Jamaica"]];
const JM={i:0,mine:false,timer:null,raf:0};
function jmHint(){try{return localStorage.getItem('nm.rootsHint')||''}catch(e){return ''}}
function jmBlock(){const h=jmHint();
  return `<div class="jm" id="jm"><div class="jm-head"><span>Roots here, home there</span><b class="jm-n">1 / ${JM_D.length}</b></div>
   <div class="jm-box">${JM_SVG}${JM_FLAGS}<span class="jm-heart" aria-hidden="true">♥</span></div>
   <div class="jm-cap" aria-live="polite"><span class="jm-big"></span><span class="jm-txt"></span></div></div>
   <p class="jm-ask">Where did you grow up? <small>Tap your flag</small></p>
   <div class="jm-chips">${JM_CHIPS.map(([j,f,n,c])=>`<button type="button" class="jm-chip${h===c?' on':''}" data-a="jmPick" data-j="${j}" data-c="${esc(c)}">${f} ${esc(n)}</button>`).join('')}<button type="button" class="jm-chip" data-a="jmOther">🌍 Other</button></div>`}
function jmShow(k,yours){const r=document.getElementById('jm');if(!r)return;JM.i=k;cancelAnimationFrame(JM.raf);
  r.querySelectorAll('.on').forEach(e=>e.classList.remove('on'));
  const arc=r.querySelector(`.jm-arc[data-i="${k}"]`);if(!arc)return;const L=arc.getTotalLength();arc.style.setProperty('--len',L);
  r.querySelectorAll(`[data-i="${k}"]`).forEach(e=>e.classList.add('on'));
  const d=JM_D[k];r.querySelector('.jm-n').textContent=(k+1)+' / '+JM_D.length;
  r.querySelector('.jm-big').textContent=d[0]+' → 🏠';
  r.querySelector('.jm-txt').innerHTML=yours?`Your roots: <b>${esc(d[1])}</b><br>Verified people with these roots near you show first.`:`Grew up in <b>${esc(d[1])}</b><br>lives in <b>${esc(d[2])}</b>`;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const svg=r.querySelector('.jm-svg'),heart=r.querySelector('.jm-heart'),vb=svg.viewBox.baseVal,t0=performance.now();
  (function step(t){const p=Math.min(1,Math.max(0,(t-t0)/1300)),pt=arc.getPointAtLength(L*p);heart.style.opacity=p<1?1:0;
    heart.style.left=(pt.x/vb.width*100)+'%';heart.style.top=(pt.y/vb.height*100)+'%';if(p<1)JM.raf=requestAnimationFrame(step)})(t0)}
function jmLoop(){clearInterval(JM.timer);if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  JM.timer=setInterval(()=>{if(!document.getElementById('jm')){clearInterval(JM.timer);return}if(!JM.mine)jmShow((JM.i+1)%JM_D.length,false)},3200)}
function jmAfter(){if(!document.getElementById('jm'))return;const h=jmHint(),c=JM_CHIPS.find(x=>x[3]===h);
  if(c){JM.mine=true;jmShow(c[0],true)}else{JM.mine=false;jmShow(JM.i,false);jmLoop()}}
function renderWelcomeLook2(){return renderWelcomeV2().replace(/<div class="v2w-sky"[\s\S]*?<\/span><\/div>\n  <div class="v2w-body pad">/,'<div class="v2w-body pad v2w-look2">')
  .replace('<p class="v2brand">NEUMARRY</p>','<p class="v2brand">NEUMARRY</p>')
  .replace(/(<p class="v2w-lede">[\s\S]*?<\/p>)/,'$1'+jmBlock())}
(function(){
  Object.assign(A,{
    jmPick(el){const c=el.dataset.c;try{localStorage.setItem('nm.rootsHint',c)}catch(e){}JM.mine=true;clearInterval(JM.timer);
      document.querySelectorAll('.jm-chip').forEach(b=>b.classList.toggle('on',b===el));jmShow(+el.dataset.j,true)},
    jmOther(){try{localStorage.removeItem('nm.rootsHint')}catch(e){}JM.mine=false;document.querySelectorAll('.jm-chip').forEach(b=>b.classList.remove('on'));
      const t=document.querySelector('.jm-txt');if(t)t.innerHTML='Every country is welcome. You pick your roots in the first steps.';jmLoop()},
    jmFlag(el){JM.mine=false;jmShow(+el.dataset.i,false);jmLoop()}
  });
  const _bd=blankDraft;blankDraft=function(){const d=_bd();const h=jmHint();if(h&&!d.oc)d.oc=h;return d};
  const _rw=renderWelcome;renderWelcome=function(){return V2()&&LOOK2()?renderWelcomeLook2():_rw()};
  const _r=render;render=function(){_r();const on=LOOK2();document.documentElement.classList.toggle('look2',on);if(on&&S.screen==='welcome')jmAfter();if(on&&S.screen==='app'&&S.tab==='matches'){const t=app.querySelector('.topbar');if(t)t.classList.add('plum')}};
})();

window.__rm={get S(){return S},get PROFILES(){return PROFILES},A,render,boot,goBack,card:p=>card(p)}; /* used by automated tests */
boot();
})();
