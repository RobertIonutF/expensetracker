import React from 'react'
import Hero from '../components/Hero'

import Features from '../components/Features'
import Newsletter from '../components/Newsletter'
import Pricing from '../components/Pricing'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

  return (
        // Hero Section && Grid with 4 Cards && Footer
        <div>
            <Hero 
            title="Expense Tracker" 
            description="Track your expenses easily and effectively." 
            image="/images/hero-bg.jpg" 
            buttonLabel="Get Started" 
            onButtonClick={() => {
                navigate('/login')
            }}
            />

            <Features 
            title = "Easy to Use"
            description = "Our app is easy to use with a modern and intuitive design."
            />

            <Pricing />

            <Newsletter />
        </div>
    )
}

export default Home