var result = document.querySelector("#result");
var sueldo = document.querySelector("#sueldo").value;
document.querySelector("#btn").addEventListener("click", () =>{
    if(sueldo > 0 && sueldo  <= 1000){
      var suel1 = sueldo * 0.15;
      var suel11 = Number(sueldo) + Number(suel1);
      result.innerHTML = suel11;
    }else if(sueldo >= 1001 && sueldo <= 1200){
      var suel2 = sueldo * 0.12;
      var suel22 = Number(sueldo) + Number(suel2);
      result.innerHTML = suel22;
    }else if(sueldo >= 1201 && sueldo <= 1400){
      var suel3 = sueldo * 0.10;
      var suel33 = Number(sueldo) + Number(suel3);
      result.innerHTML = suel33;
    }else if(sueldo >= 1401 && sueldo <= 1500){
      var suel4 = sueldo * 0.8;
      var suel44 = Number(sueldo) + Number(suel4);
      result.innerHTML = suel44;
    }else if(sueldo > 1501){
      var suel5 = sueldo * 0.5;
      var suel55 = Number(sueldo) + Number(suel5);
      result.innerHTML = suel55;
    }else{
      result.innerHTML = "Favor de ingresar algun valor";
    }
});
