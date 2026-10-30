(()=>{
const supported=['en','zh-Hans','zh-Hant','ja','ko','fr','de','es','ru','it'];
// The browser's language picks the section: Chinese by script or region, others by their main code.
const normalize=v=>{v=(v||'').toLowerCase();if(v.startsWith('zh'))return /hant|tw|hk|mo/.test(v)?'zh-Hant':'zh-Hans';const base=v.split('-')[0];return supported.includes(base)?base:'en'};
const pick=()=>{for(const l of navigator.languages||[navigator.language]){const n=normalize(l);if(n!=='en'||l.toLowerCase().startsWith('en'))return n}return 'en'};
const show=()=>{const lang=supported.includes(location.hash.slice(1))?location.hash.slice(1):pick();document.documentElement.lang=lang;document.querySelectorAll('.locale').forEach(x=>x.classList.toggle('active',x.dataset.lang===lang));document.querySelectorAll('.languages a').forEach(x=>x.setAttribute('aria-current',x.hash==='#'+lang?'true':'false'))};
addEventListener('hashchange',show);show();
})();
