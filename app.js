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

let result = document.getElementById("result");
function searchMobile(){
    let phone = model.value;
    if(phone == "iPhone11"){
        result.innerHTML = `<h1>Apple iPhone 11</h1><div class="data"><div><img src="Images/apple-iphone-11.jpg"/></div><div class="para"><p>Name: ${mobile.iphone.iPhone11.name}</p><p>Released: ${mobile.iphone.iPhone11.released}</p><p>Display: ${mobile.iphone.iPhone11.display} inch</p><p>Camera: ${mobile.iphone.iPhone11.camera}</p><p>Storage: ${mobile.iphone.iPhone11.storage}</p><p>Battery: ${mobile.iphone.iPhone11.battery}</p><p>iOS: ${mobile.iphone.iPhone11.iOS}</p><p>Weight: ${mobile.iphone.iPhone11.weight}</p><p>Price: ${mobile.iphone.iPhone11.price}</p></div></div>`;
    }
    else if(phone == "iPhone12"){
        result.innerHTML = `<h1>Apple iPhone 12</h1><div class="data"><div class="img"><img src="Images/iphone_12.jpeg"/></div><div class="para"><p>Name: ${mobile.iphone.iPhone12.name}</p><p>Released: ${mobile.iphone.iPhone12.released}</p><p>Display: ${mobile.iphone.iPhone12.display} inch</p><p>Camera: ${mobile.iphone.iPhone12.camera}</p><p>Storage: ${mobile.iphone.iPhone12.storage}</p><p>Battery: ${mobile.iphone.iPhone12.battery}</p><p>iOS: ${mobile.iphone.iPhone12.iOS}</p><p>Weight: ${mobile.iphone.iPhone12.weight}</p><p>Price: ${mobile.iphone.iPhone12.price}</p></div></div>`;
    }
    else if(phone == "samsungA56"){
        result.innerHTML = `<h1>Samsung A56</h1><div class="data"><div><img src="Images/samsung_A56.jpeg"/></div><div class="para"><p>Name: ${mobile.samsung.samsungA56.name}</p><p>Released: ${mobile.samsung.samsungA56.released}</p><p>Display: ${mobile.samsung.samsungA56.display} inch</p><p>Camera: ${mobile.samsung.samsungA56.camera}</p><p>Storage: ${mobile.samsung.samsungA56.storage}</p><p>Battery: ${mobile.samsung.samsungA56.battery}</p><p>iOS: ${mobile.samsung.samsungA56.iOS}</p><p>Weight: ${mobile.samsung.samsungA56.weight}</p><p>Price: ${mobile.samsung.samsungA56.price}</p></div></div>`;
    }
    else if(phone == "oppoF16"){
        result.innerHTML = `<h1>Oppo F16</h1><div class="data"><div><img src="Images/oppo_f16.jpeg"/></div><div class="para"><p>Name: ${mobile.oppo.oppoF16.name}</p><p>Released: ${mobile.oppo.oppoF16.released}</p><p>Display: ${mobile.oppo.oppoF16.display} inch</p><p>Camera: ${mobile.oppo.oppoF16.camera}</p><p>Storage: ${mobile.oppo.oppoF16.storage}</p><p>Battery: ${mobile.oppo.oppoF16.battery}</p><p>iOS: ${mobile.oppo.oppoF16.iOS}</p><p>Weight: ${mobile.oppo.oppoF16.weight}</p><p>Price: ${mobile.oppo.oppoF16.price}</p></div></div>`;
    }
    else if(phone == "vivoY20"){
        result.innerHTML = `<h1>Vivo Y20</h1><div class="data"><div><img src="Images/vivo_Y20.jpeg"/></div><div class="para"><p>Name: ${mobile.vivo.vivoY20.name}</p><p>Released: ${mobile.vivo.vivoY20.released}</p><p>Display: ${mobile.vivo.vivoY20.display} inch</p><p>Camera: ${mobile.vivo.vivoY20.camera}</p><p>Storage: ${mobile.vivo.vivoY20.storage}</p><p>Battery: ${mobile.vivo.vivoY20.battery}</p><p>iOS: ${mobile.vivo.vivoY20.iOS}</p><p>Weight: ${mobile.vivo.vivoY20.weight}</p><p>Price: ${mobile.vivo.vivoY20.price}</p></div></div>`;
    }
    else if(phone == "redme13"){
        result.innerHTML = `<h1>Xiomi Redme 13</h1><div class="data"><div><img src="Images/redme_13.jpeg"/></div><div class="para"><p>Name: ${mobile.redme.redme13.name}</p><p>Released: ${mobile.redme.redme13.released}</p><p>Display: ${mobile.redme.redme13.display} inch</p><p>Camera: ${mobile.redme.redme13.camera}</p><p>Storage: ${mobile.redme.redme13.storage}</p><p>Battery: ${mobile.redme.redme13.battery}</p><p>iOS: ${mobile.redme.redme13.iOS}</p><p>Weight: ${mobile.redme.redme13.weight}</p><p>Price: ${mobile.redme.redme13.price}</p></div></div>`;
    }
    else if(phone == "infinixHot8"){
        result.innerHTML = `<h1>Infinix Hot 8</h1><div class="data"><div><img src="Images/infinix_hot8.jpeg"/></div><div class="para"><p>Name: ${mobile.infinix.infinixHot8.name}</p><p>Released: ${mobile.infinix.infinixHot8.released}</p><p>Display: ${mobile.infinix.infinixHot8.display} inch</p><p>Camera: ${mobile.infinix.infinixHot8.camera}</p><p>Storage: ${mobile.infinix.infinixHot8.storage}</p><p>Battery: ${mobile.infinix.infinixHot8.battery}</p><p>iOS: ${mobile.infinix.infinixHot8.iOS}</p><p>Weight: ${mobile.infinix.infinixHot8.weight}</p><p>Price: ${mobile.infinix.infinixHot8.price}</p></div></div>`;
    }
    else if(phone == "nokiaTurboPro"){
        result.innerHTML = `<h1>Nokia Turbo Pro</h1><div class="data"><div><img src="Images/nokia_turbo.webp" class="nokia"/></div><div class="para"><p>Name: ${mobile.Nokia.nokiaTurboPro.name}</p><p>Released: ${mobile.Nokia.nokiaTurboPro.released}</p><p>Display: ${mobile.Nokia.nokiaTurboPro.display} inch</p><p>Camera: ${mobile.Nokia.nokiaTurboPro.camera}</p><p>Storage: ${mobile.Nokia.nokiaTurboPro.storage}</p><p>Battery: ${mobile.Nokia.nokiaTurboPro.battery}</p><p>iOS: ${mobile.Nokia.nokiaTurboPro.iOS}</p><p>Weight: ${mobile.Nokia.nokiaTurboPro.weight}</p><p>Price: ${mobile.Nokia.nokiaTurboPro.price}</p></div></div>`;
    }
    else{
        alert(phone);
    }
}