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
function price(){const c=CMAP[S.me.country];const cur=c?c[3]:'USD';const pr=PRICE[cur]||PRICE.USD;const g=parseFloat(pr[1]);const fx=n=>(Math.round(g*n)-0.01).toFixed(2);return {sym:pr[0],gold:pr[1],conc:pr[2],m3:fx(2.4),m6:fx(3.6),pm3:(fx(2.4)/3).toFixed(2),pm6:(fx(3.6)/6).toFixed(2)}}
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
function money(cents,cur){const sym={CAD:'CA$',USD:'US$',GBP:'£',AUD:'A$',EUR:'€',INR:'₹'}[cur]||((cur||'')+' ');const v=cents/100;return sym+(Number.isInteger(v)?v:v.toFixed(2))}
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
  if(S.screen==='signup'&&S.draft&&!S.editMode){try{const d=Object.assign({},S.draft);d.photo=null;d.selfie=null;d.idPreview=null;localStorage.setItem('rm.draft.'+(API.userId()||'anon'),JSON.stringify({d,step:S.step}))}catch(e){}}}
function loadDraft(){try{const o=JSON.parse(localStorage.getItem('rm.draft.'+(API.userId()||'anon'))||'null');if(o&&o.d){return o}}catch(e){}return null}
function clearDraft(){try{localStorage.removeItem('rm.draft.'+(API.userId()||'anon'))}catch(e){}}
const byId=id=>PROFILES.find(p=>p.id===id);
function isGold(){return S.me&&S.me.plan!=='free'}
function locked(p){return !isGold()&&!p.mutual}
function verified(){return S.me&&S.me.v.id&&S.me.v.selfie}
function canChat(id){const p=byId(id);return !!p&&p.mutual&&(isGold()||p.gold)}
function chatWhy(id){const p=byId(id);if(isGold()||!p)return '';if(p.gold)return `${p.first||'They'} ${p.first?'has':'have'} Gold, so you can chat for free`;return ''}
const BETA=Date.now()<Date.parse(CFG.betaUntil);

/* ---------- Server data → screen shapes ---------- */
function meFromServer(m){
  const p=m.profile,q=m.prefs||{};
  const pr={ageMin:q.age_min??18,ageMax:q.age_max??75,hMin:q.h_min??HEIGHTS[0].cm,hMax:q.h_max??HEIGHTS[HEIGHTS.length-1].cm,liveCountry:q.live_country||'Any',radius:q.radius_km||0,
    oc:q.origin_country||'Any',os:q.origin_state||'Any',religion:q.religion||'Any',community:q.community||'Any',alsoComm:q.also_communities||[],tongue:q.tongue||'Any',diet:q.diet||'Any',settled:!!q.settled_only,verifiedOnly:q.verified_only!==false};
  const photos=(m.photos||[]).filter(x=>x.status!=='rejected');const rejectedPhoto=(m.photos||[]).find(x=>x.status==='rejected');
  const ver=k=>{const list=(m.verifications||[]).filter(v=>v.kind===k);return list.length?list[list.length-1]:null};
  return {id:p.id,name:p.full_name,g:p.gender,lookingFor:p.looking_for,dob:p.dob,age:ageFrom(p.dob),h:p.height_cm,marital:p.marital,createdBy:p.created_by,
    oc:p.origin_country,os:p.origin_state,t:p.mother_tongue,r:p.religion,c:p.community||'',country:p.country,state:p.state||'',city:p.city,res:p.residency,reloc:p.relocate,
    job:p.job,edu:p.education,about:p.about,diet:p.diet,sm:p.smoke,dr:p.drink,ans:(p.answers||[]).map(Number),phone:p.phone||'',
    v:{phone:!!p.phone_verified,id:!!p.id_verified,selfie:!!p.selfie_verified},
    privacy:{blur:p.blur_photos,vis:p.hidden?'hidden':'verified',showC:p.show_community,incognito:p.incognito},
    prefs:pr,plan:m.plan||'free',goldUntil:m.gold_until,goldSource:m.gold_source,isAdmin:!!p.is_admin,womenOffer:p.women_offer_until,womenLeft:m.women_offer_left,
    photos,photoPaths:photos.map(x=>x.path),photoPending:photos.some(x=>x.status==='pending'),rejectedPhoto:rejectedPhoto&&!photos.length?rejectedPhoto:null,
    idCheck:ver('id'),selfieCheck:ver('selfie'),checks:m.verifications||[],photo:S.me&&S.me.photoPaths&&S.me.photoPaths[0]===(photos[0]||{}).path?S.me.photo:null,
    lat:p.city_lat,lng:p.city_lng,banned:p.banned,createdAt:p.created_at}
}
function cardFromServer(c){
  const parts=String(c.display_name||'').split(' ');
  return {id:c.id,name:c.display_name,first:c.first_name||'',last:parts.slice(1).join(' '),g:c.gender,age:c.age,h:c.height_cm,marital:c.marital,createdBy:c.created_by,
    oc:c.origin_country,os:c.origin_state,t:c.mother_tongue,r:c.religion,c:c.community||'',cityName:c.city,country:c.country,state:c.state||'',lat:c.city_lat,lng:c.city_lng,
    res:c.residency,reloc:c.relocate,job:c.job||'',edu:c.education||'',about:c.about||'',diet:c.diet,sm:c.smoke,dr:c.drink,ans:(c.answers||[]).map(Number),
    v:{id:!!c.id_verified,selfie:!!c.selfie_verified,phone:false,work:false},days:c.joined_days||0,photoPaths:c.photo_paths||[],photos:[],photoCount:c.photo_count||0,
    mutual:!!c.mutual,locked:!!c.locked,gold:!!c.gold,fits:!!c.fits,paused:!!c.paused,turban:c.gender==='M'&&c.religion==='Sikh'}
}
const URLS={};   // storage path → signed URL
async function signPaths(paths){const need=paths.filter(p=>p&&!(URLS[p]&&URLS[p].exp>Date.now()+300e3));if(!need.length)return;
  try{const got=await API.signMany('photos',need,7200);Object.keys(got).forEach(k=>{URLS[k]={u:got[k],exp:Date.now()+7200e3}})}catch(e){}}
function urlOf(path){return URLS[path]?URLS[path].u:null}
function attachPhotos(){PROFILES.forEach(p=>{p.photos=p.photoPaths.map(urlOf).filter(Boolean)});if(S.me){const u=S.me.photoPaths[0]&&urlOf(S.me.photoPaths[0]);if(u)S.me.photo=u}}

async function loadMe(){const m=await API.rpc('me');if(!m||!m.profile)return null;S.me=meFromServer(m);return S.me}
async function loadCards(){
  if(!S.me)return;
  const [fit,ints]=await Promise.all([API.rpc('member_cards',{lim:400,off:0}),API.select('interests',{select:'*'})]);
  const me=S.me.id,map={};
  (ints||[]).forEach(i=>{const other=i.from_user===me?i.to_user:i.from_user;let st;
    if(i.status==='accepted')st='mutual';
    else if(i.from_user===me)st='sent';
    else st=i.status==='declined'?'declined':'received';
    if(!map[other]||st==='mutual')map[other]=st});
  S.interests=map;
  const have=new Set((fit||[]).map(c=>c.id));const extra=Object.keys(map).filter(id=>!have.has(id));
  let rel=[];if(extra.length)rel=await API.rpc('member_cards',{only_ids:extra,lim:400,off:0});
  PROFILES=(fit||[]).concat(rel||[]).map(cardFromServer);
  await signPaths(PROFILES.flatMap(p=>p.photoPaths.slice(0,3)).concat(S.me.photoPaths.slice(0,1)));
  attachPhotos();
}
async function loadBlocks(){const b=await API.select('blocks',{select:'blocked'});S.blocked=(b||[]).map(x=>x.blocked)}
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
async function loadEvents(){const list=await API.rpc('event_list');S.events=(list||[]).map(eventFromServer)}
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
  if(pr.religion!=='Any'&&pr.community!=='Any'&&!commMatch(p.c,pr.community)&&!(pr.alsoComm||[]).some(x=>commMatch(p.c,x)))return false;
  if(pr.tongue!=='Any'&&p.t!==pr.tongue)return false;
  if(pr.diet==='veg'&&dietGroup(p.diet)!==0)return false;
  if(pr.settled&&!SETTLED.includes(p.res))return false;
  if(pr.verifiedOnly&&!(p.v.id&&p.v.selfie))return false;
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
function activeFilterCount(){const pr=S.me.prefs,d=defaultPrefs(S.me);let n=0;['liveCountry','radius','oc','os','religion','community','tongue','diet','settled','verifiedOnly'].forEach(k=>{if(String(pr[k])!==String(d[k]))n++});if((pr.alsoComm||[]).length)n++;return n}

/* ---------- Defaults ---------- */
function blankDraft(){return {name:'',createdBy:'Self',g:'',lookingFor:'',dob:'',h:'',marital:'Never married',photo:null,photoBlob:null,
  oc:'India',os:'',t:'',r:'',c:'',country:'',state:'',city:'',res:'',reloc:'',job:'',edu:'',about:'',diet:'',sm:'No',dr:'No',ans:QS.map(()=>null),
  v:{phone:false,id:false,selfie:false},phone:'',idName:'',idBlob:null,idPreview:null,selfie:null,selfieBlob:null,
  privacy:{blur:true,vis:'verified',showC:true,incognito:false},prefs:null}}
