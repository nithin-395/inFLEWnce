document.addEventListener("DOMContentLoaded", () => {
    // Chatbot Logic
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbox = document.getElementById("chatbox");

    // Initially hide the chatbox
    chatbox.style.display = "none";

    chatbotToggle.addEventListener("click", () => {
        // Toggle chatbot visibility
        if (chatbox.style.display === "none" || chatbox.style.display === "") {
            chatbox.style.display = "block";
        } else {
            chatbox.style.display = "none";
        }
    });

    window.sendMessage = () => {
        const userInput = document.getElementById("user-input").value.trim().toLowerCase();
        if (userInput !== "") {
            const reply = generateBotResponse(userInput);
            chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p><p><strong>AI:</strong> ${reply}</p>`;
            document.getElementById("user-input").value = "";
        }
    };

    function generateBotResponse(input) {
        const responses = {
            // Awareness Questions
            "what is influencer awareness?": "Influencer awareness means understanding how influencers impact your decisions and ensuring they don't mislead you.",
            "how do influencers mislead people?": "Some influencers mislead by promoting paid advertisements without disclosure, using fake reviews, or spreading misinformation.",
            "why should i be careful with influencers?": "Not all influencers are genuine. Some prioritize profits over honesty, leading to fake promotions and unrealistic expectations.",
            "what are some signs of false influence?": "Signs include unrealistic claims, lack of transparency about sponsorships, emotional manipulation, and misleading advice.",
            
            // Prevention Questions
            "how can i verify if an influencer is trustworthy?": "Check if they disclose sponsorships, provide evidence for claims, and have real user reviews supporting their recommendations.",
            "how do i fact-check an influencer’s claims?": "Use Google Search, fact-checking websites, Reddit discussions, and reviews from multiple sources to verify their claims.",
            "how can i prevent being influenced by fake promotions?": "Follow diverse sources, avoid impulse buying, and critically evaluate influencer recommendations before acting on them.",
            "how to avoid emotional manipulation from influencers?": "Watch out for urgency tactics ('buy now!'), fear-based messages, and exaggerated claims. Always pause and think critically before making decisions."
        };

        return responses[input] || "I’m still learning! Can you rephrase or ask another awareness or prevention question?";
    }

    // User Signup/Login Logic
    const users = JSON.parse(localStorage.getItem("users")) || [];

    window.navigate = (page) => {
        window.location.href = page;
    };

    window.signup = () => {
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        // Check if username already exists
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            alert("Username already exists! Please choose a different one.");
        } else {
            users.push({ username, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Signup successful! Redirecting to login.");
            window.location.href = "login.html";
        }
    };

    window.login = () => {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const userExists = users.some(user => user.username === username && user.password === password);

        if (userExists) {
            alert("Login successful! Redirecting to homepage.");
            window.location.href = "index.html";
        } else {
            alert("Invalid credentials. Please check your username and password.");
        }
    };
});
