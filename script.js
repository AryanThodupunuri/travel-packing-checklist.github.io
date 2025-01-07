document.getElementById('packingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const tripType = document.getElementById('tripType').value;
  const duration = parseInt(document.getElementById('duration').value);

  const items = {
    beach: ['Sunscreen', 'Swimsuit', 'Beach Towel', 'Sunglasses'],
    mountain: ['Hiking Boots', 'Jacket', 'First Aid Kit', 'Water Bottle'],
    city: ['Casual Clothes', 'Comfortable Shoes', 'Guidebook', 'Camera'],
    business: ['Formal Attire', 'Laptop', 'Notebook', 'Business Cards']
  };

  const essentials = ['Toothbrush', 'Underwear', 'Phone Charger', 'Snacks'];

  const packingList = [...items[tripType], ...essentials];
  if (duration > 7) packingList.push('Extra Clothes');

  displayChecklist(packingList);
});

function displayChecklist(list) {
  const packingList = document.getElementById('packingList');
  packingList.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    packingList.appendChild(li);
  });
}