function defaultPrefs(d){const a=ageFrom(d.dob)||27;const male=d.g==='M';
  return {ageMin:Math.max(18,male?a-5:a-1),ageMax:male?a+1:a+6,hMin:male?HEIGHTS[0].cm:(+d.h||HEIGHTS[0].cm),hMax:HEIGHTS[HEIGHTS.length-1].cm,
    liveCountry:d.country||'Any',radius:0,oc:d.oc||'Any',os:'Any',religion:d.r||'Any',community:'Any',alsoComm:[],tongue:'Any',diet:'Any',settled:false,verifiedOnly:true}}

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
function fail(e){toast((e&&e.message)||'Something went wrong. Please try again.','info')}

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
function rootsLine(p){return `<span class="roots"><span class="rg"><span class="k">Roots</span> ${esc(p.os)}, ${esc(p.oc)}</span> <span class="rg"><span class="arr" aria-hidden="true">→</span> <span class="k">Lives</span> ${esc(p.cityName)} · ${esc(distLabel(p))}</span></span>`}
function trustBadges(p){const out=[];
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
  return `<article class="mcard${lk?' lockd':''}" id="card-${p.id}">
    <button class="mphoto" data-a="open" data-id="${p.id}" aria-label="${lk?`See this ${c.total}% match with Gold`:`Open ${esc(shown(p))}'s profile`}">
      ${avatar(p,'cover')}
      <span class="mtop"><span class="mchip glass">${ic('sparkle')}${c.total}% match</span>${st==='received'?`<span class="mchip state">${ic('heart')}Likes you</span>`:p.days<=10?`<span class="mchip new">New</span>`:''}</span>
      <span class="mname"><span class="nm">${esc(shown(p))} <span class="age">${p.age}</span> ${vtick(p)}</span><small>${lk?`${ic('lock')} Name, photos and profile with Gold`:`${esc(p.job)} · ${ftIn(p.h)}`}</small></span>
    </button>
    <div class="mbody">${rootsLine(p)}
      <ul class="why">${whyChips(p).map(w=>`<li${w.r?' class="r"':''}>${esc(w.t)}</li>`).join('')}</ul>
      ${trustBadges(p)}
      <div class="mact">${lk?`<button class="btn gold" data-a="upgrade" data-r="profile" data-id="${p.id}">${ic('crown')}See ${p.g==='F'?'her':'his'} profile</button>`:actionBar(p)}</div></div>
  </article>`;
}
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
    priceM:x.member_price_cents,priceP:x.parent_price_cents,meals:x.meal_options||[],status:x.status,deadline:new Date(x.confirm_deadline),
    womenFrom:x.women_book_from&&new Date(x.women_book_from),menFrom:x.men_book_from&&new Date(x.men_book_from),
    my:x.my_status?{status:x.my_status,parents:x.my_parents||[],meal:x.my_meal,amount:x.my_amount_cents,due:x.my_due_by&&new Date(x.my_due_by)}:null,venue:x.venue}
}
function events(){return S.events}
function evById(id){return S.events.find(e=>e.id===id)}
function audOk(e,p){const a=e.aud||{k:'all'};return a.k==='all'||(a.k==='t'&&p.t===a.v)||(a.k==='r'&&p.r===a.v)}
function audLabel(e){const a=e.aud||{k:'all'};return a.k==='all'?'All communities':`For ${a.l}`}
function forMe(e){return audOk(e,S.me)}
function ageOk(e){return S.me.age>=e.ageMin&&S.me.age<=e.ageMax}
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
  'One account per person, in your real name. You verify a government ID and a live selfie.',
  'NeuMarry suggests matches and hosts events. We do not run criminal background checks and cannot promise who anyone is or how they will behave. Meetings, decisions, relationships and any marriage after an introduction are your own responsibility.',
  'Never send money, gifts or visa help to anyone you meet here, and report anyone who asks.',
  'Gold renews automatically until you cancel in your Google Play or App Store account. Event seats are free to reserve and paid only when the event is confirmed. The ticket includes your meal; nothing is paid at the restaurant.',
  'We can suspend accounts that break these rules, including fake profiles, harassment and asking for money.']],
 privacy:['Privacy Policy: the key points',[
  'We collect what you put in your profile, your ID and selfie checks, your activity in the app and basic device data, and use it to verify you, suggest matches, run events and keep members safe.',
  'Your phone number, email and ID are never shown to other members. ID and selfie images are deleted within 30 days of the check.',
  'Your photos stay hidden until you both accept, unless you turn blurring off. Religion and community are optional to show.',
  'We never sell your data. Service providers (hosting, payments, video) process it only for us, under contract.',
  'You can correct or delete your data at any time: Me, then Delete my account.',
  'Questions or complaints go to our Grievance Officer, Swapnil Dinesh Bhagat, who replies within 30 days.']]};

/* ---------- Signup ---------- */
const SHORT=['About','Roots','Location','Values','Verify','Privacy'];
const STEPS=['About you','Your roots','Where you live now','Values & lifestyle','Verify you’re real','Privacy & preferences'];
function checkLine(c,label){if(!c)return '';const st=c.status;return `<p class="hint">${st==='approved'?`${ic('check')} ${label} approved`:st==='rejected'?`<b style="color:var(--bad)">${label} not approved${c.note?': '+esc(c.note):''}.</b> Upload a new one.`:`${label} received. Our team checks it within 24 hours.`}</p>`}
function renderSignup(){
  const d=S.draft,st=S.step,edit=S.editMode;let body='';const lockedId=edit&&S.me&&S.me.v.id;
  if(st===1){
    const maxDob=new Date();maxDob.setFullYear(maxDob.getFullYear()-18);
    const pend=edit&&S.me&&S.me.photoPending&&!d.photoBlob;const rej=edit&&S.me&&S.me.rejectedPhoto&&!d.photoBlob;
    body=`<div class="photo-pick">${avatar(null,'lg',true)}<div style="display:grid;gap:6px"><span class="btn ghost sm file">${ic('camera')}${d.photo?'Change photo':'Add a photo'}<input type="file" accept="image/*" data-file="photo" aria-label="Profile photo"></span><span class="hint">${pend?'Your photo is waiting for a quick check by our team.':rej?`<b style="color:var(--bad)">Your last photo was not approved${S.me.rejectedPhoto.note?': '+esc(S.me.rejectedPhoto.note):''}.</b> Add a clear photo of your face.`:'A clear, recent photo of your face. Hidden from others until you both accept.'}</span></div></div>${errOf('photo')}
    ${inF('name','Full name','text',d.name,`autocomplete="name" maxlength="60"${lockedId?' disabled':''}`,lockedId?'Checked against your ID. Write to us to change it.':'Others see only your first name and last initial until you match.')}
    ${pickF('createdBy','Profile created by','draft')}
    <div class="fld" data-f="g"><span>I am</span>${radioChips('g',[{v:'M',l:'A man'},{v:'F',l:'A woman'}],d.g,true,lockedId)}${errOf('g')}</div>
    <div class="fld" data-f="lookingFor"><span>Looking for</span>${radioChips('lookingFor',[{v:'F',l:'A woman'},{v:'M',l:'A man'}],d.lookingFor)}${errOf('lookingFor')}</div>
    <div class="row2">${inF('dob','Date of birth','date',d.dob,`max="${maxDob.toISOString().slice(0,10)}" min="1950-01-01"${lockedId?' disabled':''}`)}${pickF('h','Height','draft',{ph:'Select'})}</div>
    ${pickF('marital','Marital status','draft')}`;
  }else if(st===2){
    const hasStates=statesOf(d.oc).length>0;
    body=`<div class="callout">${ic('pin')}<span>Where were you born and brought up? We use this to find people from your roots.</span></div>
    ${pickF('oc','Country of origin','draft',{ph:'Choose a country'})}
    ${pickF('os','State / region','draft',{ph:hasStates?'Choose a state or region':'Type your region',disabled:!d.oc})}
    ${pickF('t','Mother tongue','draft',{ph:'Choose a language'})}
    ${pickF('r','Religion','draft',{ph:'Choose a religion'})}
    ${pickF('c','Community (optional)','draft',{ph:d.r?'Choose or type your community':'Choose a religion first',disabled:!d.r,showBlank:!!d.r,hint:'Only used when you or a match filter by it.'})}
    <div class="panel" style="padding:4px 16px">${toggle('privacy.showC','Show my community on my profile','Turn off to keep it private. Filters still work.',d.privacy.showC)}</div>`;
  }else if(st===3){
    body=`${pickF('country','Country you live in','draft',{ph:'Choose a country'})}
    <div class="row2">${pickF('state','State / province','draft',{ph:'Choose',disabled:!d.country})}${pickF('city','City','draft',{ph:'Choose or type',disabled:!d.country})}</div>
    ${pickF('res','Residency status','draft',{ph:'Choose',disabled:!d.country})}
    ${pickF('reloc','Open to relocating for the right person?','draft',{ph:'Choose',disabled:!d.country})}
    ${inF('job','Profession','text',d.job,'maxlength="60" placeholder="e.g. Software engineer"')}
    ${inF('edu','Highest education','text',d.edu,'maxlength="80" placeholder="e.g. MSc, University of Toronto"')}
    <label class="${fldCls('about')}" data-f="about"><span>About me</span><textarea id="f-about" data-bind="about" maxlength="600" placeholder="Where you grew up, what you love, what you are looking for.">${esc(d.about)}</textarea><span class="hint">At least 40 characters. Do not add phone numbers or social handles here.</span>${errOf('about')}</label>`;
  }else if(st===4){
    body=`<p class="hint">There are no right answers. We use these to show how your mindsets match.</p>
    ${QS.map((q,i)=>`<fieldset class="q${S.errors['ans.'+i]?' has-err':''}" data-f="ans.${i}"><legend>${i+1}. ${esc(q.q)}</legend><div class="opts">${q.o.map((o,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}" data-bind="ans.${i}" data-num${d.ans[i]===j?' checked':''}><span>${esc(o)}</span></label>`).join('')}</div>${errOf('ans.'+i)}</fieldset>`).join('')}
    <h3 class="section-t">Lifestyle</h3>
    ${pickF('diet','Diet','draft',{ph:'Choose'})}
    <div class="row2">${pickF('sm','Smoking','draft')}${pickF('dr','Drinking','draft')}</div>`;
  }else if(st===5){
    const code=dial(d.country)||'';const me=edit?S.me:null;
    const idOk=me&&me.v.id,selfOk=me&&me.v.selfie,idC=me&&me.idCheck,sC=me&&me.selfieCheck;
    const needId=!idOk&&!(idC&&idC.status==='pending'),needSelf=!selfOk&&!(sC&&sC.status==='pending');
    body=`<div class="callout">${ic('shield')}<span>Every member passes these checks. Members without an approved ID and selfie cannot send interests, chat or book events, so fake profiles have nowhere to go.</span></div>
    <div class="vcard"><h4>${ic('id')}Government ID ${idOk?`<span class="ok">${ic('check')}Verified</span>`:''}</h4>
      <p class="hint">Passport, residence card or driving licence. Only our team sees it, and it is deleted within 30 days of the check. Never shown on your profile.</p>
      ${idOk?'':idC&&!d.idBlob?checkLine(idC,'ID'):''}
      ${needId||(idC&&idC.status==='rejected')?(d.idBlob?`<p class="hint">${ic('check')} ${esc(d.idName)} ready to send</p><span class="btn ghost sm file">${ic('refresh')}Choose another<input type="file" accept="image/*,application/pdf" data-file="id" aria-label="Upload government ID"></span>`:`<span class="btn ghost sm file">${ic('plus')}Upload ID<input type="file" accept="image/*,application/pdf" data-file="id" aria-label="Upload government ID"></span>`):''}
    </div>
    <div class="vcard"><h4>${ic('camera')}Live selfie ${selfOk?`<span class="ok">${ic('check')}Verified</span>`:''}</h4>
      <p class="hint">Take a selfie now. We match it to your ID and photos so nobody can use someone else's pictures.</p>
      ${selfOk?'':sC&&!d.selfieBlob?checkLine(sC,'Selfie'):''}
      ${needSelf||(sC&&sC.status==='rejected')?(d.selfie?`<img src="${d.selfie}" alt="Your selfie" style="width:72px;height:72px;border-radius:18px;object-fit:cover"><span class="btn ghost sm file">${ic('refresh')}Retake<input type="file" accept="image/*" capture="user" data-file="selfie" aria-label="Retake selfie"></span>`:`<span class="btn ghost sm file">${ic('camera')}Take selfie<input type="file" accept="image/*" capture="user" data-file="selfie" aria-label="Take selfie"></span>`):''}
    </div>
    <div class="vcard"><h4>${ic('phone')}Mobile number <small class="hint" style="font-weight:500">optional</small></h4>
      <p class="hint">For event reminders from your host. Never shown to other members. Code checks by SMS are coming soon.</p>
      <div class="row2" style="grid-template-columns:96px 1fr"><label class="fld"><span>Code</span><input value="${esc(code||'+')}" disabled aria-label="Country code"></label>${inF('phone','Mobile number','tel',d.phone,'inputmode="numeric" maxlength="14" autocomplete="tel-national"')}</div>
    </div>`;
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
    ${pr.community!=='Any'?pickF('prefs.alsoComm','Also open to these communities','draft',{hint:'More communities means more matches and more people to meet at events.'}):''}`;
  }
  const hasV=d.idBlob&&d.selfieBlob;
  return `<div class="su-head pad"><button class="iconbtn" data-a="suBack" aria-label="${st===1&&!edit?'Back to start':'Previous step'}">${ic('back')}</button>
    <div class="t"><small>${edit?'Edit profile':'Step '+st+' of 6'}</small><h2>${STEPS[st-1]}</h2>
    ${edit?`<div class="steps-nav" role="tablist">${STEPS.map((s,i)=>`<button data-a="suJump" data-n="${i+1}" class="${i+1===st?'on':''}" role="tab" aria-selected="${i+1===st}">${i+1}. ${SHORT[i]}</button>`).join('')}</div>`:`<div class="progress" aria-hidden="true">${STEPS.map((_,i)=>`<i class="${i<st?'on':''}"></i>`).join('')}</div>`}</div></div>
  <div class="scroll" id="su-scroll"><div class="form pad">${body}</div></div>
  <div class="su-foot pad">${edit?`<button class="btn ghost" data-a="suCancel"${busy?' disabled':''}>Discard</button><button class="btn primary" data-a="suSave"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' Saving':'Save changes'}</button>`:
    st===5&&!hasV?`<button class="btn ghost" data-a="suNext">Do this later</button><button class="btn primary" data-a="suNext" disabled>Continue</button>`:
    `<button class="btn primary" data-a="suNext"${busy?' disabled':''}>${busy==='save'?spinner('Saving')+' '+esc(S.saveMsg||'Saving'):st===6?'Finish and see matches':'Continue'}</button>`}</div>`;
}
function validateStep(st,d){
  const e={};
  if(st===1){if(!d.name.trim()||d.name.trim().length<2)e.name='Enter your name';else if(!/^[\p{L}][\p{L} .'-]*$/u.test(d.name.trim()))e.name='Use letters only';
    if(!d.g)e.g='Choose one';if(!d.lookingFor)e.lookingFor='Choose one';
    const a=ageFrom(d.dob);if(!d.dob)e.dob='Enter your date of birth';else if(a===null||a<18)e.dob='You must be 18 or older';else if(a>75)e.dob='Check the year';
    if(!d.h)e.h='Choose your height';}
  if(st===2){if(!d.oc)e.oc='Choose your country of origin';if(!d.os)e.os='Choose your state or region';if(!d.t)e.t='Choose your mother tongue';if(!d.r)e.r='Choose your religion';}
  if(st===3){if(!d.country)e.country='Choose the country you live in';else{if(statesOf(d.country).length&&!d.state)e.state='Choose one';if(!d.city)e.city='Choose or type';if(!d.res)e.res='Choose your residency status';if(!d.reloc)e.reloc='Choose one'}
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
function verifyBanner(){const me=S.me;if(verified())return '';
  const pend=(me.idCheck&&me.idCheck.status==='pending')||(me.selfieCheck&&me.selfieCheck.status==='pending');
  const rej=(me.idCheck&&me.idCheck.status==='rejected')||(me.selfieCheck&&me.selfieCheck.status==='rejected');
  return `<div class="callout gold">${ic('shield')}<span>${rej?'Your ID or selfie was not approved. <button class="link" data-a="goVerify">Upload again</button>':pend?'Your ID and selfie are with our team. You can send interests and chat once they are approved, usually within 24 hours.':'Upload your ID and a selfie to send interests, chat and book events. <button class="link" data-a="goVerify">Verify now</button>'}</span></div>`}
function renderMatches(){
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
    ${picks.length?`<div class="sec-h"><h2>Today’s picks for you</h2><small>New picks in <span data-until="${midnight()}">${fmtLeft(midnight()-Date.now())}</span></small></div>
    <div class="picks" role="list">${picks.map(tile).join('')}</div>`:''}
    <div class="sec-h"><h2>All matches</h2></div>
    <div class="listhead"><div class="sorts" role="group" aria-label="Sort">${[['best','Best match'],['near','Nearest'],['new','Newest']].map(([k,l])=>`<button data-a="sort" data-k="${k}" class="${S.sort===k?'on':''}" aria-pressed="${S.sort===k}">${l}</button>`).join('')}</div></div>
    ${list.length?list.map(card).join(''):`<div class="empty"><span class="eic">${ic('search')}</span><h3>${PROFILES.some(p=>p.fits)?'No one fits every filter yet':'New members are joining'}</h3><p>${PROFILES.some(p=>p.fits)?'Try widening one preference.':'NeuMarry is just opening. Verified members appear here as they join. Widening a preference shows more people.'}</p><div class="btns">
      ${pr.radius>0?`<button class="btn sm ghost" data-a="widen" data-k="radius">Anywhere in ${esc(pr.liveCountry)}</button>`:''}
      ${pr.liveCountry!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="anywhere">Any country</button>`:''}
      ${pr.community!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="community">Any community</button>`:''}
      ${pr.os!=='Any'?`<button class="btn sm ghost" data-a="widen" data-k="os">Anyone from ${esc(pr.oc)}</button>`:''}
      <button class="btn sm ghost" data-a="filters">Open filters</button></div></div>`}
    ${passedN?`<button class="link" data-a="togglePassed" style="justify-self:start">${S.showPassed?'Hide':'Show'} ${passedN} passed ${passedN===1?'profile':'profiles'}</button>`:''}
  </div></div>`;
}
function evCard(e){
  const f=fmtDay(e.date,e.tz),rv=e.my,st=evStat(e),[wc,wl,mc,ml]=e.seats;const left=S.me.g==='F'?wl:ml,cap=S.me.g==='F'?wc:mc;
  return `<button class="evcard" data-a="openEvent" data-id="${e.id}" aria-label="${esc(e.title)}, ${esc(f.long)}">
   <span class="evart" style="display:block">${evArt(e)}<span class="evd"><span>${f.mon}</span><b>${f.day}</b><span>${f.wd}</span></span><span class="evk">${rv?`<span class="booked">${ic('check')}${rv.status==='paid'?'Booked':'Reserved'}</span>`:''}<span>${ic(e.parents?'users':'user')}${e.parents?'Parents welcome':'Members only'}</span></span></span>
   <span class="evb">
    <span class="evt serif" style="font-size:21px;display:block">${esc(e.title)}</span>
    <span class="aud${forMe(e)?'':' off'}">${ic(forMe(e)?'globe':'lock')}${esc(audLabel(e))}</span>
    <span class="meta"><span>${ic('cal')}${esc(f.long)} · ${e.time}</span><span>${ic('pin')}${esc(e.area)}</span><span>${ic('users')}Ages ${e.age}</span></span>
    ${st.confirmed?`<span class="seats"><span class="cstat ok">${ic('check')}Confirmed · ${left<=6?`only ${left} seats left for ${S.me.g==='F'?'women':'men'}`:`${left} seats left for ${S.me.g==='F'?'women':'men'}`}</span><span class="sb"><i style="width:${Math.round((cap-left)/cap*100)}%"></i></span></span>`:
    `<span class="seats"><span class="cstat">${st.n} of ${e.need} reserved · confirms when ${st.left} more reserve by ${esc(fmtDay(st.deadline,e.tz).long)}</span><span class="sb"><i style="width:${Math.min(100,Math.round(st.n/e.need*100))}%"></i></span></span>`}
    <span class="evfoot"><span class="price-l"><b>${money(e.priceM,e.cur)}</b> per member, dinner included${e.parents&&e.priceP?` · parents ${money(e.priceP,e.cur)}`:''}</span>${rv&&rv.status==='pay_due'?`<span class="pill gold">Confirmed</span>`:rv?`<span class="pill good">Reserved free</span>`:`<span class="pill gold">Reserve free</span>`}</span>
   </span></button>`;
}
function renderEvents(){
  const evs=events();const mine=evs.filter(e=>e.my);
  return topbar('Events','Hosted evenings with dinner included')+
  `<div class="scroll" id="main"><div class="main-inner pad">
   ${mine.length?`<div class="sec-h"><h2>Your reservations</h2></div>${mine.map(e=>{const r=e.my,f=fmtDay(e.date,e.tz);return `<button class="tkrow" data-a="openEvent" data-id="${e.id}"><span class="tki" style="${r.status==='pay_due'?'':'background:var(--gold-soft);color:var(--gold)'}">${ic(r.status==='pay_due'?'ticket':'cal')}</span><span class="tx"><b>${esc(e.title)}</b><small>${r.status==='pay_due'?'Confirmed · we will message you when payment opens':`${esc(f.long)} · waiting for ${evStat(e).left} more to confirm`}</small></span>${ic('back','flipx')}</button>`}).join('')}`:''}
   <div class="callout">${ic('users')}<span>Reserve free. An event is confirmed when enough people reserve; then you pay in the app. Dinner is included, and nothing is paid at the restaurant. If it is not confirmed, nobody pays.</span></div>
   <div class="sec-h"><h2>Upcoming events</h2></div>
   ${evs.length>1?`<div class="sorts evf" role="group" aria-label="Show events">${[['for','For you'],['all','Every event']].map(([k,l])=>`<button data-a="evFilter" data-k="${k}" class="${(S.evFilter||'for')===k?'on':''}" aria-pressed="${(S.evFilter||'for')===k}">${l}</button>`).join('')}</div>`:''}
   ${(()=>{const fk=evs.length>1?(S.evFilter||'for'):'all';const shownEv=evs.filter(e=>fk==='all'?true:forMe(e));
     return shownEv.length?shownEv.map(evCard).join(''):`<div class="empty"><span class="eic">${ic('cal')}</span><h3>${evs.length?'No events for your community yet':'New events are coming'}</h3><p>${evs.length?'Hosts add community events as more members join.':'The first Family Mixers are being planned. You will see them here.'}</p>${evs.length?`<div class="btns"><button class="btn sm ghost" data-a="evFilter" data-k="all">Every event</button></div>`:''}</div>`})()}
   <p class="note">Every event: separate tables in one shared room, ID-verified guests, a NeuMarry host.</p>
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
  const vr=(state,t,s)=>`<div class="vrow">${state==='ok'?ic('check','ok-ic'):ic('info','no-ic')}<span class="tx"><b>${t}</b><small>${esc(s)}</small></span>${state==='no'?`<button class="btn sm primary" data-a="goVerify">Upload</button>`:''}</div>`;
  const idS=checkState(me.idCheck,me.v.id),sS=checkState(me.selfieCheck,me.v.selfie);
  const goldLine=me.plan==='free'?'':me.goldSource==='admin'?`Gold is on for free during the test, until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short'})}.`:me.goldSource==='women_offer'?`Your free Gold (welcome offer for women in Canada) runs until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`:me.goldSource==='google'?`Gold through Google Play, paid until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`:`Gold is active until ${new Date(me.goldUntil).toLocaleDateString(RM_I18N.locale,{day:'numeric',month:'short',year:'numeric'})}.`;
  return topbar('My profile',me.plan==='gold'?'Gold member':me.plan==='concierge'?'Concierge member':'Free member',`<button class="iconbtn soft" data-a="previewMe" aria-label="See my profile as others do">${ic('eye')}</button>`)+
  `<div class="scroll" id="main"><div class="main-inner pad">
   ${me.isAdmin?`<button class="likes" data-a="openAdmin"><span class="pi" style="width:40px;height:40px;border-radius:50%;background:var(--rose-soft);color:var(--rose);display:grid;place-items:center">${ic('shield')}</span><span class="tx"><b>Team: review queue</b><span>Approve photos, IDs and selfies, and handle reports</span></span>${ic('back','flipx')}</button>`:''}
   <div class="panel"><div class="me-card">${avatar(null,'md',true)}<div class="tx"><h3>${esc(parts[0])}${parts[1]?' '+esc(parts[1][0])+'.':''}</h3><p>${me.age} · ${ftIn(me.h)} · ${esc(me.job)}</p><p>${esc(me.os)}, ${esc(me.oc)} → ${esc(myPlace())}</p></div></div>
    ${me.photoPending?`<p class="hint">${ic('info')} Your photo is waiting for a quick check by our team.</p>`:''}
    <div class="complete"><div class="hint">Profile ${pct}% complete${pct<100?' · a complete profile builds more trust':''}</div><div class="bar"><i style="width:${pct}%"></i></div></div>
    <button class="btn ghost" data-a="edit">Edit profile</button></div>
   <div class="panel"><h3>Verification</h3><div>${vr(idS[0],'Government ID',idS[1])}${vr(sS[0],'Live selfie',sS[1])}<div class="vrow">${ic('info','no-ic')}<span class="tx"><b>Phone number</b><small>${me.phone?esc(me.phone)+' · code checks by SMS are coming soon':'Optional · add it in Edit profile'}</small></span></div></div></div>
   ${workCard()}
   <div class="panel"><h3>Privacy</h3><div>
    ${toggle('privacy.blur','Hide my photos','Only people you have both accepted can see them',me.privacy.blur,'me')}
    ${toggle('privacy.showC','Show my community','Filters still work if this is off',me.privacy.showC,'me')}
    ${toggle('privacy.incognito','Browse privately','Others do not see that you viewed them · Gold',me.privacy.incognito,'me')}
    ${toggle('paused','Pause my profile','Hide from everyone while you talk to someone',me.privacy.vis==='hidden','me')}
   </div></div>
   <div class="panel"><h3>Your plan</h3>
    ${me.plan==='free'?`<p class="sub">Free shows how many people fit you and your match % with each, and you can chat when a Gold member matches with you. Names, photos, interests, chat, daily picks and event guest lists are part of Gold.</p>${me.g==='F'&&me.country==='Canada'&&!me.womenOffer?`<div class="callout gold">${ic('gift')}<span>Welcome offer: the first 500 verified women in Canada get 3 months of Gold free. It switches on when your ID is approved.</span></div>`:''}<button class="btn gold" data-a="upgrade">${ic('crown')}See Gold, from ${planOpts()[2][3]}/month</button>`:
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
function renderProfileView(id,isMe){
  let p;
  if(isMe){const me=S.me,parts=me.name.trim().split(/\s+/);p=Object.assign({},me,{id:'me',first:parts[0],last:parts.slice(1).join(' '),cityName:me.city||me.state,v:Object.assign({work:false},me.v),photos:me.photo?[me.photo]:[],photoCount:me.photoPaths.length})}
  else p=byId(id);
  if(!p)return '';
  const c=isMe?null:compat(p);const showC=isMe?p.privacy.showC:true;
  const kv=[['Age',p.age],['Height',ftIn(p.h)],['Lives in',`${p.cityName}, ${p.country}`],['Roots',`${p.os}, ${p.oc}`],['Mother tongue',p.t],['Religion',p.r+(showC&&p.c?` · ${p.c}`:'')],['Residency',p.res],['Marital status',p.marital],['Profession',p.job],['Education',p.edu],['Diet',p.diet],['Smoke · Drink',`${p.sm} · ${p.dr}`],['Profile created by',p.createdBy]];
  const badges=[p.v.id&&'Government ID',p.v.selfie&&'Live selfie'].filter(Boolean);
  const nm=isMe?`${p.first}${p.last?' '+p.last[0]+'.':''}`:shown(p);
  const valsHtml=isMe?'':QS.map((q,i)=>{const d=Math.abs(S.me.ans[i]-p.ans[i]);const cls=d===0?'s':d===1?'c':'f';return `<div class="val"><span class="mk ${cls}" aria-label="${d===0?'Same':d===1?'Close':'Different'}">${d===0?'✓':d===1?'≈':'–'}</span><div><div class="q2">${esc(q.k)}</div><div class="a"><i>You</i><span>${esc(q.o[S.me.ans[i]])}</span><i>${p.g==='F'?'Her':'Him'}</i><span>${esc(q.o[p.ans[i]])}</span></div></div></div>`}).join('');
  const more=!isMe&&p.photos&&p.photos.length>1?`<div class="panel"><h3>Photos</h3><div class="pgrid">${p.photos.slice(1).map(u=>`<span class="ptile"><span class="av av-tile"><img src="${esc(u)}" alt="" loading="lazy"></span></span>`).join('')}</div></div>`:'';
  return `<div class="view" role="dialog" aria-label="${esc(nm)} profile">
   <div class="scroll" id="view-scroll">
    <div class="pv-top">${isMe?avatar(null,'xl',true):avatar(p,'xl')}
      <div class="vhead over pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"></div>${isMe?'':`<button class="iconbtn" data-a="more" data-id="${p.id}" aria-label="More options">${ic('more')}</button>`}</div>
      <div class="pv-ov"><div class="tx"><h2>${esc(nm)} ${vtick(p)}</h2><p>${p.age} · ${esc(p.job)}</p></div>${c?ring(c.total):''}</div></div>
    <div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
     ${isMe?`<div class="callout">${ic('eye')}<span>This is how other members see your profile once they can open it.</span></div>`:rootsLine(p)}
     ${!isMe&&S.interests[p.id]==='received'?`<div class="callout gold">${ic('heart')}<span>${esc(p.first)} sent you an interest. Accept to unlock photos and chat.</span></div>`:''}
     ${!isMe&&p.paused?`<div class="callout">${ic('eye')}<span>${esc(p.first)} has paused ${p.g==='F'?'her':'his'} profile for now.</span></div>`:''}
     ${!isMe?`<ul class="why">${whyChips(p).map(w=>`<li${w.r?' class="r"':''}>${esc(w.t)}</li>`).join('')}</ul>${trustBadges(p)}`:''}
     <div class="panel"><h3>About</h3><p class="notr">${esc(p.about)}</p></div>
     ${more}
     <div class="panel"><dl class="kv">${kv.map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>
     ${c?`<div class="panel"><h3>Why ${c.total}%</h3><div class="meter">${[['Values',c.values],['Lifestyle',c.life],['Preferences',c.pref],['Distance',c.loc],['Roots',c.roots]].map(([k,v])=>`<div class="m"><span>${k}</span><span class="t"><i style="width:${Math.round(v*100)}%"></i></span><b>${Math.round(v*100)}</b></div>`).join('')}</div></div>
     <div class="panel"><h3>Mindset, side by side</h3><div>${valsHtml}</div></div>`:''}
     <div class="panel"><h3>Trust</h3><div class="badges">${badges.map(b=>`<span class="pill good">${ic('check')}${b}</span>`).join('')||'<span class="pill">Not verified yet</span>'}</div></div>
    </div>
   </div>
   ${isMe?'':`<div class="pv-act pad">${actionBar(p)}</div>`}
  </div>`;
}
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
     ${rv&&rv.status==='pay_due'?`<div class="callout gold">${ic('ticket')}<span><b>The event is confirmed and your seat is held.</b> Payment opens in the app soon; we will message you. Total ${money(rv.amount,e.cur)}, dinner included.</span></div>`:
       rv?`<div class="callout">${ic('check')}<span><b>You’re reserved${rv.parents.length?` with ${rv.parents.length} ${rv.parents.length===1?'parent':'parents'}`:''}.</b> Nothing to pay until ${st.left} more people reserve. If the event isn’t confirmed by ${esc(fmtDay(st.deadline,e.tz).long)}, it is cancelled and nobody pays.</span></div>`:''}
     <div class="panel"><h3>${st.confirmed?'Confirmed':'How booking works'}</h3>
      <div class="seats"><span>${st.n} of ${e.need} people reserved${st.confirmed?'':` · needs ${st.left} more by ${esc(fmtDay(st.deadline,e.tz).long)}`}</span><span class="sb"><i style="width:${Math.min(100,Math.round(st.n/e.need*100))}%"></i></span></div>
      <ol class="hint" style="margin:0;padding-left:18px;display:grid;gap:4px"><li>Reserve a seat for free and choose your dish.</li><li>When ${e.need} people reserve, the event is confirmed.</li><li>You pay in the app. Dinner is included; nothing is paid at the restaurant.</li><li>Not confirmed in time? It is cancelled and nobody pays.</li></ol></div>
     ${e.includes.length?`<div class="panel"><h3>What’s included</h3><ul class="incl">${e.includes.map(x=>`<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul></div>`:''}
     ${e.agenda.length?`<div class="panel"><h3>How the evening goes</h3><ul class="tl">${e.agenda.map(([tm,x])=>`<li><time>${esc(tm)}</time><i></i><span>${esc(x)}</span></li>`).join('')}</ul></div>`:''}
     <div class="panel"><h3>Who you’ll meet</h3><p class="sub">ID-verified members ${esc(audLabel(e)==='All communities'?'from every community':audLabel(e).toLowerCase())}, ages ${e.age}. Your host seats you first with your best matches at the event.</p>
      <div class="seats"><span>Women: ${wl} of ${wc} seats left</span><span class="sb"><i style="width:${Math.round((wc-wl)/wc*100)}%"></i></span></div>
      <div class="seats"><span>Men: ${ml} of ${mc} seats left</span><span class="sb"><i style="width:${Math.round((mc-ml)/mc*100)}%"></i></span></div></div>
     <div class="panel"><h3>Tickets</h3>
      <div class="sumrow"><span>Member, dinner included</span><b>${money(e.priceM,e.cur)}</b></div>
      ${e.parents&&e.priceP?`<div class="sumrow"><span>Parent, dinner included (up to 2)</span><b>${money(e.priceP,e.cur)} each</b></div>`:`<p class="hint">Members only.</p>`}
      <p class="hint">Early price while the event is filling. The price goes up once it is confirmed, and again in the last 3 days. Men and women pay the same.</p></div>
     <div class="panel"><h3>Good to know</h3><ul class="incl">
      <li>${ic('shield')}<span>Every guest is ID-verified before the event.</span></li>
      <li>${ic('users')}<span>Conversations happen at separate tables in one shared room, never in a private room.</span></li>
      <li>${ic('pin')}<span>A partner restaurant in ${esc(e.area)}. The exact address is on your ticket after payment.</span></li>
      <li>${ic('refresh')}<span>Cancel your reservation any time before you pay.</span></li>
      <li>${ic('lock')}<span>Your picks stay private. Only mutual picks become matches.</span></li></ul></div>
    </div>
   </div>
   <div class="bookbar pad"><span class="tx"><b>${money(e.priceM,e.cur)}</b><small>${e.parents&&e.priceP?`+ ${money(e.priceP,e.cur)} per parent`:'per person'}</small></span>${
     rv?`<button class="btn ghost" data-a="cancelRes" data-id="${e.id}"${busy?' disabled':''}>Cancel reservation</button>`:
     !forMe(e)?`<button class="btn ghost" disabled>For ${esc((e.aud||{}).l||'members')} only</button>`:
     !ageOk(e)?`<button class="btn ghost" disabled>For ages ${e.age}</button>`:
     `<button class="btn primary" data-a="book" data-id="${e.id}"${canBook?'':' disabled'}>Reserve free seat</button>`}</div>
  </div>`;
}
function renderCelebrate(){
  const p=byId(celebrate.id);if(!p)return '';
  return `<div class="celebrate" role="dialog" aria-label="It’s a match">${hearts(14)}
   <div class="pair">${avatar(null,'cel',true)}${avatar(p,'cel')}<span class="hb">${ic('heart')}</span></div>
   <h2>It’s a match!</h2>
   <p>You and ${esc(p.first||'your match')} both said yes. Photos are unlocked${canChat(p.id)?' and chat is open':''}.</p>
   <div class="btns"><button class="btn white" data-a="celChat" data-id="${p.id}">${ic('chat')}Say hello${p.first?' to '+esc(p.first):''}</button><button class="btn clear" data-a="celClose">Keep looking</button></div></div>`;
}

/* ---------- Team review ---------- */
function renderAdmin(){
  const a=S.admin||{};const q=a.queue||[];const reps=a.reports||[];const c=a.counts;
  const item=x=>{const img=a.urls&&a.urls[x.bucket+':'+x.path];const prof=a.urls&&x.profile_photo&&a.urls['photos:'+x.profile_photo];
    const isPdf=/\.pdf$/i.test(x.path||'');
    return `<div class="panel adm" id="adm-${x.row_id}"><div class="adm-h"><b>${esc(x.kind==='photo'?'Profile photo':x.kind==='id'?'Government ID':'Live selfie')}</b><small>${esc(x.full_name)} · ${x.gender==='F'?'Woman':'Man'}, ${x.age} · ${esc(x.city)}, ${esc(x.country)}</small></div>
      <div class="adm-imgs">${img?(isPdf?`<a class="btn ghost sm" href="${esc(img)}" target="_blank" rel="noopener">Open PDF</a>`:`<img src="${esc(img)}" alt="${esc(x.kind)} of ${esc(x.full_name)}">`):`<span class="hint">Loading image…</span>`}${x.kind!=='photo'&&prof?`<img src="${esc(prof)}" alt="Profile photo of ${esc(x.full_name)}">`:''}</div>
      <p class="hint">${x.kind==='id'?'Name and date of birth must match the profile. Photo must match the selfie.':x.kind==='selfie'?'Must be a live photo of the same person as the ID and profile photos.':'A clear photo of the member’s own face. No group photos, children, nudity or text.'}</p>
      <div class="adm-act"><select data-adm-reason="${x.row_id}" aria-label="Reason if rejected"><option value="">Reason if rejected…</option>${(x.kind==='photo'?['Face not clear','Not a real photo of you','Group photo','Inappropriate photo']:['Image not readable','Does not match the profile','Not a valid ID','Not a live selfie']).map(r=>`<option>${r}</option>`).join('')}</select>
      <button class="btn ghost sm" data-a="admReject" data-id="${x.row_id}" data-k="${x.kind}">Reject</button><button class="btn primary sm" data-a="admApprove" data-id="${x.row_id}" data-k="${x.kind}">Approve</button></div></div>`};
  return `<div class="view" role="dialog" aria-label="Team review">
   <div class="vhead pad"><button class="iconbtn" data-a="closeView" aria-label="Back">${ic('back')}</button><div class="grow"><span><b>Team review</b><small>${c?`${c.members} member${c.members===1?'':'s'} · ${c.verified} verified · ${c.women} women, ${c.men} men · ${c.waitlist} on waitlist`:'Loading…'}</small></span></div><button class="iconbtn" data-a="openAdmin" aria-label="Refresh">${ic('refresh')}</button></div>
   <div class="scroll" id="view-scroll"><div class="pad" style="display:grid;gap:14px;padding-block:16px 26px">
    ${a.loading?`<div style="display:grid;place-items:center;padding:30px">${spinner('Loading')}</div>`:''}
    <div class="sec-h"><h2>To review (${q.length})</h2></div>
    ${q.length?q.map(item).join(''):a.loading?'':`<p class="hint">Nothing waiting. Well done.</p>`}
    <div class="sec-h"><h2>Reports (${reps.length})</h2></div>
    ${reps.length?reps.map(r=>`<div class="panel"><b>${esc(r.reported_name)}</b><p class="hint">${esc(r.reason)}${r.note?' · '+esc(r.note):''} · reported by ${esc(r.reporter_name)} · ${new Date(r.created_at).toLocaleString(RM_I18N.locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'})}</p><div class="adm-act"><button class="btn ghost sm" data-a="admDismiss" data-id="${r.id}">Dismiss</button><button class="btn danger sm" data-a="admBan" data-id="${r.id}">Ban member</button></div></div>`).join(''):`<p class="hint">No open reports.</p>`}
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
  if(t==='legal'){const L=LEGAL[sheet.k]||LEGAL.terms;return sheetShell(L[0],`<ul class="incl">${L[1].map(x=>`<li>${ic('check')}<span>${esc(x)}</span></li>`).join('')}</ul><p class="note">Summary only. <a class="link" href="${esc(CFG.site+(sheet.k==='privacy'?'privacy.html':'terms.html'))}" target="_blank" rel="noopener">Read the full ${sheet.k==='privacy'?'Privacy Policy':'Terms of Service'}</a>. Version of October 2026.</p>`,`<button class="btn primary block" data-a="closeSheet">Got it</button>`)}
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
     <div class="panel" style="padding:4px 16px">
      ${toggle('prefs.settled','Citizens and permanent residents only','Hide people on temporary visas or permits',pr.settled,'me')}
      ${toggle('prefs.verifiedOnly','ID-verified profiles only','We strongly recommend keeping this on',pr.verifiedOnly,'me')}
     </div>`,
     `<button class="btn ghost" data-a="resetFilters">Reset</button><button class="btn primary" data-a="closeSheet">${S.prefsSaving?spinner('Updating'):`Show ${n} ${n===1?'match':'matches'}`}</button>`);
  }
  if(t==='more'){const p=byId(sheet.id);
    return sheetShell(shown(p),`<div class="rows">
     ${sheet.chat?`<button class="rowi" data-a="engaged" data-id="${p.id}">${ic('heart')}<span class="tx"><b>${S.storyFor[p.id]?'Thank you for sharing':'We’re getting married!'}</b><span>Pause your profile and share your story</span></span></button>`:''}
     <button class="rowi" data-a="report" data-id="${p.id}">${ic('flag')}<span class="tx"><b>Report</b><span>Fake profile, money requests, rude messages</span></span></button>
     <button class="rowi" data-a="block" data-id="${p.id}">${ic('x')}<span class="tx"><b>Block</b><span>They will not see you or contact you again</span></span></button></div>`);}
  if(t==='report'){const p=byId(sheet.id);const reasons=['Fake profile or photos','Asked for money or gifts','Asked for visa or immigration help','Rude or inappropriate messages','Already married or in a relationship','Something else'];
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
    return sheetShell(head[0],`${prev}<p class="sub" style="color:var(--muted)">${esc(head[1])}</p>
     <div class="plans" role="radiogroup" aria-label="Gold plans">${opts.map(([k,l,tot,pm,tag])=>`<button class="plan pick${pick===k?' on':''}" data-a="pickPlan" data-k="${k}" role="radio" aria-checked="${pick===k}"><span class="ph"><b>${l}</b>${tag?`<span class="pill ${k==='m3'?'gold':'good'}">${tag}</span>`:''}</span><span class="price">${pm}<small> /month</small></span>${k==='m1'?'':`<small class="hint">${tot} billed every ${l}</small>`}</button>`).join('')}</div>
     <ul class="incl">${['Full profiles, names and photos','Send interests and chat','All 5 daily picks, and see who likes you','Browse privately'].map(x=>`<li>${ic('check')}<span>${x}</span></li>`).join('')}</ul>
     ${BETA?`<div class="callout gold">${ic('gift')}<span><b>Test version:</b> ${canBuy?'testers can switch on Gold for free to try everything, or buy it with Google Play.':'buying opens when NeuMarry launches. Until then, testers can switch on Gold for free to try everything.'}</span></div>`:''}
     <p class="note">Cancel anytime in your Google Play account. Safety features, verification and reporting are always free.</p>`,
     canBuy?`${BETA?busyBtn('ghost','betaGold','Try Gold free'):`<button class="btn ghost" data-a="closeSheet">Not now</button>`}${busyBtn('gold','buyGold',ic('crown')+'Get Gold')}`:
     `<button class="btn ghost" data-a="closeSheet">Not now</button>${BETA?busyBtn('gold','betaGold',ic('crown')+'Try Gold free'):`<button class="btn gold" data-a="buySoon">${ic('crown')}Get Gold</button>`}`);}
  if(t==='verifyGate')return sheetShell('Verify to continue',`<div class="callout">${ic('shield')}<span>${(me.idCheck&&me.idCheck.status==='pending')||(me.selfieCheck&&me.selfieCheck.status==='pending')?'Your ID and selfie are with our team. Once they are approved, usually within 24 hours, you can send interests, chat and book events.':'To keep fake profiles out, only members with an approved ID and selfie can send interests, chat and book events. It takes about two minutes.'}</span></div>`,`<button class="btn ghost" data-a="closeSheet">Not now</button>${(me.idCheck&&me.idCheck.status==='pending')||(me.selfieCheck&&me.selfieCheck.status==='pending')?'':`<button class="btn primary" data-a="goVerify">Verify now</button>`}`);
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
     <p class="note">Nothing is charged now. When the event is confirmed you pay in the app; dinner is included and nothing is paid at the restaurant. Prices before tax.</p>`,
     `<button class="btn ghost" data-a="closeSheet">Cancel</button>${busyBtn('primary','reserve','Reserve free')}`);}
  if(t==='cancelRes'){const e=evById(sheet.id);return sheetShell('Cancel your reservation?',`<p>Your seat at the ${esc(e.title)} goes back to other members. Nothing was charged.</p>`,`<button class="btn ghost" data-a="closeSheet">Keep my seat</button>${busyBtn('danger','cancelDo','Cancel reservation',` data-id="${e.id}"`)}`);}
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
    if(view)html+=view.type==='chat'?renderChatView(view.id):view.type==='event'?renderEventView(view.id):view.type==='admin'?renderAdmin():renderProfileView(view.id,view.type==='me');
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
  Object.keys(keep).forEach(id=>{const el=document.getElementById(id);if(el)el.scrollTop=keep[id]});
  const pk1=document.querySelector('.picks');if(pk1)pk1.scrollLeft=picksLeft;
  const tabOn=app.querySelector('.steps-nav button.on');if(tabOn){const nv=tabOn.parentNode;nv.scrollLeft=tabOn.offsetLeft-nv.offsetLeft-nv.clientWidth/2+tabOn.offsetWidth/2}
  const ci=document.getElementById('chat-in');if(ci&&chatVal)ci.value=chatVal;
  const cs=document.getElementById('chat-scroll');if(cs&&(newChat||chatAtEnd))cs.scrollTop=cs.scrollHeight;
  if(aeId){const el=document.getElementById(aeId);if(el&&el!==document.activeElement&&/^(INPUT|TEXTAREA|BUTTON|SELECT)$/.test(el.tagName))try{el.focus({preventScroll:true})}catch(e){}}
}
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
  origin_country:pr.oc,origin_state:pr.os,religion:pr.religion,community:pr.community,also_communities:pr.alsoComm||[],tongue:pr.tongue,diet:pr.diet,settled_only:!!pr.settled,verified_only:!!pr.verifiedOnly}}
