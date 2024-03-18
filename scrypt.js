const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-btn');

playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.innerHTML = '<i class="fa-solid fa-pause fa-xl" style="color: #FFD43B;"></i>';
    } else {
        audioPlayer.pause();
        playPauseButton.innerHTML = '<i class="fa-solid fa-play fa-xl" style="color: #FFD43B;"></i>';
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseButton.innerHTML = '<i class="fa-solid fa-play fa-xl" style="color: #FFD43B;"></i>';
});

document.getElementById('volume-control').addEventListener('input', () => {
    audioPlayer.volume = document.getElementById('volume-control').value;
});

// Array of random texts
var texts = [
"  {يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا ۝ وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا} [الأحزاب:41-42]",
"{فَسُبْحَانَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ} [الروم:17] ",
"{إِنَّ اللَّهَ وَمَلائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا} [الأحزاب:56] ",
"{وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنْصِتُوا لَعَلَّكُمْ تُرْحَمُونَ} [الأعراف:204]",
"{إنَمَا يُوَفَى الصَابِرُونَ أجْرَهُم بِغَيرٍ حِسابٍ} [سورة الزمر: 10]",
"﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ وَاشْكُرُوا لِلَّهِ إِنْ كُنْتُمْ إِيَّاهُ تَعْبُدُونَ ﴾ [البقرة: 17]",
"{وَأَقْرِضُوا اللَّهَ قَرْضًا حَسَنًا وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا وَاسْتَغْفِرُوا اللَّهَ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ} [سورة المزمل: 20]"
];

var currentIndex = 0; // Index of the current text

// Function to display random text
function displayRandomText() {
var randomIndex = Math.floor(Math.random() * texts.length);
document.getElementById("randomText").textContent = texts[randomIndex];
}

// Run the function initially
displayRandomText();

// Set interval to change text every 45 seconds (45000 milliseconds)
setInterval(displayRandomText, 45000);