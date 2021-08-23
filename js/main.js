const memoryTotal = document.getElementById('memory-total');
const storageTotal = document.getElementById('storage-total');
const deliveryTotal = document.getElementById('delivery-total')

function memoryCost(id, amount){
    document.getElementById(id).addEventListener('click', function(){
        if (amount == 180) {
            memoryTotal.innerText = 180;
        }
        else{
            memoryTotal.innerText = 0;
        }
        total();
    });

}

memoryCost('memory-sixteen-button', 180);
memoryCost('memory-eight-button', 0);

// storage 
function storageCost(id, amount){
    document.getElementById(id).addEventListener('click', function(){
        if (amount == 180) {
            storageTotal.innerText = 180;

        }
        else if(amount == 100){
            storageTotal.innerText = 100;

        }
        else{
            storageTotal.innerText = 0;

        }
        total();
    });
}

storageCost('storage-small-button', 0);
storageCost('storage-medium-button', 100);
storageCost('storage-big-button', 180);

// delivery
function deliveryCost(id, amount){
    document.getElementById(id).addEventListener('click', function(){
        if (amount == 20) {
            deliveryTotal.innerText = 20;
        }
        else{
            deliveryTotal.innerText = 0;
        }
        total();
    });
}
deliveryCost('free-shipping', 0);
deliveryCost('delivery-charge-shipping', 20);
// total
function total(){
    const total = document.getElementById('total-price');
    const bestPriceText = document.getElementById('best-price-total');
    const bestPriceAmount = parseFloat(bestPriceText.innerText);
    const totalMemoryCost = parseFloat(memoryTotal.innerText);
    const totalStorageCost = parseFloat(storageTotal.innerText);
    const totalDeliveryCost = parseFloat(deliveryTotal.innerText);
    total.innerText = bestPriceAmount + totalMemoryCost + totalStorageCost + totalDeliveryCost;
    const totalCost = parseFloat(total.innerText);
    const grandTotal = document.getElementById('grand-total');
    
    grandTotal.innerText = totalCost;
     
}

// promo code
document.getElementById('apply-button').addEventListener('click', function(){ 
    const promoCode = document.getElementById('promo-code');
    const promoValue = parseFloat(promoCode.value);
    
    if (promoCode.value == 'stevekaku') { 
        const grandTotal=document.getElementById('grand-total');
        const total = document.getElementById('total-price');
        const totalCost = parseFloat(total.innerText);
        grandTotal.innerText = totalCost - (totalCost/100) * 20;
        } 
    else { 
    console.log('nai'); 
    } 
    
    promoCode.value = ''; 
        
}); 
   


 
