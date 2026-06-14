import Sidebar from '../components/Sidebar';

function Financeiro() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <h1 style={{ color: '#1a202c' }}>💰 Financeiro</h1>
        <p style={{ color: '#718096' }}>Receitas e despesas da clínica.</p>
      </div>
    </div>
  );
}

export default Financeiro;