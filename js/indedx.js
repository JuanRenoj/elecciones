const votosPorComunidad={
    chivarreto:0,
    sanAntonio:0,
    rancho:0,
    tacajalve:0,
    chirrenox:0,
    pabatoc:0,
    pachaj:0,
    chuichaj:0,
    palemop:0,
    centro:0,
    paxixil:0,
    sacmixit:0

}

document.querySelector("#chivarreto").addEventListener('click',()=>{
    votosPorComunidad.chivarreto +=1;
    document.querySelector("#votos_chivarreto").innerHTML=displayVotos(votosPorComunidad.chivarreto);
    const progress=document.querySelector("#progress_chivarreto");
    progress.style.width=`${votosPorComunidad.chivarreto}%`
});

document.querySelector("#sanAntonio").addEventListener('click',()=>{
    votosPorComunidad.sanAntonio +=1;
    document.querySelector("#votos_sanAntonio").innerHTML=displayVotos(votosPorComunidad.sanAntonio);
    const progress=document.querySelector("#progress_sanAntonio");
    progress.style.width=`${votosPorComunidad.sanAntonio}%`
});

document.querySelector("#rancho").addEventListener('click',()=>{
    votosPorComunidad.rancho +=1;
    document.querySelector("#votos_rancho").innerHTML=displayVotos(votosPorComunidad.rancho);
    const progress=document.querySelector("#progress_rancho");
    progress.style.width=`${votosPorComunidad.rancho}%`
});

document.querySelector("#tacajalve").addEventListener('click',()=>{
    votosPorComunidad.tacajalve +=1;
    document.querySelector("#votos_tacajalve").innerHTML=displayVotos(votosPorComunidad.tacajalve);
    const progress=document.querySelector("#progress_tacajalve");
    progress.style.width=`${votosPorComunidad.tacajalve}%`
});

document.querySelector("#chirrenox").addEventListener('click',()=>{
    votosPorComunidad.chirrenox +=1;
    document.querySelector("#votos_chirrenox").innerHTML=displayVotos(votosPorComunidad.chirrenox);
    const progress=document.querySelector("#progress_chirrenox");
    progress.style.width=`${votosPorComunidad.chirrenox}%`
});

document.querySelector("#pabatoc").addEventListener('click',()=>{
    votosPorComunidad.pabatoc +=1;
    document.querySelector("#votos_pabatoc").innerHTML=displayVotos(votosPorComunidad.pabatoc);
    const progress=document.querySelector("#progress_pabatoc");
    progress.style.width=`${votosPorComunidad.pabatoc}%`
});

document.querySelector("#pachaj").addEventListener('click',()=>{
    votosPorComunidad.pachaj +=1;
    document.querySelector("#votos_pachaj").innerHTML=displayVotos(votosPorComunidad.pachaj);
    const progress=document.querySelector("#progress_pachaj");
    progress.style.width=`${votosPorComunidad.pachaj}%`
});

document.querySelector("#chuichaj").addEventListener('click',()=>{
    votosPorComunidad.chuichaj +=1;
    document.querySelector("#votos_chuichaj").innerHTML=displayVotos(votosPorComunidad.chuichaj);
    const progress=document.querySelector("#progress_chuichaj");
    progress.style.width=`${votosPorComunidad.chuichaj}%`
});

document.querySelector("#palemop").addEventListener('click',()=>{
    votosPorComunidad.palemop +=1;
    document.querySelector("#votos_palemop").innerHTML=displayVotos(votosPorComunidad.palemop);
    const progress=document.querySelector("#progress_palemop");
    progress.style.width=`${votosPorComunidad.palemop}%`
});

document.querySelector("#centro").addEventListener('click',()=>{
    votosPorComunidad.centro +=1;
    document.querySelector("#votos_centro").innerHTML=displayVotos(votosPorComunidad.centro);
    const progress=document.querySelector("#progress_centro");
    progress.style.width=`${votosPorComunidad.centro}%`
});

document.querySelector("#paxixil").addEventListener('click',()=>{
    votosPorComunidad.paxixil +=1;
    document.querySelector("#votos_paxixil").innerHTML=displayVotos(votosPorComunidad.paxixil);
    const progress=document.querySelector("#progress_paxixil");
    progress.style.width=`${votosPorComunidad.paxixil}%`
});

document.querySelector("#sacmixit").addEventListener('click',()=>{
    votosPorComunidad.sacmixit +=1;
    document.querySelector("#votos_sacmixit").innerHTML=displayVotos(votosPorComunidad.sacmixit);
    const progress=document.querySelector("#progress_sacmixit");
    progress.style.width=`${votosPorComunidad.sacmixit}%`
});

function displayVotos(votos){
    return votos > 1 ? `${votos} votos` : `${votos} voto`
}