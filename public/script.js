const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{nav.classList.toggle('active');menuBtn.textContent=nav.classList.contains('active')?'✕':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('active');menuBtn.textContent='☰';}));}
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.12});
document.querySelectorAll('.project-card,.feature,.skill-chip,.contact-info,.social-panel,.community-inner,.post,.composer').forEach(el=>{el.classList.add('reveal');revealObserver.observe(el);});
