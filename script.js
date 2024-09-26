const flashcards = ["Morning Azkar",
    "Surah Al-Ikhlas:  In the name of Allah, the Entirely Merciful, the Especially Merciful Say, He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born.Nor is there to Him any equivalent (3 times)",
    " Surah Al-Falaq:  In the name of Allah, the Entirely Merciful, the Especially Merciful Say, I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies (3 times)",
    " Surah Al-Nas:  In the name of Allah, the Entirely Merciful, the Especially Merciful Say, I seek refuge in the Lord of mankind. He Sovereign of mankind.The God of mankind.From the evil of the retreating whisperer.Who whispers [evil] into the breasts of mankind. From among the jinn and mankind. (3 Times)",
"We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise and He is over all things omnipotent. My Lord, I ask You for the good of this night and the good of what follows it and I take refuge in You from the evil of this night and the evil of what follows it. My Lord, I take refuge in You from laziness and senility. My Lord, I take refuge in You from torment in the Fire and punishment in the grave.",
    " We have risen the morning upon the fitrah of alIslam, and the word of pure faith, and upon the religion of our Prophet Muhammad and the religion of our forefather Ibrahim, who was a Muslim and of true faith and was not of those who associate others with Allah.",
    "O Allah, by Your leave we have reached the morning and by Your leave we have reached the evening, by Your leave we live and die and unto You is our return.",
    "O Allah, I have reached the morning with blessings, strength and concealment of my shortcomings, all of which are from You. So complete all the blessings and strength from You and the concealment for me in this life and the hereafter. (3 times)",
    "O Allah, what blessing I or any of Your creation have risen upon, is from You alone, without partner, so for You is all praise and unto You all thanks.",
    "O my Lord, all praises be to You as it should be due to Your Might and the Greatness of Your Power.",
    "I have accepted Allah as my Lord; and Islam as my way of life; and Muhammad صلى الله عليه وسلم As Allah’s Prophet and the Messenger. (3 times)",
    "O Allah, I ask You for pardon and well-being in this life and the next. O Allah, I ask You for pardon and well-being in my religious and worldly affairs, and my family and my wealth. O Allah, veil my weaknesses and set at ease my dismay, and preserve me from the front and from behind and on my right and on my left and from above, and I take refuge with You lest I be swallowed up by the earth.",
    "How perfect Allah is; and I praise Him by the number of His creation and His pleasure, and by the weight of His throne, and the ink of His words. (3 times)",
    "In the name of Allah with whose name nothing is harmed on earth nor in the heavens and He is The All-Seeing, The All-Knowing. (3 times)",
    " O Allah, I take refuge in You lest I should commit shirk with You knowingly and I seek Your forgiveness for what I do unknowingly (3 times)",
    "I seek protection in the perfect words of Allah from every evil that He has created. (3 times)",
"O Allah, knower of the unseen and the seen, creator of the heavens and the earth, Lord and sovereign of all things, I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.",
"O Ever Living, O self-subsisting and supporter of all, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
"O Allah, You are my Lord, none has the right to be worshipped except You, You created me and I am Your servant and I abide to Your covenant and promise as best I can, I take refuge in You from the evil of which I have committed. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me, for verily none can forgive sin except You.",
"O Allah, verily I have reached the morning and call on You, the bearers of Your throne, Your angels, and all of Your creation to witness that You are Allah, none has the right to be worshipped except You, alone, without partner and that Muhammad صلى الله عليه وسلم is Your servant and Messenger.  (4 times)",
"O Allah, grant my body health, O Allah, grant my hearing health, O Allah, grant my sight health. None has the right to be worshipped except You, O Allah, I take refuge with You from disbelief and poverty, and I take refuge with You from the punishment of the grave. None has the right to be worshipped except You.  (3 times)",
"Allah is sufficient for me, none has the right to be worshipped except Him, upon Him I rely and He is Lord of the exalted throne.  (7 times)",
"We have reached the morning and at this very time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day, its triumphs and its victories, its light & its blessings and its guidance, and I take refuge in You from the evil of this day and the evil that follows it",

];

let currentIndex = 0;

const cardText = document.getElementById("card-text");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Function to update the card text
function updateCard() {
    cardText.textContent = flashcards[currentIndex];
}


prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = flashcards.length - 1; // Go to the last card when at the first card
    }
    updateCard();
});



nextButton.addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Go back to the first card when the last card is reached
    }
    updateCard();
});



// Initialize the first card
updateCard();
