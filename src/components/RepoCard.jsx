import React from 'react';

const RepoCard = ({ repo }) => {
    return (
        <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="glass-card" style={{ padding: '1.5rem', height: '100%', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--accent-color)' }}>{repo.name}</h3>
                    <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '12px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                        {repo.visibility || 'Public'}
                    </span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '3rem' }}>
                    {repo.description || 'No description available but code checks out.'}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {repo.language && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }}></span>
                            {repo.language}
                        </span>
                    )}
                    {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
                    {repo.forks_count > 0 && <span>⑂ {repo.forks_count}</span>}
                </div>
            </div>
        </a>
    );
};

export default RepoCard;
