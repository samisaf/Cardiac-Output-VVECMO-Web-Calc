(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{4:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),m=t(1),o=function(e){var a=e.label,t=e.placeholder,n=e.onChange;return l.a.createElement("div",{className:"flex m-2"},l.a.createElement("label",{className:"w-2/3"},a),l.a.createElement("input",{className:"w-1/3 text-center",placeholder:t,type:"number",onChange:function(e){return n(Number(e.target.value))}}))},s=function(e){var a=e.label,t=e.value,n=isFinite(t)&t>0?t.toString():"";return l.a.createElement("div",{className:"flex m-2"},l.a.createElement("p",{className:"w-2/3"},a),l.a.createElement("p",{className:"w-1/3 text-center"},n))},u=function(e){e.name;var a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.round(e*Math.pow(10,a))/Math.pow(10,a)},t=l.a.useState(0),n=Object(m.a)(t,2),r=n[0],c=n[1],u=l.a.useState(0),i=Object(m.a)(u,2),b=i[0],E=i[1],h=l.a.useState(0),d=Object(m.a)(h,2),p=d[0],g=d[1],v=l.a.useState(0),C=Object(m.a)(v,2),O=C[0],S=C[1],f=l.a.useState(5),w=Object(m.a)(f,2),x=w[0],M=w[1],N=l.a.useState(0),j=Object(m.a)(N,2),y=j[0],A=j[1],B=l.a.useState(0),H=Object(m.a)(B,2),V=H[0],L=H[1],P=l.a.useState(0),k=Object(m.a)(P,2),D=k[0],F=k[1],I=l.a.useState(0),R=Object(m.a)(I,2),J=R[0],G=R[1],W=Math.round(V*(D-J)/(y-J)*1e3),q=V*(D-y)/(y-J)*1e3,z=p/3+2*O/3,K=8e4*(z-x)/W,Q=.007184*Math.pow(b,.425)*Math.pow(r,.725),T=W/Q;return l.a.createElement("div",{className:"max-w-lg rounded shadow-lg bg-gray-300 p-2 m-2"},l.a.createElement("p",{className:"font-bold"},"Cardiac Output in VV ECMO"),l.a.createElement(o,{label:"ECMO Flow Rate (L/min)",onChange:L}),l.a.createElement(o,{label:"ECMO Arterial O2 Saturation (%)",onChange:F}),l.a.createElement(o,{label:"ECMO Venous O2 Saturation (%)",onChange:G}),l.a.createElement(o,{label:"Arterial O2 Saturation (%)",onChange:A}),l.a.createElement(o,{label:"SBP (mmHg)",onChange:g}),l.a.createElement(o,{label:"DBP (mmHg)",onChange:S}),l.a.createElement(o,{label:"RAP (mmHg)",placeholder:x,onChange:M}),l.a.createElement(o,{label:"Height (cm)",onChange:c}),l.a.createElement(o,{label:"Weight (kg)",onChange:E}),l.a.createElement("div",{className:"font-bold"},l.a.createElement(s,{label:"Cardiac Output (mL/min)",value:a(W)}),l.a.createElement(s,{label:"Venous Flow (mL/min)",value:a(q)}),l.a.createElement(s,{label:"Cardiac Index (mL/min)",value:a(T)}),l.a.createElement(s,{label:"SVR (dynes-sec/cm\u2075)",value:a(K)}),l.a.createElement(s,{label:"MAP (mmHG)",value:a(z)}),l.a.createElement(s,{label:"BSA - Du Bois (m\xb2)",value:a(Q,2)})),l.a.createElement("p",{className:"text-center text-sm"},"Information presented here, including use of the calculator, is strictly for educational purposes and should not be used for any other purpose."),l.a.createElement("p",{className:"text-center text-xs"},"\xa9 Sami Safadi, MD"))};c.a.render(l.a.createElement(u,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.9c21ac81.chunk.js.map