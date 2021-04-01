$(document).ready(function() {

    const stationELement=document.getElementById("listStation");
    // URL de l'API
    const API_URL='https://data.opendatasoft.com/api/records/1.0/search/?dataset=parcs-veligo-en-ile-de-france0%40datailedefrance&q=&facet=typ_veligo&facet=etat&facet=annee_mes&facet=exploitant&facet=id_ref_lda&facet=nom_lda&facet=nom_gare&facet=insee_txt&facet=nom_comm&facet=dpt&refine.annee_mes=2021'
    fetch(API_URL)
    .then(response => response.json())
    .then((data )=>{
        let stations='';
        data.records.forEach((station)=>{
            stations+=`<tr>
                <td>${station.fields.id_veligo}</td>
                <td>${station.fields.nom_veligo}</td>
                <td>${station.fields.typ_veligo}</td>
                <td>${station.fields.total}</td>
                <td>${station.fields.date_mes}</td>
                <td>${station.fields.tarif}</td>
                <td>${station.fields.nom_lda}</td>
                <td>${station.fields.lignes}</td>
                <td>${station.fields.nom_comm}</td>
                </tr>`
        });
        // DataTable initialisation
        stationELement.innerHTML=stations;
        $('#example').DataTable(
            {
                "dom": 'Bfrtip',
                "paging": true,
                "autoWidth": true,
                "buttons": [
                    'pdf'
                ]
            }
        );
    });
});
