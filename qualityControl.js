// Date
document.getElementById("today").innerText = new Date().toLocaleDateString();

// Inspection Data
const inspections = [
  { casing:'XT49160', date:'24/02/2023 09:15', serial:'08664715', pattern:'UD3/3L', service:'Claim',retreadDesign:'ARCTIC RT14', comments:''  },
  { casing:'XT47775', date:'20/03/2023 19:42', serial:'5030840661', pattern:'RZM530L', service:'Retread', retreadDesign:'ARCTIC RT14', comments:''},
  { casing:'XT54174', date:'03/05/2023 12:31', serial:'4210916024940', pattern:'RZL140A', service:'Claim', retreadDesign:'ARCTIC RT14',comments:''},
  { casing:'RP005433', date:'24/06/2025 16:34', serial:'ROY15927', pattern:'REPAIR', service:'Repair', retreadDesign:'', comments:'' },
  { casing:'RP005444', date:'28/06/2025 08:31', serial:'BC182305088', pattern:'REPAIR', service:'Claim', retreadDesign:'', comments:'' },
  { casing:'RP005445', date:'28/06/2025 08:31', serial:'410C220211', pattern:'REPAIR', service:'Repair', retreadDesign:'', comments:'' },
  { casing:'RP005447', date:'28/06/2025 10:33', serial:'AC232305151', pattern:'REPAIR', service:'Repair', retreadDesign:'', comments:'' },
  { casing:'RP005450', date:'30/06/2025 18:05', serial:'032255', pattern:'REPAIR', service:'Repair', retreadDesign:'', comments:'' },

  { casing:'XT106162', date:'28/06/2025 08:28', serial:'010A210470', pattern:'VIKING 3', service:'Retread', retreadDesign:'BREMELS - VIKING 3', comments:'' },

  { casing:'XT106314', date:'01/07/2025 06:56', serial:'PFK16723', pattern:'RZM530L', service:'Claim', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106315', date:'01/07/2025 06:56', serial:'PF00708', pattern:'RZM530L', service:'Retread', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106316', date:'01/07/2025 06:56', serial:'PFK17143', pattern:'RZM530L', service:'Retread', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106317', date:'01/07/2025 06:56', serial:'PFK16752', pattern:'RZM530L', service:'Claim', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106318', date:'01/07/2025 06:56', serial:'PFK17145', pattern:'RZM530L', service:'Retread', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106319', date:'01/07/2025 06:56', serial:'PFK17144', pattern:'RZM530L', service:'Repair', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106321', date:'01/07/2025 06:56', serial:'PFK16722', pattern:'RZM530L', service:'Retread', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106323', date:'01/07/2025 06:56', serial:'PFK16720', pattern:'RZM530L', service:'Repair', retreadDesign:'RUZI - RZM530L', comments:'' }
];

// Render Cards
const list = document.getElementById("inspectionList");

inspections.forEach(item => {
  list.innerHTML += `
    <div class="inspection-card">
      <div class="row align-items-center">
        <div class="col"><small>Casing No</small><h5>${item.casing}</h5></div>
        <div class="col"><small>Date</small><div>${item.date}</div></div>
        <div class="col"><small>Serial</small><div>${item.serial}</div></div>
        <div class="col"><small>Pattern</small><div>${item.pattern}</div></div>
        <div class="col"><small>Service</small><div>${item.service}</div></div>
        <div class="col"><small>Retread Design</small><div>${item.retreadDesign}</div></div>
        <div class="col"><small>Comments</small><div>${item.comments}</div></div>
        
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

// Tabs
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.closest('button').classList.add('active');

  document.getElementById("visualTab").classList.add("d-none");
  document.getElementById("nailTab").classList.add("d-none");
  document.getElementById("qcTab").classList.add("d-none");

  document.getElementById(tab + "Tab").classList.remove("d-none");
}

// Modal
function openModal(casing, serial) {
  document.getElementById("modalCasing").innerText = casing;
  document.getElementById("modalSerial").innerText = serial;
  new bootstrap.Modal(document.getElementById("approvalModal")).show();
}


