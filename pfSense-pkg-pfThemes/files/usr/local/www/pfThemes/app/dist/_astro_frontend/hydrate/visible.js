async function n(n,e,o){var t,r;const c=document.querySelectorAll(`astro-root[uid="${n}"]`),l=null!=(r=null==(t=c[0].querySelector("astro-fragment"))?void 0:t.innerHTML)?r:null,s=new IntersectionObserver((([n])=>{n.isIntersecting&&(s.disconnect(),(async()=>{const n=await o();for(const e of c)n(e,l)})())}));for(const n of c)for(let e=0;e<n.children.length;e++){const o=n.children[e];s.observe(o)}}export default n;
