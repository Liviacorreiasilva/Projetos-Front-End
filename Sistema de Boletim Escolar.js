<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1> Sistema de Boletim</h1>

    <p>  ESCOLA FICTICIA </p>
    <p>  PERIODO: 2° SEMESTRE DE 2022 </p>
    <table> 
        <tr>
            <th> DISCIPLINAS</th>
            <th> ATIVIDADE </th>
            <th> PROVA AV1 </th>
            <th> PROVA AV2 </th>
            <th> PROVA INTEGRADA</th>  
            <th> MEDIA FINAL </th>
            <th> SITUAÇÃO </th>
            <th> MEDIA GLOBAL</th>
        </tr>
            
    
        <div>
            <tr >
                <td class="portugues"> Portugues </td> 
                <td> <input type="text" name="nota-atividade"  class="atividade" id="nota_atividade" placeholder=""></td>
                <td> <input type="text" name="prova-av1" class="av1" id="prova_av1"  placeholder=""></td>
                <td> <input type="text" name="prova-av2" class="av2"  id="prova_av2" placeholder=""></td>
                <td> <input type="text" name="prova-integrada" id="prova_integrada"  class="integrada" placeholder=""></td>
    
                <td> <input type="hidden"   name="media"> <p class="resultado"></p></td>
                <td> <input type="hidden"  value="10"  id="situacao"> <p class="conclui"></p> </td>
                <td> <input type="hidden"  id="port_global"> <p class="Pglobal"></p> </td>
                
            </tr>
    
            <tr>
                <td class="Matematica"> Matematica </td> 
                <td> <input type="text" name="nota-atividade"  class="Amatematica" id="nota_atividade" placeholder=" "></td>
                <td> <input type="text" name="prova-av1" class="Av1matematica" id="prova_av1"  placeholder=""></td>
                <td> <input type="text" name="prova-av2" class="AV2matematica"  id="prova_av2" placeholder=""></td>
                <td> <input type="text" name="prova-integrada" id="prova_integrada"  class="Imatematica" placeholder=""></td>
    
                <td> <input type="hidden"   name="media"> <p class="Mresultado"></p></td>
                <td> <input type="hidden"  value="10"  id="situacao"> <p class="Mconclui"></p> </td>
                <td> <input type="hidden" id="mat_global"> <p class="Mglobal"></p> </td>
            </tr>

            <tr>
                <td class="Biologia"> Biologia </td> 
                <td> <input type="text" name="nota-atividade"  class="Abiologia" id="nota_atividade" placeholder=" "></td>
                <td> <input type="text" name="prova-av1" class="Av1biologia" id="prova_av1"  placeholder=""></td>
                <td> <input type="text" name="prova-av2" class="AV2biologia"  id="prova_av2" placeholder=""></td>
                <td> <input type="text" name="prova-integrada" id="prova_integrada"  class="Ibiologia" placeholder=""></td>
    
                <td> <input type="hidden"   name="media"> <p class="Bresultado"></p></td>
                <td> <input type="hidden"  value="10"  id="situacao"> <p class="Bconclui"></p> </td>
                <td> <input type="hidden" id="bio_global"> <p class="Bglobal"></p> </td>
            </tr>

            <tr>
                <td class="Fisica"> Fisica </td> 
                <td> <input type="text" name="nota-atividade"  class="Afisica" id="nota_atividade" placeholder=" "></td>
                <td> <input type="text" name="prova-av1" class="Av1fisica" id="prova_av1"  placeholder=""></td>
                <td> <input type="text" name="prova-av2" class="AV2fisica"  id="prova_av2" placeholder=""></td>
                <td> <input type="text" name="prova-integrada" id="prova_integrada"  class="Ifisica" placeholder=""></td>
    
                <td> <input type="hidden"   name="media"> <p class="Fresultado"></p></td>
                <td> <input type="hidden"  value="10"  id="situacao"> <p class="Fconclui"></p> </td>
                <td> <input type="hidden" id="fisica_global"> <p class="Fglobal"></p> </td>
            </tr>

            <tr>
                <td class="Quimica"> Quimica </td> 
                <td><input type="text" name="nota-atividade" class="Aquimica" id="nota_atividade" placeholder="" ></td>
                <td> <input type="text" name="prova-av1" class="Av1quimica" id="prova_av1"  placeholder=""></td>
                <td> <input type="text" name="prova-av2" class="AV2quimica"  id="prova_av2" placeholder=""></td>
                <td> <input type="text" name="prova-integrada" id="prova_integrada"  class="Iquimica" placeholder=""></td>
    
                <td> <input type="hidden"   name="media"> <p class="Qresultado"></p></td>
                <td> <input type="hidden"  value="10"  id="situacao"> <p class="Qconclui"></p> </td>
                <td> <input type="hidden" id="quimica_global"> <p class="Qglobal"></p> </td>
            
            </tr>

            <tr>
                <td class="Historia"> Historia </td> 
                <td><input type="text" name="nota-atividade" class="Ahistoria" id="nota_atividade" placeholder="" ></td>
                <td> <input type="text" name="prova-av1" class="Av1historia" id="prova_av1"  placeholder=""></td>
                <td> <input type="text" name="prova-av2" class="AV2historia"  id="prova_av2" placeholder=""></td>
                <td> <input type="text" name="prova-integrada" id="prova_integrada"  class="Ihistoria" placeholder=""></td>
    
                <td> <input type="hidden"   name="media"> <p class="Hresultado"></p></td>
                <td> <input type="hidden"  value="10"  id="situacao"> <p class="Hconclui"></p> </td>
                <td> <input type="hidden" id="H_global"> <p class="Hglobal"></p> </td>
            
            </tr>
        </div>
    </table>
    <form>
        <button type="button" id="btn_resultado" onclick="clicar()"> Concluir </button>
    </form>
       
       <script lang="JavaScript">
        function clicar() {  //querySelector para selecionar as classes do html//

            //  MATERIA DE PORTUGUES//
            var atividade= document.querySelector(".atividade").value; 
            var av1=document.querySelector(".av1").value;
            var av2= document.querySelector(".av2").value;
            var integrada= document.querySelector(".integrada").value;
            var situacao= document.querySelector(".conclui").value;

            //ira calcular as notas da atividade, av1, av2,integrada, ira dividir por 2 e dara a media final/
            var resultado= parseInt(atividade)+ parseInt(av1)+ parseInt(av2)+ parseInt(integrada);
            document.querySelector(".resultado").innerHTML=resultado/4;


            //situaçao// pegará a media. se for maior que 6 ou igual ta aprovado; se for menor ta reprovado
            var conclui= document.querySelector(".resultado").innerHTML=resultado/4;
            document.querySelector(".conclui").innerHTML= (conclui >=6) ? "Aprovado" : "Reprovado";


            // media global: pega a media de cada materia e divide//
             // pelo 5 q é a quantidade de materias//
             var materiaport = parseInt(atividade)+ parseInt(av1)+ parseInt(av2)+ parseInt(integrada);
             document.querySelector(".Pglobal").innerHTML=  materiaport/5;


            //  MATERIA DE MATEMATICA//
            var Amatematica= document.querySelector(".Amatematica").value;
            var Av1matematica= document.querySelector(".Av1matematica").value;
            var AV2matematica= document.querySelector(".AV2matematica").value;
            var Imatematica= document.querySelector(".Imatematica").value;
              // media de metematica//
            var Mresultado= parseInt(Amatematica)+ parseInt(Av1matematica)+ parseInt(AV2matematica)+ parseInt(Imatematica);
            document.querySelector(".Mresultado").innerHTML=Mresultado/4;
                // situacao// 
            var Mconclui= document.querySelector(".Mresultado").innerHTML=Mresultado/4;
            document.querySelector(".Mconclui").innerHTML= (Mconclui >=6) ? "Aprovado" : "Reprovado";

            // media global de matematica// - soma tds as medias de tds as materia e divide//
            var materiamat= parseInt(Amatematica)+ parseInt(Av1matematica)+ parseInt(AV2matematica)+ parseInt(Imatematica);
             document.querySelector(".Mglobal").innerHTML=  materiamat/5;

             // MATERIA DE BIOLOGIA//
             var Abiologia= document.querySelector(".Abiologia").value;
             var Av1biologia= document.querySelector(".Av1biologia").value;
             var AV2biologia= document.querySelector(".AV2biologia").value;
             var Ibiologia= document.querySelector(".Ibiologia").value;
              // media de biologia//
            var Bresultado= parseInt(Abiologia) + parseInt(Av1biologia)+parseInt(AV2biologia)+ parseInt(Ibiologia);
            document.querySelector(".Bresultado").innerHTML=Bresultado/4;
            // situacao biologia//
            var Bconclui= document.querySelector(".Bresultado").innerHTML=Bresultado/4;
            document.querySelector(".Bconclui").innerHTML= (Bconclui >=6) ? "Aprovado" : "Reprovado";
            // media global de biologia // - soma tds as materias e divide//
            var materiabio= parseInt(Abiologia) + parseInt(Av1biologia)+ parseInt(AV2biologia)+parseInt(Ibiologia);
            document.querySelector(".Bglobal").innerHTML=materiabio/5;

            // MATERIA FÍSICA //
            var Afisica= document.querySelector(".Afisica").value;
            var Av1fisica= document.querySelector(".Av1fisica").value;
            var AV2fisica= document.querySelector(".AV2fisica").value;
            var Ifisica= document.querySelector(".Ifisica").value;
            // media de fisica//
            var Fresultado= parseInt(Afisica)+ parseInt(Av1fisica)+ parseInt(AV2fisica)+parseInt(Ifisica);
            document.querySelector(".Fresultado").innerHTML=Fresultado/4;
            // situacao fisica //
            var Fconclui= document.querySelector(".Fresultado").innerHTML=Fresultado/4;
            document.querySelector(".Fconclui").innerHTML=(Fconclui >=6) ? "Aprovado" : "Reprovado";
            // media global de fisica // - soma de tds as materias e divide//
            var materiafis= parseInt(Afisica)+ parseInt(Av1fisica)+ parseInt(AV2fisica)+ parseInt(Ifisica);
            document.querySelector(".Fglobal").innerHTML=materiafis/5;

            // MATERIA QUIMICA //
            var Aquimica= document.querySelector(".Aquimica").value;
            var Av1quimica= document.querySelector(".Av1quimica").value;
            var AV2quimica= document.querySelector(".AV2quimica").value;
            var Iquimica= document.querySelector(".Iquimica").value;
            // media quimica //
            var Qresultado= parseInt(Aquimica)+ parseInt(Av1quimica)+parseInt(AV2quimica)+parseInt(Iquimica);
            document.querySelector(".Qresultado").innerHTML=Qresultado/4;
            // Situacao de quimica //
            var Qconclui= document.querySelector(".Qresultado").innerHTML=Qresultado/4;
            document.querySelector(".Qconclui").innerHTML=( Qconclui >=6) ? "Aprovado" : "Reprovado";
            // media global quimica // - soma tds as materias e divid//
            var materiasquim= parseInt(Aquimica) + parseInt(Av1quimica)+ parseInt(AV2quimica)+ parseInt(Ifisica);
            document.querySelector(".Qglobal").innerHTML=materiasquim/5;

           // MATERIA HISTORIA //
           var Ahistoria= document.querySelector(".Ahistoria").value;
            var Av1historia= document.querySelector(".Av1historia").value;
            var AV2historia= document.querySelector(".AV2historia").value;
            var Ihistoria= document.querySelector(".Ihistoria").value;
            // media historia //
            var Hresultado= parseInt(Ahistoria)+ parseInt(Av1historia)+parseInt(AV2historia)+parseInt(Ihistoria);
            document.querySelector(".Hresultado").innerHTML=Hresultado/4;
            // Situacao de historia //
            var Hconclui= document.querySelector(".Hresultado").innerHTML=Hresultado/4;
            document.querySelector(".Hconclui").innerHTML=( Hconclui >=6) ? "Aprovado" : "Reprovado";
            // media global historia // - soma tds as medias das materias e divid//
            var materiashi= parseInt(Ahistoria)+ parseInt(Av1historia)+ parseInt(AV2historia)+parseInt(Ihistoria);
            document.querySelector(".Hglobal").innerHTML=materiashi/5;
         }
       </script>
    
    <style type="text/css">

        body{
            background-color: rgb(161, 226, 206);
        }
        table{
            width: 120%; 
        }
        table, th , td{  /*th = disciplinas,etc*/  /*td = portugues,etc*/
            border: 1px solid black;
            border-collapse: collapse; /*estilo linha na borda*/
            background-color: white;
        }
        th{ /* th= disciplinas, atividade, prova*/
            background-color: rgb(255, 245, 131);
            text-align: center;
        }
        td{ /* td= nomes das materias*/
            text-align: auto;
        }
        h1{
            text-align: center;
        }
        p{
            font-size: 15px;
            font-family: 'Arial Narrow Bold';
        }
        .portugues{
            background-color: rgb(245, 244, 244);
        }
        .Matematica{
            background-color: rgb(245, 244, 244);
        }
        .Biologia{
            background-color: rgb(245, 244, 244);
        }
        .Quimica{
            background-color: rgb(245, 244, 244);
        }
        .Fisica{
            background-color: rgb(245, 244, 244);
        }
        .Historia{
            background-color: rgb(245, 244, 244);
        }
        #nota_atividade{
            border: none;
            text-align: center;
        }
        #prova_av1{
            border: none;
            text-align: center;
        }
        #prova_av2{
            border: none;
            text-align: center;
        }
        #prova_integrada{
            border: none;
            text-align: center;
        }
        /* materia portugues*/
        .resultado{
            border: none;
            text-align: center;
        }
        .conclui{
            border: none;
            text-align: center;
        }
        .Pglobal{
            border: none;
            text-align: center;
        }
        /* demais materias*/
        .Mresultado{
            border: none;
            text-align: center;
        }
        .Mconclui{
            border: none;
            text-align: center;
        }
        .Mglobal{
            border: none;
            text-align: center;
        }
        .Bresultado{
            border: none;
            text-align: center;
        }
        .Bconclui{
            border: none;
            text-align: center;
        }
        .Bglobal{
            border: none;
            text-align: center;
        }
        .Fresultado{
            border: none;
            text-align: center;
        }
        .Fconclui{
            text-align: center;
            border: none;
        }
        .Fglobal{
            border: none;
            text-align: center;
        }
        .Qresultado{
            text-align: center;
            border: none;
        }
        .Qconclui{
            text-align: center;
            border: none;
        }
        .Qglobal{
            text-align: center;
            border: none;
        }
        .Hresultado{
            text-align: center;
            border: none;
        }
        .Hconclui{
            text-align: center;
            border: none;
        }
        .Hglobal{
            text-align: center;
            border: none;
        }

        #btn_resultado{
            color: black;
            background-color: antiquewhite;
            margin-top: 5px;
            border: 1px solid rgb(218, 138, 82);
            cursor: pointer;
            margin-left: 50%;
            margin-top: 10%;
        }
    </style>
</body>
</html>
