const building = [
  
   { casing:'XT106316', date:'01/07/2025 06:56', serial:'PFK17143', pattern:'RZM530L', service:'Retread', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106317', date:'01/07/2025 06:56', serial:'PFK16752', pattern:'RZM530L', service:'Claim', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106318', date:'01/07/2025 06:56', serial:'PFK17145', pattern:'RZM530L', service:'Repair', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'RP005447', date:'28/06/2025 10:33', serial:'AC232305151', pattern:'REPAIR', service:'Repair', retreadDesign:'', comments:'' },
  { casing:'RP005450', date:'30/06/2025 18:05', serial:'032255', pattern:'REPAIR', service:'Repair', retreadDesign:'BREMELS - VIKING 3', comments:'' },

  { casing:'XT106162', date:'28/06/2025 08:28', serial:'010A210470', pattern:'VIKING 3', service:'Claim', retreadDesign:'BREMELS - VIKING 3', comments:'' },
  
];

// Render Cards
const buildinglist = document.getElementById("builingingList");

building.forEach(item => {
  buildinglist.innerHTML += `
    <div class="inspection-card">
      <div class="row align-items-center">
        <div class="col"><small>Casing No</small><h5>${item.casing}</h5></div>
        <div class="col"><small>Date</small><div>${item.date}</div></div>
        <div class="col"><small>Serial</small><div>${item.serial}</div></div>
        <div class="col"><small>Pattern</small><div>${item.pattern}</div></div>
        <div class="col"><small>Retread Design</small><div>${item.retreadDesign}</div></div>
        <div class="col">
          <span class="badge ${item.service === 'Claim' ? 'bg-warning text-dark' : 'bg-primary'}">
            ${item.service}
          </span>
        </div>
        <div class="col-auto">
          <button class="btn btn-danger"
            onclick="openModal('${item.casing}','${item.serial}')">
            Inspect <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
});
