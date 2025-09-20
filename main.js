


// // shift + al + A 
// let validonombre = true // para validar npmbre
// let validomail = true
// let = mescorrecto = true// para el while del mes 
// let datoscorrectos = true // do while para validar datos de usuario
// let lugar_correcto = true // para el do del lugar de consulta. Verifica valor ingresado
// let diacorrecto = true //para dia de consulta
// let horacorrecto = true //para Horarios de consulta
// let nombreyapellido = "" // almaceno los datos de forma global
// let tumail ="" // para almacenar el mail del usuario
// let horarios = 8 // para trabajar con los horarios de consulta
// let valor_horario = "" // inicio el primer horario
// let lugarconsulta = "" // guardo dond sera la consulta
// let mesdeconsulta= "" // para guaradar el mes de forma global
// let diadeconsulta ="" // para guaradar el dia de forma global, nuemro
// let diadelasemana=""// para guaradar el dia de forma global, string, L,M etc
// let horariodeconsulta ="" // para guaradar la hora de forma global
// const mes_de_consulta = [
//     "1-Enero", 
//     "2-Febrero",
//     "3-Marzo", 
//     "4-Abril", 
//     "5-Mayo",
//     "6-Junio",
//     "7-Julio", 
//     "8-Agosto", 
//     "9-Setiembre",
//     "10-Octubre", 
//     "11-Noviembre",
//     "12-Diciembre"
// ]
// const fecha_consulta_setiembre = [
//     "Lunes: 1-8-15-22-29",
//     "Martes: 2-9-16-23-30", 
//     "Miercoles: 3-10-17-24",
//     "Jueves: 4-11-18-25",
//     "Viernes: 5-12-19-26"
// ]
// const dia_de_consulta = ["1-Lunes","2-Martes","3-Miercoles","4-Jueves","5-Viernes","6-Sábado"]
// // para que ingrese sus datos el usuario y los valide
// function validar(valor){
//     if (valor == "nombre"){
//         do {
//             let tunombre = prompt("Bienvenidos.\nIngresa tu nombre/s y apellido ","Nombre/s y apellido")
//             nombreyapellido = tunombre// almaceno los datos de forma global
//             if(tunombre.length <= 0 ) { // para verificar que se ingrese un dato
//                 alert("Ingresa datos válidos :)")
//             }else{ validonombre = false } 
//         } while (validonombre)
//     } else if(valor == "mail"){
//         do { 
//             let mail = prompt("ingresa una direccion de correo válida.","tumail@.....") 
//             tumail = mail // para almacenar el mail del usuario
//             if (mail.length <=0){
//                 alert("Ingresa datos válidos :)")
//             } else{validomail = false}
//         } while(validomail)
//     }
    
// }
// function lugar_de_consulta(){
//     do{
//         let lugar = parseInt(prompt("Elige tu lugar de consulta:\n1_Capital Federal(Caballito)\n2_Vicente Lopez(Carapchay)",1))
//     if(lugar==1){
//         lugarconsulta = "Capital Federal (Caballito)"// guardo dond sera la consulta
//         lugar_correcto = false
//         }else if(lugar==2){lugarconsulta = "Vicente Lopez (Carapchay)"// guardo dond sera la consulta
//             lugar_correcto = false
//         }else{lugar_correcto = true}
//     }while(lugar_correcto)
//     console.log("El lugar de consulta es:\n"+lugarconsulta)
//     } 
// //para saber el mes de la consulta 
// function mes_consulta() {
//     let mesconsulta = parseInt(prompt("Seleccione el mes de consulta.\nSolo para setiembre.\n"+mes_de_consulta.join("\n"),9))
//     mesdeconsulta = mesconsulta
//     while(mescorrecto){
//         if(mesdeconsulta > 0 && mesdeconsulta <=12){
//             mescorrecto = false
//             //console.log("El mes de la consulta es:\n"+mes_de_consulta[mesdeconsulta-1])
//         }else{
//             alert("Ingrese el número del mes.\nPor ejemplo 1 para enero.")
//             let mesconsulta = parseInt(prompt("Seleccione el número del mes.\n"+mes_de_consulta.join("\n"),9))
//             mesdeconsulta = mesconsulta
//             mescorrecto = true

