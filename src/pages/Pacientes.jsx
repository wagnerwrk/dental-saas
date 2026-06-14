import { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Pacientes() {
  const [pacientes, setPacientes] = useState([
    { id: 1, nome: 'Ana Silva', telefone: '(47) 99999-1111', email: 'ana@email.com', ultimaConsulta: '02/06/2026' },
    { id: 2, nome: 'Carlos Souza', telefone: '(47) 98888-2222', email: 'carlos@email.com', ultimaConsulta: '10/06/2026' },
    { id: 3, nome: 'Fernanda Lima', telefone: '(47) 97777-3333', email: 'fernanda@email.com', ultimaConsulta: '12/06/2026' },
  ]);

  const [form, setForm] = useState({ nome: '', telefone: '', email: '' });
  const [mostrarForm, setMostrarForm] = useState(false);

  function handleCadastrar() {
    if (!form.nome || !form.telefone || !form.email) return;
    const novo = {
      id: pacientes.length + 1,
      nome: form.nome,
      telefone: form.telefone,
      email: form.email,
      ultimaConsulta: '—'
    };
    setPacientes([...pacientes, novo]);
    setForm({ nome: '', telefone: '', email: '' });
    setMostrarForm(false);
  }

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h1 style={{ color: '#1a202c', marginBottom: '4px' }}>👥 Pacientes</h1>
            <p style={{ color: '#718096' }}>Gerencie os pacientes da clínica</p>
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
            + Novo Paciente
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
            <h3 style={{ marginBottom: '16px', color: '#1a202c' }}>Cadastrar Novo Paciente</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <input
                placeholder="Nome completo"
                value={form.nome}
                onChange={e => setForm({ ...form, nome: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
              <input
                placeholder="Telefone"
                value={form.telefone}
                onChange={e => setForm({ ...form, telefone: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
              <input
                placeholder="E-mail"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
            </div>
            <button
              onClick={handleCadastrar}
              style={{
                backgroundColor: '#38a169',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 24px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              Salvar Paciente
            </button>
          </div>
        )}

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7fafc' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>#</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Nome</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Telefone</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>E-mail</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Última Consulta</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((p, index) => (
                <tr key={p.id} style={{ borderTop: '1px solid #edf2f7', backgroundColor: index % 2 === 0 ? '#fff' : '#f7fafc' }}>
                  <td style={{ padding: '14px 20px', color: '#a0aec0', fontSize: '13px' }}>{p.id}</td>
                  <td style={{ padding: '14px 20px', color: '#1a202c', fontWeight: '500' }}>{p.nome}</td>
                  <td style={{ padding: '14px 20px', color: '#4a5568' }}>{p.telefone}</td>
                  <td style={{ padding: '14px 20px', color: '#4a5568' }}>{p.email}</td>
                  <td style={{ padding: '14px 20px', color: '#4a5568' }}>{p.ultimaConsulta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Pacientes;