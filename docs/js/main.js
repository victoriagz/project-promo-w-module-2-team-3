const S=document.querySelector(".js-arrow-up-design"),L=document.querySelector(".js-arrow-up-form"),h=document.querySelector(".js-arrow-up-share"),E=document.querySelector(".js-text-design"),I=document.querySelector(".js-text-form"),C=document.querySelector(".js-text-share"),a=document.querySelector(".js-color-container"),m=document.querySelector(".js-form"),g=document.querySelector(".js-share");document.querySelector(".js_drop_down");const v=document.querySelector(".js_button_create_card"),w=document.querySelector(".js-name"),B=document.querySelector(".js-job");document.querySelector(".js-email");document.querySelector(".js-phone");document.querySelector(".js-linkedin");document.querySelector(".js-github");const u=document.querySelectorAll(".js-required"),i=document.querySelector(".js-field-required-message");function x(){const e=u[1],t=e.value,d=u[2],y=d.value,s=u[3],b=parseInt(s.value);for(const o of u)if(o.value==="")i.innerHTML="Por favor, rellena los campos que faltan*",o.style.border="1px solid #ad6868";else if(o.style.border="1px solid #a2deaf",t==="")i.innerHTML="Por favor, rellena TU TRABAJO*",e.style.border="1px solid #ad6868";else if(!y.includes("@"))i.innerHTML="Por favor, introduce un email válido*",d.style.border="1px solid #ad6868";else if(isNaN(b))i.innerHTML="Por favor, introduce un teléfono válido*",s.style.border="1px solid #ad6868";else{console.log("todos los campos rellenos"),o.style.border="",o.style.border="1px solid #a2deaf",i.innerHTML="Todos los campos están rellenos, buen trabajo!",l(g);return}}function F(e){e!==a&&a.classList.add("collapsed"),e!==m&&m.classList.add("collapsed"),e!==g&&g.classList.add("collapsed")}function l(e){F(e),e.classList.toggle("collapsed")}const T=e=>{const t=document.querySelector(".js_drop_down");e.preventDefault(),t.classList.contains("collapsed")&&(t.classList.remove("collapsed"),v.style.backgroundColor="#d5d5d5",v.style.pointerEvents="none")};v.addEventListener("click",T);E.addEventListener("click",()=>l(a));I.addEventListener("click",()=>l(m));C.addEventListener("click",()=>l(g));S.addEventListener("click",()=>l(a));L.addEventListener("click",()=>l(m));h.addEventListener("click",()=>x());const j={color1:"#114e4e",color2:"#438792",color3:"#a2deaf"},M={color1:"#4B0101",color2:"#8B3A3A",color3:"#FF6347"},A={color1:"#708090",color2:"#fe994a",color3:"#B7C9E2"},H={color1:"#ffc8dd",color2:"#ffafcc",color3:"#bde0fe"},P={color1:"#4a8fe7",color2:"#59d2fe",color3:"#44e5e7"},R={color1:"#370075",color2:"#620097",color3:"#e2dada"},U=document.querySelector(".js-radio1"),D=document.querySelector(".js-radio2"),N=document.querySelector(".js-radio3"),O=document.querySelector(".js-radio4"),V=document.querySelector(".js-radio5"),z=document.querySelector(".js-radio6"),J=document.querySelector(".js_preview_title"),$=document.querySelector(".js_border_card"),_=document.querySelectorAll(".js_circle_card");function c(e){J.style.color=e.color1,$.style.borderColor=e.color2;for(let t=0;t<_.length;t++)_[t].style.borderColor=e.color3}U.addEventListener("click",()=>c(j));D.addEventListener("click",()=>c(M));N.addEventListener("click",()=>c(A));O.addEventListener("click",()=>c(H));V.addEventListener("click",()=>c(P));z.addEventListener("click",()=>c(R));let n=document.querySelector(".js-image");const W=document.querySelector(".js-button1"),Y=document.querySelector(".js-button2"),G=document.querySelector(".js-button3"),K=document.querySelector(".js-button4"),Q=document.querySelector(".js-button5"),X=document.querySelector(".js-button6");document.querySelector(".js-container-title-1");document.querySelector(".js-container-title-2");document.querySelector(".js-container-title-3");document.querySelector(".js-container-title-4");document.querySelector(".js-container-title-5");document.querySelector(".js-container-title-6");document.querySelectorAll(".js-title-grey");const r=document.querySelector(".js-card_section");function Z(){n.src="/images/dog-doctor.png",r.style.backgroundImage='url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")',console.log(1)}function ee(){n.src="/images/cat-professor.png",r.style.backgroundImage='url("https://i.pinimg.com/736x/fe/72/94/fe72948b42367756ae7ba55227d48506.jpg")',console.log(2)}function te(){n.src="/images/dog-jalapenio.png",r.style.backgroundImage='url("https://www.gaulan.es/885327-large_default/veneto-marble-680935.jpg")',console.log(3)}function oe(){n.src="/images/cat-firefighter.png",r.style.backgroundImage='url("https://media.istockphoto.com/id/1459266752/es/foto/fondo-de-textura-de-m%C3%A1rmol-rosa-con-alta-resoluci%C3%B3n-en-patr%C3%B3n-sin-costuras-para-el-dise%C3%B1o-de.webp?b=1&s=170667a&w=0&k=20&c=Vv_-7xnMB2kcO5WwqxNihCUd3b0q7T2cuvS08gp1LnY=")',console.log(4)}function ne(){n.src="/images/dog-chef.png",r.style.backgroundImage='url("https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/55714.png")',console.log(5)}function ce(){n.src="/images/cat-astronaut.png",r.style.backgroundImage='url("https://dbdzm869oupei.cloudfront.net/img/sticker/preview/38357.png")',console.log(6)}W.addEventListener("click",()=>Z());Y.addEventListener("click",()=>ee());G.addEventListener("click",()=>te());K.addEventListener("click",()=>oe());Q.addEventListener("click",()=>ne());X.addEventListener("click",()=>ce());const re=document.querySelector(".js-reset-palette");function le(){_e(),c(j),n.src="/images/dog-doctor.png",r.style.backgroundImage='url("https://i.pinimg.com/736x/c8/d5/09/c8d509ae55bbef2cc85a5245a04d850e.jpg")',document.getElementById("colorScheme1").checked=!0}re.addEventListener("click",le);const de=document.querySelector(".js-button_pic");let se=()=>{n.src=""};de.addEventListener("click",se);const ie=document.querySelector(".js_preview_title"),ue=document.querySelector(".js_preview_job");w.addEventListener("input",e=>{ie.innerHTML=e.target.value});B.addEventListener("input",e=>{ue.innerHTML=e.target.value});const p=new FileReader,ae=document.querySelector(".js__profile-upload-btn"),me=document.querySelector(".js__profile-image"),q=document.querySelector(".js__profile-preview");function ge(e){const t=e.currentTarget.files[0];p.addEventListener("load",pe),p.readAsDataURL(t)}function pe(){me.style.backgroundImage=`url(${p.result})`,q.style.backgroundImage=`url(${p.result})`}ae.addEventListener("change",ge);function ye(){const e=document.querySelector(".js_email"),t=document.getElementById("social__email__id");e.addEventListener("input",function(){t.href="mailto:"+e.value});const d=document.querySelector(".js_phone"),y=document.getElementById("social__mobile__id");d.addEventListener("input",function(){y.href="tel:"+d.value});const s=document.querySelector(".js_linkedin"),b=document.getElementById("social__linkedin__id");s.addEventListener("input",function(){const f="https://www.linkedin.com/in/";b.href=f+s.value});const o=document.querySelector(".js_github"),k=document.getElementById("social__github__id");o.addEventListener("input",function(){const f="https://www.github.com/";k.href=f+o.value})}document.addEventListener("DOMContentLoaded",ye);const be=document.querySelector(".js-reset-button"),fe=()=>{console.log("Resetting card"),document.getElementById("card__title__id").innerHTML="Nombre Apellido",document.getElementById("card__job__id").innerHTML="Front-end developer",document.getElementById("social__email__id").href="#",document.getElementById("social__mobile__id").href="tel:#",document.getElementById("social__linkedin__id").href="#",document.getElementById("social__github__id").href="#"},ve=()=>{console.log("Resetting form"),document.getElementById("name").value="",document.getElementById("job").value="",document.getElementById("image").style.backgroundImage="",document.getElementById("email").value="",document.getElementById("phone").value="",document.getElementById("linkedin").value="",document.getElementById("github").value=""},_e=()=>{q.style.backgroundImage="none"},je=()=>{fe(),ve()};be.addEventListener("click",je);
//# sourceMappingURL=main.js.map
