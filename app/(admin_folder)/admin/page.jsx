
import Link from 'next/link';
import AdminForm from './AdminForm';
import LogoutBtn from '../../components/LogoutBtn';
import AdminTab from '@/app/components/AdminTab';



export default function AdminPage() {


  return (
    <>

      <div className='m-2'></div>
      <AdminForm />
      <AdminTab />
    </>
  );
}