function saveConsent(a){try{localStorage.setItem('rm.consent',JSON.stringify({mkt:!!a.mkt,at:new Date().toISOString()}))}catch(e){}}
function readConsent(){try{return JSON.parse(localStorage.getItem('rm.consent')||'{}')||{}}catch(e){return {}}}
async function sha256(blob){try{const buf=await blob.arrayBuffer();const h=await crypto.subtle.digest('SHA-256',buf);return Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')}catch(e){return null}}
async function uploadPhoto(blob){const uid=API.userId();const path=`${uid}/${uuid()}.jpg`;const sum=await sha256(blob);
  if(sum){const dup=(S.me&&S.me.photos||[]).find(x=>x.sha===sum);if(dup)return}
  await API.upload('photos',path,blob);
  try{await API.insert('photos',{user_id:uid,path,position:0,sha256:sum},{returning:false})}
  catch(e){try{await API.removeFile('photos',path)}catch(x){}if(e.status===409||/23505|duplicate/.test(e.code||''))throw new API.ApiError('dup_photo','This photo is already used on another NeuMarry account. Choose a different photo.');throw e}
  // The new photo replaces the old ones.
  const old=(S.me&&S.me.photos||[]).filter(x=>x.path!==path);
  for(const o of old){try{await API.remove('photos',{id:'eq.'+o.id});await API.removeFile('photos',o.path)}catch(x){}}
}
async function uploadCheck(kind,blob,name){const uid=API.userId();const ext=kind==='id'&&/pdf$/i.test(blob.type||name||'')?'pdf':'jpg';const path=`${uid}/${kind}-${uuid()}.${ext}`;
  await API.upload('verification',path,blob);
  await API.insert('verifications',{user_id:uid,kind,path,id_type:kind==='id'?(name||'').slice(0,60):null},{returning:false});
}
async function uploadAll(d){const errs=[];
  if(d.photoBlob){S.saveMsg='Uploading your photo';render();try{await uploadPhoto(d.photoBlob);d.photoBlob=null}catch(e){errs.push(e.message)}}
  if(d.idBlob){S.saveMsg='Sending your ID';render();try{await uploadCheck('id',d.idBlob,d.idName);d.idBlob=null}catch(e){errs.push('Your ID did not upload. '+e.message)}}
  if(d.selfieBlob){S.saveMsg='Sending your selfie';render();try{await uploadCheck('selfie',d.selfieBlob,'selfie');d.selfieBlob=null}catch(e){errs.push('Your selfie did not upload. '+e.message)}}
  return errs}
let prefsT=null;
function queuePrefsSave(){clearTimeout(prefsT);S.prefsSaving=true;prefsT=setTimeout(async()=>{try{await API.insert('preferences',prefsRow(S.me.prefs,S.me.id),{upsert:true,returning:false});await loadCards()}catch(e){fail(e)}S.prefsSaving=false;render()},500)}
async function savePrivacy(){const me=S.me;try{await API.update('profiles',{id:'eq.'+me.id},{blur_photos:!!me.privacy.blur,show_community:!!me.privacy.showC,incognito:!!me.privacy.incognito,hidden:me.privacy.vis==='hidden'})}catch(e){fail(e);await loadMe();render()}}

/* ---------- Flow helpers ---------- */
function needVerified(){if(!verified()){sheet={type:'verifyGate'};render();return true}return false}
function startSignup(){if(!readConsent().at){S.auth={mode:'consent'};S.errors={};S.screen='auth';render();return}const saved=loadDraft();S.draft=saved?Object.assign(blankDraft(),saved.d,{photo:null,photoBlob:null,idBlob:null,selfieBlob:null,selfie:null,idName:''}):blankDraft();
  S.step=saved?Math.min(saved.step||1,6):1;S.editMode=false;S.errors={};S.screen='signup';render()}
function openEdit(step){const me=S.me;const d=clone(Object.assign({},me,{photo:me.photo}));d.phone=me.phone?digitsOnly(me.phone).replace(new RegExp('^'+digitsOnly(dial(me.country))),''):'';
  d.photoBlob=null;d.idBlob=null;d.selfieBlob=null;d.selfie=null;d.idName='';
  S.draft=d;S.editMode=true;S.step=step||1;S.errors={};view=null;sheet=null;picker=null;S.screen='signup';render();const sc=document.getElementById('su-scroll');if(sc)sc.scrollTop=0}
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
  try{
    const me=await loadMe();
    if(!me){startSignup();return}
    if(me.banned){await API.signOut();S=fresh();S.screen='welcome';render();toast('This account has been suspended. Write to us if you think this is a mistake.','shield');return}
    S.screen='app';if(!['matches','events','connections','me'].includes(S.tab))S.tab='matches';render();
    await loadAll();render();loadInvite();restorePurchases(false);
    API.rpc('touch_seen').catch(()=>{});
  }catch(e){
    if(e.code==='signed_out'){S=fresh();S.screen='welcome';render();return}
    S.screen='boot';S.bootError=e.code==='network'?'No internet connection. Check your connection and try again.':'NeuMarry could not load. Please try again.';render();
  }
}
async function signedOut(msg){view=null;sheet=null;picker=null;celebrate=null;PROFILES=[];lastMsg=0;Object.keys(URLS).forEach(k=>delete URLS[k]);S=fresh();S.screen='welcome';render();if(msg)toast(msg,'info')}
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
  suBack(){if(S.editMode){if(S.step>1)goStep(S.step-1);else A.suCancel();return}if(S.step>1)goStep(S.step-1);else{sheet={type:'logout'};render()}},
  suJump(el){goStep(+el.dataset.n)},
  async suNext(){const e=validateStep(S.step,S.draft);S.errors=e;if(Object.keys(e).length){showErrors();return}
    if(S.step===1&&!S.draft.photo){S.errors={photo:'Add a clear photo of your face. It stays hidden until you both accept.'};showErrors();return}
    if(S.step<6){goStep(S.step+1);return}
    if(busy)return;busy='save';S.saveMsg='Saving your profile';render();
    const d=S.draft,uid=API.userId();
    try{
      await API.insert('profiles',Object.assign({id:uid},profileRow(d)),{upsert:true,returning:false});
      await API.insert('preferences',prefsRow(d.prefs||defaultPrefs(d),uid),{upsert:true,returning:false});
    }catch(err){busy='';render();fail(err);return}
    const errs=await uploadAll(d);
    try{await loadMe()}catch(err){}
    busy='';S.saveMsg='';clearDraft();S.draft=null;S.screen='app';S.tab='matches';S.errors={};render();
    try{await loadAll()}catch(err){}
    render();
    if(errs.length){toast(errs[0],'info')}else toast(S.me&&S.me.idCheck&&S.me.selfieCheck?'Your profile is saved. Our team checks your photo, ID and selfie within 24 hours.':'Your profile is saved. Upload your ID and selfie from Me to start sending interests.','heart')},
  async suSave(){if(busy)return;for(let s=1;s<=6;s++){const e=validateStep(s,S.draft);if(Object.keys(e).length){S.errors=e;S.step=s;showErrors();toast('Fix the highlighted fields first.','info');return}}
    busy='save';render();const d=S.draft;
    try{const row=profileRow(d);delete row.terms_version;delete row.terms_at;delete row.marketing_ok;
      await API.update('profiles',{id:'eq.'+S.me.id},row);
      await API.insert('preferences',prefsRow(d.prefs,S.me.id),{upsert:true,returning:false});
    }catch(err){busy='';render();fail(err);return}
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
    catch(e){S.chats[id]=S.chats[id].filter(m=>m!==tmp);render();const c2=document.getElementById('chat-in');if(c2&&!c2.value)c2.value=x;fail(e)}},
  celChat(el){const id=el.dataset.id;celebrate=null;S.tab='connections';S.seg='chats';save();A.openchat({dataset:{id}})},
  celClose(){celebrate=null;render()},
  openEvent(el){view={type:'event',id:el.dataset.id};render();const v=document.getElementById('view-scroll');if(v)v.scrollTop=0},
  book(el){if(needVerified())return;const id=el.dataset.id,e=evById(id);const dm={Vegetarian:'veg',Vegan:'veg',Eggetarian:'veg','Jain vegetarian':'jain','Non-vegetarian':'nonveg'}[S.me.diet]||'';
    sheet={type:'book',id,parents:0,meal:e.meals.includes(dm)?dm:'',p:[{name:'',rel:'Mother',meal:''},{name:'',rel:'Father',meal:''}]};S.errors={};render()},
  bookPlus(){if(sheet.parents<2)sheet.parents++;render()},
  bookMinus(){if(sheet.parents>0){sheet.parents--;delete S.errors['p'+sheet.parents+'name'];delete S.errors['p'+sheet.parents+'meal']}render()},
  async reserve(){const e=evById(sheet.id),n=sheet.parents;const err={};if(!sheet.meal)err.meal='Choose your dish';
    for(let i=0;i<n;i++){if((sheet.p[i].name||'').trim().length<2)err['p'+i+'name']='Add a name for the guest list';if(!sheet.p[i].meal)err['p'+i+'meal']='Choose a dish'}
    if(Object.keys(err).length){S.errors=err;render();const f=document.querySelector('.sheet .has-err');if(f)f.scrollIntoView({block:'center'});return}
    busy='reserve';render();
    try{const r=await API.rpc('reserve_event',{eid:e.id,meal:sheet.meal,parents:sheet.p.slice(0,n).map(x=>({name:x.name.trim(),relation:x.rel,meal:x.meal}))});
      busy='';S.errors={};sheet=null;await loadEvents();render();
      toast(r&&r.confirmed?`The ${e.title} is confirmed! Your seat is held; we will message you when payment opens.`:`Seat reserved free. We’ll ask for payment once the event is confirmed.`,'check')}
    catch(x){busy='';render();fail(x)}},
  cancelRes(el){sheet={type:'cancelRes',id:el.dataset.id};render()},
  async cancelDo(el){busy='cancelDo';render();try{await API.rpc('cancel_reservation',{eid:el.dataset.id});busy='';sheet=null;await loadEvents();render();toast('Reservation cancelled. Nothing was charged.','check')}catch(e){busy='';render();fail(e)}},
  engaged(el){if(S.storyFor[el.dataset.id]){sheet=null;render();return}sheet={type:'engaged',id:el.dataset.id,pause:true,pub:false,text:''};render()},
  async storySend(el){const id=el.dataset.id;busy='storySend';render();
    try{await API.insert('stories',{user_id:S.me.id,partner:id,body:(sheet.text||'').trim()||null,may_publish:!!sheet.pub},{returning:false});
      if(sheet.pause!==false){S.me.privacy.vis='hidden';await savePrivacy()}S.storyFor[id]=true;save();busy='';sheet=null;render();toast('Congratulations to you both!','heart')}
    catch(e){busy='';render();fail(e)}},
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
    const reasons=['Fake profile or photos','Asked for money or gifts','Asked for visa or immigration help','Rude or inappropriate messages','Already married or in a relationship','Something else'];
    busy='submitReport';render();
    try{await API.insert('reports',{reporter:S.me.id,reported:id,reason:reasons[sheet.reason],note:(sheet.note||'').trim()||null},{returning:false});
      try{await API.insert('blocks',{blocker:S.me.id,blocked:id},{returning:false})}catch(e){}
      S.reported.push(id);S.blocked.push(id);save();busy='';S.errors={};sheet=null;view=null;render();toast('Report sent. Our safety team reviews every report within 24 hours. You will not see this person again.','shield')}
    catch(e){busy='';render();fail(e)}},
  async block(el){const id=el.dataset.id;const p=byId(id);try{await API.insert('blocks',{blocker:S.me.id,blocked:id},{returning:false});S.blocked.push(id);sheet=null;view=null;render();toast(`${p&&p.first?p.first:'They'} ${p&&p.first?'is':'are'} blocked.`,'x')}catch(e){fail(e)}},
  closeSheet(){sheet=null;S.errors={};render()},
  goVerify(){sheet=null;if(S.screen==='signup')return;openEdit(5)},
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
  openAdmin(){view={type:'admin'};S.admin={loading:true,queue:[],reports:[],urls:{}};render();loadAdmin()},
  async admApprove(el){await adminReview(el,true)},
  async admReject(el){const sel=document.querySelector(`[data-adm-reason="${el.dataset.id}"]`);const reason=sel&&sel.value;if(!reason){toast('Choose a reason first, so the member knows what to fix.','info');if(sel)sel.focus();return}await adminReview(el,false,reason)},
  async admBan(el){try{await API.rpc('admin_handle_report',{rid:el.dataset.id,ban:true});S.admin.reports=S.admin.reports.filter(r=>r.id!==el.dataset.id);render();toast('Member banned.','shield')}catch(e){fail(e)}},
  async admDismiss(el){try{await API.rpc('admin_handle_report',{rid:el.dataset.id,ban:false});S.admin.reports=S.admin.reports.filter(r=>r.id!==el.dataset.id);render();toast('Report dismissed.','check')}catch(e){fail(e)}}
};
async function adminReview(el,ok,reason){const id=el.dataset.id,k=el.dataset.k;
  try{await API.rpc('admin_review',{row_kind:k==='photo'?'photo':'verification',rid:id,approve:ok,reason:reason||null});S.admin.queue=S.admin.queue.filter(x=>x.row_id!==id);if(S.admin.counts)S.admin.counts.pending--;render();toast(ok?'Approved.':'Rejected. The member sees the reason.',ok?'check':'x')}catch(e){fail(e)}}
