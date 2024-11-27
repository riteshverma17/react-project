import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Bodybuilding",
        info: "Unlock your muscle-building potential with our Bodybuilding Classes, led by expert trainers dedicated to sculpting your physique and maximizing your strength.",
        
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Aerobics",
        info: "Experience the exhilarating rhythm and energizing workouts in our Aerobics Classes, where you'll sweat, groove, and transform your fitness levels with every beat.",
        
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Wheight Lifting",
        info: "Unleash your strength and reach new heights in our Weight Lifting Classes, where expert coaches tailor programs to challenge and empower you towards your muscle-building goals.",
       
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Nutrition",
        info: "Discover the power of balanced eating and personalized guidance in our Nutrition Classes, where you'll learn practical strategies to fuel your body for optimal health and performance.",
        
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Free Consultation",
        desc: "Unlocking your path to the perfect body begins with a free consultation, where personalized fitness plans are crafted to match your goals and capabilities. "
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Best Training",
        desc: "The best gym training regimen combines tailored workouts with expert guidance, sculpting bodies and fortifying minds for peak performance."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Build Perfect Body",
        desc: "In the gym, the pursuit of the perfect body intertwines dedication, technique, and consistency. "
    },
    // {
    //     id: 4,
    //     icon: <SiOpenaigym/>,
    //     title: "Value Four",
    //     desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    // }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]










export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'Gym', available: true},
            {feature: 'Fitness 24/7', available: true},
            {feature: '-', available: true},
            {feature: '-', available: true},
            {feature: '-', available: true},
            
            
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'Gym', available: true},
            {feature: 'Fitness 24/7', available: true},
            {feature: 'Personal Trainer', available: true},
            {feature: 'Massage', available: true},
            {feature: '-', available: true},
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'Gym', available: true},
            {feature: 'Fitness 24/7', available: true},
            {feature: 'Personal Trainer', available: true},
            {feature: 'Massage', available: true},
            {feature: 'Dietician', available: true},
            
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]