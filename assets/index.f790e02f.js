import{B as I,a as E,_ as v,b as f}from"./index.89936688.js";import{_ as p,o as m,c as g,b as n,m as T,r as c,C as b,v as A,D as V,a as u}from"./index.defb357e.js";import{P as O}from"./index.68f859e4.js";const{VITE_API_IMAGE:P}={VITE_API_KEY:"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",VITE_API_CHAT:"https://api.openai.com/v1/chat/completions",VITE_API_TEXT:"https://api.openai.com/v1/completions",VITE_API_IMAGE:"https://api.openai.com/v1/images/generations",VITE_API_AUDIO:"https://api.openai.com/v1/audio/transcriptions",VITE_API_MODEL_CHAT:"gpt-3.5-turbo",VITE_API_MODEL_TEXT:"text-davinci-003",VITE_API_MODEL_AUDIO:"whisper-1",VITE_DEFAULT_LOCALE:"en",VITE_FALLBACK_LOCALE:"ru",VITE_SUPPORTED_LOCALES:"en,ru",BASE_URL:"/MyProject-OpenAI/",MODE:"production",DEV:!1,PROD:!0};class C{static async getImage(t){var s;const a=await I.POST({uri:P,body:{prompt:t,n:1,size:"1024x1024"}});return a.status.ok?(s=a.payload)==null?void 0:s.data[0].url:E()}}const y={name:"CloseButton"},L=Object.assign(y,{emits:["close"],setup(i,{emit:t}){return(a,s)=>(m(),g("button",{class:"btn close__btn",onClick:s[0]||(s[0]=l=>t("close"))},[n(T,{name:"close",class:"close__btn-icon"})]))}}),D=p(L,[["__scopeId","data-v-cb1ebdb8"]]);const h={class:"section content-container chat__page"},k={class:"image__full-size"},x=["src"],B={name:"ImagePage"},M=Object.assign(B,{setup(i){const t=c([]),a=c(!1),s=c(!1),l=c(),d=async o=>{if(!o)return;a.value=!0,t.value.push({role:"user",content:o});const e=await C.getImage(o);a.value=!1,e&&t.value.push({role:"assistant",content:e})},r=(o,e=null)=>{s.value=o,l.value=e!=null?e:null};return(o,e)=>(m(),g("section",h,[n(O,{text:"image"}),n(v,{"chat-messages":t.value,loading:a.value,"type-messages":"image",onToggleFullSize:e[0]||(e[0]=_=>r(!0,_))},null,8,["chat-messages","loading"]),n(f,{onSendMessage:e[1]||(e[1]=_=>d(_))}),n(V,{class:A({"background-layout--active":s.value})},{default:b(()=>[u("div",k,[n(D,{onClose:e[2]||(e[2]=_=>r(!1))}),u("img",{src:l.value,alt:"image"},null,8,x)])]),_:1},8,["class"])]))}}),w=p(M,[["__scopeId","data-v-61ef7c64"]]);export{w as default};
