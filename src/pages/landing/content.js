export const faqs = [
    { q: 'What is the venue of the event?', a: 'AB1 Labs: 205A, 205B and 207' },
    { q: 'What is the timing of the event?', a: '10:00 AM 24th September - 10:00 AM 25th September' },
    { q: 'What happens in Elimination 1?', a: 'Top 10-15 teams having higher points in the Quiz and CTF will advance to the next rounds of competition. Other teams have to discontinue from the competition'},
    { q: 'Will the participants be provided with Food?', a: 'Lunch, Refreshments and Dinner(selected teams) will be provided to the participants'},
    { q: 'Will the participants be provided with Internet connection?', a: 'Yes, a Wi-Fi connection will be provided for the participants. Participants are expected to use the Lab systems for the first 3 competitions. They can work on their laptops for the final hackathon event'},
    { q: 'Is this a team event?', a: 'Yes it is a team event comprising of 1-4 members' },
    { q: 'How to register as a team?', a: 'Every participant has to register individually for the event. Team formation will happen on the event day. You may find your team mates earlier if you wish to.' },
    { q: 'What are the winners prizes?', a: 'Prizes worth Rs. 10,000+' },
    { q: 'Where do we register for the event?', a: 'You can scan the QR Code in the top of the page or visit https://vitchennaievents.com/technovit/ to register for the event'}
];

export const days = [
    {
        day: (
            <>
                24<sup>th</sup> September
            </>
        ),
        schedule: [
            { time: '10:00 AM - 11:30 AM', description: 'Introduction & Rules' },
            { time: '11:30 AM - 01:00 PM', description: 'Tech Quiz' },
            { time: '01:00 PM - 02:00 PM', description: 'Lunch' },
            { time: '02:00 PM - 06:00 PM', description: 'CTF competition' },
	    { time: '06:00 PM - 07:00 PM', description: ' Refreshments and Elimination 1'},
	    { time: '07:00 PM - 09:00 PM', description: 'Bug Bounty Program' },
	    { time: '09:00 PM - 10:00 PM', description: 'Problem Statement declaration & Dinner' },
	    { time: '10:00 PM - 07:00 AM', description: 'Hackathon'}
        ]
    },
    {
        day: (
            <>
                25<sup>th</sup> September
            </>
        ),
        schedule: [
            { time: '07:00 AM - 09:00 AM', description: 'Presentation of product' },
            { time: '09:00 AM - 10:00 AM', description: 'Winner Declaration & Closing Ceremony' }
        ]
    }
];
