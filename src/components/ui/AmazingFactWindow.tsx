'use client';
import { useState, useEffect, useCallback } from 'react';
import { Lightbulb, RefreshCw } from 'lucide-react';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';

const facts = [
    "The first computer mouse was made of wood.",
    "The first 1GB hard drive, released in 1980, weighed over 500 pounds and cost $40,000.",
    "The term 'bug' in computing was popularized after a real moth was found to have shorted out a relay in the Harvard Mark II computer in 1947.",
    "The QWERTY keyboard layout was designed to slow typists down to prevent typewriter jams.",
    "More than 5 billion people use the internet, which is over 60% of the world's population.",
    "The Apollo 11 guidance computer had less processing power than a modern smartphone.",
    "The first email was sent in 1971 by Ray Tomlinson, who also introduced the '@' symbol in email addresses.",
    "Domain name registration was free until 1995.",
    "The Firefox logo isn't a fox, it's a red panda.",
    "Samsung is 38 years and 1 month older than Apple."
];

export function AmazingFactWindow() {
    const [fact, setFact] = useState('');
    const [key, setKey] = useState(0);

    const getNewFact = useCallback(() => {
        const currentFact = fact;
        let newFact;
        do {
            const randomIndex = Math.floor(Math.random() * facts.length);
            newFact = facts[randomIndex];
        } while (newFact === currentFact && facts.length > 1);
        
        setFact(newFact);
        setKey(prevKey => prevKey + 1);
    }, [fact]);

    useEffect(() => {
        getNewFact(); // Initial fact
        
        const intervalId = setInterval(() => {
            getNewFact();
        }, 10000); // Change fact every 10 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <Card className="glass-card w-full max-w-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-accent animate-pulse" />
                    Amazing Tech Fact
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={getNewFact}>
                    <RefreshCw className="h-4 w-4 transition-transform duration-500 hover:rotate-180" />
                </Button>
            </CardHeader>
            <CardContent>
                <p 
                  key={key}
                  className="text-muted-foreground min-h-[60px] flex items-center text-center justify-center fade-in-up"
                  style={{ animationDelay: '0s', animationDuration: '0.5s' }}
                >
                    {fact || "Loading..."}
                </p>
            </CardContent>
        </Card>
    );
}
