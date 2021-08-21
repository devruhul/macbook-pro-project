// get small storage button
document.getElementById('memory-eight-button').addEventListener('click',function(){
    const eightMemoryTotal  =document.getElementById('memory-total');
    const getEightMemoryTotalText = eightMemoryTotal.innerText;
    const getEightMemoryTotalAmount = parseFloat(getEightMemoryTotalText);
    eightMemoryTotal.innerText = 00;

});
// get big storage button
document.getElementById('memory-sixteen-button').addEventListener('click', function(){
    const sixteenMemoryTotal = document.getElementById('memory-total');
    const getSixteenMemoryTotalText = sixteenMemoryTotal.innerText;
    const getSixteenMemoryTotalAmount = parseFloat(getSixteenMemoryTotalText);
    
    const sixteenTotalPrice = document.getElementById('total-price');
    const getSixteenTotalText = sixteenTotalPrice.innerText;
    const getSixteenTotalAmount = parseFloat(getSixteenTotalText);
    const addSixteenTotalPrice = getSixteenMemoryTotalAmount + getSixteenTotalAmount;
    
    sixteenMemoryTotal.innerText = 180;
    sixteenTotalPrice.innerText = parseFloat(addSixteenTotalPrice);
});
// get storage small  button
document.getElementById('storage-small-button').addEventListener('click', function(){
    const storageSmallButton = document.getElementById('storage-total');
    const getStorgaeSmallButtonText = storageSmallButton.innerText;
    const getStorgaeSmallButtonAmount = parseFloat(getStorgaeSmallButtonText);

    storageSmallButton.innerText = 00;
});
// get medium storage button
document.getElementById('storage-medium-button').addEventListener('click', function(){
    const mediumTotalPrice = document.getElementById('total-price');
    const getMediumTotalText = mediumTotalPrice.innerText;
    const getMediumTotalAmount = parseFloat(getMediumTotalText);

    const storageMediumButton = document.getElementById('storage-total');
    const getStorageMediumButtonText = storageMediumButton.innerText;
    const getStorageMediumButtonAmount = parseFloat(getStorageMediumButtonText);

    storageMediumButton.innerText = 100;
    const addMediumTotalPrice = getStorageMediumButtonAmount + getMediumTotalAmount;
});
// get storage big button
document.getElementById('storage-big-button').addEventListener('click', function(){
    const storageBigButton  = document.getElementById('storage-total');
    const getstorageBigButtonText  = storageBigButton.innerText;
    const getstorageBigButtonAmount = parseFloat(getstorageBigButtonText);

    storageBigButton.innerText = 180;
});
// get free shipping button
document.getElementById('free-shipping').addEventListener('click', function(){
    const deliveryTotal = document.getElementById('delivery-total');
    const freeDeliveryText = deliveryTotal.innerText;
    const freeDeliveryAmount = parseFloat(freeDeliveryText);
    deliveryTotal.innerText = 00;
});
// get delivery charge button
document.getElementById('delivery-charge-shipping').addEventListener('click', function(){
    const deliveryChargeTotal = document.getElementById('delivery-total');
    const deliveryChargeText = deliveryChargeTotal.innerText;
    const deliveryChargeAmount = parseFloat(deliveryChargeText);
    deliveryChargeTotal.innerText = 20;
});
// get total price
