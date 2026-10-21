const toggle = document.querySelector('.theme-toggle');
if (toggle) toggle.addEventListener('click', () => { document.body.classList.toggle('dark-mode'); toggle.textContent = document.body.classList.contains('dark-mode') ? '☾' : '☼'; });
const translations = {
  'nav.research':'研究方向','nav.publications':'论文成果','nav.about':'关于我','nav.contact':'联系我',
  'hero.eyebrow':'硕博连读生 · 合肥工业大学','hero.title':'让视觉智能<br><em>更值得信赖。</em>','hero.lede':'我关注多模态系统如何感知、记忆并理解视觉信息，致力于为动态环境构建高效、可靠的智能系统。','hero.cta':'探索研究','hero.mail':'联系我','hero.caption':'证据、记忆与推理。',
  'ticker.one':'多模态智能','ticker.two':'流式视频理解','ticker.three':'视觉记忆','ticker.four':'多模态安全',
  'research.eyebrow':'01 / 研究兴趣','research.title':'我正在<br><em>探索的问题。</em>','research.intro':'以下内容是研究兴趣与近期阅读探索，并不等同于已经建立的研究专长。它们描述了我正在关注、思考并希望进一步研究的问题。',
  'interest.one.title':'多模态推理','interest.one.body':'视觉证据如何在推理过程中被重新访问、选择和利用，而不是只作为一次性输入？','interest.two.title':'流式视频与记忆','interest.two.body':'面向动态环境的在线感知、视觉 Token 压缩、KV Cache 管理，以及长期视觉记忆。','interest.three.title':'智能体与自蒸馏','interest.three.body':'主动观察、事件驱动的记忆更新、On-Policy Self-Distillation，以及超越 Benchmark 的稳定推理。','interest.four.title':'多模态安全','interest.four.body':'我已经形成正式论文成果的方向是内容安全与图像取证，包括对生成和篡改媒体的可靠分析。','interest.four.tag':'正式成果',
  'pub.eyebrow':'02 / 论文成果','pub.title':'正式<br><em>研究成果。</em>','pub.intro':'目前的正式论文成果聚焦于图像伪造检测与定位。页面中的其他方向以研究兴趣和持续探索的方式呈现。','pub.code':'查看项目代码','pub.note':'我们研究视觉语言模型的语义先验何时有帮助，以及何时反而会损害图像伪造检测与定位。',
  'about.eyebrow':'03 / 关于我','about.title':'构建能够<br><em>持续观察的系统。</em>','about.body':'我目前是合肥工业大学计算机科学与技术专业的硕博连读生，现阶段导师是崔洁全教授，硕士阶段曾在洪日昌教授指导下学习与研究。我更广泛地关注多模态智能：如何高效感知变化中的环境、保留有价值的视觉证据，并在较长时间尺度上可靠地进行推理。','edu.phd':'博士 · 计算机科学与技术','edu.ms':'硕士 · 计算机科学与技术','edu.bs':'工学学士 · 智能科学与技术','about.advisors':'导师',
  'contact.eyebrow':'04 / 联系我','contact.title':'一起讨论<br><em>下一个问题。</em>','contact.body':'欢迎交流多模态智能、视觉推理、内容安全，以及潜在的研究合作。','footer':'为好奇心而作 · 合肥 / 中国'
};
let lang='en';
const button=document.querySelector('.lang-toggle');
function setLanguage(next){lang=next;document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(lang==='zh'&&translations[key]) el.innerHTML=translations[key];else el.innerHTML=el.dataset.en||el.innerHTML;});document.querySelectorAll('[data-i18n]').forEach(el=>{if(!el.dataset.en)el.dataset.en=el.innerHTML;});document.querySelector('.lang-toggle').innerHTML=lang==='zh'?'<span class="active">中</span><b>/</b><span>EN</span>':'<span>中</span><b>/</b><span class="active">EN</span>';}
// Capture original English before the first language switch.
document.querySelectorAll('[data-i18n]').forEach(el=>el.dataset.en=el.innerHTML);
if (button) button.addEventListener('click',()=>setLanguage(lang==='en'?'zh':'en'));
