import {v4 as uuid4} from "uuid";

export const listoftweeters = [
    {
        id: uuid4(),
        name: "Barrack Obama",
        text: "Elections matter—and we’re seeing why. Congratulations to the Biden Administration and to the American people on a COVID relief bill that will improve the lives of families across the country.",
        isCompleted: false
    },
    {
        id: uuid4(),
        name: "Tim Pool",
        text: "Remember when the Washington Post said that COVID was no big deal and the flu was worse?",
        isCompleted: true
    },
    {
        id: uuid4(),
        name: "Elon Musk",
        text: "Just had a long engineering discussion with Medtronic about state-of-the-art ventilators. Very impressive team!",
        isCompleted: false
    },
    {
        id: uuid4(),
        name: "Boris Johonson",
        text: "Tonight I announced live on Facebook that we’re changing immigration rules to make it easier for scientists to live and work in the UK.",
        isCompleted: true
    }
];