console.log("Digital Balance Quiz - Online Learning Version");

const questions = [
    {
        question: "During online classes, where is your phone?",
        answers: [
            { text: "In my hand, I check it during lectures", points: 0 },
            { text: "On the table, but I try not to touch it", points: 1 },
            { text: "In another room or turned off", points: 2 }
        ]
    },
    {
        question: "How do you handle notifications during study time?",
        answers: [
            { text: "I check them immediately", points: 0 },
            { text: "I check during breaks", points: 1 },
            { text: "I turn them off while studying", points: 2 }
        ]
    },
    {
        question: "Where do you charge your phone at night?",
        answers: [
            { text: "Next to my bed", points: 0 },
            { text: "In the room but not near bed", points: 1 },
            { text: "In another room", points: 2 }
        ]
    },
    {
        question: "What's your first activity in the morning?",
        answers: [
            { text: "Check phone notifications", points: 0 },
            { text: "Morning routine, then check phone", points: 1 },
            { text: "Start the day without phone for 30+ minutes", points: 2 }
        ]
    },
    {
        question: "How do you feel when you forget your phone?",
        answers: [
            { text: "Anxious and uncomfortable", points: 0 },
            { text: "A bit uneasy but manageable", points: 1 },
            { text: "Completely fine and free", points: 2 }
        ]
    },
    {
        question: "How often do you check your phone during online meetings?",
        answers: [
            { text: "Constantly throughout", points: 0 },
            { text: "Only during less important parts", points: 1 },
            { text: "Rarely or never", points: 2 }
        ]
    },
    {
        question: "What do you do during short breaks between online classes?",
        answers: [
            { text: "Scroll through social media", points: 0 },
            { text: "Check messages quickly", points: 1 },
            { text: "Stretch, drink water, or rest eyes", points: 2 }
        ]
    },
    {
        question: "How do you manage your screen time in the evening?",
        answers: [
            { text: "Use phone until bedtime", points: 0 },
            { text: "Stop 30 minutes before sleep", points: 1 },
            { text: "No screens 1+ hours before sleep", points: 2 }
        ]
    },
    {
        question: "When doing online homework, how focused are you?",
        answers: [
            { text: "Constantly distracted by phone", points: 0 },
            { text: "Some distractions but mostly focused", points: 1 },
            { text: "Completely focused, phone away", points: 2 }
        ]
    },
    {
        question: "How do you use your phone during family time?",
        answers: [
            { text: "Use it while talking to family", points: 0 },
            { text: "Check occasionally but stay present", points: 1 },
            { text: "Keep it away to be fully present", points: 2 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalPoints = 0;

// Main Functions
window.startQuiz = function() {
    console.log("Starting Digital Balance Quiz");
    currentQuestionIndex = 0;
    totalPoints = 0;
    showScreen('quiz-screen');
    showQuestion();
};

window.showQuestion = function() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.points);
        answersContainer.appendChild(button);
    });
};

window.selectAnswer = function(points) {
    totalPoints += points;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

window.showResult = function() {
    let result;
    const maxPoints = 20;
    
    if (totalPoints <= 7) {
        result = {
            title: "Digital Explorer 📱",
            description: "Your phone is a big part of your daily life. With some mindful adjustments, you can find better balance and improve your focus during online studies!",
            emoji: "📱",
            level: "low"
        };
    } else if (totalPoints <= 14) {
        result = {
            title: "Balanced User ⚖️",
            description: "You have a good relationship with technology but there's room for optimization. Small changes can enhance your online learning experience!",
            emoji: "⚖️",
            level: "medium"
        };
    } else {
        result = {
            title: "Mindful Master 🌱",
            description: "Excellent! You've mastered digital balance. You use technology intentionally without letting it control your life. Share your wisdom with others!",
            emoji: "🌱",
            level: "high"
        };
    }
    
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('result-emoji').textContent = result.emoji;
    document.getElementById('score-value').textContent = totalPoints + "/" + maxPoints;
    
    showEducationalTips(result.level);
    showScreen('result-screen');
};

// Educational Content
window.showEducationalTips = function(level) {
    const tips = {
        low: [
            "🎯 Study Mode: Turn on 'Do Not Disturb' during online classes",
            "📵 Phone-Free Zones: Keep phone away during study sessions",
            "🌙 Night Routine: Charge phone in another room overnight",
            "⏰ Scheduled Checks: Designate specific times for social media",
            "🚶 Digital Breaks: Take walks without your phone",
            "📚 Alternative Activities: Read physical books instead of scrolling",
            "🎧 Focus Music: Use instrumental music instead of video content"
        ],
        medium: [
            "🔄 App Limits: Set daily time limits for distracting apps",
            "🎓 Focus Sessions: Use Pomodoro technique (25 min focus, 5 min break)",
            "📊 Screen Time Review: Check weekly usage and set reduction goals",
            "👥 Quality Time: Phone-free meals with family/friends",
            "🌅 Morning Clarity: First hour without screens",
            "💤 Sleep Hygiene: No screens 1 hour before bedtime",
            "🏃 Active Alternatives: Replace screen time with exercise"
        ],
        high: [
            "🌟 Digital Mentor: Share balance tips with classmates",
            "📱 Intentional Usage: Plan phone usage instead of mindless scrolling",
            "💡 Creative Projects: Use saved time for hobbies or learning",
            "🎯 Deep Work: Schedule 2-hour phone-free work sessions",
            "🌿 Digital Minimalism: Regular app cleanup and decluttering",
            "🤝 Community Building: Organize offline activities with peers",
            "🚀 Skill Development: Learn new skills with extra time gained"
        ]
    };
    
    const userTips = tips[level];
    const tipsContainer = document.getElementById('educational-tips');
    
    let tipsHTML = '';
    userTips.forEach(tip => {
        tipsHTML += `<div class="tip-item">${tip}</div>`;
    });
    
    tipsContainer.innerHTML = tipsHTML;
};

// Utility Functions
window.showScreen = function(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
};

window.restartQuiz = function() {
    showScreen('start-screen');
};

window.shareQuiz = function() {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: 'Digital Balance Quiz',
            text: 'Discover your digital habits and get personalized balance tips!',
            url: url
        });
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard! Share with your friends.');
        });
    }
};

console.log("Digital Balance Quiz initialized successfully");
