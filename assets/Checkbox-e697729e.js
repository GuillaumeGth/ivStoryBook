import{o as te,p as se,q as ne,r as W,t as _,v as re,w as ae,x as le,y as ce,_ as T,j as i,c as w,f as q,a as V,z as J,g as U,s as L,n as ie,A as Q,h as j,u as D,B as de,D as K,i as A,E as ue,F as pe}from"./createSvgIcon-ce81ea9f.js";import{a as c}from"./inheritsLoose-5428d580.js";import{r as x}from"./index-76fb7be0.js";import{B as me}from"./ButtonBase-b021bb40.js";const he=te(),fe=he,be=["component","direction","spacing","divider","children","className","useFlexGap"],Ce=se(),ke=fe("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function ge(e){return ne({props:e,name:"MuiStack",defaultTheme:Ce})}function xe(e,o){const s=x.Children.toArray(e).filter(Boolean);return s.reduce((n,r,t)=>(n.push(r),t<s.length-1&&n.push(x.cloneElement(o,{key:`separator-${t}`})),n),[])}const ye=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ve=({ownerState:e,theme:o})=>{let s=c({display:"flex",flexDirection:"column"},W({theme:o},_({values:e.direction,breakpoints:o.breakpoints.values}),n=>({flexDirection:n})));if(e.spacing){const n=re(o),r=Object.keys(o.breakpoints.values).reduce((l,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(l[a]=!0),l),{}),t=_({values:e.direction,base:r}),d=_({values:e.spacing,base:r});typeof t=="object"&&Object.keys(t).forEach((l,a,h)=>{if(!t[l]){const p=a>0?t[h[a-1]]:"column";t[l]=p}}),s=ae(s,W({theme:o},d,(l,a)=>e.useFlexGap?{gap:J(n,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ye(a?t[a]:e.direction)}`]:J(n,l)}}))}return s=le(o.breakpoints,s),s};function Pe(e={}){const{createStyledComponent:o=ke,useThemeProps:s=ge,componentName:n="MuiStack"}=e,r=()=>q({root:["root"]},l=>V(n,l),{}),t=o(ve);return x.forwardRef(function(l,a){const h=s(l),C=ce(h),{component:p="div",direction:y="column",spacing:F=0,divider:k,children:u,className:f,useFlexGap:m=!1}=C,R=T(C,be),z={direction:y,spacing:F,useFlexGap:m},S=r();return i.jsx(t,c({as:p,ownerState:z,ref:a,className:w(S.root,f)},R,{children:k?xe(u,k):u}))})}function $e(e){return V("PrivateSwitchBase",e)}U("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Fe=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Se=e=>{const{classes:o,checked:s,disabled:n,edge:r}=e,t={root:["root",s&&"checked",n&&"disabled",r&&`edge${j(r)}`],input:["input"]};return q(t,$e,o)},Be=L(me)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Re=L("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ie=x.forwardRef(function(o,s){const{autoFocus:n,checked:r,checkedIcon:t,className:d,defaultChecked:b,disabled:l,disableFocusRipple:a=!1,edge:h=!1,icon:C,id:p,inputProps:y,inputRef:F,name:k,onBlur:u,onChange:f,onFocus:m,readOnly:R,required:z=!1,tabIndex:S,type:v,value:I}=o,P=T(o,Fe),[B,X]=ie({controlled:r,default:!!b,name:"SwitchBase",state:"checked"}),$=Q(),Y=g=>{m&&m(g),$&&$.onFocus&&$.onFocus(g)},Z=g=>{u&&u(g),$&&$.onBlur&&$.onBlur(g)},ee=g=>{if(g.nativeEvent.defaultPrevented)return;const G=g.target.checked;X(G),f&&f(g,G)};let M=l;$&&typeof M>"u"&&(M=$.disabled);const oe=v==="checkbox"||v==="radio",E=c({},o,{checked:B,disabled:M,disableFocusRipple:a,edge:h}),H=Se(E);return i.jsxs(Be,c({component:"span",className:w(H.root,d),centerRipple:!0,focusRipple:!a,disabled:M,tabIndex:null,role:void 0,onFocus:Y,onBlur:Z,ownerState:E,ref:s},P,{children:[i.jsx(Re,c({autoFocus:n,checked:r,defaultChecked:b,className:H.input,disabled:M,id:oe?p:void 0,name:k,onChange:ee,readOnly:R,ref:F,required:z,ownerState:E,tabIndex:S,type:v},v==="checkbox"&&I===void 0?{}:{value:I},y)),B?t:C]}))}),je=Ie,Le=Pe({createStyledComponent:L("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>D({props:e,name:"MuiStack"})}),ze=Le;function Me(e){return V("MuiFormControlLabel",e)}const Ne=U("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),N=Ne,we=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Te=e=>{const{classes:o,disabled:s,labelPlacement:n,error:r,required:t}=e,d={root:["root",s&&"disabled",`labelPlacement${j(n)}`,r&&"error",t&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",r&&"error"]};return q(d,Me,o)},qe=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${N.label}`]:o.label},o.root,o[`labelPlacement${j(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${N.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${N.label}`]:{[`&.${N.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ve=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${N.error}`]:{color:(e.vars||e).palette.error.main}})),Ee=x.forwardRef(function(o,s){var n,r;const t=D({props:o,name:"MuiFormControlLabel"}),{className:d,componentsProps:b={},control:l,disabled:a,disableTypography:h,label:C,labelPlacement:p="end",required:y,slotProps:F={}}=t,k=T(t,we),u=Q(),f=(n=a??l.props.disabled)!=null?n:u==null?void 0:u.disabled,m=y??l.props.required,R={disabled:f,required:m};["checked","name","onChange","value","inputRef"].forEach(B=>{typeof l.props[B]>"u"&&typeof t[B]<"u"&&(R[B]=t[B])});const z=de({props:t,muiFormControl:u,states:["error"]}),S=c({},t,{disabled:f,labelPlacement:p,required:m,error:z.error}),v=Te(S),I=(r=F.typography)!=null?r:b.typography;let P=C;return P!=null&&P.type!==K&&!h&&(P=i.jsx(K,c({component:"span"},I,{className:w(v.label,I==null?void 0:I.className),children:P}))),i.jsxs(qe,c({className:w(v.root,d),ownerState:S,ref:s},k,{children:[x.cloneElement(l,R),m?i.jsxs(ze,{direction:"row",alignItems:"center",children:[P,i.jsxs(Ve,{ownerState:S,"aria-hidden":!0,className:v.asterisk,children:[" ","*"]})]}):P]}))}),to=Ee,_e=A(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Oe=A(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ue=A(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function De(e){return V("MuiCheckbox",e)}const Ae=U("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),O=Ae,He=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ge=e=>{const{classes:o,indeterminate:s,color:n,size:r}=e,t={root:["root",s&&"indeterminate",`color${j(n)}`,`size${j(r)}`]},d=q(t,De,o);return c({},o,d)},We=L(je,{shouldForwardProp:e=>ue(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.indeterminate&&o.indeterminate,s.color!=="default"&&o[`color${j(s.color)}`]]}})(({theme:e,ownerState:o})=>c({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:pe(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${O.checked}, &.${O.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${O.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Je=i.jsx(Oe,{}),Ke=i.jsx(_e,{}),Qe=i.jsx(Ue,{}),Xe=x.forwardRef(function(o,s){var n,r;const t=D({props:o,name:"MuiCheckbox"}),{checkedIcon:d=Je,color:b="primary",icon:l=Ke,indeterminate:a=!1,indeterminateIcon:h=Qe,inputProps:C,size:p="medium",className:y}=t,F=T(t,He),k=a?h:l,u=a?h:d,f=c({},t,{color:b,indeterminate:a,size:p}),m=Ge(f);return i.jsx(We,c({type:"checkbox",inputProps:c({"data-indeterminate":a},C),icon:x.cloneElement(k,{fontSize:(n=k.props.fontSize)!=null?n:p}),checkedIcon:x.cloneElement(u,{fontSize:(r=u.props.fontSize)!=null?r:p}),ownerState:f,ref:s,className:w(m.root,y)},F,{classes:m}))}),so=Xe;export{so as C,to as F,je as S,fe as s};
