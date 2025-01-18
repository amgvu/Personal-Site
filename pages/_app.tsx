import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app'
import LoadingSpinner from '../components/LoadingSpinner';


export default function App({ Component, pageProps }: AppProps) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <Component {...pageProps} />
            )}
        </main>
    );
}
