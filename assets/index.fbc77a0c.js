import{B as i,a as p,_ as E,b as T,c as l}from"./index.a8881c9f.js";import{_ as u,r as n,o as I,c as m,b as _}from"./index.f09b3f80.js";const{VITE_API_TEXT:A,VITE_API_MODEL_TEXT:d}={VITE_API_KEY:"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",VITE_API_CHAT:"https://api.openai.com/v1/chat/completions",VITE_API_TEXT:"https://api.openai.com/v1/completions",VITE_API_IMAGE:"https://api.openai.com/v1/images/generations",VITE_API_AUDIO:"https://api.openai.com/v1/audio/transcriptions",VITE_API_MODEL_CHAT:"gpt-3.5-turbo",VITE_API_MODEL_TEXT:"text-davinci-003",VITE_API_MODEL_AUDIO:"whisper-1",VITE_DEFAULT_LOCALE:"en",VITE_FALLBACK_LOCALE:"ru",VITE_SUPPORTED_LOCALES:"en,ru",BASE_URL:"/MyProject-OpenAI/",MODE:"production",DEV:!1,PROD:!0};class g{static async getText(s){var a;const e=await i.POST({uri:A,body:{model:d,prompt:s,max_tokens:2048,temperature:.3}});return e.status.ok?(a=e.payload)==null?void 0:a.choices[0].text:p()}}const f={class:"section content-container chat__page"},P={name:"TextPage"},O=Object.assign(P,{setup(c){const s=n([]),e=n(!1),a=async o=>{if(!o)return;e.value=!0,s.value.push({role:"user",content:o});const t=await g.getText(o);e.value=!1,t&&s.value.push({role:"assistant",content:t})};return(o,t)=>(I(),m("section",f,[_(l,{text:"text"}),_(E,{"chat-messages":s.value,loading:e.value},null,8,["chat-messages","loading"]),_(T,{onSendMessage:t[0]||(t[0]=r=>a(r))})]))}}),v=u(O,[["__scopeId","data-v-50b96543"]]);export{v as default};
