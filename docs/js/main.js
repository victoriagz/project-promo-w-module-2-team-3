const N=document.querySelector(".js-arrow-up-design"),V=document.querySelector(".js-arrow-up-form"),D=document.querySelector(".js-arrow-up-share"),O=document.querySelector(".js-text-design"),$=document.querySelector(".js-text-form"),z=document.querySelector(".js-text-share"),v=document.querySelector(".js-color-container"),h=document.querySelector(".js-form"),S=document.querySelector(".js-share");document.querySelector(".js_drop_down");const k=document.querySelector(".js_button_create_card");document.querySelector(".color__container--group");const T=document.querySelector(".js-name"),M=document.querySelector(".js-job"),J=document.querySelector(".js-email-2"),W=document.querySelector(".js-phone"),G=document.querySelector(".js-linkedin-2"),Y=document.querySelector(".js-github-2"),K=document.querySelector(".js-image"),m=document.querySelectorAll(".js-required"),r=document.querySelector(".js-field-required-message");function R(){console.log("successful deploy");const e=m[0],o=e.value,t=m[1],p=t.value,n=m[2],L=n.value,c=m[3],y=parseInt(c.value),l=m[4],U=l.value,b=m[5],A=b.value;if(o===""){r.innerHTML="Por favor, rellena los campos que faltan*",e.style.border="1px solid #ad6868",e.focus();return}if(e.style.border="1px solid #a2deaf",p===""){r.innerHTML="Por favor, rellena los campos que faltan*",t.style.border="1px solid #ad6868",t.focus();return}if(t.style.border="1px solid #a2deaf",emailFieldValuedValue===""){r.innerHTML="Por favor, introduce un email válido*",n.style.border="1px solid #ad6868",n.focus();return}if(n.style.border="1px solid #a2deaf",!L.includes("@")){r.innerHTML="Por favor, introduce un email válido*",n.style.border="1px solid #ad6868",n.focus();return}if(n.style.border="1px solid #a2deaf",y===""){r.innerHTML="Por favor, introduce un teléfono válido*",phoneFieldField.style.border="1px solid #ad6868",c.focus();return}if(c.style.border="1px solid #a2deaf",isNaN(y)){r.innerHTML="Por favor, introduce un teléfono válido*",c.style.border="1px solid #ad6868",c.focus();return}if(c.style.border="1px solid #a2deaf",U===""){r.innerHTML="Por favor, rellena los campos que faltan*",l.style.border="1px solid #ad6868",l.focus();return}if(l.style.border="1px solid #a2deaf",A===""){r.innerHTML="Por favor, rellena los campos que faltan*",b.style.border="1px solid #ad6868",b.focus();return}b.style.border="1px solid #a2deaf",console.log("todos los campos rellenos"),r.innerHTML="",f(S)}function Q(e){e!==v&&v.classList.add("collapsed"),e!==h&&h.classList.add("collapsed"),e!==S&&S.classList.add("collapsed")}function f(e){Q(e),e.classList.toggle("collapsed")}const X=e=>{const o=document.querySelector(".js_drop_down");e.preventDefault(),o.classList.contains("collapsed")&&(o.classList.remove("collapsed"),k.style.backgroundColor="#d5d5d5",k.style.pointerEvents="none")};k.addEventListener("click",X);O.addEventListener("click",()=>f(v));$.addEventListener("click",()=>f(h));z.addEventListener("click",()=>R());N.addEventListener("click",()=>f(v));V.addEventListener("click",()=>f(h));D.addEventListener("click",()=>R());const j={color1:"#114e4e",color2:"#a2deaf",color3:"#438792"},E={color1:"#4B0101",color2:"#FF6347",color3:"#8B3A3A"},I={color1:"#708090",color2:"#fe994a",color3:"#B7C9E2"},w={color1:"#ffc8dd",color2:"#ffafcc",color3:"#bde0fe"},C={color1:"#4a8fe7",color2:"#59d2fe",color3:"#44e5e7"},B={color1:"#370075",color2:"#620097",color3:"#e2dada"};let s=document.querySelector(".js-image");const Z=document.querySelector(".js-button1"),ee=document.querySelector(".js-button2"),te=document.querySelector(".js-button3"),oe=document.querySelector(".js-button4"),ne=document.querySelector(".js-button5"),re=document.querySelector(".js-button6"),d=document.querySelector(".js-card_section");let i=1;const ce=document.querySelector(".js_preview_title"),le=document.querySelector(".js_border_card"),x=document.querySelectorAll(".js_circle_card");document.querySelector(".js-container-title-1");document.querySelector(".js-container-title-2");document.querySelector(".js-container-title-3");document.querySelector(".js-container-title-4");document.querySelector(".js-container-title-5");document.querySelector(".js-container-title-6");const _=document.querySelectorAll(".js-title-grey");function a(e){ce.style.color=e.color1,le.style.borderColor=e.color2;for(let o=0;o<x.length;o++)x[o].style.borderColor=e.color3}function u(e,o){for(let t=0;t<_.length;t++)t===e?_[t].style.color=o.color2:_[t].style.color="#54585a"}function se(){a(j),u(0,j),s.src="./images/dog-doctor.png",d.style.backgroundImage='url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")',i=1}function de(){a(E),u(1,E),s.src="./images/cat-professor.png",d.style.backgroundImage='url("https://i.pinimg.com/736x/fe/72/94/fe72948b42367756ae7ba55227d48506.jpg")',i=2}function ie(){a(I),u(2,I),s.src="./images/dog-jalapenio.png",d.style.backgroundImage='url("https://www.gaulan.es/885327-large_default/veneto-marble-680935.jpg")',i=3}function ae(){a(w),u(3,w),s.src="./images/cat-firefighter.png",d.style.backgroundImage='url("https://media.istockphoto.com/id/1459266752/es/foto/fondo-de-textura-de-m%C3%A1rmol-rosa-con-alta-resoluci%C3%B3n-en-patr%C3%B3n-sin-costuras-para-el-dise%C3%B1o-de.webp?b=1&s=170667a&w=0&k=20&c=Vv_-7xnMB2kcO5WwqxNihCUd3b0q7T2cuvS08gp1LnY=")',i=4}function ue(){a(C),u(4,C),s.src="./images/dog-chef.png",d.style.backgroundImage='url("https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/55714.png")',i=5}function me(){a(B),u(5,B),s.src="./images/cat-astronaut.png",d.style.backgroundImage='url("https://dbdzm869oupei.cloudfront.net/img/sticker/preview/38357.png")',i=6}Z.addEventListener("click",()=>se());ee.addEventListener("click",()=>de());te.addEventListener("click",()=>ie());oe.addEventListener("click",()=>ae());ne.addEventListener("click",()=>ue());re.addEventListener("click",()=>me());const pe=document.querySelector(".js-reset-palette");function ge(){P(),s.src="./images/dog-doctor.png",d.style.backgroundImage='url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")',document.getElementById("colorScheme1").checked=!0}pe.addEventListener("click",ge);const fe=document.querySelector(".js-button_pic");let ye=()=>{s.src=""};fe.addEventListener("click",ye);const be=document.querySelector(".js_preview_title"),ve=document.querySelector(".js_preview_job");T.addEventListener("input",e=>{be.innerHTML=e.target.value});M.addEventListener("input",e=>{ve.innerHTML=e.target.value});const q=new FileReader,he=document.querySelector(".js__profile-upload-btn"),g=document.querySelector(".js-image"),H=document.querySelector(".js__profile-preview");function je(e){const o=e.currentTarget.files[0];q.addEventListener("load",qe),q.readAsDataURL(o)}function qe(){g.src=`${q.result}`,g.objectFit="cover",g.style.width="100%",g.style.height="100%",console.log(g),H.style.backgroundImage=`url(${q.result})`}he.addEventListener("change",je);function Le(){const e=document.querySelector(".js-email"),o=document.getElementById("social__email__id");e.addEventListener("input",function(){o.href="mailto:"+e.value});const t=document.querySelector(".js-phone"),p=document.getElementById("social__mobile__id");t.addEventListener("input",function(){p.href="tel:"+t.value});const n=document.querySelector(".js-linkedin"),L=document.getElementById("social__linkedin__id");n.addEventListener("input",function(){const l="https://www.linkedin.com/in/";L.href=l+n.value});const c=document.querySelector(".js-github"),y=document.getElementById("social__github__id");c.addEventListener("input",function(){const l="https://www.github.com/";y.href=l+c.value})}document.addEventListener("DOMContentLoaded",Le);const _e=document.querySelector(".js-reset-button"),Se=()=>{document.getElementById("card__title__id").innerHTML="Nombre Apellido",document.getElementById("card__job__id").innerHTML="Front-end developer",document.getElementById("social__email__id").href="#",document.getElementById("social__mobile__id").href="tel:#",document.getElementById("social__linkedin__id").href="#",document.getElementById("social__github__id").href="#"},ke=()=>{document.getElementById("name").value="",document.getElementById("job").value="",document.getElementById("image").style.src="",document.getElementById("email").value="",document.getElementById("phone").value="",document.getElementById("linkedin").value="",document.getElementById("github").value=""},P=()=>{H.style.backgroundImage="none"},F=document.querySelectorAll(".js-required");for(let e=0;e<F.length;e++)F[e].style.border="none";const Ee=()=>{Se(),ke(),P(),a(j),u(0,j);const e=document.querySelectorAll(".js-required");for(let o=0;o<e.length;o++)e[o].style.border="none",r.innerHTML=""};_e.addEventListener("click",Ee);function Ie(e){e.preventDefault();const o={palette:i,name:T.value,job:M.value,email:J.value,phone:W.value,linkedin:G.value,github:Y.value,photo:K.src};fetch("https://dev.adalab.es/api/card/",{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json"}}).then(t=>t.json()).then(t=>{we(t),Ce(t)}).catch(t=>console.log(t))}function we(e){const o=document.querySelector(".message_after"),t=document.querySelector(".js-card-link");e.success?(o.classList.remove("collapsed"),t.classList.remove("collapsed"),t.setAttribute("href",e.cardURL),t.innerHTML=e.cardURL):t.innerHTML="ERROR: "+e.error}function Ce(e){if(e.success){const o=document.querySelector(".js-twitter-share-button");let p=`https://twitter.com/intent/tweet?text=Mira qué tarjeta más bonita ❤️&hashtags=PromoW,Adalab&url=${encodeURIComponent(e.cardURL)}`;o.setAttribute("href",p)}}const Be=document.querySelector(".js-share");Be.addEventListener("click",Ie);const xe=document.querySelector(".js-new-card");function Fe(){}xe.addEventListener("click",Fe);
//# sourceMappingURL=main.js.map
