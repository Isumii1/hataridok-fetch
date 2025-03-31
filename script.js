let json = [];
window.addEventListener("DOMContentLoaded",async()=>{
    const betoltes = await fetch('data.json');
    json = await betoltes.json();
    setInterval(() => {
        kepernyoBetoltes(json);
    }, 1000);
});

function kepernyoBetoltes(){
    const tarolo = document.getElementById("tarolo");
    tarolo.innerHTML='';
    json.forEach(element => {
        const now = new Date();
        const date = new Date(element.date);
        const diff = date-now;
        if(diff>0){
            const diffDate=new Date(diff);
            const nap = Math.floor(diff/(1000*60*60*24));
            const ora= diffDate.getUTCHours();
            const perc= diffDate.getUTCMinutes();
            const mp = diffDate.getUTCSeconds();
            tarolo.innerHTML+=kartya(element.title, nap, ora, perc, mp);
        }
    });
};

function kartya(cim, nap, ora, perc, mp){
    let szin = 'sarga';
    if(nap<=30) szin = 'piros';
    if(nap>=60) szin = 'zold';
    return`
    <div class="col">
        <div class="h-100 rounded shadow p-4 blur ${szin}">
            <div class="fw-bold fs-2 text-center">${cim}</div>
            <div class="row row-cols-4">
                <div class="col text-center">
                    <div class="fw-bold display-5">${nap}</div>
                    <div>nap</div>
                </div>
                <div class="col text-center">
                    <div class="display-5">${ora}</div>
                    <div>óra</div>
                </div>
                <div class="col text-center">
                    <div class="display-5">${perc}</div>
                    <div>perc</div>
                </div>
                <div class="col text-center">
                    <div class="display-5">${mp}</div>
                    <div>mp</div>
                </div>
            </div>
        </div>
    </div>
    `
};