async function loadAdmin(){
  try{const [q,r,c,ap]=await Promise.all([API.rpc('admin_queue'),API.rpc('admin_reports'),API.rpc('admin_counts'),API.rpc('admin_applications').catch(()=>[])]);
    const queue=(q||[]).map(x=>Object.assign(x,{bucket:x.kind==='photo'?'photos':'verification'}));
    S.admin={loading:false,queue,reports:r||[],counts:c,apps:ap||[],urls:{}};render();
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
app.addEventListener('input',onBind);
app.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.file){const f=el.files&&el.files[0];if(!f||!S.draft)return;const d=S.draft,kind=el.dataset.file;el.value='';
    if(f.size>15*1024*1024){toast('That file is over 15 MB. Try a smaller one.','info');return}
    if(kind==='id'&&/pdf$/i.test(f.type||f.name)){d.idBlob=f;d.idName=f.name||'ID.pdf';render();toast('ID ready. It is sent when you save.','check');return}
    if(!/^image\//.test(f.type)){toast('Please choose a photo (JPG or PNG).','info');return}
    const r=new FileReader();r.onload=()=>{shrink(r.result,kind==='id'?1800:kind==='photo'?1280:900,(url,blob)=>{if(!S.draft)return;
      if(kind==='photo'){d.photo=url;d.photoBlob=blob;delete S.errors.photo}else if(kind==='selfie'){d.selfie=url;d.selfieBlob=blob}else{d.idBlob=blob;d.idName=f.name||'ID photo'}
      render();if(kind==='selfie')toast('Selfie ready. It is sent when you save.','check');if(kind==='id')toast('ID ready. It is sent when you save.','check')})};
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
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&S.screen==='app'){tick=9;poll()}});

