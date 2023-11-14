import { useState } from 'react';
import { FollowCard } from './FollowCard';

export function App() {

    const users = [{
        name: 'Martín Gomez',
        username: 'martingomez092',
        isFollowing: true
    },
    {
        name: 'Bootstrap',
        username: 'twbs',
        isFollowing: false
    }, {
        name: 'Tailwind CSS',
        username: 'tailwindcss',
        isFollowing: false
    }]
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { username, name, isFollowing } = user;
                    return (
                        <FollowCard username={username} initialIsFollowing={isFollowing} key={username}>
                            {name}
                        </FollowCard>
                    )
                })
            }
        </section>

    )
}