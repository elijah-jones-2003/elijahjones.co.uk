import Pi from './components/Pi';
import './App.css';

function App() {
  return (
    <main className="workbench">
      
      {/* Centered Pi Component */}
      <div className="pi-wrapper">
        <Pi />
      </div>

      {/* Optional: Add a small "footer" hint */}
      <p style={{ 
        position: 'absolute', 
        bottom: '20px', 
        color: 'rgba(255,255,255,0.3)', 
        fontSize: '12px',
        zIndex: 5 
      }}>
        Click components to explore
      </p>
    </main>
  );
}

export default App;