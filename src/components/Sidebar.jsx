import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    { label: 'Dashboard', icone: '📊', rota: '/dashboard' },
    { label: 'Pacientes', icone: '👥', rota: '/pacientes' },
    { label: 'Agenda', icone: '📅', rota: '/agenda' },
    { label: 'Financeiro', icone: '💰', rota: '/financeiro' },
    { label: 'Relatórios', icone: '🤖', rota: '/relatorios' },
  ];

  return (
    <div style={{
      width: '220px',
      minHeight: '100vh',
      backgroundColor: '#1a202c',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 0'
    }}>
      <h2 style={{
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: '32px',
        fontSize: '18px'
      }}>
        🦷 Kuapiz Odonto
      </h2>

      {menu.map((item) => (
        <button
          key={item.rota}
          onClick={() => navigate(item.rota)}
          style={{
            background: 'none',
            border: 'none',
            color: '#a0aec0',
            padding: '12px 24px',
            textAlign: 'left',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d3748'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {item.icone} {item.label}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;