//         }
// }
// }
// // para validar datos del dái
// function validar_dia (){
//     let diaconsulta = parseInt(prompt("Seleccione la fecha de consulta.\nSolo para setiembre.\n"+fecha_consulta_setiembre.join("\n")))
//     diadeconsulta = diaconsulta //guardo en una variable global
//     while(diacorrecto){
//         if(diadeconsulta > 0 && diadeconsulta <=30){
//             diacorrecto = false
//         }else{
//             alert("Ingrese el número la fecha correcta.")
//             let diaconsulta = parseInt(prompt("Seleccione la fecha de consulta.\n"+fecha_consulta_setiembre.join("\n")))
//             diadeconsulta = diaconsulta //guardo en una variable global
//         }
//     }   //para asignar un dia al número(fecha) 
//         if(diadeconsulta == 2 || diadeconsulta == 9 || diadeconsulta == 16 || diadeconsulta == 23 || diadeconsulta == 30){
//             diadelasemana = "lunes"
//             //console.log("La fecha es lunes:"+diadeconsulta)
//         }else if(diadeconsulta == 3 || diadeconsulta == 10 || diadeconsulta == 17 || diadeconsulta == 24){
//             diadelasemana = "martes"
//             //console.log("La fecha es martes:"+diadeconsulta)
//         }else if(diadeconsulta == 4 || diadeconsulta == 11 || diadeconsulta == 18 || diadeconsulta == 25){
//             diadelasemana = "miercoles"
//             //console.log("La fecha es miercoles:"+diadeconsulta)
//         }else if(diadeconsulta == 5 || diadeconsulta == 12 || diadeconsulta == 19 || diadeconsulta == 26){
//             diadelasemana = "jueves"
//             //console.log("La fecha es jueves:"+diadeconsulta)
//         }else if(diadeconsulta == 6 || diadeconsulta == 13 || diadeconsulta == 20 || diadeconsulta == 27){
//             diadelasemana = "viernes"
//             //console.log("La fecha es viernes:"+diadeconsulta)
//         }
// }
// //psra cargar los horarios
// function validar_hora (){
//     while(horacorrecto){
//         for (let i= 0 ;i<9; i ++) {
//             horarios = horarios + 1
//             valor_horario = valor_horario   + "\n" + horarios + " hs"
//         }

//         let horaconsulta = parseInt(prompt("Selecione la hora de consulta\n"+valor_horario))
//         horariodeconsulta = horaconsulta // para guaradar la hora de forma global
        
//         if(horariodeconsulta >= 9 && diadeconsulta <=17){
//             horacorrecto = false  
//             //console.log(horaconsulta+":00 hs")
//         }else{
//             alert("Ingrese el horario correcto.")
//             horariodeconsulta = 0
//             horacorrecto = true
//             horarios = 8
//         }
        
//     }
// }
// function resultado(){
//     let cadena =""
//     let i = 0
//     cadena = mes_de_consulta[mesdeconsulta-1]
//     i= cadena.length
//     console.log("La fecha de consulta es el día "+diadelasemana+" "+diadeconsulta+" de "+cadena.slice(2,i)+" a las "+horariodeconsulta+ ":00 hs")
    
//     alert("Tus datos son:\n"+"Nombre/s y apellido: "+nombreyapellido+"\nTu dirección de mail es: "+tumail)
//     alert("El lugar de consulta es: "+lugarconsulta+"\n"+"La fecha de consulta es el día "+diadelasemana+" "
//         +diadeconsulta+" de "+cadena.slice(2,i)+" a las "+horariodeconsulta+ ":00 hs")
// } 
// validar("nombre")
// validar("mail")
// console.log("Tus datos son:\n"+"Nombre/s y apellido: "+nombreyapellido+"\nTu dirección de mail es: "+tumail)
// // para seleccionar el lugar de consulta
// lugar_de_consulta()
// //guarda y valida el numero de  mes
// mes_consulta()
// validar_dia()
// validar_hora()
// resultado()
