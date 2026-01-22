import{c as V}from"./chunk-4KE642ED-OwOEfMpi.js";import{p as j}from"./treemap-KMMF4GRG-7ORZ52ND-DnDqvGT5.js";import{ar as r,at as X,as as Y,au as Z,av as q,aO as I,aN as J,ay as S,aw as K,aZ as Q,c2 as _,c4 as ee,c5 as M,c6 as te,az as ae,aT as ie,c7 as le,a$ as re}from"./MarkdownPanel-CpoSzjuQ.js";import"./chunk-OMTJKCYW-DUMPmFDD.js";import"./index-MCLTv8Kv.js";import"./IconCategory-DaUm1LJJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconDate-DWc64YDD.js";var se=re.pie,v={sections:new Map,showData:!1},u=v.sections,y=v.showData,oe=structuredClone(se),ne=r(()=>structuredClone(oe),"getConfig"),pe=r(()=>{u=new Map,y=v.showData,ie()},"clear"),ce=r(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),S.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),de=r(()=>u,"getSections"),ue=r(e=>{y=e},"setShowData"),me=r(()=>y,"getShowData"),W={getConfig:ne,clear:pe,setDiagramTitle:J,getDiagramTitle:I,setAccTitle:q,getAccTitle:Z,setAccDescription:Y,getAccDescription:X,addSection:ce,getSections:de,setShowData:ue,getShowData:me},ge=r((e,a)=>{V(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:r(async e=>{let a=await j("pie",e);S.debug(a),ge(a,W)},"parse")},fe=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),$e=fe,we=r(e=>{let a=[...e.values()].reduce((l,s)=>l+s,0),T=[...e.entries()].map(([l,s])=>({label:l,value:s})).filter(l=>l.value/a*100>=1).sort((l,s)=>s.value-l.value);return le().value(l=>l.value)(T)},"createPieArcs"),xe=r((e,a,T,l)=>{S.debug(`rendering pie chart
`+e);let s=l.db,D=K(),b=Q(s.getConfig(),D.pie),C=40,o=18,c=4,p=450,m=p,g=_(a),n=g.append("g");n.attr("transform","translate("+m/2+","+p/2+")");let{themeVariables:i}=D,[k]=ee(i.pieOuterStrokeWidth);k??(k=2);let A=b.textPosition,d=Math.min(m,p)/2-C,N=M().innerRadius(0).outerRadius(d),P=M().innerRadius(d*A).outerRadius(d*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",d+k/2).attr("class","pieOuterCircle");let h=s.getSections(),E=we(h),L=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],f=0;h.forEach(t=>{f+=t});let O=E.filter(t=>(t.data.value/f*100).toFixed(0)!=="0"),$=te(L);n.selectAll("mySlices").data(O).enter().append("path").attr("d",N).attr("fill",t=>$(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(O).enter().append("text").text(t=>(t.data.value/f*100).toFixed(0)+"%").attr("transform",t=>"translate("+P.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let z=[...h.entries()].map(([t,x])=>({label:t,value:x})),w=n.selectAll(".legend").data(z).enter().append("g").attr("class","legend").attr("transform",(t,x)=>{let R=o+c,G=R*z.length/2,H=12*o,U=x*R-G;return"translate("+H+","+U+")"});w.append("rect").attr("width",o).attr("height",o).style("fill",t=>$(t.label)).style("stroke",t=>$(t.label)),w.append("text").attr("x",o+c).attr("y",o-c).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);let B=Math.max(...w.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),F=m+C+o+c+B;g.attr("viewBox",`0 0 ${F} ${p}`),ae(g,p,F,b.useMaxWidth)},"draw"),Se={draw:xe},Oe={parser:he,db:W,renderer:Se,styles:$e};export{Oe as diagram};
