import { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Financeiro() {
  const [lancamentos, setLancamentos] = useState([
    { id: 1, descricao: 'Consulta Ana Silva', tipo: 'Receita', valor: 350.00, data: '02/06/2026' },
    { id: 2, descricao: 'Compra de materiais', tipo: 'Despesa', valor: 280.00, data: '05/06/2026' },
    { id: 3, descricao: 'Consulta Carlos Souza', tipo: 'Receita', valor: 500.00, data: '10/06/2026' },
    { id: 4, descricao: 'Aluguel do consultório', tipo: 'Despesa', valor: 1200.00, data: '10/06/2026' },
    { id: 5, descricao: 'Consulta Fernanda Lima', tipo: 'Receita', valor: 800.00, data: '12/06/2026' },
  ]);

  const [form, setForm] = useState({ descricao: '', tipo: 'Receita', valor: '', data: '' });
  const [mostrarForm, setMostrarForm] = useState(false);

  function handleLancar() {
    if (!form.descricao || !form.valor || !form.data) return;
    const novo = {
      id: lancamentos.length + 1,
      descricao: form.descricao,
      tipo: form.tipo,
      valor: parseFloat(form.valor),
      data: formatarData(form.data)
    };
    setLancamentos([...lancamentos, novo]);
    setForm({ descricao: '', tipo: 'Receita', valor: '', data: '' });
    setMostrarForm(false);
  }

  function formatarData(data) {
    if (!data) return '—';
    if (data.includes('/')) return data;
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const totalReceitas = lancamentos
    .filter(l => l.tipo === 'Receita')
    .reduce((acc, l) => acc + l.valor, 0);

  const totalDespesas = lancamentos
    .filter(l => l.tipo === 'Despesa')
    .reduce((acc, l) => acc + l.valor, 0);

  const saldo = totalReceitas - totalDespesas;

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h1 style={{ color: '#1a202c', marginBottom: '4px' }}>💰 Financeiro</h1>
            <p style={{ color: '#718096' }}>Receitas e despesas da clínica</p>
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
            + Novo Lançamento
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', borderLeft: '4px solid #38a169' }}>
            <p style={{ color: '#718096', fontSize: '13px', marginBottom: '4px' }}>Total Receitas</p>
            <h2 style={{ color: '#38a169', margin: 0 }}>{formatarValor(totalReceitas)}</h2>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', borderLeft: '4px solid #e53e3e' }}>
            <p style={{ color: '#718096', fontSize: '13px', marginBottom: '4px' }}>Total Despesas</p>
            <h2 style={{ color: '#e53e3e', margin: 0 }}>{formatarValor(totalDespesas)}</h2>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', borderLeft: `4px solid ${saldo >= 0 ? '#3182ce' : '#e53e3e'}` }}>
            <p style={{ color: '#718096', fontSize: '13px', marginBottom: '4px' }}>Saldo do Mês</p>
            <h2 style={{ color: saldo >= 0 ? '#3182ce' : '#e53e3e', margin: 0 }}>{formatarValor(saldo)}</h2>
          </div>
        </div>

        {mostrarForm && (
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '24px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ marginBottom: '16px', color: '#1a202c' }}>Novo Lançamento</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <input
                placeholder="Descrição"
                value={form.descricao}
                onChange={e => setForm({ ...form, descricao: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
              <select
                value={form.tipo}
                onChange={e => setForm({ ...form, tipo: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}>
                <option value="Receita">Receita</option>
                <option value="Despesa">Despesa</option>
              </select>
              <input
                type="number"
                placeholder="Valor (R$)"
                value={form.valor}
                onChange={e => setForm({ ...form, valor: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
              <input
                type="date"
                value={form.data}
                onChange={e => setForm({ ...form, data: e.target.value })}
                style={{ padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '14px' }}
              />
            </div>
            <button
              onClick={handleLancar}
              style={{
                backgroundColor: '#38a169',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 24px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
              Salvar Lançamento
            </button>
          </div>
        )}

        <div style={{ backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7fafc' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>#</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Descrição</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Tipo</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Valor</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', color: '#4a5568', fontSize: '13px' }}>Data</th>
              </tr>
            </thead>
            <tbody>
              {lancamentos.map((l, index) => (
                <tr key={l.id} style={{ borderTop: '1px solid #edf2f7', backgroundColor: index % 2 === 0 ? '#fff' : '#f7fafc' }}>
                  <td style={{ padding: '14px 20px', color: '#a0aec0', fontSize: '13px' }}>{l.id}</td>
                  <td style={{ padding: '14px 20px', color: '#1a202c', fontWeight: '500' }}>{l.descricao}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{
                      backgroundColor: l.tipo === 'Receita' ? '#38a169' : '#e53e3e',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {l.tipo}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px', color: l.tipo === 'Receita' ? '#38a169' : '#e53e3e', fontWeight: '500' }}>
                    {formatarValor(l.valor)}
                  </td>
                  <td style={{ padding: '14px 20px', color: '#4a5568' }}>{l.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Financeiro;