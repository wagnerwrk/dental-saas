import Sidebar from '../components/Sidebar';

function Agenda() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <h1 style={{ color: '#1a202c' }}>📅 Agenda</h1>
        <p style={{ color: '#718096' }}>Consultas agendadas.</p>
      </div>
    </div>
  );
}

export default Agenda;