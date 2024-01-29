// let modal;
// function toggleModal(event) {
//   event.stopPropagation();
//   modal.classList.toggle('show');
// }
// function closeModal() {
//   modal.classList.remove('show');
// }
// document.addEventListener('DOMContentLoaded', function() {
//   modal = document.getElementById('modalMenu');
//   modal.addEventListener('click', closeModal);
//   const menuOpener = document.querySelector('.menu__opener');
//   menuOpener.addEventListener('click', toggleModal);
// });
// function sendForm() {
//   const subscribeTextarea = document.getElementById('subscribe');
//   subscribeTextarea.value = '';
// };
var e=document.getElementById("modalMenu"),t=document.querySelector(".menu__opener"),o=document.querySelector(".header_logo img"),n=document.querySelector(".logo-chevron-hidden"),c=document.querySelector(".logo-cross-hidden"),r=document.getElementById("backdrop");t.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("show"),r.classList.toggle("show"),e.classList.contains("show")?o.src=c.src:o.src=n.src}),e.addEventListener("click",function(){e.classList.remove("show"),r.classList.remove("show"),o.src=c.src}),o.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("show"),r.classList.toggle("show"),e.classList.contains("show")?o.src=c.src:o.src=n.src}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".footer_subscribe-button").addEventListener("click",function(){document.getElementById("subscribe").value=""})}),document.addEventListener("DOMContentLoaded",function(){// Smooth scrolling for internal links
var e=document.querySelectorAll('a[href^="#"]'),t=!0,o=!1,n=void 0;try{for(var c,r=e[Symbol.iterator]();!(t=(c=r.next()).done);t=!0)c.value.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(this.getAttribute("href"));if(t){var o=t.getBoundingClientRect().top+window.pageYOffset+-100;window.scrollTo({top:o,behavior:"smooth"})}})}catch(e){o=!0,n=e}finally{try{t||null==r.return||r.return()}finally{if(o)throw n}}});//# sourceMappingURL=index.8df5c8bf.js.map

//# sourceMappingURL=index.8df5c8bf.js.map
