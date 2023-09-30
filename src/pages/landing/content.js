export const info = {
    "Event": "CYBER-O-DAY 2.0",
    "Subtitle": "CTF + Treasure Hunt",
    "Location": "Netaji Auditorium",
    "Dates": <div>6<sup>th</sup> to 7<sup>th</sup> Oct</div>,
    "Fees": "₹300/- per Team"
}
export const faqs = [
    { q: 'What is the venue of the event?', a: info.Location },
    { q: 'When is the event?', a: '6th October - 7th October' },
    { q: 'What happens in Elimination 1?', a: 'Top 10 teams having higher points in the challenges will advance to the next rounds of competition. Other teams have to discontinue from the competition.' },
    { q: 'Will the participants be provided with Food?', a: 'Only Refreshments will be provided to the participants.' },
    { q: 'Will the participants be provided with Internet connection?', a: 'Yes, a Wi-Fi connection will be provided for the participants.' },
    { q: 'Is this a team event?', a: 'Yes it is a team event comprising of 1-3 members.' },
    { q: 'How to register as a team?', a: 'Every participant has to register individually for the event. Team formation will happen on the event day. You may find your team mates earlier if you wish to.' },
    { q: 'What are the winners prizes?', a: 'Prizes worth Rs. 10,000+, certificates, hands-on experience, and a wealth of knowledge to enhance their cybersecurity expertise.' },
    { q: 'Where do we register for the event?', a: 'You can scan the QR Code in the top of the page or visit https://vitchennaievents.com/conf1/ to register for the event.' }
];

export const days = [
    {
        day: (
            <>
                Round 1
            </>
        ),
        schedule: [
            { description: "Participants begin with a comprehensive hands-on workshop." },
{ description: "The goal is to establish a strong foundation in Linux, a critical skill for cybersecurity." },
{ description: "The workshop covers Linux in-depth, organized into chapters." },
{ description: "Key topics include Linux fundamentals (important for server systems) and cryptography (ensuring secure communication, data protection, confidentiality, integrity, and authentication)." },
{ description: "Participants also learn OSINT (Open-source Intelligence) and reconnaissance techniques." },
{ description: "The day concludes with a focus on web exploitation." },
{ description: "Participants acquire the ability to identify and exploit vulnerabilities in web applications." },
{ description: "This knowledge is crucial for preventing unauthorized access and data breaches." },
{ description: "After the workshop, quizzes assess participants' understanding." }

        ]
    },
    {
        day: (
            <>
                Round 2
            </>
        ),
        schedule: [
            { description: "The top 20 teams from Round 1 will participate in the thrilling Capture The Flag (CTF) challenge." },
            { description: "This overnight competition will test their practical skills in cybersecurity and ethical hacking, simulating real-world scenarios." },
            { description: "Participants will work tirelessly throughout the night to solve complex challenges and demonstrate their prowess in the field." }

        ]
    },
    {
        day: (
            <>
                Round 3
            </>
        ),
        schedule: [
            { description: "The top 10 teams emerging from the Overnight CTF will engage in the Grand Finale - Treasure Hunt." },
{ description: "This challenging event will require teams to use their expertise to solve complex puzzles and challenges, aiming to secure victory." },
{ description: "The Treasure Hunt promises an exhilarating climax to the event." }

        ]
    }
];