/* ---------- Boot ---------- */
async function boot(){
  S.screen='boot';S.bootError='';render();console.info('[boot] start',isNative?'native':'web');
  if(location.hash&&/access_token|error_description/.test(location.hash)){const h=location.href;history.replaceState(null,'',location.pathname+location.search);if(await handleAuthUrl(h))return}
  /* A cold start from the sign-in return link: handle it in the background, never hold up the first screen. */
  if(isNative&&Plug().App){try{Promise.resolve(Plug().App.getLaunchUrl()).then(l=>{if(l&&l.url&&l.url.startsWith(CFG.redirect))handleAuthUrl(l.url)}).catch(()=>{})}catch(e){}}
  console.info('[boot] session',!!API.session());
  if(!API.session()){S.screen='welcome';render();console.info('[boot] welcome shown');return}
  await afterLogin();
  console.info('[boot] signed in, screen',S.screen);
}
window.addEventListener('error',e=>console.error('[js error]',e.message,e.filename,e.lineno));
window.addEventListener('unhandledrejection',e=>console.error('[js rejection]',e.reason&&(e.reason.stack||e.reason.message||e.reason)));
if(isNative&&Plug().App){
  Plug().App.addListener('appUrlOpen',ev=>{if(ev&&ev.url&&ev.url.startsWith(CFG.redirect))handleAuthUrl(ev.url)});
  Plug().App.addListener('backButton',()=>{if(!goBack())Plug().App.exitApp()});
  Plug().App.addListener('resume',()=>{if(S.screen==='app'){tick=9;poll()}});
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
window.__rm={get S(){return S},get PROFILES(){return PROFILES},A,render,boot,goBack}; /* used by automated tests */
boot();
})();
