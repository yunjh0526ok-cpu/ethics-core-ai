import React from 'react';

export default function App() {
  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#22d3ee', fontSize: '48px', marginBottom: '10px' }}>Ethics-Core AI</h1>
      <p style={{ color: '#94a3b8', fontSize: '20px', marginBottom: '40px' }}>청렴공정연구센터 주양순 대표</p>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://gemini.google.com/share/1908208fb5d3" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 30px', backgroundColor: '#22d3ee', color: '#050a15', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
          공공재정환수법 상담소 입장 →
        </a>
        <a href="https://genuineform-romelia88280.preview.softr.app/?autoUser=true&show-toolbar=true" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 30px', border: '1px solid #94a3b8', color: 'white', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none' }}>
          강의 의뢰 및 문의하기
        </a>
      </div>
      
      <div style={{ marginTop: '60px', color: '#475569', fontSize: '14px' }}>
        <p>yszoo1467@naver.com</p>
        <p>© 2026 청렴공정연구센터. All rights reserved.</p>
      </div>
    </div>
  );
}