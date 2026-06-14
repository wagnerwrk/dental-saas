import Sidebar from '../components/Sidebar';

function Dashboard() {
  const cards = [
    { titulo: 'Pacientes do Mês', valor: '32', icone: '👥', cor: '#3182ce' },
    { titulo: 'Faturamento', valor: 'R$ 12.400', icone: '💰', cor: '#38a169' },
    { titulo: 'Consultas Agendadas', valor: '18', icone: '📅', cor: '#d69e2e' },
    { titulo: 'Consultas Realizadas', valor: '14', icone: '✅', cor: '#805ad5' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <h1 style={{ color: '#1a202c', marginBottom: '8px' }}>Bem-vindo</h1>
        <p style={{ color: '#718096', marginBottom: '32px' }}>Painel da Clínica — Junho 2026</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {cards.map((card) => (
            <div key={card.titulo} style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              borderLeft: `4px solid ${card.cor}`
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{card.icone}</div>
              <p style={{ color: '#718096', fontSize: '13px', marginBottom: '4px' }}>{card.titulo}</p>
              <h2 style={{ color: '#1a202c', fontSize: '24px', margin: 0 }}>{card.valor}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;