import React from 'react'
export const info = {
    "Event": "CYBER-0-DAY 2.0",
    "Subtitle": "WORKSHOP X CTF X TREASURE HUNT",
    "Location": "NETAJI AUDITORIUM",
    "Dates": <div>6<sup>th</sup> to 7<sup>th</sup> October</div>,
    "Fees": "₹300/- per person"
}
export const faqs = [
    { q: 'What is the venue of the event?', a: info.Location },
    { q: 'When is the event?', a: '6th to 7th October' },
    { q: 'What happens in Elimination 1?', a: 'Top 10 teams having higher points in the challenges will advance to the next rounds of competition. Other teams have to discontinue from the competition.' },
    { q: 'Will the participants be provided with Food?', a: 'Only Refreshments will be provided to the participants.' },
    { q: 'Will the participants be provided with Internet connection?', a: 'Yes, a Wi-Fi connection will be provided for the participants.' },
    { q: 'Is this a team event?', a: 'Yes it is a team event comprising of 1- members.' },
    { q: 'How to register as a team?', a: 'Every participant has to register individually for the event. Team formation will happen on the event day. You may find your team mates earlier if you wish to.' },
    { q: 'What are the winners prizes?', a: 'Prizes worth Rs. 10,000+.' },
    { q: 'Where do we register for the event?', a: 'You can scan the QR Code in the top of the page or visit https://vitchennaievents.com/conf1/ to register for the event.' }
];

export const days = [
    {
        day: (
            <>
                6<sup>th</sup> October,2023 [9:00 AM to 6:00 PM]
            </>
        ),
        schedule: [
            { description: "On the inaugural day, participants will dive into a comprehensive hands-on workshop designed to equip them with a solid foundation in Linux, a fundamental skill for anyone venturing into the world of cybersecurity." },
            { description: "This workshop will take participants through an in-depth exploration of Linux, structured chapter by chapter. Key topics covered include Linux fundamentals, which serve as the backbone of various server systems, and cryptography, the cornerstone of secure communication and data protection, ensuring confidentiality, integrity, and authentication." },
            { description: "Participants will also delve into OSINT (Open-source Intelligence) and reconnaissance techniques, essential for gathering information about potential targets." },
            {description: "The day will culminate with a focus on web exploitation, enabling participants to identify and exploit vulnerabilities in web applications, guarding against unauthorized access and data breaches."},
            {description: "Following the workshop, knowledge assessment quizzes will test participants' understanding."}
        ]
    },
    {
        day: (
            <>
                6<sup>th</sup> to 7<sup>th</sup> October,2023 [7:00 AM to 7:00 PM]
            </>
        ),
        schedule: [
            { description: 'The top 20 teams from Round 1 will participate in the thrilling Capture The Flag (CTF) challenge. This overnight competition will test their practical skills in cybersecurity and ethical hacking, simulating real-world scenarios.' },
            { description: 'Participants will work tirelessly throughout the night to solve complex challenges and demonstrate their prowess in the field.' }
        ]
    },
];


