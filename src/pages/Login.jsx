import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/dashboard');
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f4f8'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        width: '360px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ marginBottom: '4px', color: '#1a202c' }}>🦷 Dental SaaS</h2>
        <p style={{ marginBottom: '24px', color: '#718096', fontSize: '14px' }}>
          Faça login para continuar
        </p>

        <input
          type="email"
          placeholder="E-mail"
          style={{
            width: '100%',
            padding: '10px 12px',
            marginBottom: '12px',
            borderRadius: '8px',
            border: '1px solid #cbd5e0',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          style={{
            width: '100%',
            padding: '10px 12px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #cbd5e0',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3182ce',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
          Entrar
        </button>

        <p style={{ marginTop: '16px', fontSize: '12px', color: '#a0aec0' }}>
          Esqueceu a senha? <span style={{ color: '#3182ce', cursor: 'pointer' }}>Clique aqui</span>
        </p>
      </div>
    </div>
  );
}

export default Login;