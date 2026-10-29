(()=>{
const supported=['en','zh-Hans','zh-Hant'];
const normalize=v=>{v=(v||'').toLowerCase();if(v.startsWith('zh'))return v.includes('hant')||v.includes('tw')||v.includes('hk')||v.includes('mo')?'zh-Hant':'zh-Hans';return 'en'};
const show=()=>{const lang=supported.includes(location.hash.slice(1))?location.hash.slice(1):normalize(navigator.language);document.documentElement.lang=lang;document.querySelectorAll('.locale').forEach(x=>x.classList.toggle('active',x.dataset.lang===lang));document.querySelectorAll('.languages a').forEach(x=>x.setAttribute('aria-current',x.hash==='#'+lang?'true':'false'))};
addEventListener('hashchange',show);show();
})();
