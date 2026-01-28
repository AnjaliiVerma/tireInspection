const building = [
  
  { casing:'XT106316', date:'01/07/2025 06:56', serial:'PFK17143', pattern:'RZM530L', service:'Retread', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106317', date:'01/07/2025 06:56', serial:'PFK16752', pattern:'RZM530L', service:'Claim', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'XT106318', date:'01/07/2025 06:56', serial:'PFK17145', pattern:'RZM530L', service:'Repair', retreadDesign:'RUZI - RZM530L', comments:'' },
  { casing:'RP005447', date:'28/06/2025 10:33', serial:'AC232305151', pattern:'REPAIR', service:'Repair', retreadDesign:'', comments:'' },
  { casing:'RP005450', date:'30/06/2025 18:05', serial:'032255', pattern:'REPAIR', service:'Repair', retreadDesign:'BREMELS - VIKING 3', comments:'' },

  { casing:'XT106162', date:'28/06/2025 08:28', serial:'010A210470', pattern:'VIKING 3', service:'Claim', retreadDesign:'BREMELS - VIKING 3', comments:'' },
  
];

// Render Cards
const buildinglist = document.getElementById("buildingList");

// create table structure once
buildinglist.innerHTML = `
  <div class="table-responsive">
    <table class="table table-bordered table-hover align-middle bg-white">
      <thead class="table-light">
        <tr>
          <th>Casing No</th>
          <th>Date</th>
          <th>Serial</th>
          <th>Pattern</th>
          <th>Retread Design</th>
          <th>Service</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody id="buildingTableBody"></tbody>
    </table>
  </div>
`;

const tbody1 = document.getElementById("buildingTableBody");

// render table rows
building.forEach(item => {
  tbody1.innerHTML += `
    <tr>
      <td><strong>${item.casing}</strong></td>
      <td>${item.date}</td>
      <td>${item.serial}</td>
      <td>${item.pattern}</td>
      <td>${item.retreadDesign || '-'}</td>
      <td>
        <span class="badge ${
          item.service === 'Claim'
            ? 'bg-warning text-dark'
            : 'bg-primary'
        }">
          ${item.service}
        </span>
      </td>
      <td class="text-center">
        <button class="btn btn-danger btn-sm"
          onclick="openModal('${item.casing}','${item.serial}')">
          Inspect <i class="bi bi-chevron-right"></i>
        </button>
      </td>
    </tr>
  `;
});

