import Sidebar from "./components/sidebar/sidebar";
import Dashboard from "./components/dashboard/dashboard";
import Head from 'next/head';

export default function Home() {
  return (
      <div className='row'>
        <Sidebar/>
        <Dashboard />
      </div>
  );
}
