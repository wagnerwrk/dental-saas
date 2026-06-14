import { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Agenda() {
  const [consultas, setConsultas] = useState([
    { id: 1, paciente: 'Ana Silva', data: '16/06/2026', hora: '09:00', procedimento: 'Limpeza', status: 'Agendado' },
    { id: 2, paciente: 'Carlos Souza', data: '16/06/2026', hora: '10:30', procedimento: 'Extração', status: 'Agendado' },
    { id: 3, paciente: 'Fernanda Lima', data: '17/06/2026', hora: '14:00', procedimento: 'Clareamento', status: 'Realizado' },
  ]);

  const [form, setForm] = useState({ paciente: '', data: '', hora: '', procedimento: '' });
  const [mostrarForm, setMostrarForm] = useState(false);

  function handleAgendar() {
    if (!form.paciente || !form.data || !form.hora || !form.procedimento) return;
    const nova = {
      id: consultas.length + 1,
      paciente: form.paciente,
      data: form.data,
      hora: form.hora,
      procedimento: form.procedimento,
      status: 'Agendado'
    };
    setConsultas([...consultas, nova]);
    setForm({ paciente: '', data: '', hora: '', procedimento: '' });
    setMostrarForm(false);
  }

  function getStatusCor(status) {
    return status === 'Realizado' ? '#38a169' : '#d69e2e';
  }

  function formatarData(data) {
  if (!data) return '—';
  if (data.includes('/')) return data;
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h1 style={{ color: '#1a202c', marginBottom: '4px' }}>📅 Agenda</h1>
            <p style={{ color: '#718096' }}>Gerencie as consultas da clínica</p>
          </div>
          <button
            onClick={() => setMostrarForm(!mostrarForm)}
            style={{
              backgroundColor: '#3182ce',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
            + Nova Consulta
          </button>
        </div>

        {mostrarForm && (
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ marginBottom: '16px', color: '#1a202c' }}>Agendar Nova Consulta</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <input
                placeholder="Nome do paciente"
                value={form.paciente}
                onChange={e => setForm({ ...form, paciente: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
              <input
                type="date"
                value={form.data}
                onChange={e => setForm({ ...form, data: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
              <input
                type="time"
                value={form.hora}
                onChange={e => setForm({ ...form, hora: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
              <input
                placeholder="Procedimento"
                value={form.procedimento}
                onChange={e => setForm({ ...form, procedimento: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
            </div>
            <button
              onClick={handleAgendar}
              style={{
                backgroundColor: '#38a169',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 24px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              Salvar Consulta
            </button>
          </div>
        )}

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7fafc' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>#</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Paciente</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Data</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Hora</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Procedimento</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((c, index) => (
                <tr key={c.id} style={{ borderTop: '1px solid #edf2f7', backgroundColor: index % 2 === 0 ? '#fff' : '#f7fafc' }}>
                  <td style={{ padding: '14px 20px', color: '#a0aec0', fontSize: '13px' }}>{c.id}</td>
                  <td style={{ padding: '14px 20px', color: '#1a202c', fontWeight: '500' }}>{c.paciente}</td>
                  <td style={{ padding: '14px 20px', color: '#4a5568' }}>{formatarData(c.data)}</td>
                  <td style={{ padding: '14px 20px', color: '#4a5568' }}>{c.hora}</td>
                  <td style={{ padding: '14px 20px', color: '#4a5568' }}>{c.procedimento}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{
                      backgroundColor: getStatusCor(c.status),
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Agenda;