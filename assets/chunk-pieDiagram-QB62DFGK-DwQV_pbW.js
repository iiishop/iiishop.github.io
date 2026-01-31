import{c as B}from"./chunk-chunk-4KE642ED-BcUuOipN.js";import{p as V}from"./chunk-treemap-KMMF4GRG-7ORZ52ND-DcEA5XU9.js";import{m as r,$ as Q,G as X,U as Y,H as q,e as I,j as J,p as w,a as K,L as Z,aN as _,aP as ee,aQ as W,aR as te,W as ae,N as ie,aS as le,r as re}from"./chunk-MarkdownPanel-nCxFiRKw.js";import"./chunk-chunk-OMTJKCYW-Bia0JFvu.js";import"./entry-index-Bf1NcD8s.js";import"./chunk-index-Dfcrt46N.js";import"./chunk-MarkdownRenender-DZcdQOLg.js";import"./chunk-DynamicComponentRenderer-BjBPsLTc.js";import"./chunk-IconCategory-CBSFuZ92.js";import"./chunk-_plugin-vue_export-helper-DlAUqK2U.js";import"./chunk-IconDate-DGFxfVKM.js";var se=re.pie,v={sections:new Map,showData:!1},m=v.sections,y=v.showData,oe=structuredClone(se),ne=r(()=>structuredClone(oe),"getConfig"),pe=r(()=>{m=new Map,y=v.showData,ie()},"clear"),de=r(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);m.has(e)||(m.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=r(()=>m,"getSections"),me=r(e=>{y=e},"setShowData"),ue=r(()=>y,"getShowData"),M={getConfig:ne,clear:pe,setDiagramTitle:J,getDiagramTitle:I,setAccTitle:q,getAccTitle:Y,setAccDescription:X,getAccDescription:Q,addSection:de,getSections:ce,setShowData:me,getShowData:ue},ge=r((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:r(async e=>{let a=await V("pie",e);w.debug(a),ge(a,M)},"parse")},fe=r(e=>`
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
`,"getStyles"),$e=fe,xe=r(e=>{let a=[...e.values()].reduce((l,s)=>l+s,0),D=[...e.entries()].map(([l,s])=>({label:l,value:s})).filter(l=>l.value/a*100>=1).sort((l,s)=>s.value-l.value);return le().value(l=>l.value)(D)},"createPieArcs"),Se=r((e,a,D,l)=>{w.debug(`rendering pie chart
`+e);let s=l.db,T=K(),b=Z(s.getConfig(),T.pie),C=40,o=18,d=4,p=450,u=p,g=_(a),n=g.append("g");n.attr("transform","translate("+u/2+","+p/2+")");let{themeVariables:i}=T,[k]=ee(i.pieOuterStrokeWidth);k??(k=2);let A=b.textPosition,c=Math.min(u,p)/2-C,N=W().innerRadius(0).outerRadius(c),P=W().innerRadius(c*A).outerRadius(c*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",c+k/2).attr("class","pieOuterCircle");let h=s.getSections(),L=xe(h),E=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],f=0;h.forEach(t=>{f+=t});let O=L.filter(t=>(t.data.value/f*100).toFixed(0)!=="0"),$=te(E);n.selectAll("mySlices").data(O).enter().append("path").attr("d",N).attr("fill",t=>$(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(O).enter().append("text").text(t=>(t.data.value/f*100).toFixed(0)+"%").attr("transform",t=>"translate("+P.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let R=[...h.entries()].map(([t,S])=>({label:t,value:S})),x=n.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(t,S)=>{let F=o+d,H=F*R.length/2,U=12*o,j=S*F-H;return"translate("+U+","+j+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",t=>$(t.label)).style("stroke",t=>$(t.label)),x.append("text").attr("x",o+d).attr("y",o-d).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);let G=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),z=u+C+o+d+G;g.attr("viewBox",`0 0 ${z} ${p}`),ae(g,p,z,b.useMaxWidth)},"draw"),we={draw:Se},Fe={parser:he,db:M,renderer:we,styles:$e};export{Fe as diagram};
