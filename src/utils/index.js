//除法
const accDiv = (arg1,arg2) => {
  let t1=0,t2=0,r1,r2;
  try {
      t1=arg1.toString().split(".")[1].length;
  } catch(e){console.log(e)}
  try {
      t2=arg2.toString().split(".")[1].length;
  } catch(e){console.log(e)}

  r1=Number(arg1.toString().replace(".",""));
  r2=Number(arg2.toString().replace(".",""));
  return (r1/r2)*Math.pow(10,t2-t1);

}

//乘法
const accMul = (arg1,arg2) =>
{
  let m=0,s1=arg1.toString(),s2=arg2.toString();
  try {
      m+=s1.split(".")[1].length;
  } catch(e){console.log(e)}
  try {
      m+=s2.split(".")[1].length;
  } catch(e){console.log(e)}
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}

//加法
const accAdd = (arg1,arg2) => {
  let r1,r2,m;
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2));
  return (arg1*m+arg2*m)/m;
}

//減法
const accSubtr = (arg1,arg2) => {
  let r1,r2,m,n;
  try {
      r1=arg1.toString().split(".")[1].length;
  } catch(e){r1=0}
  try {
      r2=arg2.toString().split(".")[1].length;
  } catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2));
  n=(r1>=r2)?r1:r2;
  return ((arg1*m-arg2*m)/m).toFixed(n);
}
