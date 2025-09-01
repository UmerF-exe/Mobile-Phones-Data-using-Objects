var mobile = {
    iphone: {
        iPhone11: {
            name: "iPhone 11",
            released: "September 20, 2019",
            display: 6.1,
            camera: "12 MP",
            storage: "64GB",
            battery: "3110 mAh",
            iOS: "iOS 13 up to 18.6",
            weight: "161 g",
            price: "270$"
        },
        iPhone12: {
            name: "iPhone 12",
            released: "October 23, 2020",
            display: 6.1,
            camera: "12 MP",
            storage: "64 GB",
            battery: "2815 mAh",
            iOS: "iOS 13 up to 18.6",
            weight: "164 g",
            price: "300$"
        },
    },
    samsung: {
        samsungA56: {
            name: "samsung A56",
            display: 6.7,
            camera: "50 MP",
            storage: "256 GB",
            battery: "5000 mAh",
            weight: "198 g",
            price: "450$"
        }
    },
    oppo:{
        oppoF16: {
            name: "Oppo F16",
            display: 6.7,
            camera: "50 MP",
            storage: "256 GB",
            battery: "5000 mAh",
            weight: "198 g",
            price: "120$"
        }
    },
    vivo: {
        vivoY20: {
            name: "Vivo Y20",
            display: 6.7,
            camera: "50 MP",
            storage: "256 GB",
            battery: "5000 mAh",
            weight: "198 g",
            price: "120$"
        }
    },
    redme: {
        redme13: {
            name: "Redme 13",
            display: 6.7,
            camera: "50 MP",
            storage: "128 GB",
            battery: "5000 mAh",
            weight: "198 g",
            price: "100$"
        }
    },
    infinix: {
        infinixHot8: {
            name: "Infinix Hot8",
            display: 6.7,
            camera: "13 MP",
            storage: "64 GB",
            battery: "5000 mAh",
            weight: "198 g",
            price: "80$"
        }
    },
    Nokia: {
        nokiaTurboPro: {
            name: "Nokia Turbo Pro",
            display: 6.7,
            camera: "144 MP",
            storage: "512 GB",
            battery: "7500 mAh",
            weight: "198 g",
            price: "500$"
        }
    }
}

let company = document.getElementById("company");
let model = document.getElementById("model");

for (var key in mobile){
    company.innerHTML += `<option vlaue="${key}">${key}</option>`;
}

function selectModel(){
    model.innerHTML = `<option value="Select the Model">Select the Model</option>`;
    for (var key in mobile[company.value]){
        model.innerHTML += `<option vlaue="${key}">${key}</option>`;
    }
}

function searchMobile(){
    if(model.value == "iPhone11"){
        alert(model.value);
    }
    else if(model.value == "iPhone12"){
        alert(model.value);
    }
    else if(model.value == "samsungA56"){
        alert(model.value);
    }
    else if(model.value == "oppoF16"){
        alert(model.value);
    }
    else if(model.value == "vivoY20"){
        alert(model.value);
    }
    else if(model.value == "redme13"){
        alert(model.value);
    }
    else if(model.value == "infinixHot8"){
        alert(model.value);
    }
    else if(model.value == "nokiaTurboPro"){
        alert(model.value);
    }
    else{
        alert(model.value);
    }
}