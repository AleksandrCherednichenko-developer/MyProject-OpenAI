import{B as I,a as E,_ as v,b as f}from"./index.b6240fa6.js";import{_ as p,o as m,c as d,b as n,m as A,r as c,C as T,v as b,D as P,a as u}from"./index.bb0e6908.js";import{P as L}from"./index.7ffab51f.js";const{VITE_API_IMAGE:O}={VITE_API_KEY:"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",VITE_API_CHAT:"https://api.openai.com/v1/chat/completions",VITE_API_TEXT:"https://api.openai.com/v1/completions",VITE_API_IMAGE:"https://api.openai.com/v1/images/generations",VITE_API_AUDIO:"https://api.openai.com/v1/audio/transcriptions",VITE_API_MODEL_CHAT:"gpt-3.5-turbo",VITE_API_MODEL_TEXT:"text-davinci-003",VITE_API_MODEL_AUDIO:"whisper-1",VITE_DEFAULT_LOCALE:"en",VITE_FALLBACK_LOCALE:"ru",VITE_SUPPORTED_LOCALES:"en,ru",BASE_URL:"/MyProject-OpenAI/",MODE:"production",DEV:!1,PROD:!0};class V{static async getImage(t){var s;const a=await I.POST({uri:O,body:{prompt:t,n:1,size:"1024x1024"}});return a.status.ok?(s=a.payload)==null?void 0:s.data[0].url:E()}}const y={name:"CloseButton"},C=Object.assign(y,{emits:["close"],setup(i,{emit:t}){return(a,s)=>(m(),d("button",{class:"btn close__btn",onClick:s[0]||(s[0]=l=>t("close"))},[n(A,{name:"close",class:"close__btn-icon"})]))}}),x=p(C,[["__scopeId","data-v-cb1ebdb8"]]);const B={class:"section content-container chat__page"},D={class:"image__full-size"},M=["src"],S={name:"ImagePage"},h=Object.assign(S,{setup(i){const t=c([]),a=c(!1),s=c(!1),l=c(),g=async o=>{if(!o)return;a.value=!0,t.value.push({role:"user",content:o});const e=await V.getImage(o);a.value=!1,e&&t.value.push({role:"assistant",content:e})},r=(o,e=null)=>{s.value=o,l.value=e!=null?e:null};return(o,e)=>(m(),d("section",B,[n(L,{text:"image"}),n(v,{"chat-messages":t.value,loading:a.value,"type-messages":"image",onToggleFullSize:e[0]||(e[0]=_=>r(!0,_))},null,8,["chat-messages","loading"]),n(f,{onSendMessage:e[1]||(e[1]=_=>g(_))}),n(P,{class:b({"background-layout--active":s.value})},{default:T(()=>[u("div",D,[n(x,{onClose:e[2]||(e[2]=_=>r(!1))}),u("img",{src:l.value,alt:"image"},null,8,M)])]),_:1},8,["class"])]))}}),$=p(h,[["__scopeId","data-v-61ef7c64"]]);export{$ as default};
