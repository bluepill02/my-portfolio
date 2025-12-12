import React, { useEffect, useState } from 'react';
import RepoCard from './RepoCard';
import { fetchRepos } from '../services/github';

const RepoGrid = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRepos = async () => {
            const data = await fetchRepos();

            // Filter logic: Exclude 'CHENN-AI' in favor of 'CHENN-AI02'
            let filtered = data.filter(repo => repo.name !== 'CHENN-AI');

            // Sorting: Pin 'CHENN-AI02' and 'visual_timeline_app' to top if they exist
            filtered.sort((a, b) => {
                const pinned = ['CHENN-AI02', 'visual_timeline_app'];
                const aPinned = pinned.includes(a.name);
                const bPinned = pinned.includes(b.name);

                if (aPinned && !bPinned) return -1;
                if (!aPinned && bPinned) return 1;
                return new Date(b.updated_at) - new Date(a.updated_at);
            });

            setRepos(filtered);
            setLoading(false);
        };

        loadRepos();
    }, []);

    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading specific projects...</div>;

    return (
        <section style={{ padding: '2rem 0' }}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
                What I'm Working On
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {repos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </section>
    );
};

export default RepoGrid;
