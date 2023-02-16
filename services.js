// loadClient();
var vehicles = [];
var rcNo = [];
var image = '';
var b1data = '<input type="button" class="btn btn-primary" value="Add Vehicle" id="add" onclick="getVehicleDetails()"></input>';
document.getElementById("error").innerHTML = "";
function getVehicleDetails() {
    document.getElementById("b1").innerHTML = "Searching for the given registration number...."
    document.getElementById("error").innerHTML = "";
    const data = JSON.stringify({
        "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",
        "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        "data": {
            "rc_number": document.getElementById("rc").value.replaceAll(' ', '')
        }
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var data = JSON.parse(this.responseText);
            if (data.error == "BAD_REQUEST") {
                document.getElementById("b1").innerHTML = b1data;
                if (data.message == "Malformed Request") {
                    document.getElementById("error").innerHTML = "Please Enter Your Registration Number.";
                } else {
                    document.getElementById("error").innerHTML = data.message;
                }
            } else if (data.result.extraction_output.registration_number == null) {
                document.getElementById("b1").innerHTML = b1data;
                document.getElementById("error").innerHTML = "Please A valid Registration Number.";
            }
            else {
                document.getElementById("error").innerHTML = "";
                if (rcNo.includes(data.result.extraction_output.registration_number)) {
                    document.getElementById("b1").innerHTML = b1data;
                    document.getElementById("error").innerHTML = "This vehicle is already added in your list";
                } else {
                    document.getElementById("b1").innerHTML = "Adding this vehicle in your list";
                    console.log(data);
                    addvehicleData(data);
                }
            }
        }
    });

    xhr.open("POST", "https://rc-verification.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_rc_plus");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("X-RapidAPI-Key", "783c8e21b2msh39ac9dc22b315b4p1a5b81jsnc2fd4650956a");
    xhr.setRequestHeader("X-RapidAPI-Host", "rc-verification.p.rapidapi.com");

    xhr.send(data);
}

