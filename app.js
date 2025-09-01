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

console.log(mobile.iphone.iPhone11.name);
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

let result = document.getElementById("result");
function searchMobile(){
    phone = model.value;
    if(phone == "iPhone11"){
        result.innerHTML = `<h1>Apple iPhone 11</h1><img src="Images/apple-iphone-11.jpg"/><p id="para">Name: ${mobile.iphone.iPhone11.name}</p><p id="para">Released: ${mobile.iphone.iPhone11.released}</p><p id="para">Display: ${mobile.iphone.iPhone11.display} inch</p><p id="para">Camera: ${mobile.iphone.iPhone11.camera}</p><p id="para">Storage: ${mobile.iphone.iPhone11.storage}</p><p id="para">Battery: ${mobile.iphone.iPhone11.battery}</p><p id="para">iOS: ${mobile.iphone.iPhone11.iOS}</p><p id="para">Weight: ${mobile.iphone.iPhone11.weight}</p><p id="para">Price: ${mobile.iphone.iPhone11.price}</p>`;
    }
    else if(phone == "iPhone12"){
        alert(model.value);
    }
    else if(phone == "samsungA56"){
        alert(model.value);
    }
    else if(phone == "oppoF16"){
        alert(model.value);
    }
    else if(phone == "vivoY20"){
        alert(model.value);
    }
    else if(phone == "redme13"){
        alert(model.value);
    }
    else if(phone == "infinixHot8"){
        alert(model.value);
    }
    else if(phone == "nokiaTurboPro"){
        alert(model.value);
    }
    else{
        alert(model.value);
    }
}