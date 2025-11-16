import { useEffect, useState } from 'react';
import './App.css'
import { Auth } from './components/auth'
import TaskManager from './components/task-manager'
import { supabase } from './supabase-client';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any>( null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchSession();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    }
    setSession(null);
    alert('Logged out successfully!');
  }

  return (
    <>
      {session ? (
        <>
          <button onClick={() => handleLogout()}>Logout</button>
          <TaskManager />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App
