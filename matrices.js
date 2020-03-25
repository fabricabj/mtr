var a=new Array(3);b=new Array(3);c=new Array(3)
 function suma(){
  var a11=document.getElementById('a11').value;var a12=document.getElementById('a12').value;var a13=document.getElementById('a13').value;var a21=document.getElementById('a21').value;var a22=document.getElementById('a22').value;var a23=document.getElementById('a23').value;var a31=document.getElementById('a31').value;var a32=document.getElementById('a32').value;var a33=document.getElementById('a33').value;var b11=document.getElementById('b11').value;var b12=document.getElementById('b12').value;var b13=document.getElementById('b13').value;var b21=document.getElementById('b21').value;var b22=document.getElementById('b22').value;var b23=document.getElementById('b23').value;var b31=document.getElementById('b31').value;var b32=document.getElementById('b32').value;var b33=document.getElementById('b33').value;
  ok=true;
  msg="revisar que ningun elemento este vacio en:\n";
  if (a11.length<1 || a12.length<1 || a13.length<1 || a21.length<1 || a22.length<1 || a23.length<1 || a31.length<1 || a32.length<1 || a33.length<1) {
      msg+="MATRIZ A\n";
      ok=false;
  }
  if (b11.length<1 || b12.length<1 || b13.length<1 || b21.length<1 || b22.length<1 || b23.length<1 || b31.length<1 || b32.length<1 || b33.length<1) {
      msg+="MATRIZ B\n";
      ok=false;
  }
  if (ok==false) {
      alert(msg);
      return ok;
  }
      document.getElementById('btnInversa').disabled=false;
      document.getElementById('btnModificar').disabled=false;
      document.getElementById('suma').hidden=false;
      document.getElementById('producto').hidden=true;
      document.getElementById('resta').hidden=true;
      for(i=1;i<=3;i++){   
          a[i]=[0,0,0,0];b[i]= [0,0,0,0];c[i]= [0,0,0,0]
          for(j=1;j<=3;j++){   
                 a[i][j]=parseFloat(document.matriza[3*i+j-4].value)
                 b[i][j]=parseFloat(document.matrizb[3*i+j-4].value)
                 c[i][j]=c[i][j]+a[i][j]+b[i][j]  
                 document.matrizc[3*i+j-4].value=c[i][j]      
          }    
      }
}
function resta(){
  var a11=document.getElementById('a11').value;var a12=document.getElementById('a12').value;var a13=document.getElementById('a13').value;var a21=document.getElementById('a21').value;var a22=document.getElementById('a22').value;var a23=document.getElementById('a23').value;var a31=document.getElementById('a31').value;var a32=document.getElementById('a32').value;var a33=document.getElementById('a33').value;var b11=document.getElementById('b11').value;var b12=document.getElementById('b12').value;var b13=document.getElementById('b13').value;var b21=document.getElementById('b21').value;var b22=document.getElementById('b22').value;var b23=document.getElementById('b23').value;var b31=document.getElementById('b31').value;var b32=document.getElementById('b32').value;var b33=document.getElementById('b33').value;
  ok=true;
  msg="revisar que ningun elemento este vacio en:\n";
  if (a11.length<1 || a12.length<1 || a13.length<1 || a21.length<1 || a22.length<1 || a23.length<1 || a31.length<1 || a32.length<1 || a33.length<1) {
      msg+="MATRIZ A\n";
      ok=false;
  }
  if (b11.length<1 || b12.length<1 || b13.length<1 || b21.length<1 || b22.length<1 || b23.length<1 || b31.length<1 || b32.length<1 || b33.length<1) {
      msg+="MATRIZ B\n";
      ok=false;
  }
  if (ok==false) {
      alert(msg);
      return ok;
  }
      document.getElementById('btnInversa').disabled=false;
      document.getElementById('btnModificar').disabled=false;
      document.getElementById('resta').hidden=false;
      document.getElementById('suma').hidden=true;
      document.getElementById('producto').hidden=true;
      for(i=1;i<=3;i++){   
            a[i]=[0,0,0,0];b[i]= [0,0,0,0];c[i]= [0,0,0,0]
            for(j=1;j<=3;j++){   
                 a[i][j]=parseFloat(document.matriza[3*i+j-4].value)
                 b[i][j]=parseFloat(document.matrizb[3*i+j-4].value)
                 c[i][j]=c[i][j]+a[i][j]-b[i][j]  
                 document.matrizc[3*i+j-4].value=c[i][j]     
            }    
      }
}
function producto(){
  var a11=document.getElementById('a11').value;var a12=document.getElementById('a12').value;var a13=document.getElementById('a13').value;var a21=document.getElementById('a21').value;var a22=document.getElementById('a22').value;var a23=document.getElementById('a23').value;var a31=document.getElementById('a31').value;var a32=document.getElementById('a32').value;var a33=document.getElementById('a33').value;var b11=document.getElementById('b11').value;var b12=document.getElementById('b12').value;var b13=document.getElementById('b13').value;var b21=document.getElementById('b21').value;var b22=document.getElementById('b22').value;var b23=document.getElementById('b23').value;var b31=document.getElementById('b31').value;var b32=document.getElementById('b32').value;var b33=document.getElementById('b33').value;
  ok=true;
  msg="revisar que ningun elemento este vacio en:\n";
  if (a11.length<1 || a12.length<1 || a13.length<1 || a21.length<1 || a22.length<1 || a23.length<1 || a31.length<1 || a32.length<1 || a33.length<1) {
      msg+="MATRIZ A\n";
      ok=false;
  }
  if (b11.length<1 || b12.length<1 || b13.length<1 || b21.length<1 || b22.length<1 || b23.length<1 || b31.length<1 || b32.length<1 || b33.length<1) {
      msg+="MATRIZ B\n";
      ok=false;
  }
  if (ok==false) {
      alert(msg);
      return ok;
  }
     document.getElementById('btnInversa').disabled=false;
      document.getElementById('btnModificar').disabled=false;
     document.getElementById('producto').hidden=false;
     document.getElementById('suma').hidden=true;
     document.getElementById('resta').hidden=true;
     for(i=1;i<=3;i++){   
            a[i]=[0,0,0,0];b[i]= [0,0,0,0];c[i]= [0,0,0,0]
            for(j=1;j<=3;j++){  
                 a[i][j]=parseFloat(document.matriza[3*i+j-4].value)
                 b[i][j]=parseFloat(document.matrizb[3*i+j-4].value)    
            }    
     }
     for(i=1;i<=3;i++){   
         for(j=1;j<=3;j++){ 
               c[i][j]=0
               for(k=1;k<=3;k++){
                  c[i][j]=c[i][j]+a[i][k]*b[k][j]  
               }
               document.matrizc[3*i+j-4].value=c[i][j]  
         }    
     }
}
var d00,d01,d02,d10,d11,d12,d20,d21,d22,total;
  function Inversa(){
  document.getElementById('mostrarPasos').disabled=false;
  d11=document.getElementById("c11").value;
  d12=document.getElementById("c12").value;
  d13=document.getElementById("c13").value;
  d21=document.getElementById("c21").value;
  d22=document.getElementById("c22").value;
  d23=document.getElementById("c23").value;
  d31=document.getElementById("c31").value;
  d32=document.getElementById("c32").value;
  d33=document.getElementById("c33").value;
  ok=true;
  msg="revisar que ningun elemento este vacio en:\n";
  if (d11.length<1 || d12.length<1 || d13.length<1 || d21.length<1 || d22.length<1 || d23.length<1 || d31.length<1 || d32.length<1 || d33.length<1) {
      msg+="MATRIZ C\n";
      ok=false;
  }
  if (ok==false) {
      alert(msg);
      document.getElementById('mostrarPasos').disabled=true;
      return ok;
  }
 total=d11*d22*d33 + d21*d32*d13 +d31*d12*d23;
 total=total+(d13*d22*d31)*-1 + (d23*d32*d11)*-1 + (d33*d12*d21)*-1;
 if(total!=0){
 
  var det=$('#det');
  var proc=$('#proc');
    t11=((d22*d33-d32*d23)/total).toFixed(2);                                                          
    t12=(((d12*d33-d32*d13)*-1)/total).toFixed(2);                          
    t13=((d12*d23-d22*d13)/total).toFixed(2);
    t21=(((d21*d33-d31*d23)*-1)/total).toFixed(2);
    t22=(((d11*d33-d31*d13))/total).toFixed(2);
    t23=(((d11*d23-d21*d13)*-1)/total).toFixed(2);
    t31=(((d21*d32-d31*d22))/total).toFixed(2);
    t32=(((d11*d32-d31*d12)*-1)/total).toFixed(2);
    t33=((d11*d22-d21*d12)/total).toFixed(2);
    tr11=((d22*d33-d32*d23)).toFixed(2);                                                          
    tr12=(((d12*d33-d32*d13)*-1)).toFixed(2);                          
    tr13=((d12*d23-d22*d13)).toFixed(2);
    tr21=(((d21*d33-d31*d23)*-1)).toFixed(2);
    tr22=(((d11*d33-d31*d13))).toFixed(2);
    tr23=(((d11*d23-d21*d13)*-1)).toFixed(2);
    tr31=(((d21*d32-d31*d22))).toFixed(2);
    tr32=(((d11*d32-d31*d12)*-1)).toFixed(2);
    tr33=((d11*d22-d21*d12)).toFixed(2);
    document.getElementById('i11').value=t11;
    document.getElementById('i12').value=t12;
    document.getElementById('i13').value=t13;
    document.getElementById('i21').value=t21;
    document.getElementById('i22').value=t22;
    document.getElementById('i23').value=t23;
    document.getElementById('i31').value=t31;
    document.getElementById('i32').value=t32;
    document.getElementById('i33').value=t33;
    document.getElementById('t11').value=d11;
    document.getElementById('t12').value=d21;
    document.getElementById('t13').value=d31;
    document.getElementById('t21').value=d12;
    document.getElementById('t22').value=d22;
    document.getElementById('t23').value=d32;
    document.getElementById('t31').value=d13;
    document.getElementById('t32').value=d23;
    document.getElementById('t33').value=d33;
    document.getElementById('ad11').value=tr11;
    document.getElementById('ad12').value=tr21;
    document.getElementById('ad13').value=tr31;
    document.getElementById('ad21').value=tr12;
    document.getElementById('ad22').value=tr22;
    document.getElementById('ad23').value=tr32;
    document.getElementById('ad31').value=tr13;
    document.getElementById('ad32').value=tr23;
    document.getElementById('ad33').value=tr33;
    det.html("det(c)="+total);
    proc.html("det(c)=(("+d11+"*"+d22+"*"+d33+")+("+d21+"*"+d32+"*"+d13+")+("+d31+"*"+d12+"*"+d23+"))-(("+d13+"*"+d22+"*"+d31+")+("+d23+"*"+d32+"*"+d11+")+("+d33+"*"+d12+"*"+d21+"))");
     }else{
          alert("no existe inversa porque det(c)=0");
          Modificar();
     }
 }
 function Modificar(){
    document.getElementById('c11').value="";
    document.getElementById('c12').value="";
    document.getElementById('c13').value="";
    document.getElementById('c21').value="";
    document.getElementById('c22').value="";
    document.getElementById('c23').value="";
    document.getElementById('c31').value="";
    document.getElementById('c32').value="";
    document.getElementById('c33').value="";
    document.getElementById('i11').value="";
    document.getElementById('i12').value="";
    document.getElementById('i13').value="";
    document.getElementById('i21').value="";
    document.getElementById('i22').value="";
    document.getElementById('i23').value="";
    document.getElementById('i31').value="";
    document.getElementById('i32').value="";
    document.getElementById('i33').value="";
    document.getElementById('producto').hidden=true;
    document.getElementById('suma').hidden=true;
    document.getElementById('resta').hidden=true;
    document.getElementById('pasos').hidden=true;
    document.getElementById('mostrarPasos').disabled=true;


 }
 function validarBoton(){
  var c11=document.getElementById('c11').value;
  var c12=document.getElementById('c12').value;
  var c13=document.getElementById('c13').value;
  var c21=document.getElementById('c21').value;
  var c22=document.getElementById('c22').value;
  var c23=document.getElementById('c23').value;
  var c31=document.getElementById('c31').value;
  var c32=document.getElementById('c32').value;
  var c33=document.getElementById('c33').value;
 if (c11.length>0 || c12.length>0 || c13.length>0 || c21.length>0 || c22.length>0 || c23.length>0 || c31.length>0 || c32.length>0 || c33.length>0) {
      document.getElementById('btnInversa').disabled=false;
      document.getElementById('btnModificar').disabled=false;
 }else{
      document.getElementById('btnInversa').disabled=true;
      document.getElementById('btnModificar').disabled=true;
 }

}
function pasos(){
  document.getElementById('pasos').hidden=false;

}
function filterFloat(evt,input){
    var key = window.Event ? evt.which : evt.keyCode;    
    var chark = String.fromCharCode(key);
    var tempValue = input.value+chark;
    if(key >= 48 && key <= 57){
        if(filter(tempValue)=== false){
            return false;
        }else{       
            return true;
        }
    }else{
          if(key == 8 || key == 13 || key == 0) {     
              return true;              
          }else if(key == 46){
                if(filter(tempValue)=== false){
                    return false;
                }else{       
                    return true;
                }
          }else{
              return false;
          }
    }
}
function filter(__val__){
    var preg = /^([0-9]+\.?[0-9]{0,2})$/; 
    if(preg.test(__val__) === true){
        return true;
    }else{
       return false;
    }
    
}
