const items = [
    "Weekly Membership 🟢170৳",
    "Monthly Membership 🟢790৳",
    "0.99$ [90 BDT] Airdrop150৳",
    "1.99$ [190 BDT] Airdrop280৳",
    "Level Up Pass 🟢180৳",
    "25 Diamond 🟢30৳",
    "50 Diamond 🟢50৳",
    "115 Diamonds 🟢85৳",
    "240 Diamonds 🟢160৳",
    "355 Diamonds 🟢250৳",
    "480 Diamonds 🟢330৳",
    "505 Diamonds 🟢350৳",
    "610 Diamonds 🟢450৳",
    "725 Diamonds 🟢500৳",
    "1240 Diamonds 🟢820৳",
    "2530 Diamonds 🟢2,000৳",
    "5060 Diamonds 🟢3,500৳",
    "7590 Diamonds 🟢5,000৳",
    "10120 Diamonds 🟢6,600৳",
    "12650 Diamonds 🟢8,000৳",
    "4X Weekly Lite160৳",
    "Weekly Lite45৳",
    "Evo 3 Days70৳",
    "Evo 7 Days100৳",
    "Evo 30 Days300৳"
];

const list = document.getElementById('item-list');

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});