function addvehicleData(data) {
    document.getElementById("error").innerHTML = "";
    var vehicleData = {
        noc_valid_upto: data.result.extraction_output.noc_valid_upto,
        registration_number: data.result.extraction_output.registration_number,
        seating_capacity: data.result.extraction_output.seating_capacity,
        fitness_upto: data.result.extraction_output.fitness_upto,
        variant: data.result.extraction_output.variant,
        npermit_upto: data.result.extraction_output.npermit_upto,
        manufacturer_model: data.result.extraction_output.manufacturer_model,
        standing_capacity: data.result.extraction_output.standing_capacity,
        status: data.result.extraction_output.status,
        status_message: data.result.extraction_output.status_message,
        number_of_cylinder: data.result.extraction_output.number_of_cylinder,
        colour: data.result.extraction_output.colour,
        puc_valid_upto: data.result.extraction_output.puc_valid_upto,
        vehicle_class: data.result.extraction_output.vehicle_class,
        permanent_address: data.result.extraction_output.permanent_address,
        permit_no: data.result.extraction_output.permit_no,
        father_name: data.result.extraction_output.father_name,
        status_verfy_date: data.result.extraction_output.status_verfy_date,
        m_y_manufacturing: data.result.extraction_output.m_y_manufacturing,
        registration_date: data.result.extraction_output.registration_date,
        gross_vehicle_weight: data.result.extraction_output.gross_vehicle_weight,
        registered_place: data.result.extraction_output.registered_place,
        permit_validity_upto: data.result.extraction_output.permit_validity_upto,
        insurance_policy_no: data.result.extraction_output.insurance_policy_no,
        noc_details: data.result.extraction_output.noc_details,
        npermit_issued_by: data.result.extraction_output.npermit_issued_by,
        sleeper_capacity: data.result.extraction_output.sleeper_capacity,
        current_address: data.result.extraction_output.current_address,
        status_verificationpermit_type: data.result.extraction_output.status_verificationpermit_type,
        permit_type: data.result.extraction_output.permit_type,
        noc_status: data.result.extraction_output.noc_status,
        masked_name: data.result.extraction_output.masked_name,
        fuel_type: data.result.extraction_output.fuel_type,
        permit_validity_from: data.result.extraction_output.permit_validity_from,
        owner_name: data.result.extraction_output.owner_name,
        puc_number: data.result.extraction_output.puc_number,
        owner_mobile_no: data.result.extraction_output.owner_mobile_no,
        blacklist_statusmanufacturer: data.result.extraction_output.blacklist_statusmanufacturer,
        manufacturer: data.result.extraction_output.manufacturer,
        permit_issue_date: data.result.extraction_output.permit_issue_date,
        engine_numberchassis_number: data.result.extraction_output.engine_numberchassis_number,
        chassis_number: data.result.extraction_output.chassis_number,
        mv_tax_upto: data.result.extraction_output.mv_tax_upto,
        body_type: data.result.extraction_output.body_type,
        unladden_weight: data.result.extraction_output.unladden_weight,
        insurance_name: data.result.extraction_output.insurance_name,
        owner_serial_number: data.result.extraction_output.owner_serial_number,
        vehicle_category: data.result.extraction_output.vehicle_category,
        noc_issue_date: data.result.extraction_output.noc_issue_date,
        npermit_no: data.result.extraction_output.npermit_no,
        cubic_capacity: data.result.extraction_output.cubic_capacity,
        norms_type: data.result.extraction_output.norms_type,
        state: data.result.extraction_output.state,
        insurance_validity: data.result.extraction_output.insurance_validity,
        financer: data.result.extraction_output.financer,
        wheelbase: data.result.extraction_output.wheelbase,
        vehicle_type: data.result.extraction_output.vehicle_category == "2WN" ? "Bike" : "Car",
    }
    vehicles.push(vehicleData);
    rcNo.push(data.result.extraction_output.registration_number);
    displayData();
    document.getElementById("b1").innerHTML = b1data;
}
function displayData() {
    var i = 0;
    var disp = "";
    if (vehicles.length == 0) {
        document.getElementById("tab").innerHTML = "";
    } else {
        document.getElementById("tab").innerHTML = '<table id="tableData" class="table table-striped"><thead><th>Vehicle Name</th><th>RC Number</th><th>View</th><th>Delete</th></thead><tbody id="data"></tbody></table>';
        vehicles.forEach(ele => {
            disp += '<tr><td>' + ele.manufacturer_model + '</td><td>' + ele.registration_number + '</td><td><input type="button" id="view" value="View Details" onclick="viewDetails(' + i + ')"></td><td><input type="button" id="delete" value="Delete Details" onclick="deleteVehicleData(' + i + ')"></td></tr>';

            i++;
        });
        document.getElementById("data").innerHTML = disp;
    }
}

function deleteVehicleData(i) {
    vehicles.splice(i, 1);
    rcNo.splice(i, 1);
    displayData();
    document.getElementById("viewData").innerHTML = "";
    document.getElementById("image").innerHTML = "";
}

async function viewDetails(i) {
    
    var disp = "";
    var obj = vehicles[i];
    for (const key in obj) {
        if (!(obj[key] == "" || obj[key] == "null" || obj[key] == null)) {
            disp += '<tr><th>' + key + ': </th><td>' + obj[key] + '</td></tr>'
        }
    }
    document.getElementById("viewData").innerHTML = disp;
    await getImage(vehicles[i].manufacturer_model, i);
    document.getElementById("image").innerHTML = '<img src=' + image + ' height = "300" width = "400">';
}


async function getImage(str, i) {
    str = str.replaceAll(' ', '+');
    await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyDhZJJEBxFlF3Un3XNgrU8jLIsG9r5K_A8&cx=eabcf9ce4185f8010&q=' + str + '')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(image = data.items[0].pagemap.cse_image[0].src);
        });
}